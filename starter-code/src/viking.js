// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
            this.strength = strength
    }

     attack() {
    return this.strength
}


    receiveDamage(damage){
        this.health -= damage

}

}

class Viking extends Soldier {
    constructor(health, strength, name) {
        super(health, strength)
        this.name = 'Harald'
        this.health= 300  
        this.strength = 150
    }

    
    receiveDamage(damage) {
        this.health -= damage
        if (this.health >= 0) {
            return  `${this.name} has received ${damage} points of damage`
        }else if(damage === 300){
            return  `${this.name} has died in act of combat`

     }  
        return receiveDamage(300);
    }
        
    battleCry() {
        return 'Odin Owns You All!'
    }
}



// Saxon

class Saxon extends Soldier{
        
attack(){
    return this.strength
}

receiveDamage(damage) {
    this.health-=damage
    
    if(this.health >= 0){

         return `A Saxon has received ${damage} points of damage`
    } else{
        return ` A SAXON has died in combat`

        }
        return receiveDamage(50);
    }
   
}

const aSoldier = new Soldier()
const aViking = new Viking 
const aSaxon = new Saxon()

// W
class War { 

    constructor(){
    this.vikingArmy = [],
    this.saxonArmy = []

    }

    addViking(viking){
    
    this.vikingArmy.push(viking)
    console.log('one Viking added')

     
    };


    addSaxon(saxon){
      this.saxonArmy.push(saxon)
      console.log('one Saxon added')
    }


    vikingAttack() {
    
    let oneSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let oneViking = Math.floor(Math.random()* this.vikingArmy.length);

    let randomSaxon = this.saxonArmy[oneSaxon];
    let randomViking = this.vikingArmy[oneViking];

    let remainingHealth = randomSaxon.receiveDamage(randomViking.strength);

    if(randomSaxon.health = 0){
      this.saxonArmy.splice(randomSaxon, 1)
    
    }
     return remainingHealth;

    };



    saxonAttack(){
    let oneSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let oneViking = Math.floor(Math.random()* this.vikingArmy.length);

    let randomSaxon = this.saxonArmy[oneSaxon];
    let randomViking = this.vikingArmy[oneViking];

    
    let remainingHealth = randomViking.receiveDamage(randomSaxon.strength);

    if(randomViking.health = 0){
      this.vikingArmy.splice(randomViking, 1)
    
    }
     return remainingHealth

    };


    showStatus(){

      if (saxonArmy.length === 0){
        'Vikings have won the war of the century'
      
      } else if (vikingArmy.length === 0){
        'Saxons have fought for their lives and survived another day...'
      } else if (vikingArmy.length && saxonArmy.length >= 1) {
        'Vikings and Saxons are still in the thick of the battle'

      } 

    }

};
