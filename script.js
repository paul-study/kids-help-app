// Quote Carousel
let currentQuoteIndex = 0;
const quoteCards = document.querySelectorAll('.quote-card');

function showQuote(index) {
    quoteCards.forEach(card => card.classList.remove('active'));
    quoteCards[index].classList.add('active');
}

function nextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quoteCards.length;
    showQuote(currentQuoteIndex);
}

function previousQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quoteCards.length) % quoteCards.length;
    showQuote(currentQuoteIndex);
}

// Auto-rotate quotes every 8 seconds
setInterval(nextQuote, 8000);

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

function closeMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navbar.contains(event.target)) {
            closeMobileMenu();
        }
    }
});

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Breathing Exercise
function startBreathing() {
    const modal = document.getElementById('breathing-modal');
    modal.style.display = 'block';
}

function startBreathingAnimation() {
    const circle = document.getElementById('breathing-circle');
    const instruction = document.getElementById('breathing-instruction');
    let cycle = 0;
    
    function breatheCycle() {
        // Inhale
        instruction.textContent = 'Breathe In... 1, 2, 3, 4';
        circle.classList.remove('exhale');
        circle.classList.add('inhale');
        
        setTimeout(() => {
            // Hold
            instruction.textContent = 'Hold... 1, 2, 3, 4';
        }, 4000);
        
        setTimeout(() => {
            // Exhale
            instruction.textContent = 'Breathe Out... 1, 2, 3, 4';
            circle.classList.remove('inhale');
            circle.classList.add('exhale');
        }, 8000);
        
        setTimeout(() => {
            cycle++;
            if (cycle < 5) {
                breatheCycle();
            } else {
                instruction.textContent = 'Great job! You completed 5 breathing cycles. 🌟';
            }
        }, 12000);
    }
    
    breatheCycle();
}

// Journal
function openJournal() {
    const modal = document.getElementById('journal-modal');
    modal.style.display = 'block';
    
    // Load saved journal entry if exists
    const savedEntry = localStorage.getItem('journalEntry');
    if (savedEntry) {
        document.getElementById('journal-text').value = savedEntry;
    }
}

function saveJournal() {
    const journalText = document.getElementById('journal-text').value;
    localStorage.setItem('journalEntry', journalText);
    alert('Your journal entry has been saved! 📝');
}

// Close Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Art Ideas
function showArtIdeas() {
    const ideas = [
        '🎨 Draw your feelings using only colors and shapes',
        '✂️ Create a collage from magazine pictures',
        '🖌️ Paint a picture of your safe place',
        '📝 Write and illustrate a short comic',
        '🌈 Make a mood board with colors that represent your week',
        '✨ Create origami - folding helps calm the mind',
        '🎭 Design your own superhero character',
        '🌸 Draw or paint nature - flowers, trees, landscapes'
    ];
    
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    alert(randomIdea);
}

// Exercise Ideas
function showExercises() {
    const exercises = [
        '🏃 Go for a 10-minute walk outside',
        '💃 Dance to your favorite song',
        '🧘 Try 5 minutes of stretching',
        '⚽ Play with a ball - bounce, throw, kick',
        '🤸 Do 10 jumping jacks',
        '🚴 Ride a bike around your neighborhood',
        '🏊 If possible, go swimming',
        '🌳 Climb a tree or playground equipment safely'
    ];
    
    const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
    alert(randomExercise);
}

// Mindfulness Exercise
function startMindfulness() {
    alert('🧘 Mindfulness Exercise:\n\n' +
        'Take a moment to notice:\n' +
        '👀 5 things you can SEE\n' +
        '✋ 4 things you can TOUCH\n' +
        '👂 3 things you can HEAR\n' +
        '👃 2 things you can SMELL\n' +
        '👅 1 thing you can TASTE\n\n' +
        'This helps bring you to the present moment.');
}

