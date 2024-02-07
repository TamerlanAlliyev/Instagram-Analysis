const youFollowed = document.getElementById('youFollowed');
const followers = document.getElementById('followers');
const btn = document.getElementById('btn');
let youFollowedFile;
let followersFile;

youFollowed.addEventListener('change', () => {
    const file = youFollowed.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        const data = reader.result;
        getProduct(data);
    };
    reader.readAsText(file);
});

followers.addEventListener('change', () => {
    const file = followers.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        const data = reader.result;
        getProduct(data);
    };
    reader.readAsText(file);
});

const getProduct = (data) => {
    try {
        const jsonData = JSON.parse(data);
        if (youFollowedFile === undefined) {
            youFollowedFile = jsonData;
        } else {
            followersFile = jsonData;
        }
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
}


btn.addEventListener('click', () => {
    console.log(youFollowedFile.relationships_following);
    console.log(followersFile);
});



const followersValues = followersFile.map(item => item.string_list_data[0].value);

// followingFile'daki "value" değerlerini al
const followingValues = followingFile.relationships_following.map(item => item.string_list_data[0].value);

// followersValues içinde olup followingValues içinde olmayan "value" değerlerini bul
const notFollowedValues = followersValues.filter(value => !followingValues.includes(value));

// Ekrana yazdır
notFollowedValues.forEach(value => {
  console.log(`"${value}" followers.json dosyasında bulunuyor ancak following.json dosyasında bulunmuyor.`);
});