<template>
    <div>
        <header>
            <h1>Monster Fight</h1>
        </header>
        <div id="game">
            <h1 style="text-align: center; font-stretch: expanded;"> Monster : {{ this.monsterHealth }} player :{{
                this.playerHealth }}</h1>
            <section id="monster" class="container">
                <h2>Monster Health</h2>
                <div class="healthbar">
                    <div class="healthbar__value" :style="monsterBarStyles"></div>
                </div>
            </section>
            <section id="player" class="container">
                <h2>Your Health</h2>
                <div class="healthbar">
                    <div class="healthbar__value" :style="playerBarStyles"></div>
                </div>
            </section>
            <section class="container" v-if="winner">
                <h2>Game Over!</h2>
                <h3 v-if="winner === 'monster'">You Lost!</h3>
                <h3 v-else-if="winner === 'player'">You Won!</h3>
                <h3 v-else-if="winner === 'draw'">It's a draw!</h3>
                <button @click="startGame">ReStart</button>
            </section>
            <section id="controls" v-show="hide">
                <button @click="attackMonster">ATTACK</button>
                <button @click="specialAttackMonster" :disabled="mayUseSpecialAttack">SPECIAL ATTACK</button>
                <button @click="healPlayer" :disabled="playerHealth > 70">HEAL</button>
                <button @click="surrender">SURRENDER</button>
            </section>
            <section id="log" class="container">
                <h2>Battle Log</h2>
                <ul>
                    <li v-for="(logMessages, index) in logMessages">
                        {{ index }} - {{ logMessages.actionBy }} - {{ logMessages.actionType }} - {{ logMessages.actionValue
                        }}
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
      
      
<script>

export default {
    name: 'game',
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            show: true,
            logMessages: []
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: '0%' }
            }
            return {
                width: this.monsterHealth + '%'
            }
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: '0%' }
            }
            return {
                width: this.playerHealth + '%'
            }
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        },
        hide() {
            if (this.winner !== null) {
                return this.show = false
            }
            else {
                return this.show = true
            }
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'
                this.playerHealth=0
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'
                this.monsterHealth=0
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++
            const attackValue = Math.floor(Math.random() * (12 - 5)) + 5
            this.monsterHealth = this.monsterHealth - attackValue
            this.addLogMessage('player', 'attack', attackValue)
            this.attackPlayer()
        },
        attackPlayer() {
            const attackValue = Math.floor(Math.random() * (15 - 8)) + 8
            this.playerHealth = this.playerHealth - attackValue
            this.addLogMessage('monster', 'attack', attackValue)
        },
        specialAttackMonster() {
            this.currentRound++
            const attackValue = Math.floor(Math.random() * (25 - 10) + 10)
            this.monsterHealth = this.monsterHealth - attackValue
            this.addLogMessage('player', 'Special-Attack', attackValue)
            this.attackPlayer()
        },
        healPlayer() {
            this.currentRound++
            const healValue = Math.floor(Math.random() * (20 - 8) + 8)
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
            }
            else {
                this.playerHealth = this.playerHealth + healValue
            }
            this.addLogMessage('player', 'heal', healValue)
            this.attackPlayer()
        },
        surrender() {
            this.winner = 'monster'
            this.playerHealth = 0
            this.addLogMessage('player', 'surrender', 'Monster Won')
        },
        startGame() {
            this.playerHealth = 100,
                this.monsterHealth = 100,
                this.currentRound = 0,
                this.winner = null,
                this.logMessages = []
        },
        addLogMessage(who, what, value) {
            this.logMessages.push({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }
}
</script>
      
<style scoped>
* {
    box-sizing: border-box;
}

html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0.5rem;
    background-color: #880017;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
}

section {
    width: 90%;
    max-width: 40rem;
    margin: auto;
}

.healthbar {
    width: 100%;
    height: 40px;
    border: 1px solid #575757;
    margin: 1rem 0;
    background: #fde5e5;
}

.healthbar__value {
    background-color: #00a876;
    width: 100%;
    height: 100%;
}

.container {
    text-align: center;
    padding: 0.5rem;
    margin: 1rem auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 12px;
}

#monster h2,
#player h2 {
    margin: 0.25rem;
}

#controls {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

button {
    font: inherit;
    border: 1px solid #88005b;
    background-color: #88005b;
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    margin: 1rem;
    width: 12rem;
    cursor: pointer;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
    outline: none;
}

button:hover,
button:active {
    background-color: #af0a78;
    border-color: #af0a78;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

button:disabled {
    background-color: #ccc;
    border-color: #ccc;
    box-shadow: none;
    color: #3f3f3f;
    cursor: not-allowed;
}

#log ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

#log li {
    margin: 0.5rem 0;
}

.log--player {
    color: #7700ff;
}

.log--monster {
    color: #da8d00;
}

.log--damage {
    color: red;
}

.log--heal {
    color: green;
}
</style>
      