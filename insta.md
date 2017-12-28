---
layout: "page"
title: "Insta"
meta-title: "Felix Grünberger - my Insta"
---

{% instagram accesstokenpath:Users/f/Documents/instagram-access-token.txt %}
	<div>
		<h3>{{ item.caption.text }}</h3>
		<img src="{{ item.images.standard_resolution.url }}" />
	</div>
{% endinstagram %}
