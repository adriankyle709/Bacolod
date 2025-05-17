   document.addEventListener('DOMContentLoaded', function() {
            const correctUser = "admin";
            const correctPass = "1234";
            const form = document.getElementById('loginForm');
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');

            form.addEventListener('submit', function(event) {
                event.preventDefault();
                
              
                const username = usernameInput.value.trim();
                const password = passwordInput.value.trim();
                
                if (username === correctUser && password === correctPass) {
                    
                    window.location.href = "homepage.html";
                } else {
                   
                    alert("Invalid username or password. Please try again.");
                    passwordInput.value = '';
                    usernameInput.focus();
                }
            });

            
            usernameInput.focus();
        });