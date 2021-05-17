---
layout: page
permalink: /pavarotti
---

<style>
    .image-gallery img {
        margin-bottom: 1em;
    }
</style>

Kuvia Pavarotista... Otin kyllä myös värifilmille kuvia, mutta multa ei nyt löydy
kemikaaleja niiden kehittämiseksi. Eli kuvia tulee vielä jossain vaiheessa lisää.
<br />

<ul class="image-gallery">
{% for file in site.static_files reversed %}
    {% if file.path contains "/pavarotti" %}
        <a href="{{file.path || relative_url }}">
            <img loading="lazy" src="{{file.path || relative_url}}" width="1000" height="1000" style="height: auto"/>
        </a>
    {% endif %}
{% endfor %}
</ul>
