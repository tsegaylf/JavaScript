console.log("Connected!");

var users = [
    {
        "id": 1,
        "username": "adm",
        "password": "adm",
        "firstname": "Normal",
        "lastname": "Admin",
        "phone": "513-555-1212",
        "email": "help@admin.com",
        "isReviewer": true,
        "isAdmin": true
    },
    {
        "id": 2,
        "username": "user",
        "password": "user",
        "firstname": "Normal",
        "lastname": "User",
        "phone": "",
        "email": "",
        "isReviewer": false,
        "isAdmin": false
    },
    {
        "id": 3,
        "username": "sa",
        "password": "sa",
        "firstname": "System",
        "lastname": "Admin",
        "phone": "",
        "email": "",
        "isReviewer": true,
        "isAdmin": true
    },
    {
        "id": 4,
        "username": "Lid",
        "password": "Lid",
        "firstname": "Lid",
        "lastname": "Tse",
        "phone": "343-555-1212",
        "email": "lid@admin.com",
        "isReviewer": true,
        "isAdmin": false
    },
]

var display = function() {
    var id = document.getElementById("nbr").value;
    var selectedUser;
    for(var user of users) {
        if(user.id == id) {
            selectedUser = user;
        }    
    }

    set("pid", selectedUser.id);
    document.getElementById("pname").innerText = `${selectedUser.firstname} ${selectedUser.firstname}`
    document.getElementById("pisreviewer").innerText = `${selectedUser.isReviewer ? "Yes" : "No"}`
    document.getElementById("pisadmin").innerText = `${selectedUser.isAdmin ? "Yes" : "No"}`
}

var set = (pid, val) =>{
document.getElementById(pid).innerText = val;
}



