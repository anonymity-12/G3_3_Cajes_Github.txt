function displayDateTime() {
    var date = new Date();
    var time = "Date and Time: " + date.toLocaleString();
    document.getElementById("mytime").innerText = time;
}
window.onload = function() {
    displayDateTime();
};
