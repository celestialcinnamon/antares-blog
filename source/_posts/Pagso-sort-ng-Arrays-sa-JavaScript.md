---
title: Pagso-sort ng Arrays sa JavaScript
date: 2018-12-14 21:52:53
tags: [javascript,web]
category: JavaScript
author: 
    name: Francis Rubio
    image: images/francis-rubio.jpg
---

Sa article na ito, tatalakayin natin kung paano mag-sort nga arrays using JavaScript.

<!--more-->

Madali lang mag-sort ng array, mga bessywap. Let’s say na may array tayo ng mga pangalan:

```javascript
let arrayOfNames = [
    "Annalise Keating",
    "Wesley Gibbins",
    "Laurel Castillo",
    "Michaela Pratt",
    "Connor Walsh",
    "Asher Millstone"
]
```

Kapag gusto natin silang i-sort, gagamitin lang natin ang sort() function. By default, sino-sort nito ang mga laman ng array alphabetically (according sa kanilang Unicode code point)

```javascript
arrayOfNames.sort()
console.log(arrayOfNames.join(', '))
// OUTPUTAnnalise Keating, Asher Millstone, Connor Walsh, Laurel Castillo, Michaela Pratt, Wesley Gibbins
```

Kapag gusto mong ikaw ang magdecide kung paano iso-sort ang mga items...
Sabi sa MDN Docs, tumatanggap ang sort() function ng isa pang function na magde-define kung paano mo siya iso-sort.

```javascript
arrayOfNames.sort(function (a, b) {...})
```
Sa example na ‘to, nagpasa tayo sa sort() ng isang function na walang pangalan (anonymous function). Iyong pinasa nating function, tumatanggap siya ng dalawang arguments (a and b). Ang a at b ay dalawang item mula sa arrayOfNames na pagkukumparahin natin.

```javascript
arrayOfNames = [  {name: "Annalise Keating", age: 50},  {name: "Wesley Gibbins", age: 25},  {name: "Connor Walsh", age: 23},  {name: "Laurel Castillo", age: 26},  {name: "Asher Millstone", age: 24},  {name: "Michaela Pratt", age: 27}]
```

Sa array naman na ito, iso-sort natin sila depende sa age nila, mula sa pinakamatanda hanggang sa pinakabata. Sa example na ito, bawat isang item sa arrayOfNames ay may name at age na property.

```javascript
// Magde-declare tayo ng function na magso-sort ng arrayOfNames base sa age
function compareAges(a, b){  if(a.age > b.age) {    return -1  } else if(a.age < b.age){    return 1  } else {    return 0  }  }
arrayOfNames.sort(compareAges)
```

Sa example na ‘to, magpapasa ang sort() function ng dalawang item mula sa arrayOfNames. Hahayaan niya ang compareAges() function na mag-decide kung paano niya iso-sort ang mga item.


- Kapag mas mababa sa 0 ang ni-return ng compareAges(), mas mauuna si a.
- Kapag mas mataas sa 0 ang ni-return ng compareAges(), mas mauuna si b.
- Kapag eksaktong 0 naman ang ni-return ng compareAges(), hindi magagalaw ang dalawang item (sa mga modern browsers; hindi ganito ang nangyayari sa mga mas lumang browser).

Kaya sa function na ginawa natin, kapag mas matanda si a kaysa kay b (a.age > b.age), mas mauuna ito sa array (kaya tayo nag-return ng -1, isang number na mas mababa sa 0). Kapag si b naman ang mas matanda kay a, (a.age < b.age), mas mauuna si b, kaya tayo nag-return ng 1, isang number na mas mataas sa 0.
Ang magiging output ng program na ito ay ganito:

```javascript
arrayofNames.sort(compareAges)
console.log(arrayOfNames)
// Output[...]0: Object { name: "Annalise Keating", age: 50 },1: Object { name: "Michaela Pratt", age: 27 },2: Object { name: "Laurel Castillo", age: 26 },3: Object { name: "Wesley Gibbins", age: 25},4: Object { name: "Asher Millstone", age: 24},5: Object { name: "Connor Walsh", age: 23}
```

Kung titingnan ang mga age property ng mga laman ng array, makikita na naka-sort sila mula sa pinakamatanda tungo sa pinakabata.
Random sorting
Let’s say na may string ka, ‘tapos gusto mong pagrambol-rambolin lahat ng letters nito.

```javascript
let strRandom = "HowToGetAwayWithMurder"
```

Para marambol natin ang letters, kailangan natin silang i-convert at gawing array.

```javascript
let arrRandom = Array.from(strRandom)
```

Gagawin nitong array ang string mo. Bawat isang item sa arrRandom ay maglalaman ng isang letter.

2. Gamit ang sort() function, irambol ang mga letra batay sa isang random number.

```javascript
arrRandom.sort(function (){  let random = Math.random()  let roundedRandom = Math.round(random)  let sortingFactor = roundedRandom - 0.5
  return sortingFactor})
```

Sa example na ito, may tatlo tayong variables:

- Ang random na isang random number.
- Ang roundedRandom na may hawak ng ni-round off na value mula sa random. Dahil laging less than 1 ang nire-return ng Math.random(), dalawa lang amg magiging value nito kapag ni-round off: either +1 or 0.
- At ang sortingFactor na magre-return ng either less than o greater than 0

Isa isahin natin. Sa unang run, ang value ng random ay 0.8974618739176962. Kapag ni-round off ito, ang laging lalabas ay either +1 or 0.

- Kung +1 ang roundedRandom, magiging +0.5 ang sortingFactor.
- Kung 0 naman ang roundedRandom, magiging -0.5 ang sortingFactor.

Kaya kapag ni-sort natin ang arrRandom, ganito ang isa sa posibleng maging output:

```javascript
['o', 'w', 'G', 'o', 'H', 'T', 'e', 't', 'A', 'w', 'a', 'h', 'W', 't', 'i', 'M', 'u', 'y', 'r', 'r', 'd', 'e']
```

3. Ngayong na-rambol na ang letters, puwede na natin silang gawing string ulit.

```javascript
strRandom = arrRandom.join('')
```

Pagdudugtung-dugtungin ng join() ang lahat ng items ng array at gagawin itong string. By default, maglalagay ito ng comma sa pagitan ng bawat letters. Para matanggal iyon, nagpasa tayo ng isang string na walang laman. 

```javascript
// Output"owGoHTetAwahWtiMuyrrde"
```