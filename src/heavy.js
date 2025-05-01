var scout = new Audio("img_n_snd/Heavy_cloakedspyidentify01.wav");
var soldier = new Audio("img_n_snd/Heavy_cloakedspyidentify02.wav");
var pyro = new Audio("img_n_snd/Heavy_cloakedspyidentify04.wav");
var demoman = new Audio("img_n_snd/Heavy_cloakedspyidentify05.wav");
var heavy = new Audio("img_n_snd/Heavy_cloakedspyidentify03.wav");
var engineer = new Audio("img_n_snd/Heavy_cloakedspyidentify08.wav");
var medic = new Audio("img_n_snd/Heavy_cloakedspyidentify07.wav");
var sniper = new Audio("img_n_snd/Heavy_cloakedspyidentify09.wav");
var spy = new Audio("img_n_snd/Heavy_cloakedspyidentify06.wav");

var mercs = ["scout", "soldier", "pyro", "demoman", "heavy", "engineer", "medic", "sniper", "spy"];
var audioMap = {
    "scout": scout,
    "soldier": soldier,
    "pyro": pyro,
    "demoman": demoman,
    "heavy": heavy,
    "engineer": engineer,
    "medic": medic,
    "sniper": sniper,
    "spy": spy
};

function shuffleArray(array) {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

document.getElementById('btn').onclick = function() {
    const shuffledMercs = shuffleArray(mercs);
    const randomMerc = shuffledMercs[0]; // Tomamos el primer elemento después de mezclar
    if (audioMap[randomMerc]) {
        audioMap[randomMerc].play();
        console.log('Spy!')
    }
};
