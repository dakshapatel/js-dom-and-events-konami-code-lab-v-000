const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  document.body.addEventListener('keydown', function(e){

  
  // This is the function that would be invoked by the event listener.
  
    const key = parseInt(e.detail || e.key);
   
    if (code[index] === key) {
      index++;
   
      if (index === code.length) {
        alert("Hurray!");
   
        index = 0;
      }
    
    }
  });
}

init();