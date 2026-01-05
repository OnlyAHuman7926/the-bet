const scenes = [
    {
        images: [],
        text: "15 years ago...",
        textStyle: "top: 50%; left: 50%; translate: -50% -50%;",
        autoSwitch: true
    },
    {
        images: [
            { id: 'discussion', src: 'images/discussion_bg_2.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: 'A group of people were discussing about death penalty and long-term imprisonment.',
        textStyle: 'top: 70%; left: 10%; text-align: left; translate: 0 -50%;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'discussion', src: 'images/discussion_bg_2.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: 'The banker said that instant death was more humane...',
        textStyle: 'top: 70%; left: 10%; text-align: left; translate: 0 -50%;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'discussion', src: 'images/discussion_bg_2.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: '...but the lawyer thinks that it\'s always better to live than to die.',
        textStyle: 'top: 70%; left: 10%; text-align: left; translate: 0 -50%;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'discussion', src: 'images/discussion_bg_2.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: '“It’s not true! I’ll bet you two millions you wouldn’t stay in solitary confinement for five years.” The banker said.',
        textStyle: 'top: 70%; left: 10%; text-align: left; translate: 0 -50%;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'discussion', src: 'images/discussion_bg_2.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: 'It is so decided. The lawyer would be confined in the banker for 15 years, and after that, the banker would pay 2 millions.',
        textStyle: 'top: 70%; left: 10%; text-align: left; translate: 0 -50%;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'house-out', src: 'images/part_1_bg.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: 'The lawyer was confined in a lodge in the banker\'s garden.',
        textStyle: 'left: 10%; top: 20%; text-align: left;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'house-in', src: 'images/house_in.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: 'In the lodge, the lawyer had a piano, had wine, and can request for any books he wanted.',
        textStyle: 'left: 10%; top: 20%; text-align: left;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'house-in', src: 'images/house_in.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: 'The lawyer occasionally played classics, wrote letters and tore them up...',
        textStyle: 'left: 10%; top: 20%; text-align: left;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'house-in', src: 'images/house_in.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: '... and he would also read all kinds of books - language, philosophy, history, chemistry, and so on.',
        textStyle: 'top: 50%; left: 10%; text-align: left; translate: 0 -50%;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'house-in', src: 'images/house_in.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: 'One day, he stumbled upon the Gospel, and spent an entire year reading that.',
        textStyle: 'top: 50%; left: 10%; text-align: left; translate: 0 -50%;',
        autoSwitch: false,
        delayTime: 600
    },
    {
        images: [
            { id: 'p2bg', src: 'images/part_2_bg.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: '15 years have finally passed. The banker lost heavily on the stock market, and he could no longer afford the two millions to pay.',
        textStyle: 'bottom: 10%;  right: 20%;',
        autoSwitch: false,
        delayTime: 800
    },
    {
        images: [
            { id: 'p2bg', src: 'images/part_2_bg.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: 'The banker had an idea: he must kill the lawyer before time is up.',
        textStyle: 'bottom: 10%; right: 20%;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'p2_1bg', src: 'images/part_1_bg.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: 'And so, he quietly sneaked into the lawyer\'s lodge one night.',
        textStyle: 'left: 10%; top: 20%; text-align: left;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'lawyer-sit', src: 'images/house_part_2.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: 'The lawyer was sitting on his chair, staying motionless...',
        textStyle: 'left: 10%; top: 20%; text-align: left;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'lawyer-sit', src: 'images/house_part_2.png', style: 'top: 50%; left: 50%; translate: -50% -50%; width: 100%;z-index: 0;' }
        ],
        text: 'The banker noticed a letter on the table addressed to him. He opened the letter and read it.',
        textStyle: 'left: 10%; top: 20%; text-align: left;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'lawyer-sit', src: 'images/house_part_2.png', style: 'top: -13%; left: 63%; translate: -50% -50%; width: 300%;z-index: 0;' }
        ],
        text: '"And I despise your books, I despise wisdom and the blessings of this world. It is all worthless, fleeting, illusory, and deceptive, like a mirage."',
        textStyle: 'bottom: 10%; left: 10%; right: 10%;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'lawyer-sit', src: 'images/house_part_2.png', style: 'top: -13%; left: 63%; translate: -50% -50%; width: 300%;z-index: 0;' }
        ],
        text: '"You have lost your reason and taken the wrong path. You have taken lies for truth, and hideousness for beauty... <br><br>so I marvel at you who exchange heaven for earth. I don’t want to understand you."',
        textStyle: 'bottom: 10%; left: 10%; right: 10%; max-width: 45%;',
        autoSwitch: false
    },
    {
        images: [
            { id: 'lawyer-sit', src: 'images/house_part_2.png', style: 'top: -13%; left: 63%; translate: -50% -50%; width: 300%;z-index: 0;' }
        ],
        text: 'To prove to you in action how I despise all that you live by, I renounce the two millions of which I once dreamed as of paradise and which now I despise. <br><br>To deprive myself of the right to the money <b>I shall go out from here five hours before the time fixed, and so break the compact</b>..."',
        textStyle: 'bottom: 10%; left: 10%; right: 10%; max-width: 45%;',
        autoSwitch: false
    },
    {
        images: [],
        text: "And so, the lawyer wept, <br>feeling contempt about losing stocks the first time ever.",
        textStyle: "top: 50%; left: 50%; translate: -50% -50%; max-width: unset; text-align: center;",
        autoSwitch: true,
        delayTime: 800
    },
    {
        images: [],
        text: "The lawyer left before the fixed time, <br>the two millions were unpaid, <br>and the letter was secured in a fireproof safe.",
        textStyle: "top: 50%; left: 50%; translate: -50% -50%; max-width: unset; text-align: center;",
        autoSwitch: true,
        delayTime: 400
    },
];

let currentSceneIndex = 0;
const sceneDiv = document.getElementById('scene');
const continueText = document.getElementById('continue-text');
let switching = false;

const imageBlobMap = {};

async function preloadImages() {
    const imageSources = [...new Set(scenes.flatMap(scene => scene.images.map(img => img.src)))];
    const promises = imageSources.map(async src => {
        try {
            const response = await fetch(src);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            imageBlobMap[src] = blobUrl;
        } catch (error) {
            console.error(`Failed to preload image: ${src}`, error);
        }
    });
    await Promise.all(promises);
}
preloadImages();

function showScene(index) {
    switching = true;
    continueText.style.display = 'none'; // Hide continue text when showing a scene
    const scene = scenes[index];
    if (!scene) {
        // End of story
        setTimeout(() => {
            document.getElementById('fade-button').style.display = 'block';
            setTimeout(() => document.getElementById('fade-button').style.opacity = '1', 50);
        }, 1000);
        switching = false;
        return;
    }

    const currentImages = Array.from(sceneDiv.querySelectorAll('.scene-image'));
    currentImages.forEach(img => {
        if (!scene.images.some(i => i.id === img.id)) {
            img.classList.add('fade-out');
        }
    });
    const textDiv = sceneDiv.querySelector('.scene-text');
    if (textDiv) textDiv.classList.add('fade-out');

    setTimeout(() => {
        currentImages.forEach(img => {
            if (!scene.images.some(i => i.id === img.id)) {
                img.remove();
            }
        });

        setTimeout(() => {
            scene.images.forEach(imgData => {
                let img = document.getElementById(imgData.id);
                if (img) img.style.cssText = imgData.style;
                else {
                    img = document.createElement('img');
                    img.id = imgData.id;
                    img.src = imageBlobMap[imgData.src] || imgData.src;
                    img.className = 'scene-image fade-out';
                    img.style.cssText = imgData.style;
                    sceneDiv.appendChild(img);
                }
            });

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
        }, scene.delayTime || 0)
    }, 1000);
}

function nextScene() {
    currentSceneIndex++;
    showScene(currentSceneIndex);
}

function initScenes() { 
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