// Talking Tips
function showTalkingTips() {
    alert('💬 Tips for Talking About Your Feelings:\n\n' +
        '1. Find someone you trust\n' +
        '2. Choose a quiet, comfortable place\n' +
        '3. It\'s okay to cry\n' +
        '4. You don\'t have to explain everything at once\n' +
        '5. Write it down first if that helps\n' +
        '6. Remember: asking for help is a sign of strength\n\n' +
        'Crisis Support:\n' +
        '• Call or text 1737 (Need to Talk?)\n' +
        '• Call 0508 828 865 (Lifeline)\n' +
        '• Youthline: 0800 376 633 or text 234');
}

// Gratitude List
function saveGratitude() {
    const inputs = document.querySelectorAll('.gratitude-input');
    const gratitudeList = [];
    
    inputs.forEach(input => {
        if (input.value.trim()) {
            gratitudeList.push(input.value.trim());
        }
    });
    
    if (gratitudeList.length > 0) {
        // Save to localStorage
        const today = new Date().toDateString();
        localStorage.setItem('gratitude_' + today, JSON.stringify(gratitudeList));
        
        // Show success message
        alert('✨ Your gratitude list has been saved!\n\nFocusing on gratitude helps rewire our brains for positivity. Great job!');
        
        // Clear inputs
        inputs.forEach(input => input.value = '');
    } else {
        alert('Please write at least one thing you\'re grateful for! 🙏');
    }
}

// Mood Tracker
function selectMood(mood) {
    // Remove selected class from all buttons
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to clicked button
    event.target.classList.add('selected');
    
    const messages = {
        'great': '🌟 That\'s wonderful! Keep spreading that positive energy!',
        'good': '😊 That\'s good to hear! Hope your day stays bright!',
        'okay': '👍 Some days are just okay, and that\'s perfectly fine. Be kind to yourself.',
        'sad': '💙 I\'m sorry you\'re feeling sad. It\'s okay to feel this way. Remember, feelings are temporary. Would you like to try a coping strategy?',
        'stressed': '🫂 Stress can be overwhelming. Take some deep breaths. You\'ve got this! Try the breathing exercise above.'
    };
    
    const messageDiv = document.getElementById('mood-message');
    messageDiv.textContent = messages[mood];
    
    // Save mood to localStorage
    const today = new Date().toDateString();
    localStorage.setItem('mood_' + today, mood);
}

// Goal Setting
function setGoal() {
    const goalInput = document.getElementById('daily-goal');
    const goalDisplay = document.getElementById('goal-display');
    
    if (goalInput.value.trim()) {
        const goal = goalInput.value.trim();
        
        // Save to localStorage
        const today = new Date().toDateString();
        localStorage.setItem('goal_' + today, goal);
        
        // Display the goal
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = `✅ Your goal: "${goal}"\n\nYou can do this! Take it one step at a time.`;
        goalDisplay.innerHTML = '';
        goalDisplay.appendChild(successDiv);
        
        goalInput.value = '';
    } else {
        alert('Please enter a goal! 🎯');
    }
}

// Load saved goal on page load
window.addEventListener('DOMContentLoaded', () => {
    const today = new Date().toDateString();
    const savedGoal = localStorage.getItem('goal_' + today);
    
    if (savedGoal) {
        const goalDisplay = document.getElementById('goal-display');
        const savedDiv = document.createElement('div');
        savedDiv.style.cssText = 'background: rgba(255, 255, 255, 0.3); padding: 1rem; border-radius: 10px;';
        savedDiv.textContent = `✅ Today's goal: "${savedGoal}"`;
        goalDisplay.innerHTML = '';
        goalDisplay.appendChild(savedDiv);
    }
});

