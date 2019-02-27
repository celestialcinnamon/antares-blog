---
title: Destructuring sa JavaScript
author:
    name: Francis Rubio
    image: images/francis-rubio.jpg
lang: tl
date: 2019-02-26 13:00:50
tags: [javascript, web, programming]
category: JavaScript
is_featured: true
cover_image: cover.png
---

Ang destructuring ay isa sa mga bagong feature ng JavaScript na dumatng kasama ng ECMAScript 2015.

<!--more-->

<style>
  .spoiler {
    filter: blur(5px);
    transition: filter 0.3s;
  }

  .spoiler:focus {
    filter: none;
    transition: filter 0.3s;
  }
</style>

Ang destructuring, ay isang pattern matching technique sa JavaScript. Sa destructuring, puwede mong i-map ang isang grupo ng variables sa isa pang grupo ng values. Puwede itong gawin sa mga objects pati na rin sa mga array.

## Destructuring sa Objects

Kadalasan, kapag may properties ang isang object na gusto nating i-assign sa mga variable, ganito ang ginagawa natin:

```js
const person = {
    name: "Greg Antares",
    age: 20
};

let name = person.name;
let age = person.age;
```

Pero dahil sa object destructuring, puwede pa nating paikliin iyan:

```js
const person = {
    name: "Greg Antares",
    age: 20
};

let { name, age } = person;
```

Ang mahalaga rito ay magkapareho ang pangalan ng variables at ang mga properties ng objects. Ang `name` property ay mapupunta sa `name` variable, ganito rin ang mangyayari sa `age` variable.

Minsan din gusto natin na ibahin ang pangalan ng variables:

```js
const person = {
    name: "Greg Antares",
    age: 20
};

let personName = person.name;
let personAge = person.age;
```

Sa destructuring, puwede mo ring ibahin ang pangalan ng variables:

```js
const person = {
    name: "Greg Antares",
    age: 20
};

let { name: personName, age: personAge } = person;
```

Mapapansing kagaya ito ng JSON syntax. Makukuha mo ang `name` property, pero mare-rename ang `name` papunta sa `personName`. Mare-rename ang `age` at magiging `personAge`.

Pero paano naman kung nagkakaroon ng null values sa mga properties? Puwede rin tayong maglagay ng default values sa mga variable.

```js
const person = {
    name: "Greg Antares",
    age: 20
};

let name = person.name;
let age = person.age;
let phoneNumber = person.hasOwnProperty("phoneNumber")
    ? person.phoneNumber
    : "0912 345 6789";
```

Ang `hasOwnProperty()` ay isang function na built-in sa lahat ng JavaScript objects. Titingnan nito kung may property ang object na `phoneNumber`. At gumamit din tayo ng ternary `if`. Kapag true ang value ng `hasOwnProperty()`, ang magiging value ng `phoneNumber` ay ang `person.phoneNumber`. Pero kung false ito, ang string ang magiging value nito.

Before ES6, ganito natin ginagawa ang mga default values. Pero sa destructuring mas maikling syntax na ang ginagamit natin:

```js
const person = {
    name: "Greg Antares",
    age: 20
};

let { name, age, phoneNumber = "0912 345 6789" } = person;
```

Kapag walang `phoneNumber` property ang `person`, magde-default ito sa string na 'nilagay natin.

Puwede mo rin itong i-rename at lagyan ng default value _nang sabay_.

```js
let { phoneNumber: mobile = "0912 345 6789" } = person;
```

## Destructuring sa mga Function

Makikita na agad na magagamit mo rin ito sa iba pang mga programming constructs. Kung nanggaling ka sa C# programming, malamang narinig mo na ang <i lang="en">named parameters</i>. Although sa JavaScript walang gano'n, puwede nating magaya ang named parameters gamit ang destructuring.

```js
function greeting({ name, profession }) {
    console.log(`Hello, ${name} the ${profession}`);
}

let person = {
    name: "Greg Antares",
    profession: "writer"
};

greeting(person); // Hello, Greg Antares the writer
```

## Nested Destructuring

