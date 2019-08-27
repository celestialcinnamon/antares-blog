---
title: 'Mga Formatting Context ng CSS'
author:
  name: Francis Rubio
  image: images/francis-rubio.jpg
lang: tl
date: 2019-08-27 07:39:48
tags: [intrinsic web design]
category: CSS
cover_image: cover.png
---
Sa unang bahagi ng Intrinsic Web Design series, titingnan natin ang mga tools na available na sa atin para mag-layout.
<!--more-->

Sa mga Web design eras bago ang Intrinsic Web Design, nag-focus ang mga Web developers sa pagre-repurpose ng mga CSS property para gamitin sila sa mga bagay na hindi naman talaga para doon ginawa. Halimbawa, para makagawa ng mga "columns", gumamit tayo ng mga float. Dahil dito, mas madaling makalimutan kung para saan talaga ginawa ang mga CSS property na ginagamit natin. Kaya ngayon, simulan nating ibalik sa ayos at i-adjust ang unawa natin sa mga CSS properties. Pag-usapan natin ang mga formatting context.

## Ano ba ang Formatting Context?

Ganito ang definition ng CSS Display specification sa term na <i>formatting context</i>:

> A formatting context is the environment into which a set of related boxes are laid out. Different formatting contexts lay out their boxes according to different rules.<sup id="src-1">[1](#ref-1)</sup>

Sa madaling sabi, ang <dfn>formatting context</dfn> ay isang <i>environment</i> o set of rules para sa paglalatag ng mga boxes, o element, sa isang layout. Ito ang paraan ng pagle-layout.

Para mas lalo iyang maging malinaw, tingnan natin ang isang formatting context na baka madalas mo nang ginagamit nang hindi mo namamalayan: ang <i>Block Formatting Context</i> (BFC)

## Ang Block Formatting Context
Kapag gumagawa tayo ng BFC, gumagawa tayo ng bagong layout environment para sa mga <em>children</em> ng element na iyon. Nagkakaroon tayo ng BFC kapag ang element ay:

- ang root element (e.g. kapag ang element ay `<html></html>`)
- naka-float
- may `position: absolute`
- may `display: inline-block`
- may `overflow` na hindi `visible` ang value
- child ng isang parent na naka-`flex` o `grid`
- isang table cell

Pansinin ang halimbawang ito. Gumawa tayo ng isang container, at sa loob ng container na iyon ay may isang box.

```html
<div class="container">
  <div class="box">
    <p>Paragraph na may <code>float: left</code></p>
  </div>
</div>
```
<p class="codepen" data-height="336" data-theme-id="0" data-default-tab="result" data-user="celestialcinnamon" data-slug-hash="VwZbZeb" style="height: 336px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="VwZbZeb">
  <span>See the Pen <a href="https://codepen.io/celestialcinnamon/pen/VwZbZeb/">
  VwZbZeb</a> by Francis Rubio-Salmazan (<a href="https://codepen.io/celestialcinnamon">@celestialcinnamon</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Dahil naka-float ang `.box` nag-collapse ang `.container`. Nagkakaganito ang `.container` dahil "nawalan ito ng laman"&mdash;inalis natin sa flow ng layout ang `.box` dahil sa nilagay nating `float: left`.

Pero kapag may ginawa tayo sa `.container` na magbibigay dito ng bagong BFC, iko-contain nito ang naka-float na `.box`. Puwede tayong mag-set ng overflow sa `.container`, o puwede rin natin itong lagyan ng float.

```css
.container {
  overflow: hidden;
}

/* OR PUWEDE RING... */

.container {
  float: left;
}
```

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="celestialcinnamon" data-slug-hash="YzKVKpx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="BFC Demo using overflow:hidden">
  <span>See the Pen <a href="https://codepen.io/celestialcinnamon/pen/YzKVKpx/">
  BFC Demo using overflow:hidden</a> by Francis Rubio (<a href="https://codepen.io/celestialcinnamon">@celestialcinnamon</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Kino-contain ng element na may Block Formatting Context ang lahat ng laman nito, regardless kung anomang properties ang mayroon sa mga child nito. Ito rin mismo ang ginagawa ng `overflow: hidden`: itinatago nito ang lahat ng element na lalagpas sa bounds ng element, at gumagawa rin ito ng bagong BFC.

Pero hindi naman para sa pagko-contain ng floated elements ginawa ang `overflow: hidden`, at hindi rin ito ginawa para maging mechanism sa paggawa ng bagong Block Formatting Context. Dahil dito, nagkakaroon tayo ng ilang mga problema kapag ginagamit natin ito sa paggawa ng bagong BFC, gaya halimbawa ng pag-clip sa mga `box-shadow`. Kaya naman may bago na tayong way ngayon ng paggawa ng bagong BFC: ang `display: flow-root`. Sa mga browsers na may support para sa bagong value na ito, pupuwersahin nito ang element na magkaroon ng bagong BFC nang walang unwanted side-effects. Kaya puwede natin itong ilagay sa example natin at ma-achieve ang gusto nating gawin.

```css
.container {
  display: flow-root;
}
```

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="celestialcinnamon" data-slug-hash="gOYWYRz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="BFC Demo using Flow-Root">
  <span>See the Pen <a href="https://codepen.io/celestialcinnamon/pen/gOYWYRz/">
  BFC Demo using Flow-Root</a> by Francis Rubio (<a href="https://codepen.io/celestialcinnamon">@celestialcinnamon</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## In and Out of Flow

Nang lagyan natin ang `.box` ng `float: left`, nag-collapse ang `.container` dahil nawalan ito ng laman; inalis kasi natin ang `.box` sa normal flow ng mga box. Sa normal flow, sinasakop ng mga box na naka-`display: block` (o mga block elements) ang buong width ng parent nito (maliban na lang kung may restrictions gaya ng padding ng parent, o kung may naka-set na width sa block element). Kapag naka-inline naman ang isang element, idi-display sila nang tabi-tabi na parang mga salita sa isang pangungusap.

Inaalis natin sa normal flow ang isang element kapag binigyan natin ito ng `float`, o kung naka-set ito sa `position: absolute` o `position: fixed`. Kapag naka-float ang isang element, "lulutang" ito pataas hanggang sa maka-encounter ito ng block element. Halimbawa, kung ang element na naka-float ay nasa loob ng isang inline element, magpo-float ito hanggang sa i-contain ito ng isang parent na block-level element.

## Sa Susunod na Article

Sa susunod na article, pag-usapan naman natin ang mga float. Nasanay tayo sa Responsive Web Design era na gamitin ang mga float para gumawa ng mga kunwaring columns. Pero pag-usapan natin kung paano sila nagpa-function at kung para saan talaga dapat sila.

## References

- <cite>[The New CSS Layout](https://abookapart.com/products/the-new-css-layout)</cite>, Rachel Andrew. 2017 A Book Apart
- <cite>[Block formatting context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)</cite>, Mozilla Developer Network

## Footnotes
<ol>  
  <li id="ref-1"><a href="#src-1">^</a> [Formatting Context Definition](https://drafts.csswg.org/css-display-3/#formatting-context), CSS Display Specification. CSS Working Group</li>
</ol>

<script async src="https://static.codepen.io/assets/embed/ei.js"></script>