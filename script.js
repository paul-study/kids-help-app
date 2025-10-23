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
        'Crisis Support: Call or text 988');
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
    'font-size: 14px; color: #6366f1;');
console.log('%cCall or text 988 (Suicide & Crisis Lifeline)', 
    'font-size: 14px; font-weight: bold; color: #ec4899;');
