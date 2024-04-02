import{S as m,i as d}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const g="https://pixabay.com/api/",h="43151566-329d1ba35c4912218880d8d24",y=(s="")=>s.length===0?null:fetch(`${g}?key=${h}&q=${encodeURIComponent(s)}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>(console.log(t),null)),b=s=>s.length<=0?(d.error({position:"topRight",messageColor:"#ffffff",timeout:5e3,radius:15,backgroundColor:"#FF2E2E",message:"Sorry, there are no images matching your search query. Please, try again again!"}),""):s.map(({tags:t,likes:n,views:o,comments:e,downloads:r,webformatURL:a,largeImageURL:i})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}" >
          <img class="gallery-image" src="${a}" alt="${t}" />
          <ul class="stats-block">
            <li>
              <span>Likes</span>
              <span>${n}</span>
            </li>
            <li>
              <span>Views</span>
              <span>${o}</span>
            </li>
            <li>
              <span>Comments</span>
              <span>${e}</span>
            </li>
            <li>
              <span>Downloads</span>
              <span>${r}</span>
            </li>
          </ul>
          </a>
        </li>
        `).join(""),L=(s,t)=>{s.length!==0&&s.forEach(n=>{const{tags:o,likes:e,views:r,comments:a,downloads:i,webformatURL:u,largeImageURL:f}=n;console.log({imageDataItem:n});const p={tags:o,likes:e,views:r,comments:a,downloads:i,webformatURL:u,largeImageURL:f};t.push(p)})},w={captionsData:"alt",captionDelay:250};new m("ul.gallery a",w);const $=document.querySelector('input[class="search-input"]'),E=document.querySelector('form[class="search"]'),c=document.querySelector('ul[class="gallery"]');let l=[];const S=async s=>{s.preventDefault();const t=s.target,n=$.value.trim();try{const o=await y(n);o!==null&&(l=[],c.textContent="",L(o.hits,l),c.insertAdjacentHTML("beforeend",b(l)))}catch(o){console.error("Error fetching images:",o)}t.reset()};E.addEventListener("submit",S);
//# sourceMappingURL=commonHelpers.js.map
