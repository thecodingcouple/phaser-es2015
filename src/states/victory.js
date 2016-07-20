// src/states/victory.js

import Phaser from 'phaser';

export class Victory extends Phaser.State{
    create() {
        let textStyle = {font: '45px Arial', alight: 'center', stroke: 'black', fill: 'red'};
        
        let title = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 100, 'Victory!', textStyle);
        title.anchor.set(0.5);
        
        textStyle.font = '36px Arial';
        
        let instructions = this.game.add.text(this.game.world.centerX, this.game.world.centerY, '"s" key to play again', textStyle);
        instructions.anchor.set(0.5);
        
        let sKey = this.game.input.keyboard.addKey(Phaser.KeyCode.S);
        sKey.onDown.addOnce( () => this.game.state.start('play'));
    }
}