---
title: Create at Read Operations Gamit ang Fetch API
author:
    name: Francis Rubio
    image: images/francis-rubio.jpg
lang: tl
date: 2019-08-27 15:06:12
tags: [javascript, ajax, fetch, programming, meta]
category: JavaScript
cover: cover.png
---

Sa ikalawang article, tingnan natin kung paano gagamitin ang Fetch API para makagawa ng simpleng application na nagri-read at create ng resource.

<!--more-->

Sa pinaka-basic form ito, para magamit ang buong Fetch API, kailangan lang nating gamitin ang `fetch()` na global function. May isa itong mandatory parameter, ang URL ng resource na gusto ating i-fetch:

```js
fetch("https://celestialcinnamon.github.io/antares-blog/");
```

Nagre-return ang `fetch()` ng isang `Promise` object na naglalaman ng data na makukuha sa `https://celestialcinnamon.github.io/antares-blog/`. Pero hindi pa natin agad makukuha iyon dahil asynchronous ang mga `Promise`, at hindi natin alam kung kailan matatapos ang process ng pagda-download ng resource mula sa URL na ipinasa natin. Kaya ang kailangan natin ay sabihin sa `Promise` object kung ano ang next niyang gagawin once na natapos na siya sa pagpe-fetch ng data. Para diyan, gagamitin natin ang `then()` na tinalakay din natin sa {% post_link fetch-api-overview "unang article ng series na ito" %}.

## Pagse-send ng Request

Ang `then()` ay isang <dfn>higher-order function</dfn>. Ibig sabihin, isa itong function na tumatanggap ng isa pang function bilang parameter nito. Ang ipapasa nating argument sa `then()` function ay hindi number o string o object. Sa halip, ang ipapasa natin ay isa pang function. Ito ang magsasabi sa `Promise` kung ano ang susunod niyang gagawin kapag na-fetch na niya ang data na kailangan natin.

Una muna sa lahat, kailangan nating makuha ang data pabalik. Kaya gamitin natin ang `then()` para makuha ang kailangan natin.

```js
fetch("https://celestialcinnamon.github.io/antares-blog/")
.then(function(rawData) {
	console.log(rawData);
});
```

Sa example na ito, gumamit tayo ng `then()` para sabihin sa `Promise` kung ano ang gagawin kapag tapos na itong ma-fetch ang lahat ng kailangan natin sa URL. Tulad ng nabanggit na, ang `then()` ay isang higher order function, kaya naman nagpasa tayo ng isang function bilang parameter nito. Ang function na tinatanggap ng `then()` ay may isang parameter. Dito sa parameter na ito, sa `rawData`, mapupunta ang lahat ng result na makukuha natin sa `Promise` na ibabalik sa atin ng `fetch()`.

Kapag na-execute natin ito, makikita natin sa console ang ganitong output:

```js
Response {
  type: "cors",
  url: "https://celestialcinnamon.github.io/antares-blog/",
  redirected: false,
  status: 200,
  ok: true,
  statusText: "OK",
  headers: Headers,
  body: ReadableStream,
  bodyUsed: false
}
```
Ito ang tinatawag nating `Response` object. Kapag tinawag natin ang `fetch()` function, gumagawa ito ng isang object na kung tawagin ay `Request`, at ito ang ginagamit ng JavaScript para mapadali ang pag-process sa data na gusto nating i-send sa network. Kapag natapos na ang pagpe-fetch, makakakuha tayo ng message mula sa server, at iko-convert ito ng JavaScript patungo sa isang `Response` object. Ang `Response` ay isang class na may maraming properties na puwede nating magamit.

Gaya ng mapapansin, makikita rito ang `url` na pinuntahan ng request natin kanina, kung `redirected` ba ang request natin, at siyempre ang `status` code. Sa halimbawa natin, `200` ang value ng `status` property, at ang kahulugan nito ay makikita sa value ng `statusText` property. Sa kaso natin, `"OK"` ang nakalagay dito. Paano naman kung halimbawang hindi pala nag-e-exist o walang laman ang URL na pinadalhan natin ng request? Halimbawa, magpadala tayo ng request sa URL na `https://celestialcinnamon.github.io/antares-blog/walang-lamang-url-dito-sample-lang`. Ang URL na ito ay walang laman. Ano kaya ang mangyayari?

