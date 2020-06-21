// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName);

//  TASK 02
// var mobile = prompt("Enter Your Favourite Mobile Model");
// var strLength = mobile.length;
// document.write("My Favourite Mobile Phone is: " + mobile + "<br>");
// document.write("Length of String is: " + strLength);

//  TASK 03
// var str = "Pakistani";
// var ind = str.indexOf("n");
// document.write("String: " + str + "<br>");
// document.write("Index of n: " + ind);

//  TASK 04
// var str = "Hello World";
// var ind = str.lastIndexOf("l");
// document.write("String: " + str + "<br>");
// document.write("Index of l: " + ind);

//  TASK 05
// var str = "Pakistani";
// var ind = str.charAt(3);
// document.write("String: " + str + "<br>");
// document.write("Character at Index 3: " + ind);

//  TASK 06
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(" " + lastName);
// alert("Hello " + fullName);

//  TASK 07
// var str = "Hyderabad";
// var replace = str.replace("Hyder" , "Islam");
// document.write("City: " + str +"<br>");
// document.write("After Replacement: " + replace);

//  TASK 08
// var message =  "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(new RegExp('and', 'g'), '&');
// document.write("Message: " + "<br>" + message +"<br><br>");
// document.write("After Replacement: " + "<br>"  + replace);

//  TASK 09
// var str = prompt("Enter any number");
// document.write("Value: " + str + "<br>");
// var str_type = typeof str;
// document.write("Type: " + str_type + "<br><br>");
// document.write("Value: " + str + "<br>");
// var num = parseInt(str);
// var num_type = typeof num;
// document.write("Type: " + num_type);

//  TASK 10
// var str = prompt("Enter the string");
// var upper = str.toUpperCase();
// document.write("User Input: " + str +"<br>");
// document.write("UpperCase: " + upper);

//  TASK 11
// var str = prompt("Enter the string");
// var title = (str.charAt(0).toUpperCase() + str.slice(1));
// document.write("User Input: " + str +"<br>");
// document.write("TitleCase: " + title);

//  TASK 12
// var num = "35.36";
// var str = num.toString();
// var string =str.replace('.', '');
// document.write("Number: " + num + "<br>");
// document.write("Result: " + string);

//  TASK 13
// var name = prompt("Enter Your Username");
// var comma = name.search(","); 
// var stop = name.search(/\./);
// var at = name.search("@");
// var mark = name.search("!");
// if (comma < 0 && stop < 0 && at < 0 && mark < 0){
//    alert("Hello " + name);}
// else{
//     alert("Enter your valid username");
// }

//  TASK 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var items = prompt("Enter the item");
// search = A.findIndex(item => items.toLowerCase() === item.toLowerCase());
//  if (search>=0){
//     document.write(items +" is available at index " + search + " in our bakery");
//  }
//  else{
//     document.write("We are sorry! " + items +" is not available in our bakery");  
//  }

//  TASK 15
// var pass = prompt("Enter Your Password");
// var n = pass.length;
// var ind = pass.charAt(0);
// var num = pass.search(/[0-9]/g);
// var char = pass.search(/[A-Za-z]/g);
// if(n < 6){
// alert("Yor Password must at least 6 characters long");
// }
// else if(num == -1){
// alert("Your Password should have a number also");
// }
// else if(char == -1){
// alert("Your Password should have a character also");
// }
// else if(/^[0-9]*$/g.test(ind)){
// alert("Your Password should not start with a number");
// }
// else{
// alert("Succesfully login!");
// }

//  TASK 16
// var university = "University of Karachi";
// var split = university.split("").join("<br>");
// document.write("University Name: " + university +"<br><br><br>");
// document.write("After Applying Split: <br><br>" + split);

//  TASK 17
// var str = prompt("Enter the string");
// var last = str.slice(-1);;
// document.write("User Input: " + str +"<br>");
// document.write("Last Character: " + last);

//  TASK 18
// var str = "the quick brown fox jumps over the lazy dog";
// var count = (str.match(/the/g) || []).length;
// document.write(count);

 // TASK 01
// var int = prompt("Enter the positive integer");
// if (int>0){
// var round = Math.round(int);
// var floor = Math.floor(int);
// var ceil = Math.ceil(int);
// document.write("Number: " + int + "<br>");
// document.write("Round: " + round + "<br>");
// document.write("Floor: " + floor + "<br>");
// document.write("Ceil: " + ceil + "<br>");
// }
// else{
//     alert("Enter Positive integer");
// }

// TASK 02
// var int = prompt("Enter the negative integer");
// if (int<0){
// var round = Math.round(int);
// var floor = Math.floor(int);
// var ceil = Math.ceil(int);
// document.write("Number: " + int + "<br>");
// document.write("Round: " + round + "<br>");
// document.write("Floor: " + floor + "<br>");
// document.write("Ceil: " + ceil + "<br>");
// }
// else{
//     alert("Enter Negative integer");
// }

// TASK 03
// var num = prompt("Enter the number");
// var abs = Math.abs(num);
// document.write("Absolute Value of " + num + " is : " + abs);

