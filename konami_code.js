const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  
    document.body.addEventListener("keydown", (e) => {
      let key = e.key;
      
      if (key === codes[index]) {
        index ++;
        
        if (index === codes.length) {
          console.log('yay');
          alert("yay");
          index = 0;
        }
      } else {
        index = 0;
      }
    })
}
