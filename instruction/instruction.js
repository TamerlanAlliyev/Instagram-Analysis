const categoryIcon = document.querySelector('.category img');
const categoryList = document.querySelector('.category ul');
const mainHead = document.querySelector('main');
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