// TASK 04
// var dice = Math.floor((Math.random() * 6) + 1);
// document.write("Random Dice Value Is : " + dice);

// TASK 05
// var coin = Math.floor((Math.random() * 2) + 1);
// if (coin===1){
// document.write("Random Coin Value Is : Heads");
// } 
// else{
// document.write("Random Coin Value Is : Tails");
// } 

// TASK 06
// var number = Math.floor((Math.random() * 100) + 1);
// document.write("Random Number Value Is : " + number);

// TASK 08
// var num = Math.floor((Math.random() * 10) + 1);
// var guess = prompt("Guess The Random Secret Number between 1-10");
// document.write("User Input : " + guess + "<br>");
// document.write("Secret Number : " + num + "<br><br>");
// if (guess == num){
// document.write("You Win! <br> You Guess The Right Number");
// }
// else{
// document.write("You loss! <br> Better Luck Next Time");
// }

 //  TASK 01
// var d = new Date();
// d.setUTCDate(d.getDate());
// document.write(d);
// document.write("<br><br>");

//  TASK 02
// var d = new Date();
// var m = d.getMonth();
//      if (m===0){document.write("Current Month is:  January");}
// else if (m===1){document.write("Current Month is:  Febuary");}
// else if (m===2){document.write("Current Month is:  March");}
// else if (m===3){document.write("Current Month is:  April");}
// else if (m===4){document.write("Current Month is:  May");}
// else if (m===5){document.write("Current Month is:  June");}
// else if (m===6){document.write("Current Month is:  July");}
// else if (m===7){document.write("Current Month is:  August");}
// else if (m===8){document.write("Current Month is:  September");}
// else if (m===9){document.write("Current Month is:  October");}
// else if (m===10){document.write("Current Month is:  November");}
// else{document.write("Current Month is:  December");}

//  TASK 03
// var d = new Date();
// var din = d.getDay();
//      if (din===0){alert("Current Day is:  Sun");}
// else if (din===1){alert("Current Day is:  Mon");}
// else if (din===2){alert("Current Day is:  Tue");}
// else if (din===3){alert("Current Day is:  Wed");}
// else if (din===4){alert("Current Day is:  Thu");}
// else if (din===5){alert("Current Day is:  Fri");}
// else{alert("Current Day is:  Sat");}

//  TASK 04
// var d = new Date();
// var din = d.getDay();
// if (din===0 || din===6){document.write("It is a fun day.");}
// else{document.write("It is a weak day");}

//  TASK 05
// var d = new Date();
// var date = d.getDate();
// if (date < 16){document.write("First 15 days of the month.");}
// else{document.write("Last days of the month.");}

//  TASK 07
// var d = new Date();
// var time = d.toTimeString();
// var hour = d.getHours();
// if (hour < 12){alert(time + "\n" + "Its AM.");}
// else{alert(time + "\n" + "Its PM.");}

//  TASK 08
// var m = prompt("Enter the monthe number to find its last date");
// var laterDate = new Date(2020, m , 0).getDate();
// var laterDay = new Date(2020, m , 0).getDay();
// document.write ("Last date of " + m + " month of 2020 is " + laterDate + "<br>");
//      if (laterDay===0){document.write ("last Day is:  Sunday");}
// else if (laterDay===1){document.write ("last Day is:  Monday");}
// else if (laterDay===2){document.write ("last Day is:  Tuesday");}
// else if (laterDay===3){document.write ("last Day is:  Wednessday");}
// else if (laterDay===4){document.write ("last Day is:  Thursday");}
// else if (laterDay===5){document.write ("last Day is:  Friday");}
// else{document.write ("Current Day is:  Saturday");}


/* ---------------------------------------
            CHAPTER 35 - 38
 ----------------------------------------*/


//  TASK 01
// var date = date();
// document.write(date);

// function date(){
// var d= new Date();
// d.setUTCDate(d.getDate()-1);
// return(d);
// }

//  TASK 02
// var greet = name(); 

// function name(){
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var full= alert("Hello " + firstName + " " + lastName);
// return(full);
// }

//  TASK 03
// var num1 = prompt("Enter the first number");
// var num2 = prompt("Enter the second number");
// var res = sum(num1,num2); 

// function sum(a,b){
// var a= parseInt(a);
// var b= parseInt(b);
// var add= a+b;  
// var sum= alert(a + "+" + b + "=" + add);
// return(sum);
// }

//  TASK 04
// var num1 = prompt("Enter the first number");
// var num2 = prompt("Enter the second number");
// var arr=["+ Add","- Sub","* Mul","/ Div"]
// document.write("<form> ");
// document.write("<input type=radio onclick=sum(num1,num2)>" + arr[0] );
// document.write("<input type=radio onclick=sub(num1,num2)>" + arr[1] );
// document.write("<input type=radio onclick=mul(num1,num2)>" + arr[2] );
// document.write("<input type=radio onclick=div(num1,num2)>" + arr[3] );
// document.write("</form>");

