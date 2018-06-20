#!/bin/bash


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


echo "One-time setup complete!"
