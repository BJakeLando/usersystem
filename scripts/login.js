function login(){
    console.log("login function");
    //get the values from the email and password

    let password = $("#userPassword").val();
    let userName= $("#userName").val();

    //flag 
    let flag=true;  
    //get the users from the local storage
    let users = readUsers();

    //travel the array
    for (let i = 0; i < users.length; i++){
    
        //compare the credentials
        let user = users[i];
        if(user.password ==password && user.email==userName){
             //redirect user to user.html
            console.log("Welcome");
            window.location="users.html";
        
         }else{
            flag=false;
        }
    }
        //display the msg invlad credentials
        if(!flag){
            $("alert-error").removeClass("hide");
            setTimeout(function(){
                $("alert-error").addClass("hide");
        },3000);
    }
}

function init(){
    $("#loginBtn").click(login);

}


window.onload=init;