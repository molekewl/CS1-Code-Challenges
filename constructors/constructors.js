
/* Design several classes and their relationships for an RPG videogame.
 * Classes:
 * NPC -> Humanoid, Animal, Plant
 * Humanoid -> Human, Elf, Orc
 * Animal -> Bear, Wolf
 * Plant -> FleshEatingDaisy
 *
 * Human -> Soldier, Peasant, Bandit
 *
 * NPC should be a general class for a non-player character in the game.
 * This class will probably include general attributes like hp, strength, speed, etc.
 *
 * Humanoid, Animal, and Plant should all inherit from NPC.  The classes
 * shown to the right of the arrow are classes that will inherit
 * from those classes.
 *
 * Soldier, Peasant, and Bandit should all inherit from Human.
 *
 * Create properties for these different classes that fit with the character.
 *
 * This is how you would structure the game objects in an actual game
 * application in Unity or another similar framework.
 */

 class NPC {
  constructor(options) {
    this.hp = options.hp;
    this.strength = options.strength;
    this.speed = options.speed;

  }

  destroy() {
    console.log('game object removed')
  }

  getAttributes() {
    return `${this.hp} ${this.strength} ${this.speed}`
  }
 }

 class Humanoid extends NPC {
  construtor(options) {
    super(options);
    this.name = options.name;
    this.height = options.height;
    this.sex = options.sex;
  }
  walk() {
    console.log(`${this.name} walked`);
  }
 }

 class Human extends Humanoid {
   constructor(options) {
     super(options);
     this.occupation = options.occupation;
     this.language = options.language;
     this.clan = options.clan;
   }
   shootGun() {
     console.log('bang!');
   }
 }

const mage = new Human({
  hp: 50,
  strength: 10,
  speed: 5,
  height: 50,
  name: 'lego'
});

mage.shootGun();
mage.walk();
mage.destroy();