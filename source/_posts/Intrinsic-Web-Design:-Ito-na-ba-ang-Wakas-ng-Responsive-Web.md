---
title: 'Intrinsic Web Design: Ito na ba ang Wakas ng Responsive Web?'
date: 2018-12-23 20:25:15
tags: [css, web, intrinsic web design]
categories: CSS
language: tl
author: 
    name: Francis Rubio
    image: images/francis-rubio.jpg
is_featured: true
cover_image: cover.png
cover_gradient: "linear-gradient(#fff, #f55, #333)"
---

Mainit na mainit sa mga Web designers at developers ang RWD o Responsive Web Design. Pero simula noong 2017, may bagong <i lang="en">buzzword</i> na binabato, isang technique na papalit sa Responsive Web Design: ang <em>Intrinsic Web Design</em>. Dapat mo ba itong pag-aralan, o isa lang ito sa mga bagong uso na malalaos din pagkatapos ng dalawang taon? Sulit bang pag-aralan ang Intrinsic Web Design?

<!--more-->

{% asset_img cover.png "CSS Grid example by Jen Simmons, recreated by Francis Rubio" %}

Isang taon na mula nang unang marinig ng mundo ang terminong <i>Intrinsic Web Design</i> galing kay Jen Simmons sa An Event Apart, pero sa hindi pa ito gaanong matunog sa Pilipinas (or at least sa mga kakilala ko). Ito, ayon kay Jen Simmons, ang papalit sa nakasanayan nating Responsive Web Design. Sabi pa niya, isa itong bagong <i>era</i> ng Web design. Ano ang ibig niyang sabihin?

## Ang Iba't Ibang Era ng Web Design

