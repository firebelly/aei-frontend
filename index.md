---
title: Home
layout: base
bodyClasses: 'page-home'

heroImageUrl: /uploads/home-hero.jpg

headline: Line stating what AEI is and what AEI does (Plan, Design, Commission) caecenas faucibus.

supportingStatement: Supporting statement about AEI, ideally benefits-focused. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

projectTeaser: First of its kind energy system. 70% more efficient and cutting carbon by well over half.
projectPermalink: #
projectThumb: /uploads/placeholder-project-thumb4.jpg
projectColor: 'green'

approachTeaser: Culture messaging — Approach focused. Aenean eu leo quam. Ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non.
approachThumb: /uploads/home-hero.jpg

posts:
  - title: Blog Post Title
    category: Post Topic Label
    excerpt: Post introduction. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
    permalink: #
  - title: Announcement Title
    category: Post Topic Label
    excerpt: Post introduction. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
    permalink: #

peopleTeaser: Culture messaging — Careers focused. Aenean eu leo quam. Ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non.
peopleThumb: /uploads/people.jpg


---
<div class="thumb" style="background-image: url({{ page.heroImageUrl }});">
  <div class="row">
    <div class="row-block">
      <div class="module text-module background-white text-black">
        <p class="font-h1">{{ page.headline }}</p>
        <div class="buttons">
          <a class="button" href="/awards/">
            <span class="border"></span><span class="extra-corners"></span>
            Play Video
            <svg class="icon icon-triangle"><use xlink:href="#icon-triangle" /></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="row-block -push-right">
      <div class="text-module background-black text-off-white font-smoothing">
        <p>{{ page.supportingStatement }}</p>
      </div>
    </div>
  </div>
</div>
<div class="row -flip-order-md">
  <div class="row-block">
    <div class="module image-module -landscape -portrait-md">
      <div class="thumb" style="background-image: url('{{ page.projectThumb }}');"></div>
    </div>
  </div>
  <div class="row-block">
    <div class="module text-module background-{{ page.projectColor }} text-off-white font-smoothing">
      <p class="font-h1">{{ page.projectTeaser }}</p>
      <div class="buttons">
        <a class="button" href="{{ page.projectPermalink }}">
          <span class="border"></span><span class="extra-corners"></span>
          View Project
          <svg class="icon icon-right-arrow"><use xlink:href="#icon-right-arrow" /></svg>
        </a>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="row-block">
    <div class="module image-module -landscape -portrait-md">
      <div class="thumb" style="background-image: url('{{ page.approachThumb }}');"></div>
    </div>
  </div>
  <div class="row-block">
    <div class="module text-module background-off-white text-black">      
      <p class="font-h1">{{ page.approachTeaser }}</p>
      <div class="buttons">
        <a class="button" href="/approach/">
          <span class="border"></span><span class="extra-corners"></span>
          Our Approach
          <svg class="icon icon-right-arrow"><use xlink:href="#icon-right-arrow" /></svg>
        </a>
      </div>
    </div>
  </div>
</div>
<ul class="row -separators semantic-only-list">
  {% for module in page.posts %}
    <li class="row-block">
      {% include modules/post.html %}
    </li>
  {% endfor %}
</ul>
<div class="row -flip-order-md">
  <div class="row-block">
    <div class="module image-module -landscape -portrait-md">
      <div class="thumb" style="background-image: url('{{ page.peopleThumb }}');"></div>
    </div>
  </div>
  <div class="row-block">
    <div class="module text-module background-black text-off-white font-smoothing"> 
      <p class="font-h1">{{ page.peopleTeaser }}</p>
      <div class="buttons">
        <a class="button" href="/people/">
          <span class="border"></span><span class="extra-corners"></span>
          Our People
          <svg class="icon icon-right-arrow"><use xlink:href="#icon-right-arrow" /></svg>
        </a>
      </div>
    </div>
  </div>
</div>