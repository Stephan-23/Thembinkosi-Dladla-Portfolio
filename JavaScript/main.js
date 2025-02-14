function toggleDarkMode() {     //Function to change modes(dark and light mode)
    var icon = document.getElementById("icon");
    var menuListIcon = document.getElementById("darkMenuIcon");

    // Toggle dark mode class on the body
    document.body.classList.toggle("dark-mode");

    // Update icons based on dark mode state
    if (document.body.classList.contains("dark-mode")) {
        icon.src = "images/light-mode.png"; // Change icon to light mode
        menuListIcon.src = "images/lightMenu.png";
    } else {
        icon.src = "images/sleep-mode.png"; // Change icon to dark mode
        menuListIcon.src = "images/darkMenu.png";
    }
}

/*function menuFun() {             //Change the menu for small screen 
    let menuList = document.getElementById("menuList"); // Get the menu list element

    if (menuList.style.maxHeight === "0px" || !menuList.style.maxHeight) {
        menuList.style.maxHeight = "700px"; // Open the menu
    } else {
        menuList.style.maxHeight = "0px"; // Close the menu
    }
}*/
function menuFun() {
    let menuList = document.getElementById("menuList");

    if (menuList.style.maxHeight === "0px" || !menuList.style.maxHeight) {
        menuList.style.maxHeight = "200px"; /* Adjust this value to fit your content */
        menuList.style.padding = "10px"; /* Add padding when expanded */
    } else {
        menuList.style.maxHeight = "0px"; /* Collapse the navbar */
        menuList.style.padding = "0"; /* Remove padding when collapsed */
    }
}

function downloadResume() {    //function to download my resume
    const resumeFilePath = "MyResume/THEMBINKOSI-DLADLA-RESUME.pdf";
    const link = document.createElement("a");
    link.href = resumeFilePath;
    link.download = "Thembinkosi_Dladla_Resume.pdf";
    document.body.appendChild(link);

    fetch(resumeFilePath)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("File not found");
            }
            link.click();
            alert("Your resume is downloading...");
        })
        .catch(function (error) {
            alert("Error: Resume file not found. Please try again later.");
            console.error(error);
        })
        .finally(function () {
            document.body.removeChild(link);
        });
} 
function sendEmail() {
    const UserName = document.getElementById("UserName").value.trim();
    const userEmail = document.getElementById("UserEmail").value.trim();
    const subject = document.getElementById("Subject").value.trim();
    const msg = document.getElementById("msg").value.trim();

    // Error handling
    if (!UserName || !userEmail|| !msg) {
        alert("Please fill out all fields before sending the email.");
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Construct the mailto link
    const mailToLink = `mailto:dladlathembinkosi75@gmail.com?subject=${encodeURIComponent(subject)}&body= ${encodeURIComponent(msg)}`;

    // Open the default email client
    window.location.href = mailToLink;

    // Alert the user that the email client has been opened
    alert("Your email client has been opened. Please review and send the email.");
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => { //smooth scrolling
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
