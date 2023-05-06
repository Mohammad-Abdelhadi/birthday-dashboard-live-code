let profiles = [
  {
    username: "Mohammad",
    gender: "Male",
    age: 24,
    birthday: "06 May 2001",
  },
  {
    username: "Mohammad",
    gender: "Male",
    age: 24,
    birthday: "06 May 2001",
  },
  {
    username: "Majd",
    gender: "Female",
    age: 24,
    birthday: "06 May 2000",
  },
  {
    username: "Rawan",
    gender: "Female",
    age: 24,
    birthday: "06 May 1990",
  },
];

let profilesContainer = document.getElementById("birthday__profile-container");
let currentDate = new Date();
let month = currentDate.toLocaleString("default", { month: "long" });
let day = currentDate.getDate(); // Fix: Get the day of the month
let year = currentDate.getFullYear();
let counter = 0;
console.log(day);
console.log(month);
console.log(year);
console.log(currentDate);

for (let profile of profiles) {
  let birthday = profile.birthday.split(" ");
  if (
    birthday[1] === month &&
    birthday[0] == day &&
    profile.gender === "Male"
  ) {
    profilesContainer.innerHTML += ` <div class="birthday__profile">
            <img src="assets/img/male.avif" alt="">
            <div class="birthday__info">
                <p>${profile.username}</p>
                <p> ${year - birthday[2]}</p>
            </div>
        </div>`;
    counter += 1;
  } else if (
    birthday[1] === month &&
    birthday[0] == day &&
    profile.gender === "Female"
  ) {
    profilesContainer.innerHTML += ` <div class="birthday__profile">
            <img src="assets/img/female.png" alt="">
            <div class="birthday__info">
                <p>${profile.username}</p>
                <p> ${year - birthday[2]}</p>
            </div>
        </div>`;
    counter += 1;
  }
}

document.getElementById("number-birthday").innerHTML = `${counter} birthdays today`;
let clear_btn = document.getElementById("btn__clear");
clear_btn.onclick = function () {
  profilesContainer.innerHTML = " ";
  counter = 0;
  document.getElementById("number-birthday").innerHTML = `${counter} birthdays today`;
};
//Way 2 : The hard way
//  let profileCard =  document.createElement('div')
// profileCard.className='birthday__profile';
// profilesContainer.appendChild(profileCard)
// let profileImg = document.createElement('img')
// profileImg.setAttribute('src','assets/img/female.png')
// profileCard.appendChild(profileImg);
// let birthdayInfo = document.createElement('div')
// birthdayInfo.className = 'birthday__info'
// profileCard.appendChild(birthdayInfo)
// let username = document.createElement('p')
//username.appendChild(document.createTextNode(profile.username))
//birthdayInfo.appendChild(username)
//let age = document.createElement('p')
//age.appendChild(document.createTextNode(profile.age))
//birthdayInfo.appendChild(age)
//console.log(profile)
