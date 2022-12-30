window.onscroll = function () {
  var distance = 250;
  var link = document.getElementById('scroll');
  if (window.pageYOffset > distance) {
    link.style.display = 'block';
  } else {
    link.style.display = 'none';
  }
};

