const pixelsw = document.getElementById('pixels-text');

const getWidth = ()=> pixelsw.innerText = `${document.documentElement.clientWidth}px`;
getWidth();
window.addEventListener('resize', getWidth);