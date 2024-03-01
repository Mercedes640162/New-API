function validateForm() {
    var name = document.getElementById("story").value;
    var story = document.getElementById("story").value;
    if (name == "" || email == "") {
        alert("Name and story must be filled out");
        return false;
    }
}