Sa tunay na mundo, gumagamit tayo ng API sa Web. Sa ngayon, marami sa mga ito, kung hindi man lahat, JSON ang binabalik na format. Sa isa sa mga na-try ko na dating API, ganito ang format ng binabalik na data:

```json
{
    "name": {
        "first": "Gregory",
        "middle": null,
        "last": "Antares"
    },
    "contact": {
        "mobile": "0912-345-6789",
        "email": "gregantares@testema.il"
    }
}
```

Medyo komplikado ang format ng data in a sense na nested ito. Bad design bang matatawag ito? Not necessarily. Ito lang kasi talaga ang format na may sense para sa kung sinumang nag-design ng API. Pero bago pa ako magtuloy-tuloy <i lang="en">down the rabbit hole</i>, bumalik tayo sa destructuring. Sa unang tingin baka malito-lito pa tayo, pero ia-apply lang natin iyong basic principles na na-establish na natin kanina:

```js
const dataFromAPIServer = {
    name: {
        first: "Gregory",
        middle: null,
        last: "Antares"
    },
    contact: {
        mobile: "0912-345-6789",
        email: "gregantares@testema.il"
    }
};

const {
    name: { first, last },
    contact: { email }
} = dataFromAPIServer;
```

Bago ko ipaliwanag, gusto ko na i-challenge mo ang sarili mo. Ilang variables ang na-declare sa destructuring expression natin? Kung ready ka na i-click mo lang ang next paragraph. Kapag nag-blur ulit, click mo lang din ulit.

<div class="spoiler" tabindex="1">
<p>
  Nagkaroon lang tayo ng tatlong variable declarations sa destructuring na ito, ang <code>first</code>, <code>last</code>, <code>email</code>. Paano nangyari iyon? Hindi made-declare ang <code>name</code> at <code>contact</code> dahil mga key sila ng properties. Kung ang gusto nating ma-declare ay <code>name</code> at <code>contact</code>, hindi na tayo maglalagay ng <code>first</code>, <code>last</code>, at <code>contact</code>.
</p>
</div>

## Array Destructuring

Akalain mo bang puwede rin pala ito sa mga array? Simple lang din ito. Pero 'di gaya sa objects, sequential ang array destructuring, kaya mahalaga ang pagkakasunod-sunod ng mga variable names.

Halimbawa, tingnan ang example natin kanina:

```js
const person = {
    name: "Greg Antares",
    age: 20
};

let { name, age } = person;

// ------ OR PUWEDE RING GANITO --------
let { age, name } = person;
```

Kahit magkabaligtad ang positioning ng `age` at `name` variables, nga dahil nakadepende ito sa keys ng mga property, hindi magkakagulo. Pansinin naman kung paano gumagana ang array destructuring.

Halimbawa, ginawa nating array ang first, middle, at last name. For the sake of example lang, kasi hindi ko nire-recommend na gawin mong array iyan, dapat kasi talaga naka-object sila para may label pero sige ikaw bahala kaniya-kaniya tayo ng trip sa buhay:

```js
const name = ["Johannes", "Gregory", "Antares"];
```

Kung magkakaroon ka ng pagkakataong humawak ng mga <i lang="en">legacy applications</i>, or iyong mga lumang applications na mine-maintain na lang, siguro may ganitong types ng data structures. So ang task sa atin ngayon eh gawin itong malinaw. So ita-transform natin siya into different variables. Useful ulit dito ang destructuring:

```js
const name = ["Johannes", "Gregory", "Antares"];

const [first, middle, last] = name;

console.log(first); // Johannes
console.log(middle); // Gregory
console.log(last); // Antares
```

Pansinin na mahalaga ang order o pagkakasunod-sunod ng `first`, `middle`, at `last`. Pansinin din na sa halip na curly braces, square brackets na ang gamit natin dahil array nga ito. Tingnan sa susunod na example ang mangyayari kapag napagbali-baligtad ang mga variables.

```js
const name = ["Johannes", "Gregory", "Antares"];

const [middle, last, first] = name;

console.log(first); // Antares
console.log(middle); // Johannes
console.log(last); // Gregory
```

Pero paano kapag multidimensional ang array natin? Baka ang una mong instinct ay gawin ito:

