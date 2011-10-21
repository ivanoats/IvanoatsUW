---
layout: post
title: "How Do You Do Rapid Project Deploys? Babushka and Chef!"
date: 2011-10-20 20:38
comments: true
categories: babushka chef deployment servers 
---

<img style="float:left; margin: 0 15px 10px 0; height: 100px" src="http://www.opscode.com/images/OC_Chef_Logo.png" />
### How do I support web infrastructure for many sites at a time? ###

At the [UW center for commercialization](http://depts.washington.edu/uwc4c) there are lots and lots of projects to work on. The mission is encouraging new companies, and each one may need a website. We need to spin up sites and servers rapidly, and provide each project with a standard environment and good base system. While we have had success with hosting multiple sites on a [VMWare CloudFoundry](http://cloudfoundry.org/) server for simple sites, for others we need to have an environment that supports SSL and other more uniquely customizable configuration options. The challenge is how to do this process well, and make it easily repeatable.
 
<img style="float:right; margin: 0 0 10px 15px; height: 100px" src="http://babushka.me/images/babushka-logo.png" />
Enter [Babushka](http://babushka.me/) and [Chef](http://www.opscode.com/chef/). Actually, [Ben Hoskings](http://benhoskin.gs/) should have called Babushka "sous-chef", because it's extremely helpful to use, to get ready for Chef. Even better, it can also help set up your workstations, such as your mac, as well as your servers.

Quoting Ben about Babushka vs. Chef (or Puppet): 
<blockquote>
  I think they're both great tools, and I see babushka as being complementary 
to them. In particular, I think their strengths are complementary. 
You can discover babushka and be running deps after a single shell command, 
whereas chef and puppet have much steeper learning curves. But then, 
babushka has a fairly rigid ceiling (i.e. a single system), and on its own, 
it doesn't scale at all. That was a deliberate design decision on my 
part—chef and puppet are already doing a good job at the job they're 
intended for, which I see as managing ecosystems of machines. Babushka is 
much more focused on the small end of the scale; in fact, one of the things 
I've tried to keep in mind while designing it has been "no job too small". 
<br><br>
Also, and perhaps more importantly, I'm not designing babushka specifically 
as a deployment automation tool; I'm thinking more generally than that. One 
example: things like installing TextMate bundles, configuring OS X/Linux 
preferences, and the like. Things where you can say "I do it this way—you 
might like it, run my dep and give it a go."
</blockquote>
It was especially helpful to discover [Ivan Vanderbyl](http://ivanvanderbyl.github.com/)'s article on [Bootstrapping Chef with Babushka](http://ivanvanderbyl.github.com/2011/05/28/bootstrapping-chef-with-babushka.html). His scripts needed an update for Ubuntu Oneiric (11.10) and I've [posted them](https://github.com/ivanoats/babushka-deps) on my GitHub. You should be able to follow the 'other ruby ivan's instructions but just sub my github name for his.

