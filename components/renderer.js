import * as THREE from "three";

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

export { renderer };
