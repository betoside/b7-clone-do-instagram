let storiesEl = document.querySelector('.stories');
let scrollEl = document.querySelector('.stories .scroll');
let storyLeftEl = document.querySelector('.story-left');
let storyRightEl = document.querySelector('.story-right');

storyLeftEl.addEventListener('click', () => {
    storiesEl.scrollTo({
        left: storiesEl.scrollLeft - 150,
        behavior: 'smooth'
    });
    // console.log(
    //     storiesEl.scrollLeft, 
    //     'width: ' + storiesEl.clientWidth,
    //     'scroll: ' + scrollEl.scrollBy()
    // );
});

storyRightEl.addEventListener('click', () => {

    storiesEl.scrollTo({
        left: storiesEl.scrollLeft + 150,
        behavior: 'smooth'
    });
    // console.log(
    //     storiesEl.scrollLeft, 
    //     'width: '+ storiesEl.clientWidth,
    //     'scroll: ' + scrollEl.clientLeft
    // );
});

checarScroll = (el) => {
    if(el.scrollLeft = 0){
        console.log(el.style.display);
    }
}