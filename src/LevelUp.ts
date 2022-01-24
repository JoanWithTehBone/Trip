import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Level from './Level.js';
import Scene from './Scene.js';

export default class LevelUp extends Scene {
  private shouldStart: boolean;

  private keyboard: KeyListener;

  /**
   * Constructor for the LevelUp class
   *
   * @param game the game object where this scene will be a part of
   */
  public constructor(game: Game) {
    super(game);
    this.keyboard = new KeyListener();
    this.shouldStart = false;
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public processInput(): void {
    if (this.keyboard.isKeyDown(KeyListener.KEY_P)) {
      this.shouldStart = true;
    }
  }

  /**
   * Advances the game simulation one step. It may run AI and physics (usually
   * in that order). The return value of this method determines what the `GameLoop`
   * that is animating this object will do next. If `null` is returned, the
   * GameLoop will render this scene and proceeds to the next animation frame.
   * If this methods returns a `Scene` (subclass) object, it will NOT render this
   * scene but will start considering that object as the current scene to animate.
   * In other words, by returning a Scene object, you can set the next scene to
   * animate.
   *
   * @returns a new `Scene` object if the game should start animating that scene
   *   on the next animation frame. If the game should just continue with the
   *   current scene, just return `null`
   */
  public update(): Scene {
    if (this.shouldStart) {
      this.game.getPlayerStats().increaseLevel();
      return new Level(this.game);
    }
    return null;
  }

  /**
   * Draw the game details to the canvas
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
  }
}
