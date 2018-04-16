---
title: Approach
layout: base
permalink: /approach/

headline: Approach-focused what we do statement. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper.

supportingStatement: Supporting statement about AEI’s approach. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

heroImageUrl: /uploads/impact-hero.jpg

servicesDescription: Supporting statement with description of digital practices. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.

services:
  - name: Building Performance Analytics
    photoUrl: /uploads/service1.jpg
    permalink: /services/instrumentation-and-controls/
  - name: Cost Estimating
    photoUrl: /uploads/service2.jpg
    permalink: /services/instrumentation-and-controls/
  - name: Digital Practices
    photoUrl: /uploads/service3.jpg
    permalink: /services/instrumentation-and-controls/
  - name: Instrumentation & Controls
    photoUrl: /uploads/service4.jpg
    permalink: /services/instrumentation-and-controls/
  - name: Intelligent Buildings
    photoUrl: /uploads/service5.jpg
    permalink: /services/instrumentation-and-controls/
  - name: Low Voltage Design
    photoUrl: /uploads/service6.jpg
    permalink: /services/instrumentation-and-controls/
  - name: MEP/FP Design
    photoUrl: /uploads/service7.jpg
    permalink: /services/instrumentation-and-controls/
  - name: Pivotal Lighting Design
    photoUrl: /uploads/service8.jpg
    permalink: /services/instrumentation-and-controls/
  - name: Planning
    photoUrl: /uploads/service9.jpg
    permalink: /services/instrumentation-and-controls/
  - name: Process Engineering
    photoUrl: /uploads/service10.jpg
    permalink: /services/instrumentation-and-controls/
  - name: Security Consulting & Design
    photoUrl: /uploads/service11.jpg
    permalink: /services/instrumentation-and-controls/

locationsDescription: Supporting statement with description of digital practices. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.

locations:
  - name: Baltimore
    photoUrl: /uploads/location1.jpg
    permalink: /locations/san-francisco/
  - name: Chapel Hill
    photoUrl: /uploads/location2.jpg
    permalink: /locations/san-francisco/
  - name: Chicago
    photoUrl: /uploads/location3.jpg
    permalink: /locations/san-francisco/
  - name: Denver
    photoUrl: /uploads/location4.jpg
    permalink: /locations/san-francisco/
  - name: Gainesville
    photoUrl: /uploads/location5.jpg
    permalink: /locations/san-francisco/
  - name: Houston
    photoUrl: /uploads/location6.jpg
    permalink: /locations/san-francisco/
  - name: Los Angelos
    photoUrl: /uploads/location7.jpg
    permalink: /locations/san-francisco/
  - name: Madison
    photoUrl: /uploads/location8.jpg
    permalink: /locations/san-francisco/
  - name: Pheonix
    photoUrl: /uploads/location9.jpg
    permalink: /locations/san-francisco/
  - name: Portland
    photoUrl: /uploads/location10.jpg
    permalink: /locations/san-francisco/
  - name: San Francisco
    photoUrl: /uploads/location11.jpg
    permalink: /locations/san-francisco/
  - name: Seattle
    photoUrl: /uploads/location12.jpg
    permalink: /locations/san-francisco/
  - name: Tampa
    photoUrl: /uploads/location13.jpg
    permalink: /locations/san-francisco/
  - name: Washington DC
    photoUrl: /uploads/location14.jpg
    permalink: /locations/san-francisco/
  - name: Leicester
    photoUrl: /uploads/location15.jpg
    permalink: /locations/san-francisco/

---

<!-- checkerboard header (no theater) -->
<div class="checkerboard-header">
  <div class="row -halves">
    <div class="row-block">
      <div class="module text-module background-white text-black pull-h1-to-top">
        <p class="font-h1 no-margin">{{ page.headline }}</p>
        <div class="buttons show-md">
          <a href="#services" class="button">
            <span class="border"></span><span class="extra-corners"></span>
            Services
            <svg class="icon icon-down-arrow"><use xlink:href="#icon-down-arrow" /></svg>
          </a>
          <a href="#locations" class="button">
            <span class="border"></span><span class="extra-corners"></span>
            Locations
            <svg class="icon icon-down-arrow"><use xlink:href="#icon-down-arrow" /></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="checkerboard-hero">
    <div class="image bg-cover fill" style="background-image: url({{ page.heroImageUrl }});"></div>
  </div>
  <div class="row -halves">
    <div class="row-block -right">
      <div class="text-module background-black text-off-white font-smoothing">
        <p>{{ page.supportingStatement }}</p>
      </div>
    </div>
  </div>
</div>

<!-- service section header -->
<div class="row -halves pad-vertical background-white text-black">
  <div class="row-block">
    <div class="module text-module">
      <h2 id="services" class="font-h1">Services</h2>
    </div>
  </div>  
  <div class="row-block">
    <div class="module text-module">
      <p class="font-p no-margin">{{ page.servicesDescription }}</p>
    </div>
  </div>
</div>

<!-- services -quarters -->
<ul class="row -quarters photo-row-separators semantic-only-list background-white big-margin-bottom">
  {% for module in page.services %}
    <li class="row-block">
      {% include modules/service.html %}
    </li>
  {% endfor %}
</ul>

<!-- location section header -->
<div class="row -halves pad-vertical background-white text-black hr-top-black">
  <div class="row-block">
    <div class="module text-module">
      <h2 id="locations" class="font-h1">Locations</h2>
    </div>
  </div>  
  <div class="row-block">
    <div class="module text-module">
      <p class="font-p no-margin">{{ page.locationsDescription }}</p>
    </div>
  </div>
</div>

<!-- locations -quarters -->
<ul class="row -quarters photo-row-separators semantic-only-list background-white big-margin-bottom">
  {% for module in page.locations %}
    <li class="row-block">
      {% include modules/location.html %}
    </li>
  {% endfor %}
</ul>