// 
// Project: Colombe
// Desc: 2D Game
// Author: keketiger
// 

import Player from './class/player';

Player.Create(1, 'Kevin');

var test = document.createElement('h1');
test.innerText = 'Bienvenue #' + Player.GetIdentifier() + ' ' + Player.GetName();

document.body.appendChild(test);