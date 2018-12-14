---
title: Array Filters
date: 2018-12-06 06:46:53
language: tl
tags: [web, javascript]
category: tricks
author: 
    name: Francis Rubio
    image: images/francis-rubio.jpg
is_featured: true
---

Nang ilabas ang ECMAScript 6 noong 2015, dumami ang features ng JavaScript. Isa sa mga nakatanggap ng maraming improvements ang mga array. Sa artikulong ito, pag-usapan natin ang isa sa mga pangmalakasang functions ng JS Arrays&mdash;ang `Array.prototype.filter()`

<!--more-->

May mga times kung kailan kailangan natin na makuha lang iyong mga items ng isang array na papasa sa isang condition. Kadalasan itong ginagamit sa mga database queries, gaya halimbawa ng mga price range sa mga eCommerce web sites; iyon bang lahat lang ng ididispley mo ay iyong mga mas mura sa P400.00. Dati, no'ng nag-aaral pa lang ako ng Visual Basic, kapag ganito ang case, ipo-for loop ko muna tapos isa-isa kong itse-check kung papasa sa condition. Pero sa JavaScript, may built-in nang function para dito.

## Array Filters (JavaScript)

For example, may array tayo ng objects, at bawat item ng array na 'to ay may name, age, location, at gender.

```javascript
const people = [
  { name: "Francis Rubio", age: 19, location: "Caloocan City", gender: "male" },
  { name: "Annalise Keating", age: 50, location: "Philadelphia", gender: "female" },
  { name: "Wesley Gibbins", age: 25, location: "England", gender: "male" },
  { name: "Asher Millstone", age: 24, location: "Manila", gender: "male" },
  { name: "Michaela Pratt", age: 25, location: "Cebu City", gender: "female" },
  { name: "Laurel Castillo", age: 26, location: "Mexico", gender: "female" },
  { name: "Connor Walsh", age: 24, location: "Davao", gender: "male" },
  { name: "Oliver Hampton", age: 24, location: "Tagaytay", gender: "male" },
  { name: "Francis Delfino", age: 43, location: "Coalport", gender: "male" },
  { name: "Bonnie Winterbottom", age: 43, location: "Makati", gender: "female" },
  { name: "Nathaniel Lahey", age: 53, location: "Taiwan", gender: "male" },
  { name: "Rebecca Sutter", age: 26, location: "Rwanda", gender: "female" }
];
```

Then sinabi sa atin ng client natin na gusto niyang malaman kung sino sa mga taong 'to ang mas matanda sa 25 years old. Paano natin gagawin iyon?

## For-loop (good way)

Ang unang papasok sa isip natin mga bessywap bilang mga mabubuting programmer ay ang paggamit ng for loop. Maglu-loop tayo sa bawat item, itse-check natin kung mas matanda sila sa 25, then ilalagay natin sila sa array.

```javascript
let peopleOlderThan25 = []
for(let i = 0; i < people.length; i++){
    let person = people[i]
    if(person.age > 25){
        peopleOlderThan25.push(person)
    }
}
```
Ayos. Kapag ni-run ang program natin, ito ang output:

```javascript
[
    { name: 'Annalise Keating', age: 50, location: 'Philadelphia', gender: 'female' },
    { name: 'Laurel Castillo', age: 26, location: 'Mexico', gender: 'female' },
    { name: 'Francis Delfino', age: 43, location: 'Coalport', gender: 'male' },
    { name: 'Bonnie Winterbottom', age: 43, location: 'Makati', gender: 'female' },
    { name: 'Nathaniel Lahey', age: 53, location: 'Taiwan', gender: 'male' },
    { name: 'Rebecca Sutter', age: 26, location: 'Rwanda', gender: 'female' }
]
```
Tama ang output, lahat ng age ay larger than 25. Lookin' good. 👍👍👍👍👍

Pero may mas maganda at mas madaling way pa para gawin 'to (good news sa mga haters ng for loop.)

## Array.filter()

Gagamitin natin ang built-in function na filter() sa paggawa ng task natin. Ang kailangan natin ay magpasa ng isang function sa filter() na magde-decide kung papasa ba sa condition natin iyong item na iyon.
Para mas maintindihan natin, isa-isahin natin ang mga problema natin.

So meron tayong array kung saan manggagaling ang lahat ng gagamitin nating items (input).
Kailangan nating piliin lang kung sino sa mga item na 'to ang may age na mas malaki sa 25 (process).
Then lahat ng papasa sa condition natin ay iso-store natin sa isang array (output).

Let's see. Paano ba ginagamit ang `filter()`?

```javascript
let peopleOlderThan25 = people.filter()
```

Pero hindi pa iyan gagana. Kailangan nating i-describe kay `filter()` kung ano ang gusto nating makuha. Kailangan niya ng function, kaya magpapasa tayo ng function sa `filter()`.

```javascript
let peopleOlderThan25 = people.filter(pangfilterNaFunction)
​

function pangfilterNaFunction(){

}
```

