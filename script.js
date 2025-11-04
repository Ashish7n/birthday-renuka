
        // Generate random math question
        let correctAnswer;
        function generateMathQuestion() {
            const num1 = Math.floor(Math.random() * 9) + 1;
            const num2 = Math.floor(Math.random() * 9) + 1;
            const operation = Math.random() > 0.5 ? '+' : '-';
            
            if (operation === '+') {
                correctAnswer = num1 + num2;
                document.getElementById('mathQuestion').textContent = `What is ${num1} + ${num2}?`;
            } else {
                if (num1 < num2) {
                    correctAnswer = num2 - num1;
                    document.getElementById('mathQuestion').textContent = `What is ${num2} - ${num1}?`;
                } else {
                    correctAnswer = num1 - num2;
                    document.getElementById('mathQuestion').textContent = `What is ${num1} - ${num2}?`;
                }
            }
        }

        generateMathQuestion();

        function checkGate() {
            const dob = document.getElementById('dobInput').value;
            const answer = parseInt(document.getElementById('mathAnswer').value);
            const errorMsg = document.getElementById('errorMsg');

            if (!dob) {
                errorMsg.textContent = 'Please enter your date of birth';
                return;
            }

            if (isNaN(answer)) {
                errorMsg.textContent = 'Please answer the math question';
                return;
            }

            if (answer !== correctAnswer) {
                errorMsg.textContent = 'Incorrect answer. Try again!';
                return;
            }

            // Success - trigger slide animation
            const gatePage = document.getElementById('gatePage');
            gatePage.classList.add('slide-out');
            
            // Show birthday page with zoom effect after slide starts
            setTimeout(() => {
                document.getElementById('birthdayPage').classList.add('active');
                initBirthdayPage();
                createConfetti();
                createParticles();
                createSnowflakes();
            }, 200);
            
            // Remove gate page after animation completes
            setTimeout(() => {
                gatePage.style.display = 'none';
            }, 1500);
        }

        function initBirthdayPage() {
            // Animate hero title lines
            setTimeout(() => {
                const lines = document.querySelectorAll('.hero-title .line');
                lines.forEach(line => line.classList.add('animate'));
            }, 1000);

            // Animate wish items on scroll/load
            setTimeout(() => {
                const wishItems = document.querySelectorAll('.wish-item');
                wishItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 200);
                });
            }, 2000);
        }

        function createConfetti() {
            const colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe', '#1e40af'];
            const birthdayPage = document.getElementById('birthdayPage');
            
            for (let i = 0; i < 60; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.animationDuration = (Math.random() * 4 + 3) + 's';
                    confetti.style.animationDelay = Math.random() * 2 + 's';
                    confetti.style.width = (Math.random() * 8 + 6) + 'px';
                    confetti.style.height = (Math.random() * 8 + 6) + 'px';
                    birthdayPage.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 8000);
                }, i * 50);
            }
            
            // Continuously add new confetti
            setInterval(() => {
                for (let i = 0; i < 2; i++) {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.animationDuration = (Math.random() * 4 + 3) + 's';
                    confetti.style.width = (Math.random() * 8 + 6) + 'px';
                    confetti.style.height = (Math.random() * 8 + 6) + 'px';
                    birthdayPage.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 8000);
                }
            }, 2000);
        }

        function createParticles() {
            const container = document.getElementById('particlesContainer');
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                container.appendChild(particle);
            }
        }

        function createSnowflakes() {
            const snowContainer = document.getElementById('snowContainer');
            const snowflakes = ['❄', '❅', '❆'];
            
            // Create initial snowflakes
            for (let i = 0; i < 40; i++) {
                setTimeout(() => {
                    const snowflake = document.createElement('div');
                    snowflake.className = 'snowflake';
                    snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
                    snowflake.style.left = Math.random() * 100 + '%';
                    snowflake.style.fontSize = (Math.random() * 0.8 + 0.5) + 'em';
                    snowflake.style.animationDelay = Math.random() * 5 + 's';
                    snowflake.style.animationDuration = (Math.random() * 8 + 10) + 's';
                    
                    const drift = (Math.random() - 0.5) * 200;
                    snowflake.style.setProperty('--drift', drift + 'px');
                    
                    snowContainer.appendChild(snowflake);
                    
                    setTimeout(() => snowflake.remove(), 20000);
                }, i * 200);
            }
            
            // Continuously add new snowflakes
            setInterval(() => {
                for (let i = 0; i < 2; i++) {
                    const snowflake = document.createElement('div');
                    snowflake.className = 'snowflake';
                    snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
                    snowflake.style.left = Math.random() * 100 + '%';
                    snowflake.style.fontSize = (Math.random() * 0.8 + 0.5) + 'em';
                    snowflake.style.animationDuration = (Math.random() * 8 + 10) + 's';
                    
                    const drift = (Math.random() - 0.5) * 200;
                    snowflake.style.setProperty('--drift', drift + 'px');
                    
                    snowContainer.appendChild(snowflake);
                    
                    setTimeout(() => snowflake.remove(), 20000);
                }
            }, 3000);
        }