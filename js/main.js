---
layout: page
title: Anudit Verma
subtitle: Let me introduce you to my geek side !
meta-title: "Hi, I'm Anudit"
use-site-title: true
bigimg:
  - "/img/laptop.jpg"
---

<!-- Typed.js --> 
<script src="/js/jquery-1.11.2.min.js"></script>
<script src="/js/typed.js" type="text/javascript"></script>
<script>
  $(function(){
    $(".typed").typed({
      strings: ["Technology.","Open Source.","Mathematics.","Space and Universe.","Science.","Art.","Ubuntu."],
      typeSpeed: 100,
      loop: true,
      backDelay: 1000

    });
  });
</script>

<div class="typed-js-hide">
  <div class="row">
    <div class="col-sm-12">
      <div class="text-center">
          <h1>I write about <span class="typed" style="color:#a50509";></span></h1>
      </div>
    </div>
  </div>
</div>

<!-- site body (untouched)--> 
<div class="posts-list">
  {% for post in paginator.posts %}
  <article class="post-preview">
    <a href="{{ post.url | prepend: site.baseurl }}">
    <h2 class="post-title">{{ post.title }}</h2>

    {% if post.subtitle %}
    <h3 class="post-subtitle">
      {{ post.subtitle }}
    </h3>
    {% endif %}
    </a>

    <p class="post-meta">
      Posted on {{ post.date | date: "%B %-d, %Y" }}
    </p>

    <div class="post-entry-container">
      {% if post.image %}
      <div class="post-image">
        <a href="{{ post.url | prepend: site.baseurl }}">
          <img src="{{ post.image }}">
        </a>
      </div>
      {% endif %}
      <div class="post-entry">
        {{ post.excerpt | strip_html | xml_escape | truncatewords: site.excerpt_length }}
        {% assign excerpt_word_count = post.excerpt | number_of_words %}
        {% if post.content != post.excerpt or excerpt_word_count > site.excerpt_length %}
          <a href="{{ post.url | prepend: site.baseurl }}" class="post-read-more">[Read&nbsp;More]</a>
        {% endif %}
      </div>
    </div>

    {% if post.tags.size > 0 %}
    <div class="blog-tags">
      Tags:
      {% if site.link-tags %}
      {% for tag in post.tags %}
      <a href="{{ site.baseurl }}/tag/{{ tag }}">{{ tag }}</a>
      {% endfor %}
      {% else %}
        {{ post.tags | join: ", " }}
      {% endif %}
    </div>
    {% endif %}

   </article>
  {% endfor %}
</div>

{% if paginator.total_pages > 1 %}
<ul class="pager main-pager">
  {% if paginator.previous_page %}
  <li class="previous">
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&larr; Newer Posts</a>
  </li>
  {% endif %}
  {% if paginator.next_page %}
  <li class="next">
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Older Posts &rarr;</a>
  </li>
  {% endif %}
</ul>
{% endif %}
