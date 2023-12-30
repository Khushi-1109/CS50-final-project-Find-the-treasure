/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Rays", "./Stage/costumes/Rays.svg", {
        x: 240.1199951171875,
        y: 180
      }),
      new Costume("Playing Field", "./Stage/costumes/Playing Field.png", {
        x: 480,
        y: 360
      }),
      new Costume("Playing Field2", "./Stage/costumes/Playing Field2.png", {
        x: 480,
        y: 360
      }),
      new Costume("Baseball 1", "./Stage/costumes/Baseball 1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Room 2", "./Stage/costumes/Room 2.png", { x: 480, y: 360 }),
      new Costume("Soccer", "./Stage/costumes/Soccer.png", { x: 480, y: 360 }),
      new Costume("Hearts", "./Stage/costumes/Hearts.svg", { x: 240, y: 180 }),
      new Costume("Castle 4", "./Stage/costumes/Castle 4.svg", {
        x: 240,
        y: 180
      }),
      new Costume("School", "./Stage/costumes/School.png", { x: 480, y: 360 }),
      new Costume("Space City 1", "./Stage/costumes/Space City 1.png", {
        x: 480,
        y: 360
      }),
      new Costume("Galaxy", "./Stage/costumes/Galaxy.png", { x: 480, y: 360 }),
      new Costume(
        "Night City With Street",
        "./Stage/costumes/Night City With Street.png",
        { x: 480, y: 360 }
      ),
      new Costume("Jurassic", "./Stage/costumes/Jurassic.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Colorful City", "./Stage/costumes/Colorful City.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sports" },
        this.whenIReceiveSports
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "French Open" },
        this.whenIReceiveFrenchOpen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "KCC 38-35" },
        this.whenIReceiveKcc3835
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "You Won" },
        this.whenIReceiveYouWon
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Science" },
        this.whenIReceiveScience
      ),
      new Trigger(Trigger.BROADCAST, { name: "Liver" }, this.whenIReceiveLiver),
      new Trigger(
        Trigger.BROADCAST,
        { name: "79 Gold" },
        this.whenIReceive79Gold
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Coding" },
        this.whenIReceiveCoding
      ),
      new Trigger(Trigger.BROADCAST, { name: "Debug" }, this.whenIReceiveDebug),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Infinite" },
        this.whenIReceiveInfinite
      )
    ];
  }

  *whenIReceiveSports() {
    this.costume = "Playing Field";
  }

  *whenGreenFlagClicked() {
    this.costume = "Rays";
  }

  *whenIReceiveFrenchOpen() {
    this.costume = "Baseball 1";
  }

  *whenIReceiveKcc3835() {
    this.costume = "Soccer";
  }

  *whenIReceiveStart() {
    this.costume = "Hearts";
  }

  *whenIReceiveYouWon() {
    this.costume = "Castle 4";
  }

  *whenIReceiveScience() {
    this.costume = "School";
  }

  *whenIReceiveLiver() {
    this.costume = "Space City 1";
  }

  *whenIReceive79Gold() {
    this.costume = "Galaxy";
  }

  *whenIReceiveCoding() {
    this.costume = "Night City With Street";
  }

  *whenIReceiveDebug() {
    this.costume = "Jurassic";
  }

  *whenIReceiveInfinite() {
    this.costume = "Colorful City";
  }
}
