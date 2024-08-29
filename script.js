window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const audio = document.getElementById('mySong');
    const bubblesContainer = document.getElementById('bubbles-container');

    
    audio.addEventListener('canplaythrough', () => {
        audio.play().catch(error => {
            console.error('Audio playback failed:', error);
        });
    });

    
    setTimeout(() => {
        loader.style.opacity = '0'; 
        mainContent.classList.remove('hidden'); 
        mainContent.style.opacity = '1'; 
    }, 1000); 

    
    const messageElement = document.getElementById('animated-message');
    const message = "Happy Birthday!! my favorite person of my life. Wishing you all the happiness in the world comes to uhh! I hope 20's treats u better and rest of life will come with happiness 😊.....   Thank you for being in my life. Me uhh ko bhut pareshan krte ☹  But still uhh kuch bhi nahi bolte. How sweet uhhh r!!  And I am proud of uhh Simran. You do a lot of hard work and still say it's nothing. Sath me safar krte if you like to do that....  And my love is for uhh and only uhh my jaan❤️. Love youu bhut sara meri pyari simran 😘😘 I wish I'm there with uhh at this moment to celebrate together. Once again, very happy birthday sweetheart ❤ 💋💋💋";
    const words = message.split(' ');

    let index = 0;

    function addWord() {
        if (index < words.length) {
            messageElement.textContent += (index > 0 ? ' ' : '') + words[index];
            index++;
            setTimeout(addWord, 500); 
        }
    }

    addWord();

 
    const numBubbles = 30; 

    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const size = Math.random() * 50 + 10; 
        const duration = Math.random() * 10 + 5; 

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${duration}s`;

        bubblesContainer.appendChild(bubble);
    }
});
