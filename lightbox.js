let image = document.querySelectorAll("img");
image.forEach(popup => popup.addEventListener('click', () => 
{
    popup.classList.toggle('active');
}) )