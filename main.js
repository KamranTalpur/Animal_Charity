 
        // Mobile Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Donation Amount Selection
        const amountOptions = document.querySelectorAll('.amount-option');
        const customAmountGroup = document.getElementById('customAmountGroup');
        
        amountOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove selected class from all options
                amountOptions.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected class to clicked option
                option.classList.add('selected');
                
                // Show custom amount input if "Other" is selected
                if (option.dataset.amount === 'custom') {
                    customAmountGroup.style.display = 'block';
                } else {
                    customAmountGroup.style.display = 'none';
                }
            });
        });

        // Form Submission
        const donationForm = document.getElementById('donationForm');
        
        donationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get selected amount
            let amount;
            const selectedOption = document.querySelector('.amount-option.selected');
            
            if (selectedOption) {
                if (selectedOption.dataset.amount === 'custom') {
                    amount = document.getElementById('customAmount').value;
                } else {
                    amount = selectedOption.dataset.amount;
                }
            }
            
            // In a real application, you would process the payment here
            alert(`Thank you for your donation of $${amount}!`);
            donationForm.reset();
            
            // Reset selection
            amountOptions.forEach(opt => opt.classList.remove('selected'));
            customAmountGroup.style.display = 'none';
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                }
            });
        });

        // Image fallback handling
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('img');
            
            images.forEach(img => {
                // Check if image has already failed to load
                if (img.complete && img.naturalHeight === 0) {
                    if (typeof img.onerror === 'function') {
                        img.onerror();
                    }
                }
            });
        });
 