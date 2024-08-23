function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  function playVideo() {
    const video = document.getElementById('my-video');
    video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  }
  
  function pauseVideo() {
    const video = document.getElementById('my-video');
    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }
  
  function stopVideo() {
    const video = document.getElementById('my-video');
    video.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
  }
  
  function seekTo(seconds) {
    const video = document.getElementById('my-video');
    video.contentWindow.postMessage(`{"event":"command","func":"seekTo","args":[${seconds}, true]}`, '*');
  }
  