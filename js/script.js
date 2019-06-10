// tabs
function opentab(evt, tabNumber) {
  const tabcontent = document.querySelectorAll('.tabcontent');
  const tablink = document.getElementById(tabNumber);

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove('showtab');
  }

  const tablinks = document.querySelectorAll('.tablinks');
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  tablink.className += ' showtab';
  evt.currentTarget.className += ' active';
}

//goods slider

const card = document.querySelectorAll('.slider-item');
const quantity = card.length;
const resolution = window.matchMedia('(max-width: 500px)');

let counter = 0;

function showItems() {
  const resolution = window.matchMedia('(max-width: 500px)');
  if (resolution.matches) {
    for (let i = 1; i < card.length; i++) {
      card[i].classList.add('hidden');
    }
  }
}

showItems();

function left() {
  if (!resolution.matches) {
    if (counter > -quantity / 2) {
      counter -= 1;
      for (let i = 0; i < card.length; i++) {
        card[i].classList.add('hidden');
      }
      for (let i = -counter; i < -counter + quantity / 2; i++) {
        card[i].classList.remove('hidden');
      }
      document.querySelector('.right').style.cursor = 'pointer';
    } else {
      document.querySelector('.left').style.cursor = 'not-allowed';
    }
  } else {
    if (counter > -quantity + 1) {
      counter -= 1;
      for (let i = 0; i < card.length; i++) {
        card[i].classList.add('hidden');
      }
      card[-counter].classList.remove('hidden');
      document.querySelector('.right').style.cursor = 'pointer';
    } else {
      document.querySelector('.left').style.cursor = 'not-allowed';
    }
  }
}

function right() {
  if (!resolution.matches) {
    if (counter < 0) {
      counter += 1;
      for (let i = 0; i < card.length; i++) {
        card[i].classList.add('hidden');
      }
      for (let i = -counter; i < -counter + quantity / 2; i++) {
        card[i].classList.remove('hidden');
      }
      document.querySelector('.left').style.cursor = 'pointer';
    } else {
      document.querySelector('.right').style.cursor = 'not-allowed';
    }
  } else {
    if (counter < 0) {
      counter += 1;
      for (let i = 0; i < card.length; i++) {
        card[i].classList.add('hidden');
      }
      card[-counter].classList.remove('hidden');
      document.querySelector('.left').style.cursor = 'pointer';
    } else {
      document.querySelector('.right').style.cursor = 'not-allowed';
    }
  }
}

//accordion
const acc = document.querySelectorAll('.accordion');

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active-acc');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

//gotop button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
