import{i as f,S as p}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="43151566-329d1ba35c4912218880d8d24",h=(o="")=>o.length===0?null:fetch(`${g}?key=${y}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>(console.log(r),null)),b=o=>o.length<=0?(f.error({position:"topRight",messageColor:"#ffffff",timeout:5e3,radius:15,backgroundColor:"#FF2E2E",message:"Sorry, there are no images matching your search query. Please, try again again!"}),""):o.map(({tags:r,likes:n,views:s,comments:e,downloads:t,webformatURL:a,largeImageURL:i})=>`
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
                <span>${s}</span>
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
        `).join(""),L=(o,r)=>{o.length!==0&&o.forEach(n=>{const{tags:s,likes:e,views:t,comments:a,downloads:i,webformatURL:u,largeImageURL:d}=n,m={tags:s,likes:e,views:t,comments:a,downloads:i,webformatURL:u,largeImageURL:d};r.push(m)})},S=document.querySelector('input[class="search-input"]'),w=document.querySelector('form[class="search"]'),$=document.querySelector('section[class="gallery-section"]'),E='<div id="loader" class="loader"></div>',c=document.querySelector('ul[class="gallery"]');let l=[];const q={captionsData:"alt",captionDelay:250},v=async o=>{o.preventDefault(),l=[],c.textContent="";const r=o.target,n=S.value.trim();try{$.insertAdjacentHTML("beforebegin",E);const s=await h(n),e=document.querySelector("#loader");if(e&&e.remove(),s!==null){L(s.hits,l),c.insertAdjacentHTML("beforeend",b(l));const t=new p("ul.gallery a",q)}}catch(s){console.error("Error fetching images:",s)}r.reset()};w.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
