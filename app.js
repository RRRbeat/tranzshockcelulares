if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

function goMenu() {
  document.body.style.transition="opacity 0.6s";
  document.body.style.opacity=0;
  setTimeout(()=>{ window.location.href="menu.html"; },600);
}

document.addEventListener("visibilitychange",()=>{
  if(document.hidden){ document.body.classList.add("paused"); }
  else { document.body.classList.remove("paused"); }
});
