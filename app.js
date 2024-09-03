const CalculateSumbuttonElement= document.querySelector('#calculator button')
function calculatesum(){
    const userNumberInputElement =document.getElementById("user-number");
    const enteredNumber =userNumberInputElement.value
    let sumupNumber= 0;
    for(let i=0 ; i<= enteredNumber; i++){
        sumupNumber= i+ sumupNumber 
    
}
    const outputResultElement = document.getElementById ("calculated-sum");
        outputResultElement.textContent= sumupNumber;
        outputResultElement.style.display = "block";

    }
CalculateSumbuttonElement.addEventListener('click', calculatesum);

//highlight
const  HighlightbuttonElement = document .querySelector("#highlight-links button");

function applyHighlight(){
const highlightInputElement=document.querySelectorAll("#highlight-links a"); 
for ( const anchor of highlightInputElement){
    anchor.classList.add('highlight');
}
}
HighlightbuttonElement.addEventListener('click', applyHighlight);


const dummyUserData = {
    firstname:'JOHN',
    Lastname: 'JAMES',
    Age:       '22',
};
const DisplayUserdataElement= document.querySelector("#user-data button");
function displayItem(){
    const displayitemInputElement =document.getElementById("output-user-data");
displayitemInputElement.innerHTML= '';
for( const key in dummyUserData ){
    const newUserdataListElement = document.createElement('li');
    const outputText =`${key.toUpperCase()}: ${dummyUserData[key]}`; 
    newUserdataListElement.textContent = outputText;
    displayitemInputElement.append (newUserdataListElement);
}
}
DisplayUserdataElement.addEventListener('click', displayItem);





























































































