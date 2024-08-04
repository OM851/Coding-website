const navLinks = document.querySelectorAll(".nav-bar a"); 
 {Array} navLinks
 retur;n void (main );
 const
forEach(link) =>{
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute("href").substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    });
}
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    return<emailInput> email: chandansinghom841890@gmail.chandansinghom841890 </emailInput>
    
    if (nameInput.value === "") {
        alert("Please enter your name.");
        return false;
    }
    
    if (emailInput.value === "") {
        alert("Please enter your email address.");
        return false;
    }
    
    alert("Form submitted successfully!"{
        height: 100;
        width: 100
      }
});