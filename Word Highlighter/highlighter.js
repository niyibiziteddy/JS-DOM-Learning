const myParagraph = document.getElementById('myParagraph')
const myparHTML = myParagraph.innerHTML.split(' ')
const wordArray = myParagraph.textContent.split(' ').filter(item => item !== ' ').filter(item => item !== '');
const setArray = [... new Set(wordArray)];
const eachWord = [];
let counter = 0;

// Get words by their occurence
setArray.forEach(item => {
    let count = wordArray.filter(el => item === el).length;
    let obj = {[item] : count}
    eachWord.push(obj)
})

// Sort them
eachWord.sort((a,b) => {
    return Object.values(b) - Object.values(a);
})
const arrayOFFirsts = []
eachWord.slice(0,5).forEach(item => {
    return arrayOFFirsts.push(Object.keys(item)) 
});

console.log(arrayOFFirsts)
// iterate over them
arrayOFFirsts.forEach(item => {
    myparHTML.map(el => {
        if(el === item){
            return `<span>${item}</span>`
        }
    })
})