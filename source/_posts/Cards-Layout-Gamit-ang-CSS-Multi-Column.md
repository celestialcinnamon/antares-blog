---
title: Cards Layout Gamit ang CSS Multi-Column
author:
    name: Francis Rubio
    image: images/francis-rubio.jpg
lang: tl
date: 2019-03-06 17:44:25
tags: [css, web design, intrinsic web design]
category: CSS
---

Hindi lang sa mga articles magagamit ang Multi-Column Layout. Tingnan kung paano makakagawa ng card layouts na kagaya ng sa Pinterest.

<!--more-->

Kung pamilyar ka sa Pinterest, maaalala mong ganito ang layout ng mga cards nila:

<figure class="img-wrapper img-wrapper--illustration">
  <img src="Pinterest-new-feed.png" alt="Isang snapshot ng card layout ng Pinterest.">
  <figcaption>Ang cards layout ng Pinterest, kung saan ang mga cards ay may iba't ibang height.</figcaption>
</figure>

Sa unang tingin, baka maisip mo na ang ginamit dito ay CSS grid o flexbox. Pero tingnan natin kung bakit hindi iyon ang gusto nating gamitin sa ganitong layout.

## Trial #1: CSS Grid

Gusto natin na maging responsive ang lahat ng cards natin. Kaya sa mobile, isa-span lang ng mga cards ang width ng buong screen, kaya ang lahat ng cards layout CSS natin ay ilalagay natin sa loob ng isang media query.

```css
@media (min-width: 720px) {
    .container {
        display: grid;
        background-color: #333;
        padding: 1rem;

        grid-template-columns: repeat(auto-fit, 100px);
        grid-gap: 1rem;
    }

    .card {
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        min-height: 100px;
    }
}
```

<div class="example-container" id="example-1">
  <style>
    #example-1 {
      display: none;
    }
    
    #example-1  .container {
        display: grid;

        grid-template-columns: repeat(auto-fit, 100px);
        grid-gap: 1rem;
        margin: 1rem;
    }

    #example-1 .card {
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        min-height: 100px;
    }

    @supports(display: grid) {
      #example-1-snapshot {
        display: none;
      }

      #example-1 {
        display: block;
      }
    }

  </style>
  <div class="container">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </div>
</div>

<figure class="img-wrapper img-wrapper--illustration" id="example-1-snapshot">
  <img src="example-1.png" alt="Kung hindi supported ng browser mo ang CSS grid, ganito dapat ang makita mo.">
</figure>

Mukhang ayos naman. Pero paano kapag magkakaiba na ang height ng mga cards, gaya sa Pinterest?

<div class="example-container" id="example-2">
  <style>
    #example-2 {
      display: none;
    }
    
    #example-2  .container {
        display: grid;

        grid-template-columns: repeat(auto-fit, 100px);
        grid-gap: 1rem;
        margin: 1rem;
        align-items: start;
    }

    #example-2 .card {
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        min-height: 100px;
    }

    #example-2 .card:nth-child(odd) {
      background-color: #acf;
      min-height: 200px;
    }

    #example-2 .card:nth-child(even) {
      background-color: #fca;
      min-height: 150px;
    }

    @supports(display: grid) {
      #example-2-snapshot {
        display: none;
      }

      #example-2 {
        display: block;
      }
    }

  </style>
  <div class="container">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </div>
</div>

<figure class="img-wrapper img-wrapper--illustration" id="example-2-snapshot">
  <img src="example-2.png" alt="Kung hindi supported ng browser mo ang CSS grid, ganito dapat ang makita mo.">
</figure>

Ooops. Medyo hindi maganda ang effect. Sa layout ng Pinterest, magkakarugtong ang mga cards. Pagkatapos ng isang card, kasunod agad nito ang isa pang card, hindi gaya sa example natin dito na magkakahiwalay. Ano ba ang nangyayari, bakit hindi sila magkakarugtong?

Kung Firefox ang gamit mo, puwede mong i-inspect ang example natin at makakakita ka ng mga ganitong grid lines:

<figure class="img-wrapper img-wrapper--illustration">
  <img src="example-2-grid.png" alt="Kung hindi supported ng browser mo ang CSS grid, ganito dapat ang makita mo.">
</figure>

Kaya pala. Hindi nagdurugtong ang mga cards dahil nasa magkakaiba silang grid cell. At ito ang isa sa mga limitations ng CSS layout. Masyadong rigid ang grid, at hindi ito puwedeng gawing flexible.

Speaking of flexible, para yatang may CSS property na binuo para maging flexible? Tama! Ang Flexbox. Subukan naman nating gawin iyon.

## Try #2 Flexbox

Gawin ulit natin ang gaya ng sa grid example kanina:

```css
.container {
    display: flex;
    background-color: #333;
    padding: 1rem;

    flex-wrap: wrap;
    gap: 1rem;
    align-items: start;
}

.card {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    min-width: 100px;
    min-height: 100px;
}
```

Again ayos na ulit ito kapag same widths and heights ang mga cards. Pero paano kapag magkakaibang heights gaya sa Pinterest?

