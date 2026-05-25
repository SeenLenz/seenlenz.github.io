document.addEventListener("DOMContentLoaded", () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('components/header.html')
            .then(response => {
                if (!response.ok) throw new Error('Header hiba');
                return response.text();
            })
            .then(data => {
                headerPlaceholder.outerHTML = data;

                // Initialize mobile menu
                const mobileBtn = document.getElementById('mobile-menu-btn');
                const mobileMenu = document.getElementById('mobile-menu');
                
                if (mobileBtn && mobileMenu) {
                    mobileBtn.addEventListener('click', () => {
                        mobileMenu.classList.toggle('hidden');
                    });
                }

                // Active menu item logic
                function updateActiveLinks() {
                    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
                    const currentHash = window.location.hash;
                    const navLinks = document.querySelectorAll('header nav a, #mobile-menu a:not([href="#kapcsolat"])');

                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (!href) return;
                        
                        const linkPath = href.split('#')[0] || currentPath;
                        const linkHash = href.includes('#') ? '#' + href.split('#')[1] : '';

                        let isActive = false;
                        if (currentPath === 'termek.html' && linkPath === 'termekek.html') {
                            isActive = true;
                        } else if (linkPath === currentPath) {
                            if (linkHash) {
                                isActive = (currentHash === linkHash);
                            } else {
                                if (currentPath === 'index.html') {
                                    isActive = (currentHash !== '#kluboknak');
                                } else {
                                    isActive = true;
                                }
                            }
                        }

                        if (isActive) {
                            link.classList.add('text-yellow-400');
                            link.classList.remove('text-white');
                        } else {
                            link.classList.remove('text-yellow-400');
                            if (link.closest('#mobile-menu')) {
                                link.classList.add('text-white');
                            }
                        }
                    });
                }
                
                updateActiveLinks();
                window.addEventListener('hashchange', updateActiveLinks);
            })
            .catch(err => console.error(err));
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('components/footer.html')
            .then(response => {
                if (!response.ok) throw new Error('Footer hiba');
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(err => console.error(err));
    }
});