---
title: 404
date: 2019-01-27 03:00:17
---
<style>
    .page {
        min-height: 80vh;
        display: grid;
        align-items: center;
    }

    .page::before {
        content: '404';
        font-size: 40vw;
        font-weight: 900;
        text-align: center;
        z-index: -1;
        opacity: 0.1;
    }

    .page::before,
    .page article {
        grid-column: 1/2;
        grid-row: 1/2;
    }

    .page p {
        font-family: var(--serif);
        max-width: 60ch;
        margin: 1rem auto;
    }

    .page h1 {
        font-size: 6vmin;
        font-weight: 900;
        text-align: center;
        padding: 3vmin;
    }
</style>

<article>
    <header>
        <h1>Ang Dakilang Lambak ng Karimlan</h1>
    </header>
    <p>Ito ang Dakilang Lambak ng Karimlan. Sa lugar na ito ay walang anumang pag-asa. Ang sinumang nakarating dito ay nawawala at naliligaw. Subalit lahat ng nawala ay nasusumpungan, at lahat ng naliligaw ay nakababalik sa kanilang pinanggalingan. Wala sa lambak na ito ang hinahanap mo.</p>

    <p>Maaari kang bumalik sa <a href="/antares-blog/">pinanggalingan mo</a>, o sa [iba pang lugar](/antares-blog/#interwebz) na mas maganda kaysa rito</p>
</article>