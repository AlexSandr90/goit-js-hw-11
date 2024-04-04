import{i as g,S as y}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",b="43151566-329d1ba35c4912218880d8d24",L=(s="")=>s.length===0?null:fetch(`${h}?key=${b}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>(console.log(r),null)),S=s=>s.length<=0?(g.error({position:"topRight",messageColor:"#ffffff",timeout:5e3,radius:15,backgroundColor:"#FF2E2E",message:"Sorry, there are no images matching your search query. Please, try again again!"}),""):s.map(({tags:r,likes:n,views:o,comments:e,downloads:t,webformatURL:a,largeImageURL:i})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}" >
            <img class="gallery-image" src="${a}" alt="${r}" />
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
                <span>${t}</span>
              </li>
            </ul>
          </a>
        </li>
        `).join(""),v=(s,r)=>{s.length!==0&&s.forEach(n=>{const{tags:o,likes:e,views:t,comments:a,downloads:i,webformatURL:m,largeImageURL:f}=n,p={tags:o,likes:e,views:t,comments:a,downloads:i,webformatURL:m,largeImageURL:f};r.push(p)})},c=document.querySelector('input[class="search-input"]'),u=document.querySelector('button[class="submit"]'),w=document.querySelector('form[class="search"]'),E=document.querySelector('section[class="gallery-section"]'),$='<div id="loader" class="loader"></div>',d=document.querySelector('ul[class="gallery"]');let l=[];const q={captionsData:"alt",captionDelay:250};c.addEventListener("input",()=>{c.value.length>0?u.disabled=!1:u.disabled=!0});const O=async s=>{s.preventDefault(),l=[],d.textContent="";const r=s.target,n=c.value.trim();try{E.insertAdjacentHTML("beforebegin",$);const o=await L(n),e=document.querySelector("#loader");if(e&&e.remove(),o!==null){v(o.hits,l),d.insertAdjacentHTML("beforeend",S(l));const t=new y("ul.gallery a",q)}}catch(o){console.error("Error fetching images:",o)}r.reset(),u.disabled=!0};w.addEventListener("submit",O);
//# sourceMappingURL=commonHelpers.js.map
