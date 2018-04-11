---
title: Impact
layout: base
bodyClasses: 'page-impact overlapping-header'
filters:
  - title: All
    path: /impact/
  - title: Announcements
    path: /impact/announcements/
  - title: Articles
    path: /impact/articles/
  - title: Client Impact
    path: /impact/client-impact/
  - title: Engineering in Progress
    path: /impact/engineering-in-progress/
  - title: Engineer Culture
    path: /impact/engineer-culture/
  - title: Innovation
    path: /impact/innovation/
  - title: In the Community
    path: /impact/in-the-community/
  - title: Presentations
    path: /impact/presentations/
  - title: Project Performance
    path: /impact/project-performance/
  - title: Tech Talk
    path: /impact/tech-talk/

heroImageUrl: /uploads/impact-hero.jpg

featuredModule:
  - type: post
    title: Featured Post Title
    category: Client Impact
    excerpt: Post introduction. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
    permalink: #

modules:
  - type: post
    title: Short Post Title
    category: Announcement
    excerpt: Post introduction. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
    permalink: #
  - type: post
    title: Some Post Titles Will Be Quite a Bit Longer Than Others
    category: Article
    excerpt: Post introduction. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
    permalink: #
  - type: post
    title: Short Post Title
    category: Tech Talk
    excerpt: Post introduction. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
    permalink: #
  - type: post
    title: Short Post Title
    category: Article
    excerpt: Post introduction. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
    permalink: #
  - type: post
    title: Some Post Titles Will Be Quite a Bit Longer Than Others
    category: Article
    excerpt: Post introduction. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
    permalink: #
  - type: stat
    number: 38k
    unit: 
    text: Callout Stat or Key Feature
  - type: post
    title: Short Post Title
    category: Announcement
    excerpt: Post introduction. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
    permalink: #
  - type: post
    title: Short Post Title
    category: Announcement
    excerpt: Post introduction. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
    permalink: #

---
<div class="hero-wrap">
  <div class="hero-image">
    <div class="image" style="background-image: url({{ page.heroImageUrl }});"></div>
  </div>
  <div class="row">
    {% for module in page.featuredModule %}
      <li class="row-block -right background-black text-off-white font-smoothing featured-post-block">
        {% include modules/{{ module.type }}.html %}
      </li>
    {% endfor %}
  </div>
</div>
<ul class="row semantic-only-list">
  {% for module in page.modules %}
    <li class="row-block background-white text-black post-separator">
      {% include modules/{{ module.type }}.html %}
    </li>
  {% endfor %}
</ul>