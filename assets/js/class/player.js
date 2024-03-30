let Player = [];
let playerData = {
    identifier: undefined,
    name: undefined
}

Player.Create = function(id, name) {
    playerData.identifier = id;
    playerData.name = name;
}

Player.GetIdentifier = function() {
    return playerData.identifier;
}

Player.GetName = function() {
    return playerData.name;
}

export default Player;