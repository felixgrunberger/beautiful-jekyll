@import url("pygment_highlights.css");

/* --- General --- */

body {
  font-family: 'Lora', 'Times New Roman', serif;
  font-size: 18px;
  color: #404040;
  position: relative;
  background: #FFF;
}
p {
  line-height: 1.5;
  margin: 30px 0;
}
p a {
  /* text-decoration: underline */
  color: #008AFF;
}
h1,h2,h3,h4,h5,h6 {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 800;
}
a {
  color: #008AFF;
}
a:hover,
a:focus {
  color: #a50509;
}
blockquote {
  color: #808080;
  font-style: italic;
}
blockquote p:first-child {
  margin-top: 0;
}
hr.small {
  max-width: 100px;
  margin: 15px auto;
  border-width: 4px;
  border-color: inherit;
  border-radius: 3px;
}

.main-content {
  padding-top: 80px;
}
@media only screen and (min-width: 768px) {
  .main-content {
    padding-top: 130px;
  }
}

.main-explain-area {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 15px inherit;
}

.hideme {
  display: none;
}

::-moz-selection {
  color: white;
  text-shadow: none;
  background: #a50509;
}
::selection {
  color: white;
  text-shadow: none;
  background: #a50509;
}
img::selection {
  color: white;
  background: transparent;
}
img::-moz-selection {
  color: white;
  background: transparent;
}

img {
  max-width: 100%;
}

.disqus-comments {
  margin-top: 30px;
}

@media only screen and (min-width: 768px) {
  .disqus-comments {
    margin-top: 40px;
  }
}

/* --- Navbar --- */

.navbar-custom {
  background: #F5F5F5;
  border-bottom: 1px solid #EAEAEA;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.navbar-custom .nav li a {
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
}

.navbar-custom .navbar-brand,
.navbar-custom .nav li a {
  font-weight: 800;
  color: #404040;
}

.navbar-custom .navbar-brand:hover,
.navbar-custom .navbar-brand:focus ,
.navbar-custom .nav li a:hover,
.navbar-custom .nav li a:focus {
  color: #a50509;
}

.navbar-custom .navbar-brand-logo {
  padding-top: 0;
  -webkit-transition: padding .5s ease-in-out;
  -moz-transition: padding .5s ease-in-out;
  transition: padding .5s ease-in-out;
}
.navbar-custom .navbar-brand-logo img {
  height: 50px;
  -webkit-transition: height .5s ease-in-out;
  -moz-transition: height .5s ease-in-out;
  transition: height .5s ease-in-out;
}
.navbar-custom.top-nav-short .navbar-brand-logo {
  padding-top: 5px;
}
.navbar-custom.top-nav-short .navbar-brand-logo img {
  height: 40px;
}

@media only screen and (min-width: 768px) {
  .navbar-custom {
    padding: 20px 0;
    -webkit-transition: background .5s ease-in-out,padding .5s ease-in-out;
    -moz-transition: background .5s ease-in-out,padding .5s ease-in-out;
    transition: background .5s ease-in-out,padding .5s ease-in-out;
  }

  .navbar-custom.top-nav-short {
    padding: 0;
  }
}

.navbar-custom .avatar-container {
  opacity: 1;
  position: absolute;
  -webkit-transition: opacity 0.5s ease-in-out;
  -moz-transition: opacity 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;
  left: 50%;
  width: 50px;
  margin-top: -25px;
}
.navbar-custom .avatar-container  .avatar-img-border {
  width: 100%;
  border-radius: 50%;
  margin-left: -50%;
  display: inline-block;
  box-shadow: 0 0 8px rgba(0, 0, 0, .8);
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .8);
  -moz-box-shadow: 0 0 8px rgba(0, 0, 0, .8);
}
.navbar-custom .avatar-container  .avatar-img {
  width: 100%;
  border-radius: 50%;
  display: block;
}

.navbar-custom.top-nav-short .avatar-container{
  opacity: 0;
}

.navbar-custom.top-nav-expanded .avatar-container  {
  display: none;
}

@media only screen and (min-width: 768px) {
  .navbar-custom .avatar-container {
    width: 100px;
    margin-top: -50px;
  }
  
  .navbar-custom .avatar-container  .avatar-img-border {
    width: 100%;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
    -webkit-box-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
    -moz-box-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
  }
  
  .navbar-custom .avatar-container  .avatar-img {
    width: 100%;
  }
}

