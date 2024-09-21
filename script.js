const youFollowed = document.getElementById('youFollowed');
const followers = document.getElementById('followers');
const btn = document.getElementById('btn');
let youFollowedFile;
let followersFile;
let notFollowedValues;

youFollowed.addEventListener('change', () => {
    const file = youFollowed.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        const data = reader.result;
        getProduct(data, false); 
    };
    reader.readAsText(file);
});

followers.addEventListener('change', () => {
    const file = followers.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        const data = reader.result;
        getProduct(data, true); 
    };
    reader.readAsText(file);
});

const getProduct = (data, isFollowers) => { 
    try {
        const jsonData = JSON.parse(data);
        if (isFollowers) {
            followersFile = jsonData;
        } else {
            youFollowedFile = jsonData;
        }
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
}

const list = document.querySelector('.list ul');

btn.addEventListener('click', () => {

    if(youFollowedFile == undefined || followersFile == undefined ) {
        alert("Zəhmət olmasa qovluqları doğru şəkildə yenidən yükləyin...");
        return;
    }
        const followingValues = youFollowedFile.relationships_following.map(item => item.string_list_data[0].value);
        const followersValues = followersFile.map(item => item.string_list_data[0].value);
        notFollowedValues = followingValues.filter(value => !followersValues.includes(value));

        console.log(notFollowedValues);
        localStorage.setItem('userList', notFollowedValues);
        window.location.href = './list.page/list.html';
});


const categoryIcon = document.querySelector('.category img');
const categoryList = document.querySelector('.category ul');

let toogle = false;
categoryIcon.addEventListener('click', () => {

    if(!toogle){
        categoryIcon.src="./assets/icons/Close-icon.svg"
        categoryList.style.display = "flex";
        toogle = true;
    }else{
        categoryIcon.src="./assets/icons/Category.svg"
        categoryList.style.display = "none";
        toogle = false;
    }
    
});
