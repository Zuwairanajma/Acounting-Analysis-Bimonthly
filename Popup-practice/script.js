let bars= document.querySelector('.fa-bars');
   let list= document.querySelector('.menu-list')
   let close = document.querySelector('.close');
   const navItems = document.querySelectorAll('.menu-list ul li');

   
const showMenu = () => {
    bars.style.display ="none";
    close.style.transform = "translateY(0)";
    // list.style.transition= "transform  20s";
    list.style.transform= "translateY(0)";

}
  const hideMenu = () => {
    // list.style.transition= "transform  .3s";
    list.style.transform = "translateX(-100%)";
    bars.style.display = "block";
    close.style.transform = "translateX(-25rem)";
}

  bars.addEventListener('click', showMenu);
  close.addEventListener("click", hideMenu);
  navItems.forEach((item) => {
    item.addEventListener('click', hideMenu)
 });
  
 // Generate recent div section //
 const recentDiv = document.createElement('div');
 recentDiv.classList.add('recent');
 
 const lineDiv = document.createElement('div');
 lineDiv.classList.add('recent-works');
 
 const heading = document.createElement('h2');
 heading.classList.add('my-work');
 heading.textContent = 'My Recent Works';
 
 const hr = document.createElement('hr');
 hr.classList.add('divider');
 
 lineDiv.appendChild(heading);
 lineDiv.appendChild(hr);
 
 const imgTxtDiv = document.createElement('div');
 imgTxtDiv.classList.add('multipost');
 
 const image = document.createElement('img');
 image.classList.add('placeholder')
 image.setAttribute('src', 'PImages/imgPlaceholder.png');
 image.setAttribute('alt', 'Placeholder Image');
 
 const multiDiv = document.createElement('div');
 multiDiv.classList.add('post');
 
 const multiHeading = document.createElement('h2');
 multiHeading.classList.add('multi');
 multiHeading.textContent = 'Multi-Post Stories';
 
 const multiPara = document.createElement('p');
 multiPara.classList.add('stories')
 multiPara.textContent = `A daily selection of privately personalized reads; no accounts or
                         sign-ups required. has been the industry's standard dummy text
                         ever since the 1500s, when an unknown printer took a standard
                         dummy text.`;
 
 const skillsDiv = document.createElement('div');
 skillsDiv.classList.add('buttonss1');
 
 const cssButton = document.createElement('button');
 cssButton.classList.add('css-stories');
 cssButton.setAttribute('type', 'button');
 cssButton.textContent = 'CSS';
 
 const htmlButton = document.createElement('button');
 htmlButton.classList.add('html-stories');
 htmlButton.setAttribute('type', 'button');
 htmlButton.textContent = 'HTML';
 
 const bootstrapButton = document.createElement('button');
 bootstrapButton.classList.add('boots-stories');
 bootstrapButton.setAttribute('type', 'button');
 bootstrapButton.textContent = 'Bootstrap';
 
 const rubyButton = document.createElement('button');
 rubyButton.classList.add('ruby-stories');
 rubyButton.setAttribute('type', 'button');
 rubyButton.textContent = 'Ruby';
 
 skillsDiv.appendChild(cssButton);
 skillsDiv.appendChild(htmlButton);
 skillsDiv.appendChild(bootstrapButton);
 skillsDiv.appendChild(rubyButton);
 
 const projectButton1 = document.createElement('button');
 projectButton1.setAttribute('id', 'projects-1');
 projectButton1.setAttribute('type', 'button');
 projectButton1.classList.add('seeproject');
 projectButton1.textContent = 'See project';
 
 multiDiv.appendChild(multiHeading);
 multiDiv.appendChild(multiPara);
 multiDiv.appendChild(skillsDiv);
 multiDiv.appendChild(projectButton1);
 
 imgTxtDiv.appendChild(image);
 imgTxtDiv.appendChild(multiDiv);
 
 recentDiv.appendChild(lineDiv);
 recentDiv.appendChild(imgTxtDiv);
 
 const resentWorks = document.querySelector('#recent-worksdone');
 resentWorks.appendChild(recentDiv);

