// logo first letter bold
let logoP = document.querySelector('.logo p');
let logoText = logoP.textContent;

let boldFirstLetter = logoText
  .split(' ')
  .map(
    word =>
      `<span style="font-weight:bold;font-size:18px;">${word.charAt(
        0
      )}</span>${word.slice(1)}`
  )
  .join(' ');

logoP.innerHTML = boldFirstLetter;

// button link add
let linkedinBtn = document.querySelectorAll('.linkedin_btn');
linkedinBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/simiat-agbabiaka', '_blank');
  });
});
let instagram_btn = document.querySelectorAll('.instagram_btn');
instagram_btn.forEach(btn => {
  btn.addEventListener('click', () => {
    window.open('https://www.instagram.com', '_blank');
  });
});

let myWorkBtn = document.getElementById('myWork');
myWorkBtn.addEventListener('click', () => {
  document.querySelector('#myWork').scrollIntoView({ behavior: 'smooth' });
});

let facebook = document.querySelector('.facebook');
facebook.onclick = () => {
  window.open('https://www.facebook.com', '_blank');
};
let twitter = document.querySelector('.twitter');
twitter.onclick = () => {
  window.open('https://www.twitter.com', '_blank');
};
let email_me = document.querySelector('.email_me');
email_me.onclick = () => {
  let email = 'agbabiakasimiat@gmail.com';
  let url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  window.open(url, '_blank');
};

// mail JS connection
const form = document.getElementById('contactForm');
const statused = document.getElementById('statused');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const templateParams = {
    user_name: document.getElementById('name').value,
    user_email: document.getElementById('email').value,
    user_message: document.getElementById('message').value,
  };

  emailjs.send('service_3yqst59', 'template_pqu2nvn', templateParams).then(
    function (response) {
      console.log('SUCCESS!', response.status, response.text);
      statused.innerHTML =
        'Message sent successfully <i class="fa-solid fa-circle-check"></i>';
      form.reset();
    },
    function (error) {
      console.log('FAILED...', error);
      statused.innerHTML =
        'Failed to send message <i class="fa-solid fa-circle-xmark"></i>';
    }
  );
});

// mobile menu bar function setup
const menu = document.getElementById('menu');
document.getElementById('show').onclick = () => {
  menu.style.right = '0px';
};
document.getElementById('hide').onclick = () => {
  menu.style.right = '-250px';
};

// body click to close menu (outside of the ul or menu)
document.addEventListener('click', function (e) {
  const isClickInsideMenu = menu.contains(e.target);
  const isShowButton = e.target.id === 'show';

  if (!isClickInsideMenu && !isShowButton) {
    menu.style.right = '-250px';
  }
});

// Here I work for the testimonial secftion
const left_testimonial = document.getElementById('left_testimonial');
const right_testimonial = document.getElementById('right_testimonial');
const names = document.getElementById('h3');
const Text = document.getElementById('text');
const client_imagesss = document.getElementById('client_imagesss');
const testimonial = [
  "Simiat Agbabiaka isn't just a ghostwriting tutor, she's the kind of mentor who makes learning feel effortless. Her patience and kindness create a safe space to grow, while her razor-sharp expertise covers every detail of the craft.What truly stands out is her dedication, she doesn't just teach ghostwriting; she loves it. That passion is contagious, and her commitment to her students'success is unmatched. If you want to learn from someone who genuinely cares about your progress, look no further!",

  "Deborah Kayode effective communication and conversational skills are truly exceptional. They have a gift for creating a safe and supportive space for exploration and discovery. I've seen firsthand how her guidance can help individuals gain clarity and confidence in navigating transitions. I wholeheartedly recommend working with them.",

  "I highly recommend Deborah Kayode as a Clarity Coach. At a point when I was confused about Telenursing, her guidance helped me gain clarity and direction. She listens, simplifies complex issues, and genuinely supports growth. I'm grateful for her help and confidently recommend her to anyone needing clarity.",

  'Working with Simiat has been one of the best decisions I made this year. She is thoughtful, detailed, and knows exactly how to position a brand with clarity and confidence. I watched my presence shift in a way that felt both intentional and authentic and that speaks volumes about her expertise. When it comes to storytelling, LinkedIn optimization, and LinkedIn management, Simiat is the lady for the job. She will not only elevate your voice but also ensure it is heard by the right audience.',
];
const testimonial_name = [
  '-- PATIENCE UDENWA',
  '-- SUDIPTO DAS',
  '-- Happiness J. Onanuga',
  '-- Mariam Busari',
];
const image_src = [
  'image/client2.png',
  'image/client4.jpg',
  'image/client3.png',
  'image/client1.png',
];
let currentIndex = 0;
function updateTestimonial(index) {
  names.innerText = testimonial_name[index];
  Text.innerText = testimonial[index];
  client_imagesss.src = image_src[index]
}

right_testimonial.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonial.length;
  updateTestimonial(currentIndex);
});

left_testimonial.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonial.length) % testimonial.length;
  updateTestimonial(currentIndex);
});



// ------------------------------- scroll animation -----------------------
document.addEventListener('DOMContentLoaded', () => {
  // Select all boxes for animation
  const boxes = document.querySelectorAll('.box');
  const boxes1 = document.querySelectorAll('.box1');
  const boxes2 = document.querySelectorAll('.box2');

  function animationOnScroll() {
    const triggerPoint1 = window.innerHeight * 0.90;
    const triggerPoint2 = window.innerHeight * 1.5;
    const triggerPoint3 = window.innerHeight * 1;

    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerPoint1) {
        box.classList.add('visible');
      } else {
        box.classList.remove('visible');
      }
    });

    boxes1.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerPoint2) {
        box.classList.add('visible');
      } else {
        box.classList.remove('visible');
      }
    });

    boxes2.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerPoint3) {
        box.classList.add('visible');
      } else {
        box.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', animationOnScroll);
  animationOnScroll(); // Trigger on load
});



//// feedback right section image hover effect
const images = document.querySelectorAll('.right_feedback img');
const firstImage = images[0];
// 1st image hover effect
images[1].addEventListener('mouseenter', () => {
  firstImage.style.height = '185px';
});
images[1].addEventListener('mouseleave', () => {
  firstImage.style.height = '200px';
});
// 3rd image hover effect
images[2].addEventListener('mouseenter', () => {
  firstImage.style.height = '185px';
});
images[2].addEventListener('mouseleave', () => {
  firstImage.style.height = '200px';
});
