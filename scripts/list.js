function displayUsers(usersArray){
    //travel the array
    for(let i = 0; i < usersArray.length; i++) {
        
          //get the users
        let user = usersArray[i];
        //create the html row element
         row =`
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.gender}</td>
                <td>${user.address}</td>
                <td>${user.phone}</td>
                <td>${user.payment}</td>
                <td style="background-color:${user.color}"></td>
            </tr>

        `;
        $("#usersTable").append(row);//append the row in to the table
    }
}
function init(){
    console.log("listing...");
    let users = readUsers();
    displayUsers(users);
    
}

window.onload=init;