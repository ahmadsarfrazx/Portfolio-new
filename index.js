const hamburger = document.querySelector('.hamburger');

const navMenu = document.querySelector('.nav-card');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');

  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const projects = [
  {
    id: 1,
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s ',
    image: 'media/work-img1.png',
    imageDesktop: '../images/Snapshoot Portfolio(6).png',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://github.com/ahmadsarfrazx/Portfolio-new',
    source: 'https://github.com/ahmadsarfrazx/Portfolio-new',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the1500, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: 'media/work-img2.png',
    technologies: ['html', 'css', 'JavaScript', 'github'],
    link: 'https://github.com/ahmadsarfrazx/Portfolio-new',
    source: 'https://github.com/ahmadsarfrazx/Portfolio-new',
  },
  {
    id: 3,
    name: 'Facebook 360',
    description:
      ' Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. scrambled it 1960s with the relea',
    image: 'media/work-img3.png',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://github.com/ahmadsarfrazx/Portfolio-new',
    source: 'https://github.com/ahmadsarfrazx/Portfolio-new',
  },
  {
    id: 4,
    name: 'Uber Navigation',
    description:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley.',
    image: 'media/work-img4.png',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://github.com/ahmadsarfrazx/Portfolio-new',
    source: 'https://github.com/ahmadsarfrazx/Portfolio-new',
  },
];

const onModalOpen = async (id) => {
  const getData = await projects.find((project) => project.id === id);

  const modal = document.querySelector('.modal-container');
  modal.style.display = 'block';
  document.getElementById('modal-title').innerHTML = getData.name;
  document.getElementById('modal-desc').innerHTML = getData.description;
  document.getElementById('modal-img').src = getData.image;
  document.getElementById('modal-seelive').src = getData.link;
  document.getElementById('modal-seesource').src = getData.source;

  document.getElementById('group-list').innerHTML = getData.technologies
    .map((tech) => `<li class="stack">${tech}</li>`)
    .join('');
};

const p = onModalOpen;

const onModalClose = () => {
  const modal = document.querySelector('.modal-container');
  modal.style.display = 'none';
};
onModalClose(p);

window.addEventListener('DOMContentLoaded', () => {
  const displayCards = projects.map(
    (project) => `
      <div id=${project.id} >
        <div class="work-info1">
            <div class="image-container">
              <img
                src=${project.image}
                alt="multi-post work content2"
                class="pic-temp1"
              />
            </div>
            <div class="content1">
              <h3 class="tonic">
                ${project.name}
              </h3>
              <h4>
                CANOPY <span class="dot tag"> Back End dev </span>
                <span class="dot tag">2015</span>
              </h4>
              <p class="proj-info">
              ${project.description}
              </p>
              <ul class="stack-icon">
              ${project.technologies
    .map((tech) => `<li class="stack">${tech}</li>`)
    .join('')}
              </ul>
              <button id=${project.id} type="button" onclick="onModalOpen(${
  project.id
})" class="btn" id="btn-4">See Project</button>
            </div>
          </div> 
      </div>`,
  );
  document.getElementById('cards').innerHTML = displayCards.join('');
});

// Script to validate form
const form = document.querySelector('form');
const emailAdrdress = document.getElementById('email');
const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
const msgError = document.querySelector('#message-error');
const msgSuccess = document.querySelector('#message-success');

form.addEventListener('submit', (e) => {
  if (!emailAdrdress.value.match(emailPattern)) {
    e.preventDefault();
    msgError.classList.toggle('error');

    setTimeout(() => { msgError.classList.toggle('error'); }, 7000);
  } else {
    msgSuccess.classList.toggle('success');

    setTimeout(() => { form.submit(); }, 6000);
  }
});