import{a as b,i as l,S as f}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function g(s){return Array.from(s).map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:r,comments:a,downloads:L})=>`
     <li class="gallery-item">
            <a class="gallery-link" href="${o}">
                <img 
                    class="gallery-image" 
                    src="${t}" 
                    alt="${i}" 
                />
            </a>
             <ul class="info">
        <li class="info-likes">
        <p class = "info-h2">
        Likes
        </p>
        <p class="info-p">
        ${e}
        </p>
        
        
        </li>
        <li class="info-Views">
        <p class = "info-h2">
        Views
        </p>
        <p class="info-p">
          ${r}
        </p>
        </li>
        <li class="info-comments">
        <p class = "info-h2">
        Comments
        </p>
        <p class="info-p">
          ${a}
        </p>
        </li>
        <li class="info-downloads">
         <p class = "info-h2">
        Downloads
        </p>
        <p class="info-p">
          ${L}
        </p>
       </li>
        </ul>
        </li>    
    `).join("")}let p,v=[],P;const m=()=>{const s=document.querySelector(".text");return p=s.value.trim(),s.value="",p};async function y(s){const t="https://pixabay.com/api/",o="42659935-3ef7103821fe0025c24926046";try{const e=(await b.get(t,{params:{key:o,q:p,per_page:15,orientation:"horizontal",safesearch:!0,page:s}})).data;return e.hits.length===0?l.show({message:"Sorry, there are no images matching your search query. Please try again ",color:"red",position:"topRight"}):(v=e.hits,P=e.totalHits),e}catch(i){throw console.error("Error:",i),i}}function q(){return document.querySelector(".gallery-item").getBoundingClientRect().height}console.log(m);const c=document.querySelector(".gallery"),R=document.querySelector(".form"),n=document.querySelector(".loader"),u=document.querySelector(".load-more");let d=1,w=1/0,h;R.addEventListener("submit",async function(s){if(s.preventDefault(),n.classList.remove("is-hiden"),c.innerHTML="",m()===""){l.show({message:"Please, write your request ",color:"red",position:"topRight"}),n.classList.add("is-hiden");return}try{let e=function(){return document.querySelector(".gallery-item").getBoundingClientRect().height};const o=await y(1);d=1,c.innerHTML="",c.insertAdjacentHTML("afterbegin",g(o.hits)),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),w=Math.ceil(o.totalHits/15),o.hits.length===0?u.classList.add("is-hiden"):u.classList.remove("is-hiden")}catch(o){console.error("Error:",o),l.show({message:"An error occurred while fetching data. Please try again.",color:"red",position:"topRight"})}finally{n.classList.add("is-hiden")}});u.addEventListener("click",async s=>{if(d>=w){u.style.display="none",l.show({message:"No more images to load",color:"blue",position:"topRight"});return}n.classList.remove("is-hiden");try{d++;const t=await y(d);console.log(t),c.insertAdjacentHTML("beforeend",g(t.hits)),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),h||(h=q()),window.scrollBy({top:h*2,behavior:"smooth"})}catch(t){console.error("Error:",t),l.show({message:"An error occurred while fetching data. Please try again.",color:"red",position:"topRight"})}finally{n.classList.add("is-hiden")}});
//# sourceMappingURL=commonHelpers.js.map
