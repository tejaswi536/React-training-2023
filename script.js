function toggleAccordion(element) {
    // Toggle the 'active' class to show/hide content
    element.classList.toggle('active');

    // Get the content associated with the header
    var content = element.nextElementSibling;

    // Toggle the 'show' class to display/hide content
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}
