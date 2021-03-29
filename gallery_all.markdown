---
layout: page
permalink: /gallery/all
---

<style>
    .image-gallery img {
        margin-bottom: 1em;
    }
</style>

<ul class="image-gallery">
{% for file in site.static_files reversed %}
    {% if file.path contains "/photos" %}

      {% if file.name == "2021-03-29-0019.png" %}
          <br />
          Kuvia Bruno Weber puistosta. Filmi hajosi kameran sisällä ja kaikki kuvat valoittuvat kun revin sen ulos paikan päällä... Värikuvia tulossa kunhan saan ne kehitettyä. <br />
      {% endif %}

      <a href="{{file.path || relative_url }}">
          <img loading="lazy" src="{{file.path || relative_url}}" width="1000" height="1000" style="height: auto"/>
      </a>
    {% endif %}
{% endfor %}
</ul>
