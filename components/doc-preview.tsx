'use client'

import { TLanguage } from '@/app/i18n/settings'
import { useEffect, useRef } from 'react'

type DocPreviewParams = {
  lng: TLanguage
}

const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pl" lang="pl">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>PCC-3 05 012</title>
  <meta name="author" content="ALEG" />
  <style type="text/css">
    * {
      margin: 0;
      padding: 0;
      text-indent: 0;
    }
    body {
      background-color: #ffffff;
      margin-right: -70px;
    }
    .s1 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 7pt;
    }

    .s2 {
      color: black;
      font-family: "Times New Roman", serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 7pt;
    }

    .s3 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 5pt;
      vertical-align: 2pt;
    }

    .s4 {
      color: black;
      font-family: "Times New Roman", serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 5pt;
      vertical-align: 2pt;
    }

    .s5 {
      color: black;
      font-family: "Courier New", monospace;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 5pt;
    }

    h1 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 14pt;
    }

    h2 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 12pt;
    }

    .s6 {
      color: black;
      font-family: "Times New Roman", serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 12pt;
    }

    .s7 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 7pt;
    }

    .s8 {
      color: black;
      font-family: "Courier New", monospace;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 5pt;
    }

    .s9 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 5pt;
    }

    .s10 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 8pt;
    }

    .s11 {
      color: black;
      font-family: "Times New Roman", serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 8pt;
    }

    .s12 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 8pt;
      vertical-align: -3pt;
    }

    .s13 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 12pt;
    }

    .s14 {
      color: black;
      font-family: "Times New Roman", serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 12pt;
    }

    .s15 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 6pt;
      vertical-align: 2pt;
    }

    .s16 {
      color: black;
      font-family: Wingdings;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 14pt;
      vertical-align: -2pt;
    }

    .s17 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 6pt;
      vertical-align: 2pt;
    }

    .s18 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 10pt;
      vertical-align: -2pt;
    }

    .s19 {
      color: black;
      font-family: "Times New Roman", serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 10pt;
      vertical-align: -2pt;
    }

    .s20 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 8pt;
      vertical-align: 1pt;
    }

    .s21 {
      color: black;
      font-family: "Times New Roman", serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 8pt;
      vertical-align: 1pt;
    }

    .s22 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 12pt;
    }

    .s23 {
      color: black;
      font-family: Wingdings;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 14pt;
    }

    .s24 {
      color: black;
      font-family: "Times New Roman", serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 14pt;
    }

    .s25 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 10pt;
      vertical-align: 2pt;
    }

    .s26 {
      color: black;
      font-family: "Times New Roman", serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 10pt;
      vertical-align: 2pt;
    }

    .s27 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 8pt;
    }

    .s28 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 6pt;
    }

    .s29 {
      color: black;
      font-family: "Times New Roman", serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 6pt;
    }

    p {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 7pt;
      margin: 0pt;
    }

    .s30 {
      color: black;
      font-family: "Times New Roman", serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 7pt;
    }

    .s31 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 7pt;
      vertical-align: 3pt;
    }

    h3 {
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 8pt;
    }

    li {
      display: block;
    }

    #l1 {
      padding-left: 0pt;
      counter-reset: c1 6;
    }

    #l1>li>*:first-child:before {
      counter-increment: c1;
      content: counter(c1, decimal) ". ";
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 7pt;
    }

    #l1>li:first-child>*:first-child:before {
      counter-increment: c1 0;
    }

    li {
      display: block;
    }

    #l2 {
      padding-left: 0pt;
      counter-reset: d1 7;
    }

    #l2>li>*:first-child:before {
      counter-increment: d1;
      content: counter(d1, decimal) ". ";
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 7pt;
    }

    #l2>li:first-child>*:first-child:before {
      counter-increment: d1 0;
    }

    li {
      display: block;
    }

    #l3 {
      padding-left: 0pt;
      counter-reset: e1 8;
    }

    #l3>li>*:first-child:before {
      counter-increment: e1;
      content: counter(e1, decimal) ". ";
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 7pt;
    }

    #l3>li:first-child>*:first-child:before {
      counter-increment: e1 0;
    }

    li {
      display: block;
    }

    #l4 {
      padding-left: 0pt;
      counter-reset: f1 21;
    }

    #l4>li>*:first-child:before {
      counter-increment: f1;
      content: counter(f1, decimal) ". ";
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 7pt;
    }

    #l4>li:first-child>*:first-child:before {
      counter-increment: f1 0;
    }

    li {
      display: block;
    }

    #l5 {
      padding-left: 0pt;
      counter-reset: g1 22;
    }

    #l5>li>*:first-child:before {
      counter-increment: g1;
      content: counter(g1, decimal) ". ";
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 7pt;
    }

    #l5>li:first-child>*:first-child:before {
      counter-increment: g1 0;
    }

    li {
      display: block;
    }

    #l6 {
      padding-left: 0pt;
      counter-reset: h1 23;
    }

    #l6>li>*:first-child:before {
      counter-increment: h1;
      content: counter(h1, decimal) ". ";
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 7pt;
    }

    #l6>li:first-child>*:first-child:before {
      counter-increment: h1 0;
    }

    li {
      display: block;
    }

    #l7 {
      padding-left: 0pt;
      counter-reset: i1 48;
    }

    #l7>li>*:first-child:before {
      counter-increment: i1;
      content: counter(i1, decimal) ". ";
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 7pt;
    }

    #l7>li:first-child>*:first-child:before {
      counter-increment: i1 0;
    }

    li {
      display: block;
    }

    #l8 {
      padding-left: 0pt;
      counter-reset: j1 49;
    }

    #l8>li>*:first-child:before {
      counter-increment: j1;
      content: counter(j1, decimal) ". ";
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: bold;
      text-decoration: none;
      font-size: 7pt;
    }

    #l8>li:first-child>*:first-child:before {
      counter-increment: j1 0;
    }

    li {
      display: block;
    }

    #l9 {
      padding-left: 0pt;
    }

    #l9>li>*:first-child:before {
      content: "- ";
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
    }

    li {
      display: block;
    }

    #l10 {
      padding-left: 0pt;
      counter-reset: l1 1;
    }

    #l10>li>*:first-child:before {
      counter-increment: l1;
      content: counter(l1, decimal) ") ";
      color: black;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 7pt;
      vertical-align: 3pt;
    }

    #l10>li:first-child>*:first-child:before {
      counter-increment: l1 0;
    }

    table,
    tbody {
      vertical-align: top;
      overflow: visible;
    }

    .new-fields {
      font-size: 15px;
    }
  </style>
</head>

