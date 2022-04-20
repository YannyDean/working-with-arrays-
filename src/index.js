const myListDiv = document.getElementById('list');
const myHobbies = ['Traveling', 'cooking', 'shopping'];


function addName(name) {
    const h1 = document.createElement('h1');
    h1.innerText = name;
    h1.className = 'name';
    myListDiv.appendChild(h1);
}

addName('Yanny');

myHobbies.forEach(hobby => addName(hobby));