function multiply3(num1,num2,num3) {
    //alert("This program will multiply three numbers  Click ok to continue");
    
    num1= parseFloat(prompt("Please input the first number ", num1));
    num2= parseFloat(prompt("Please input the Second Number ", num2));
    num3= parseFloat(prompt("Please input the Third number ", num3));
    //return alert(num1*num2*num3);
    //var multiple  = num1 * num2 * num3;
    document.getElementById("multiply").innerHTML = num1 * num2 * num3;
    }
    multiply3()
    
    // var num1, num2, num3;
    
    // alert("This program will multiply three numbers  Click ok to continue");
    
    // num1= parseFloat(prompt("Please input the first number ", num1));
    // num2= parseFloat(prompt("Please input the Second Number ", num2));
    // num3= parseFloat(prompt("Please input the Third number ", num3));
    
    // var text = alert("You have entered the following numbers which will be multiplied "+ num1 +", " + num2 + ", " + num3);
    
    // alert(" the result is " + multiply3(num1, num2, num3));
    // document.getElementById("multiply").innerHTML = num1;