import { WebGL1Renderer } from "three";
import Scene from "./scenes/Scene";

export default class Renderer extends WebGL1Renderer {
  constructor() {
    const canvas = document.getElementById("bg") as HTMLCanvasElement | null;
    if (!canvas) {
      throw new Error("No se encontró el elemento canvas");
    }

    super({ antialias: true, canvas });
    this.config();
    new Scene(this);
  }

  private config() {
    this.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", this.resize);
  }

  private resize = () => window.location.reload();
}
