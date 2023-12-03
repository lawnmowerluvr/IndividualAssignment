function submitForm() {
    var amount = document.getElementById('contributionAmount').value;
    if (amount <= 0) {
        alert('Please enter a valid contribution amount.');
    } else {
        alert('Form submitted successfully!');
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}