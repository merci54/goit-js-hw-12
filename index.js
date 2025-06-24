import{a as w,S,i as s}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const o={form:document.querySelector(".form"),input:document.querySelector(".form input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),paginationLoader:document.querySelector(".pagination-loader"),loadMore:document.querySelector(".load-more")},q="50766581-35cab7d84125eeb0dc75e938a",P="https://pixabay.com/api/",h=15;async function p(i,t=1){const{data:a}=await w.get(P,{params:{key:q,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:h}});return a}let f=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(i){const t=i.map(({webformatURL:a,largeImageURL:d,tags:e,likes:r,views:c,comments:b,downloads:M})=>`
        <li class="img-card">
            <div class="img-block">
                <a class="big-image" href="${d}">
                    <img class="image" src="${a}" alt="${e}" />
                </a>
            </div>

            <div class="info-block">
                <div>
                    <h2>Likes</h2>
                    <p>${r}</p>
                </div>
                <div>
                    <h2>Views</h2>
                    <p>${c}</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>${b}</p>
                </div>
                <div>
                    <h2>Downloads</h2>
                    <p>${M}</p>
                </div>
            </div>
        </li>
        `).join("");o.gallery.insertAdjacentHTML("beforeend",t)}function L(){f&&f.refresh()}function g(){o.gallery.innerHTML=""}function $(){o.loader.classList.remove("hidden")}function m(){o.loader.classList.add("hidden")}function v(){o.loadMore.classList.remove("load-more-hidden")}function n(){o.loadMore.classList.add("load-more-hidden")}function R(){o.paginationLoader.classList.remove("hidden")}function B(){o.paginationLoader.classList.add("hidden")}let l=1,u="";o.form.addEventListener("submit",O);o.loadMore.addEventListener("click",x);async function O(i){if(i.preventDefault(),g(),n(),$(),u=o.input.value.trim(),l=1,!u)return g(),n(),m(),s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});try{const t=await p(u,l),a=Math.ceil(t.totalHits/h);if(y(t.hits),L(),t.hits.length===0)return n(),s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});l>=a?(n(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v()}catch(t){s.error({message:`${t.message}`,position:"topRight"})}finally{m()}}async function x(){l++,n(),R(),o.loadMore.disabled=!0;try{const i=await p(u,l),t=Math.ceil(i.totalHits/h);y(i.hits),L(),B(),v(),l>=t&&(n(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const a=o.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:a*2,left:0,behavior:"smooth"})}catch(i){s.error({message:`${i.message}`,position:"topRight"})}finally{o.loadMore.disabled=!1}}
//# sourceMappingURL=index.js.map
