const userList = localStorage.getItem('userList').split(',');
const list = document.querySelector('.list ul');

userList.forEach(value => {

    list.innerHTML += `
        <li>
            <div class="user-info">
                <img src="../assets/icons/userprofil.svg" alt="">
                <a target="_blank" href="https://www.instagram.com/${value}/">${value}</a>
            </div>
            <img class="circle" src="../assets/icons/cricle.svg" alt="">
        </li>
    `;
});

const listElements = document.querySelectorAll('.list ul li');
const circle = document.querySelectorAll('.circle');
const userName = document.querySelectorAll('.user-info a');

listElements.forEach((element, index) => {
    element.addEventListener('click', () => {
        const link = element.querySelector('a').href;
        circle[index].src = '../assets/icons/checkbox.svg';
        window.open(link, '_blank');
    });
});


const categoryIcon = document.querySelector('.category img');
const categoryList = document.querySelector('.category ul');
const mainHead = document.querySelector('main .head');
let toogle = false;
categoryIcon.addEventListener('click', () => {

    if(!toogle){
        categoryIcon.src="../assets/icons/Close-icon.svg"
        categoryList.style.display = "flex";
        mainHead.style.marginTop = "125px";
        toogle = true;
    }else{
        categoryIcon.src="../assets/icons/Category.svg"
        categoryList.style.display = "none";
        mainHead.style.marginTop = "inherit";
        toogle = false;
    }
    
});
