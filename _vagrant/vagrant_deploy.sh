#!/bin/bash

export WWW_BASE="/var/www/vagrant"


# NodeJS
curl -sL https://deb.nodesource.com/setup_8.x | bash -
apt-get install -y nodejs


# Yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
apt-get update && apt-get install yarn


# Ruby & Jekyll
apt-get install -y ruby ruby-dev build-essential zlib1g-dev
gem install bundler jekyll nokogiri json jekyll-lunr-js-search --no-document


# Initialize
cd $WWW_BASE
yarn
yarn grunt less copy

# Run Jekyll
jekyll serve --host 0.0.0.0 --port 80 --detach

echo "One-time setup complete! Server now live on port 80!"
