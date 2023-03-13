---
title: Chris Heilmann's Link collection
layout: index
---

<ul id="snippets" class="multicolumn">
{% for s in site.links %}
  {% if s.name == "To find" or s.name == "Incoming Links" %}
    {% continue %}
  {% endif %}
  <li>
    <a href="/linkshare{{ s.url }}">{{ s.name }}</a>
  </li>
{% endfor %}
</ul>

{{ request.path }}
{{ site.url }}