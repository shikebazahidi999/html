const myInfo = {
    name: 'Shakiba',
    FatherName: "Asadullah" ,
    LastName: "Zahedi",
    country: "Afghanistan",
    city: "Ghazni",
}
switch(myInfo.name){
case "ahmad":
    alert("Your father name is Ahmad");
    break;
case "Shakiba":
    console.log("your name is Shakiba");
    break;

    default:"we don't know your name" ;   
}
switch(myInfo.FatherName){
    case "Asadullah":
        console.log("your father's name is Asadullah ");
        break;
    case "ali":
        console.log("your father's name is ali");
        break;
        default:"we don't know your father's name";

}
for(let myInfo = 0; myInfo<=10;myInfo++){
    console.log(myInfo.LastName);
}
if(myInfo.country==="kanada"||myInfo.country==="Afghanistan"){
     
    console.log('you are from afghanistan')
}
