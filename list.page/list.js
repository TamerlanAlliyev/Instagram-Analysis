const userList = localStorage.getItem('userList').split(',');
const list = document.querySelector('.list ul');

userList.forEach(value => {
    console.log(`"${value}" following.json dosyasında bulunuyor ancak followers.json dosyasında bulunmuyor.`);

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