// Daily Affirmations
function getAffirmation() {
    const affirmations = [
        '💪 You are stronger than you think.',
        '🌟 You have the power to create positive change.',
        '💖 You are worthy of love and respect.',
        '🌈 Your feelings are valid and important.',
        '✨ You are doing better than you realize.',
        '🦋 You have survived 100% of your worst days.',
        '🌸 You are enough, just as you are.',
        '🎯 You have the courage to keep going.',
        '💫 Your story isn\'t over yet.',
        '🌺 You matter, and your life has purpose.',
        '🔥 You are capable of amazing things.',
        '🌻 Every day is a fresh start.',
        '🏆 You are braver than you believe.',
        '💝 You deserve happiness and peace.',
        '🎨 Your uniqueness is your superpower.',
        '🌙 It\'s okay to ask for help.',
        '☀️ You are growing and learning every day.',
        '🦋 You have the strength to overcome challenges.',
        '💚 You are not defined by your past.',
        '🌟 Your potential is limitless.'
    ];
    
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    const display = document.getElementById('affirmation-display');
    
    display.style.animation = 'none';
    setTimeout(() => {
        display.style.animation = 'fadeIn 0.5s';
        display.textContent = randomAffirmation;
    }, 10);
}

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }
});

// Console message
console.log('%c💚 Remember: You are not alone. You matter. 💚', 
    'font-size: 20px; font-weight: bold; color: #10b981;');
console.log('%cIf you\'re in crisis, please reach out:', 
    'font-size: 14px; color: #dc2626;');
console.log('%cCall or text 1737 (Need to Talk?) or 0508 828 865 (Lifeline)', 
    'font-size: 14px; font-weight: bold; color: #e11d48;');

// ========== NEW FEATURES ==========

// Worry Box
let worries = JSON.parse(localStorage.getItem('worries')) || [];

function openWorryBox() {
    const modal = document.getElementById('worry-modal');
    modal.style.display = 'block';
    displayWorries();
}

function addWorry() {
    const worryText = document.getElementById('worry-text').value.trim();
    if (worryText) {
        const worry = {
            id: Date.now(),
            text: worryText,
            date: new Date().toLocaleDateString()
        };
        worries.push(worry);
        localStorage.setItem('worries', JSON.stringify(worries));
        document.getElementById('worry-text').value = '';
        displayWorries();
    } else {
        alert('Please write down your worry first.');
    }
}

function displayWorries() {
    const worryList = document.getElementById('worry-list');
    if (worries.length === 0) {
        worryList.innerHTML = '<p style="text-align:center; color: var(--text-medium);">Your worry box is empty. That\'s great!</p>';
        return;
    }
    
    worryList.innerHTML = worries.map(worry => `
        <div class="worry-item">
            <p class="worry-text"><strong>${worry.date}:</strong> ${worry.text}</p>
            <div class="worry-actions">
                <button class="worry-btn" onclick="releaseWorry(${worry.id})">Let it go 🎈</button>
                <button class="worry-btn delete" onclick="deleteWorry(${worry.id})">Delete 🗑️</button>
            </div>
        </div>
    `).join('');
}

function releaseWorry(id) {
    if (confirm('Are you ready to let this worry go? 🎈')) {
        deleteWorry(id);
        alert('You\'ve released this worry! Remember, many worries fade with time. 🌈');
    }
}

function deleteWorry(id) {
    worries = worries.filter(w => w.id !== id);
    localStorage.setItem('worries', JSON.stringify(worries));
    displayWorries();
}

// Virtual Pet
let petHealth = parseInt(localStorage.getItem('petHealth')) || 80;
let petInteractions = parseInt(localStorage.getItem('petInteractions')) || 0;

function updatePetDisplay() {
    const petMood = document.getElementById('pet-mood');
    const healthBar = document.getElementById('pet-health');
    
    if (petHealth > 70) {
        petMood.textContent = 'Happy to see you! 😊';
    } else if (petHealth > 40) {
        petMood.textContent = 'Could use some attention...';
    } else {
        petMood.textContent = 'Needs your care! 🥺';
    }
    
    healthBar.style.width = petHealth + '%';
}

