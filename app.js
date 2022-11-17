
function getRandomValue(max, min) {
    return Math.floor(Math.random) * (max - min) + min;
}
const test = getRandomValue(15, 8);
console.log(test)

const app = Vue.createApp({
    data() {
        genieHealth = 100,
            myHealth = 100
    },
    methods: {
        attackGenie() {
            const attackValue = getRandomValue(12, 5);
            this.genieHealth -= attackValue;
            this.attackPlayer();
        },

        attackPlayer() {
            const attackMe = getRandomValue(15, 8);
            this.myHealth -= attackMe;
        }

    }
})

app.mount('#game');