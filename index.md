---
title: Chris Heilmann's Link collection
layout: index
---

<ul id="snippets" class="multicolumn">
{% for s in site.links %}
  <li>
    <a href="/linkshare{{ s.url }}">{{ s.name }}</a>
  </li>
{% endfor %}
</ul>

