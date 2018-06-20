<?php

$c = 'AustinPHP';

$v = 'YFf0QKYpt5Y';
$u = 'https://www.meetup.com/austinphp/events/236856330/';
$d = 'Thursday, March 9, 2017';
$t = 'Architecture and Design Principles';

$e = <<<MEETUP_DESC

At Magento we spend a lot of time thinking about the architecture of our platform. We make our product easy to understand, extend, and customize. The main parts of good architecture include design of the public interfaces, design of the classes and relations between classes. In this talk, we will cover the following design principles used in Magento:

- Object decomposition
- Design flaws (e.g. work in constructor, temporal coupling, visibility of class methods/properties, etc.)
- Code reuse: inheritance vs composition
- Static methods
- Object state
- And more.

MEETUP_DESC;



# --------------- #



$category = $c;
$description = trim($e);
$date = (new DateTimeImmutable($d, new DateTimeZone('UTC')));

$title = $t;
$videoId = $v;
$slug = preg_replace(['#\'s#', '#[^a-z0-9]+#'], ['s', '-'], strtolower($c . ' ' . $title));

$file = __DIR__ . '/../_posts/' . $date->format('Y/Y-m-d') . '-' . $slug . '.markdown';
$output = <<<MARKDOWN
---
layout: post
title: "$title"
categories:
- "$category"
tags:
- PHP
videoid: $videoId
---

$description

[Meetup]($u)

MARKDOWN;


if (file_exists($file)) {
    throw new RuntimeException('File exists, preventing overwrite.');
}

file_put_contents($file, $output);
