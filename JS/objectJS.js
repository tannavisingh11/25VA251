var myInfo={
    name:"Abhay", 
            mob:3535534543, 
            isMarried:false, 
            eMail:"abhya123@gmail.com", 
            address:null
}
console.log(myInfo.name);

//iterates properties using for loop

const keys=Object.keys(myInfo);
const myInfoLength=keys.length;
console.log(myInfoLength);
for(let i=0; i<myInfoLength;i++){
    console.log(myInfo[keys[i]]);
}