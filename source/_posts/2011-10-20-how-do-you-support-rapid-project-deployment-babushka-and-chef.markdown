---
layout: post
title: "How Do You Support Rapid Project Deployment? Babushka and Chef"
date: 2011-10-20 20:38
comments: true
categories: babushka chef deployment servers 
---

*How do I rapidly support web infrastructure for many sites at a time?* At the UW center for commercialization there are lots and lots of projects to work on. The mission is encouraging new companies, and each one needs a website.Wwe need to spin up sites and servers rapidly, and provide each project with a standard environment and good base system. While we have had success with VMWare CloudFoundry for simple sites, for others we need to have an environment that supports SSL and other more customizable configuration options. The challenge is how to do this process well, and make it easily repeatable
 
Enter [Babushka](http://babushka.me/) and [Chef](http://www.opscode.com/chef/). Actually, they should have called Babushka "sous-chef", because it's helpful to get ready for Chef. 

