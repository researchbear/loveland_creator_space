var header = document.querySelector('.navbar');
var content = document.querySelector('#contentWrapper');
var origOffsetY = header.offsetTop;

function onScroll(e) {
    if(window.scrollY >= origOffsetY - 55)
    {
      header.classList.add('sticky_navbar');
      content.id="sticky_contentWrapper";
    }
    else
    {
      header.classList.remove('sticky_navbar');
      content.id="contentWrapper";
    }
}

document.addEventListener('scroll', onScroll);

