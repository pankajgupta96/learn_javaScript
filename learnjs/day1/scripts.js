let index = document.getElementById('text').addEventListener("input",function(){
    index = this.value;
})

function printstar(index){
      let result = "";
         
    for( let i= 1 ; i<=index; i++){
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