function interactWithPet() {
    petHealth = Math.min(100, petHealth + 10);
    petInteractions++;
    localStorage.setItem('petHealth', petHealth);
    localStorage.setItem('petInteractions', petInteractions);
    
    const petDisplay = document.getElementById('pet-display');
    petDisplay.style.animation = 'none';
    setTimeout(() => {
        petDisplay.style.animation = 'petBounce 2s infinite';
    }, 10);
    
    updatePetDisplay();
    checkAchievements();
    
    const messages = [
        'Buddy loves playing with you! 🎾',
        'Woof! That was fun! 🐕',
        'You\'re the best! *tail wag* 🐾',
        'Buddy feels so happy! ❤️',
        'More play time! *jumps excitedly* 🎉'
    ];
    
    alert(messages[Math.floor(Math.random() * messages.length)]);
}

// Decrease pet health over time (every day)
function checkPetHealth() {
    const lastCheck = localStorage.getItem('lastPetCheck');
    const today = new Date().toDateString();
    
    if (lastCheck !== today) {
        petHealth = Math.max(20, petHealth - 5);
        localStorage.setItem('petHealth', petHealth);
        localStorage.setItem('lastPetCheck', today);
        updatePetDisplay();
    }
}

// Emotion Wheel
function openEmotionWheel() {
    const modal = document.getElementById('emotion-modal');
    modal.style.display = 'block';
}

function selectEmotion(emotion, category) {
    const response = document.getElementById('emotion-response');
    
    const emotionResponses = {
        'joyful': {
            message: 'That\'s wonderful! 🌟 Cherish this feeling. What made you feel joyful today?',
            coping: ['Share your joy with someone', 'Write about what made you happy', 'Dance or move to celebrate']
        },
        'excited': {
            message: 'How exciting! 🎉 It\'s great to have things to look forward to!',
            coping: ['Channel that energy into something creative', 'Share your excitement', 'Make plans for what excites you']
        },
        'content': {
            message: 'Peaceful contentment is a gift. 😌 Enjoy this moment.',
            coping: ['Practice gratitude', 'Savor the present moment', 'Reflect on what brings you peace']
        },
        'sad': {
            message: 'It\'s okay to feel sad. 💙 Your feelings are valid.',
            coping: ['Write in your journal', 'Talk to someone you trust', 'Try the breathing exercise', 'Remember: this feeling is temporary']
        },
        'lonely': {
            message: 'Loneliness is hard. 🫂 You\'re not alone in feeling alone.',
            coping: ['Reach out to someone', 'Join an online community', 'Call a hotline (988)', 'Spend time with your support pet']
        },
        'disappointed': {
            message: 'Disappointment hurts. 😞 It\'s okay to feel let down.',
            coping: ['Acknowledge your feelings', 'Adjust expectations', 'Look for lessons learned', 'Practice self-compassion']
        },
        'angry': {
            message: 'Anger is a normal emotion. 😠 Let\'s find healthy ways to express it.',
            coping: ['Physical exercise', 'Write angry thoughts down', 'Punch a pillow', 'Take deep breaths', 'Take a cold shower']
        },
        'frustrated': {
            message: 'Frustration shows you care. 😤 Channel it positively.',
            coping: ['Take a break', 'Try a different approach', 'Ask for help', 'Do something you\'re good at']
        },
        'annoyed': {
            message: 'Small irritations add up. 😒 Take a moment for yourself.',
            coping: ['Step away from the situation', 'Count to 10', 'Listen to calming music', 'Do a grounding exercise']
        },
        'anxious': {
            message: 'Anxiety is uncomfortable but manageable. 😰 You can get through this.',
            coping: ['5-4-3-2-1 grounding technique', 'Breathing exercises', 'Progressive muscle relaxation', 'Talk to someone', 'Write down your worries']
        },
        'worried': {
            message: 'Worry is your mind trying to protect you. 😟 Let\'s find perspective.',
            coping: ['Use the Worry Box', 'Ask: "Is this in my control?"', 'Set worry time limits', 'Focus on what you can do now']
        },
        'afraid': {
            message: 'Fear is real, but you are safe right now. 😨 Take a breath.',
            coping: ['Ground yourself in the present', 'Name what you see around you', 'Call someone', 'Use the crisis plan if needed']
        }
    };
    
    const emotionData = emotionResponses[emotion];
    response.innerHTML = `
        <h3>${emotionData.message}</h3>
        <h4 style="margin-top: 1rem;">Coping Strategies:</h4>
        <ul style="text-align: left; margin-left: 2rem;">
            ${emotionData.coping.map(c => `<li>${c}</li>`).join('')}
        </ul>
    `;
    
    // Save emotion to tracking
    const today = new Date().toDateString();
    localStorage.setItem('emotion_' + today, emotion);
}

