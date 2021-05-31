  function cal(){
     var fv = document.getElementById("f").value;
     var sv=  document.getElementById("s").value;
     var oprt= document.getElementById("opr").value;
     
   if (fv==0 || sv==0){
       alert("Please enter a value except 0.");
     
        if(fv==0){
            document.getElementById("f").style="border: 2px solid red;";}
    
        else if(sv==0){
            document.getElementById("s").style="border: 2px solid red;";}
    }
   else{
    
    document.getElementById("f").style="border: 2px solid green;";
    document.getElementById("s").style="border: 2px solid green;";
    
    
     if(oprt=="+"){
            var total= parseInt(fv) + parseInt(sv);
            alert("Total is: "+ total);
     }
     
     else if(oprt=="-"){
            var total= parseInt(fv) - parseInt(sv);
            alert("Total is: "+ total);
     }
     
     else if(oprt=="*"){
            var total= parseInt(fv) * parseInt(sv);
            alert("Total is: "+ total);
     }
     
     else if(oprt=="/"){
            var total= parseInt(fv) / parseInt(sv);
            alert("Total is: "+ total);
     }
     }
     
}
