
const btnLength = document.querySelectorAll(".mybutton");
for (let i= 0; i< btnLength.length; i++) {
    document.querySelectorAll(".mybutton")[i].addEventListener("click", function () {
        const text = this.innerHTML;
        document.querySelector("h2").innerHTML = text + " is clicked";
    });
}
console.log(btnLength).length;


