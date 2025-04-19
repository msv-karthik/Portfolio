const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const homepage = document.querySelector('.homepage');
    const footer = document.querySelector('footer');
    function showPage(pageId) {
      homepage.style.display = 'none';
      pages.forEach(page => {
        page.style.display = 'none';
      });
      if (pageId === 'home') {
        homepage.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
        document.body.style.overflowX = 'auto';
        footer.style.display = 'none'; 
      } else {
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
          selectedPage.style.display = 'block';
          document.body.style.overflowY = 'auto';
          document.body.style.overflowX = 'hidden';
          footer.style.display = 'block'; 
          window.scrollTo(0, 0);
        }
      }
    }
    showPage('home');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageId = this.getAttribute('data-page');
        showPage(pageId);
        history.pushState(null, null, `#${pageId}`);
      });
    });
    if (window.location.hash) {
      const pageId = window.location.hash.substring(1);
      showPage(pageId);
    }
    window.addEventListener('popstate', function() {
      const pageId = window.location.hash.substring(1) || 'home';
      showPage(pageId);
    });


