---
title: 404 · Wala Rito Ang Hinahanap Mo
date: 2019-01-27 03:00:17
---
<style>
    .page {
        display: grid;
        align-items: center;
    }

    .page article::before {
        content: '404';
        font-size: 40vw;
        font-weight: 900;
        text-align: center;
        z-index: -1;
        opacity: 0.1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .page article {
        grid-column: 1/2;
        grid-row: 1/2;
        position: relative;
    }

    .page ul,
    .page p {
        font-size: 1.25rem;
        text-indent: 2rem;
        font-family: var(--serif);
        max-width: 60ch;
        margin: 1rem auto;
    }
    .page h2,
    .page h1 {
        font-weight: 900;
        text-align: center;
        padding: 3vmin;
    }

    .page h1 {
        font-size: 6vmin;

    }
</style>

<article>
    <header>
        <h1>Ang Dakilang Lambak ng Karimlan</h1>
    </header>
    <p>Ito ang Dakilang Lambak ng Karimlan. Sa lugar na ito ay walang anumang pag-asa. Ang sinumang nakarating dito ay nawawala at naliligaw. Subalit lahat ng nawala ay nasusumpungan, at lahat ng naliligaw ay nakababalik sa kanilang pinanggalingan. Wala sa lambak na ito ang hinahanap mo.</p>

    <h2>Ang mga Puwede Mong Gawin</h2>
    <ul>
        <li>Bumalik sa <a href="/antares-blog/">Home page</a></li>
        <li>I-like at i-share ang <a href="https://www.facebook.com/antaresprogramming">page namin sa Facebook</a></li>
    </ul>
</article>