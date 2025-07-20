
        // Mobile menu toggle
        document.querySelector('button.md\\:hidden').addEventListener('click', function () {
            // This would toggle a mobile menu in a real implementation
            alert('Mobile menu would open here in a complete implementation');
        });

        // Simple animation for flavor cards on scroll
        document.addEventListener('DOMContentLoaded', function () {
            const flavorCards = document.querySelectorAll('.flavor-card');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                    }
                });
            }, { threshold: 0.1 });

            flavorCards.forEach(card => {
                card.style.opacity = 0;
                card.style.transition = 'opacity 0.5s ease, transform 0.3s ease';
                observer.observe(card);
            });
        });
