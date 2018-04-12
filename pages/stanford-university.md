---
title: Stanford University
permalink: /projects/stanford-university/
layout: secondary
bodyClasses: 'page-secondary overlapping-header'

title: Stanford University
subtitle: Stanford Energy Systems Innovations
heroImageUrl: /uploads/stanford-full.jpg
projectColor: green

projectTeaser: First of its kind energy system. 70% more efficient and cutting carbon by well over half.
projectDescription: <p>As prime consultant and lead engineer, Affiliated Engineers analyzed energy production options, evaluated capital and operating costs, and assessed financial and energy risk through 2050, then designed and directed implementation of central components projected to be greatly more efficient and significantly less harmful than Stanford’s previous system.</p>

meta:
  - title: Services
    content: <a href="#">Sustainability</a><br><a href="#">Energy & Utilities</a>
    width: half
  - title: Location
    content: Palo Alto, CA
    width: half
  - title: Architect
    content: ZGF Architects LLP - Architect of Record
    width: half
  - title: Certification
    content: LEED® Gold
    width: half
  - title: Awards
    content: 2015 Best Project in Energy/Industrial Award<br>Regional<br>ENR Northern California<br><br>2015 Citation Award<br>AIA Portland<br><br>2015 Editors' Choice <br>Best of the Best<br>Engineering News-Record<br><br>2015 Citation Award<br>AIA Portland<br><br>2015 Editors' Choice <br>Best of the Best<br>Engineering News-Record<br><br>2015 Citation Award<br>AIA Portland<br><br>2015 Editors' Choice <br>Best of the Best<br>Engineering News-Record
    width: half

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

contentModules:
  - type: image-full
    image: /uploads/stanford1.jpg
    caption: Image caption. Integer posuere erat a ante dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Duis mollis.
    captionSide: right
  - type: html
    html: <p>The Stanford Energy Center, designed for a peak load of 28,000 tons of cooling and 350 mmbtu/hr heating, replaces a combined heat and power system with heat recovery chillers that - along with standard chillers and gas-fired hot water generators - capitalize on daily heating and cooling overlap to heat the campus, and hospital with recovered energy. Two million gallons of hot water and ten million gallons of chilled water Thermal Energy Storage accommodate high demand periods.</p>
  - type: stat-two-number
    number1: 228k
    unit1: Tons of cooling
    number2: 360
    unit2: mmbtu/hr heating  
  - type: image
    image: /uploads/stanford2.jpg
    aspectRatio: landscape
    caption: Image caption. Integer posuere erat a ante dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Duis mollis.
  - type: image
    image: /uploads/stanford3.jpg
    aspectRatio: portrait
    caption: Image caption. Integer posuere erat a ante dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Duis mollis.
  - type: html
    html: <p>Portions of the facility are regulated by OSHPD. A new 80 MVA, N+1, 60kV-12.47 substation will allow flexible future management of Stanford’s energy supply platform. Conversion of nearly 200 campus buildings from steam to hot water includes district energy heat exchanger stations at each building and over 20 miles of a direct buried, highly insulated, low loss hot water piping system conforming to European Standard EN253. SESI became operational in 2015.</p>
  - type: quote
    quote:  The Stanford Energy System Innovations project represents nothing less than a revolution in the way campuses in the U.S. should be heated and cooled.
    source: Engineering News-Record
  - type: image-full
    image: /uploads/impact-hero.jpg
    caption: Image caption. Integer posuere erat a ante dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Duis mollis.
    captionSide: left

projectLeaders:
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

relatedImpact:
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

relatedProjects:
  - type: project
    permalink: /projects/standford-university
    title: North Carolina State University
    subtitle: Stanford Energy Systems Innovations
    image: /uploads/placeholder-project-thumb1.jpg
    aspectRatio: landscape
    color: black
  - type: project
    permalink: /projects/standford-university
    title: Ann & Robert H. Lurie Children’s Hospital Of Chicago
    subtitle: Stanford Energy Systems Innovations
    image: /uploads/placeholder-project-thumb6.jpg
    aspectRatio: landscape
    color: violet
---

<!-- header -->
<div class="hero-wrap">
  <div class="hero-image">
    <div class="image" style="background-image: url({{ page.heroImageUrl }});"></div>
  </div>
  <div class="row">
    <div class="row-block -right">
      <div class="module text-module background-{{ page.projectColor }} project-title"> 
        <h1>{{ page.title }}</h1>
        <h2>{{ page.subtitle }}</h2>
      </div>
    </div>
  </div>
</div>

<!-- project header/meta -->
<div class="row">
  <div class="row-block">
    <div class="module text-module">
      <p class="font-h1">{{ page.projectTeaser }}</p>
      <div class="user-content">
        {{ page.projectDescription }}
      </div>
    </div>
  </div>
  <div class="row-block">
    <div class="meta-module module">
    {% for meta in page.meta %}
      <div class="meta">
        <h4>{{ meta.title }}</h4>
        <div class="content">{{ meta.content }}</div>
      </div>
    {% endfor %}
  </div>
</div>

<!-- modular content -->
<div class="row background-white text-black">
  {% for module in page.contentModules %}
    <div class="row-block {% if module.type == 'image-full' %}-full{% endif %}">
      {% include modules/{{ module.type }}.html %}
    </div>
  {% endfor %}
</div>

<!-- project leaders -->
<div class="row">
  <div class="row-block -full">
    <div class="module text-module text-black">
      <h2 class="font-h2">Project Leaders</h2>
    </div>
  </div>
</div>
<ul class="row quarter-row semantic-only-list">
  {% for module in page.projectLeaders %}
    <li class="row-block quarter-row-separator">
      {% include modules/person.html %}
    </li>
  {% endfor %}
</ul>

<!-- related impact posts -->
<div class="row">
  <div class="row-block -full">
    <div class="module text-module text-black">
      <h2 class="font-h2">Related Impact</h2>
    </div>
  </div>
</div>
<ul class="row semantic-only-list hr-top-off-white hr-bottom-off-white">
  {% for module in page.relatedImpact %}
    <li class="row-block background-white text-black post-separator">
      {% include modules/{{ module.type }}.html %}
    </li>
  {% endfor %}
</ul>

<!-- related projects -->
<div class="row">
  <div class="row-block -full">
    <div class="module text-module text-black">
      <h2 class="font-h2">Projects</h2>
    </div>
  </div>
</div>
<ul class="semantic-only-list row">
  {% for module in page.relatedProjects %}
    <li class="row-block">
      {% include modules/{{ module.type }}.html %}
    </li>
  {% endfor %}
</ul>