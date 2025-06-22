import{a as v,S as b,i as s}from"./assets/vendor-Dy2ZTtfi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const t={form:document.querySelector(".form"),input:document.querySelector(".form input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),paginationLoader:document.querySelector(".pagination-loader"),loadMore:document.querySelector(".load-more")},M="50766581-35cab7d84125eeb0dc75e938a",w="https://pixabay.com/api/",m=15;async function f(i,o=1){const{data:a}=await v.get(w,{params:{key:M,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:m}});return a}let h;function g(i){return p(),setTimeout(()=>{h&&h.refresh(),h=new b(".gallery a",{captionsData:"alt",captionDelay:250})},10),i.map(({webformatURL:o,largeImageURL:a,tags:c,likes:e,views:r,comments:n,downloads:L})=>`
        <li class="img-card">
            <div class="img-block">
                <a class="big-image" href="${a}">
                    <img class="image" src="${o}" alt="${c}" />
                </a>
            </div>

            <div class="info-block">
                <div>
                    <h2>Likes</h2>
                    <p>${e}</p>
                </div>
                <div>
                    <h2>Views</h2>
                    <p>${r}</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>${n}</p>
                </div>
                <div>
                    <h2>Downloads</h2>
                    <p>${L}</p>
                </div>
            </div>
        </li>
        `).join("")}function S(){t.gallery.innerHTML=""}function q(){t.loader.classList.remove("hidden")}function p(){t.loader.classList.add("hidden")}function y(){t.loadMore.classList.remove("load-more-hidden")}function u(){t.loadMore.classList.add("load-more-hidden")}function P(){t.paginationLoader.classList.remove("hidden")}function $(){t.paginationLoader.classList.add("hidden")}let l=30,d="";t.form.addEventListener("submit",R);t.loadMore.addEventListener("click",B);async function R(i){if(i.preventDefault(),S(),u(),q(),d=t.input.value.trim(),l=1,!d)return s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});try{const o=await f(d,l);y(),t.gallery.innerHTML=g(o.hits),o.hits.length===0&&(u(),s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))}catch(o){s.error({message:`${o.message}`,position:"topRight"})}finally{p()}}async function B(){l++,u(),P(),t.loadMore.disabled=!0;try{const i=await f(d,l),o=Math.ceil(i.totalHits/m);t.gallery.insertAdjacentHTML("beforeend",g(i.hits)),$(),y(),l>=o&&(u(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const a=t.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:a*2,left:0,behavior:"smooth"})}catch(i){s.error({message:`${i.message}`,position:"topRight"})}finally{t.loadMore.disabled=!1}}
//# sourceMappingURL=index.js.map
