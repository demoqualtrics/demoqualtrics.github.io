// Get the modal
var protector = document.getElementById("myProtector");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Unblock website if correct access code has been provided
var x = getCookie("accessCode");
if (x) {
    if (x === "1e7ba2d045c77e6485d6f0499f9a608da5050d707282aa21a776bc8232672c3a85bfa7632ae5677cd6e29003fed58c5c5819a12292ce759a513ae55b50542072") {
    protector.style.display = "none";
 }
}