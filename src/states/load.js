// src/states/load.js

import Phaser from 'phaser';

export class Load extends Phaser.State {
    preload() {
       let textStyle = {font: '45px Arial', alight: 'center', stroke: 'blue', fill: 'blue'};
        
       this.game.add.text(80, 150, 'loading...', textStyle);    
       this.game.load.spritesheet('wizard', '../assets/wizardsprite.png', 95, 123, 6);         
    }
    
    create() {
        this.game.state.start('menu');             
    }   
}