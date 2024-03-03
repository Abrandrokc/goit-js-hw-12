import{a as L,i as l,S as h}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function g(i){return Array.from(i).map(({webformatURL:o,largeImageURL:r,tags:a,likes:e,views:t,comments:s,downloads:w})=>`
     <li class="gallery-item">
            <a class="gallery-link" href="${r}">
                <img 
                    class="gallery-image" 
                    src="${o}" 
                    alt="${a}" 
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
          ${t}
        </p>
        </li>
        <li class="info-comments">
        <p class = "info-h2">
        Comments
        </p>
        <p class="info-p">
          ${s}
        </p>
        </li>
        <li class="info-downloads">
         <p class = "info-h2">
        Downloads
        </p>
        <p class="info-p">
          ${w}
        </p>
       </li>
        </ul>
        </li>    
    `).join("")}let b=[],v;async function m(i){const r=document.querySelector(".text").value,a="https://pixabay.com/api/",e="42659935-3ef7103821fe0025c24926046";try{const s=(await L.get(a,{params:{key:e,q:r,per_page:15,orientation:"horizontal",safesearch:!0,page:i}})).data;return s.hits.length===0?l.show({message:"Sorry, there are no images matching your search query. Please try again ",color:"red",position:"topRight"}):(b=s.hits,v=s.totalHits),s}catch(t){throw console.error("Error:",t),t}}const c=document.querySelector(".gallery"),P=document.querySelector(".form"),n=document.querySelector(".loader"),f=document.querySelector(".load-more");let d=1,y=1/0,u="",p;function q(){return document.querySelector(".gallery a").getBoundingClientRect().height}P.addEventListener("submit",async function(i){if(i.preventDefault(),n.classList.remove("is-hiden"),c.innerHTML="",u=document.querySelector(".text").value.trim(),u===""){l.show({message:"Please, write your request ",color:"red",position:"topRight"}),n.classList.add("is-hiden");return}try{const r=await m(u,1);d=1,c.innerHTML="",c.insertAdjacentHTML("afterbegin",g(r.hits)),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),y=Math.ceil(r.totalHits/15)}catch(r){console.error("Error:",r),l.show({message:"An error occurred while fetching data. Please try again.",color:"red",position:"topRight"})}finally{n.classList.add("is-hiden")}f.classList.remove("is-hiden")});f.addEventListener("click",async i=>{if(d>=y){f.style.display="none",l.show({message:"No more images to load",color:"blue",position:"topRight"});return}n.classList.remove("is-hiden");try{d++;const o=await m(d);console.log(o),c.insertAdjacentHTML("beforeend",g(o.hits)),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),p||(p=q()),window.scrollBy({top:p*2,behavior:"smooth"})}catch(o){console.error("Error:",o),l.show({message:"An error occurred while fetching data. Please try again.",color:"red",position:"topRight"})}finally{n.classList.add("is-hiden")}});
//# sourceMappingURL=commonHelpers.js.map
