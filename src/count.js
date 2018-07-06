(() => {
  'use strict';

  const cont = document.querySelector('.number');
  const arrows = document.querySelectorAll('.carrow');

  let count = (whichArrow) => {
      var contN = parseInt(cont.innerText);
      if(whichArrow == 'right'){
       contN++;
     }else{
       contN--;
     }
     return contN;
  };

  for (var i = 0; i< arrows.length; i++) {
    arrows[i].addEventListener('click', (e) => {
      cont.innerText = count( e.target.id);
    });
  }

})();
