const mainBanner = document.querySelector('.main-banner')
const mainBannerImg = mainBanner.querySelector('img');
const mainText = document.querySelector('.main-text')
window.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
    if(window.innerWidth > 1024) {
        if(window.scrollY > 120) {  
            mainBanner.style.position = 'fixed';
            mainBanner.style.top = 0;
            mainBanner.style.zIndex = -1;
            mainBannerImg.style.transform = `scale(${1 + scrollY*0.00005})`
            mainText.style.marginTop = 'calc(524px + 5rem)';
    
        } else {
            mainBannerImg.style.transform = `scale(1)`;
            mainBanner.style.position = 'static'
            mainText.style.marginTop = '5rem';

        }
    } else {
        if(window.scrollY > 120) {  
            mainBannerImg.style.transform = `scale(${1 + scrollY*0.00005})`
    
        } else {
            mainBannerImg.style.transform = `scale(1)`;
        }
    }
})