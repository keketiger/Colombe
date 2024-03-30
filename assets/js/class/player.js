class Player {
    constructor(playerName) {
        this.playerName = playerName;
    }
    get name() {
        return this.playerName;
    }
}

export default Player;