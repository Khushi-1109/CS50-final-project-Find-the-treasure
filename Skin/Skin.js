/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Skin extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kylian", "./Skin/costumes/Kylian.svg", {
        x: 143.82285184210525,
        y: 46.764402830295495
      })
    ];

    this.sounds = [new Sound("pop", "./Skin/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Science" },
        this.whenIReceiveScience
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hide all options" },
        this.whenIReceiveHideAllOptions
      )
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse")) {
        this.effects.brightness = 20;
      } else {
        this.effects.brightness = 0;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching("mouse")) {
        this.effects.brightness = 20;
      } else {
        this.effects.brightness = 0;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching("mouse")) {
        this.effects.brightness = 20;
      } else {
        this.effects.brightness = 0;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("Hide all options");
    this.broadcast("Start");
  }

  *whenGreenFlagClicked4() {
    this.visible = false;
  }

  *whenIReceiveScience() {
    this.visible = true;
  }

  *whenthisspriteclicked2() {
    this.broadcast("Hide all options");
    this.broadcast("Start");
  }

  *whenIReceiveHideAllOptions() {
    this.visible = false;
  }
}
