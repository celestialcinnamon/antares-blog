---
title: Function Parameters at Return Statements
date: 2018-12-14 23:43:37
tags: [javascript, web]
categories: [JavaScript,Tricks,Web]
---
Kung nahihirapan kayong maintindihan kung paano gumagana ang function parameters, kailangan nating balikan ang Math (kasi sa mga kakilala ko mas pamilyar kayo rito so ito ginamit kong example).

<!--more-->

Actually nakuha ang term na “function” sa Math; function as in algebraic function etc. So kung gagamitin nating example ‘to:

```javascript
f(x) = x² + 2
```

So sa example na ‘to, ang f(x) ang function at x ang parameter. At ang expression kasunod ng equal sign ang laman ng function. So kung iko-convert natin ‘to sa JavaScript, ganito ang magiging hitsura niyan:

<figure class="img-wrapper">
{% asset_img 47320893_1845011718942865_8779709452845580288_o.jpg "Ang algebraic function na f(x) kapag na-convert sa 2016 JavaScript: `const f = (x) => ( x ^ 2 ) + 2`" %}
</figure>

Pero hindi naman ganiyan hitsura ng functions sa ibang mga programming language, so medyo gawin nating ‘traditional’:

<figure class="img-wrapper">
{% asset_img 47245791_1845016282275742_5377634732055986176_n.jpg "JavaScript code: `function f(x) { return (x^2) + 2; }"%}
</figure>

So by now siguro nage-gets niyo na. Kaya kung sa algebraic function, ganito ang magiging hitsura:

```js
let x = 2:
f(x) = x² + 2f(2) = 2² + 2f(2) = 4 + 2f(2) = 6
```

...gano’n din ang mangyayari sa functions ng programming. Magpapasa ka ng parameters (which is iyong `x`), then iyong value no’n masa-substitute sa lahat ng `x` sa loob ng function, gaya nito:

<figure class="img-wrapper">
{% asset_img 47436228_1845022958941741_2142007783740932096_o.jpg %}
</figure>

So dito sa example naman na ‘to, ang ibig sabihin ng `return` ay ‘sagot’. Mismo. Sagot no’ng equation. Sagot no’ng anumang ginawa sa loob ng function. All clear pa rin? Sige, next naman.

Sa example na iyon kanina, gumamit tayo ng math para maintindihan kung paano gumagana ang function parameters saka iyong `return` keyword. Pero hindi naman kasi lahat ng function math ang ginagawa. Iyong iba kumo-connect sa network, nagse-save sa database, nagse-save ng file, naglalagay ng button sa screen, etc. Paano applicable sa mga gano’n iyong math? Same principles lang din.

Sa mga ganiyang instances, ang bini-visualize ko lang, iyong mga functions ay parang mas maliit na program sa loob ng program mo. Siyempre para magamit mo iyong program mo, kailangan mo ng input, then kapag tapos na siya, bibigyan ka niya ng output. Same lang din dito. Parameter ang input, iyong return value ang output.

<figure class="img-wrapper">
{% asset_img 47252927_1845029998941037_1217255244208013312_o.jpg %}
</figure>

Sa example na ‘to, may function tayo na gagawing red iyong background ng `div` then ibabalik niya iyong `div` na iyon. Again, para lang ulit siyang math. Ipapasa natin sa parameter iyong `id` then, lahat ng `id` sa loob ng function, masa-substitute ng value na pinasa mo sa function.

So isipin natin na math function ang `makeCardRed()`; halos same pa rin naman, isipin natin na iyong pangalawang line ay computation or algebraic expression. Kung anuman iyong nakuha doon sa operation na iyon, iyon ang sagot kaya iyon ang ire-return natin.

Pero may mga function din minsan na walang sagot. Iyong mga walang return statements. Kahit wala silang return statements, siguro matatandaan niyo na sabi sa atin dati naglalagay si compiler/interpreter ng automatic na return statement, at either null or undefined ang nire-return nila. Kapag gano’n isipin niyo na lang na division by zero iyong function:

```js
f(x) = x ÷ 0
f(2) //undefined
f(4) //undefined
f(∞) //undefined
```

Ganiyan din mangyayari sa mga function na walang return statements. `undefined` ang value nila, although sa ibang language `null` iyong value kasi walang `undefined` na keyword, pero same principles lang din iyon.

## Conclusion

May dahilan kung bakit marami ang nananakot sa atin before na maraming math sa Computer Science at Information Technology (at marami naman talaga), but that is because isa tayong branch ng engineering (na recently ko lang din napagtanto). And isa ‘tong example ng math; galing talaga sa math ang mga functions ng programming. Wala tayong magagawa diyan. Pero since nag-algebra, trigo, at dalawa (punyeta), dalawang calculus ang marami sa atin, gamitin na rin natin iyong mga iyon sa advantage natin para ‘di masayang mga luha natin. Iyan, happy coding. Iyak habang nakangiti, I mean.