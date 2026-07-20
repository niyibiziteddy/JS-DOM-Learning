const myParagraph = document.getElementById('myParagraph');
const myArray = myParagraph.textContent.split(' ').filter(item => item.length > 0);
const setPar = [... new Set(myArray)]
const myWordCloudDiv = document.getElementById('myWordCloud')
const myObj = {};
const wordsArray = []
let counter = 0;
let maxWord;

//Get each word and it's frequency
setPar.forEach(item => {
    let count = myArray.filter(el => item === el).length;
    let temp = {[item] : count}
    wordsArray.push(temp)
})
//Sort the object
wordsArray.sort((a,b) => {
    return Object.values(b) - Object.values(a)
})
// get12 first words as instructed
const firstOnes = []
wordsArray.slice(0,12).forEach(item =>{
    firstOnes.push(Object.keys(item))
})

//set them to their sizez
count = 64;
const colors = ['rgb(59, 153, 36)','rgba(209, 199, 54, 0.856)','rgba(209, 54, 100, 0.856)','rgba(209, 54, 175, 0.856)','rgb(147, 54, 209)','rgb(196, 1, 20)','rgb(126, 34, 9)','rgb(54, 134, 209)','rgb(54, 191, 209)','rgb(51, 80, 69)','rgb(39, 187, 130)','rgb(18, 56, 27)']
myWordCloudDiv.style.position = 'relative'
const fragment = new DocumentFragment();
for(let i = 0; i<12;i++){
    let par = document.createElement('p');
    par.textContent = `${firstOnes[i]}`;
    par.style.fontSize = count+'px';
    par.style.color = colors[i];
    par.style.display = 'inline';
    par.classList.add(`the-${count}px`)
    par.style.position = 'absolute';
    par.style.top = `${Math.round(Math.random()*300)}px`
    par.style.left = `${Math.round(Math.random()*500)}px` 
    fragment.appendChild(par)
    count-=4
    if(i%2 == 0){
        par.style.transform = `rotate(90deg)`;
    }
}
myWordCloudDiv.append(fragment);
console.log(myWordCloudDiv.clientHeight)
