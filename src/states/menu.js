// src/states/menu.js

import Phaser from 'phaser';

export class Menu extends Phaser.State{
    create() {
        let textStyle = {font: '45px Arial', alight: 'center', stroke: 'blue', fill: 'blue'};
        
        let title = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 100, 'ES2015 Wizard', textStyle);
        title.anchor.set(0.5);
        
        textStyle.font = '36px Arial';
        
        let instructions = this.game.add.text(this.game.world.centerX, this.game.world.centerY, '"s" key to start', textStyle);
        instructions.anchor.set(0.5);
         
        let controlMessage = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 150, 'use arrow keys to move', textStyle);

        controlMessage.anchor.set(0.5);
        
        let muteMessage = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 225, '"SPACEBAR" to win.', textStyle);
        muteMessage.anchor.set(0.5);
        
        let sKey = this.game.input.keyboard.addKey(Phaser.KeyCode.S);
        sKey.onDown.addOnce( () => this.game.state.start('play'));       
    }
}