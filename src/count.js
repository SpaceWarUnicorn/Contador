(() => {
  'use strict';

  const cont = document.querySelector('.number');
  const arrows = document.querySelectorAll('.carrow');

  let count = (whichArrow) => {

    let contN = parseInt(cont.textContent);

    let choice = () => {
      if (whichArrow == 'right') {
        return contN += 1;
      } else {

        return contN -= 1;
      }
    };

    return choice();
  };

  for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', (e) => {
      cont.textContent = count(e.target.id);
    });
  }

})();
