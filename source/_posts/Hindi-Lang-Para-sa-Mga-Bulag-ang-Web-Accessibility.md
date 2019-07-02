---
title: Hindi Lang Para sa Mga Bulag ang Web Accessibility
author:
  name: Francis Rubio
  image: images/francis-rubio.jpg
lang: tl
date: 2019-04-27 16:44:05
tags: [accessibility,web]
category: Web Development
pdf_enabled: false
cover_image: cover.png
---

Primarily, mga differently abled people, mga may kapansanan, at mga may edad na users ng software ang pumapasok sa isip natin kapag naririnig natin ang <i>accessibility</i>. Pero hindi lang sila ang nakikinabang dito.

<!--more-->

Regardless kung sino ang target audience ng software na dine-develop natin, responsibility natin bilang mga software engineers, developers, and programmers na gumawa ng mga software na magagamit ng pinakamaraming tao hangga't posible. Kasama rito ang mga may kapansanan sa paningin (either bulag o malabo ang paningin), sa pandinig, mobility disorders, at iba pang physical conditions na dahilan kung bakit nahihirapang gumamit ng devices ang iba sa ating mga users.

  <blockquote>
    <p lang="en">
      Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.
    </p>
    <cite class="citation">
      <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/">Introduction to Web Accessibility</a>
    </cite>
  </blockquote>

Sa isang [Twitter thread](https://mobile.twitter.com/feather/status/1077027857207984128), naikuwento ni [Derek Featherstone](https://mobile.twitter.com/feather) ang isa sa mga karanasan niya sa accessibility. Pansinin na walang kahit anong kapansanan si Featherstone, at pangunahin siyang nagtuturo tungkol sa kahalagahan ng accessibility sa mga Web sites.

Sa [thread na iyon](https://mobile.twitter.com/feather/status/1077027857207984128), ikinuwento niya na nang bumili siya ng bagong computer noong 1995, nagkamali siya ng pagse-set up nito. Dahil dito, kapag kumokonekta sa Internet ang computer n'ya, tumitigil sa paggana ang mouse niya. Nang panahong iyon, tanging keyboard ang naging paraan niya para magamit ang computer niya para humanap ng bagong mouse.

<figure class="img-wrapper img-wrapper--illustration">
  <img src="feather-tweet.png" alt="Tweet ni Derek Featherstone: “Keyboard accessibility and efficiency are fundamental requirements for doing anything with a computer, and that’s not changing any time soon”">
  <figcaption>
    <q>Hindi puwedeng mawala ang keyboard accessibility at efficiency para sa kahit anong gawin ng user sa computer, at hindi pa iyon magbabago ngayon.</q>
    <cite><a href="https://mobile.twitter.com/feather/status/1077030474218856448" target="_blank">Tingnan sa Twitter</a></cite></figcaption>
</figure>

Ipinapakita ng thread na ito na hindi lang mga may kapansanan ang nakikinabang kapag accessible ang isang site. Siguro naranasan mo nang masiraan ng mouse. Sa mga ganitong situwasyon, sobrang laking tulong ng accessibility.

Sa kaparehas na thread na iyon, nag-reply si Prof. [Rosanna Cantavella](https://mobile.twitter.com/cantavest), isang editor at professor. [Naikuwento rin niya](https://mobile.twitter.com/cantavest/status/1077201867728408577) na kaliwete siya, pero sinanay siyang gamitin ang kanang kamay niya. Dahil dito, hirap siyang ipantutok ang kahit alin sa dalawang kamay niya, kaya hirap siyang gumamit ng mouse. Pansinin na hindi disabled si Prof. Cantavella, pero nakikinabang siya sa accessibility.

<figure class="img-wrapper img-wrapper--illustration">
  <img src="feather-tweet-1.png" alt="Tweet ni Rosanna Cantavella: “Keyboard accessibility is vital for those of us who don't [conform] to what is physically expected. I'm left-handed but was corrected in childhood. As a result I have no aim at all with any hand. I avoid the mouse/touchpad as much as I can. Keyboard is king.”">
  <figcaption>
    <q>Mahalaga ang keyboard accessibility para sa aming mga hindi makasunod sa kung ano ang inaasahan sa users physically. Kaliwete ako pero naitama iyon no'ng bata ako. Dahil do'n hindi ako makapagtutok sa kahit alin sa dalawa kong kamay. Iniiwasan ko ang mouse/touchpad hangga't maaari. Panalo pa rin ang keyboard.</q>
    <cite><a href="https://mobile.twitter.com/cantavest/status/1077201867728408577" target="_blank">Tingnan sa Twitter</a></cite></figcaption>
</figure>

Siyempre pa, hindi lang keyboard ang dapat na pagtuunan ng pansin. Gaya ng binabanggit sa [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/), kasama sa mga target ng Web accessibility ang mga taong walang disability o kapansanan, gaya ng:

- mga gumagamit ng mobile devices, smart watches, smart TV, IOT devices, at iba pang device na may ibang input mode
- mga taong may nagbabago nang kakayahan dahil sa edad
- mga taong may "pansamantalang kapansanan" gaya ng injury sa braso, o mga taong nawalan ng salamin sa mata o hindi puwedeng magkabit ng contact lens nang pansamantala
- mga taong may limitasyon dahil sa kung nasaan sila, gaya halimbawa ng maliwanag na sinag ng araw sa kung nasaan sila, o mga taong hindi puwedeng makinig sa audio dahil sa lugar kung nasaan sila
- mga taong may mabagal na Internet connection, o per MB ang bilangan ng bandwidth, gaya ng mga taong gaya ko na nagpapa-load lang ng ₱50.00 sa tindahan para sa 1GB ng Internet

Sa sumusunod na video, tingnan ang iba pang mga situwasyon kung saan magiging malaking tulong ang Web accessibility.

<figure class="embed-fig">
  <iframe class="youtube-frame" width="853" height="480" src="https://www.youtube.com/embed/3f31oufqFSM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <figcaption>Nagkakaproblema ka ba sa video? <a href="https://youtu.be/3f31oufqFSM" target="_blank">Panoorin ito sa YouTube.</a></figcaption>
</figure>

## Conclusion

Karaniwan na, basta tama ang paggamit mo sa mga HTML tags at controls, makakaabot ka na sa 50% ng accessibility na required<sup id="foot-1-src"><a href="#foot-1">1</a></sup>. Pero bukod pa doon, pag-isipang mabuti ang CSS at JavaScript functionalities ng site mo. At higit sa lahat, magbasa-basa ng tungkol sa Web accessibility. Halimbawa, tingnan ang mga [references](#References) na ginamit sa article na ito.


---
### Footnotes
<ol>
  <li id="foot-1">
    <sup><a href="#foot-1-src">^</a></sup> Hindi ko ni-research 'to.
  </li>
</ol>

### References

- [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [Web Accessibility Initiative](https://www.w3.org/WAI/)
- [Windows Forms Accessibility](https://docs.microsoft.com/en-us/dotnet/framework/winforms/advanced/windows-forms-accessibility). Dahil hindi lang sa Web kailangan may accessibility.
- [How to Code WPF Applications for Accessibility](https://www.itprotoday.com/microsoft-visual-studio/how-code-wpf-applications-accessibility)
- [Accessibility Best Practices](https://docs.microsoft.com/en-us/dotnet/framework/ui-automation/accessibility-best-practices) para sa mga .NET applications
- [Accessibility Overview](https://developer.android.com/guide/topics/ui/accessibility/) para sa mga Android applications