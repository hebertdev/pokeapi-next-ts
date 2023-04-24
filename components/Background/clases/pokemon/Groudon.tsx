import { Group, Scene } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default class Groudon {
  private objet!: Group;

  constructor(scene: Scene, loader: GLTFLoader) {
    loader.load('/groudon.glb', (gltf) => {
      this.objet = gltf.scene;
      this.posicionar();

      scene.add(this.objet);
    });
  }

  private posicionar() {
    if (window.innerWidth > 900) {
      this.objet.translateY(-3);
      this.objet.translateX(0);
      this.objet.translateZ(10);
      this.objet.rotateY(-Math.PI / 5);
      this.objet.scale.set(1, 1, 1);
    } else if (window.innerWidth < 600) {
      this.objet.translateY(-3);
      this.objet.translateX(0);
      this.objet.translateZ(10);
      this.objet.rotateY(-Math.PI / 5);
      this.objet.scale.set(1, 1, 1);
    } else {
      this.objet.translateZ(36.5);
      this.objet.translateY(1.8);
      this.objet.translateX(0.4);
    }
  }
}