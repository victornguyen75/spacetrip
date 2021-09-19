import * as THREE from "three";

// A container for everything
const scene = new THREE.Scene();
const spaceTexture = new THREE.TextureLoader().load("../img/space.jpg");
scene.background = spaceTexture;

export { scene };
