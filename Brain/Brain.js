/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Brain extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("SPORTS", "./Brain/costumes/SPORTS.svg", {
        x: 144.32811499999997,
        y: 47.249989687500005
      })
    ];

    this.sounds = [new Sound("pop", "./Brain/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Science" },
        this.whenIReceiveScience
      ),
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
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Hide all options");
    this.broadcast("Start");
  }

  *whenIReceiveScience() {
    this.visible = true;
  }

  *whenIReceiveHideAllOptions() {
    this.visible = false;
  }
}
