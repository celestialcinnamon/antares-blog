---
title: Guidelines for Initializing Variables
date: 2018-12-31 13:29:33
---
<p>We all want to learn something before we make mistakes by not knowing it. Here are some of the tips we've accumulated so far about initializing variables. Note that these are guidelines and not strict policies, so you are free to tweak them as needed. However, if you're a beginner, it's best to stick with these guidelines for peace of mind.</p>

<p class="float-clear">
<figure class="img-wrapper img-wrapper--illustration float-left">
    <img src="index/Page 2.png" alt="">
</figure>
    **Mag-initialize agad ng variable pagkatapos sila i-declare.** Magandang habit ito dahil isa ito sa mga forms ng defensive programming. Makakasiguro ka na never kang magkakaroon ng initialization errors.
</p>
<p class="float-clear">
<figure class="img-wrapper img-wrapper--illustration float-left">
    <img src="index/Page 3.png" alt="">
</figure>
    **Mag-initialize ng variables malapit sa kung saan sila unang ginamit.** May habit tayo na nagde-declare tayo ng variables sa simula ng program. But actually, mas maganda na i-declare *at i-initialize* ang variables malapit sa kung saan natin sila unang ginagamit. Isa itong halimbawa ng Principle of Proximity, na nagsasabi na dapat nating pagsama-samahin ang mga actions na related sa isa't isa.
</p>
<p class="float-clear">
    <figure class="img-wrapper img-wrapper--illustration float-left">
        <img src="index/Page 4.png" alt="">
    </figure>
    **Gumamit ng `final` o `const` kailanma't posible.** Kapag idineclare nating `final` (Java) o `const` (C++, JavaScript, etc.) ang mga variable natin, mapipigilan mo ang variable na magkaroon ng ibang value pagkatapos na ma-initialize nito. Mababawasan ka ng ita-track dahil hindi na puwedeng magbago ang values nila pagkatapos ng initialization.
    
</p>
<p class="float-clear">
    <figure class="img-wrapper img-wrapper--illustration float-left">
        <img src="index/Page 5.png" alt="">
    </figure>
    **Tutukan ang mga accumulators at counters.** Bigyang pansin ang mga variables na gaya ng `j`, `k`, `total`, `counter`, `index`, at iba pang kagaya nito dahil kadalasang pinagmumulan sila ng bugs. Siguruhing i-reset ang values nila o i-reinitialize sila bago sila gamiting muli.
</p>
<p class="float-clear">
    <figure class="img-wrapper img-wrapper--illustration float-left">
        <img src="index/Page 6.png" alt="">
    </figure>
    **Mag-initialize ng object properties sa constructor.** Hindi mo alam kung aling method ang gagamit ng aling properties. Hindi rin natin alam kung alin sa mga ito ang unang gagamitin. Kaya siguruhing i-initialize ang mga property sa constructor ng class.
</p>
<p class="float-clear">
    <figure class="img-wrapper img-wrapper--illustration float-left">
        <img src="index/Page 7.png" alt="">
    </figure>
    **Tingnan kung kailangan mong i-reinitialize ang mga variable.** Laging i-check kung dapat bang i-reset ang values ng isang variable either after matapos ng loop at gagamitin mo ito ulit, or dahil hindi nagbabago ang value nito after tawagin ng method kung saan ito ginagamit. Kung kailangan mo itong i-reset, siguruhing gawin ito sa loob ng code na inuulit.
</p>
<p class="float-clear">
    <figure class="img-wrapper img-wrapper--illustration float-left">
        <img src="index/Page 8.png" alt="">
    </figure>
    **Gamitin ang compiler o warning ng IDE mo.** Maraming IDE at compiler ang naglalabas ng warnings kapag gumagamit ka ng mga variables na hindi na-initialize. Gamitin ito.
</p>
<p class="float-clear">
    <figure class="img-wrapper img-wrapper--illustration float-left">
        <img src="index/Page 9.png" alt="">
    </figure>
    **I-check ang validity ng mga parameters.** Bago mo gamitin ang mga parameters sa mga method o functions mo, lagi munang i-check ang mga ito lalo na sa mga loosely-typed languages na gaya ng JavaScript. Baka integer ang kailangan mo pero string or floating-point number ang ipinasa sa function/method mo.
</p>