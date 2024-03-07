/*
* Author Jakob Grätz
* Version 07-03-2024 (DD-MM-YYYY)
* (C) Jakob Grätz - 2024
*/

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
    // This is temporary. Maybe in the future I'd like to,
    // for example, save the mind map in localstorage or
    // even on a server.
    location.reload();
});

const root = document.getElementById("root");
const menu = document.getElementById("menu");

// Create connection dots for the root node
const topDot = document.getElementById("top-dot");
const rightDot = document.getElementById("right-dot");
const bottomDot = document.getElementById("bottom-dot");
const leftDot = document.getElementById("left-dot");

const connectionDots = [topDot, rightDot, bottomDot, leftDot];

root.addEventListener('mouseenter', () => {
    const rect = root.getBoundingClientRect();
    menu.style.left = `${rect.left + rect.width / 2}px`;
    menu.style.top = `${rect.bottom}px`;
    menu.style.display = 'block';
    menu.style.display = 'block';
    connectionDots.forEach(dot => dot.style.display = 'block');
});

root.addEventListener('mouseleave', () => {
    menu.style.display = 'none';
    connectionDots.forEach(dot => dot.style.display = 'none');
});

// Add event listeners for clicking and dragging connection dots
/*
connectionDots.forEach(dot => {
    dot.addEventListener('mousedown', (event) => {
        event.preventDefault();
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        const handleMouseMove = (event) => {
            const deltaX = event.clientX - mouseX;
            const deltaY = event.clientY - mouseY;
            
            dot.style.left = `${dot.offsetLeft + deltaX}px`;
            dot.style.top = `${dot.offsetTop + deltaY}px`;
            
            mouseX = event.clientX;
            mouseY = event.clientY;
        };
        
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });
});
*/