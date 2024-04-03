import{i as p,S as d}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="43151566-329d1ba35c4912218880d8d24",y=(s="")=>s.length===0?null:fetch(`${g}?key=${h}&q=${encodeURIComponent(s)}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>(console.log(r),null)),b=s=>s.length<=0?(p.error({position:"topRight",messageColor:"#ffffff",timeout:5e3,radius:15,backgroundColor:"#FF2E2E",message:"Sorry, there are no images matching your search query. Please, try again again!"}),""):s.map(({tags:r,likes:o,views:n,comments:e,downloads:t,webformatURL:a,largeImageURL:i})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}" >
            <img class="gallery-image" src="${a}" alt="${r}" />
            <ul class="stats-block">
              <li>
                <span>Likes</span>
                <span>${o}</span>
              </li>
              <li>
                <span>Views</span>
                <span>${n}</span>
              </li>
              <li>
                <span>Comments</span>
                <span>${e}</span>
              </li>
              <li>
                <span>Downloads</span>
                <span>${t}</span>
              </li>
            </ul>
          </a>
        </li>
        `).join(""),L=(s,r)=>{s.length!==0&&s.forEach(o=>{const{tags:n,likes:e,views:t,comments:a,downloads:i,webformatURL:u,largeImageURL:f}=o,m={tags:n,likes:e,views:t,comments:a,downloads:i,webformatURL:u,largeImageURL:f};r.push(m)})},w=document.querySelector('input[class="search-input"]'),$=document.querySelector('form[class="search"]'),c=document.querySelector('ul[class="gallery"]');let l=[];const E=async s=>{s.preventDefault();const r=s.target,o=w.value.trim();try{const n=await y(o);if(n!==null){l=[],c.textContent="",L(n.hits,l),c.insertAdjacentHTML("beforeend",b(l));const e={captionsData:"alt",captionDelay:250},t=new d("ul.gallery a",e)}}catch(n){console.error("Error fetching images:",n)}r.reset()};$.addEventListener("submit",E);
//# sourceMappingURL=commonHelpers.js.map