/* Multi-level navigation links */
.navbar-custom .nav .navlinks-container {
  position: relative;
}
.navbar-custom .nav .navlinks-parent:after {
  content: " \25BC";
}
.navbar-custom .nav .navlinks-children {
  width: 100%;
  display: none;
  word-break: break-word;
}
.navbar-custom .nav .navlinks-container .navlinks-children a {
  display: block;
  padding: 10px;
  padding-left: 30px;
  background: #f5f5f5;
  text-decoration: none !important;
  border-width: 0 1px 1px 1px;
  font-weight: normal;
}
@media only screen and (max-width: 767px) {
  .navbar-custom .nav .navlinks-container.show-children {
    background: #eee;
  }
  .navbar-custom .nav .navlinks-container.show-children .navlinks-children {
    display: block;
  }
}
@media only screen and (min-width: 768px) {
  .navbar-custom .nav .navlinks-container {
    text-align: center;
  }  
  .navbar-custom .nav .navlinks-container:hover {
    background: #eee;
  }
  .navbar-custom .nav .navlinks-container:hover .navlinks-children {
    display: block;
  }
  .navbar-custom .nav .navlinks-children {
    position: absolute;
  }
  .navbar-custom .nav .navlinks-container .navlinks-children a {
    padding-left: 10px;
    border: 1px solid #eaeaea;
    border-width: 0 1px 1px;
  }
}

/* --- Footer --- */

footer {
  padding: 30px 0;
  background: #F5F5F5;
  border-top: 1px #EAEAEA solid;
  margin-top: 50px;
  font-size: 14px;
}

footer a {
  color: #404040;
}

footer .list-inline {
  margin: 0;
  padding: 0;
}
footer .copyright {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-bottom: 0;
}
footer .theme-by {
  text-align: center;
  margin: 10px 0 0;
}

@media only screen and (min-width: 768px) {
  footer {
    padding: 50px 0;
  }
  footer .footer-links {
    font-size: 18px;
  }
  footer .copyright {
    font-size: 16px;
  }
}
 
/* --- Post preview --- */

