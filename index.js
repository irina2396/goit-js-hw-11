import{a as p,S as f,i}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="50359122-c0461bb177b5f80fbb401fd3b",g="https://pixabay.com/api/";async function y(a){const s={key:m,q:a,image_type:"photo",orientation:"horizontal",safecearch:!0};return(await p.get(g,{params:s})).data}const l=document.querySelector(".gallery"),h=new f(".gallery a");function v(a){const s=a.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:n,comments:d,downloads:u})=>`
        <li class="card">
    <a class="card__link" href="${o}">
      <img class="card__img" src="${r}" alt="${e}" />
    </a>
    <div class="card__info">
      <div class="card__info-item">
        <span class="label">Likes</span>
        <span class="value">${t}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Views</span>
        <span class="value">${n}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Comments</span>
        <span class="value">${d}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Downloads</span>
        <span class="value">${u}</span>
      </div>
    </div>
  </li>
`).join("");l.insertAdjacentHTML("beforeend",s),h.refresh()}function b(){l.innerHTML=""}function _(){document.getElementById("loader").classList.add("active")}function c(){document.getElementById("loader").classList.remove("active")}const L=document.querySelector(".form");L.addEventListener("submit",async a=>{a.preventDefault();const s=a.target.elements["search-text"].value.trim();if(!s){i.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b(),_();try{const r=await y(s);if(c(),!r.hits.length){i.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(r.hits)}catch{i.error({title:"Error",message:"Something went wrong.",position:"topRight"}),console.error(err)}finally{c()}});
//# sourceMappingURL=index.js.map
