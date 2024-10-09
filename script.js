
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const serviceBoxes = document.querySelectorAll('.service-box');
//     serviceBoxes.forEach((box, index) => {
//       box.style.transitionDelay = `${index * 100}ms`;
//       box.classList.add('aos-init', 'aos-animate');
//     });
//   });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Message received:', message);

    // Your asynchronous operation here
    performAsyncOperation(message)
        .then(response => {
            sendResponse({ result: response });
        })
        .catch(error => {
            console.error('Error:', error);
            sendResponse({ error: error.message });
        });

    // Return true to indicate you want to send a response asynchronously
    return true;
});

function performAsyncOperation(message) {
    // Example asynchronous operation
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (message.isValid) {
                resolve('Success');
            } else {
                reject(new Error('Invalid message'));
            }
        }, 1000);
    });
}
