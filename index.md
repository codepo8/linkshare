---
title: Chris Heilmann's Link collection
layout: index
---

<ul id="snippets" class="multicolumn">
{% for s in site.links %}
  {% if s.url == "/template.html" %}
    {% continue %}
  {% endif %}
  <li>
    <a href="/linkshare{{ s.url }}">{{ s.name }}</a>
  </li>
{% endfor %}
</ul>