// Generate Cards Section //
  // First card
const cardDiv = document.createElement('div');
cardDiv.classList.add('portfolio-cards');

const imgCards = document.createElement('div');
imgCards.classList.add('cardworks');
 const cardcontents = document.createElement('div');
 cardcontents.classList.add('card-items');


const h3 = document.createElement('h3');
h3.classList.add('card1');
h3.textContent = 'Profesional Art Printing Data';

const p = document.createElement('p');
p.classList.add('cardtext');
p.textContent = "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.";
cardcontents.appendChild(h3);
cardcontents.appendChild(p);
    const skills = ['HTML', 'Bootstrap', 'Ruby'];
    const ul = document.createElement('ul');
        ul.classList.add('card-button');
     skills.forEach((skill) => {
           const li = document.createElement('li');
  li.classList.add('btn-card');
     li.textContent = skill;
      ul.appendChild(li);
    });

    const cardButton = document.createElement('button');
    cardButton.setAttribute('type', 'button');
    cardButton.setAttribute('id', 'projects-2');
    cardButton.classList.add('project-detail');
    cardButton.textContent = 'See project';

    
    imgCards.appendChild(cardcontents);
    imgCards.appendChild(ul);
    imgCards.appendChild(cardButton);
    cardDiv.appendChild(imgCards);

// second card
    const cardDiv1 = document.createElement('div');
cardDiv1.classList.add('portfolio-cards');

const imgCards1 = document.createElement('div');
imgCards1.classList.add('cardworks1');
 const cardcontents1 = document.createElement('div');
 cardcontents1.classList.add('card-items');


const h3a = document.createElement('h3');
h3a.classList.add('card1');
h3a.textContent = 'Profesional Art Printing Data';

const pa = document.createElement('p');
pa.classList.add('cardtext');
pa.textContent = "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.";
cardcontents1.appendChild(h3a);
cardcontents1.appendChild(pa);
    const skills1 = ['HTML', 'Bootstrap', 'Ruby'];
    const ul1 = document.createElement('ul');
        ul1.classList.add('card-button');
     skills1.forEach((skill) => {
           const li1 = document.createElement('li');
  li1.classList.add('btn-card');
     li1.textContent = skill;
      ul1.appendChild(li1);
    });

    const cardButton1 = document.createElement('button');
    cardButton1.setAttribute('type', 'button');
    cardButton1.setAttribute('id', 'projects-3');
    cardButton1.classList.add('project-detail');
    cardButton1.textContent = 'See project';

    
    imgCards1.appendChild(cardcontents1);
    imgCards1.appendChild(ul1);
    imgCards1.appendChild(cardButton1);
    cardDiv1.appendChild(imgCards1);

    // Third card

    const cardDiv2 = document.createElement('div');
cardDiv2.classList.add('portfolio-cards');

const imgCards2 = document.createElement('div');
imgCards2.classList.add('cardworks2');
 const cardcontents2 = document.createElement('div');
 cardcontents2.classList.add('card-items');


const h3b = document.createElement('h3');
h3b.classList.add('card1');
h3b.textContent = 'Profesional Art Printing Data';

const pb = document.createElement('p');
pb.classList.add('cardtext');
pb.textContent = "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.";
cardcontents2.appendChild(h3b);
cardcontents2.appendChild(pb);
    const skills2 = ['HTML', 'Bootstrap', 'Ruby'];
    const ul2 = document.createElement('ul');
        ul2.classList.add('card-button');
     skills2.forEach((skill) => {
           const li2 = document.createElement('li');
  li2.classList.add('btn-card');
     li2.textContent = skill;
      ul2.appendChild(li2);
    });

    const cardButton2 = document.createElement('button');
    cardButton2.setAttribute('type', 'button');
    cardButton2.setAttribute('id', 'projects-4');
    cardButton2.classList.add('project-detail');
    cardButton2.textContent = 'See project';

    
    imgCards2.appendChild(cardcontents2);
    imgCards2.appendChild(ul2);
    imgCards2.appendChild(cardButton2);
    cardDiv2.appendChild(imgCards2);

