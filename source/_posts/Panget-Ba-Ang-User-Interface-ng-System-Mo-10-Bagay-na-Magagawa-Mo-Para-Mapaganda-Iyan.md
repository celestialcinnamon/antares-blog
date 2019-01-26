---
title: Panget Ba Ang User Interface ng System Mo? 10 Bagay na Magagawa Mo Para
  Mapaganda Iyan
author:
  name: Francis Rubio
  image: images/francis-rubio.jpg
lang: tl
date: 2019-01-18 17:39:15
tags: [design]
category: Design
is_featured: true
cover_image: cover.png
---
Kung hindi ka designer, may mga paraan para mapaganda mo ang user interface ng system na ginagawa mo.

<!--more-->

Bilang estudyante ng Computer Science at Web designer by profession, madalas kong makita ang mga <i lang="en">boring</i> na user interface na ginagawa ng mga kaklase ko, pati na ng ibang mga nagpapatulong sa akin. Hindi naman din natin sila masisisi. Unang-una, hindi nakakatanggap ng recognition mula sa mga professor at panelists ang magagandang user interfaces. Naiinis ako rito dahil talagang ma-effort ako sa pagde-design ng UI, pero hindi pinapansin ng panelists sa mga defense. Ikalawa, sa industry, kung talagang programmer ka, trabaho ng UI/UX designer ang pagde-design, meaning, wala kang pakialam sa magiging aesthetics ng app o system na gagawin mo.

Pero siyempre para ma-build ang portfolio mo at madagdagan ka ng puwedeng ipakita sa recruiters, puwedeng gumawa ka ng open-source projects. Dito papasok ang kahalagahan ng disenteng UI. Hindi naman kailangang magandang-maganda ang UI ng project mo. Ang kailangan lang ay iyong hindi masakit sa mata.

Sa maraming kaso, kung desktop programming ang track na tinatahak mo, ayos nang iwan mo sa default ang pangkalahatang theme ng app o system na ginagamit mo. Halimbawa, kung ang language mo ay Visual Basic .NET o C#, mas ire-recommend ko na huwag mo nang baguhin ang kahit anong design ng UI dahil kusa itong magbabago depende sa version ng Windows na gamit mo. Halimbawa, sa isang project na meron ako, gumawa ako ng <abbr title="Windows Presentation Foundation">WPF</abbr> application sa Windows 7. No'ng ni-run ko iyon sa Windows XP, Windows 8.1, at Windows 10, nag-adapt ang UI ng app ko sa look-and-feel ng OS na ginagamit. So kung gagawa ka ng desktop app, either iwan mo iyong default na theme, or lagyan mo ng theme at custom design ang *bawat UI component* para sa tinatawag nating **consistency**.

Ganito rin kapag mobile app ang ginagawa mo. Lalo na kung mobile app ang gamit mo. Taon-taon may bagong version ng Android at iOS. At taon-taon ini-improve ang experiences dito kaya kahit hindi mo i-update ang app mo, ia-update ng OS ang experience ng user ng app mo. Generally, kapag gumawa ka ng app sa Android, at lalo na sa iOS (may matinding pagpapahalaga ang Apple sa user experience), ayos na iyong default na styling. Basta sisiguraduhin mo na lang na ginagamit mo ang tamang UI component para sa tamang purpose.

Pero ibang usapan sa Web. Dito may dalawa kang choices: either gumamit ng CSS frameworks/libraries o i-code from scratch ang UI. Kung hindi mo talaga nae-enjoy ang design, puwede kang gumamit ng CSS frameworks like Bootstrap or Foundation. Pero para sa akin, mas okay kung from scratch na lang. Una, kapag gumamit ka ng frameworks, hindi lahat ng nandoon magagamit mo. Oo, sa mga site nila puwede mong i-customize kung alin lang ang gagamitin mo, pero ilan sa atin ang gumagawa no'n? Palagay ko wala. Pangalawa, mas matututo ka ng CSS. Mahalaga iyan kung Web Developer ka. Sa susunod na isa o dalawang dekada, wala nang gagamit ng Bootstrap o Foundation (hindi ko 'to ni-research, nilagay ko lang for emphasis, prediction ko lang <i lang="en">don't @ me</i>). Pero kung alam mo ang CSS, hindi ka mahuhuli career-wise dahil hindi mapapalitan ang CSS anytime soon.

