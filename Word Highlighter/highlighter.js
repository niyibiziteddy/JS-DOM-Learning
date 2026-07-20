const myParagraph = document.getElementById('myParagraph')
let myparHTML = myParagraph.innerHTML
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
eachWord.slice(0,10).forEach(item => {
    return arrayOFFirsts.push(Object.keys(item)[0]) 
});

console.log(arrayOFFirsts)
// iterate over them and change them
arrayOFFirsts.forEach(item => {
    if(item[0] === item[0].toUpperCase()){
        myparHTML = myparHTML.replaceAll(` ${item} `,` <span class="special" style="text-decoration: underline;">${item}</span> `)
    }
    else{
        myparHTML = myparHTML.replaceAll(` ${item} `,` <span class="special">${item}</span> `)
    }
    
})
myParagraph.innerHTML = myparHTML;
console.log(arrayOFFirsts[6][0].toUpperCase())