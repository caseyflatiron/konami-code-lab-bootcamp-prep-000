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
  // your code here
  
    document.body.addEventListener('keydown', (event) => {
      console.log('keydown')
      function onKeyDownHandler(e) {
      const key = key.e;
      
      if (key === codes[index]) {
        index ++;
        console.log(key)
        
        if (index === codes.length) {
          console.log('yay');
          alert('yay');
          index = 0;
        }
      } else {
        index = 0;
      }
    }
    })
}
