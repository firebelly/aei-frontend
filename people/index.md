---
title: People
layout: base

bodyClasses: people-page white-header


filters:
  - title: All
    path: /people/
  - title: Firm Leaders
    path: /people/firm-leaders/
  - title: Market Leaders
    path: /people/market-leaders/
  - title: Digital Practices
    path: /people/digital-practices/
  - title: Business Development
    path: /people/business-development/
  - title: Human Resources
    path: /people/human-resources/

statModule:
  - type: stat
    number1: 230
    unit1: People
    number2: 16
    unit2: Offices

people:
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person1.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person2.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person3.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person4.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person5.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person6.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person1.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person2.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person3.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person4.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person5.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person6.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person1.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person2.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person3.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person4.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person5.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person6.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person1.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person2.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person3.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person4.jpg
    permalink: #
  - name: Firstname Lastname
    title: Title
    photoUrl: /uploads/person5.jpg
    permalink: #
---

<div class="row">
  <div class="row-block">
    <div class="module text-module background-white text-black">
      <p class="font-h1">Filtered market specific description. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
      <div class="buttons">
        <a class="button" href="/careers/">
          <span class="border"></span><span class="extra-corners"></span>
          Careers
          <svg class="icon icon-right-arrow"><use xlink:href="#icon-right-arrow" /></svg>
        </a>
      </div>
    </div>
  </div>
  {% for module in page.statModule %}
    <div class="row-block">
      {% include modules/stat-two-number.html %}
    </div>
  {% endfor %}
</div>
<ul class="row -quarters semantic-only-list">
  {% for module in page.people %}
    <li class="row-block quarter-separator">
      {% include modules/person.html %}
    </li>
  {% endfor %}
</ul>