```js
const array = [1, 2, [3, 4], 5];

const [a, b, c, d, e] = array;
```

Kapag ginawa mo iyan at tiningnan isa-isa ang values ng mga variables, mapapansin mong `undefined` ang value ng `e`, samantalang array naman ng `3` at `4` ang laman ng `c`. Dahil array ang nakalagay sa 3rd item ng `array`, ito ang ma-assign sa `c`. At dahil mayro'n lang apat na items, ang panglimang variable na `e` ay hindi mabibigyan ng value.

Kaya paano ang tamang way para gawin ito? Tingnan ang halimbawang ito:

```js
const array = [1, 2, [3, 4], 5];

const [a, b, [c, d], e] = array;
```

## Destructuring Trick

Puwede rin itong maging useful kapag gusto mong pagpalitin ng values ang dalawang variables! Kung walang destructuring ganito natin ginagawa ang pag-swap (alalahanin ang mga functions na ginawa mo sa C++ noon para makapagpasa ng bubble sort or merge sort sa professor mo):

```js
let a = 10;
let b = 20;

function swapValues(varA, varB) {
    let temp = varA;
    varA = varB;
    varB = temp;

    console.log("Variable A = " + varA);
    console.log("Variable B = " + varB);
}

swapValues(a, b);

// OUTPUT:
// Variable A = 20
// Variable B = 10
```

So ang ginagawa natin dito, gumagamit tayo ng `temp` variable para ipahawak muna ang value ng isa sa mga variable para mapagpalit sila. Then saka natin ipapasa iyong value ng `varB` sa `varA`. Pagkatapos, iyong `varB`, ia-assign natin sa kaniya ang value na pinahawak natin kay `temp`. Mahaba-haba rin 'to, mga 3 lines of code. Pero tingnan kung paano ito magiging mas maikli gamit ang array destructuring:

```js
let a = 10;
let b = 20;

function swapValues(varA, varB) {
    [varA, varB] = [varB, varA];

    console.log("Variable A = " + varA);
    console.log("Variable B = " + varB);
}

swapValues(a, b);

// OUTPUT:
// Variable A = 20
// Variable B = 10
```

Ano ang nangyayari dito? Para gumana ang array destructuring, kailangan natin muna silang gawing array. At iyon ang ginawa natin sa right side ng expression na `[ varB, varA ]`. Dahil sa part na iyan, pansamantala silang naging array. Pagkatapos saka natin ito in-assign sa left hand side ng expressiion gaya kapag nagde-declare tayo ng variables. Pero dahil naka-declare na sila parehas, hindi na natin sila puwedeng i-declare ulit. Tandaan na mahalagang-mahalaga rito ang order ng mga variables sa loob ng square brackets.

Same result, pero nabawasan tayo ng dalawang lines of code. Ang drawback nga lang nito mas mahirap siyang basahin. Nasa sa iyo kung gusto mo itong gamitin for ease of use, or magsi-stick ka pa rin sa dati nang nakasanayan. Wala namang masamang manatili sa luma kahit may bago na. Sabi nga ng isang guest sa <cite>Kapuso Mo, Jessica Soho</cite>, <q>Buntot mo, hila mo.</q>

## Conclusion (a.k.a Kuwento ng Aking Buhay)

Nagsimula akong mag-JavaScript no'ng 2016. At noon kamukhang-kamukha pa ng Java ang JavaScript. Pero simula nang malawakan nang na-adopt ang ECMAScript 6 (or ES2015 depende kung sino kausap mo), sobrang magkaiba na ang JavaScript noon saka ngayon. Parang kapag pinagtabi mo ang JavaScript ngayon saka JavaScript no'ng 2009, para na silang dalawang magkaibang language.

Pero hindi ba mas masaya nga ito? Mas marami na tayong puwedeng magawa. Mas marami pa tayong puwedeng matutuhan. At ebidensiya ito na <em lang="en">Web is the way to go; the Web is the way forward.</em> Sa future, dahil natapos na akong magbabad sa CSS, nagbabalak din akong magsulat pa ng ilan pang articles tungkol sa mga bagong features ng JavaScript. And don't worry, hindi rin natin pababayaan ang HTML.
