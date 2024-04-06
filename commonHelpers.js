import{S as f,i as g}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="43151566-329d1ba35c4912218880d8d24",b=(o="")=>fetch(`${h}?key=${y}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}),S=(o,r)=>{const n=r.map(({tags:s,likes:e,views:t,comments:a,downloads:d,webformatURL:m,largeImageURL:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${p}" >
            <img class="gallery-image" src="${m}" alt="${s}" />
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
                <span>${d}</span>
              </li>
            </ul>
          </a>
        </li>
        `).join("");o.insertAdjacentHTML("beforeend",n)},l=document.querySelector('input[class="search-input"]'),c=document.querySelector('button[class="submit"]'),L=document.querySelector('form[class="search"]'),$=document.querySelector('section[class="gallery-section"]'),q='<div id="loader" class="loader"></div>',u=document.querySelector('ul[class="gallery"]');let i=[];const v={captionsData:"alt",captionDelay:250},E=new f("ul.gallery a",v);l.addEventListener("input",()=>{l.value.length>0?c.disabled=!1:c.disabled=!0});const w=async o=>{o.preventDefault(),i=[],u.textContent="";const r=o.target,n=l.value.trim();try{$.insertAdjacentHTML("beforebegin",q);let s;n.length>0&&(s=await b(n));const e=document.querySelector("#loader");e&&e.remove(),s!==null&&s.hits.length>0?(i=[...s.hits],S(u,i),E.refresh()):g.error({position:"topRight",messageColor:"#ffffff",timeout:5e3,radius:15,backgroundColor:"#FF2E2E",message:"Sorry, there are no images matching your search query. Please, try again again!"})}catch(s){console.error("Error fetching images:",s)}r.reset(),c.disabled=!0};L.addEventListener("submit",w);
//# sourceMappingURL=commonHelpers.js.map