// Fourth card

const cardDiv3 = document.createElement('div');
cardDiv3.classList.add('portfolio-cards');

const imgCards3 = document.createElement('div');
imgCards3.classList.add('cardworks3');
 const cardcontents3 = document.createElement('div');
 cardcontents3.classList.add('card-items');


const h3c = document.createElement('h3');
h3c.classList.add('card1');
h3c.textContent = 'Profesional Art Printing Data';

const pc = document.createElement('p');
pc.classList.add('cardtext');
pc.textContent = "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.";
cardcontents3.appendChild(h3c);
cardcontents3.appendChild(pc);
    const skills3 = ['HTML', 'Bootstrap', 'Ruby'];
    const ul3 = document.createElement('ul');
        ul3.classList.add('card-button');
     skills3.forEach((skill) => {
           const li3 = document.createElement('li');
  li3.classList.add('btn-card');
     li3.textContent = skill;
      ul3.appendChild(li3);
    });

    const cardButton3 = document.createElement('button');
    cardButton3.setAttribute('type', 'button');
    cardButton3.setAttribute('id', 'projects-5');
    cardButton3.classList.add('project-detail');
    cardButton3.textContent = 'See project';

    
    imgCards3.appendChild(cardcontents3);
    imgCards3.appendChild(ul3);
    imgCards3.appendChild(cardButton3);
    cardDiv3.appendChild(imgCards3);

    // Fifth Card
    const cardDiv4 = document.createElement('div');
cardDiv4.classList.add('portfolio-cards');

const imgCards4 = document.createElement('div');
imgCards4.classList.add('cardworks3');
 const cardcontents4 = document.createElement('div');
 cardcontents4.classList.add('card-items');


const h3d = document.createElement('h3');
h3d.classList.add('card1');
h3d.textContent = 'Profesional Art Printing Data';

const pd = document.createElement('p');
pd.classList.add('cardtext');
pd.textContent = "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.";
cardcontents4.appendChild(h3d);
cardcontents4.appendChild(pd);
    const skills4 = ['HTML', 'Bootstrap', 'Ruby'];
    const ul4 = document.createElement('ul');
        ul4.classList.add('card-button');
     skills4.forEach((skill) => {
           const li4 = document.createElement('li');
  li4.classList.add('btn-card');
     li4.textContent = skill;
      ul4.appendChild(li4);
    });

    const cardButton4 = document.createElement('button');
    cardButton4.setAttribute('type', 'button');
    cardButton4.setAttribute('id', 'projects-6');
    cardButton4.classList.add('project-detail');
    cardButton4.textContent = 'See project';

    
    imgCards4.appendChild(cardcontents4);
    imgCards4.appendChild(ul4);
    imgCards4.appendChild(cardButton4);
    cardDiv4.appendChild(imgCards4);

    //  Sixth Card

    const cardDiv5 = document.createElement('div');
    cardDiv5.classList.add('portfolio-cards');
    
    
    const imgCards5 = document.createElement('div');
    imgCards5.classList.add('cardworks3');
     const cardcontents5 = document.createElement('div');
     cardcontents5.classList.add('card-items');
    
    
    const h3e = document.createElement('h3');
    h3e.classList.add('card1');
    h3e.textContent = 'Profesional Art Printing Data';
    
    const pe = document.createElement('p');
    pe.classList.add('cardtext');
    pe.textContent = "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.";
    cardcontents5.appendChild(h3e);
    cardcontents5.appendChild(pe);
        const skills5 = ['HTML', 'Bootstrap', 'Ruby'];
        const ul5 = document.createElement('ul');
            ul5.classList.add('card-button');
         skills5.forEach((skill) => {
               const li5 = document.createElement('li');
      li5.classList.add('btn-card');
         li5.textContent = skill;
          ul5.appendChild(li5);
        });
    
        const cardButton5 = document.createElement('button');
        cardButton5.setAttribute('type', 'button');
        cardButton5.setAttribute('id', 'projects-7');
        cardButton5.classList.add('project-detail');
        cardButton5.textContent = 'See project';
    
        
        imgCards5.appendChild(cardcontents5);
        imgCards5.appendChild(ul5);
        imgCards5.appendChild(cardButton5);
        cardDiv5.appendChild(imgCards5);
        
        
    const uploadcards = document.querySelector('#card-section');
    uploadcards.appendChild(cardDiv);
    uploadcards.appendChild(cardDiv1);
    uploadcards.appendChild(cardDiv2);
    uploadcards.appendChild(cardDiv3);
    uploadcards.appendChild(cardDiv4);
    uploadcards.appendChild(cardDiv5);

 const changeDefOver1 = () => {
     ul1.style.display = "none";
  cardButton1.style.display = "block";
 };

 const changeDefOut1 = () => {
  ul1.style.display = "flex";
cardButton1.style.display = "none";
};

 const changeDefOver2 = () => {
  ul2.style.display = "none";
cardButton2.style.display = "block";
};
const changeDefOut2 = () => {
  ul2.style.display = "flex";
cardButton2.style.display = "none";
};