Matagal nang umiiral ang World Wide Web, at malayo na ang narating nito simula <span id="ref-1">nang maimbento ito ni Tim Berners-Lee noong 1990.</span><sup>[1](#foot-1)</sup> Naging platform din ito para sa mga artist na nagnanais maglabas ng mga gawa nila sa mundo, o sa mga kompanyang nagnanais gawing artistic ang Web sites nila para umayon sa branding ng kompanya.

Pero hindi hawak ng designers at developers ang lahat ng tools na magagamit para makagawa ng perpektong design. Kaya naman pumasok tayo sa iba't ibang era ng Web design. Bawat isang era ay may natatanging technique o hack na ginagamit para magawa ang design.

### Flow Layout

Sa era na ito ng Web design, masasabing walang "design" na gaya ng mayroon tayo ngayon. Puro text ang Web noon at puro mga teknikal na tao pa lang ang gumagamit sa Web. Dumating ang panahon na nakapaglagay na ng images sa mga Web page, pero bukod doon, wala nang ibang design.

### Table Layout

Sa era na ito ng Web design, pumasok na tayo sa isang panahon kung kailan unti-unti nang dumarami ang users ng Web. Masasabing dito rin nagsimula ang "design" sa Web. Gumamit ang mga Web developers ng `<table>` tags para gumawa ng mga layout sa mga Web page nila. Gumamit din sila ng mga tinatawag na <i>spacer GIFs</i>, i.e., mga GIF images na 1px&times;1px ang laki para lang magkaroon ng laman ang mga table cells at maging maayos ang mga layout ng Web pages.

### Fixed-Width vs. Fluid Layout

Dito sa era na ito, nagkaroon ng dalawang magkalabang opinyon sa Web design. May mga nagsasabi na dapat nating gawing fixed-width ang mga layout, gaya sa mga printed materials. Dahil kahit na kakaunti lang ang iba't ibang screen sizes noon, hindi pa rin natin kayang tiyakin kung ano'ng size ng screen ng mga users. Kaya dapat nating gawing naka-fixed ang laki ng layout.

May mga nagsasabi naman na "hindi, dapat nag-aadapt sa size ng screen ang layout." Dapat na nagre-resize din ito depende sa viewport. Hindi ako eksperto sa kasaysayan ng Web design, pero sa tingin ko, ang fluid layout ang naging <i lang="en">precursor</i> ng Responsive Web Design.

Dalawang naglalabang opinyon, pero parehas na may punto. Sa era na ito, nagkaroon ng kritikal na desisyon kung aling direksyon sa sining ang tatahakin ng bawat designer, at kung paano ito ie-execute ng mga developer.

### Responsive Web Design

Ang era na ito ang pinakakilala ng marami sa atin sa ngayon. Ito ang era ng <i>float-based layouts</i>. Sandamakmak na `float: left` at mga <i>clearfix</i> ang ginamit natin sa mga design para makagawa ng mga layout. Ito ang era ng 12-column layouts. Dito rin sumikat ang mga frameworks na gaya ng Bootstrap, Foundation, 960 grid, at iba pa.

Sa panahong ito rin halos nawala ang "art direction" sa Web. Dahil karamihan ng Web sites ay gumagamit ng iyon at iyon ding frameworks na may 12-columns, naging magkakamukha silang lahat. Nalimitahan ang pagkamalikhain sa Web. Pero ang maganda naman dito, lumitaw ang <i>mobile-first designs</i> at gumagana sa lahat ng device ang mga Web site.

### Adaptive Web Design

Hindi rin siguro ito matunog sa mga kakilala ko, pero mga ilang taon pagkatapos sumikat ang Responsive Web Design, lumabas ang Adaptive Web Design. Hindi nito pinalitan ang RWD; sa halip, dinagdagan nito ang RWD ng maraming kakayahan. Sa RWD, lahat ng transformations sa layout at adjustments ay nangyayari sa browser, gamit ang CSS, at kung minsan, JavaScript. Pero nang dumating sa eksena ang Adaptive Web Design, sumama ang server sa pagbibigay ng magadang experience sa mga user.

Dahil mobile-first na ang Web, at mabagal ang Internet speeds para sa mga mobile devices, hindi puwedeng mag-send sa mobile devices ng mga high-resolution images gaya ng ginagawa sa mga desktop. Kaya nagde-decide ang server kung aling size ng image ang ipapadala nito sa device depende sa width ng viewport nito. At hindi lang ito natatapos sa width ng mga images, dahil may mga sites na gumagawa ng dalawang magkaibang site para sa desktop at sa mobile para mabawasan ang file size ng CSS nila sa mobile devices.

Ito ang mga era ng Web design na alam natin sa ngayon. Posibleng may mga overlaps at mga hindi ako nabanggit, pero sa pangkalahatan, ang punto nito ay maraming pinagdaanan ang Web para makarating sa kung nasaan man ito sa ngayon.

## Ang Pagpasok ng Intrinsic Web Design


<aside class="side-note" id="intrinsic">
    <dl>
        <dt lang="en">intrinsic</dt>
        <dd lang="en">
            (adj.) belonging to a thing by its very nature. Inherent. Innate
        </dd>
    </dl>
</aside>

Ang pangako ng Intrinsic Web Design ay nasa pangalan na mismo nito: <em>intrinsic</em>. Hindi na natin kailangan ng frameworks para makagawa ng mga komplikadong layouts. Hindi na natin kailangang gumamit ng mga CSS properties na ginawa para sa ibang dahilan para lang magawa ang gusto nating design.

Isang halimbawa nito ang `float` property sa CSS. Simula noong Table Layout era, nakabase na ang mga design ng Web pages sa mga grid. At kahit sa paintings at ibang artworks, malawakang ginagamit ang mga grid. Pero dahil sa kakulangan ng features ng CSS, hindi natin ito ma-replicate nang maayos. Kaya gumamit tayo noon ng `<table>` tags, at nang magtagal, ginamit natin ang `float` property para gumawa ng mga "column". Matrabaho ito, oo, pero mas mabuti na ito kaysa sa paggamit ng `<table>` o ng `<frameset>`, na parehong nagpapahaba ng markup.

Pero dumating sa mga browser ang `display: flex` at `display: grid` features ng CSS, at sa wakas, nagkaroon ng tunay na grid system sa Web. Kaya naman hindi na natin kailangang gumamit ng `float` (na ginawa para sa ibang mga bagay) para gumawa ng mga columns. At ang maganda pa rito, dahil sa CSS Grid, hindi na tayo naka-focus sa columns; kaya na rin nating manipulahin ang rows. Ang CSS Grid ang pinaka-powerful na feature ng CSS sa ngayon.

## Ang Pagbabalik ng Art Direction sa Web Design

Siguro kanina mo pa napapansin na paulit-ulit kong sinasabi itong "art direction". Nawala kasi ang art sa Web design noong Responsive Web Design era. Pero sa Intrinsic Web Design, napakarami na nating tools na magagamit para sa kahit anong design at layout na maisip natin. Puwede na tayo ulit kumuha ng inspirasyon sa mga layout ng magazines, printed materials, at sa mga gawa ng mga artists na gaya ni Jan Tsichold.

Kasama sa mga layunin ng Intrinsic Web Design ay ang pagbabalik ng design sa Web. <em>Kahit ano, puwede.</em> Sa tulong ng mga bagong tools na built-in na sa CSS, makakagawa tayo ng eleganteng mga design. Kaya naman pinasisigla ang lahat, kapuwa mga designers at developers, na pag-aralan ang lahat ng options na mayroon para maging buhay muli ang Web, sa diwa na hindi na magkakamukha ang mga Web site.

Napakaraming halimbawa rito si Jen Simmons sa kaniyang [experimental lab](https://labs.jensimmons.com/) (at inoobliga kitang tingnan ito para sa kapakanan mo 😉). Makikita mo sa Web site niya ang iba't ibang artworks sa tunay na mundo na ni-recreate niya gamit ang HTML at CSS. Pinatutunayan lang nito na marami tayong puwedeng gawin gamit ang mga tools na available na sa atin.

## Ang Mga Tools ng Intrinsic Web Design

Dahil nga ang pangako ng IWD ay built-in na sa CSS ang mga tools na gagamitin natin, at na hindi na natin kailangang gumamit ng mga "hack" o gumamit ng mga properties na ginawa para sa ibang mga bagay, dumami ang mga tools na magagamit natin.

- Flexbox
- Grid
- CSS Shapes
- Clip Path
- `object-fit` et. al
- Variable fonts
- `@supports`
- Bagong dagdag sa Writing Modes
- Viewport units (`vh` at `vw`)

Ang lahat ng ito ay built-in na sa CSS, at <strong>hindi na natin kailangan ng frameworks</strong>. Ang article na ito ang una sa series ng mga articles tungkol sa Intrinsic Web Design. Sa mga susunod pang articles, susubukan nating talakayin ang iba't ibang tools na ito at kung paano sila gagamitin sa mga Web sites natin. Kaya laging i-check ang tag na <a href="/antares-blog/tags/intrinsic-web-design/" class="tag">#intrinsic web design</a> sa Antares Blog.

## Mga Tanong Tungkol sa Intrinsic Web Design

### Ibig bang sabihin nito, hindi na tayo gumagamit ng `float`?

Siyempre hindi! Tandaan, ang `float` property ay ginawa na kagaya ng text wrapping sa Microsoft Word. May silbi pa rin ito. Sa katunayan, ang isang bagong feature ng CSS, ang CSS Shapes, ay nakasentro sa paggamit ng floated elements. At mismo sa site na ito, malawakang ginagamit <em>sa tamang paraan</em> ang mga float, gaya nitong [definition ng salitang "intrinsic"](#intrinsic).

### Hindi natin puwedeng gamitin iyang bagong features ng CSS kasi may mga lumang browser pa rin na ginagamit sa mga kompanya, like iyong Internet Explorer.

Hindi ito valid reason para iwasan ang mga bagong features ng CSS. Kung isasantabi mo ang pag-aaral ng mga bago sa CSS, inilalagay mo sa peligro ang career mo, dahil lahat ng iba pang developer inaaral na iyon. Ang CSS Grid ay supported na sa mahigit 88% ng mga Web users worldwide. At bukod pa riyan, mayroon tayong tinatawag na <i>progressive enhancement</i>. Kaya kung ang target users mo ay mga users ng IE at iba pang lumang browsers, puwede mong i-develop ang site mo gamit ang mga features na gumagana sa mga iyon, at saka mo idagdag ang mga bagong features na ginagamit na ng marami ngayon.

### Eh 'di say no to Bootstrap etc. na? Hindi na namin sila pag-aaralan?

Nope, depende pa rin sa inyo iyon. Marami pa rin ang gumagamit ng Bootstrap at Foundation, pati ang ibang mga framework. Kaya dapat alam pa rin natin kung paano sila gumagana para makahanap tayo ng trabaho. Ganoon naman lagi sa mundo ng technology; kahit na may bago nang lumabas, hangga't may gumagamit ng luma, kailangang alam natin kung paano gawin ang luma.

### Paano kung ni-require kami na huwag gumamit ng mga bagong features ng CSS?

Again, walang masama kung gagamitin natin iyong mga nakasanayan na natin. Kung kailangan mong mag-stick sa mga frameworks, walang problema. Kung gusto mong iwasan ang flexbox at CSS grid para gumamit ng float-based layout, nasa sa iyo ang desisyon. Ang mahalaga naman lagi rito ay kung ano ang magiging experience ng mga user ng site mo. At bukod pa diyan, ang experience ng mga developers sa paggawa ng Web sites. Mas madali kung tutuusin para sa atin na gamitin ang mga bagong tools na ito, pero wala rin namang masama kung gagamit tayo ng kutsilyo pambukas ng lata sa halip na gumamit ng can opener. Gagana iyon, pero mas madali kung may can opener.

---
## Footnotes
1. <span id="foot-1"><a href="#ref-1">^</a> Wikipedia: [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners_lee).</span>