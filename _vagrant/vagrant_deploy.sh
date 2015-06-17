#!/bin/bash

export DEBIAN_FRONTEND=noninteractive

export app_base=/var/www
export www_base=$app_base/vagrant

# Add Vagrant user to the sudoers group
echo 'vagrant ALL=(ALL) ALL' >> /etc/sudoers

# Set up swap partition
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo "/swapfile   none    swap    sw    0   0" >> /etc/fstab

# Set up easy repo management
apt-get -q -y install software-properties-common python-software-properties
apt-get update

# Install required packages
apt-get -q -y install vim git ruby ruby1.9.1-full make nodejs npm
apt-get autoremove

# Set Node.js bin alias
ln -s /usr/bin/nodejs /usr/bin/node

# Install Jekyll and Dependencies
gem install jekyll nokogiri json --no-rdoc --no-ri

# Install Node.js and Services
cd $www_base
npm install -g grunt-cli bower
npm install --no-bin-links

# Initialize Bower
bower install --allow-root

# Run Grunt
grunt

# Trigger mlocate reindex.
updatedb

# Enable firewall exception for port 4000
ufw allow 4000

# Run Jekyll
jekyll serve --host 0.0.0.0 --port 80 --detach

echo "One-time setup complete! Server now live on port 4000!"