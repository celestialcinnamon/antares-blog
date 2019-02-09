---
title: Mga Dapat Mong Matutuhan sa 2019 Tungkol sa Web Development
author:
    name: Francis Rubio
    image: images/francis-rubio.jpg
lang: tl
date: 2019-02-09 23:59:38
tags: [html, css, javascript]
category: Web Development
pdf_enabled: false
---

Sa taong 2019, ano-ano ang mga dapat mong ilagay sa Web Development skillset mo?

<!--more-->

Pumunta ako kahapon sa isang event, ang <i>CoRES 2019</i>, isang 4-day event na inihanda ng Polytechnic University of The Philippines kung saan nagsasalita ang iba't ibang mga professionals tungkol sa mga bagong technology na mayroon ngayon. Pumunta ako sa <cite>Web Developer Skillset</cite> talk ni Mr. Toni-Jan Keith Monserrat, kung saan in-introduce niya ang audience sa mga bagong updates sa Web standards. Binanggit din niya ang iba't ibang framework na ginagamit ngayon sa industriya gaya ng Angular, React, Vue, Ember, Redux, at iba pa.

Pero sa list na ito, hindi iyan ang gusto kong ikuwento. Dahil nga naman may maikling shelf life ang mga ito, mas praktikal na aralin ang Web standards.

Web standards
: Web standards are the formal, non-proprietary standards and other technical specifications that define and describe aspects of the World Wide Web. In recent years, the term has been more frequently associated with the trend of endorsing a set of standardized best practices for building web sites, and a philosophy of web design and development that includes those methods. <cite>[Wikpedia](https://en.wikipedia.org/wiki/Web_standards)</cite>

Basically ang Web standards ay ang "reverse documentation" ng World Wide Web. Sa documentation kasi, ang dino-document natin ay kung paano gumagana <em>in practice</em> ang isang product or object. Pero sa <dfn lang="en">standards</dfn> (also known as <i lang="en">specification</i>), ang dino-document ay kung paano <em>dapat</em> gumana ang isang product or object, regardless kung ganito ba talaga ito ini-implement sa tunay na mundo. Kumbaga, ang standards ang mga rules or guidelines na dapat masunod ng product.

Ang Web standards ang tinitingnan ng mga browser vendors kapag gumagawa ng bagong versions ng mga browser nila. Ang advantage nito, hindi na tayo magko-code ng individual sites na gagana lang for Firefox, na gagana lang for Chrome, etc. Dahil sa Web standards, nagiging <q>write once, run anywhere</q> ang Web. Ang mga browser na sumusunod sa standards ay tinatawag na <dfn lang="en">standards-compliant</dfn>.

<aside class="side-callout">
  <header>
    <h3>Fun Fact</h3>
  </header>
  <div>
    <p>Ang Mozilla Firefox ang pinaka-standards-compliant na browser as of February 2019. Sinusunod nito ang ~98% ng Web standards</p>

  <blockquote class="twitter-tweet">
    <p lang="en" dir="ltr">
    The crew at <a href="https://twitter.com/mozilla?ref_src=twsrc%5Etfw">@mozilla</a> keep cruising right along. <a href="https://twitter.com/hashtag/Firefox?src=hash&amp;ref_src=twsrc%5Etfw">#Firefox</a> 65 passes 96.68% of the tests, and Firefox Nightly (67) passes a whopping 98.46% (only 31 failures out of more than 2000 test!). They are perilously close to full spec-compliance, at this point.
    </p>
    &mdash; <cite>Jim Evans (@jimevansmusic) <a href="https://twitter.com/jimevansmusic/status/1092901252650946561?ref_src=twsrc%5Etfw">February 5, 2019</a></cite>
    </blockquote>
</aside>

Mahalaga na mapag-aralan mo rin ang mga frameworks na gaya ng Angular at ReactJS. Pero sa pinaka-essence ng mga frameworks na ito, Web standards pa rin ang gumagana. At the end of the day, mga JavaScript files pa rin ang mga ito na naglalagay ng HTML tags at CSS rules sa browsers ng user. Hindi ko ina-advocate na iwasan mo ang mga ito, ang sinasabi ko lang ay dapat alam mo rin ang mga nasa list na ito para lumawak pa ang skillset mo.

Ang Web standards ay may mahabang shelf life. Ibig sabihin, ang mga Web site na ginawa mo ngayon ay gagana pa rin 10 years, 20 years in the future, basta sinusunod mo ang Web standards. At may mga patunay tayo na may ganiyan.

<style>
  @media only screen and (min-width: 768px) {
    #space-jam {
      margin-left: -3rem;
      max-width: 30ch;
    }
  }
</style>

<figure id="space-jam" class="img-wrapper--illustration float-left img-wrapper">
  {% asset_img space-jam.png "Ang Space Jam website" %}
  <figcaption>Ang <a href="https://www.warnerbros.com/archive/spacejam/movie/jam.htm">Space Jam website</a> ay ginawa noong 1996, at gumagana pa rin ito ngayon.</figcaption>
</figure>

Ang Web ay <dfn lang="en">backwards-compatible</dfn>. Ibig sabihin, kahit pa i-update ito, gagawin ng <abbr title="World Wide Web Consortium">W3C</abbr> ang lahat para hindi masira ang mga lumang Web sites dahil sa mga updates. Hindi ito tulad ng mga frameworks gaya ng Angular na dineprecate lahat ng features ng Angular 1 no'ng nilabas nila ang Angular 2. Kaya kapag alam mo ang Web standards, hindi ka mahuhuli kahit pa anong frameworks ang mauso o malaos.

## Mga Bagong Features ng Web Platform

### HTML

Sa pagpasok ng HTML5, may mga 104 na tags tayong puwedeng pagpilian. Pero nakakalungkot, maliit na parts lang nito ang alam ng karamihan sa mga estudyante ng computer courses. At sa mga tags na alam nila, maliit na parts lang din ang alam nilang gamitin <em>nang tama</em>.

Sa mga posts ko sa personal Facebook account ko at pati na rin sa Antares, paulit-ulit kong ine-emphasize ang kahalagahan ng tamang markup. Para kasi talaga rito ang HTML, sa pagbibigay ng meaning sa content. Kaya naman pinasisigla kita mahal kong mambabasa na aralin at gamitin nang tama ang mga tags na ito:

- `main`
- `article`
- `section`
- `aside`
- `footer`
- `address`
- `cite`
- `figure` at `figcaption`
- `i` at `b` (more specifically, ang mga bagong meaning nila sa HTML5)
- `em` at `strong`
- `address`, `cite`, `q`, at `blockquote`
- `details` at `summary`
- `dl`, `dt`, `dd`
- `picture`, `video`, `track`, at `audio`
- `small`, `sup`, at `sub`

At pakisuyo lang din, gamitin ang HTML para bigyan ng meaning ang content, at hindi para baguhin kung ano ang hitsura ng page. Kung gusto mong baguhin ang presentation ng content, gumamit ng CSS.