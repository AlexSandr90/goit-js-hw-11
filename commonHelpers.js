import{i as m}from"./assets/vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",g="43151566-329d1ba35c4912218880d8d24",h=(s="")=>s.length===0?null:fetch(`${p}?key=${g}&q=${encodeURIComponent(s)}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>(console.log(t),null)),y=s=>s.length<=0?(m.error({position:"topRight",messageColor:"#ffffff",timeout:5e3,radius:15,backgroundColor:"#FF2E2E",message:"Sorry, there are no images matching your search query. Please, try again again!"}),""):s.map(({tags:t,likes:n,views:o,comments:e,downloads:r,webformatURL:i})=>`<li class="find--images-item">
          <img src="${i}" alt="${t}" />
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
        </li>
        `).join(""),b=(s,t)=>{s.length!==0&&s.forEach(n=>{const{tags:o,likes:e,views:r,comments:i,downloads:l,webformatURL:u,largeImageURL:f}=n;console.log({imageDataItem:n});const d={tags:o,likes:e,views:r,comments:i,downloads:l,webformatURL:u,largeImageURL:f};t.push(d)})},L=document.querySelector('input[class="search-input"]'),w=document.querySelector('form[class="search"]'),c=document.querySelector('ul[class="find--images-block"]');let a=[];const E=async s=>{s.preventDefault();const t=s.target,n=L.value.trim();try{const o=await h(n);o!==null&&(a=[],c.textContent="",b(o.hits,a),c.insertAdjacentHTML("beforeend",y(a)))}catch(o){console.error("Error fetching images:",o)}t.reset()};w.addEventListener("submit",E);
//# sourceMappingURL=commonHelpers.js.map
