

function printstar2(){

    
    let n= document.getElementById('text').value;
     
    let result = "";
    for( let i = 1 ; i<=2*n-1;i++){
        let str = ""
        if(i<n){
        for ( let j = 1 ; j<=i && i <=n ; j++){
            str += "* ";
        }
        result += str + "<br>";
    }
        else{
           for( let k = i ; k <= 2*n-1 ;k++){
            str += "* ";
            
        }
        result += str +"<br>";
        }

       
    }
    return result;
}

printstar2();

document.getElementById("submit").addEventListener("click",function(){
    document.getElementById("result").innerHTML = printstar2();
})

document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("result").innerHTML = "";
    document.getElementById("text").value = "";

    
})
