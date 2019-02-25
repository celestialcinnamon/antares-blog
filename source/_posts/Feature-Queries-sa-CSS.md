---
title: Feature Queries sa CSS
author:
  name: Francis Rubio
  image: images/francis-rubio.jpg
lang: tl
date: 2019-02-17 18:09:50
tags: [css, web, intrinsic web design]
categories: CSS
is_featured: true
cover_image: cover.png
cover_gradient: "linear-gradient(#fff, #f55, #333)"
---

Paano mo masisigurong gagana sa lahat ng browsers ang design ng Web site mo? Kasama sa isang set ng techniques na kung tawagin ay <i>progressive enhancement</i> ang bagong feature ng CSS, ang Feature Queries.

<!--more-->

Kilala rin ang Feature Queries bilang `@supports` rule. Gaya rin ito ng Media Queries, pero sa halip na type ng device, width or height ng viewport, atbp., tinitingnan nito kung supported ba ng browser ang isang feature na gusto mong gamitin. Para itong `if` statement sa CSS.

Kaya ito idinagdag sa CSS para makagawa tayo ng mga styles gamit ang pinakabagong CSS at magkaroon ng <i>graceful degradation</i> sa mga browsers na hindi sinu-support ang feature na gusto nating gamitin. Totoo, bago pa man lumabas ang Feature Queries, nasa dugo na ng CSS na mag-degrade gracefully; kapag hindi supported ng browser ang ginamit na style, ini-ignore lang ito. Sa paraang ito, hindi nasisira o naaapektuhan ang ibang styles na supported naman ng browser. Pero gaya ng makikita sa karanasan ng maraming Web developers, at dahil na rin sa bilis ng mga pagbabago sa Web platform, kailangan natin ng higit pa sa basta pag-ignore lang sa mga unsupported properties.

<aside class="side-note"><dl><dt>Graceful Degradation</dt><dd>Isang phenomenon sa Web platform kung saan binibigyan ng Web developer ang mga users ng pinakabagong browsers ng pinakamagandang experience gamit ang mga bagong features ng Web platform (hindi lang CSS) at binibigyan naman ng isang experience na may mas kaunting features ang mga users ng mga browsers na mas luma.</dd><dd>Halimbawa, puwedeng makakuha ang isang user ng pinakabagong Firefox ng isang site na gumagamit ng CSS Grid, pero para sa mga users ng Internet Explorer, makakakuha sila ng isang single-column layout na walang Grid. Nag-degrade ang experience sa Internet Explorer dahil walang CSS Grid, pero gumagana pa rin ito nang maayos.</dd></dl></aside>

Sa mga browsers, Opera ang pinakaunang nag-implement ng Feature Queries noong November 2012. Samantala, humabol naman ang Chrome at Firefox noong May 2013. Kaya kung mapapansin may halos limang taon na ang lumipas mula nang ilabas ito, pero hanggang ngayon parang kakaunti pa lang ang nakakaalam na may ganito pala. Noong December 2017, supported na ng 91.68% ng mga browsers ang Feature Queries. At tanging Internet Explorer na lang at Blackberry Mobile ang hindi nakakahabol, at, sa kaso ng IE, hindi na hahabol pa.

Siguro kung nasa industry ka na, baka kailangang i-support mo pa rin ang Internet Explorer dahil hanggang ngayon may mga companies na mandatory na gamitin ang IE, kahit na unti-unti nang inaabandona at dini-discourage ng Microsoft ang paggamit nito. Pero 'wag kang mag-alala, dahil ito mismo ang tatalakayin natin: kung paano gagawa ng sites na gagana sa lahat ng browsers.

## Browser Support Matrix

Sa isang artikulo ni Jen Simmons, ang <cite>Using Feature Queries in CSS</cite>, gumawa siya ng isang matrix o table ng mga situwasyong puwedeng mangyari kapag gumagamit tayo ng Feature Queries. Sa matrix na ito, mayroon tayong dalawang axis:

- Supported ba ng browser ang Feature Queries o hindi?
- Supported ba ng browser ang condition sa loob ng `@supports`?

|May `@supports`|Walang `@supports`| |
|---|---|--|
|1. not ok| 2. ok|Supported ang feature|
|3. ok| 4. ok|Hindi supported ang feature|

