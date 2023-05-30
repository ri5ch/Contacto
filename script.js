window.onload = function() {
    var imgElement = document.querySelector('#miImagen');
    imgElement.classList.add('bounce-in-top');
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    var firstParagraph = document.getElementById('first-paragraph');
    var secondParagraph = document.getElementById('second-paragraph');
  
    firstParagraph.classList.add('text-blur-out');
    secondParagraph.classList.add('text-blur-out');
  });
  
