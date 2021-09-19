import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { scene, camera, renderer } from "./components";
// import { lightHelper, gridHelper } from "./utils"; // Use when needed
import "./style.css";

/* 3 main objects for setup: scene, camera, renderer */

const spaceTexture = new THREE.TextureLoader().load("./img/space.jpg");
scene.background = spaceTexture;

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);

/* Objects to display*/
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshPhongMaterial({
  color: 0xa5d6a7,
});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// Lighting
const pointLight = new THREE.PointLight(0xf6faf6);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xf6faf6);
scene.add(pointLight, ambientLight);

// Helpers
// scene.add(lightHelper(pointLight), gridHelper);

const addStar = () => {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
};

Array(200).fill().forEach(addStar);

const gumbyTexture = new THREE.TextureLoader().load("./img/gumby.jpg");

const gumby = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: gumbyTexture })
);

scene.add(gumby);

const moonTexture = new THREE.TextureLoader().load("./img/moon.jpg");
const normalTexture = new THREE.TextureLoader().load("./img/normal.jpg");

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

moon.position.z = 30;
moon.position.setX(-10);

scene.add(moon);

const moveCamera = () => {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  gumby.rotation.y += 0.01;
  gumby.rotation.z += 0.01;

  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
  camera.position.z = t * -0.01;
};

document.body.onscroll = moveCamera;

const animate = () => {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera);
};

animate();
