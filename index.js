import{a as m,S as p,i as n}from"./assets/vendor-DCKS6daY.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",f="24739758-4c739ca612149bb371b205192",y=o=>m.get(g,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250}),b=()=>{c.innerHTML=""},L=o=>{const r=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:t,views:i,comments:d,downloads:u})=>`
    <li class="gallery-item">
      <a href="${s}" class="gallery-link">
        <img src="${a}" alt="${e}" loading="lazy" class="gallery-image"/>
      </a>
      <div class="info">
        <p><b>Likes</b> ${t}</p>
        <p><b>Views</b> ${i}</p>
        <p><b>Comments</b> ${d}</p>
        <p><b>Downloads</b> ${u}</p>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()},S=()=>{l.classList.remove("is-hidden")},q=()=>{l.classList.add("is-hidden")},w=document.querySelector(".form"),P=o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}b(),S(),y(r).then(a=>{const s=a.data.hits;if(s.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s)}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q()})};w.addEventListener("submit",P);
//# sourceMappingURL=index.js.map