<body>
  <table style="border-collapse: collapse; margin-left: 10.1807pt" cellspacing="0">
    <tr style="height: 24pt">
      <td style="
            width: 252pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="padding-left: 3pt; text-indent: 0pt; text-align: left">
          1.<span class="s2"> </span>Identyfikator<span class="s2"> </span>podatkowy<span class="s2"> </span>NIP<span class="s2"> </span>/<span class="s2"> </span>numer<span class="s2"> </span>PESEL<span class="s2">
          </span><span class="s3">(niepotrzebne</span><span class="s4"> </span><span class="s3">skreślić)</span><span class="s4"> </span>podatnika
        </p>
        <p style="padding-top: 2pt; text-indent: 0pt; text-align: left">
          <br />
        </p>
        <p class="s5" style="
              padding-left: 39pt;
              text-indent: 0pt;
              line-height: 3pt;
              text-align: left;
            ">
          └<span class="new-fields">0</span>┴<span class="new-fields">6</span>┴<span class="new-fields">2</span>┴<span class="new-fields">9</span>┴<span class="new-fields">2</span>┴<span class="new-fields">2</span>┴<span class="new-fields">0</span>┴<span class="new-fields">8</span>┴<span class="new-fields">4</span>┴<span class="new-fields">1</span>┴<span class="new-fields">{PESEL11}</span>┘
        </p>
      </td>
      <td style="
            width: 202pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#C0C0C0">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          2.<span class="s2"> </span>Nr<span class="s2"> </span>dokumentu
        </p>
      </td>
      <td style="
            width: 86pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#C0C0C0">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          3.<span class="s2"> </span>Status
        </p>
      </td>
    </tr>
  </table>
  <h1 style="
        padding-top: 2pt;
        padding-left: 14pt;
        text-indent: 0pt;
        text-align: left;
      ">
    PCC-3
  </h1>
  <h2 style="
        padding-top: 6pt;
        padding-left: 66pt;
        text-indent: 0pt;
        text-align: left;
      ">
    DEKLARACJA<span class="s6"> </span>W<span class="s6"> </span>SPRAWIE<span class="s6">
    </span>PODATKU<span class="s6"> </span>OD<span class="s6"> </span>CZYNNOŚCI<span class="s6">
    </span>CYWILNOPRAWNYCH
  </h2>
  <p style="text-indent: 0pt; text-align: left"><br /></p>
  <div class="textbox" style="
        border: 0.7pt solid #000000;
        display: block;
        min-height: 24.1pt;
        width: 182.4pt;
      ">
    <p class="s2" style="
          padding-left: 3pt;
          text-indent: 0pt;
          line-height: 8pt;
          text-align: left;
        ">
      <span class="s1">4.</span> <span class="s1">Data</span>
      <span class="s1">dokonania</span> <span class="s1">czynności</span>
      <span class="s7">(dzień</span> <span class="s7">-</span>
      <span class="s7">miesiąc</span> <span class="s7">-</span>
      <span class="s7">rok)</span>
    </p>
    <p style="padding-top: 1pt; text-indent: 0pt; text-align: left"><br /></p>
    <p class="s8" style="
          padding-left: 22pt;
          text-indent: 0pt;
          line-height: 5pt;
          text-align: left;
        ">└<span class="new-fields">0</span>┴<span class="new-fields">1</span>┘<span class="s9">-</span>└<span class="new-fields">0</span>┴<span class="new-fields">1</span>┘<span class="s9">-</span>└<span class="new-fields">2</span>┴<span class="new-fields">0</span>┴<span class="new-fields">2</span>┴<span class="new-fields">4</span>┘</p>
  </div>
  <p style="padding-left: 180pt; text-indent: 0pt; text-align: left" />
  <p style="text-indent: 0pt; text-align: left"><br /></p>
  <table style="border-collapse: collapse; margin-left: 10.132pt" cellspacing="0">
    <tr style="height: 61pt">
      <td style="
            width: 541pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s10" style="
              padding-top: 2pt;
              padding-left: 89pt;
              text-indent: -82pt;
              line-height: 108%;
              text-align: left;
            ">
          Podstawa<span class="s11"> </span>prawna:<span class="s11"> </span>Art.<span class="s11"> </span>10<span class="s11"> </span>ust.<span class="s11">
          </span>1<span class="s11"> </span>ustawy<span class="s11"> </span>z<span class="s11">
          </span>dnia<span class="s11"> </span>9<span class="s11"> </span>września<span class="s11"> </span>2000<span class="s11"> </span>r.<span class="s11"> </span>o<span class="s11"> </span>podatku<span class="s11">
          </span>od<span class="s11"> </span>czynności<span class="s11"> </span>cywilnoprawnych<span class="s11"> </span>(Dz.<span class="s11">
          </span>U.<span class="s11"> </span>z<span class="s11"> </span>2015<span class="s11">
          </span>r.<span class="s11"> </span>poz.<span class="s11"> </span>626,<span class="s11">
          </span>1045<span class="s11"> </span>i<span class="s11"> </span>1322),<span class="s11"> </span>zwanej<span class="s11"> </span>dalej<span class="s11"> </span><span class="s12">&quot;</span>ustawą&quot;.
        </p>
        <p class="s10" style="
              padding-left: 6pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          Składający:<span class="s11"> </span>Podatnicy<span class="s11">
          </span>podatku<span class="s11"> </span>od<span class="s11"> </span>czynności<span class="s11"> </span>cywilnoprawnych.
        </p>
        <p class="s10" style="
              padding-top: 2pt;
              padding-left: 6pt;
              text-indent: 0pt;
              text-align: left;
            ">
          Termin<span class="s11"> </span>składania:<span class="s11"> </span>14<span class="s11"> </span>dni<span class="s11"> </span>od<span class="s11">
          </span>dnia<span class="s11"> </span>powstania<span class="s11"> </span>obowiązku<span class="s11"> </span>podatkowego.
        </p>
        <p class="s10" style="
              padding-top: 2pt;
              padding-left: 6pt;
              text-indent: 0pt;
              text-align: left;
            ">
          Miejsce<span class="s11"> </span>składania:<span class="s11"> </span>Urząd<span class="s11"> </span>skarbowy,<span class="s11"> </span>przy<span class="s11"> </span>pomocy<span class="s11"> </span>którego<span class="s11"> </span>swoje<span class="s11"> </span>zadania<span class="s11"> </span>wykonuje<span class="s11"> </span>naczelnik<span class="s11"> </span>urzędu<span class="s11"> </span>skarbowego,<span class="s11"> </span>o<span class="s11"> </span>którym<span class="s11"> </span>mowa<span class="s11"> </span>w<span class="s11"> </span>art.<span class="s11"> </span>12<span class="s11">
          </span>i<span class="s11"> </span>13<span class="s11"> </span>ustawy.
        </p>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 541pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s13" style="
              padding-top: 2pt;
              padding-left: 4pt;
              text-indent: 0pt;
              text-align: left;
            ">
          A.<span class="s14"> </span>MIEJSCE<span class="s14"> </span>I<span class="s14">
          </span>CEL<span class="s14"> </span>SKŁADANIA<span class="s14"> </span>DEKLARACJI
        </p>
      </td>
    </tr>
    <tr style="height: 22pt">
      <td style="
            width: 22pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " rowspan="2" bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
      </td>
      <td style="
            width: 519pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          5.<span class="s2"> </span>Urząd<span class="s2"> </span>skarbowy,<span class="s2"> </span>do<span class="s2"> </span>którego<span class="s2"> </span>jest<span class="s2"> </span>adresowana<span class="s2"> </span>deklaracja<span class="s2">
          </span><span class="s15">1)</span>
        </p>
        <span class="new-fields">1210</span>
      </td>
    </tr>
    <tr style="height: 22pt">
      <td style="
            width: 519pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4">
        <ol id="l1">
          <li data-list-text="6.">
            <p class="s2" style="
                  padding-left: 11pt;
                  text-indent: -7pt;
                  line-height: 6pt;
                  text-align: left;
                ">
              <span class="s1">Cel</span> <span class="s1">złożenia</span>
              <span class="s1">deklaracji</span>
              <span class="s7">(zaznaczyć</span>
              <span class="s7">właściwy</span>
              <span class="s7">kwadrat):</span>
            </p>
          </li>
        </ol>
        <p class="s7" style="
              padding-left: 141pt;
              text-indent: 0pt;
              line-height: 14pt;
              text-align: left;
            ">
          <span class="s16">☑</span>1.<span class="s2"> </span>złożenie<span class="s2">
          </span>deklaracji<span class="s2"> </span><span class="s16"></span>2.<span class="s2"> </span>korekta<span class="s2">
          </span>deklaracji<span class="s2"> </span><span class="s17">2)</span>
        </p>
      </td>
    </tr>
    <tr style="height: 44pt">
      <td style="
            width: 541pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s13" style="
              padding-left: 19pt;
              padding-right: 36pt;
              text-indent: -16pt;
              text-align: left;
            ">
          B.<span class="s14"> </span>DANE<span class="s14"> </span>PODATNIKA<span class="s14"> </span>DOKONUJĄCEGO<span class="s14">
          </span>ZAPŁATY<span class="s14"> </span>LUB<span class="s14"> </span>ZWOLNIONEGO<span class="s14"> </span>Z<span class="s14"> </span>PODATKU<span class="s14"> </span>NA<span class="s14"> </span>PODSTAWIE<span class="s14"> </span>ART.<span class="s14"> </span>9<span class="s14"> </span>PKT<span class="s14"> </span>10<span class="s14">
          </span>LIT.<span class="s14"> </span>B<span class="s14"> </span>USTAWY
        </p>
        <p class="s10" style="
              padding-top: 1pt;
              padding-left: 63pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: left;
            ">
          <span class="s18">*</span><span class="s19"> </span><span class="s20">-</span><span class="s21"> </span>dotyczy<span class="s11">
          </span>podatnika<span class="s11"> </span>niebędącego<span class="s11">
          </span>osobą<span class="s11"> </span>fizyczną<span class="s11"> </span><span class="s18">**</span><span class="s19"> </span>-<span class="s11">
          </span>dotyczy<span class="s11"> </span>podatnika<span class="s11"> </span>będącego<span class="s11"> </span>osobą<span class="s11"> </span>fizyczną
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 541pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s22" style="
              padding-top: 4pt;
              padding-left: 4pt;
              text-indent: 0pt;
              text-align: left;
            ">
          B.1.<span class="s14"> </span>DANE<span class="s14"> </span>IDENTYFIKACYJNE
        </p>
      </td>
    </tr>
    <tr style="height: 48pt">
      <td style="
            width: 22pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " rowspan="4" bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
      </td>
      <td style="
            width: 519pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4">
        <ol id="l2">
          <li data-list-text="7.">
            <p class="s2" style="
                  padding-left: 11pt;
                  text-indent: -7pt;
                  line-height: 8pt;
                  text-align: left;
                ">
              <span class="s1">Podmiot</span>
              <span class="s1">składający</span>
              <span class="s1">deklarację</span>
              <span class="s7">(zaznaczyć</span>
              <span class="s7">właściwy</span>
              <span class="s7">kwadrat):</span>
            </p>
          </li>
        </ol>
        <p class="s7" style="
              padding-top: 1pt;
              padding-left: 45pt;
              text-indent: 0pt;
              text-align: left;
            ">
          <span class="s23">☑</span><span class="s24"> </span>1.<span class="s2">
          </span>podmiot<span class="s2"> </span>zobowiązany<span class="s2"> </span>solidarnie<span class="s2"> </span>do<span class="s2"> </span>zapłaty<span class="s2"> </span>podatku<span class="s2"> </span><span class="s23"></span><span class="s24"> </span>2.<span class="s2">
          </span>strona<span class="s2"> </span>umowy<span class="s2"> </span>zamiany<span class="s2"> </span><span class="s23"></span><span class="s24"> </span>3.<span class="s2"> </span>wspólnik<span class="s2">
          </span>spółki<span class="s2"> </span>cywilnej
        </p>
        <p class="s7" style="padding-left: 45pt; text-indent: 0pt; text-align: left">
          <span class="s23"></span><span class="s24"> </span>4.<span class="s2">
          </span>podmiot,<span class="s2"> </span>o<span class="s2"> </span>którym<span class="s2"> </span>mowa<span class="s2"> </span>w<span class="s2">
          </span>art.<span class="s2"> </span>9<span class="s2"> </span>pkt<span class="s2">
          </span>10<span class="s2"> </span>lit.<span class="s2"> </span>b<span class="s2">
          </span>ustawy<span class="s2"> </span>(pożyczkobiorca)<span class="s2">
          </span><span class="s23"></span><span class="s24"> </span>5.<span class="s2">
          </span>inny<span class="s2"> </span>podmiot
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 519pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4">
        <ol id="l3">
          <li data-list-text="8.">
            <p class="s2" style="
                  padding-left: 11pt;
                  text-indent: -7pt;
                  line-height: 8pt;
                  text-align: left;
                ">
              <span class="s1">Rodzaj</span>
              <span class="s1">podatnika</span>
              <span class="s7">(zaznaczyć</span>
              <span class="s7">właściwy</span>
              <span class="s7">kwadrat):</span>
            </p>
          </li>
        </ol>
        <p class="s7" style="
              padding-left: 81pt;
              text-indent: 0pt;
              line-height: 14pt;
              text-align: left;
            ">
          <span class="s23">☑</span><span class="s24"> </span>1.<span class="s2">
          </span>podatnik<span class="s2"> </span>niebędący<span class="s2"> </span>osobą<span class="s2"> </span>fizyczną<span class="s2"> </span><span class="s23"></span><span class="s24"> </span>2.<span class="s2">
          </span>osoba<span class="s2"> </span>fizyczna
        </p>
      </td>
    </tr>
    <tr style="height: 48pt">
      <td style="
            width: 519pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4">
        <p class="s2" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          <span class="s1">9.</span> <span class="s1">Nazwa</span>
          <span class="s1">pełna</span> <span class="s7">*</span>
          <span class="s1">/</span> <span class="s1">Nazwisko,</span>
          <span class="s1">pierwsze</span> <span class="s1">imię,</span>
          <span class="s1">data</span> <span class="s1">urodzenia</span>
          <span class="s7">**</span>
          <br /><br />
          <span class="new-fields"></span>
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 519pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          10.<span class="s2"> </span>Nazwa<span class="s2"> </span>skrócona<span class="s7">*</span><span class="s2"> </span>/<span class="s2">
          </span>Imię<span class="s2"> </span>ojca,<span class="s2"> </span>imię<span class="s2"> </span>matki<span class="s2"> </span><span class="s7">**</span></p>
        </p>
        <span class="new-fields">{NAZWA_SKROCONA_IMIE_MATKI_OJCA}</span>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 541pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s22" style="
              padding-top: 6pt;
              padding-left: 4pt;
              text-indent: 0pt;
              text-align: left;
            ">
          B.2.<span class="s14"> </span>ADRES<span class="s14"> </span>SIEDZIBY<span class="s14"> </span><span class="s25">*</span><span class="s26"> </span>/<span class="s14"> </span>AKTUALNY<span class="s14">
          </span>ADRES<span class="s14"> </span>ZAMIESZKANIA<span class="s14">
          </span><span class="s25">**</span>
        </p>
      </td>
    </tr>
    <tr style="height: 22pt">
      <td style="
            width: 22pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " rowspan="3" bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
      </td>
      <td style="
            width: 108pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 4pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          11.<span class="s2"> </span>Kraj
        </p>
        <span class="new-fields"></span>
      </td>
      <td style="
            width: 252pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          12.<span class="s2"> </span>Województwo
        </p>
        <span class="new-fields">małopolskie</span>
      </td>
      <td style="
            width: 159pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          13.<span class="s2"> </span>Powiat
        </p>
        <span class="new-fields">krakowski</span>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 129pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 4pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          14.<span class="s2"> </span>Gmina
        </p>
        <span class="new-fields">Skawina</span>
      </td>
      <td style="
            width: 274pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          15.<span class="s2"> </span>Ulica
        </p>
        <span class="new-fields">Zielona</span>
      </td>
      <td style="
            width: 58pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          16.<span class="s2"> </span>Nr<span class="s2"> </span>domu
        </p>
        <span class="new-fields">3</span>
      </td>
      <td style="
            width: 58pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          17.<span class="s2"> </span>Nr<span class="s2"> </span>lokalu
        </p>
        <span class="new-fields">1</span>
      </td>
    </tr>
    <tr style="height: 22pt">
      <td style="
            width: 223pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s1" style="
              padding-left: 4pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          18.<span class="s2"> </span>Miejscowość
        </p>
        <span class="new-fields">Skawina</span>
      </td>
      <td style="
            width: 116pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          19.<span class="s2"> </span>Kod<span class="s2"> </span>pocztowy
        </p>
        <span class="new-fields">32-050</span>
      </td>
      <td style="
            width: 180pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          20.<span class="s2"> </span>Poczta
        </p>
        <span class="new-fields">Skawina</span>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 541pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s13" style="
              padding-top: 2pt;
              padding-left: 4pt;
              text-indent: 0pt;
              text-align: left;
            ">
          C.<span class="s14"> </span>PRZEDMIOT<span class="s14"> </span>OPODATKOWANIA<span class="s14"> </span>I<span class="s14"> </span>TREŚĆ<span class="s14"> </span>CZYNNOŚCI<span class="s14"> </span>CYWILNOPRAWNEJ
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 22pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " rowspan="4" bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
      </td>
      <td style="
            width: 519pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4">
        <ol id="l4">
          <li data-list-text="21.">
            <p class="s2" style="
                  padding-left: 15pt;
                  text-indent: -11pt;
                  line-height: 8pt;
                  text-align: left;
                ">
              <span class="s1">Przedmiot</span>
              <span class="s1">opodatkowania</span>
              <span class="s7">(zaznaczyć</span>
              <span class="s7">właściwy</span>
              <span class="s7">kwadrat):</span>
            </p>
          </li>
        </ol>
        <p class="s7" style="
              padding-top: 1pt;
              padding-left: 30pt;
              text-indent: 0pt;
              line-height: 13pt;
              text-align: left;
            ">
          <span class="s23">☑</span><span class="s24"> </span>1.<span class="s2">
          </span>umowa<span class="s2"> </span><span class="s23"></span><span class="s24"> </span>2.<span class="s2"> </span>zmiana<span class="s2">
          </span>umowy<span class="s2"> </span><span class="s23"></span><span class="s24"> </span>3.<span class="s2"> </span>orzeczenie<span class="s2"> </span>sądu<span class="s2"> </span>lub<span class="s2"> </span>ugoda<span class="s2"> </span><span class="s23"></span><span class="s24"> </span>4.<span class="s2">
          </span>inne
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 519pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4">
        <ol id="l5">
          <li data-list-text="22.">
            <p class="s2" style="
                  padding-left: 15pt;
                  text-indent: -11pt;
                  line-height: 8pt;
                  text-align: left;
                ">
              <span class="s1">Miejsce</span>
              <span class="s1">położenia</span>
              <span class="s1">rzeczy</span> <span class="s1">lub</span>
              <span class="s1">miejsce</span>
              <span class="s1">wykonywania</span>
              <span class="s1">prawa</span>
              <span class="s1">majątkowego</span>
              <span class="s7">(zaznaczyć</span>
              <span class="s7">właściwy</span>
              <span class="s7">kwadrat):</span>
            </p>
          </li>
        </ol>
        <p class="s7" style="
              padding-top: 1pt;
              padding-left: 148pt;
              text-indent: 0pt;
              line-height: 13pt;
              text-align: left;
            ">
          <span class="s23">☑</span><span class="s24"> </span>1.<span class="s2">
          </span>terytorium<span class="s2"> </span>RP<span class="s2"> </span><span class="s23">☑</span><span class="s24"> </span>2.<span class="s2">
          </span>poza<span class="s2"> </span>terytorium<span class="s2"> </span>RP
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 519pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4">
        <ol id="l6">
          <li data-list-text="23.">
            <p class="s2" style="
                  padding-left: 15pt;
                  text-indent: -11pt;
                  line-height: 8pt;
                  text-align: left;
                ">
              <span class="s1">Miejsce</span>
              <span class="s1">dokonania</span>
              <span class="s1">czynności</span>
              <span class="s1">cywilnoprawnej</span>
              <span class="s7">(zaznaczyć</span>
              <span class="s7">właściwy</span>
              <span class="s7">kwadrat):</span>
            </p>
          </li>
        </ol>
        <p class="s7" style="
              padding-top: 1pt;
              padding-left: 148pt;
              text-indent: 0pt;
              line-height: 13pt;
              text-align: left;
            ">
          <span class="s23">☑</span><span class="s24"> </span>1.<span class="s2">
          </span>terytorium<span class="s2"> </span>RP<span class="s2"> </span><span class="s23"></span><span class="s24"> </span>2.<span class="s2">
          </span>poza<span class="s2"> </span>terytorium<span class="s2"> </span>RP
        </p>
      </td>
    </tr>
    <tr style="height: 110pt">
      <td style="
            width: 519pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4">
        <p class="s1" style="
              padding-left: 4pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          24.<span class="s2"> </span>Zwięzłe<span class="s2"> </span>określenie<span class="s2"> </span>treści<span class="s2"> </span>i<span class="s2"> </span>przedmiotu<span class="s2"> </span>czynności<span class="s2"> </span>cywilnoprawnej
        </p>
        <span class="new-fields">Fiat Bravo, rok produkcji 2000, w dobrym stanie</span>
      </td>
    </tr>
  </table>
  <p style="text-indent: 0pt; text-align: left"><br /></p>
  <div class="textbox" style="
        border: 0.7pt solid #000000;
        display: block;
        left: 0.4pt;
        min-height: 16pt;
        top: 78.8pt;
        width: 34.1pt;
      ">
    <p class="s22" style="padding-left: 10pt; text-indent: 0pt; text-align: left">
      1<span style="
            color: black;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 6pt;
          ">/3</span>
    </p>
  </div>
  <div class="textbox" style="
        border: 0.7pt solid #000000;
        display: block;
        left: 0.4pt;
        min-height: 16pt;
        top: 0.4pt;
        width: 78.5pt;
      ">
    <p class="s13" style="padding-left: 17pt; text-indent: 0pt; text-align: left">
      PCC-3<span class="s28">(5)</span>
    </p>
  </div>
  <p style="padding-left: 437pt; text-indent: 0pt; text-align: left" />
  <table style="border-collapse: collapse; margin-left: 5.855pt" cellspacing="0">
    <tr style="height: 26pt">
      <td style="
            width: 540pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s13" style="
              padding-left: 24pt;
              padding-right: 69pt;
              text-indent: -15pt;
              line-height: 12pt;
              text-align: left;
            ">
          D.<span class="s14"> </span>OBLICZENIE<span class="s14"> </span>NALEŻNEGO<span class="s14"> </span>PODATKU<span class="s14"> </span>OD<span class="s14"> </span>CZYNNOŚCI<span class="s14"> </span>CYWILNOPRAWNYCH,<span class="s14"> </span>Z<span class="s14">
          </span>WYJĄTKIEM<span class="s14"> </span>UMOWY<span class="s14"> </span>SPÓŁKI<span class="s14"> </span>LUB<span class="s14"> </span>JEJ<span class="s14"> </span>ZMIANY
        </p>
      </td>
    </tr>
    <tr style="height: 40pt">
      <td style="
            width: 22pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " rowspan="12" bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
      </td>
      <td style="
            width: 165pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
        <p class="s27" style="padding-left: 1pt; text-indent: 0pt; text-align: center">
          Rodzaj<span class="s11"> </span>czynności<span class="s11"> </span>cywilnoprawnej
        </p>
        <p class="s7" style="padding-left: 1pt; text-indent: 0pt; text-align: center">
          (w<span class="s2"> </span>tym<span class="s2"> </span>zmiana<span class="s2">
          </span>umowy,<span class="s2"> </span>orzeczenie<span class="s2"> </span>sądu<span class="s2"> </span>lub<span class="s2"> </span>ugoda)
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p class="s27" style="
              padding-top: 8pt;
              padding-left: 1pt;
              text-indent: 0pt;
              text-align: center;
            ">
          Podstawa<span class="s11"> </span>opodatkowania
        </p>
        <p class="s28" style="
              padding-top: 3pt;
              padding-left: 19pt;
              padding-right: 18pt;
              text-indent: 0pt;
              line-height: 7pt;
              text-align: center;
            ">
          określona<span class="s29"> </span>zgodnie<span class="s29"> </span>z<span class="s29"> </span>art.6<span class="s29"> </span>ustawy<span class="s29"> </span>(po<span class="s29"> </span>zaokrągleniu<span class="s29"> </span>do<span class="s29"> </span>pełnych<span class="s29"> </span>złotych)
        </p>
        <p class="s28" style="
              padding-left: 129pt;
              text-indent: 0pt;
              line-height: 4pt;
              text-align: left;
            ">
          zł
        </p>
      </td>
      <td style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p class="s27" style="
              padding-top: 8pt;
              padding-left: 1pt;
              text-indent: 0pt;
              text-align: center;
            ">
          Stawka<span class="s11"> </span>podatku
        </p>
        <p class="s28" style="
              padding-top: 3pt;
              padding-left: 1pt;
              text-indent: 0pt;
              text-align: center;
            ">
          określona<span class="s29"> </span>zgodnie<span class="s29"> </span>z<span class="s29"> </span>art.7<span class="s29"> </span>ustawy
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p class="s27" style="
              padding-top: 6pt;
              padding-left: 11pt;
              padding-right: 10pt;
              text-indent: 0pt;
              line-height: 91%;
              text-align: center;
            ">
          Obliczony<span class="s11"> </span>należny<span class="s11"> </span>podatek<span class="s11"> </span>od<span class="s11"> </span>czynności<span class="s11"> </span>cywilnoprawnej
        </p>
        <p class="s28" style="
              padding-top: 1pt;
              padding-left: 1pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: center;
            ">
          (po<span class="s29"> </span>zaokrągleniu<span class="s29"> </span>do<span class="s29"> </span>pełnych<span class="s29"> </span>złotych)
        </p>
        <p class="s28" style="
              padding-left: 129pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          zł
        </p>
      </td>
    </tr>
    <tr style="height: 2pt">
      <td style="
            width: 165pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p class="s28" style="
              padding-left: 1pt;
              text-indent: 0pt;
              line-height: 1pt;
              text-align: center;
            ">
          a
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p class="s28" style="
              padding-right: 65pt;
              text-indent: 0pt;
              line-height: 1pt;
              text-align: right;
            ">
          b
        </p>
      </td>
      <td style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p class="s28" style="
              padding-left: 1pt;
              text-indent: 0pt;
              line-height: 1pt;
              text-align: center;
            ">
          c
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p class="s28" style="
              padding-left: 1pt;
              text-indent: 0pt;
              line-height: 1pt;
              text-align: center;
            ">
          d
        </p>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 165pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " rowspan="2" bgcolor="#DFDFDF">
        <p style="padding-top: 4pt; text-indent: 0pt; text-align: left">
          <br />
        </p>
        <p class="s1" style="padding-left: 3pt; text-indent: 0pt; text-align: left">
          Umowa<span class="s2"> </span>sprzedaży<span class="s2"> </span><span class="s15">3)</span>
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          25.
        </p>
        <span class="new-fields"></span>
      </td>
      <td style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
        <p class="s27" style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 9pt;
              text-align: right;
            ">
          1%
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          26.
        </p>
        <span class="new-fields"></span>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          27.
        </p>
        <span class="new-fields">30000</span>
      </td>
      <td style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
        <p class="s27" style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 9pt;
              text-align: right;
            ">
          2%
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          28.
        </p>
        <span class="new-fields">600</span>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 165pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          Umowa<span class="s2"> </span>zamiany
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          29.
        </p>
        <span class="new-fields"></span>
      </td>
      <td style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 5pt;
              text-align: left;
            ">
          30.
        </p>
        <p class="s27" style="
              padding-top: 4pt;
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 9pt;
              text-align: right;
            ">
          %
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          31.
        </p>
        <span class="new-fields"></span>
      </td>
    </tr>
    <tr style="height: 23pt">
      <td style="
            width: 165pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          Umowa<span class="s2"> </span>pożyczki<span class="s2"> </span>lub<span class="s2"> </span>depozytu
        </p>
        <p class="s1" style="
              padding-left: 3pt;
              padding-right: 36pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          nieprawidłowego,<span class="s2"> </span>w<span class="s2"> </span>tym<span class="s2"> </span>zwolniona<span class="s2"> </span>na<span class="s2"> </span>podstawie<span class="s2"> </span>art.<span class="s2"> </span>9<span class="s2"> </span>pkt<span class="s2">
          </span>10<span class="s2"> </span>lit.<span class="s2"> </span>b<span class="s2">
          </span>ustawy<span class="s2"> </span><span class="s15">4)</span>
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          32.
        </p>
        <span class="new-fields"></span>
      </td>
      <td style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 5pt;
              text-align: left;
            ">
          33.
        </p>
        <p class="s27" style="
              padding-top: 4pt;
              padding-right: 2pt;
              text-indent: 0pt;
              text-align: right;
            ">
          %
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          34.
        </p>
        <span class="new-fields"></span>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 165pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 5pt;
              text-align: left;
            ">
          Umowa<span class="s2"> </span>darowizny<span class="s2"> </span>w<span class="s2"> </span>części<span class="s2"> </span>dotyczącej
        </p>
        <p class="s1" style="
              padding-left: 3pt;
              padding-right: 35pt;
              text-indent: 0pt;
              line-height: 7pt;
              text-align: left;
            ">
          przejęcia<span class="s2"> </span>przez<span class="s2"> </span>obdarowanego<span class="s2"> </span>długów<span class="s2"> </span>i<span class="s2"> </span>ciężarów<span class="s2"> </span>lub<span class="s2">
          </span>zobowiązań<span class="s2"> </span>darczyńcy
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          35.
        </p>
        <span class="new-fields"></span>
      </td>
      <td style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 5pt;
              text-align: left;
            ">
          36.
        </p>
        <p class="s27" style="
              padding-top: 4pt;
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 9pt;
              text-align: right;
            ">
          %
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          37.
        </p>
        <span class="new-fields"></span>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 165pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          Ustanowienie<span class="s2"> </span>odpłatnego<span class="s2">
          </span>użytkowania,<span class="s2"> </span>w<span class="s2"> </span>tym
        </p>
        <p class="s1" style="padding-left: 3pt; text-indent: 0pt; text-align: left">
          nieprawidłowego
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          38.
        </p>
        <span class="new-fields"></span>
      </td>
      <td style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 5pt;
              text-align: left;
            ">
          39.
        </p>
        <p class="s27" style="
              padding-top: 4pt;
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 9pt;
              text-align: right;
            ">
          %
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          40.
        </p>
        <span class="new-fields"></span>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 165pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " rowspan="2" bgcolor="#DFDFDF">
        <p style="padding-top: 4pt; text-indent: 0pt; text-align: left">
          <br />
        </p>
        <p class="s1" style="padding-left: 3pt; text-indent: 0pt; text-align: left">
          Ustanowienie<span class="s2"> </span>hipoteki<span class="s2">
          </span><span class="s15">5)</span>
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          41.
        </p>
        <span class="new-fields"></span>
      </td>
      <td style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p style="padding-top: 3pt; text-indent: 0pt; text-align: left">
          <br />
        </p>
        <p class="s27" style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: right;
            ">
          0,1<span class="s11"> </span>%
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          42.
        </p>
        <span class="new-fields"></span>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
        <p class="s27" style="
              padding-right: 65pt;
              text-indent: 0pt;
              line-height: 9pt;
              text-align: right;
            ">
          1
        </p>
      </td>
      <td style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
        <p class="s27" style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 9pt;
              text-align: right;
            ">
          19<span class="s11"> </span>zł
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          43.
        </p>
        <span class="new-fields">{P43}</span>
      </td>
    </tr>
    <tr style="height: 68pt">
      <td style="
            width: 165pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s2" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          <span class="s1">Inna</span> <span class="s7">(wymienić</span>
          <span class="s7">jaka):</span>
        </p>
        <span class="new-fields">{INNA}</span>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          44.
        </p>
      </td>
      <td style="
            width: 79pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 5pt;
              text-align: left;
            ">
          45.
        </p>
        <p style="text-indent: 0pt; text-align: left"><br /></p>
        <p class="s27" style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: right;
            ">
          %
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          46.
        </p>
      </td>
    </tr>
    <tr style="height: 22pt">
      <td style="
            width: 381pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="3" bgcolor="#DFDFDF">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          Kwota<span class="s2"> </span>należnego<span class="s2"> </span>podatku
        </p>
        <p class="s7" style="
              padding-top: 5pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            ">
          Suma<span class="s2"> </span>kwot<span class="s2"> </span>z<span class="s2">
          </span>kolumny<span class="s2"> </span>d.
        </p>
      </td>
      <td style="
            width: 137pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          47.
        </p>
        <span class="new-fields">600</span>
      </td>
    </tr>
    <tr style="height: 16pt">
      <td style="
            width: 540pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s13" style="
              padding-top: 2pt;
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: left;
            ">
          E.<span class="s14"> </span>OBLICZENIE<span class="s14"> </span>NALEŻNEGO<span class="s14"> </span>PODATKU<span class="s14"> </span>OD<span class="s14"> </span>UMOWY<span class="s14"> </span>SPÓŁKI<span class="s14"> </span>/<span class="s14"> </span>ZMIANY<span class="s14"> </span>UMOWY<span class="s14"> </span>SPÓŁKI
        </p>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 540pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s22" style="
              padding-top: 5pt;
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 13pt;
              text-align: left;
            ">
          E.1.<span class="s14"> </span>OKREŚLENIE<span class="s14"> </span>PODSTAWY<span class="s14"> </span>OPODATKOWANIA
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 22pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " rowspan="3" bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
      </td>
      <td style="
            width: 518pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4">
        <ol id="l7">
          <li data-list-text="48.">
            <p class="s2" style="
                  padding-left: 15pt;
                  text-indent: -11pt;
                  line-height: 7pt;
                  text-align: left;
                ">
              <span class="s1">Typ</span> <span class="s1">spółki</span>
              <span class="s7">(zaznaczyć</span>
              <span class="s7">właściwy</span>
              <span class="s7">kwadrat):</span>
            </p>
          </li>
        </ol>
        <p class="s7" style="
              padding-left: 142pt;
              text-indent: 0pt;
              line-height: 15pt;
              text-align: left;
            ">
          <span class="s23"></span><span class="s24"> </span>1.<span class="s2">
          </span>spółka<span class="s2"> </span>osobowa<span class="s2"> </span><span class="s23"></span><span class="s24"> </span>2.<span class="s2">
          </span>spółka<span class="s2"> </span>kapitałowa
        </p>
      </td>
    </tr>
    <tr style="height: 72pt">
      <td style="
            width: 518pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4">
        <ol id="l8">
          <li data-list-text="49.">
            <p class="s2" style="
                  padding-left: 15pt;
                  text-indent: -11pt;
                  line-height: 8pt;
                  text-align: left;
                ">
              <span class="s1">Podstawa</span>
              <span class="s1">opodatkowania</span>
              <span class="s1">dotyczy</span>
              <span class="s7">(zaznaczyć</span>
              <span class="s7">właściwy</span>
              <span class="s7">kwadrat):</span>
            </p>
          </li>
        </ol>
        <p class="s7" style="
              padding-top: 1pt;
              padding-left: 16pt;
              text-indent: 0pt;
              line-height: 15pt;
              text-align: left;
            ">
          <span class="s23"></span><span class="s24"> </span>1.<span class="s2">
          </span>zawarcia<span class="s2"> </span>umowy<span class="s2"> </span>spółki<span class="s2"> </span><span class="s23"></span><span class="s24"> </span>2.<span class="s2"> </span>zwiększenia<span class="s2"> </span>majątku<span class="s2"> </span>spółki<span class="s2"> </span>albo<span class="s2"> </span>podwyższenia<span class="s2"> </span>kapitału<span class="s2">
          </span>zakładowego
        </p>
        <p class="s7" style="
              padding-left: 16pt;
              text-indent: 0pt;
              line-height: 14pt;
              text-align: left;
            ">
          <span class="s23"></span><span class="s24"> </span>3.<span class="s2">
          </span>dopłaty<span class="s2"> </span><span class="s23"></span><span class="s24"> </span>4.<span class="s2"> </span>pożyczki<span class="s2">
          </span>udzielonej<span class="s2"> </span>spółce<span class="s2"> </span>osobowej<span class="s2"> </span>przez<span class="s2"> </span>wspólnika
        </p>
        <p class="s7" style="
              padding-left: 16pt;
              text-indent: 0pt;
              line-height: 14pt;
              text-align: left;
            ">
          <span class="s23"></span><span class="s24"> </span>5.<span class="s2">
          </span>oddania<span class="s2"> </span>spółce<span class="s2"> </span>rzeczy<span class="s2"> </span>lub<span class="s2"> </span>praw<span class="s2"> </span>majątkowych<span class="s2"> </span>do<span class="s2"> </span>nieodpłatnego<span class="s2"> </span>używania<span class="s2"> </span><span class="s23"></span><span class="s24"> </span>6.<span class="s2"> </span>przekształcenia<span class="s2"> </span>spółek<span class="s2">
          </span><span class="s23"></span><span class="s24"> </span>7.<span class="s2">
          </span>łączenia<span class="s2"> </span>spółek
        </p>
        <p class="s7" style="
              padding-left: 16pt;
              text-indent: 0pt;
              line-height: 15pt;
              text-align: left;
            ">
          <span class="s23"></span><span class="s24"> </span>8.<span class="s2">
          </span>przeniesienia<span class="s2"> </span>na<span class="s2"> </span>terytorium<span class="s2"> </span>Rzeczypospolitej<span class="s2">
          </span>Polskiej<span class="s2"> </span>rzeczywistego<span class="s2">
          </span>ośrodka<span class="s2"> </span>zarządzania<span class="s2"> </span>spółki<span class="s2"> </span>kapitałowej<span class="s2"> </span>lub<span class="s2"> </span>jej<span class="s2"> </span>siedziby
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 388pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4" bgcolor="#DFDFDF">
        <p class="s2" style="
              padding-left: 4pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          <span class="s1">Podstawa</span>
          <span class="s1">opodatkowania</span> <span class="s1">-</span>
          <span class="s1">określona</span> <span class="s1">zgodnie</span>
          <span class="s1">z</span> <span class="s1">art.</span>
          <span class="s1">6</span> <span class="s1">ust.</span>
          <span class="s1">1</span> <span class="s1">pkt</span>
          <span class="s1">8</span> <span class="s1">ustawy</span>
          <span class="s7">(po</span> <span class="s7">zaokrągleniu</span>
          <span class="s7">do</span> <span class="s7">pełnych</span>
          <span class="s7">złotych)</span>
        </p>
      </td>
      <td style="
            width: 130pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          50.
        </p>
        <p class="s28" style="
              padding-top: 6pt;
              padding-right: 2pt;
              text-indent: 0pt;
              text-align: right;
            ">
          zł
        </p>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 540pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s22" style="
              padding-top: 3pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            ">
          E.2.<span class="s14"> </span>ODLICZENIA<span class="s14"> </span>OD<span class="s14"> </span>PODSTAWY<span class="s14"> </span>OPODATKOWANIA<span class="s14"> </span>-<span class="s14"> </span>ART.<span class="s14"> </span>6<span class="s14"> </span>UST.<span class="s14">
          </span>9<span class="s14"> </span>USTAWY
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 36pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2" bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
      </td>
      <td style="
            width: 374pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="3" bgcolor="#DFDFDF">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          Opłaty<span class="s2"> </span>i<span class="s2"> </span>koszty<span class="s2">
          </span>związane<span class="s2"> </span>z<span class="s2"> </span>zawarciem<span class="s2"> </span>umowy<span class="s2"> </span>spółki<span class="s2"> </span>lub<span class="s2"> </span>jej<span class="s2">
          </span>zmiany<span class="s2"> </span>–<span class="s2"> </span>na<span class="s2">
          </span>podstawie<span class="s2"> </span>art.<span class="s2"> </span>6<span class="s2"> </span>ust.<span class="s2"> </span>9<span class="s2">
          </span>ustawy
        </p>
      </td>
      <td style="
            width: 130pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          51.
        </p>
        <p style="text-indent: 0pt; text-align: left"><br /></p>
        <p class="s28" style="
              padding-right: 1pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: right;
            ">
          zł,<span class="s29"> </span>gr
        </p>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 540pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s22" style="
              padding-top: 3pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            ">
          E.3.<span class="s14"> </span>OBLICZENIE<span class="s14"> </span>NALEŻNEGO<span class="s14"> </span>PODATKU
        </p>
      </td>
    </tr>
    <tr style="height: 22pt">
      <td style="
            width: 22pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " rowspan="2" bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
      </td>
      <td style="
            width: 388pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4" bgcolor="#DFDFDF">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          Podstawa<span class="s2"> </span>obliczenia<span class="s2"> </span>podatku
        </p>
        <p class="s7" style="
              padding-top: 5pt;
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 7pt;
              text-align: left;
            ">
          Od<span class="s2"> </span>kwoty<span class="s2"> </span>z<span class="s2">
          </span>poz.<span class="s2"> </span>50<span class="s2"> </span>należy<span class="s2">
          </span>odjąć<span class="s2"> </span>kwotę<span class="s2"> </span>z<span class="s2">
          </span>poz.<span class="s2"> </span>51.<span class="s2"> </span>Jeżeli<span class="s2"> </span>różnica<span class="s2"> </span>jest<span class="s2"> </span>liczbą<span class="s2"> </span>ujemną,<span class="s2"> </span>należy<span class="s2"> </span>wpisać<span class="s2"> </span>0.
        </p>
      </td>
      <td style="
            width: 130pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          52.
        </p>
        <p style="text-indent: 0pt; text-align: left"><br /></p>
        <p class="s28" style="
              padding-right: 1pt;
              text-indent: 0pt;
              line-height: 4pt;
              text-align: right;
            ">
          zł,<span class="s29"> </span>gr
        </p>
      </td>
    </tr>
    <tr style="height: 22pt">
      <td style="
            width: 388pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4" bgcolor="#DFDFDF">
        <p class="s2" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          <span class="s1">Kwota</span> <span class="s1">należnego</span>
          <span class="s1">podatku</span> <span class="s7">(po</span>
          <span class="s7">zaokrągleniu</span> <span class="s7">do</span>
          <span class="s7">pełnych</span> <span class="s7">złotych)</span>
        </p>
        <p class="s7" style="
              padding-top: 6pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            ">
          Podatek<span class="s2"> </span>obliczony<span class="s2"> </span>według<span class="s2"> </span>stawki<span class="s2"> </span>określonej<span class="s2"> </span>w<span class="s2"> </span>art.<span class="s2"> </span>7<span class="s2"> </span>ust.<span class="s2">
          </span>1<span class="s2"> </span>pkt<span class="s2"> </span>9<span class="s2">
          </span>ustawy<span class="s2"> </span>od<span class="s2"> </span>podstawy<span class="s2"> </span>z<span class="s2"> </span>poz.<span class="s2"> </span>52.
        </p>
      </td>
      <td style="
            width: 130pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          53.
        </p>
        <p style="text-indent: 0pt; text-align: left"><br /></p>
        <p class="s28" style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: right;
            ">
          <span class="new-fields">600</span>
          zł
        </p>
      </td>
    </tr>
    <tr style="height: 16pt">
      <td style="
            width: 540pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s13" style="
              padding-top: 2pt;
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: left;
            ">
          F.<span class="s14"> </span>PODATEK<span class="s14"> </span>DO<span class="s14">
          </span>ZAPŁATY
        </p>
      </td>
    </tr>
    <tr style="height: 23pt">
      <td style="
            width: 22pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
      </td>
      <td style="
            width: 388pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          " colspan="4" bgcolor="#DFDFDF">
        <p class="s1" style="padding-left: 3pt; text-indent: 0pt; text-align: left">
          Kwota<span class="s2"> </span>podatku<span class="s2"> </span>do<span class="s2"> </span>zapłaty
        </p>
        <p class="s7" style="
              padding-top: 5pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            ">
          Należy<span class="s2"> </span>wpisać<span class="s2"> </span>kwotę<span class="s2"> </span>z<span class="s2"> </span>poz.<span class="s2">
          </span>47<span class="s2"> </span>albo<span class="s2"> </span>53.
        </p>
      </td>
      <td style="
            width: 130pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          ">
        <p class="s1" style="padding-left: 3pt; text-indent: 0pt; text-align: left">
          54.
        </p>
        <p class="s28" style="
              padding-top: 6pt;
              padding-right: 2pt;
              text-indent: 0pt;
              text-align: right;
            ">
          <span class="new-fields">600</span>
          zł
        </p>
      </td>
    </tr>
  </table>
  <p style="text-indent: 0pt; text-align: left"><br /></p>
  <div class="textbox" style="
        border: 0.7pt solid #000000;
        display: block;
        left: 0.4pt;
        min-height: 16.7pt;
        top: 72.4pt;
        width: 36pt;
      ">
    <p class="s22" style="
          padding-top: 1pt;
          padding-left: 11pt;
          text-indent: 0pt;
          text-align: left;
        ">
      2<span style="
            color: black;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 6pt;
          ">/3</span>
    </p>
  </div>
  <div class="textbox" style="
        border: 0.7pt solid #000000;
        display: block;
        left: 0.4pt;
        min-height: 16.7pt;
        top: 0.4pt;
        width: 72pt;
      ">
    <p class="s13" style="padding-left: 13pt; text-indent: 0pt; text-align: left">
      PCC-3<span class="s28">(5)</span>
    </p>
  </div>
  <p style="padding-left: 5pt; text-indent: 0pt; text-align: left" />
  <table style="border-collapse: collapse; margin-left: 10.175pt" cellspacing="0">
    <tr style="height: 72pt">
      <td style="
            width: 540pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s13" style="padding-left: 8pt; text-indent: 0pt; text-align: left">
          G.<span class="s14"> </span>INFORMACJE<span class="s14"> </span>DODATKOWE
        </p>
        <p class="s10" style="
              padding-top: 1pt;
              padding-left: 26pt;
              text-indent: 0pt;
              text-align: left;
            ">
          W<span class="s11"> </span>przypadku:
        </p>
        <ul id="l9">
          <li data-list-text="-">
            <p class="s7" style="padding-left: 36pt; text-indent: -4pt; text-align: left">
              umowy<span class="s2"> </span>spółki<span class="s2"> </span>należy<span class="s2"> </span>podać<span class="s2"> </span>adres<span class="s2"> </span>siedziby<span class="s2"> </span>spółki<span class="s2"> </span>(rzeczywistego<span class="s2">
              </span>ośrodka<span class="s2"> </span>zarządzania),
            </p>
          </li>
          <li data-list-text="-">
            <p class="s7" style="
                  padding-top: 1pt;
                  padding-left: 35pt;
                  padding-right: 39pt;
                  text-indent: -4pt;
                  line-height: 124%;
                  text-align: left;
                ">
              umowy<span class="s2"> </span>sprzedaży,<span class="s2"> </span>gdy<span class="s2"> </span>kupujący<span class="s2"> </span>nie<span class="s2"> </span>ma<span class="s2"> </span>miejsca<span class="s2"> </span>zamieszkania<span class="s2">
              </span>lub<span class="s2"> </span>siedziby<span class="s2"> </span>na<span class="s2"> </span>terytorium<span class="s2"> </span>Rzeczypospolitej<span class="s2"> </span>Polskiej,<span class="s2">
              </span>należy<span class="s2"> </span>podać<span class="s2"> </span>miejsce<span class="s2"> </span>zamieszkania<span class="s2">
              </span>lub<span class="s2"> </span>siedzibę<span class="s2"> </span>sprzedawcy,<span class="s2"> </span>a<span class="s2"> </span>jeżeli<span class="s2"> </span>żadna<span class="s2"> </span>ze<span class="s2"> </span>stron<span class="s2"> </span>nie<span class="s2"> </span>ma<span class="s2"> </span>miejsca<span class="s2"> </span>zamieszkania<span class="s2">
              </span>lub<span class="s2"> </span>siedziby<span class="s2"> </span>na<span class="s2"> </span>terytorium<span class="s2"> </span>Rzeczypospolitej<span class="s2"> </span>Polskiej,<span class="s2">
              </span>należy<span class="s2"> </span>podać<span class="s2"> </span>miejsce<span class="s2"> </span>dokonania<span class="s2">
              </span>czynności,
            </p>
          </li>
          <li data-list-text="-">
            <p class="s7" style="
                  padding-left: 35pt;
                  text-indent: -3pt;
                  line-height: 8pt;
                  text-align: left;
                ">
              umowy<span class="s2"> </span>sprzedaży<span class="s2"> </span>przedsiębiorstwa<span class="s2"> </span>albo<span class="s2">
              </span>jego<span class="s2"> </span>zorganizowanej<span class="s2">
              </span>części<span class="s2"> </span>należy<span class="s2"> </span>podać<span class="s2"> </span>siedzibę<span class="s2"> </span>przedsiębiorstwa<span class="s2"> </span>albo<span class="s2">
              </span>miejsce<span class="s2"> </span>położenia<span class="s2">
              </span>jego<span class="s2"> </span>zorganizowanej<span class="s2">
              </span>części.
            </p>
          </li>
        </ul>
      </td>
    </tr>
    <tr style="height: 22pt">
      <td style="
            width: 22pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " rowspan="3" bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
      </td>
      <td style="
            width: 259pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          55.<span class="s2"> </span>Województwo
        </p>
      </td>
      <td style="
            width: 259pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          56.<span class="s2"> </span>Powiat
        </p>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 136pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          57.<span class="s2"> </span>Gmina
        </p>
      </td>
      <td style="
            width: 267pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          58.<span class="s2"> </span>Ulica
        </p>
      </td>
      <td style="
            width: 57pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          59.<span class="s2"> </span>Nr<span class="s2"> </span>domu
        </p>
      </td>
      <td style="
            width: 58pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 4pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          60.<span class="s2"> </span>Nr<span class="s2"> </span>lokalu
        </p>
      </td>
    </tr>
    <tr style="height: 22pt">
      <td style="
            width: 223pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          61.<span class="s2"> </span>Miejscowość
        </p>
      </td>
      <td style="
            width: 112pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          62.<span class="s2"> </span>Kod<span class="s2"> </span>pocztowy
        </p>
      </td>
      <td style="
            width: 183pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          ">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 6pt;
              text-align: left;
            ">
          63.<span class="s2"> </span>Poczta
        </p>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 540pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s13" style="
              padding-top: 2pt;
              padding-left: 8pt;
              text-indent: 0pt;
              text-align: left;
            ">
          H.<span class="s14"> </span>INFORMACJA<span class="s14"> </span>O<span class="s14"> </span>ZAŁĄCZNIKACH
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 22pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
      </td>
      <td style="
            width: 518pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="4">
        <p class="s1" style="padding-left: 3pt; text-indent: 0pt; text-align: left">
          64.<span class="s2"> </span>Liczba<span class="s2"> </span>dołączonych<span class="s2"> </span>załączników<span class="s2">
          </span>PCC-3/A
        </p>
        <p style="padding-top: 1pt; text-indent: 0pt; text-align: left">
          <br />
        </p>
        <p class="s8" style="text-indent: 0pt; line-height: 5pt; text-align: center">
          └───┴──<span class="new-fields">0</span>──┘
        </p>
      </td>
    </tr>
    <tr style="height: 20pt">
      <td style="
            width: 540pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s13" style="
              padding-top: 2pt;
              padding-left: 8pt;
              text-indent: 0pt;
              text-align: left;
            ">
          I.<span class="s14"> </span>PODPIS<span class="s14"> </span>PODATNIKA<span class="s14"> </span>I<span class="s14"> </span>OSÓB<span class="s14"> </span>REPREZENTUJĄCYCH<span class="s14">
          </span>PODATNIKA
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 540pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s22" style="
              padding-top: 4pt;
              padding-left: 8pt;
              text-indent: 0pt;
              text-align: left;
            ">
          I.1.<span class="s14"> </span>PODPIS<span class="s14"> </span>PODATNIKA
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 22pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " rowspan="2" bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
      </td>
      <td style="
            width: 230pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s1" style="padding-left: 3pt; text-indent: 0pt; text-align: left">
          65.<span class="s2"> </span>Imię
        </p>
      </td>
      <td style="
            width: 288pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s1" style="padding-left: 3pt; text-indent: 0pt; text-align: left">
          66.<span class="s2"> </span>Nazwisko
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 230pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s2" style="padding-left: 3pt; text-indent: 0pt; text-align: left">
          <span class="s1">67.</span> <span class="s1">Data</span>
          <span class="s1">wypełnienia</span>
          <span class="s1">deklaracji</span> <span class="s7">(dzień</span>
          <span class="s7">-</span> <span class="s7">miesiąc</span>
          <span class="s7">-</span> <span class="s7">rok)</span>
        </p>
        <p style="padding-top: 1pt; text-indent: 0pt; text-align: left">
          <br />
        </p>
        <p class="s8" style="
              padding-left: 89pt;
              text-indent: 0pt;
              line-height: 5pt;
              text-align: left;
            ">
          └──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┘<span class="s9">-</span>└──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┘<span class="s9">-</span>└──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┘
        </p>
      </td>
      <td style="
            width: 288pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s1" style="padding-left: 3pt; text-indent: 0pt; text-align: left">
          68.<span class="s2"> </span>Podpis<span class="s2"> </span>podatnika
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 540pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="5" bgcolor="#DFDFDF">
        <p class="s22" style="
              padding-top: 4pt;
              padding-left: 8pt;
              text-indent: 0pt;
              text-align: left;
            ">
          I.2.<span class="s14"> </span>PODPISY<span class="s14"> </span>OSÓB<span class="s14"> </span>REPREZENTUJĄCYCH<span class="s14">
          </span>PODATNIKA
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 22pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " rowspan="4" bgcolor="#DFDFDF">
        <p style="text-indent: 0pt; text-align: left"><br /></p>
      </td>
      <td style="
            width: 230pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          69.<span class="s2"> </span>Imię
        </p>
      </td>
      <td style="
            width: 288pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          70.<span class="s2"> </span>Nazwisko
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 230pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s2" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          <span class="s1">71.</span> <span class="s1">Data</span>
          <span class="s1">wypełnienia</span>
          <span class="s1">deklaracji</span> <span class="s7">(dzień</span>
          <span class="s7">-</span> <span class="s7">miesiąc</span>
          <span class="s7">-</span> <span class="s7">rok)</span>
        </p>
        <p style="padding-top: 1pt; text-indent: 0pt; text-align: left">
          <br />
        </p>
        <p class="s8" style="
              padding-left: 89pt;
              text-indent: 0pt;
              line-height: 5pt;
              text-align: left;
            ">
          └──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┘<span class="s9">-</span>└──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┘<span class="s9">-</span>└──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┘
        </p>
      </td>
      <td style="
            width: 288pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          72.<span class="s2"> </span>Podpis<span class="s2"> </span>osoby<span class="s2"> </span>reprezentującej<span class="s2">
          </span>podatnika
        </p>
      </td>
    </tr>
    <tr style="height: 22pt">
      <td style="
            width: 230pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s1" style="padding-left: 3pt; text-indent: 0pt; text-align: left">
          73.<span class="s2"> </span>Imię
        </p>
      </td>
      <td style="
            width: 288pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          74.<span class="s2"> </span>Nazwisko
        </p>
      </td>
    </tr>
    <tr style="height: 24pt">
      <td style="
            width: 230pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s2" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          <span class="s1">75.</span> <span class="s1">Data</span>
          <span class="s1">wypełnienia</span>
          <span class="s1">deklaracji</span> <span class="s7">(dzień</span>
          <span class="s7">-</span> <span class="s7">miesiąc</span>
          <span class="s7">-</span> <span class="s7">rok)</span>
        </p>
        <p style="padding-top: 1pt; text-indent: 0pt; text-align: left">
          <br />
        </p>
        <p class="s8" style="
              padding-left: 89pt;
              text-indent: 0pt;
              line-height: 5pt;
              text-align: left;
            ">
          └──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┘<span class="s9">-</span>└──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┘<span class="s9">-</span>└──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┴──<span class="new-fields">0</span>──┘
        </p>
      </td>
      <td style="
            width: 288pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          " colspan="2">
        <p class="s1" style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 8pt;
              text-align: left;
            ">
          76.<span class="s2"> </span>Podpis<span class="s2"> </span>osoby<span class="s2"> </span>reprezentującej<span class="s2">
          </span>podatnika
        </p>
      </td>
    </tr>
  </table>
  <p style="padding-top: 6pt; text-indent: 0pt; text-align: left"><br /></p>
  <ol id="l10">
    <li data-list-text="1)">
      <p style="padding-left: 25pt; text-indent: -9pt; text-align: left">
        Przez<span class="s30"> </span>urząd,<span class="s30"> </span>do<span class="s30">
        </span>którego<span class="s30"> </span>adresowana<span class="s30"> </span>jest<span class="s30"> </span>deklaracja<span class="s30"> </span>rozumie<span class="s30"> </span>się<span class="s30"> </span>urząd<span class="s30"> </span>skarbowy,<span class="s30"> </span>przy<span class="s30"> </span>pomocy<span class="s30"> </span>którego<span class="s30"> </span>właściwy<span class="s30"> </span>w<span class="s30"> </span>sprawie<span class="s30"> </span>podatku<span class="s30"> </span>od<span class="s30"> </span>czynności<span class="s30"> </span>cywilnoprawnych<span class="s30">
        </span>naczelnik<span class="s30"> </span>urzędu<span class="s30"> </span>skarbowego<span class="s30"> </span>wykonuje<span class="s30"> </span>swoje<span class="s30"> </span>zadania.
      </p>
    </li>
    <li data-list-text="2)">
      <p style="
            padding-left: 24pt;
            text-indent: -8pt;
            line-height: 11pt;
            text-align: left;
          ">
        Zgodnie<span class="s30"> </span>z<span class="s30"> </span>art.<span class="s30">
        </span>81<span class="s30"> </span>ustawy<span class="s30"> </span>z<span class="s30">
        </span>dnia<span class="s30"> </span>29<span class="s30"> </span>sierpnia<span class="s30"> </span>1997<span class="s30"> </span>r.<span class="s30"> </span>-<span class="s30"> </span>Ordynacja<span class="s30">
        </span>podatkowa<span class="s30"> </span>(Dz.<span class="s30"> </span>U.<span class="s30"> </span>z<span class="s30"> </span>2015<span class="s30">
        </span>r.<span class="s30"> </span>poz.<span class="s30"> </span>613,<span class="s30">
        </span>z<span class="s30"> </span>późn.<span class="s30"> </span>zm.).
      </p>
    </li>
    <li data-list-text="3)">
      <p style="padding-left: 25pt; text-indent: -10pt; text-align: left">
        W<span class="s30"> </span>przypadku<span class="s30"> </span>umowy<span class="s30"> </span>sprzedaży,<span class="s30"> </span>w<span class="s30"> </span>której<span class="s30"> </span>nie<span class="s30">
        </span>wyodrębniono<span class="s30"> </span>wartości<span class="s30">
        </span>rzeczy<span class="s30"> </span>lub<span class="s30"> </span>praw<span class="s30"> </span>majątkowych,<span class="s30"> </span>do<span class="s30"> </span>których<span class="s30"> </span>mają<span class="s30"> </span>zastosowanie<span class="s30"> </span>różne<span class="s30"> </span>stawki<span class="s30"> </span>podatku,<span class="s30"> </span>w<span class="s30"> </span>poz.<span class="s30"> </span>27<span class="s30"> </span>należy<span class="s30">
        </span>wpisać<span class="s30"> </span>łączną<span class="s30"> </span>wartość<span class="s30"> </span>tych<span class="s30"> </span>rzeczy<span class="s30"> </span>lub<span class="s30"> </span>praw<span class="s30"> </span>majątkowych.
      </p>
    </li>
    <li data-list-text="4)">
      <p style="
            padding-left: 25pt;
            text-indent: -8pt;
            line-height: 11pt;
            text-align: left;
          ">
        W<span class="s30"> </span>przypadku<span class="s30"> </span>umowy<span class="s30"> </span>pożyczki<span class="s30"> </span>zwolnionej<span class="s30"> </span>na<span class="s30"> </span>podstawie<span class="s30"> </span>art.<span class="s30"> </span>9<span class="s30"> </span>pkt<span class="s30"> </span>10<span class="s30">
        </span>lit.<span class="s30"> </span>b<span class="s30"> </span>ustawy,<span class="s30">
        </span>w<span class="s30"> </span>poz.<span class="s30"> </span>32<span class="s30">
        </span>należy<span class="s30"> </span>wpisać<span class="s30"> </span>kwotę<span class="s30"> </span>udzielonej<span class="s30"> </span>pożyczki,<span class="s30"> </span>a<span class="s30"> </span>w<span class="s30">
        </span>poz.<span class="s30"> </span>33<span class="s30"> </span>i<span class="s30">
        </span>34<span class="s30"> </span>należy<span class="s30"> </span>wpisać<span class="s30"> </span>0.
      </p>
    </li>
    <li data-list-text="5)">
      <p style="padding-left: 25pt; text-indent: -9pt; text-align: left">
        <span class="s31"> </span>W<span class="s30"> </span>przypadku<span class="s30">
        </span>ustanowienia<span class="s30"> </span>hipoteki<span class="s30">
        </span>na<span class="s30"> </span>zabezpieczenie<span class="s30"> </span>wierzytelności<span class="s30"> </span>istniejących,<span class="s30">
        </span>w<span class="s30"> </span>poz.<span class="s30"> </span>41<span class="s30">
        </span>należy<span class="s30"> </span>wpisać<span class="s30"> </span>kwotę<span class="s30"> </span>zabezpieczonej<span class="s30">
        </span>wierzytelności;<span class="s30"> </span>w<span class="s30"> </span>przypadku<span class="s30"> </span>ustanowienia<span class="s30">
        </span>hipoteki<span class="s30"> </span>na<span class="s30"> </span>zabezpieczenie<span class="s30"> </span>wierzytelności<span class="s30">
        </span>o<span class="s30"> </span>wysokości<span class="s30"> </span>nieustalonej,<span class="s30"> </span>w<span class="s30"> </span>poz.<span class="s30"> </span>43<span class="s30"> </span>należy<span class="s30">
        </span>wpisać<span class="s30"> </span>liczbę<span class="s30"> </span>19.
      </p>
    </li>
  </ol>
  <p style="padding-top: 6pt; text-indent: 0pt; text-align: left"><br /></p>
  <h3 style="text-indent: 0pt; text-align: center">Pouczenia</h3>
  <p style="padding-left: 16pt; text-indent: 0pt; text-align: justify">
    Za<span class="s30"> </span>podanie<span class="s30"> </span>nieprawdy<span class="s30"> </span>lub<span class="s30"> </span>zatajenie<span class="s30"> </span>prawdy<span class="s30"> </span>i<span class="s30">
    </span>przez<span class="s30"> </span>to<span class="s30"> </span>narażenie<span class="s30">
    </span>podatku<span class="s30"> </span>na<span class="s30"> </span>uszczuplenie<span class="s30"> </span>grozi<span class="s30"> </span>odpowiedzialność<span class="s30"> </span>przewidziana<span class="s30">
    </span>w<span class="s30"> </span>Kodeksie<span class="s30"> </span>karnym<span class="s30">
    </span>skarbowym.
  </p>
  <p style="
        padding-top: 2pt;
        padding-left: 16pt;
        text-indent: 0pt;
        text-align: justify;
      ">
    W<span class="s30"> </span>przypadku<span class="s30"> </span>niezapłacenia<span class="s30"> </span>w<span class="s30"> </span>obowiązującym<span class="s30"> </span>terminie<span class="s30"> </span>kwoty<span class="s30"> </span>podatku<span class="s30"> </span>od<span class="s30">
    </span>czynności<span class="s30"> </span>cywilnoprawnych<span class="s30">
    </span>z<span class="s30"> </span>poz.<span class="s30"> </span>54<span class="s30">
    </span>lub<span class="s30"> </span>wpłacenia<span class="s30"> </span>jej<span class="s30">
    </span>w<span class="s30"> </span>niepełnej<span class="s30"> </span>wysokości,<span class="s30"> </span>niniejsza<span class="s30"> </span>deklaracja<span class="s30"> </span>stanowi<span class="s30"> </span>podstawę<span class="s30"> </span>do<span class="s30"> </span>wystawienia<span class="s30"> </span>tytułu<span class="s30"> </span>wykonawczego,<span class="s30"> </span>zgodnie<span class="s30"> </span>z<span class="s30"> </span>przepisami<span class="s30"> </span>ustawy<span class="s30"> </span>z<span class="s30"> </span>dnia<span class="s30">
    </span>17<span class="s30"> </span>czerwca<span class="s30"> </span>1966<span class="s30">
    </span>r.<span class="s30"> </span>o<span class="s30"> </span>postępowaniu<span class="s30">
    </span>egzekucyjnym<span class="s30"> </span>w<span class="s30"> </span>administracji<span class="s30"> </span>(Dz.<span class="s30"> </span>U.<span class="s30"> </span>z<span class="s30"> </span>2014<span class="s30">
    </span>r.<span class="s30"> </span>poz.<span class="s30"> </span>1619,<span class="s30">
    </span>z<span class="s30"> </span>późn.<span class="s30"> </span>zm.).
  </p>
  <p style="text-indent: 0pt; text-align: left"><br /></p>
  <div class="textbox" style="
        border: 0.7pt solid #000000;
        display: block;
        left: 0.4pt;
        min-height: 17.3pt;
        top: 72.4pt;
        width: 36pt;
      ">
    <p class="s22" style="
          padding-top: 1pt;
          padding-left: 11pt;
          text-indent: 0pt;
          text-align: left;
        ">
      3<span style="
            color: black;
            font-family: Arial, sans-serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 6pt;
          ">/3</span>
    </p>
  </div>
  <div class="textbox" style="
        border: 0.7pt solid #000000;
        display: block;
        left: 0.4pt;
        min-height: 17.3pt;
        top: 0.4pt;
        width: 72pt;
      ">
    <p class="s13" style="padding-left: 13pt; text-indent: 0pt; text-align: left">
      PCC-3<span class="s28">(5)</span>
    </p>
  </div>
  <p style="padding-left: 444pt; text-indent: 0pt; text-align: left" />
</body>

</html>`

export default function DocPreview({ lng }: DocPreviewParams) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDoc =
        iframeRef.current.contentDocument ||
        iframeRef.current.contentWindow?.document
      if (iframeDoc) {
        iframeDoc.open()
        iframeDoc.write(html)
        iframeDoc.close()
      }
    }
  }, [])

  return (
    <div className="hidden lg:block lg:w-1/2 mt-24 xl:mt-0">
      <iframe
        ref={iframeRef}
        className="w-full overflow-scroll h-[140vh] min-w-[600px] mt-[-12vh] ml-[2vw] scale-[0.8]"
      />
    </div>
  )
}
