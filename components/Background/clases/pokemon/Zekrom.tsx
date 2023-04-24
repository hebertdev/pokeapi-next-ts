import { Group, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class Zekrom {
  private objet: Group = new Group();
  private contador = 0;

  constructor(scene: Scene, loader: GLTFLoader) {
    loader.load("/zekrom.glb", (gltf) => {
      this.objet = gltf.scene;
      this.posicionar();

      scene.add(this.objet);
    });
    this.update();
  }

  private posicionar() {
    if (window.innerWidth > 900) {
      const ratio = ((window.innerWidth - 900) * -5) / 600 + 0.4;
      this.objet.translateZ(45.6);
      this.objet.translateY(0.5);
      this.objet.translateX(3);
    } else if (window.innerWidth < 600) {
      const ratio = ((window.innerWidth - 600) * -5) / 600 + 0.4;
      this.objet.translateZ(46);
      this.objet.translateY(1.8);
      this.objet.translateX(0.4);
    } else {
      this.objet.translateZ(36.5);
      this.objet.translateY(1.8);
      this.objet.translateX(0.4);
    }
  }

  private update() {
    this.contador += 0.015;
    if (this.objet) this.objet.rotation.y = Math.sin(this.contador);

    requestAnimationFrame(this.update.bind(this));
  }
}
