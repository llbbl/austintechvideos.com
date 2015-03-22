# Austintechvideos.com Website
===========================

This is the current version of the ATV website. We used to be on wordpress, but transitioned over to Jekyll to make it 
easier for everyone to contribute. If you have videos you would like to be posted to the site all you need to do is 
submit a pull request!

## Interested in Contributing?

Things we could use help with:
* CSS improvements
  * The search and navigation sytling
  * Getting rid of the red text
  * Making the smaller logo work responsively
* Need to add Pagination on the main page and long category pages
* Help screening the videos that need to be posted and generating the markdown files
* Get Disqus working so we have comments again
* Support for Vimeo
* *Most importantly we are looking for people interested in recording the local meetups!*


## About The Site
### Jekyll
* The install instructions for Jekyll can be found here: [installing jekyll](http://jekyllrb.com/docs/installation/)

However ... on a clean Ubuntu here is how to install it:

``` 
apt-get install ruby ruby1.9.1-full make nodejs
gem install jekyll
```  

### Category Plugin
* We are using recurser's plugin to generate the categories. It is one part of a set of plugins that they have created.
 [Jekyll (Category) Plugins](https://github.com/recurser/jekyll-plugins)
* It requires the octopress filters plugin.
 [octopress_filters.rb](https://github.com/recurser/jekyll-plugins/blob/master/_plugins/octopress_filters.rb)

### Lunr JS (Search) Plugin
* We are using LunrJS to power the search feature. There is a Jekyll plugin for LunrJS that is pretty easy to use! 
[jekyll-lunr-js-search](https://github.com/slashdotdash/jekyll-lunr-js-search)
* It has a few requirements. You must install two gems "json" and "nokogiri". This must be done before search will 
work. Installed via this command: ```gem install nokogiri json```

### Using Bower and Grunt with AustinTechVideos
* Need an example of recursion? See JavaScript Package Managers. For better or worse, we are using a
combination of 3 different ones to allow us to install jquery, fitvids and bootstrap. I think
the idea is to make upgrading JS packages easier and let us have access to all the shiny toys.

#### Step 1) Install Grunt CLI

This will put the grunt command in your system path, allowing it to be run from any directory. 
Grunt needs multiple parts to run and we have to install it globally before doing anything else.
You may need to run this with sudo. 

```
npm install -g grunt-cli
```


#### Step 2) Change to Repo Directory and Run NPM

package.json - Defines what npm packages to install. This will setup bower and grunt and a few other things

```
npm install
```

#### Step 3) Download Packages with Bower

bower.json - Defines what bower packages to install. 

```
bower install 
```

#### Step 4) Copy files with Grunt

Gruntfile.js - The main grunt configuration file. Tells grunt what to do. In our case just copy 
the stuff we just downloaded with bower into the right spots. 

```
gulp
```

--- Here it is all together ---

```
npm install -g grunt-cli && npm install && bower install && gulp
```


### License
See the [LICENSE](LICENSE.md) file (MIT)
