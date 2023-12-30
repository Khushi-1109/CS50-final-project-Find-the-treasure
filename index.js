import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Start from "./Start/Start.js";
import Sports from "./Sports/Sports.js";
import Science from "./Science/Science.js";
import Coding from "./Coding/Coding.js";
import UsOpen from "./UsOpen/UsOpen.js";
import FrenchOpen from "./FrenchOpen/FrenchOpen.js";
import AustralianOpen from "./AustralianOpen/AustralianOpen.js";
import _73 from "./_73/_73.js";
import _3510 from "./_3510/_3510.js";
import _3835 from "./_3835/_3835.js";
import Messi from "./Messi/Messi.js";
import Kylian from "./Kylian/Kylian.js";
import Ronaldo from "./Ronaldo/Ronaldo.js";
import Duck from "./Duck/Duck.js";
import Brain from "./Brain/Brain.js";
import Skin from "./Skin/Skin.js";
import Liver from "./Liver/Liver.js";
import Gold from "./Gold/Gold.js";
import NotGold from "./NotGold/NotGold.js";
import Notgold from "./Notgold/Notgold.js";
import Germany from "./Germany/Germany.js";
import Poland from "./Poland/Poland.js";
import Austria from "./Austria/Austria.js";
import Comp from "./Comp/Comp.js";
import Execute from "./Execute/Execute.js";
import Debug from "./Debug/Debug.js";
import While from "./While/While.js";
import Infinite from "./Infinite/Infinite.js";
import For from "./For/For.js";
import Stack from "./Stack/Stack.js";
import Queue from "./Queue/Queue.js";
import Tree from "./Tree/Tree.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Start: new Start({
    x: 69,
    y: 60,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 19
  }),
  Sports: new Sports({
    x: 76.05874972101157,
    y: -29.368012045776666,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Science: new Science({
    x: 77.37378645066951,
    y: -93.82635074212924,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Coding: new Coding({
    x: 77.7516124717468,
    y: -156.2503558600477,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  UsOpen: new UsOpen({
    x: 76.1151543773185,
    y: -28.817073769962192,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  FrenchOpen: new FrenchOpen({
    x: 77.1078267753161,
    y: -93.96161590239983,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  AustralianOpen: new AustralianOpen({
    x: 79.13803191155657,
    y: -157.18531605256413,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  _73: new _73({
    x: 69.17729212108776,
    y: -30.401255546997206,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  _3510: new _3510({
    x: 71.61195134307661,
    y: -91.2455684146882,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  _3835: new _3835({
    x: 73.89144642661515,
    y: -148.03870549566437,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Messi: new Messi({
    x: 62.45106101801271,
    y: -117.69357949027177,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Kylian: new Kylian({
    x: 61.21618824042558,
    y: -63.134709888908475,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Ronaldo: new Ronaldo({
    x: 64.10652677117154,
    y: -173.48604617508573,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  Duck: new Duck({
    x: -80,
    y: -82,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  Brain: new Brain({
    x: 69.4861716266522,
    y: -31.243142694324632,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  Skin: new Skin({
    x: 68.09860550353959,
    y: -94.37760717245463,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 29
  }),
  Liver: new Liver({
    x: 67.74228908538211,
    y: -158.35021129629308,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 15
  }),
  Gold: new Gold({
    x: 82.93286116288957,
    y: -31.493613718273103,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  NotGold: new NotGold({
    x: 81.46807275146102,
    y: -91.78286326439999,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 16
  }),
  Notgold: new Notgold({
    x: 85.26614588348201,
    y: -156.90655238525247,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  Germany: new Germany({
    x: 84.88588376882596,
    y: -26.76946940228936,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  Poland: new Poland({
    x: 89.46322860461618,
    y: -88.44577516572815,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22
  }),
  Austria: new Austria({
    x: 91.30611006103999,
    y: -148.38740823910783,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 21
  }),
  Comp: new Comp({
    x: 75.36971709795951,
    y: -22.11746736047767,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 23
  }),
  Execute: new Execute({
    x: 75.89454804322725,
    y: -87.56511668053183,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 24
  }),
  Debug: new Debug({
    x: 81.41253256959803,
    y: -150.81503204790172,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 25
  }),
  While: new While({
    x: 84.44152924106545,
    y: -160.7632852447432,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 27
  }),
  Infinite: new Infinite({
    x: 86.86420830192422,
    y: -86.55414755011196,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 28
  }),
  For: new For({
    x: 84.65951185594255,
    y: -8.973781750061054,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 26
  }),
  Stack: new Stack({
    x: 83.26483184952136,
    y: -22.89482155734781,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 30
  }),
  Queue: new Queue({
    x: 85.2920627922638,
    y: -149.18394469236912,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 32
  }),
  Tree: new Tree({
    x: 82.80403569186832,
    y: -82.46649043880468,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 31
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
