---
title: Expertise
layout: base
bodyClasses: 'page-expertise'

filters:
  - title: All
    path: /expertise/
  - title: Aerospace
    path: /expertise/aerospace/
  - title: Aviation
    path: /expertise/aviation/
  - title: Commissioning
    path: /expertise/commissioning/
  - title: Cultural & Public
    path: /expertise/cultural-and-public/
  - title: Energy & Utilities
    path: /expertise/energy-and-utilities/
  - title: Federal Government
    path: /expertise/federal-government/
  - title: Healthcare
    path: /expertise/healthcare/
  - title: Higher Education
    path: /expertise/higher-education/
  - title: Industrial Test
    path: /expertise/industrial-test/
  - title: Intelligent Buildings
    path: /expertise/intelligent-buildings/
  - title: Mission Critical
    path: /expertise/mission-critical/
  - title: Process Industries
    path: /expertise/process-industries/
  - title: Science & Technology
    path: /expertise/science-and-technology/
  - title: Sports & Athletic Centers
    path: /expertise/sports-and-athletic-centers/

modules:
  - type: project
    permalink: /projects/north-carolina-state-university
    title: North Carolina State University
    subtitle: James B. Hunt Jr. Library
    thumb: /uploads/placeholder-project-thumb1.jpg 
    aspectRatio: landscape 
    color: blue
  - type: project
    permalink: /projects/north-carolina-state-university
    title: North Carolina State University
    subtitle: James B. Hunt Jr. Library
    thumb: /uploads/placeholder-project-thumb2.jpg
    aspectRatio: landscape 
    color: black
  - type: project
    permalink: /projects/north-carolina-state-university
    title: North Carolina State University
    subtitle: Stanford Energy Systems Innovations
    thumb: /uploads/placeholder-project-thumb3.jpg
    aspectRatio: landscape 
    color: black
  - type: stat
    number: 38k
    unit: 
    text: Total Sq Ft Of LEED Certified Buildings
  - type: project
    permalink: /projects/north-carolina-state-university
    title: Stanford University
    subtitle: Stanford Energy Systems Innovations
    thumb: /uploads/placeholder-project-thumb4.jpg
    aspectRatio: portrait 
    color: green
  - type: project
    permalink: /projects/north-carolina-state-university
    title: University of Washington
    subtitle:  Molecular Engineering & Sciences Building
    thumb: /uploads/placeholder-project-thumb5.jpg
    aspectRatio: landscape 
    color: brass
  - type: stat
    number: 70
    unit: '%'
    text: Total Sq Ft Of LEED Certified Buildings
  - type: project
    permalink: /projects/north-carolina-state-university
    title: North Carolina State University
    subtitle: Stanford Energy Systems Innovations
    thumb: /uploads/placeholder-project-thumb1.jpg
    aspectRatio: landscape
    color: black
  - type: project
    permalink: /projects/north-carolina-state-university
    title: Ann & Robert H. Lurie Children’s Hospital Of Chicago
    subtitle: Stanford Energy Systems Innovations
    thumb: /uploads/placeholder-project-thumb6.jpg
    aspectRatio: portrait
    color: violet
---
<div class="row top-row">
  <div class="row-block">
    <div class="module text-module background-white text-black">
      <p class="font-h1">Filtered market specific description. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
      <div class="buttons">
        <button class="contacts-open button">
          <span class="border"></span><span class="extra-corners"></span>
          Contacts
          <svg class="icon icon-plus "><use xlink:href="#icon-plus" /></svg>
        </button>
        <a class="button" href="/awards/">
          <span class="border"></span><span class="extra-corners"></span>
          Awards
          <svg class="icon icon-right-arrow"><use xlink:href="#icon-right-arrow" /></svg>
        </a>
      </div>
    </div>
  </div>
  {% for module in page.modules %}
    {% if forloop.first != true %}{% break %}{% endif %}
    <div class="row-block">
      {% include modules/{{ module.type }}.html %}
    </div>
  {% endfor %}
</div>
<div class="masonry-grid">
  <div class="masonry-sizer"></div>
  <ul class="semantic-only-list">
    {% for module in page.modules %}
      {% if forloop.first %}{% continue %}{% endif %}
      <li class="masonry-item">
        {% include modules/{{ module.type }}.html %}
      </li>
    {% endfor %}
  </ul>
</div>




