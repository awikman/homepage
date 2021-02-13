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
{% for file in site.static_files %}
    {% if file.path contains "/photos" %}
        <a href="{{file.path || relative_url }}">
            <img src="{{file.path || relative_url}}" />
        </a>
    {% endif %}
{% endfor %}
</ul>
