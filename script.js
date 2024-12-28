const dropdowns = document.querySelectorAll('.dropdown-content');

window.addEventListener('click', (e) => {
  if (!e.target.matches('.dropbtn')) {
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('show');
    });
  } else {
    // Get the clicked dropdown content element
    const clickedDropdownContent = e.target.nextElementSibling;
    clickedDropdownContent.classList.toggle('show'); // Toggle show class
  }
});

const logos = document.querySelectorAll('.client-logo');

    logos.forEach(logo => {
      logo.addEventListener('click', () => {
        // Remove active class from all logos
        logos.forEach(otherLogo => {
          otherLogo.classList.remove('active');
        });

        // Add active class to the clicked logo
        logo.classList.add('active');
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
      const dropdownContent = document.querySelector('.dropdown-content');
  
      // Handle clicks on dropdown links
      dropdownContent.addEventListener('click', function (event) {
          const link = event.target.closest('a'); // Ensure a link was clicked
          if (link) {
              window.location.href = link.getAttribute('href'); // Redirect to the link's href
          }
      });
  });