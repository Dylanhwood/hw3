
    function myFunc() {
        // Getting filled-in values from form fields
        let name = document.getElementById("name").value;
        let city = document.getElementById("city").value
        let paymentRef = document.getElementById("payref").value;
  
        
        if (name && city && paymentRef) {
          // Getting div element from <body> with id of myDiv
          let div = document.getElementById("myDiv");
          
          let h2 = document.getElementById("myH2");
          let list = document.createElement("ul");  
          div.appendChild(list);                       
  
          
          let listItem = document.createElement("li");  
          listItem.innerHTML = name + " " + city + " " + " " + paymentRef + "<br>"
          list.appendChild(listItem);                    
        } 
        else {
          // if any of the field is not filled, alert user
          alert("Fill out all fields before submitting the form");
        }
      }