//Login Page
// Form validation and submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Basic validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate login process
            const loginBtn = document.querySelector('.login-btn');
            loginBtn.textContent = 'Logging in...';
            loginBtn.disabled = true;
            
            setTimeout(() => {
                alert('Login successful! Welcome to Sweet Delights Bakery!');
                loginBtn.textContent = 'Login';
                loginBtn.disabled = false;
                // Here you would typically redirect or handle successful login
            }, 1500);
        });

        // Email validation function
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Handle forgot password
        function handleForgotPassword() {
            const email = document.getElementById('email').value;
            if (email && isValidEmail(email)) {
                alert(`Password reset link sent to ${email}`);
            } else {
                alert('Please enter your email address first');
                document.getElementById('email').focus();
            }
        }

        // Handle social logins
        function handleGoogleLogin() {
            alert('Redirecting to Google login...');
            // Here you would integrate with Google OAuth
        }

        function handleFacebookLogin() {
            alert('Redirecting to Facebook login...');
            // Here you would integrate with Facebook login
        }

        // Add some interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            // Add focus effects to inputs
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.style.transform = 'translateX(5px)';
                    this.parentElement.style.transition = 'transform 0.3s ease';
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.style.transform = 'translateX(0)';
                });
            });
        });

        //sign up page
         let captchaChecked = false;

        // Initialize event listeners
        document.addEventListener('DOMContentLoaded', function() {
            const captchaCheckbox = document.getElementById('captchaCheckbox');
            const ssignupBtn = document.getElementById('ssignupBtn');
            const passwordInput = document.getElementById('password');
            
            // Captcha checkbox functionality
            captchaCheckbox.addEventListener('click', function() {
                captchaChecked = !captchaChecked;
                
                if (captchaChecked) {
                    this.classList.add('checked');
                    ssignupBtn.classList.add('active');
                    
                    // Simulate captcha verification delay
                    setTimeout(() => {
                        if (captchaChecked) {
                            this.style.background = '#27ae60';
                        }
                    }, 800);
                } else {
                    this.classList.remove('checked');
                    ssignupBtn.classList.remove('active');
                    this.style.background = '';
                }
            });

            // Password strength checker
            passwordInput.addEventListener('input', function() {
                const password = this.value;
                const strengthElement = document.getElementById('passwordStrength');
                
                if (password.length === 0) {
                    strengthElement.textContent = '';
                    return;
                }
                
                const strength = checkPasswordStrength(password);
                strengthElement.textContent = `Password strength: ${strength.text}`;
                strengthElement.className = `password-strength ${strength.class}`;
            });

            // Add focus effects to inputs
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.style.transform = 'translateX(5px)';
                    this.parentElement.style.transition = 'transform 0.3s ease';
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.style.transform = 'translateX(0)';
                });
            });
        });

        // Form validation and submission
        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Basic validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters long');
                return;
            }
            
            if (!captchaChecked) {
                alert('Please verify that you are not a robot');
                return;
            }
            
            // Simulate signup process
            const signupBtn = document.getElementById('ssignupBtn');
            const originalText = ssignupBtn.textContent;
            ssignupBtn.textContent = 'Creating Account...';
            ssignupBtn.disabled = true;
            
            setTimeout(() => {
                alert('Account created successfully! Welcome to Sweet Delights Bakery!');
                ssignupBtn.textContent = originalText;
                ssignupBtn.disabled = false;
                // Here you would typically redirect to login page or dashboard
            }, 2000);
        });

        // Email validation function
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Password strength checker
        function checkPasswordStrength(password) {
            let score = 0;
            let feedback = [];

            // Length check
            if (password.length >= 8) score += 1;
            else feedback.push('at least 8 characters');

            // Uppercase check
            if (/[A-Z]/.test(password)) score += 1;
            else feedback.push('uppercase letter');

            // Lowercase check
            if (/[a-z]/.test(password)) score += 1;
            else feedback.push('lowercase letter');

            // Number check
            if (/\d/.test(password)) score += 1;
            else feedback.push('number');

            // Special character check
            if (/[^A-Za-z0-9]/.test(password)) score += 1;
            else feedback.push('special character');

            if (score < 2) {
                return { text: 'Weak', class: 'strength-weak' };
            } else if (score < 4) {
                return { text: 'Medium', class: 'strength-medium' };
            } else {
                return { text: 'Strong', class: 'strength-strong' };
            }
        }

        // Handle social signups
        function handleGoogleSignup() {
            alert('Redirecting to Google signup...');
            // Here you would integrate with Google OAuth
        }

        function handleFacebookSignup() {
            alert('Redirecting to Facebook signup...');
            // Here you would integrate with Facebook login
        }


        //Contact
         // Form submission handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitButton');
            const btnText = submitBtn.querySelector('.btn-text');
            
            // Validate required fields
            const name = document.getElementById('userName').value.trim();
            const contact = document.getElementById('contactNumber').value.trim();
            
            if (!name || !contact) {
                alert('Please fill in all required fields (Name and Contact No.)');
                return;
            }
            
            // Validate phone number
            const phoneRegex = /^[+]?[\d\s\-()]{10,}$/;
            if (!phoneRegex.test(contact)) {
                alert('Please enter a valid contact number');
                return;
            }
            
            // Validate email if provided
            const email = document.getElementById('userEmail').value.trim();
            if (email && !isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Show loading state
            submitBtn.classList.add('loading');
            btnText.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Reset form
                document.getElementById('contactForm').reset();
                document.getElementById('fileDisplay').textContent = 'No file chosen';
                
                // Reset button state
                submitBtn.classList.remove('loading');
                btnText.textContent = 'Submit';
                submitBtn.disabled = false;
                
                // Show success modal
                showModal();
            }, 2000);
        });

        // Email validation function
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // File display function
        function displayFileName(input) {
            const fileDisplay = document.getElementById('fileDisplay');
            if (input.files && input.files[0]) {
                const file = input.files[0];
                const maxSize = 1024 * 1024; // 1MB in bytes
                
                if (file.size > maxSize) {
                    alert('File size exceeds 1MB. Please choose a smaller file.');
                    input.value = '';
                    fileDisplay.textContent = 'No file chosen';
                    return;
                }
                
                fileDisplay.textContent = file.name;
            } else {
                fileDisplay.textContent = 'No file chosen';
            }
        }

        // Modal functions
        function showModal() {
            const modal = document.getElementById('successModal');
            modal.classList.add('modal-active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('successModal');
            modal.classList.remove('modal-active');
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        document.getElementById('successModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Add input animations
        document.addEventListener('DOMContentLoaded', function() {
            const inputs = document.querySelectorAll('.input-field');
            
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.style.transform = 'translateX(3px)';
                    this.parentElement.style.transition = 'transform 0.3s ease';
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.style.transform = 'translateX(0)';
                });
            });
        });

        //Snacks Add to cart
        let currentQuantity = 1;
        let currentProduct = {};

        function openCartModal(name, price, image, description) {
            currentProduct = { name, price, image, description };
            currentQuantity = 1;
            
            document.getElementById('modalProductTitle').textContent = name;
            document.getElementById('modalProductPrice').textContent = price;
            document.getElementById('modalProductImage').src = image;
            document.getElementById('modalProductDescription').textContent = description;
            document.getElementById('quantityDisplay').textContent = currentQuantity;
            
            const modalOverlay = document.getElementById('cartModalOverlay');
            modalOverlay.classList.add('show');
        }

        function closeCartModal() {
            const modalOverlay = document.getElementById('cartModalOverlay');
            modalOverlay.classList.remove('show');
        }

        function increaseQuantity() {
            currentQuantity++;
            document.getElementById('quantityDisplay').textContent = currentQuantity;
        }

        function decreaseQuantity() {
            if (currentQuantity > 1) {
                currentQuantity--;
                document.getElementById('quantityDisplay').textContent = currentQuantity;
            }
        }

        function addToCartAction() {
            alert(`Added ${currentQuantity}x ${currentProduct.name} to cart!`);
            closeCartModal();
        }

        function buyNowAction() {
            alert(`Proceeding to checkout with ${currentQuantity}x ${currentProduct.name}`);
            closeCartModal();
        }

        // Close modal when clicking outside
        document.getElementById('cartModalOverlay').addEventListener('click', function(e) {
            if (e.target === this) {
                closeCartModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeCartModal();
            }
        });

       //Payment
       // Payment option selection functionality
        document.querySelectorAll('.payment-radio').forEach(radio => {
            radio.addEventListener('click', function() {
                // Remove selected class from all radios in the same container
                const container = this.closest('.payment-methods, .modal-payment-methods');
                container.querySelectorAll('.payment-radio').forEach(r => r.classList.remove('selected'));
                
                // Add selected class to clicked radio
                this.classList.add('selected');
            });
        });

        function openPaymentModal() {
            // Add a small delay to simulate payment processing
            setTimeout(() => {
                document.getElementById('paymentModalOverlay').classList.add('show');
            }, 500);
        }

        function closePaymentModal() {
            document.getElementById('paymentModalOverlay').classList.remove('show');
        }

        function continueShopping() {
            closePaymentModal();
            // Add your continue shopping logic here
            console.log('Continue shopping clicked');
        }

        function viewOrder() {
            closePaymentModal();
            // Add your view order logic here
            console.log('View order clicked');
        }

        // Close modal when clicking outside
        document.getElementById('paymentModalOverlay').addEventListener('click', function(e) {
            if (e.target === this) {
                closePaymentModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closePaymentModal();
            }
        });
        //Cart
         // Cart data structure
        let cartItems = {
            1: {
                id: 1,
                name: 'White Forest Cake',
                price: 800,
                quantity: 1,
                image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=150&fit=crop'
            },
            2: {
                id: 2,
                name: 'Blueberry Cake',
                price: 800,
                quantity: 1,
                image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=200&h=150&fit=crop'
            }
        };

        function showNotification(message, isError = false) {
            const notification = document.getElementById('notificationPopup');
            notification.textContent = message;
            notification.className = 'notification-popup show' + (isError ? ' error' : '');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        function updateCartDisplay() {
            const cartItemsList = document.getElementById('cartItemsList');
            const emptyMessage = document.getElementById('emptyCartMessage');
            const cartSummary = document.getElementById('cartSummary');
            
            const itemCount = Object.keys(cartItems).length;
            
            if (itemCount === 0) {
                cartItemsList.style.display = 'none';
                emptyMessage.style.display = 'block';
                cartSummary.style.display = 'none';
            } else {
                cartItemsList.style.display = 'block';
                emptyMessage.style.display = 'none';
                cartSummary.style.display = 'block';
                updateSubtotal();
            }
        }

        function updateSubtotal() {
            let subtotal = 0;
            Object.values(cartItems).forEach(item => {
                subtotal += item.price * item.quantity;
            });
            document.getElementById('subtotalAmount').textContent = `Rs.${subtotal}`;
        }

        function updateItemDisplay(itemId) {
            const item = cartItems[itemId];
            if (item) {
                document.getElementById(`quantity-${itemId}`).textContent = item.quantity;
                document.getElementById(`price-${itemId}`).textContent = `Rs.${item.price * item.quantity}`;
                
                // Enable/disable decrease button
                const decreaseBtn = document.querySelector(`[onclick="decreaseItemQuantity(${itemId})"]`);
                decreaseBtn.disabled = item.quantity <= 1;
            }
        }

        function increaseItemQuantity(itemId) {
            if (cartItems[itemId]) {
                cartItems[itemId].quantity++;
                updateItemDisplay(itemId);
                updateSubtotal();
                showNotification(`Added one more ${cartItems[itemId].name} to cart`);
            }
        }

        function decreaseItemQuantity(itemId) {
            if (cartItems[itemId] && cartItems[itemId].quantity > 1) {
                cartItems[itemId].quantity--;
                updateItemDisplay(itemId);
                updateSubtotal();
                showNotification(`Removed one ${cartItems[itemId].name} from cart`);
            }
        }

        function removeIndividualItem(itemId) {
            if (cartItems[itemId]) {
                const itemName = cartItems[itemId].name;
                delete cartItems[itemId];
                
                // Remove the item from DOM
                const itemElement = document.querySelector(`[data-item-id="${itemId}"]`);
                if (itemElement) {
                    itemElement.remove();
                }
                
                updateCartDisplay();
                showNotification(`${itemName} removed from cart`);
            }
        }

        function removeAllItems() {
            if (Object.keys(cartItems).length === 0) {
                showNotification('Cart is already empty', true);
                return;
            }
            
            if (confirm('Are you sure you want to remove all items from cart?')) {
                cartItems = {};
                document.getElementById('cartItemsList').innerHTML = '';
                updateCartDisplay();
                showNotification('All items removed from cart');
            }
        }

        function buyNowSingle(itemId) {
            if (cartItems[itemId]) {
                const item = cartItems[itemId];
                const total = item.price * item.quantity;
                showNotification(`Proceeding to buy ${item.quantity}x ${item.name} for Rs.${total}`);
                // Here you would typically redirect to payment page
            }
        }

        function continueShopping() {
            showNotification('Redirecting to product catalog...');
            // Here you would typically redirect to the products page
        }

        function proceedToCheckout() {
            if (Object.keys(cartItems).length === 0) {
                showNotification('Cart is empty. Add items before checkout', true);
                return;
            }
            
            const itemCount = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
            const total = Object.values(cartItems).reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            showNotification(`Proceeding to checkout with ${itemCount} items (Rs.${total})`);
            // Here you would typically redirect to checkout page
        }

        // Initialize cart display
        document.addEventListener('DOMContentLoaded', function() {
            Object.keys(cartItems).forEach(itemId => {
                updateItemDisplay(parseInt(itemId));
            });
            updateCartDisplay();
        });

        //Product Details Page
         function showSuccessPopup() {
            const overlayElement = document.getElementById('successPopupOverlay');
            overlayElement.style.display = 'flex';
            
            // Auto hide after 3 seconds
            setTimeout(function() {
                hideSuccessPopup();
            }, 3000);
        }

        function hideSuccessPopup() {
            const overlayElement = document.getElementById('successPopupOverlay');
            overlayElement.style.display = 'none';
        }

        // Close popup when clicking outside the modal
        document.getElementById('successPopupOverlay').addEventListener('click', function(event) {
            if (event.target === this) {
                hideSuccessPopup();
            }
        });

        // Add some interactive effects
        document.querySelector('.add-to-cart-button').addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 20px rgba(125, 94, 58, 0.3)';
        });

        document.querySelector('.add-to-cart-button').addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });

        document.querySelector('.buy-now-button').addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 20px rgba(138, 107, 71, 0.3)';
        });

        document.querySelector('.buy-now-button').addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });

        // Add click effect to buttons
        function addClickEffect(button) {
            button.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(0px) scale(0.98)';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = 'translateY(-2px) scale(1)';
            });
        }

        addClickEffect(document.querySelector('.add-to-cart-button'));
        addClickEffect(document.querySelector('.buy-now-button'));

        //Cakes page
         let currentAddedItem = '';

        function showCartSuccessModal(itemName = '') {
            currentAddedItem = itemName;
            const modalOverlay = document.getElementById('cakeCartModalOverlayElement');
            const messageText = document.getElementById('cartMessageText');
            
            if (itemName) {
                messageText.textContent = `${itemName} added to cart successfully!`;
            } else {
                messageText.textContent = 'Your Item added to cart';
            }
            
            modalOverlay.style.display = 'flex';
            
            // Auto hide after 4 seconds
            setTimeout(function() {
                hideCartSuccessModal();
            }, 4000);
        }

        function hideCartSuccessModal() {
            const modalOverlay = document.getElementById('cakeCartModalOverlayElement');
            modalOverlay.style.display = 'none';
        }

        // Close modal when clicking outside the popup box
        document.getElementById('cakeCartModalOverlayElement').addEventListener('click', function(event) {
            if (event.target === this) {
                hideCartSuccessModal();
            }
        });

        // Add interactive effects to buttons
        document.querySelectorAll('.product-add-to-cart-button').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 8px 25px rgba(125, 94, 58, 0.5)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
            });
        });

        // Category selection functionality
        document.querySelectorAll('.cake-category-item').forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all items
                document.querySelectorAll('.cake-category-item').forEach(i => i.classList.remove('active'));
                // Add active class to clicked item
                this.classList.add('active');
                
                // Here you can add logic to filter cakes based on category
                const category = this.getAttribute('data-category');
                console.log('Selected category:', category);
            });
        });

        // Filter functionality
        document.querySelectorAll('.custom-delivery-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                console.log('Filter changed:', this.id, this.checked);
                // Add your filter logic here
                updateFilters();
            });
        });

        function updateFilters() {
            const selectedFilters = {
                timeSlot: [],
                flavours: []
            };

            // Collect time slot filters
            ['sameDay', 'threeHours1', 'threeHours2', 'nextDay'].forEach(id => {
                const checkbox = document.getElementById(id);
                if (checkbox && checkbox.checked) {
                    selectedFilters.timeSlot.push(id);
                }
            });

            // Collect flavour filters
            ['blackforest', 'butterscotch', 'blueberry', 'chocoTruffle', 'pineapple', 'vanilla', 'strawberry', 'whiteForest', 'blackForest'].forEach(id => {
                const checkbox = document.getElementById(id);
                if (checkbox && checkbox.checked) {
                    selectedFilters.flavours.push(id);
                }
            });

            console.log('Applied filters:', selectedFilters);
            // Here you would implement the actual filtering logic
        }

        // Add smooth scrolling effect
        document.querySelectorAll('.cake-category-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelector('.birthday-section-wrapper').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add loading animation to buttons
        document.querySelectorAll('.product-add-to-cart-button').forEach(button => {
            button.addEventListener('click', function() {
                const originalText = this.textContent;
                this.textContent = 'Adding...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                }, 1500);
            });
        });