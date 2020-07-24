"use strict";

const pets = [
    {
        image: "https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2016/09/01160419/black-cat-1-940x503.jpg",
        name: "Mocha",
        color: "black",
        specialSkill: "fetch",
        typeOfPet: "cat"
      },
      {
        image: "https://pixy.org/download/4663301/",
        name: "Kitters",
        color: "Spotted",
        specialSkill: "Sleeping",
        typeOfPet: "cat"
      },
      {
        image: "https://i.pinimg.com/originals/1d/26/14/1d26144b04873f9a13ee05c0ae8d583f.jpg",
        name: "Chomper",
        color: "Green",
        specialSkill: "Chomping",
        typeOfPet: "dino"
      },
      {
        image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/s960x960/93366679_10221584510259882_1653151457899184128_o.jpg?_nc_cat=102&amp;_nc_sid=110474&amp;_nc_ohc=Uvlk5CYAhrwAX-3RMpY&amp;_nc_ht=scontent-atl3-1.xx&amp;_nc_tp=7&amp;oh=2a5eabade88f74514544ac279ca9f77c&amp;oe=5F3F984C",
        name: "Souffle",
        color: "Brown",
        specialSkill: "Spin",
        typeOfPet: "dog"
      },
      {
        image: "https://images.creativemarket.com/0.1.0/ps/2438977/300/200/m2/fpc/wm0/kgdhbglux2txdxhfk4pgijvt454ybpmzocyw6evyd4zhw5ijjjpguadsz34cgjfh-.jpg?1490100724&s=6f95e764e2a1d7bb2e37b089edc594b8",
        name: "BK",
        color: "Orange",
        specialSkill: "Boxing",
        typeOfPet: "cat"
      },
      {
        image: "https://vignette.wikia.nocookie.net/landbeforetime/images/0/0b/Littlefoot_IV.png/revision/latest?cb=20171227183122",
        name: "Littlefoot",
        color: "purple",
        specialSkill: "javascript",
        typeOfPet: "dino"
      }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);

    selectedDiv.innerHTML = textToPrint;
};

const buildPetCards = () => {
    let domString = '';

    for (let j = 0; j < pets.length; j++) {
        domString += `<div class="pet">`
        domString +=   `<div class="pet-name"><h2>${pets[j].name}</h2></div>`;
        domString +=   `<div class="pet-image"><img src=${pets[j].image} alt="Image of a ${pets[j].typeOfPet}"></div>`;
        domString +=   `<div class="pet-color"><h3>${pets[j].color}</h3></div>`;
        domString +=   `<div class="pet-skills"><p>This pet's special skill is ${pets[j].specialSkill}</p></div>`;
        domString +=   `<div class="pet-type"><h3>${pets[j].typeOfPet}</h3></div>`;
        domString += `</div>`;
    }
    printToDom("pets", domString);

}
buildPetCards();

const dogButton = document.getElementById('dog-btn');
const catButton = document.getElementById('cat-btn');
const dinoButton = document.getElementById('dino-btn');
const allButton = document.getElementById('all-btn');

dogButton.addEventListener('click', function (event) {
    //loop through all pets
    //select all objects with type of pet === dog and display none
    for (let i = 0; i < pets.length; i++) {
        if (pets[i].typeOfPet !== "dog") {
            pets[i].style.display = 'none';
        }
    }

  });
catButton.addEventListener('click', function (event) {
    
  });
dinoButton.addEventListener('click', function (event) {
    
  });
allButton.addEventListener('click', function (event) {
    
  });