.post-preview {
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

@media only screen and (min-width: 768px) {
  .post-preview {
    padding: 35px 0;
  }
}

.post-preview:last-child {
  border-bottom: 0;
}

.post-preview a {
  text-decoration: none;
  color: #404040;
}

.post-preview a:focus,
.post-preview a:hover {
  text-decoration: none;
  color: #a50509;
}

.post-preview .post-title {
  font-size: 30px;
  margin-top: 0;
}
.post-preview .post-subtitle {
  margin: 0;
  font-weight: 300;
  margin-bottom: 10px;
}
.post-preview .post-meta,
.post-heading .post-meta {
  color: #808080;
  font-size: 18px;
  font-style: italic;
  margin: 0 0 10px;
}
.post-preview .post-entry {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.post-entry-container {
  display: inline-block;
  width: 100%;
}
.post-entry {
  width: 100%;
}
.post-image {
  float: right;
  height: 192px;
  width: 192px;
  margin-top: -13px;
  filter: grayscale(90%);
}
.post-image:hover {
  filter: grayscale(0%);
}
.post-image img {
  border-radius: 100px;
  height: 192px;
  width: 192px;
}
.post-preview .post-read-more {
  font-weight: 800;
}

@media only screen and (min-width: 768px) {
  .post-preview .post-title {
    font-size: 36px;
  }
}

/* --- Tags --- */

.blog-tags {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #999;
  font-size: 15px;
  margin-bottom: 30px;
}

.blog-tags a {
  color: #008AFF;
  text-decoration: none;
  padding: 0px 5px;
}

.blog-tags a:hover {
  border-radius: 2px;
  color: #008AFF;
  background-color: #CCC;
}

.post-preview .blog-tags {
  margin-top: 5px;
  margin-bottom: 0;
}

@media only screen and (min-width: 768px) {
  .post-preview .blog-tags {
    margin-top: 10px;
  }
}

@media only screen and (max-width: 500px) {
  .post-image, .post-image img {
    height: 100px;
    width: 100px;
  }
  .post-image {
    width: 100%;
    text-align: center;
    margin-top: 0;
    float: left;
  }
}
/* --- Post and page headers --- */

.intro-header {
  margin: 80px 0 20px;
  position: relative;
}
.intro-header.big-img {
  background: no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  margin-top: 51px; /* The small navbar is 50px tall + 1px border */
  margin-bottom: 35px;
}
.intro-header.big-img  .big-img-transition {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  -webkit-transition: opacity 1s linear;
  -moz-transition: opacity 1s linear;
  transition: opacity 1s linear;
}
.intro-header .page-heading {
  text-align: center;
}
.intro-header.big-img .page-heading,
.intro-header.big-img .post-heading {
  padding: 100px 0;
  color: #FFF;
  text-shadow: 1px 1px 3px #000;
}
.intro-header .page-heading h1 {
  margin-top: 0;
  font-size: 50px;
}
.intro-header .post-heading h1 {
  margin-top: 0;
  font-size: 35px;
}
.intro-header .page-heading .page-subheading,
.intro-header .post-heading .post-subheading {
  font-size: 27px;
  line-height: 1.1;
  display: block;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 300;
  margin: 10px 0 0;
}
.intro-header .post-heading .post-subheading {
  margin-bottom: 20px;
}
.intro-header.big-img .page-heading .page-subheading,
.intro-header.big-img .post-heading .post-subheading {
  font-weight: 400;
}
.intro-header.big-img .page-heading hr {
  box-shadow: 1px 1px 3px #000;
  -webkit-box-shadow: 1px 1px 3px #000;
  -moz-box-shadow: 1px 1px 3px #000;
}
.intro-header.big-img .post-heading .post-meta {
  color: #EEE;
}
.intro-header.big-img .img-desc {
  background: rgba(30, 30, 30, 0.6);
  position: absolute;
  padding: 5px 10px;
  font-size: 11px;
  color: #EEE;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  right: 0;
  bottom: 0;
  display: none;
}
@media only screen and (min-width: 768px) {
  .intro-header {
    margin-top: 130px;
  }
  .intro-header.big-img {
    margin-top: 91px;  /* Full navbar is small navbar + 20px padding on each side when expanded */
  } 
  .intro-header.big-img .page-heading,
  .intro-header.big-img .post-heading  {
    padding: 150px 0;
  }  
  .intro-header .page-heading h1 {
    font-size: 80px;
  }
  .intro-header .post-heading h1 {
    font-size: 50px;
  }
  .intro-header.big-img .img-desc {
    font-size: 14px;
  }
}

.header-section.has-img .no-img {
  margin-top: 0;
  background: #FCFCFC;
  margin: 0 0 40px;
  padding: 20px 0;
  box-shadow: 0 0 5px #AAA;
}
/* Many phones are 320 or 360px, so make sure images are a proper aspect ratio in those cases */
.header-section.has-img .intro-header.no-img {
  display: none;
}
@media only screen and (max-width: 365px) {
  .header-section.has-img .intro-header.no-img {
    display: block;
  }
  .intro-header.big-img {
    width: 100%;
    height: 220px;
  }
  .intro-header.big-img .page-heading,
  .intro-header.big-img .post-heading {
    display: none;
  }
  .header-section.has-img .big-img {
    margin-bottom: 0;
  }  
} 
@media only screen and (max-width: 325px) { 
  .intro-header.big-img {
    height: 200px;
  }
}

.caption {
  text-align: center;
  font-size: 14px;
  padding: 10px;
  font-style: italic;
  margin: 0;
  display: block;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

/* --- Pager --- */

.pager li a {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1px;
  padding: 10px 5px;
  background: #FFF;
  border-radius: 0;
  color: #404040;
}
@media only screen and (min-width: 768px) {
  .pager li a {
    padding: 15px 25px;
  }
}
.pager li a:hover,
.pager li a:focus {
  color: #FFF;
  background: #a50509;
  border: 1px solid #a50509;
}

.pager {
  margin: 10px 0 0;
}

.pager.blog-pager {
  margin-top: 0;
}

@media only screen and (min-width: 768px) {
  .pager.blog-pager  {
    margin-top: 10px;
  }
}

/* --- Tables --- */

table {
  padding: 0;
}
table tr {
  border-top: 1px solid #cccccc;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
}
table tr:nth-child(2n) {
  background-color: #f8f8f8;
}
table tr th {
  font-weight: bold;
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}
table tr td {
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}
table tr th :first-child,
table tr td :first-child {
  margin-top: 0;
}
table tr th :last-child,
table tr td :last-child {
  margin-bottom: 0;
}

/* --- Code blocks --- */

pre {
  font-size: 16px;
  line-height: 1.5em;
}
pre code {
  white-space: pre;
}
pre.highlight, .highlight > pre, td.code pre {
  background: #FAFAFA;
  background-image: linear-gradient(#F9F9F9 50%, #FDFDFD 50%);
  background-repeat: repeat;
  background-size: 3em 3em;
  background-position: 0px 10px;
  border-left: 7px solid #444;
}
code table, code table td, code table th, code table tbody, code table tr,
td.gutter pre {
  padding: 0;
  border: none;
  background-color: #fff;
}
.highlight > pre {
  padding: 0;
}
td.code pre {
  border-width: 0 0 0 2px;
  border-style: solid;
  border-color: #444;
  border-radius: 0;
}
td.gutter {
  padding-top: 3px;
}

/* --- Social media sharing section --- */

#social-share-section {
  margin-bottom: 30px;
}

/* --- Typed.js --- */
.typed-cursor {
  opacity: 1;
  font-weight: 100;
  -webkit-animation: blink 0.7s infinite;
  -moz-animation: blink 0.7s infinite;
  -ms-animation: blink 0.7s infinite;
  -o-animation: blink 0.7s infinite;
  animation: blink 0.7s infinite;
  }
  @-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }
  @-webkit-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }
  @-moz-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }
  @-ms-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
        }
  @-o-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}

@media screen and (max-width: 600px) {
  .typed-js-hide {
    visibility: hidden;
    clear: both;
    float: left;
    margin: 10px auto 5px 20px;
    width: 28%;
    display: none;
  }
}