```js
fetch("https://celestialcinnamon.github.io/antares-blog/walang-lamang-url-dito-sample-lang")
.then(function(rawData) {
	console.log(rawData);
});
```

```js
Response {
  type: "cors",
  url: "https://celestialcinnamon.github.io/antares-blog/walang-lamang-url-dito-sample-lang",
  redirected: false,
  status: 404,
  ok: false,
  statusText: "Not Found",
  headers: Headers, 
  body: ReadableStream,
  bodyUsed: false
}
```

Mapapansin natin na ang naging value ng `status` ay `404`. Iyan ang eksaktong code para sa `"Not Found"` na status. Para sa lahat ng values ng mga HTTP status codes, tingnan ang website na <cite>{% link "HTTP Status Codes" https://httpstatuses.com/ %}</cite>

## Pag-e-extract ng Data

Sa `Response` na nakuha natin, nalalaman natin ang status code ng result, kung naging ok ba ang pagse-send ng requests, kung na-redirect ba ito, etc. Pero hindi pa natin nakukuha ang data na kailangan natin. Sa kaso natin, nire-request natin ang home page ng Antares Blog. Kung mapapansin sa `Response` object, may property ito na `body`. Ito ay isang object mula sa class na `ReadableStream`. Ang mga stream ay hindi gaya ng mga data na karaniwan nating ginagamit tulad ng mga string at mga number. Ang mga stream ay <i>raw data</i>. Hindi natin ito kayang gamitin o i-display sa user dahil raw data ito; kailangan muna itong i-process.

Para makuha natin ang actual information na gusto nating makuha, gagamit tayo ng isa pang method. Ang `Response` object ay may method na kung tawagin ay `text()`. Ipa-process nito ang `body` property at iko-convert ito sa isang `string`:

```js
fetch("https://celestialcinnamon.github.io/antares-blog/")
.then(function(rawData) {
	console.log(rawData.text());
});
```

Pero teka. Kapag pinagana natin ito sa browser, ganito ang lalabas:

```js
Promise { <state>: "pending" }
```

Naglabas ulit ng panibagong `Promise` ang `text()`. Ibig sabihin, kailangan natin itong ipasa sa isa pang `then()` method para makuha natin ang actual na laman ng `Response`. Sa halip na i-output natin sa console ang `rawData.text()`, kailangan natin itong i-`return` para magamit natin ito sa susunod na `then()` method:

```js
fetch("https://celestialcinnamon.github.io/antares-blog/")
  .then(function(rawData) {
    return rawData.text();
  });
```

Sa susunod na `then()` method, doon pa lang natin makukuha ang data na galing sa `Response` object:

```js
fetch("https://celestialcinnamon.github.io/antares-blog/")
  .then(...)
  .then(function(actualData) {
    console.log(actualData)
  })
```

Ngayon, makukuha na natin ang data mula sa Antares Blog home page:
```html
<!DOCTYPE html>
<html lang="tl" class="dark">


<head><meta name="generator" content="Hexo 3.8.0">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Antares Programming</title>
  ...
</head>
<body class="layout layout--layout">
  <div class="banner">
  ...
  </div>    
  <h1 class="sr-only">Antares Programming</h1>
  <main id="main-content" class="layout layout--index">
  ...
  </main>
  <aside class="sidebar">
  ...
  </aside>
    
  <footer class="layout layout--footer" role="contentinfo">
  ...
  </footer>    
</body>
</html>
```

## Paggamit ng `fetch()` Para Kumuha ng Data Mula sa Isang API

Karaniwan nang naglalabas ng JSON strings ang mga API bilang output. Kung hindi ganito ang pagkakagawa sa back-end ng Web app mo, may mga magagandang rason kung bakit dapat mong i-consider na gumamit ng JSON. Isa sa mga ito ang built-in class na `JSON` sa JavaScript, at isa pa, supported ito ng ilan sa pinakamalalaking server technologies gaya ng <abbr title="PHP: Hypertext Preprocessor">PHP</abbr> at NodeJS. Bukod pa riyan, built-in din sa `Response` object ang method na `json()`. Gaya rin ito ng `text()`, pero sa halip na i-convert ang stream patungo sa isang string, iko-convert niya ito into a JavaScript object.

Halimbawa, sa isang project na ginawa ko noon, gumamit ako ng <abbr title="PHP: Hypertext Preprocessor">PHP</abbr> para sa back-end programming. Gumawa ako ng isang <abbr title="Representational State Transfer">REST</abbr> API para sa front end, at gumagamit ako ng `fetch()` para makuha ang data mula sa server. Naglalabas ng ganitong output ang API na ginawa ko:

```json
{
  "user_id": "5cc8b771-a7ec-5a48-986c-93b1c587406e",
  "name": {
    "first": "Francis",
    "middle": null,
    "last": "Rubio"
  },
  "username": "gregantares",
  "password_hash": "gWdGte9VJDKKIhqyPUhdTlq3AT2LBGGbDQTLmfgenc6xSBh0x..."
}
```

Madali natin itong maa-access gamit ang `fetch()`. Halimbawa, sabihin nating ang API na ginagamit ko ay nasa URL na `https://example.com/api/v1.0.0/user/` (Pansinin na wala naman talagang ganitong API sa URL na ibinigay ko; para ma-test mo ang sumusunod na examples, puwede mong gamitin ang site na [JSON Placeholder](http://jsonplaceholder.typicode.com/)). Magagamit natin ito sa ganitong paraan. Una, kailangan nating mag-send ng request sa URL na iyon.

```js
fetch("https://example.com/api/v1.0.0/user/")
```

<aside class="side-note">
  <p>
    By default, nagse-send ang `fetch()` ng isang `GET` request papunta sa server.
  </p>
  <p>
  Ayon sa {% link "Mozilla Developer Network" https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET %}, ginagamit lang ang `GET` requests para mag-retrieve ng data. Para sa pagse-send ng data sa server, ang dapat nating gamitin ay `POST` requests. Mas secure ito kumpara sa `GET`.
  </p>
</aside>

Ngayon naman, maglagay tayo ng isang `then()` para i-extract ang data mula sa `Response` object na ibabalik sa atin ng `fetch()`. Puwede natin itong gamitan ng `text()` para makuha ang JSON string at ipasa iyon sa `JSON.parse()` para maging JSON object ang data. Pero may mas madaling way na ibinibigay sa atin ang `Response` objects.

Gamit ang built-in method na `json()`, puwede nating makuha ang data bilang isang JSON object. Ang `Response` object na mismo ang magko-convert nito mula sa isang stream papunta sa string, at pagkatapos ay papunta sa isang JSON object:

```js
fetch("https://example.com/api/v1.0.0/user/")
  .then(function(rawData) {
    return rawData.json()
  })
  .then(function(convertedData) {
    console.log(convertedData);
  })
```
Sa pagkakataong ito, kinuha natin ang data na ibinalik sa atin ng `fetch()` gamit ang `json()`. Sa tulong ng method na ito, instead na string ang makuha natin pabalik, automatic na itong na-convert sa isang JSON object. Hindi na natin ito kailangang paraanin sa `JSON.parse()`.

Kaya naman, puwede na nating makuha ang mga properties na nasa loob ng ibinalik na data ng server:

```js
console.log(convertedData.name) // { first: "Francis", middle: null, last: "Rubio" }
console.log(convertedData.username) // "gregantares"
console.log(convertedData.user_id) // "5cc8b771-a7ec-5a48-986c-93b1c587406e"
```

## Pagse-send ng Data sa Server Gamit ang `fetch()`

Para makapag-send ng data sa server, gagamitin natin ang ikalawang parameter ng `fetch()`: ang `init` parameter.

May ilang properties ang `init` parameter na kailangan nating ibigay sa `fetch()`. Sa example na ito, gagamit lang tayo ng ilan:

<dl>
<dt>`body`</dt>
<dd>Ang data na ipapadala natin sa server</dd>
<dt>`method`</dt>
<dd>Ang <abbr title="HyperText Transfer Protocol">HTTP</abbr> method na gusto nating gawin. Ito ay puwedeng `GET`, `POST`, `PUT`, `DELETE`, `HEAD`, o `OPTIONS`</dd>
</dl>

Halimbawa, paano kung gusto nating gumawa ng isang user? Puwede tayong mag-send ng isang JSON object papunta sa server:

```json
{
  "name": {
    "first": "Francis",
    "middle": null,
    "last": "Rubio"
  },
  "username": "gregantares",
  "password": "sample_password_na_hindi_encrypted"
}
```

Pansinin na nagse-send tayo ng unencrypted na password papunta sa server. Ito ay isang malaking vulnerability. Kaya dapat na gumamit tayo ng `POST` sa halip na `GET` request. Itatago kasi ng `POST` requests ang mga data na ipinapadala mo. Kung halimbawang ipapadala mo ang data na ito gamit ang `GET`, lilitaw ang data nito na parang url parameters:

<pre class="line-numbers language-http">
<code class="language-http">GET <mark>/users?username=gregantares&password=sample_password_na_hindi_encrypted</mark> HTTP/1.1
<span class="token header-name keyword">Host:</span> www.example.com
<span class="token header-name keyword">User-Agent:</span> Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0
<span class="token header-name keyword">Accept:</span> */*
<span class="token header-name keyword">Accept-Language:</span> en-US,en;q=0.5
<span class="token header-name keyword">Accept-Encoding:</span> gzip, deflate, br
<span class="token header-name keyword">DNT:</span> 1
<span class="token header-name keyword">Connection:</span> keep-alive</code>
</pre>

Pero kung `POST` ang gagamitin natin, ganito ang magiging hitsura ng headers ng request:

```http
POST /users HTTP/1.1
Host: jsonplaceholder.typicode.com
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Content-Type: text/plain;charset=UTF-8
Content-Length: 74
DNT: 1
Connection: keep-alive
```

Kapansin-pansin, hindi kasama sa HTTP header ang lamang data ng request natin. Sa halip, nakalagay ito sa request body, ang part na ine-encrypt kapag nagse-send tayo ng request gamit ang `POST` method. Kaya tandaan, <strong>laging gumamit ng `POST` method kapag nagse-send ng data!</strong>

Para makapag-send ng data gamit ang `fetch()`, tingnan ang halimbawang ito:

```js
const newUser = {
  name: {
    first: "Francis",
    middle: null,
    last: "Rubio
  },
  username: "gregantares",
  password: "password_na_hindi_encrypted"
}

fetch("https://example.com/api/v1.0.0/user/", {
  method: "POST",
  body: JSON.stringify(newUser)
})
```

Ginamit natin ang dalawang properties ng ikalawang parameter ng `fetch()`. Gaya ng nabanggit na, ang `method` ay ang HTTP verb na gagamitin para sa request, sa kasong ito, `POST`. Pero pansinin ang data na ibinigay natin sa `body` property: pinadaan natin ito sa `JSON.stringify()`. Hindi tumatanggap ng JavaScript objects ang `fetch()`. Sa halip, kailangan mo muna itong i-convert sa string.

Sa back-end mo, puwede mong i-check kung `POST` ang request na natanggap ng server mo. Halimbawa, sa <abbr title="PHP: Hypertext Preprocessor">PHP</abbr>, puwede mong i-check kung may laman ang variable na `$_POST`. Kapag wala, puwede kang mag-fallback sa default na nangyayari kapag `GET` ang request:

```php
if(isset($_POST)) {
  // Create new user
} else {
  // Return list of users, etc...
}
```

Puwede mong ma-access ang mga properties ng data na sinend mo gamit ang array accessors ng <abbr title="PHP: Hypertext Preprocessor">PHP</abbr>. Halimbawa, puwede mong makuha ang pangalan ng user sa ganitong paraan:

```php
$first_name = $_POST['name']['first'];
$middle_name = $_POST['name']['middle'];
$last_name = $_POST['name']['last'];
```

Puwede mo rin itong dagdagan ng mga properties na kailangan mong ipasok sa database mo. Halimbawa, kailangan na ma-encrypt ang password ng user, kaya puwede kang magdagdag ng isang property na gaya ng `password_hash`:

```php
$user_data = $_POST;

$user_data['password_hash'] = password_hash($user_data['password'], PASSWORD_DEFAULT);
```

## Conclusion

Sa susunod na article sa series na ito, pag-usapan naman natin kung paano tayo puwedeng mag-delete at mag-update ng data.

1. {% post_link Fetch-API-Revisited %}
1. {% post_link fetch-api-overview %}
1. {% post_link fetch-api-create-read %}
1. {% post_link fetch-api-update-delete %}