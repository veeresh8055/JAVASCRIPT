let inner = document.querySelector('.inner')
let download = document.querySelector(".download");
let progress = document.querySelector(".progressDisplay");


let count = 0;
const progressbar = setInterval(() => {
    count++;
    inner.style.width = `${count}%`;
    progress.textContent = `${count}%`;

    
    if (count === 100) {
        clearInterval(progressbar);
        download.textContent = "Downloaded"
        download.style.color = '#39b620'
    }
}, 50); 