


function printstar(){
    let n = parseInt(document.getElementById("text").value);

    console.log(n);
    
     let result = "";

     for( let i = 1 ; i<= n; i++){
        let str = "";
        for( let k = n-i; k>0; k--){
            str += " ";
        }

        for( let j = 1 ; j<=i; j++){
            if( j === 1 || j === i|| i === n ){
                str +="* ";
            }
            else{
                str += "  ";
            }
        }
        result += str+"\n";
        console.log(str);
     }

     

     return result;


}

printstar();

document.getElementById("submit").addEventListener("click",function(){
    document.getElementById("result").innerHTML = printstar();
})

document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("result").innerHTML = "";
    document.getElementById("text").value = "";

    
})


     

      
