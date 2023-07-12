const form =  document.querySelector('form');
const btn = document.querySelector('button');
const receveDataPeople =document.querySelector('.receveDataPeople')
const inputHeight = document.querySelector('#heightPeople');
const inputWeight = document.querySelector('#weight');
const btnCalculateData = document.querySelector('.calculatedata')
const data2 = document.querySelector('#data-2')

form.addEventListener('submit', calculate);

function calculate(a){
    a.preventDefault()
    receveDataPeople.classList.remove('off-display')
    receveDataPeople.classList.add('on-display')
    btnCalculateData.classList.remove('off-display')
    btnCalculateData.classList.add('on-display')
    btn.classList.add('off-display')
    btnCalculateData.addEventListener('click',setResult)


}
function setResult(){
    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);
    const imc = getImc(weight,height);
    const loadData = document.querySelector('.loadData');
    const DataPeople = document.querySelector('.DataPeople');
    DataPeople.innerHTML = "";

    //validing weigth and height
    if(!height) return alert('Informe apenas numeros - altura');
    if(!weight)return alert('Informe apenas numeros - peso');
    loadData.classList.remove('off-display');
    loadData.classList.add('on-display');

    // show data the user
    const showData = ()=>{
        loadData.classList.remove('on-display');
        loadData.classList.add('off-display');
        DataPeople.innerHTML = `<strong>Seu índice IMC = ${imc}</strong>`;
        const indice_1 = document.querySelector('.indice-1')
        const indice_2 = document.querySelector('.indice-2')
        const indice_3 = document.querySelector('.indice-3')
        const indice_4 = document.querySelector('.indice-4')
        const indice_5 = document.querySelector('.indice-5')
        const indice_6 = document.querySelector('.indice-6')

        //removed colors of the indice
      styledata()
        //add colors of the indice
        if(imc>39.9) return indice_6.style.color = 'white', indice_6.style.backgroundColor = 'red' 
        if(imc>=34.9) return indice_5.style.color = 'white', indice_5.style.backgroundColor = 'red' 
        if(imc>=29.9) return indice_4.style.color = 'white', indice_4.style.backgroundColor = 'red' 
        if(imc>=24.9) return indice_3.style.color = 'black', indice_3.style.backgroundColor = 'yellow' 
        if(imc>=18.9) return indice_2.style.color = 'white', indice_2.style.backgroundColor = 'green' 
        if(imc<18.5) return indice_1.style.color = 'black', indice_1.style.backgroundColor = 'yellow' 

        
       
    }
    
    setTimeout(showData,2000);
    
    
}
//calculating IMC
function getImc(weight,height){
    const imc = weight / height**2;
    return imc.toFixed(2);
}
// remove style of the indice
function styledata(){
    const Indice = document.getElementsByClassName('indice');
    for(let index = 0;index <Indice.length;index++){
        Indice[index].style.color = 'black';
        Indice[index].style.backgroundColor = 'azure';
    }
 
}
