// add payment method using a select element on the html, add it to the constructor

//objejct constructor
function User(email,password,firstName,lastName,age, gender,address, phone,color,payment){
    this.email=email;
    this.password=password;
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.gender=gender;
    this.address=address;
    this.phone=phone;
    this.color=color;
    this.payment=payment;
}


//getting the values from the inputs


function isValid(aUser){
    let valid = true;
    $("input").removeClass("input-error");

    if(aUser.email == "" || aUser.password=="" || aUser.name == "" ){
        valid=false;
        $("#userEmail").addClass("input-error");
        console.log("Please enter a user email");
    }
    if(aUser.firstName==""){
        valid=false;
        $("#userFirstName").addClass("input-error");
        console.log("Please add a user name");

    }
    if(aUser.lastName==""){
        valid=false;
        $("#userLastName").addClass("input-error");
        console.log("Please add a user name");

    }
    if(aUser.phone==""){
        valid=false;
        $("#userPhone").addClass("input-error");
        console.log("Please add a user name");

    }
    if(aUser.password.length==0){
        valid=false;
        $("#userPassword").addClass("input-error");
    }

    return valid;

}
function validatePass(){
    console.log("Validating password");
    let inputPass=$("#userPassword");//getting the input #userPassword
    let password = inputPass.val(); //getting the value
    if(password.length<6){
        inputPass.css("background-color", "#ff9898");
        console.log("The password is too short"); 
        displayErrors("The password is too short");       
    }else{
        inputPass.css("background-color", "#008000");
        console.log("The password has the correct length");
        hideErrors();

    }

}
function displayErrors(msg){
        $("#alert-error").removeClass("hide").text(msg);
       
    }

    function hideErrors(){
        $("#alert-error").addClass("hide");
    }

function register() {
    let txtFirstName =$("#userFirstName").val();
    let txtLastName= $("#userLastName").val();
    let txtAge= $("#userAge").val();
    let txtEmail= $("#userEmail").val();
    let txtPassword= $("#userPassword").val();
    let txtGender= $("#userGender").val();
    let txtAddress= $("#userAddress").val();
    let txtPhone= $("#userPhone").val();
    let selColor= $("#userColor").val();
    let selPayment= $("#userPay").val();
    console.log(txtEmail,txtPassword,txtFirstName,txtLastName,txtAge,txtGender, txtAddress,txtPhone,selColor,selPayment);

    
//create the user ob
    let aUser = new User(txtEmail,txtPassword,txtFirstName,txtLastName,txtAge,txtGender,txtAddress,txtPhone,selColor,selPayment);

    if(isValid(aUser)){
        hideErrors();
    saveUser(aUser);
    //clear the inputs 
    $("input").val("");
    }else{
        displayErrors("Please complete all the required fields.");
    }
}



function init(){
    //hook event
    $("#btnSave").on("click",register);
    $("h1").on("click",function(){
        $("nav").hide();
    });

    $(".form-container").hide();
    $("#btnShowForm").on("click",function(){
        //$(".form-container").show();
        $(".form-container").slideDown(2000);
    
    });

    $(".form-container").hide();
    $("#btnCloseForm").on("click",function(){
        //$(".form-container").show();
        $(".form-container").slideUp(1000);
    
    });

    $("#userPassword").keyup(validatePass);


}

window.onload=init;