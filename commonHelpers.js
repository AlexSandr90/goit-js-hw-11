import"./assets/vendor-86291ea8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",g="43151566-329d1ba35c4912218880d8d24",h=(n="")=>fetch(`${f}?key=${g}&q=${encodeURIComponent(n)}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).catch(s=>(console.log(s),null)),y=document.querySelector('input[class="search-input"]'),b=document.querySelector('form[class="search"]'),L=document.querySelector('ul[class="find--images-block"]'),i=[],w=n=>{if(!(n.length<=0))return n.map(({tags:s,likes:c,views:r,comments:e,downloads:t,webformatURL:o})=>`<li class="find--images-item">
        <img src="${o}" alt="${s}" />
        <ul class="stats-block">
          <li>
            <span>Likes</span>
            <span>${c}</span>
          </li>
          <li>
            <span>Views</span>
            <span>${r}</span>
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
      </li>
      `).join("")},$=async n=>{n.preventDefault();const s=n.target,c=y.value.trim();try{const r=await h(c);console.log(r.hits),r.hits.forEach(e=>{const{tags:t,likes:o,views:a,comments:l,downloads:u,webformatURL:m,largeImageURL:p}=e,d={tags:t,likes:o,views:a,comments:l,downloads:u,webformatURL:m,largeImageURL:p};i.push(d)})}catch(r){console.error("Error fetching images:",r)}L.insertAdjacentHTML("beforeend",w(i)),console.log(i),s.reset()};b.addEventListener("submit",$);
//# sourceMappingURL=commonHelpers.js.map
