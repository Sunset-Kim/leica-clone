const mainBanner = document.querySelector('.main-banner')
const mainBannerImg = mainBanner.querySelector('img');
const mainText = document.querySelector('.main-text')



scrollEvent = ()=>{
    const height = mainBanner.getBoundingClientRect().height;
    if(window.innerWidth > 1024) {
        if(window.scrollY > 120) {  
            mainBanner.style.position = 'fixed';
            mainBanner.style.top = 0;
            mainBanner.style.zIndex = -1;
            mainBannerImg.style.transform = `scale(${1 + scrollY*0.00005})`
            mainText.style.marginTop = `calc(${height}px + 5rem)`;
    
        } else {
            mainBannerImg.style.transform = `scale(1)`;
            mainBanner.style.position = 'static'
            mainText.style.marginTop = `5rem`;

        }
    } else {
        if(window.scrollY > 120) {
            mainBanner.style.position = 'fixed';
            mainBanner.style.top = '80px';
            mainBanner.style.zIndex = -1;
            mainBannerImg.style.transform = `scale(${1 + scrollY*0.00005})`
    
        } else {
            mainBanner.style.position = 'fixed';
            mainBanner.style.top = '80px';
            mainBanner.style.zIndex = -1;
            mainText.style.marginTop = `calc(${height}px + 80px + 5rem)`;
            mainBannerImg.style.transform = `scale(1)`;
        }
    }
}
window.addEventListener('scroll', scrollEvent);
window.addEventListener('load', scrollEvent);
window.addEventListener('resize', scrollEvent);
