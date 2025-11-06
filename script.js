        function checkGate() {
            const dobInput = document.getElementById('dobInput');
            const dob = dobInput.value;
            const errorMsg = document.getElementById('errorMsg');

            if (!dob) {
                errorMsg.textContent = 'Please enter the birthday passcode';
                playSound('error');
                return;
            }

            playSound('unlock');
            
            const gatePage = document.getElementById('gatePage');
            gatePage.classList.add('slide-out');
            
            setTimeout(() => {
                playSound('vault-open');
            }, 300);
            
            setTimeout(() => {
                document.getElementById('birthdayPage').classList.add('active');
                initBirthdayPage();
                createConfetti();
                createParticles();
                createSnowflakes();
                setTimeout(() => playSound('celebration'), 800);
            }, 200);
            
            setTimeout(() => {
                gatePage.style.display = 'none';
            }, 1500);
        }

        function playSound(type) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            switch(type) {
                case 'error':
                    oscillator.frequency.value = 200;
                    oscillator.type = 'square';
                    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.2);
                    break;
                    
                case 'unlock':
                    oscillator.frequency.value = 800;
                    oscillator.type = 'sine';
                    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.3);
                    break;
                    
                case 'vault-open':
                    oscillator.frequency.value = 150;
                    oscillator.type = 'sawtooth';
                    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
                    gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.5);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.2);
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 1.2);
                    break;
                    
                case 'celebration':
                    [523.25, 587.33, 659.25, 783.99].forEach((freq, index) => {
                        const osc = audioContext.createOscillator();
                        const gain = audioContext.createGain();
                        osc.connect(gain);
                        gain.connect(audioContext.destination);
                        osc.frequency.value = freq;
                        osc.type = 'sine';
                        gain.gain.setValueAtTime(0.15, audioContext.currentTime + index * 0.1);
                        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + index * 0.1 + 0.3);
                        osc.start(audioContext.currentTime + index * 0.1);
                        osc.stop(audioContext.currentTime + index * 0.1 + 0.3);
                    });
                    break;
            }
        }

        function initBirthdayPage() {
            setTimeout(() => {
                const lines = document.querySelectorAll('.hero-title .line');
                lines.forEach(line => line.classList.add('animate'));
            }, 1000);

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