const changeDefOver3 = () => {
  ul3.style.display = "none";
cardButton3.style.display = "block";
};

const changeDefOut3 = () => {
  ul3.style.display = "flex";
cardButton3.style.display = "none";
};
const changeDefOver4 = () => {
  ul4.style.display = "none";
cardButton4.style.display = "block";
};
const changeDefOut4 = () => {
  ul4.style.display = "flex";
cardButton4.style.display = "none";
};

const changeDefOver5 = () => {
  ul5.style.display = "none";
cardButton5.style.display = "block";
};
const changeDefOut5 = () => {
  ul5.style.display = "flex";
cardButton5.style.display = "none";
};
// if((window).width() >= 768) {
 cardDiv1.addEventListener('mouseover', changeDefOver1); 
 cardDiv2.addEventListener('mouseover', changeDefOver2); 
 cardDiv3.addEventListener('mouseover', changeDefOver3); 
 cardDiv4.addEventListener('mouseover', changeDefOver4); 
 cardDiv5.addEventListener('mouseover', changeDefOver5); 
 cardDiv1.addEventListener('mouseout', changeDefOut1);
 cardDiv2.addEventListener('mouseout', changeDefOut2);
 cardDiv3.addEventListener('mouseout', changeDefOut3);
 cardDiv4.addEventListener('mouseout', changeDefOut4);
 cardDiv5.addEventListener('mouseout', changeDefOut5);
// };
 const projects = [
  {
    id: 1,
    title: 'Multi-Post Stories',
    image: 'PImages/Snapshoot_Portfolio.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://zuwairanajma.github.io/Portfolio-Projects/',
    source: 'https://github.com/Zuwairanajma/Portfolio-Projects',
  },
  {
    id: 2,
    title: 'Professional Art Printing Data',
    image: 'PImages/Placeholderforprof.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://zuwairanajma.github.io/Portfolio-Projects/',
    source: 'https://github.com/Zuwairanajma/Portfolio-Projects',
  },
  {
    id: 3,
    title: 'Human Resource Analysis',
    image: 'PImages/HRsnip.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://zuwairanajma.github.io/Portfolio-Projects/',
    source: 'https://github.com/Zuwairanajma/Portfolio-Projects',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    image: 'PImages/digitalmarket.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://zuwairanajma.github.io/Portfolio-Projects/',
    source: 'https://github.com/Zuwairanajma/Portfolio-Projects',
  },
  {
    id: 5,
    title: 'Graphic Design',
    image: 'PImages/postone1.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://zuwairanajma.github.io/Portfolio-Projects/',
    source: 'https://github.com/Zuwairanajma/Portfolio-Projects',
  },
  {
    id: 6,
    title: 'Building Design and Construction',
    image: 'PImages/buildingdesignconstruction.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://zuwairanajma.github.io/Portfolio-Projects/',
    source: 'https://github.com/Zuwairanajma/Portfolio-Projects',
  },
  {
    id: 7,
    title: 'Professional Art Printing Data',
    image: 'PImages/card-five.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>`,
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://zuwairanajma.github.io/Portfolio-Projects/',
    source: 'https://github.com/Zuwairanajma/Portfolio-Projects',
  },
];

