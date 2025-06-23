import{a as b,S as M,i as s}from"./assets/vendor-Dy2ZTtfi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const t={form:document.querySelector(".form"),input:document.querySelector(".form input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),paginationLoader:document.querySelector(".pagination-loader"),loadMore:document.querySelector(".load-more")},w="50766581-35cab7d84125eeb0dc75e938a",S="https://pixabay.com/api/",f=15;async function g(i,o=1){const{data:a}=await b.get(S,{params:{key:w,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:f}});return a}let h;function m(i){return y(),i.map(({webformatURL:o,largeImageURL:a,tags:c,likes:e,views:r,comments:n,downloads:v})=>`
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
                    <p>${v}</p>
                </div>
            </div>
        </li>
        `).join("")}function p(){h&&h.refresh(),h=new M(".gallery a",{captionsData:"alt",captionDelay:250})}function q(){t.gallery.innerHTML=""}function P(){t.loader.classList.remove("hidden")}function y(){t.loader.classList.add("hidden")}function L(){t.loadMore.classList.remove("load-more-hidden")}function u(){t.loadMore.classList.add("load-more-hidden")}function $(){t.paginationLoader.classList.remove("hidden")}function B(){t.paginationLoader.classList.add("hidden")}let l=30,d="";t.form.addEventListener("submit",R);t.loadMore.addEventListener("click",O);async function R(i){if(i.preventDefault(),q(),u(),P(),d=t.input.value.trim(),l=1,!d)return s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});try{const o=await g(d,l);L(),t.gallery.innerHTML=m(o.hits),p(),o.hits.length===0&&(u(),s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))}catch(o){y(),s.error({message:`${o.message}`,position:"topRight"})}}async function O(){l++,u(),$(),t.loadMore.disabled=!0;try{const i=await g(d,l),o=Math.ceil(i.totalHits/f);t.gallery.insertAdjacentHTML("beforeend",m(i.hits)),p(),B(),L(),l>=o&&(u(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const a=t.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:a*2,left:0,behavior:"smooth"})}catch(i){s.error({message:`${i.message}`,position:"topRight"})}finally{t.loadMore.disabled=!1}}
//# sourceMappingURL=index.js.map