As you can see, nag-declare tayo ng function at ipinasa natin ito kay `filter()`.

> NOTE: kapag nagpapasa ka ng function sa `filter()`, wala dapat parentheses (see example). Kapag meron kasi, hindi mapapasa iyong function dahil mag-e-execute agad siya.

So ano'ng kailangan nating gawin sa `pangfilterNaFunction()`? Sabi ni `filter()`, kailangang mag-return ng boolean iyong function na pinasa natin sa kaniya.

Kung gusto nating makapasa sa condition natin iyong item ng array, magre-return tayo ng `true`
Kung hindi naman, `false` ang ire-return ng function natin.

So pa'no iyon? Una muna, kailangan nating makuha iyong items.

```javascript
function pangfilterNaFunction(item){

}
```

Woah, wait. Sa'n galing iyong item? Ang mangyayari kasi rito, sa code ng `filter()`, tatawagin niya iyong function na pinasa natin. So for example, kung iyong array natin ay may 15 items, 15 times na matatawag iyong `pangfilterNaFunction()`, at ilalagay ni `filter()` sa item iyong current item na iyon. So parang for loop din, except mas maikli, mas madaling basahin, at mas mabilis in terms of performance.

So ngayon, i-try nating gawin iyong `true` or `false` na pagre-return:

```javascript
let peopleOlderThan25 = people.filter(pangfilterNaFunction)
​
function pangfilterNaFunction(item){
    if(item.age > 25) return true
    else return false
}
```

Iyan. Kapag ni-run iyong program, same lang din ang magiging output kagaya no'ng sa for loop. Pero baka itanong mo naman, 'akala ko ba mas maganda, mas madaling basahin, mas maikli, e ang daming proseso niyan e, saka ang daming lines of code. Lokomoko.' Kaya ganiyan kahaba para makita natin iyong step by step na process kung paano tayo makakarating sa pinakamaikling code na madaling basahin. Ito na iyon.

Nakita niyo ba iyong condition sa if-else statement natin?

```javascript
if(item.age > 25){...}
```

Iyong `item.age > 25`, 'di ba `true` or `false` lang din naman ang magiging value niyan? So bakit di na lang natin tanggalin iyong if-else, at iyan na lang ang i-return natin?

```javascript
let peopleOlderThan25 = people.filter(pangfilterNaFunction)
​
function pangfilterNaFunction(item){
    return item.age > 25
}
```

See? Nabawasan ng isang line iyong code! xD Anyway, iyang bagong function na iyan, same lang din iyan sa kanina. Pero tinanggal natin iyong if-else since redundant na siya. Next, paikliin pa ulit natin.

Iyong `pangfilterNaFunction()`, isang beses lang natin nagamit, tama? Malamang sa malamang, hindi na natin iyan gagamitin ulit, tama? Tanggalan na lang kaya natin siya ng pangalan, since isang beses lang naman siyang matatawag?

```javascript
let peopleOlderThan25 = people.filter(function (item){
    return item.age > 25  
})
```

See? Three lines na lang. TAGUMPAY! xD Kidding aside, ang ginawa lang natin dito ay nilipat natin iyong declaration ng function sa loob mismo ng filter(). Yes, you can do that sa JavaScript. 😄

PERO... may way pa ulit para lalo pang mapaikli iyan! Gagamit tayo ng tinatawag na mga arrow function.

Sa arrow functions, puwede na nating tanggalin ang function na keyword para parenthesis na lang ang matira. It looks like this:

```javascript
let peopleOlderThan25 = people.filter((item)=>{
    return item.age > 25
})
```

Okay, 'wag kayong malito. Pinalitan lang natin iyong way ng pagde-declare natin. May iba pang benefits ang paggamit ng arrow functions, pero hindi ko muna isasama rito. Anyway, nagtanggal lang tayo ng keyword. Umikli siya kahit paano. BUT WAIT! There's more.

Sa arrow functions, may tinatawag na implicit return. "Implicit", kabaligtaran ng explicit, given na gano'n siya. 'Return', as in return na keyword. Ibig sabihin, puwede na nating tanggalin ang return keyword. Pati ang curly braces. Yesmalu. Shocking, 'di ba?

```javascript
let peopleOlderThan25 = people.filter((item) => item.age > 25)
```

Okay ganito siya gumagana. Ie-execute niya iyong arrow function, gaya lang din kanina. Then makikita niya, "Uy, may value. Hindi naka-assign sa variable. Walang curly brac... implicit return 'to." Then, titingnan niya iyong value ng condition, makikita niya ulit, "Boolean 'to. Ay true... Ay false... false 'to, itong isang item dito true" hanggang sa maubos ang lahat ng items sa array.

Iyan. One. Line. Program. Be proud of yourself! Na-compress mo ang program na may 7 lines into a one-liner na walang error, walang bug, madaling basahin, at mas mabilis kaysa sa dati. Ikaw na magaling. Ikaw na talaga. xD