// function sum(a,b){
// var a= parseInt(a);
// var b= parseInt(b);
// var add= a+b;  
// document.write("The Sum of " + a + " & " + b + " = " + add);
// }
// function sub(a,b){
// var a= parseInt(a);
// var b= parseInt(b);
// var sub= a-b;  
// document.write("The Difference of " + a + " & " + b + " = " + sub);
// }
// function mul(a,b){
// var a= parseInt(a);
// var b= parseInt(b);
// var mul= a*b;  
// document.write("The Product of " + a + " & " + b + " = " + mul);
// }
// function div(a,b){
// var a= parseInt(a);
// var b= parseInt(b);
// var div= a/b;  
// document.write("The Quotient of " + a + " & " + b + " = " + div);
// }

//  TASK 05
// var num = prompt("Enter the number");
// var sqr = square(num);
// alert("Square of " + num + " is: " + sqr);

// function square(n){
// var digit= parseInt(n);
// var ans= Math.pow(digit,2);
// return (ans);
// }

//  TASK 06
// var num = prompt("Enter the number");
// var res = factorial(num);
// document.write("Factorial of " + num + " is: " + res);

// function factorial(a){
// var n= parseInt(a);
// var answer=1;
// for(var i = n; i >= 1; i--){
// var answer = answer * i;
// }
// return(answer);
// }

//  TASK 07
// var num1 = prompt("Enter the first number");
// var num2 = prompt("Enter the second number");
// counting(num1,num2);

// function counting(a,b){
// var n1 = parseInt(a);
// var n2 = parseInt(b);
// if(n1<n2){
// for (var i = n1; i <= n2 ; i++) {
//     document.write(i + "<br>");
// }
// }
// else{
// for (var i = n1; i >= n2 ; i--) {
//     document.write(i + "<br>");
// }
// }
// }

//  TASK 08
// var b= prompt("Enter the value of base");
// var p= prompt("Enter the value of perpendicular");
// var h= hypotenuse(b,p);
// alert("The value of hypotenuse is: " + h);

// function hypotenuse(n1,n2){
// var b= parseInt(n1);
// var p= parseInt(n2);
// var base= Math.pow(b,2);
// var per= Math.pow(p,2);
// var hypo= base + per ;
// var h2= root(hypo);
// return (h2);
// }
// function root(num){
// var value = Math.sqrt(num);
// return (value);
// }

//  TASK 09
// var hei = prompt("Enter the height of rectangle in inch");
// var a = area(80,hei);
// document.write("Area of rectange is: " + a +" sq. inch");

// function area(width,h){
// var height = parseInt(h);
// var area = width * height ;
// return(area);
// }

//  TASK 10
// var string = prompt("Enter the string");
// palindrome(string);

// function palindrome(str) {
// var re = /[^A-Za-z0-9]/g;
// var lowRegStr = str.toLowerCase().replace(re, '');
// var reverseStr = lowRegStr.split('').reverse().join(''); 
// if(reverseStr === lowRegStr){
// alert("Your String is: " + str + "\nYour String " + str + " is palindrome");
// }
// else{
// alert("Your String is: " + str + "\nYour String " + str + " is not a palindrome");
// }
// }

//  TASK 11
// var string = prompt("Enter the string");
// var upper = uppercase(string);
// document.write("Your String is: " + string);
// document.write("<br>");
// document.write("Expected Output: " + upper);

// function uppercase(str)
// {
// var array1 = str.split(' ');
// var newarray1 = [];
// for(var i = 0; i < array1.length; i++){
//    newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
// }
// return newarray1.join(' ');
// }

//  TASK 12
// var string = prompt("Enter the string");
// var long = longest_word(string);
// document.write("Your String is: " + string);
// document.write("<br>");
// document.write("Expected Output: " + long);

// function longest_word(str)
// {
// var array1 = str.match(/\w[a-z]{0,}/gi);
// var result = array1[0];
// for(var x = 1 ; x < array1.length ; x++)
// {
//  if(result.length < array1[x].length){
//     result = array1[x];
//  } 
// }
// return result;
// }

//  TASK 13
// var string = prompt("Enter the string");
// var char = prompt("Enter the letter");
// var occur = char_count(string, char);
// document.write("Your String is: " + string);
// document.write("Your Letter is: " + char);
// document.write("<br>");
// document.write("Your letter occurs " + occur + " times in your string.");

// function char_count(str, letter) 
// {
// var letter_Count = 0;
// for (var position = 0; position < str.length; position++) 
// {
//   if (str.charAt(position) == letter){
//       letter_Count += 1;
//   }
// }
// return letter_Count;
// }

//  TASK 14
// var radius= prompt("Enter the radius");
// var ans = calcCircumference(radius);
// var res = calcArea(radius);
// document.write("The circumference is: " + ans + "<br>");
// document.write("The area is: " + res );

// function calcCircumference(r){
// var rad = parseInt(r);
// var cir = 2 * Math.PI * rad ;
// return(cir);
// }

// function calcArea(r){
// var rad = parseInt(r);
// var sq = rad * rad ;
// var area = Math.PI * sq;
// return(area);
// }




