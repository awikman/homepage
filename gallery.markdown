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
<script src="https://cdn.jsdelivr.net/npm/loading-attribute-polyfill@0.2.0/loading-attribute-polyfill.min.js" />

<ul class="image-gallery">
{% for file in site.static_files reversed %}
    {% if file.path contains "/photos" %}
        <a href="{{file.path || relative_url }}">
          <noscript class="loading-lazy">
            <img loading="lazy" src="{{file.path || relative_url}}" width="1000" height="1000" style="height: auto"/>
          </noscript>
        </a>
    {% endif %}
{% endfor %}
</ul>
