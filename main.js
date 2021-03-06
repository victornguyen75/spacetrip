import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import {
  scene,
  camera,
  renderer,
  torus,
  pointLight,
  ambientLight,
  gumby,
  moon,
  header,
  paragraph,
  weeWoo,
  bug,
  deepFriedDog,
  deepFriedPenguin,
  dog,
  gorilla,
  pancakeBaby,
  penguin,
  penguin2,
} from "./components";
// import { lightHelper, gridHelper } from "./utils"; // Use when needed
import "./style.css";

/* 3 main objects for setup: scene, camera, renderer */
renderer.render(scene, camera);

/* Objects to display*/
scene.add(
  pointLight,
  ambientLight,
  torus,
  gumby,
  moon,
  header,
  paragraph,
  weeWoo,
  bug,
  deepFriedDog,
  deepFriedPenguin,
  dog,
  gorilla,
  pancakeBaby,
  penguin,
  penguin2
  // lightHelper(pointLight), // Helpers
  // gridHelper, // Helpers
);

const controls = new OrbitControls(camera, renderer.domElement);

const addStar = () => {
  const geometry = new THREE.SphereGeometry(1, 24, 24);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(300));
  star.position.set(x, y, z);
  scene.add(star);
};

Array(200).fill().forEach(addStar);

const animate = () => {
  const orbitRadius = 40;
  const date = Date.now() * 0.001;
  requestAnimationFrame(animate);

  torus.rotation.x += 0.0005;
  torus.rotation.y += 0.0005;
  torus.rotation.z += 0.0005;

  moon.rotation.x += 0.06;
  moon.rotation.y += 0.003;
  moon.rotation.z += 0.1;

  moon.position.set(
    Math.cos(date) * orbitRadius,
    0,
    Math.sin(date) * orbitRadius
  );

  bug.rotation.x += 0.005;
  bug.rotation.z += 0.005;

  bug.position.set(
    10 - Math.cos(date) * orbitRadius,
    5 + Math.sin(date) * orbitRadius,
    15
  );

  weeWoo.position.set(
    11 + Math.cos(date) * orbitRadius,
    0,
    -4 + Math.sin(date) * orbitRadius
  );

  gumby.position.y += 0.007;

  penguin.position.set(-100 + Math.cos(date / 3) * orbitRadius * 10, 0, 0);

  penguin.rotation.x += 0.009;
  penguin.rotation.y += 0.009;

  gorilla.position.x -= 0.03;
  gorilla.position.y -= 0.01;
  gorilla.position.z -= 0.01;

  deepFriedDog.rotation.x += 0.005;
  deepFriedDog.rotation.y += 0.005;

  controls.update();

  renderer.render(scene, camera);
};

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

animate();
document.body.onscroll = moveCamera;