// Crisis Safety Plan
function openCrisisPlan() {
    const modal = document.getElementById('crisis-modal');
    modal.style.display = 'block';
    
    // Load saved data
    const savedPeople = localStorage.getItem('supportPeople');
    const savedReasons = localStorage.getItem('reasonsToLive');
    
    if (savedPeople) {
        document.getElementById('support-people').value = savedPeople;
    }
    if (savedReasons) {
        document.getElementById('reasons-to-live').value = savedReasons;
    }
}

function saveSupportPeople() {
    const text = document.getElementById('support-people').value;
    localStorage.setItem('supportPeople', text);
    alert('✅ Your support people have been saved!');
}

function saveReasons() {
    const text = document.getElementById('reasons-to-live').value;
    localStorage.setItem('reasonsToLive', text);
    alert('✅ Your reasons have been saved! Remember them in difficult times. 💚');
}

// Achievement System
const achievements = [
    { id: 'first_journal', icon: '📝', name: 'First Entry', desc: 'Wrote in journal', check: () => localStorage.getItem('journalEntry') },
    { id: 'first_gratitude', icon: '🙏', name: 'Grateful Heart', desc: 'Completed gratitude list', check: () => {
        const today = new Date().toDateString();
        return localStorage.getItem('gratitude_' + today);
    }},
    { id: 'first_mood', icon: '😊', name: 'Mood Tracker', desc: 'Tracked your mood', check: () => {
        const today = new Date().toDateString();
        return localStorage.getItem('mood_' + today);
    }},
    { id: 'pet_lover', icon: '🐾', name: 'Pet Lover', desc: 'Played with pet 10 times', check: () => petInteractions >= 10 },
    { id: 'worry_releaser', icon: '🎈', name: 'Worry Releaser', desc: 'Used the worry box', check: () => localStorage.getItem('worries') },
    { id: 'breath_master', icon: '🌬️', name: 'Breath Master', desc: 'Completed breathing exercise', check: () => localStorage.getItem('breathingComplete') },
    { id: 'week_warrior', icon: '💪', name: 'Week Warrior', desc: '7 days of use', check: () => {
        const daysUsed = JSON.parse(localStorage.getItem('daysUsed') || '[]');
        return daysUsed.length >= 7;
    }},
    { id: 'goal_setter', icon: '🎯', name: 'Goal Setter', desc: 'Set a daily goal', check: () => {
        const today = new Date().toDateString();
        return localStorage.getItem('goal_' + today);
    }}
];

function checkAchievements() {
    const badgesContainer = document.getElementById('badges-container');
    if (!badgesContainer) return;
    
    const unlockedBadges = JSON.parse(localStorage.getItem('unlockedBadges') || '[]');
    
    badgesContainer.innerHTML = achievements.map(achievement => {
        const isUnlocked = achievement.check() || unlockedBadges.includes(achievement.id);
        
        if (isUnlocked && !unlockedBadges.includes(achievement.id)) {
            unlockedBadges.push(achievement.id);
            localStorage.setItem('unlockedBadges', JSON.stringify(unlockedBadges));
        }
        
        return `
            <div class="badge ${isUnlocked ? '' : 'locked'}">
                <div class="badge-icon">${achievement.icon}</div>
                <div class="badge-name">${achievement.name}</div>
                <div class="badge-desc">${achievement.desc}</div>
            </div>
        `;
    }).join('');
}