projects.forEach((project) => {
  document.getElementById('modal').innerHTML = `<div class="project-details-popup">
  <div class="project-details-inner">
      <div class="project-details-header">
          <div class="pop-head">
              <h3 class="popup-heading">${project.title}</h3>
              <i id="close-icon-detail" alt="icon"></i>
          </div>
          <div>
            <ul class="tech-list">
              <li>${project.technologyList[0]}</li>
              <li>${project.technologyList[1]}</li>
              <li>${project.technologyList[2]}</li>
            </ul>
          </div>
      </div>
      <div class="popup-content">
          <img src=${project.image} alt="Portfolio snapshot image">
          <div class="popup-lower">
              <p>${project.description}</p>
              <div class="modal-buttons">
                  <div class="btn-details"><a target="_blank" href=${project.live}>See Live</a> <i class="live-icon"></i></div>
                  <div class="btn-details"><a target="_blank" href=${project.source}>See Source</a> <i class="source-icon"></i> </div>
              </div>
          </div>
      </div>
  </div>
</div>
`;
});

const seeProjects = [];
projects.forEach((project, index) => seeProjects.push(document.getElementById(`projects-${index + 1}`)));
let id;
seeProjects.forEach((el) => {
  el.addEventListener('click', (e) => {
    id = e.target.id;
    document.querySelector('.popup-heading').textContent = projects[id.slice(-1) - 1].title;

    document.querySelector('.project-details-popup').classList.toggle('show');
    document.getElementById('headline').scrollIntoView();
    document.querySelector('#close-icon-detail').classList.toggle('close-icon-detail');
  });
});

document.querySelector('#close-icon-detail').addEventListener('click', () => {
  document.querySelector('.project-details-popup').classList.toggle('show');
  document.querySelector('#close-icon-detail').classList.toggle('close-icon-detail');
  if (id === 'projects-1') {
    document.getElementById(id).focus();
  } else {
    const section = document.querySelector('#card-section');
    section.scrollIntoView({ behavior: 'smooth' });
  }
});


// Project Details Popup Creation
// const modalElement = document.getElementById('modal');
// modalElement.innerHTML = projects.map((project) => `
//   <div class="project-details-popup">
//     <div class="project-details-inner">
//       <div class="project-details-header">
//         <div class="pop-head">
//           <h3 class="popup-heading">${project.title}</h3>
//           <i id="close-icon-detail" alt="icon"></i>
//         </div>
//         <div>
//           <ul class="tech-list">
//             <li>${project.technologyList[0]}</li>
//             <li>${project.technologyList[1]}</li>
//             <li>${project.technologyList[2]}</li>
//           </ul>
//         </div>
//       </div>
//       <div class="popup-content">
//         <img src=${project.image} alt="Portfolio snapshot image">
//         <div class="popup-lower">
//           <p>${project.description}</p>
//           <div class="modal-buttons">
//             <div class="btn-details"><a target="_blank" href=${project.live}>See Live</a> <i class="live-icon"></i></div>
//             <div class="btn-details"><a target="_blank" href=${project.source}>See Source</a> <i class="source-icon"></i> </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// `).join('');

// Event Listeners for Project Elements
// const seeProjects = projects.map((project, index) => document.getElementById(`projects-${index + 1}`));

