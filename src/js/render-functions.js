

function createLi(images) {
    return Array.from(images).map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
     <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img 
                    class="gallery-image" 
                    src="${webformatURL}" 
                    alt="${tags}" 
                />
            </a>
             <ul class="info">
        <li class="info-likes">
        <p class = "info-h2">
        Likes
        </p>
        <p class="info-p">
        ${likes}
        </p>
        
        
        </li>
        <li class="info-Views">
        <p class = "info-h2">
        Views
        </p>
        <p class="info-p">
          ${views}
        </p>
        </li>
        <li class="info-comments">
        <p class = "info-h2">
        Comments
        </p>
        <p class="info-p">
          ${comments}
        </p>
        </li>
        <li class="info-downloads">
         <p class = "info-h2">
        Downloads
        </p>
        <p class="info-p">
          ${downloads}
        </p>
       </li>
        </ul>
        </li>    
    `).join("");
}

export { createLi };
