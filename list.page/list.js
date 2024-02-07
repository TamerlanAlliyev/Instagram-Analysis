const userList = localStorage.getItem('userList').split(',');

console.log(userList);

const list = document.querySelector('.list ul');

userList.forEach(value => {
    console.log(`"${value}" following.json dosyasında bulunuyor ancak followers.json dosyasında bulunmuyor.`);

    list.innerHTML += `
        <li>
            <div class="user-info">
                <img src="../assets/icons/userprofil.svg" alt="">
                <a target="_blank" href="https://www.instagram.com/${value}/">${value}</a>
            </div>
            <img class="cricle" src="../assets/icons/cricle.svg" alt="">
        </li>
    `;

    const listElement = document.querySelectorAll('.user-info a'); 
    const circle = document.querySelectorAll('.cricle'); 

    listElement.forEach((element, index) => {
        element.addEventListener('click', () => {
            circle[index].src = '../assets/icons/checkbox.svg';
        });
    });
});
