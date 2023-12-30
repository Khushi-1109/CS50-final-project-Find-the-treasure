/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Duck extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("duck", "./Duck/costumes/duck.svg", { x: 61, y: 59 })
    ];

    this.sounds = [new Sound("duck", "./Duck/sounds/duck.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hide all options" },
        this.whenIReceiveHideAllOptions
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "You Won" },
        this.whenIReceiveYouWon
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveHideAllOptions() {
    this.visible = false;
  }

  *whenIReceiveYouWon() {
    this.visible = true;
  }
}
