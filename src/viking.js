// Soldier
class Soldier {}

class Soldier {
    constructor(health, strength) { 
        this.health = health;
        this.strength = strength;  
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }

}

// Viking
class Viking {}

class Viking {}
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength)
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } 
        return `${this.name} has died in act of combat`
    }
    battleCry() {return `Odin Owns You All!`};

}


// Saxon
class Saxon {}

class Saxon {}
class Saxon extends Soldier {
    constructor(health, strength){
        super(health,strength)
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } 
        return `A Saxon has died in combat`
    }
}

// War
class War {}
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = []; 
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let saxon = this.saxonArmy[0];
        let damage = this.vikingArmy[0].strength;
        let health = this.saxonArmy[0].health;

        if(health <= damage) {this.saxonArmy.pop()}

        return saxon.receiveDamage(damage);

    }
    saxonAttack() {
        let viking = this.vikingArmy[0];
        let damage = this.saxonArmy[0].strength;
        let health = this.vikingArmy[0].health;

        if(health <= damage) {
            this.vikingArmy.pop()
        } 

        return viking.receiveDamage(damage);
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
           return `Vikings have won the war of the century!` 
        } else if(this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        }
        return `Vikings and Saxons are still in the thick of battle.`
    }
}
