/**
 * Created by logan on 6/29/14.
 */
(function()
{
    var elements = {}, search = "", selectedcategory = "*", selectedpost = null, bottom_of_window = 0;

    $(function()
    {
        elements = {
            body: $("body"),
            pagewrapper: $("#pagewrapper"),
            inputsearch: $("#inputsearch"),
            categories: $("#categories"),
            'dropdown-toggle': $(".dropdown-toggle")
        };

        elements["dropdown-toggle"].click(function()
        {
            var menu = $(this).parent().find(".dropdown-menu");
            if (menu.is(":visible")) menu.slideUp();
            else menu.slideDown();
        });

        $(document).on("keyup input", elements.inputsearch, function()
        {
            selectedpost = null;
            search = $.trim(elements.inputsearch.val()).toLowerCase();
            renderPostcards();
        });

        $(document).on("click", ".categorylink", function()
        {
            selectedcategory = $(this).attr("category");
            selectedpost = null;
            renderPostcards();
        });

        $(document).on("click", ".posttitle, .postcontent", function()
        {
            var postcard = $(this).closest(".postcard");
            selectedpost = getPostby("videoid", postcard.attr("videoid"));
            renderPostcards();
        });

        var stub = document.URL.split("/")[3];
        if (stub != "") selectedpost = getPostby('stub', stub);

        setResponsiveStyles();
        $(window).resize(setResponsiveStyles);
        renderCategories();
        renderPostcards();
        $(window).scroll(loadOnScroll);
    });

    function loadOnScroll()
    {
        bottom_of_window = $(window).scrollTop() + $(window).height();
        $(".postcontent").each(function()
        {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            if( bottom_of_window > bottom_of_object )
            {
                var iframe = $(this).find("iframe");
                if (iframe.attr("src") == "") iframe.attr("src", iframe.attr("data-src"));
                var img = $(this).find("img");
                if (img.attr("src") == "") img.attr("src", img.attr("data-src"));
            }
        });
    }

    function setResponsiveStyles()
    {
        elements.body.removeClass("width-sm").removeClass("width-md").removeClass("width-lg");
        var width = $(window).width();
        if (width < 641) elements.body.addClass("width-sm");
        else if (width < 981) elements.body.addClass("width-md");
        else elements.body.addClass("width-lg");
        var postcontent = $(".postcontent");
        postcontent.height(postcontent.width() * 0.5625);
        $("iframe").attr("height", postcontent.height());
    }

    function renderPostcards()
    {
        var html = "";
        for (var p in posts)
        {
            if (!posts.hasOwnProperty(p)) continue;
            var post = posts[p];
            if (selectedcategory != "*"
                && post.category != selectedcategory ) continue;
            if ( search != ""
                && post.title.toLowerCase().indexOf(search) == -1
                && post.description.toLowerCase().indexOf(search) == -1
                && post.category.toLowerCase().indexOf(search) == -1 ) continue;
            if (selectedpost !== null && selectedpost.videoid != post.videoid) continue;
            html += "<div class='postcard' videoid='" + post.videoid + "'>";
            html += "   <div class='posttitle'>" + post.title + "</div>";
            html += "   <div class='postcategory' category=\"" + post.category + "\">" + post.category + "</div>";
            html += "   <div class='posttimestamp'>" + moment(post.stamp).format("MMM D, YYYY") + "</div>";
            html += "   <div class='postcontent'>";
            html += "       <div class='youtube-thumbnail'>";
            html += "           <img class='thumbnail-img' src='' data-src='http://img.youtube.com/vi/" + post.videoid + "/0.jpg' />";
            html += "           <iframe width='100%' height='100%' src='' data-src='//www.youtube.com/embed/" + post.videoid + "?rel=0' frameborder='0' allowfullscreen></iframe>";
            html += "       </div>";
            html += "   </div>";
            html += "   <div class='postdescription'>" + post.description + "</div>";
            html += "</div>";
        }
        elements.pagewrapper.html(html);
        loadOnScroll();
        $("#categories li").removeClass("active");
        $("#categories li[category=\"" + selectedcategory + "\"]").addClass("active");

        if (selectedpost !== null)
        {
            var postcard = $(".postcard");
            var postcontent = postcard.find(".postcontent");
            var iframe = postcontent.find("iframe");
            postcard.addClass("full");
            postcontent.height(postcontent.width() * 0.5625);
            iframe.attr("height", postcontent.height()).attr("src", iframe.attr("data-src"));
            postcard.append("<div id='disqus_container'/>");
            disqus_url = thisdomain + "/" + selectedpost.stub;
            disqus_identifier = disqus_url;
            disqus_title = selectedpost.title;
            disqus_init();
            window.history.pushState({}, "", "/" + selectedpost.stub);
        } else window.history.pushState({}, "", "/");

    }

    function renderCategories()
    {
        var categories = {};
        for (var p in posts)
        {
            if (!posts.hasOwnProperty(p)) continue;
            var post = posts[p];
            if (typeof categories[post.category] == 'undefined') categories[post.category] = 1;
            else categories[post.category]++;
        }
        var html = "";
        html += "<li class='categorylink' category='*'>All Videos</li>";
        for (var c in categories)
        {
            if (!categories.hasOwnProperty(c)) continue;
            var category = categories[c];
            html += "<li class='categorylink' category=\"" + c + "\">" + c + "</li>";
        }
        elements.categories.html(html);
    }

    function getPostby(key, value)
    {
        for (var p in posts)
        {
            if (!posts.hasOwnProperty(p)) continue;
            var post = posts[p];
            if (post[key] == value) return post;
        }
        return null;
    }

})();

var thisdomain = 'http://www.austintechvideos.com';
var disqus_shortname = 'austintechvideos';
var disqus_container_id = 'disqus_container';
var disqus_domain = 'disqus.com';
var disqus_url, disqus_identifier, disqus_title;

function disqus_init()
{
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
}