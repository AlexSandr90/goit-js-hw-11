import{S as g,i as h}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",b="43151566-329d1ba35c4912218880d8d24",L=(o="")=>fetch(`${y}?key=${b}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}),S=(o,s)=>{const n=s.map(({tags:r,likes:e,views:t,comments:a,downloads:i,webformatURL:l,largeImageURL:c})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${c}" >
            <img class="gallery-image" src="${l}" alt="${r}" />
            <ul class="stats-block">
              <li>
                <span>Likes</span>
                <span>${e}</span>
              </li>
              <li>
                <span>Views</span>
                <span>${t}</span>
              </li>
              <li>
                <span>Comments</span>
                <span>${a}</span>
              </li>
              <li>
                <span>Downloads</span>
                <span>${i}</span>
              </li>
            </ul>
          </a>
        </li>
        `).join("");o.insertAdjacentHTML("beforeend",n)},v=(o,s)=>{o.length!==0&&o.forEach(n=>{const{tags:r,likes:e,views:t,comments:a,downloads:i,webformatURL:l,largeImageURL:c}=n,f={tags:r,likes:e,views:t,comments:a,downloads:i,webformatURL:l,largeImageURL:c};s.push(f)})},d=document.querySelector('input[class="search-input"]'),m=document.querySelector('button[class="submit"]'),w=document.querySelector('form[class="search"]'),E=document.querySelector('section[class="gallery-section"]'),$='<div id="loader" class="loader"></div>',p=document.querySelector('ul[class="gallery"]');let u=[];const q={captionsData:"alt",captionDelay:250},O=new g("ul.gallery a",q);d.addEventListener("input",()=>{d.value.length>0?m.disabled=!1:m.disabled=!0});const I=async o=>{o.preventDefault(),u=[],p.textContent="";const s=o.target,n=d.value.trim();try{E.insertAdjacentHTML("beforebegin",$);const r=await L(n),e=document.querySelector("#loader");e&&e.remove(),r!==null&&r.hits.length>0?(v(r.hits,u),S(p,u),O.refresh()):h.error({position:"topRight",messageColor:"#ffffff",timeout:5e3,radius:15,backgroundColor:"#FF2E2E",message:"Sorry, there are no images matching your search query. Please, try again again!"})}catch(r){console.error("Error fetching images:",r)}s.reset(),m.disabled=!0};w.addEventListener("submit",I);
//# sourceMappingURL=commonHelpers.js.map
