import GameItem from './GameItem.js';
export default class Fatcat extends GameItem {
    constructor() {
        super(128, 128, './assets/img/fatcat.png', 400, 400, 6, 256);
        this.getSprite().setAnimation('cat-eat');
    }
}
//# sourceMappingURL=Fatcat.js.map