 
const reviews=[
    {
        id:1,
        photo:"user1.jpg",
        name:"Peter Proteh",
        position:"UI Designer",
        about:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitaae facilis molestiae unde tenetur ullam similique qui voluptatibus numquam possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    
    {
        id:2,
        photo:"user2.jpg",
        name:"Susan synth",
        position:"Web Dev.",
        about:" Lorem ipsum dolor sit amet consectetur adipisicing elit.  molestiae unde tenetur ullam similique qui voluptatibus numquam possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    
    {
        id:3,
        photo:"user3.jpg",
        name:"John Snow",
        position:"Tech Advisior",
        about:"consectetur adipisicing elit. Atque vitaae facilis molestiae unde tenetur ullam similique qui voluptatibus numquam possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    
    {
        id:4,
        photo:"user4.jpg",
        name:"Clary Hail",
        position:"Assistant",
        about:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitaae facilis molestiae unde tenetur ullamipsum dolor sit amet  similique qui voluptatibus numquam possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    
];

const img=document.getElementById("myimage");
const author=document.querySelector(".name");
const job=document.querySelector(".position");
const info=document.querySelector(".about");

const prevBtn=document.querySelector(".previous");
const nextBtn=document.querySelector(".next");
const randomBtn=document.querySelector(".btn-supriseme");

let currentItem=0;

// Load intital Item
window.addEventListener("DOMContentLoaded",function () {
// 2 Ways

//   const item=reviews[currentItem];
//   img.src=item.img;
//   author.textContent=item.name;
//   job.textContent=item.position;
//   info.textContent=item.about;

            // OR

showPerson(currentItem);

});

// Show person based on Item
function showPerson(person){
  const item=reviews[person];
  img.src=item.photo;
  author.textContent=item.name;
  job.textContent=item.position;
  info.textContent=item.about;
}

// Show next Person
nextBtn.addEventListener("click",function () {
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
});
// Show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
// Show random Person
randomBtn.addEventListener("click",function () {
    console.log("hello");
    currentItem=Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
});