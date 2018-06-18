# Austintechvideos.com Website
===========================


This is the current version of the ATV website. We used to be on wordpress, but transitioned over to Jekyll to make it 
easier for everyone to contribute. If you have videos you would like to be posted to the site all you need to do is 
submit a pull request! Upgraded everything so it is working with more current versions of things, Jekyll 3 and Ruby 2.2.x. 

## Interested in Contributing?

Things we could use help with:
* CSS improvements
  * The search and navigation styling
* Need to add Pagination on the main page and long category pages
* Help screening the videos that need to be posted and generating the markdown files
* Get Disqus working so we have comments again
* Support for Vimeo
* *Most importantly we are looking for people interested in recording the local meetups!*

We are using Trello for easy task tracking. [AustinTechVideos on Trello](https://trello.com/austintechvideos)


## About The Site

### Vagrant

All site dependencies are managed from within vagrant. Once you have installed Vagrant and VirtualBox simply run

```bash
vagrant up
```

This will install:
* [NodeJS](https://nodejs.org)
* [Yarn](https://yarnpkg.com)
* [Ruby](https://www.ruby-lang.org)
* [Jekyll](https://jekyllrb.com/)
  * [Lunr JS (Search) Plugin](https://github.com/slashdotdash/jekyll-lunr-js-search)


#### Category Plugin
* We are using recurser's plugin to generate the categories. It is one part of a set of plugins that they have created.
 [Jekyll (Category) Plugins](https://github.com/recurser/jekyll-plugins)
* It requires the octopress filters plugin.
 [octopress_filters.rb](https://github.com/recurser/jekyll-plugins/blob/master/_plugins/octopress_filters.rb)


### Building The Site

```
vagrant ssh
cd /vagrant
jekyll build
```


### License
See the [LICENSE](LICENSE.md) file (MIT)