// seeProjects.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     const id = e.target.id;
//     const popupHeadingElement = document.querySelector('.popup-heading');
//     const project = projects[id.slice(-1) - 1];
//     popupHeadingElement.textContent = project.title;

//     const projectDetailsPopupElement = document.querySelector('.project-details-popup');
//     projectDetailsPopupElement.classList.toggle('show');

//     const headlineElement = document.getElementById('headline');
//     headlineElement.scrollIntoView();

//     const closeIconDetailElement = document.querySelector('#close-icon-detail');
//     closeIconDetailElement.classList.toggle('close-icon-detail');
//   });
// });

// Event Listener for Close Icon
// const closeIconDetailElement = document.querySelector('#close-icon-detail');
// closeIconDetailElement.addEventListener('click', () => {
//   const projectDetailsPopupElement = document.querySelector('.project-details-popup');
//   projectDetailsPopupElement.classList.toggle('show');

//   closeIconDetailElement.classList.toggle('close-icon-detail');

//   if (id === 'projects-1') {
//     document.getElementById(id).focus();
//   } else {
//     const sectionElement = document.querySelector('#card-section');
//     sectionElement.scrollIntoView({ behavior: 'smooth' });
//   }
// });

// const popupModal = document.querySelector('.project-detail');
// projects.forEach((project, index) => seeProjects.push(document.getElementById(`projects-${index + 1}`)));
// const modal = document.getElementById('modal');
// const project1 = projects.find((project) => project.id === 1);
// const Heading = document.querySelector('.popup-heading').textContent = project1.title;

// popupModal.addEventListener("click", openModalWithProject1);
//   function openModalWithProject1() {
//   modal.style.display = block;  
    

//     modal.innerHTML = `
//     <div class="modal-content">
//     <span class="close">&times;</span>
//     <h2>${project1.title}</h2>
//     <ul>
//       ${project1.technologyList.map((tech) => `<li>${tech}</li>`).join('')}
//     </ul>
//     <div class="image-text-container">
//       <img src="${project1.image}" alt="${project1.title}">
//       <p>${project1.description}</p>
//     </div>
//     <div class = link-container>
//     <div class="links-b">
//       <a href="${project1.live}" target="_blank"><img src="PImages/Icon-Export.png" ></a>
//       <a href="${project1.source}" target="_blank"><img src="PImages/Icon-Github.png" ></a>
//       </div>
//     </div>
//   </div>
// `;
// modal.style.display = 'block';
// // button.addEventListener('click', openModalWithProject1);
// //   }
//     const closeButton = modal.querySelector('.close');
//     function closeModal1() {
//       const modal = document.getElementById('modal');
//       modal.style.display = 'none';
//     }
//     closeButton.addEventListener('click', closeModal1);
//   }

//   button.addEventListener('click', openModalWithProject1);

// projects.forEach((project) => {
//   document.getElementById('myPopup').innerHTML = `<div class="project-details-popup">
//   <div class="project-details-inner">
//       <div class="project-details-header">
//           <div class="pop-head">
//               <h3 class="popup-heading">${project.title}</h3>
//               <i id="close-icon-detail" alt="icon"></i>
//           </div>
//           <div>
//             <ul class="tech-list">
//               <li>${project.technologyList[0]}</li>
//               <li>${project.technologyList[1]}</li>
//               <li>${project.technologyList[2]}</li>
//             </ul>
//           </div>
//       </div>
//       <div class="popup-content">
//           <img src=${project.image} alt="Portfolio snapshot image">
//           <div class="popup-lower">
//               <p>${project.description}</p>
//               <div class="modal-buttons">
//                   <div class="btn-details"><a target="_blank" href=${project.live}>See Live</a> <i class="live-icon"></i></div>
//                   <div class="btn-details"><a target="_blank" href=${project.source}>See Source</a> <i class="source-icon"></i> </div>
//               </div>
//           </div>
//       </div>
//   </div>
// </div>
// `;
// });

