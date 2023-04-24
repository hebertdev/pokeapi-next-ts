import { Group, Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default class Charizard extends Object3D {
  constructor(scene: Object3D, loader: GLTFLoader) {
    super();

    loader.load('/charizard.glb', (gltf) => {
      this.add(gltf.scene);
      this.posicionar();
      scene.add(this);
    });
  }

  private posicionar() {
    if (window.innerWidth > 900) {
      this.translateY(-2);
      this.translateX(-8);
      this.translateZ(15);
      this.rotateY(Math.PI / 4);
      this.scale.set(0.85, 0.85, 0.85);
    } else if (window.innerWidth < 600) {
      this.translateY(-2);
      this.translateX(-8);
      this.translateZ(13);
      this.rotateY(Math.PI / 4);
      this.scale.set(0.85, 0.85, 0.85);
    } else {
      this.translateZ(36.5);
      this.translateY(1.8);
      this.translateX(0.4);
    }
  }
}