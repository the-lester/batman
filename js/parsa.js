document.addEventListener('DOMContentLoaded', function() {
    // Typewriter Effect
    const text = "gothum hero";
    const typewriterElement = document.getElementById('typewriter-text');
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        } else {
            typewriterElement.style.borderRight = 'none';
        }
    }
    
    setTimeout(typeWriter, 500);
    
    // Mild Parallax Effect
    const body = document.querySelector('.body1');
    const leftSide = document.querySelector('.left_side');
    const center = document.querySelector('.center');
    const right = document.querySelector('.right');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Reduced movement values (smaller numbers for milder effect)
        const leftMoveX = (x - 0.5) * 15;  // Reduced from 30
        const leftMoveY = (y - 0.5) * 8;   // Reduced from 15
        
        const centerMoveX = (x - 0.5) * -10; // Reduced from -20
        const centerMoveY = (y - 0.5) * -5;  // Reduced from -10
        
        const rightMoveX = (x - 0.5) * 20;  // Reduced from 40
        const rightMoveY = (y - 0.5) * 10;  // Reduced from 20
        
        // Apply transformations
        leftSide.style.transform = `translate(${leftMoveX}px, ${leftMoveY}px)`;
        center.style.transform = `translate(${centerMoveX}px, ${centerMoveY}px)`;
        right.style.transform = `translate(${rightMoveX}px, ${rightMoveY}px)`;
        
        // Reduced tilt effect
        const tiltX = (y - 0.5) * 5;  // Reduced from 10
        const tiltY = (x - 0.5) * -5; // Reduced from -10
        body.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
    
    // Reset position when mouse leaves
    document.addEventListener('mouseleave', () => {
        leftSide.style.transform = 'translate(0, 0)';
        center.style.transform = 'translate(0, 0)';
        right.style.transform = 'translate(0, 0)';
        body.style.transform = 'rotateX(0) rotateY(0)';
    });
});