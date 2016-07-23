// src/game.js

import Phaser from 'phaser';
import { Load } from './states/load';
import { Menu } from './states/menu';
import { Play } from './states/play';
import { GameOver } from './states/gameover';
import { Victory } from './states/victory';

export class Game extends Phaser.Game {
    constructor() {
        super(800, 600, Phaser.AUTO, 'phaser-canvas', { create : () => {            
            this.state.add('load', Load);
            this.state.add('menu', Menu);
            this.state.add('play', Play);
            this.state.add('gameover', GameOver);
            this.state.start('load');
        }});        
    }  
}