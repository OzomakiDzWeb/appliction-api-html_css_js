const countainer=document.querySelector('.countainer')
const btn_serch=document.getElementById('search')
const resalt=document.querySelector('.resalt')
const inp=document.getElementById('inp')
btn_serch.addEventListener('click',()=>{
  if(navigator.onLine){
    let country=inp.value
    //https://restcountries.com/v3.1/name/${index}?fullText=true
    let urll=`https://restcountries.com/v3.1/name/${country}?fullText=true`;
  
    fetch(urll)
    .then((respons)=>respons.json())
    .then((data)=>{
      console.log(data[0])
      resalt.innerHTML=`
      <img src="${data[0].flags.svg}" alt="no">
      <h1>${data[0].name.common}</h1>
      <h2>Capital:<span>${data[0].capital}</span></h2>
      <h2>population:<span>${data[0].population}</span></h2>
      <h2>region:<span>${data[0].region}</span></h2>
      <h2>languages:<span>${JSON.stringify(Object.values(data[0].languages))}</span></h2>
     
      
      `
      inp.value=""
    })
  }else{
    alert('check your conction,you are offline')
  }
  
})