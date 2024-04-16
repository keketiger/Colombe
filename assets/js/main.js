// 
// Project: Colombe
// Desc: 2D Game
// Author: keketiger
// 

import Player from './class/player';

var player = new Player('Kevin');

var test = document.createElement('h1');
test.innerText = 'Bienvenue ' + player.name + ' - Dernière position: ' + player.coords.x +'/'+ player.coords.y;

document.body.appendChild(test);