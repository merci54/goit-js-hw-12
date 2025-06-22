import{S as f,a as g,i as c}from"./assets/vendor-Dy2ZTtfi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const o={form:document.querySelector(".form"),input:document.querySelector(".form input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-more")};let d;function h(i){return u(),setTimeout(()=>{d&&d.refresh(),d=new f(".gallery a",{captionsData:"alt",captionDelay:250})},100),i.map(({webformatURL:r,largeImageURL:a,tags:n,likes:e,views:t,comments:s,downloads:p})=>`
        <li class="img-card">
            <div class="img-block">
                <a class="big-image" href="${a}">
                    <img class="image" src="${r}" alt="${n}" />
                </a>
            </div>

            <div class="info-block">
                <div>
                    <h2>Likes</h2>
                    <p>${e}</p>
                </div>
                <div>
                    <h2>Views</h2>
                    <p>${t}</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>${s}</p>
                </div>
                <div>
                    <h2>Downloads</h2>
                    <p>${p}</p>
                </div>
            </div>
        </li>
        `).join("")}function y(){o.gallery.innerHTML=""}function v(){o.loader.classList.remove("hidden")}function u(){o.loader.classList.add("hidden")}const L="50766581-35cab7d84125eeb0dc75e938a",b="https://pixabay.com/api/",m=15;function S(i,r=1){return v(),g(b,{params:{key:L,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:m}})}let l=1;o.form.addEventListener("submit",q);function q(i){if(i.preventDefault(),y(),l=34,!o.input.value.trim()){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(o.input.value.trim(),l).then(({data:r})=>{o.gallery.innerHTML=h(r.hits);const a=Math.ceil(r.total/m);l<a&&(o.loadMore.classList.replace("load-more-hidden","load-more"),l++),console.log(a),console.log(r),r.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(r=>{u(),c.error({message:`${r.message}`,position:"topRight"})})}
//# sourceMappingURL=index.js.map
