// add payment method using a select element on the html, add it to the constructor

//objejct constructor
function User(email,pasword,firstName,lastName,age, gender,address, phone,color,payment){
    this.email=email;
    this.password=pasword;
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

    if(aUser.email == "" || aUser.password=="" || aUser.name == "" ){
        valid=false;
        alert("Please enter an email");
    }

    return valid;

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
    saveUser(aUser);
    //clear the inputs 
    $("input").val("");
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


}

window.onload=init;