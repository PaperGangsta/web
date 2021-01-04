function interval(callback,delay=100){
    let id = setInterval(()=>callback(id),delay);
}

const div = document.querySelector("div");

interval(timeId => {
    const left = parseInt(window.getComputedStyle(div).left);
    div.style.left = left + 10 + "px";
    if (left > 200) {
      clearInterval(timeId);
      interval(timeId => {
        const width = parseInt(window.getComputedStyle(div).width);
        div.style.width = width - 1 + "px";
        if (width <= 0) clearInterval(timeId);
      }, 10);
    }
  }, 100);