Kung napagdesisyunan mong i-code ang UI mo from scratch (Web), o gumawa ng sarili mong styling (desktop/mobile), ito ang sampung tips para maging disente ang UI mo. Note: hindi magiging sobrang ganda ang UI mo afterwards (aminin natin iyan, hindi tayo gano'n kagaling sa lahat ng bagay), pero magiging mas kaayaayang tingnan ang UI natin.

## 1. Maging consistent at huwag mahiyang damihan ang spacing

Isa sa mga napansin ko sa ibang user interfaces ay sobrang liit ng mga buttons. Pagkatapos dikit-dikit pa. Kahit may mouse, hindi ito madaling gamitin. Kaya ang advice sa atin ay huwag nating tipirin ang spacing.

<style>
  .example-container>button{
    font-size: 12px;
  }
</style>
<div class="example-container">
  <button style="padding: 0;">Di-sapat na spacing</button>
  <button style="padding: 0.5rem 1rem;">Ayos na spacing</button>
</div>

Sa example na ito, inayos lang natin ang padding. Iyong pangalawang button ay may padding na `0.5rem` sa top at bottom, at `1rem` naman sa magkabilang side. Mas nabibigyan ito ng "breathing room" para "makahinga" iyong buttons.

Isa pang halimbawa ng spacing ay ang <i lang="en">line height</i>. Ang line height ay iyong taas ng bawat line ng text. Kilala rin ito sa tawag na line spacing. In general, dapat mas malaki nang 20-30% ng font size ang line height. Sa Web, ganito ang default (again, wala akong source rito, napapansin ko lang). Pero gaya ng ginawa ko sa site na ito, nag-double spacing ako at doble ng font size ang line height. Wala namang nagsasabi sa akin na hindi nila gusto ang line height na ginamit ko; honestly, hindi nila napapansin. At ito ang pinakamagandang compliment, kapag nagbe-blend sa environment ang design, hindi ito napapansin ng user. Saka kaya tayo nire-require sa mga thesis documentation na mag-double spacing dahil puro text ang documentation at nakaka-strain ng mata ang dire-diretsong text. Kaya kapag may maraming space sa pagitan ng bawat line, mas nakakahinga ang text.

Kung may mga paragraph ka naman sa UI, sikapin mong i-contain sa 50-60 characters ang bawat line ng text. Una, aesthetically pleasing ito. Pangalawa, hindi nakakapagod sa mata. Nag-e-exert na ang mata mo ng effort na mag-focus sa mga letra, 'tapos mag-e-exert pa ulit ng effort na gumalaw from left to right sa buong screen. Mas maliit na width para sa maraming text, mas maganda.

Ang susi rin dito ay consistency. 'Wag pabago-bago sa spacing. Kung ang buttons mo ay may padding at margin na 20px, sikapin mong gawing gano'n din ang ibang buttons, maliban na lang kung sinasadya mo talaga at iyon ang nasa aesthetics ng UI mo.

## 2. Gumamit ng patterns at textures

Sa light mode ng site na ito, mapapansin mong may nilagay akong texture sa background. Dahil dito hindi siya pure white, na una nakakaubos ng battery sa mobile kapag mataas ang brightness, at ikalawa masakit sa mata. As an alternative, puwedeng 'wag kang gumamit ng pure white gaya ng `#ddd`, `#eee`, at `#fafafa`. Pero para sa aesthetics, maganda kung may patterns kang ginagamit or textures.

<figure class="img-wrapper img-wrapper--illustration float-left">
    {% asset_img prism.png "Repeating pattern example" %}
    <figcaption>Isang halimbawa ng repeating pattern.<div>
      (Mula sa [Subtle Patterns](https://www.subtlepatterns.com))
    </div></figcaption>
</figure>

Marami kang patterns na makukuha sa site ng [Subtle Patterns](https://www.subtlepatterns.com). Personally takbuhan ko 'to kapag wala akong maisip na design. Ang maganda sa mga pattern na ito, subtle sila, hindi gaanong napapansin. At maliliit ang file size nila, kaya puwede silang gamitin sa Web.

Ang gagawin mo rito, gagawin mo siyang background image sa page mo. 'Tapos ise-set mo lang ang `background-repeat` sa `repeat` gaya ng halimbawa sa baba:

<div class="example-container" style="background-image: url(./roughcloth.png); background-repeat: repeat; background-color: #F4F4F4;">
  <h1>Example ng pattern background</h1>
</div>

Huwag mo ring kalimutang i-set ang `background-color` sa kulay ng pattern para hindi ito mag-pure white habang nilo-load pa ang image pattern mo.