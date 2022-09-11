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
    let txtPayment= $("#userPay").val();
    console.log(txtEmail,txtPassword,txtFirstName,txtLastName,txtAge,txtGender, txtAddress,txtPhone,selColor,txtPayment);

    
//create the user ob
    let aUser = new User(txtEmail,txtPassword,txtFirstName,txtLastName,txtAge,txtGender,txtAddress,txtPhone,selColor,txtPayment);

    console.log(aUser);
    //clear the inputs 
    $("input").val("");

}

//create the user ob

function init(){
    //hook event

}