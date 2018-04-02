---
title: Expertise
layout: base

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
    title: North Carolina State University
    subtitle: James B. Hunt Jr. Library
    thumb: placeholder-project-thumb1.jpg 
    aspectRatio: landscape 
    color: blue
  - type: project
    title: North Carolina State University
    subtitle: James B. Hunt Jr. Library
    thumb: placeholder-project-thumb2.jpg
    aspectRatio: landscape 
    color: black
  - type: project
    title: North Carolina State University
    subtitle: Stanford Energy Systems Innovations
    thumb: placeholder-project-thumb3.jpg
    aspectRatio: landscape 
    color: black
  - type: stat
    number1: 38k
    text: Total Sq Ft Of LEED Certified Buildings
  - type: project
    title: Stanford University
    subtitle: Stanford Energy Systems Innovations
    thumb: placeholder-project-thumb4.jpg
    aspectRatio: portrait 
    color: green
  - type: project
    title: University of Washington
    subtitle:  Molecular Engineering & Sciences Building
    thumb: placeholder-project-thumb5.jpg
    aspectRatio: landscape 
    color: brass
  - type: stat
    number1: 70%
    text: Total Sq Ft Of LEED Certified Buildings
  - type: project
    title: North Carolina State University
    subtitle: Stanford Energy Systems Innovations
    thumb: placeholder-project-thumb1.jpg
    aspectRatio: landscape
    color: black
  - type: project
    title: Ann & Robert H. Lurie Children’s Hospital Of Chicago
    subtitle: Stanford Energy Systems Innovations
    thumb: placeholder-project-thumb6.jpg
    aspectRatio: portrait
    color: violet
---
<div class="masonry-grid">
  <div class="masonry-sizer"></div>
  <div class="masonry-item page-description">
    <p>Filtered market specific description. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
    <div class="buttons">
      <button class="contacts-open corner-button button">
        <span>Contacts</span>
        <svg class="icon icon-plus "><use xlink:href="#icon-plus" /></svg>
      </button>
      <a class="corner-button button" href="/awards/">
        <span>Awards</span>
        <svg class="icon icon-right-arrow"><use xlink:href="#icon-right-arrow" /></svg>
      </a>
    </div>
  </div>
  <ul class="semantic-only-list">
    {% for module in page.modules %}
    <li class="masonry-item">
      {% include modules/{{ module.type }}.html %}
    </li>
    {% endfor %}
  </ul>
</div>