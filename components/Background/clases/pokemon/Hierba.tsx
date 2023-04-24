import {Group}from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import Scene from '../../scenes/Scene';

export default class Hierba {

    private object!: Group
    private scene: Scene

    constructor(scene: Scene, loader:GLTFLoader){
        this.scene = scene
        loader.load("/grass.glb",(gltf) =>{
            this.object= gltf.scene
            this.clonar(-1,15)
            this.clonar(-1,14)
            this.clonar(-1,13)
            this.clonar(-1,12)
            this.clonar(-2,15)
            this.clonar(-2,14)
            this.clonar(-2,13)
            this.clonar(-2,12)
            this.clonar(-3,12)
            this.clonar(-3,13)
            this.clonar(-3,14)
            this.clonar(-3,15)
            this.clonar(-4,14)
            this.clonar(-4,15)
            this.clonar(-4,13)
            this.clonar(-4,12)
            this.clonar(-5,15)
            this.clonar(-5,14)
            this.clonar(-5,13)
            this.clonar(-5,12)
            this.clonar(-6,12)
            this.clonar(-6,13)
            this.clonar(-6,14)
            this.clonar(-6,15)
            this.clonar(-7,14)
            this.clonar(-7,15)
            this.clonar(-7,13)
            this.clonar(-7,12)
            this.clonar(-8,15)
            this.clonar(-8,14)
            this.clonar(-8,13)
            this.clonar(-8,12)
        })
    }

    private clonar(x: number, z: number){
        const objeto = this.object.clone()
        this.scene.add(objeto)

        if(window.innerWidth > 900){
            objeto.translateY(-3)
            objeto.translateX(x)
            objeto.translateZ(z)
            objeto.rotateY(Math.PI/4)
        } else if (window.innerWidth < 600){
            objeto.translateY(-3)
            objeto.translateX(x)
            objeto.translateZ(z)
            objeto.rotateY(Math.PI/4)
        }
    }
}