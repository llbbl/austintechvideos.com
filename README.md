# Austintechvideos.com Website
===========================

This is the current version of the ATV website. We used to be on wordpress, but transitioned over to Jekyll to make it easier for everyone to contribute. If you have videos you would like to be posted to the site all you need to do is submit a pull request!

## Interested in Contributing?

Things we could use help with:
* CSS improvements
  * The search and navigation sytling
  * Getting rid of the red text
  * Making the smaller logo work responsively
* Help screening the videos that need to be posted and generating the markdown files
* Most importantly we are looking for people interested in recording the local meetups!


## About The Site
### Jekyll
* The install instructions for Jekyll can be found here: [installing jekyll](http://jekyllrb.com/docs/installation/)

### Category Plugin
* We are using recurser's plugin to generate the categories. It is one part of a set of plugins that they have created. [Jekyll (Category) Plugins](https://github.com/recurser/jekyll-plugins)
* It requires the octopress filters plugin. [octopress_filters.rb](https://github.com/recurser/jekyll-plugins/blob/master/_plugins/octopress_filters.rb)

### Jekyll Lunr JS (Search) Plugin
* We are using LunrJS to power the search feature. There is a Jekyll plugin for LunrJS that is pretty easy to use! [jekyll-lunr-js-search](https://github.com/slashdotdash/jekyll-lunr-js-search)
* It has a few requirements. You must install two gems "json" and "nokogiri". This must be done before search will work. Installed via this command: ```gem install nokogiri json```


