import * as THREE from "three";

// Lighting
const pointLight = new THREE.PointLight(0xf6faf6);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xf6faf6);

export { pointLight, ambientLight };
