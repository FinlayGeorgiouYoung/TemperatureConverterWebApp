 function conversionTable(tagId){

     var from = $("#from").val();
     var to = $("#to").val();

     //if the user didn't input a second value for the range then a table of 10 rows will be made starting from the first input
     if(to == ""){
        to = parseInt(from)+9;
     }

     //isInt is a boolean used to check if the input in fields from and to are an integer
     var isInt = true;
     //the for loops below loop through the strings the user input for the 'from' and 'to' fields and checks that each character is an Integer
     for(var i=0; i<from.length; i++){
        if(!parseInt(from.charAt(i))){
            isInt = false;
        }
     }
     for(var i=0; i<to.length; i++){
         if(!parseInt(to.charAt(i))){
             isInt = false;
         }
     }

     if(isInt == true && from.length > 0){
        var conversionType = $("#conversionType").val();


        //gets the div which holds the table and clears it
        var converterDiv = document.getElementById(tagId);
        converterDiv.innerHTML = "";

        var tab = converterDiv.appendChild(document.createElement("table"));
        var head = tab.appendChild(document.createElement("thead"));
        var row = head.appendChild(document.createElement("tr"));

        //the if statements below check what the user has chosen to convert and sets the table headers accordingly
        if(conversionType == "c2f"){
            var h = row.appendChild(document.createElement("th"));
            h.appendChild(document.createTextNode("Celsius"));
            h = row.appendChild(document.createElement("th"));
            h.appendChild(document.createTextNode("Fahrenheit"));
        }
        if(conversionType == "f2c"){
            var h = row.appendChild(document.createElement("th"));
            h.appendChild(document.createTextNode("Fahrenheit"));
            h = row.appendChild(document.createElement("th"));
            h.appendChild(document.createTextNode("Celsius"));
        }


        var body = tab.appendChild(document.createElement("tbody"));
        if(to >= from){
            for (var i=from; i<=to; i++){
                row = body.appendChild(document.createElement("tr"));
                if (i%2==0){
                    row.setAttribute("class","even");
                }
                else{
                    row.setAttribute("class","odd");
                }


                var data = row.appendChild(document.createElement("td"));
                data.appendChild(document.createTextNode(i));
                data = row.appendChild(document.createElement("td"));

                if(conversionType == "c2f"){
                    data.appendChild(document.createTextNode(celsiusToFahrenheit(i)));
                }
                else if(conversionType == "f2c"){
                    data.appendChild(document.createTextNode(fahrenheitToCelsius(i)));
                }
            }
        }

        if(to < from){
            for (var i=from; i>=to; i--){
                row = body.appendChild(document.createElement("tr"));
                if (i%2==0){
                    row.setAttribute("class","even");
                }
                else{
                    row.setAttribute("class","odd");
                }


                var data = row.appendChild(document.createElement("td"));
                data.appendChild(document.createTextNode(i));
                data = row.appendChild(document.createElement("td"));

                if(conversionType == "c2f"){
                    data.appendChild(document.createTextNode(celsiusToFahrenheit(i)));
                }
                else if(conversionType == "f2c"){
                    data.appendChild(document.createTextNode(fahrenheitToCelsius(i)));
                }
            }
        }

     }
     else{
        alert("Please enter an Integer for your range values");
     }
 }

function celsiusToFahrenheit(c)  { return((c*9/5+32).toFixed(1)) }

function fahrenheitToCelsius(f)  { return(((f-32)*5/9).toFixed(1)) }