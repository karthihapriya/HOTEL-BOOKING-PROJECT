var toDate;
var fromDate

 function GetDays(){
    var adultNumber =document.getElementById("adults").value;
    var toDate= new Date(document.getElementById("toDate").value);
    var fromDate = new Date(document.getElementById("fromDate").value);
    return parseInt((toDate - fromDate) / (24 * 3600 * 1000))*adultNumber*1000;

 }
 function call(){
    var adultNumber =document.getElementById("adults").value;
    var toDate= new Date(document.getElementById("toDate").value);
    var fromDate = new Date(document.getElementById("fromDate").value);
    if(toDate>fromDate && adultNumber >0  ){
        document.getElementById("price").value="Rs."+ GetDays();
        document.getElementById("bookNow").removeAttribute("disabled")

    }  else{
        document.getElementById("price").value="Rs.0";
        document.getElementById("bookNow").setAttribute("disabled",true);
    }
    } 
    function store() {
        var Username = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        localStorage.setItem(Username, password);
      }
    
      function loginM() {
        store();
        var Username = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        if (Username == "admin" && password == "admin") {
          window.alert("Login Successful");
          console.log(document.getElementById("logout-button").innerHTML);
          document.getElementById("logout-button").innerHTML = "LOGOUT";
          document.getElementById("logout-button").setAttribute("data-toggle", "none");
          document.getElementById("ena").removeAttribute("disabled");
    
        }
      }
      function logout() {
        var data = document.getElementById("logout-button");
    
        if (data.innerHTML == "LOGOUT" || data.innerHTML == "LOGIN") {
          data.innerHTML = "LOGIN";
          data.setAttribute("data-toggle", "modal");
          document.getElementById("close").setAttribute("data-dismiss","modal");
          document.getElementById("ena").setAttribute("disabled",true);
          localStorage.clear();
        }
      }