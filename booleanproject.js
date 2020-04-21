let login = prompt("Username please!");
if (login == "Admin"){
    let adminLogin = prompt("Password please!");

    if (adminLogin == "TheMaster"){
        alert("Whalecum!");
    } else if (adminLogin == "" || adminLogin == null){
        alert("Cancelled");
    } else{
        alert("Wrong password");
    }

}

else if (login == "" || login == null){
    alert("Canceled");
}
else {
    alert("I don't know you");
}