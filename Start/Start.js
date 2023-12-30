/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Start extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Start", "./Start/costumes/Start.svg", {
        x: 185.078105,
        y: 157
      }),
      new Costume("Last", "./Start/costumes/Last.svg", {
        x: 185.078105,
        y: 157
      }),
      new Costume("GrandSlam", "./Start/costumes/GrandSlam.svg", {
        x: 185.078105,
        y: 157
      }),
      new Costume("NFL", "./Start/costumes/NFL.svg", { x: 185.078105, y: 157 }),
      new Costume("FIFA", "./Start/costumes/FIFA.svg", {
        x: 185.078105,
        y: 157
      }),
      new Costume("Organ", "./Start/costumes/Organ.svg", {
        x: 185.078095,
        y: 157
      }),
      new Costume("GoldQues", "./Start/costumes/GoldQues.svg", {
        x: 185.078095,
        y: 157
      }),
      new Costume("MarieCurie", "./Start/costumes/MarieCurie.svg", {
        x: 185.078095,
        y: 157
      }),
      new Costume("Errors and fix", "./Start/costumes/Errors and fix.svg", {
        x: 185.078095,
        y: 157
      }),
      new Costume("Loop", "./Start/costumes/Loop.svg", {
        x: 185.078095,
        y: 157
      }),
      new Costume("Data Structure", "./Start/costumes/Data Structure.svg", {
        x: 185.078095,
        y: 157
      }),
      new Costume("WON", "./Start/costumes/WON.png", { x: 347, y: 151 })
    ];

    this.sounds = [new Sound("pop", "./Start/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sports" },
        this.whenIReceiveSports
      ),
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

  *whenGreenFlagClicked() {
    this.costume = "Start";
  }

  *whenIReceiveSports() {
    this.costume = "GrandSlam";
  }

  *whenIReceiveFrenchOpen() {
    this.costume = "NFL";
  }

  *whenIReceiveKcc3835() {
    this.costume = "FIFA";
  }

  *whenIReceiveStart() {
    this.costume = "Last";
    this.stage.costume = "Hearts";
  }

  *whenIReceiveYouWon() {
    this.costume = "WON";
  }

  *whenIReceiveScience() {
    this.costume = "Organ";
  }

  *whenIReceiveLiver() {
    this.costume = "GoldQues";
  }

  *whenIReceive79Gold() {
    this.costume = "MarieCurie";
  }

  *whenIReceiveCoding() {
    this.costume = "Errors and fix";
  }

  *whenIReceiveDebug() {
    this.costume = "Loop";
  }

  *whenIReceiveInfinite() {
    this.costume = "Data Structure";
  }
}
