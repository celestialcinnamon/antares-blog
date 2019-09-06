---
title: Fetch API Overview
author:
  name: Francis Rubio
  image: images/francis-rubio.jpg
lang: tl
date: 2019-08-27 13:47:13
tags: [javascript, ajax, fetch, programming, meta]
category: JavaScript
cover: cover.png
---
Sa unang article sa Fetch API series, tingnan natin ang kabuuan ng Fetch API at kung ano ang puwede nating magawa gamit ito.
<!--more-->

Ang Fetch API ang sagot sa `ajax()` function ng jQuery, na minsan nang naging popular dahil sa pagresolba nito sa incompatibility sa pagitan ng mga browser. Under the hood, ginamit ng jQuery ang `XMLHttpRequest` ng JavaScript para magpadala ng mga request sa server nang hindi nire-reload ang buong page. Ganitong-ganito rin ang ginagawa ng Fetch API, pero may iba pa itong kayang ibigay.

## Fetch API vs. `jQuery.ajax()`

Bagaman magkapareho ng problemang nilulutas ang Fetch API at `jQuery.ajax()` functions, may mga pagkakaiba sila. At to a certain extent, masasabing mas magandang gamitin ang Fetch API:

- Hindi gaya ng `jQuery.ajax()`, hindi itinuturing na error ng Fetch API kapag nagbalik ang server ng response na `404 Not Found` o `500 Internal Server Error`. Sa halip, magre-resolve nang normal ang response, pero ipapaalam nito sa iyo sa pamamagitan ng `ok` property (na may value na `false`) na may error code na ibinalik ang server. Magkaka-error lang sa Fetch API kapag nagkaroon ng network failure o may kahit anong nangyari na pumigil sa request para magpatuloy.
- By default, hindi nagpapadala o tumatanggap ng cookies sa server ang Fetch API. Magreresulta ito sa mga error kapag nagre-require ang server ng user session sa bawat request.

## Ang mga `Promise`

Umiikot ang Fetch API sa mga `Promise`. Ito ang mechanism para sa paggawa ng mga asynchronous task sa JavaScript. Nire-represent nito ang state ng isang asynchronous task once na nakumpleto na ito (successful man o hindi ang task na iyon).

Hindi gaya ng mga callback functions na ipinapasa natin sa mga functions na gumagawa ng asynchronous tasks (gaya ng `jQuery.ajax()`), may ilang bagay na sinisiguro sa atin ang `Promise` objects:
- Hindi tatawagin ang mga callback functions na ipinasa natin sa mga `Promise` bago matapos ang {% link "current run ng JavaScript event loop" https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Run-to-completion %}. <sup id="src-1">[1](#ref-1)</sup>
- Puwede kang magdagdag ng higit sa isang callback na tatawagin kapag nakumpleto na ang `Promise` anuman ang naging result nito.

Isa rin sa pinakamagagandang features ng `Promise` ay ang chaining.

### Method Chaining

Isa sa kadalasang kailangan kapag gagamit tayo ng mga `Promise` ay ang pag-e-execute ng dalawa o higit pang asynchronous functions nang magkakasunod; ibig sabihin, kung anuman ang result ng unang function, matatanggap iyon ng kasunod na function, and so on. Ito ang tinatawag na <strong>method chaining</strong>.

Halimbawa, kunwari may function tayo na `doSomething()` na nagre-return ng isang Promise. At pagkatapos, may gusto tayong gawin kapag successful ang nangyari sa `Promise` na iyon:

```js
const promise = doSomething();
const promise1 = promise.then(functionNaTatawaginKapagSuccess, functionNaTatawaginKapagFailed)
```

Agad-agad sa example na ito, makikita natin kung paano gumagana ang mga `Promise`. May `then()` method sila na tumatanggap ng dalawang functions, ang una tatawagin lang kapag success ang operation. Ang ikalawa naman, tatawagin lang kapag nag-fail ang operation ng Promise. Ang isang mahalagang konsepto na dapat tandaan dito ay **nagre-return din ng `Promise` ang `then()` method.** Ibig sabihin, puwede tayong magkabit ulit ng isa pang `then()` method sa return value ng unang `then()`:

```js
promise
  .then(functionNaTatawaginKapagSuccess, functionNaTatawaginKapagFailed)
  .then(functionNaTatawaginKapagSuccess, functionNaTatawaginKapagFailed)
```
At mapapansing unlimited ang puwede nating idugtong dito. Ito mismo ang ibig sabihin ng method chaining.

## Conclusion

Ngayong alam na natin kung ano ang ilan sa mga ginagamit sa Fetch API, handa na tayo para sa susunod na article. Talakayin natin kung paano natin magagamit ang Fetch API para kumuha ng data mula sa isang server, at kung paano rin mag-send ng data.

{% post_link fetch-api-create-read %}

## Resources
- {% link "Fetch API" https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API %}, mula sa Mozilla Developer Network
- {% link "Using Promises" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises %}, mula sa Mozilla Developer Network


## Footnote
<ol>
  <li id="ref-1">[^](#src-1) Ang event loop ay isang konsepto sa kung paano ino-organize ng JavaScript ang execution ng mga task na ginagawa nito. Kailangan ito dahil <i>single-threaded</i> ang JavaScript: ang mga asynchronous task nito ay hindi ginagawa kasabay ng main thread. Para sa higit pang detalye, panoorin ang video ng talk na <cite>{% link "What the heck is the event loop anyway?" https://youtu.be/8aGhZQkoFbQ %}</cite> ni Philip Roberts sa JSConf EU. Ito ang pinakamadaling intindihin na explanation ng event loop na nahanap ko.</li>
</ol>