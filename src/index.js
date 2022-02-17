var infoArr = [];

$(document).ready(function(){
    $("#button").click(function(){
        errormessage();

    });
});

function errormessage(){
    var user = document.getElementById("fname").value;
    var pass = document.getElementById("password").value;

    var name_pattern = '^[a-zA-Z]*$';
    var pass_pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"; 

    if(user==""){
    alert('please enter the user name')
    }

    else if(!user.match(name_pattern)){
        alert('enter only alphabet only in user name')

    }

    else if(pass == ''){
    alert('please enter the password')
    }
  
    else if(!pass.match(pass_pattern)){
    alert('please enter valid password')
    
    }
    else {
        // unique(); 

        alert('add successfully');
     
    var obj = {
        username : user,
        password : pass
    };

    infoArr.push(obj);
    display();

   }


}

function display(){
    var tab = '<table><tr><th>Username</th><th>Password</th>';
    for (var i =0; i<infoArr.length; i++){
        tab +='<tr><td>'+ infoArr[i].username + '</td><td>' + infoArr[i].password + '</td></tr>';

    }

    tab += '</table>'; content
    document.getElementById("content").innerHTML= tab;
}