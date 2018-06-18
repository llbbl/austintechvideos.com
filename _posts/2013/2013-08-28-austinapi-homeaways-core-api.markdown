---
layout: post
title: HomeAway's Core API
categories:
- AustinAPI
tags:
- api
- homeaway
videoid: oSuovmhkL38
---

<p>
HomeAway has acquired 18+ companies in a very short amount of time, and we've got a large number of legacy systems with complex integrations to show for it.  Many of the applications we've acquired were not architected for the scale of our global marketplace.  We rely on a number of applications that are not well-tiered and are coupled to critical databases in unfortunate ways.  Over time, the strategy is to replace all of these systems and fix the architectural flaws, but it's a multi-year effort and we needed to be able to build new applications on the existing infrastructure in the meantime without perpetuating the problems.  Our solution was to build a comprehensive REST API as a façade to our legacy infrastructure, giving application developers a clean, simple interface to build against, and allowing new systems to coexist with the old on the same platform while we work through the re-architecture at the bottom layers of our system.  18 months into the project, virtually all application development is being done against our REST API, doing almost 100 million API calls a day and growing.
</p>


<p>08.28.2013 - <a href="http://www.meetup.com/Austin-Homegrown-API/events/121734392/">meetup</a>
<p/>