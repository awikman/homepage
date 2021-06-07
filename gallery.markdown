---
layout: page
title: Gallery
permalink: /gallery
---

<style>
    .image-gallery img {
        margin-bottom: 1em;
    }
</style>

<ul class="image-gallery">
{% for file in site.static_files reversed  %}
    {% if file.path contains "/photos" %}
      <a href="{{file.path || relative_url }}">
          <img loading="lazy" src="{{file.path || relative_url}}" width="1000" height="1000" style="height: auto"/>
      </a>
    {% endif %}
{% endfor %}
</ul>

<p>
I no longer host older pictures here. GitHub doens't want to host a site this large for free...
</p>
