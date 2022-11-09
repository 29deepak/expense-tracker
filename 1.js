const choosexpe=document.getElementById("id1")
const choosedesc=document.getElementById("id2")
const choosecat=document.getElementById("id3")
const btnins=document.getElementById("id4")
const loca=document.getElementById("isoutput")
btnins.onclick=function (){
  const key=choosexpe.value;
  const key1=choosedesc.value;
  const key2=choosecat.value;
  console.log(key)
  console.log(key1)
  console.log(key2)
  loca.innerHTML=`${key},${key1},${key2}`
  
}
