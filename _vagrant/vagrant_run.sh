#!/bin/bash

export WWW_BASE="/var/www/vagrant"


# Initialize
cd $WWW_BASE
yarn
yarn grunt less copy


# Run Jekyll
pkill -f jekyll
jekyll serve --host 0.0.0.0 --port 80 --force_polling --detach


echo "Server now live on port 80!"
