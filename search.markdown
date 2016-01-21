---
layout: default
---


<h1>Search</h1>
<div id="search-form">
    <form action="/search" method="get">
        <input type="text" id="search-query" name="q" placeholder="Search" autocomplete="off">
    </form>
</div>


<section id="search-results" style="display: none;">
    <p>Search results</p>
    <div class="entries">
    </div>
</section>


{% raw %}
<script id="search-results-template" type="text/mustache">
  {{#entries}}
    <article>
      <h3>
        {{#date}}<small><time datetime="{{pubdate}}" pubdate>{{displaydate}}</time></small>{{/date}}
        <a href="{{url}}">{{title}}</a>
      </h3>
    </article>
  {{/entries}}
</script>
{% endraw %}

<script src="/js/search.min.js" type="text/javascript" charset="utf-8"></script>

<script type="text/javascript">
    $(function() {
        $('#search-query').lunrSearch({
            indexUrl: '/js/index.json',             // URL of the `search.json` index data for your site
            results:  '#search-results',          // jQuery selector for the search results container
            entries:  '.entries',                 // jQuery selector for the element to contain the results list, must be a child of the results element above.
            template: '#search-results-template'  // jQuery selector for the Mustache.js template
        });
    });
</script>
