const scenes = [
    {
        images: [],
        text: "15 years ago...",
        textStyle: "top: 50%; left: 50%; translate: -50% -50%;",
        autoSwitch: true
    },
    {
        images: [
            { id: 'img1', src: 'images/discussion_bg_2.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: 'A group of people were discussing about death penalty and long-term imprisonment.',
        textStyle: 'bottom: 10%; left: 10%; right: 10%;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'img1', src: 'images/discussion_bg_2.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' },
            { id: 'img2', src: 'images/example_2.png', style: 'right: 10%; top: 20%;' }
        ],
        text: 'The banker said that instant death was more humane...',
        textStyle: 'bottom: 10%; left: 10%; right: 10%;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'img1', src: 'images/discussion_bg_2.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' },
            { id: 'img2', src: 'images/example_2.png', style: 'right: 10%; top: 20%;' }
        ],
        text: '...but the lawyer thinks that it\'s always better to live than to die.',
        textStyle: 'bottom: 10%; left: 10%; right: 10%;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'img1', src: 'images/discussion_bg_2.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' },
            { id: 'img2', src: 'images/example_2.png', style: 'right: 10%; top: 20%;' }
        ],
        text: '“It’s not true! I’ll bet you two millions you wouldn’t stay in solitary confinement for five years.” The banker said.',
        textStyle: 'bottom: 10%; left: 10%; right: 10%;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'img1', src: 'images/discussion_bg_2.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' },
            { id: 'img2', src: 'images/example_2.png', style: 'right: 10%; top: 20%;' }
        ],
        text: 'It is so decided. The lawyer would be confined in the banker for 15 years, and after that, the banker would pay 2 millions.',
        textStyle: 'bottom: 10%; left: 10%; right: 10%;',
        autoSwitch: false
    },
    {
        images: [],
        text: "And so, the lawyer wept, <br>feeling contempt about losing stocks the first time ever.",
        textStyle: "top: 50%; left: 50%; translate: -50% -50%; max-width: unset;",
        autoSwitch: true
    },
    {
        images: [],
        text: "The lawyer left before the fixed time, <br>the two millions were unpaid, <br>and the letter was secured in a fireproof safe.",
        textStyle: "top: 50%; left: 50%; translate: -50% -50%; max-width: unset;",
        autoSwitch: true
    },
    // Add more scenes here
];

let currentSceneIndex = 0;
const sceneDiv = document.getElementById('scene');
const continueText = document.getElementById('continue-text');
let switching = false;

function showScene(index) {
    switching = true;
    continueText.style.display = 'none'; // Hide continue text when showing a scene
    const scene = scenes[index];
    if (!scene) {
        // End of story
        continueText.style.display = 'block';
        switching = false;
        return;
    }

    // Get current images
    const currentImages = Array.from(sceneDiv.querySelectorAll('.scene-image'));
    const currentImageIds = currentImages.map(img => img.id);

    // Fade out current
    currentImages.forEach(img => {
        if (!scene.images.some(i => i.id === img.id)) {
            img.classList.add('fade-out');
        }
    });
    const textDiv = sceneDiv.querySelector('.scene-text');
    if (textDiv) textDiv.classList.add('fade-out');

    // After fade out
    setTimeout(() => {
        // Remove images not in next scene
        currentImages.forEach(img => {
            if (!scene.images.some(i => i.id === img.id)) {
                img.remove();
            }
        });

        // Update or add images
        scene.images.forEach(imgData => {
            let img = document.getElementById(imgData.id);
            if (img) {
                // Transitioning image
                img.style.cssText = imgData.style;
            } else {
                // New image
                img = document.createElement('img');
                img.id = imgData.id;
                img.src = imgData.src;
                img.className = 'scene-image fade-out'; // start faded out
                img.style.cssText = imgData.style;
                sceneDiv.appendChild(img);
            }
        });

        // Update text
        if (textDiv) {
            textDiv.innerHTML = scene.text;
            textDiv.style.cssText = scene.textStyle;
        } else {
            const newText = document.createElement('div');
            newText.className = 'scene-text fade-out';
            newText.innerHTML = scene.text;
            newText.style.cssText = scene.textStyle;
            sceneDiv.appendChild(newText);
        }

        setTimeout(() => {
            sceneDiv.querySelectorAll('.scene-image, .scene-text').forEach(el => {
                el.classList.remove('fade-out');
            });
            if (scene.autoSwitch) setTimeout(() => nextScene(), 2000);
            else {
                continueText.style.display = 'block';
                switching = false;
            }
        }, 50);
    }, 1000);
}

function nextScene() {
    currentSceneIndex++;
    showScene(currentSceneIndex);
}

function initScenes() {     // called at main HTML file
    const selection = document.querySelector('.selection');
    if (selection && selection.style.display !== 'none') {
        selection.classList.add('fade-out');
        setTimeout(() => {
            selection.style.display = 'none';
            showScene(0);
        }, 1000);
    } else {
        showScene(0);
    }

    document.addEventListener('keydown', e => {
        if (switching) return;
        if (e.key === 'ArrowLeft') {
            currentSceneIndex = Math.max(0, currentSceneIndex - 1);
        } else currentSceneIndex = Math.min(scenes.length, currentSceneIndex + 1);
        showScene(currentSceneIndex);
    });
}

