let nav_links = document.getElementById("nav_links");
function showMenu() {
    nav_links.style.right = "0";
    nav_links.style.display = "block";
}
function hideMenu() {
    nav_links.style.right = "-250px";
}


  // JavaScript to toggle the FAQ answers
    const faqs = document.querySelectorAll('.faq-item h4');

    faqs.forEach(faq => {
        faq.addEventListener('click', function () {
            const answer = this.nextElementSibling;

            // Toggle the visibility of the answer
            if (answer.style.display === "block") {
                answer.style.display = "none";
                this.classList.remove('active');
            } else {
                answer.style.display = "block";
                this.classList.add('active');
            }
        });
    });