// const seeProjects = [];
// projects.forEach((project, index) => seeProjects.push(document.getElementById(`projects-${index + 1}`)));
// let id;
// seeProjects.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     id = e.target.id;
//     document.querySelector('.popup-heading').textContent = projects[id.slice(-1) - 1].title;

//     document.querySelector('.project-details-popup').classList.toggle('show');
//     document.getElementById('head-wrap').scrollIntoView();
//     document.querySelector('#close-icon-detail').classList.toggle('close-icon-detail');
//   });
// });

// document.querySelector('#close-icon-detail').addEventListener('click', () => {
//   document.querySelector('.project-details-popup').classList.toggle('show');
//   document.querySelector('#close-icon-detail').classList.toggle('close-icon-detail');
//   if (id === 'projects-1') {
//     document.getElementById(id).focus();
//   } else {
//     const section = document.querySelector('#card-section');
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
// });

 // const cardButton1 = document.getElementById('projects-3');
  // const ul1 = document.getElementById('cardlist1');
  // const cardButton2 = document.getElementById('projects-4');
  // const ul2 = document.getElementById('cardlist2');
  // const cardButton3 = document.getElementById('projects-5');
  // const ul3 = document.getElementById('cardlist3');
  // const cardButton4 = document.getElementById('projects-6');
  // const ul4 = document.getElementById('cardlist4');
  // const cardButton5 = document.getElementById('projects-7');
  // const ul5 = document.getElementById('cardlist5');
  // const cardDiv1 = document.querySelector('cardworks1');
  // const cardDiv2 = document.querySelector('cardworks2');
  // const cardDiv3 = document.querySelector('cardworks3');
  // const cardDiv4 = document.querySelector('.cardworks4');
  // const cardDiv5 = document.querySelector('.cardworks5');

  // const changeDefOver1 = () => {
  //   ul1.style.display = 'none';
  //   cardButton1.style.display = 'block';
  // };

  // const changeDefOut1 = () => {
  //   ul1.style.display = 'flex';
  //   cardButton1.style.display = 'none';
  // };

  // const changeDefOver2 = () => {
  //   ul2.style.display = 'none';
  //   cardButton2.style.display = 'block';
  // };

  // const changeDefOut2 = () => {
  //   ul2.style.display = 'flex';
  //   cardButton2.style.display = 'none';
  // };
  // const changeDefOver3 = () => {
  //   ul3.style.display = 'none';
  //   cardButton3.style.display = 'block';
  // };

  // const changeDefOut3 = () => {
  //   ul3.style.display = 'flex';
  //   cardButton3.style.display = 'none';
  // };
  // const changeDefOver4 = () => {
  //   ul4.style.display = 'none';
  //   cardButton4.style.display = 'block';
  // };

  // const changeDefOut4 = () => {
  //   ul4.style.display = 'flex';
  //   cardButton4.style.display = 'none';
  // };
  // const changeDefOver5 = () => {
  //   ul5.style.display = 'none';
  //   cardButton5.style.display = 'block';
  // };

  // const changeDefOut5 = () => {
  //   ul5.style.display = 'flex';
  //   cardButton5.style.display = 'none';
  // };
  // cardDiv1.addEventListener('mouseover', changeDefOver1);
  // cardDiv2.addEventListener('mouseover', changeDefOver2);
  // cardDiv3.addEventListener('mouseover', changeDefOver3);
  // cardDiv4.addEventListener('mouseover', changeDefOver4);
  // cardDiv5.addEventListener('mouseover', changeDefOver5);
  // cardDiv1.addEventListener('mouseout', changeDefOut1);
  // cardDiv2.addEventListener('mouseout', changeDefOut2);
  // cardDiv3.addEventListener('mouseout', changeDefOut3);
  // cardDiv4.addEventListener('mouseout', changeDefOut4);
  // cardDiv5.addEventListener('mouseout', changeDefOut5);