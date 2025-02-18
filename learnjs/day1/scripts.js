let number= document.getElementById('text').addEventListener("input",function(){
    number = this.value;
})

function printstar(number){
      let result = "";
         
    for( let i= 1 ; i<=number; i++){
        let str = "";

        for( let j = 1 ; j<=i; j++){
           str += "* ";
        }

        
        console.log(str);
        result += str + "<br>";
    }
      return result;
}

printstar();

document.getElementById("submit").addEventListener("click",function(){
    document.getElementById("result").innerHTML = printstar(index);
})

document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("result").innerHTML = "";
    document.getElementById("text").value = "";

    
})



