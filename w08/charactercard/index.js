const card = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: '/images/image.png',
    attacked: function () {
        if (this.health != 0){
            this.health -= 20;
            console.log(this.health);
        } else {
            alert("Character Died");
        }
    },
    levelUp: function () {
        this.level++;
    }
}

const attackedButton = document.querySelector('#attacked');
const levelUpButton = document.querySelector('#levelUp');

function statsTemplate(card) {
    return `<p>Class: ${card.class}</p>
            <p>Level: ${card.level}</p>
            <p>Health: ${card.health}</p>`;
}

function renderStats(card) {
    html = statsTemplate(card);
    document.querySelector('.stats').innerHTML = html;
}

renderStats(card)

attackedButton.addEventListener("click", function () {
    card.attacked();
    renderStats(card);
});
levelUpButton.addEventListener("click", function () {
    card.levelUp();
    renderStats(card);
});