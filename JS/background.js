function createFallingObjects() {
  let fallingObject = document.createElement("div");
  fallingObject.setAttribute("class", "fallingObject");
  document.body.appendChild(fallingObject);

  fallingObject.style.left = Math.random() * + innerWidth + 'px'

  let size = Math.random() * 100 + 50
  fallingObject.style.width = size + 'px'
  fallingObject.style.height = size + 'px'

  let duration = Math.random() * 5 + 5
  fallingObject.style.animationDuration = duration + 's'

  let rotation = Math.random * 360

  setTimeout(() => {
    document.body.removeChild(fallingObject);
}, 10000);
}



setInterval(() => {
    createFallingObjects()
}, 1000);