Sa matrix na ito, makikita natin na mayroong apat na scenario na puwedeng mangyari. Para mapadali ang pag-intindi natin, gamitin nating halimbawa ang Flexbox. Gusto natin kunwari na malaman kung anong mga browser ang nagsu-support sa Flexbox. Magkakaroon tayo ng apat na scenario:

1. <b>NOT OK:</b> Walang Feature Query ang browser, pero supported ang flexbox.
1. <b>OK:</b> May Feature Query ang browser, at supported din ang flexbox.
1. <b>OK:</b> May Feature Query ang browser, at pero hindi ang flexbox. Ayos lang ito dahil puwede kang gumawa ng backup, or <i>fallback</i> na design kung sakaling walang flexbox support.
1. <b>OK:</b> Walang Feature Query ang browser, at hindi rin supported ang flexbox. Same pa rin sa #2. Puwede kang gumawa ng fallback na layout in case na hindi gumana ang flexbox.

Sa unang kaso, hindi ito maganda. Wala tayong way para mapagana ang flexbox sa kahit na anong paraan. Lahat ng code sa loob ng Feature Query hindi gagana dahil hindi ito recognized ng browser. Kaya kahit na may mga code sa loob ng Feature Query na gumagana naman sa browser, gaya ng flexbox, hindi ito makikita ng browser. Kaya itong unang kasong ito ang dapat nating gawan ng paraan.

## Ang Basics ng Feature Queries

Gaya sa kahit na anong conditional structures ng CSS, gumagamit ng boolean logic ang Feature Queries. Kapag naging `true` ang result ng query, mag-a-apply ang code sa loob ng Feature Query. Otherwise, hindi na ito papansinin altogether.

```css
.selector {
  /* Mga styles na gagana sa lahat ng browsers */
}

@supports (property:value) {
  .selector {
    /* Mga styles na gagana lang sa mga browser na sinu-support ang property */
  }
}
```

Pansinin na required ang parenthesis sa palibot ng `property: value`. At bukod pa riyan, dapat laging mauna ang mga styles na gagana sa mga lumang browser, kasama na ang mga fallback styles. Pagkatapos nito, saka mo pa lang puwedeng ilagay iyong mga bagong properties sa loob ng `@supports` block. Dahil sa <i>cascade</i> ng CSS, unang maa-apply ang mga fallback style, at kapag supported ng browser ang bagong properties, saka lang nito io-override ang code.

Halimbawa, pansinin ang code na ito:

```css
.element {
  background-color: red;
}

@supports (display: grid) {
  .element {
    background-color: green;
  }
}
```

Una munang maa-apply ang red na background color sa `.element`. Kung supported ng browser mo ang CSS grid, magiging kulay green ang box sa ibaba. Kung kulay red pa rin ito, hindi supported ng browser mo ang CSS grid (at sign iyon na dapat mag-update ka na; <i lang="en">you're missing half of your life.</i>)

<div id="example-480452" class="example-container">
<style>
  #example-480452 .element {
    height: 100px;
    width: 100px;
    background-color: red;
    margin: 1rem;
  }
  @supports (display:grid) {
    #example-480452 .element {
      background-color: green;
    }
  }
</style>
<div class="element"></div>
</div>

## More Feature Queries

Dahil hindi ko kini-claim na expert ako sa CSS, gusto kong i-direct ang lahat ng nagbabasa nito sa napakahusay na article na ito ni Chen Hui Jing: [Cascading Web Design with Feature Queries](https://24ways.org/2017/cascading-web-design/). Sa article na iyan, tinalakay niya kung sa paanong iba pang mga paraan natin puwedeng magamit ang mga Feature Queries, at ang iba pang problems na puwedeng lumitaw mula rito.

Puwede mo ring basahin ang mga articles na ito:

- [How to use the `@supports` rule in your CSS](http://www.creativebloq.com/css3/how-use-supports-rule-your-css-11410545) ni Lea Verou, Enero 31, 2014
- [Responsive typography with CSS Feature Queries](https://ar.al/scribbles/responsive-typography-with-css-feature-queries/) ni Aral Balkan, Abril 9, 2013

## Challenge

Kaya mo kayang gawing <i lang="en">progressively enhanced</i> ang kahit na anong site na gawa mo (or pina-practice mong gawin) gamit ang CSS Feature Queries? Kaya mo bang iangkop ang design ng site mo para magmukha pa rin itong maayos sa lahat ng browsers, kasama na ang Internet Explorer 9 (or 8 kung medyo masipag ka)?