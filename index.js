import{a as f,S as m,i}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="50359122-c0461bb177b5f80fbb401fd3b",y="https://pixabay.com/api/";async function h(a){const s={key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(y,{params:s})).data}const l=document.querySelector(".gallery"),v=new m(".gallery a"),d=document.querySelector(".loader");function b(a){const s=a.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:o,comments:u,downloads:p})=>`
        <li class="card">
    <a class="card__link" href="${n}">
      <img class="card__img" src="${r}" alt="${e}" />
    </a>
    <div class="card__info">
      <div class="card__info-item">
        <span class="label">Likes</span>
        <span class="value">${t}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Views</span>
        <span class="value">${o}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Comments</span>
        <span class="value">${u}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Downloads</span>
        <span class="value">${p}</span>
      </div>
    </div>
  </li>
`).join("");l.insertAdjacentHTML("beforeend",s),v.refresh()}function _(){l.innerHTML=""}function L(){d.classList.add("active")}function c(){d.classList.remove("active")}const w=document.querySelector(".form");w.addEventListener("submit",async a=>{a.preventDefault();const s=a.target.elements["search-text"].value.trim();if(!s){i.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}_(),L();try{const r=await h(s);if(c(),!r.hits.length){i.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(r.hits)}catch{i.error({title:"Error",message:"Something went wrong.",position:"topRight"}),console.error(err)}finally{c()}});
//# sourceMappingURL=index.js.map