// Sleep Tracker
function rateSleep(rating) {
    document.querySelectorAll('.rating-btn').forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
    
    const messages = {
        1: '😫 Poor sleep can be tough. Try to keep a consistent bedtime and avoid screens before bed.',
        2: '😐 Sleep was okay. Consider what might improve it - cooler room, darker space, or relaxation before bed.',
        3: '😊 Good sleep! You\'re taking care of yourself. Keep up those healthy sleep habits!',
        4: '😄 Great sleep! You must feel refreshed and ready for the day! 🌟'
    };
    
    const messageDiv = document.getElementById('sleep-message');
    messageDiv.textContent = messages[rating];
    
    // Save sleep rating
    const today = new Date().toDateString();
    localStorage.setItem('sleep_' + today, rating);
    checkAchievements();
}

// Daily Win Log
let wins = JSON.parse(localStorage.getItem('todayWins') || '[]');

function addWin() {
    const winInput = document.getElementById('win-input');
    const winText = winInput.value.trim();
    
    if (winText) {
        wins.push({
            id: Date.now(),
            text: winText,
            date: new Date().toLocaleTimeString()
        });
        
        localStorage.setItem('todayWins', JSON.stringify(wins));
        winInput.value = '';
        displayWins();
    } else {
        alert('Please write your win first! 🎉');
    }
}

function displayWins() {
    const winsList = document.getElementById('wins-list');
    if (!winsList) return;
    
    if (wins.length === 0) {
        winsList.innerHTML = '<p style="text-align:center; color: var(--text-medium); font-size: 0.9rem;">Add your first win of the day!</p>';
        return;
    }
    
    winsList.innerHTML = wins.map(win => `
        <div class="win-item">
            <span>${win.text}</span>
            <button class="win-delete" onclick="deleteWin(${win.id})">×</button>
        </div>
    `).join('');
}

function deleteWin(id) {
    wins = wins.filter(w => w.id !== id);
    localStorage.setItem('todayWins', JSON.stringify(wins));
    displayWins();
}

// Breathing Game
let breathingGameActive = false;

function startBreathingGame() {
    if (breathingGameActive) return;
    
    breathingGameActive = true;
    const ball = document.getElementById('breathing-ball');
    const instruction = document.getElementById('breathing-game-instruction');
    let cycle = 0;
    
    function gameCycle() {
        // Inhale - ball goes up
        instruction.textContent = 'Breathe IN slowly... (watch the ball rise)';
        ball.className = 'breathing-ball animate-up';
        
        setTimeout(() => {
            // Exhale - ball goes down
            instruction.textContent = 'Breathe OUT slowly... (watch the ball fall)';
            ball.className = 'breathing-ball animate-down';
        }, 4000);
        
        setTimeout(() => {
            cycle++;
            if (cycle < 5) {
                gameCycle();
            } else {
                instruction.textContent = '🎉 Great job! You completed 5 breathing cycles!';
                ball.className = 'breathing-ball';
                breathingGameActive = false;
                localStorage.setItem('breathingComplete', 'true');
                checkAchievements();
            }
        }, 8000);
    }
    
    gameCycle();
}

// Track days used
function trackDayUsed() {
    const today = new Date().toDateString();
    let daysUsed = JSON.parse(localStorage.getItem('daysUsed') || '[]');
    
    if (!daysUsed.includes(today)) {
        daysUsed.push(today);
        localStorage.setItem('daysUsed', JSON.stringify(daysUsed));
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    // Existing code
    const today = new Date().toDateString();
    const savedGoal = localStorage.getItem('goal_' + today);
    
    if (savedGoal) {
        const goalDisplay = document.getElementById('goal-display');
        if (goalDisplay) {
            const savedDiv = document.createElement('div');
            savedDiv.style.cssText = 'background: rgba(255, 255, 255, 0.3); padding: 1rem; border-radius: 10px;';
            savedDiv.textContent = `✅ Today's goal: "${savedGoal}"`;
            goalDisplay.innerHTML = '';
            goalDisplay.appendChild(savedDiv);
        }
    }
    
    // New initialization
    trackDayUsed();
    checkPetHealth();
    updatePetDisplay();
    checkAchievements();
    displayWins();
});