<div class="example-container" id="example-3">
  <style>
    #example-3 {
      display: none;
    }
    
    #example-3  .container {
        display: grid;

        grid-template-columns: repeat(auto-fit, 100px);
        grid-gap: 1rem;
        margin: 1rem;
        align-items: start;
    }

    #example-3 .card {
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        min-height: 100px;
    }

    #example-3 .card:nth-child(odd) {
      background-color: #acf;
      min-height: 200px;
    }

    #example-3 .card:nth-child(even) {
      background-color: #fca;
      min-height: 150px;
    }

    @supports(display: grid) {
      #example-3-snapshot {
        display: none;
      }

      #example-3 {
        display: block;
      }
    }

  </style>
  <div class="container">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </div>
</div>

Gano'n pa rin pala ang results. Ang nangyayari rito, ginawa nating `flex` ang `.container`. Kaya ilalatag nito ang mga `.card` pa-horizontal. Pero dahil naka-set ang `flex-wrap: wrap`, magra-wrap ang cards sa next line kapag napuno na ang buong width ng container. Pero gaya sa Grid, rigid ang row ng flexbox, kaya naman hindi puwedeng dumugtong ang mga vertically-aligned cards.

## Try 3: CSS Multi-Column Layout

Tingnan mo naman ang effect kapag Multi-column layout ang ginamit natin:

<div class="example-container" id="example-4">
  <style>
  #example-4 .container {
    display: block;
    background-color: #333;
    padding: 1rem;
    
    columns: 100px;
    column-gap: 10px;
  }

  #example-4 .card {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    min-height: 100px;
    margin: 1rem auto;
  }

  #example-4 .card:nth-child(odd) {
    background-color: #acf;
    min-height: 200px;
  }

  #example-4 .card:nth-child(1) {
    margin-top: 0;
    min-height: 50px;
  }

  #example-4 .card:nth-child(3) {
    min-height: 30px;
  }

  #example-4 .card:nth-child(4) {
    min-height: 200px;
  }

  #example-4 .card:nth-child(5) {
    min-height: 50px;
  }

  #example-4 .card:nth-child(6) {
    min-height: 300px;
  }

  #example-4 .card:nth-child(7) {
    min-height: 150px;
  }

  </style>
  <div class="container">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </div>
</div>

Ganito mismo ang gusto nating mangyari! Pero paano natin ito ginawa?

Una muna nating inilagay ang `columns` property.

```css
.container {
  columns: 100px;  
}
```

Ang `columns` property ay isang CSS feature na kagaya ng two columns sa mga word processing applications. Idinetalye ko kung paano gumagana ang Multi-column Layout sa <a href="https://www.youtube.com/watch?v=L7Zp1n6IoCk" target="_blank">unang episode ng Antares Vlog</a>. Sa example natin, hahatiin nito ang `.container` sa mga columns na tig-`100px` ang lapad o width. Pero hindi gaya ng grid o flexbox, pupunuin muna nito ang isang column mula taas pababa, at lahat ng hindi kasya sa column na iyon ay ililipat niya sa kasunod na column na `100px` din ang width. Gagawin niya ito hanggang sa mapuno ang buong width ng `.container`.

Dahil din dito kaya nakuha natin ang gusto nating mangyari na magkakarugtong ang cards natin. Para mas lalo mong maintindihan ang `columns` property, tingnan ang susunod na example:

<div id="example-5" class="example-container">
  <style>
    #example-5 .container {
      padding: 1rem;
      columns: 200px;
    }
  </style>

  <div class="container">
    <p>
      Got studied carbon quietly central poetry wheel clock almost thin glass alike brain yourself let age fix balloon summer purple brief arrange offer bare
    </p>
    <p>
      Said spell real believed even gather spite kind far major missing entirely needs seed sentence colony give try fresh respect activity plus giving sing
    </p>
    <p>
      Circus darkness mad pack broken palace pony hunt kitchen because settle child driver solution frozen lion anybody attached position death customs course particular orange
    </p>
  </div>
</div>

Sa example na ito, naka-set ang `columns` property sa `200px`. Kaya naman naging two columns ang paragraph na may tig-`200px` na lapad. Ganito rin mismo ang nangyari sa cards layout natin.

## Pero...

Pero hindi perpekto ang cards layout natin. Dahil sa mismong paraan ng paggana ng Multi-Column Layout sa CSS, ang pagkakasunod-sunod ng cards ay from top to bottom. Magiging problema ito dahil left to right ang paggalaw ng mata natin kapag nagbabasa (right to left sa ibang wika). Kaya kung gumagawa ka ng cards na dapat ay magkakasunod sa eksaktong order, hindi mabisang gamitin ang Multi-Column Layout para sa cards mo. Kapag lumagpas kasi sa height ng screen ang container ng cards mo, hindi na makikita ang ibang cards na gusto mo sanang nasa pinakaitaas ng layout mo.

## Conclusion

<figure class="img-wrapper img-wrapper--illustration float-right">
  <img src="tagpool.png" alt="Ang tags at categories section sa home page ng Antares Blog">
  <figcaption>
    CSS Multi-column layout ang ginamit ko para sa Categories at Tags section sa home page ng blog na ito.
  </figcaption>
</figure>

Ang article na ito ay karugtong ng unang episode ng Antares Vlog. Kaya kung hindi mo pa iyon napapanood, ayos lang, dahil napakadetalyado ng video na iyon, inabot din iyon ng halos kalahating oras. Ang punto ng article na ito ay ipakita sa inyo na hindi lang sa text magagamit ang CSS Multi-Column Layout. Magagamit mo rin ito sa iba pang mga bagay, gaya sa mga tags at categories section ng home page ng Antares Blog.