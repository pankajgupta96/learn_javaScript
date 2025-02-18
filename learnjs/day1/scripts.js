let n= document.getElementById('text').addEventListener("input",function(){
    n = this.value;
})

function printstar(n){
      let result = "";
         
    for( let i= 1 ; i<=n; i++){
        let str = "";

        for( let j = 1 ; j<=i; j++){
           str += "* ";
        }

        
        console.log(str);
        result += str + "<br>";
    }
      return result;
}




printstar(n);

document.getElementById("submit").addEventListener("click",function(){
    document.getElementById("result").innerHTML = printstar(n);
})

document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("result").innerHTML = "";
    document.getElementById("text").value = "";

    
})



