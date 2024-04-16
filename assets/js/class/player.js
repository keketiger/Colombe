class Player {
    constructor(playerName) {
        this.playerName = playerName;
        this.playerCoords = {x: 0, y: 0};
    }
    get name() {
        return this.playerName;
    }
    get coords() {
        return this.playerCoords;
    }
}

export default Player;