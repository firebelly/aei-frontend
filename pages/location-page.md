---
title: San Francisco
permalink: /locations/san-francisco/
layout: base
bodyClasses: 'page-secondary overlapping-header'

heroImageUrl: /uploads/san-francisco.jpg

quote: Quote about how great the city is. Donec id elit non mi porta gravida at eget. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
quoteSource: Employee Name
intro: <p>Short paragraph describing service with a focus on AEI’s value prop for specific service. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>

meta:
  - title: Address
    content: <a href="#">123 Mission St. 7th Floor<br>San Francisco, CA 94105</a>
    width: full
  - title: Phone
    content: 415.764.3700
    width: half
  - title: Email
    content: <a href="#">sanfrancisco@aeieng.com</a>
    width: half

relatedPosts:  
  - title: Short Post Title
    category: Article
    excerpt: Post introduction. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
    permalink: #
  - title: Some Post Titles Will Be Quite a Bit Longer Than Others
    category: Article
    excerpt: Post introduction. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
    permalink: #

relatedProjects:
  - type: project
    permalink: /projects/stanford-university/
    title: North Carolina State University
    subtitle: James B. Hunt Jr. Library
    image: /uploads/placeholder-project-thumb1.jpg 
    aspectRatio: landscape 
    color: blue
  - type: project
    permalink: /projects/stanford-university/
    title: North Carolina State University
    subtitle: James B. Hunt Jr. Library
    image: /uploads/placeholder-project-thumb2.jpg
    aspectRatio: landscape 
    color: black
  - type: project
    permalink: /projects/stanford-university/
    title: North Carolina State University
    subtitle: Stanford Energy Systems Innovations
    image: /uploads/placeholder-project-thumb3.jpg
    aspectRatio: landscape 
    color: black
  - type: project
    permalink: /projects/stanford-university/
    title: Stanford University
    subtitle: Stanford Energy Systems Innovations
    image: /uploads/placeholder-project-thumb4.jpg
    aspectRatio: landscape 
    color: green
  - type: project
    permalink: /projects/stanford-university/
    title: University of Washington
    subtitle:  Molecular Engineering & Sciences Building
    image: /uploads/placeholder-project-thumb5.jpg
    aspectRatio: landscape 
    color: brass
  - type: project
    permalink: /projects/stanford-university/
    title: North Carolina State University
    subtitle: Stanford Energy Systems Innovations
    image: /uploads/placeholder-project-thumb1.jpg
    aspectRatio: landscape
    color: black


prevPost: Portland
prevPostPermalink: #
nextPost: Seattle
nextPostPermalink: #
---

{% include secondary-header.html %}

{% include secondary-intro.html %}

{% assign relatedProjectsTitle = 'Featured ' | append: page.title | append: ' Projects' %}
{% include related-projects.html title=relatedProjectsTitle %}

{% assign relatedPostsTitle = page.title | append: ' Impact' %}
{% include related-posts.html title=relatedPostsTitle %}

{% include post-navigation.html category="Location" %}