import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.184.0/build/three.module.js";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const standardMaterial = (color, options = {}) => new THREE.MeshStandardMaterial({
  color,
  metalness: options.metalness ?? 0.48,
  roughness: options.roughness ?? 0.34,
  emissive: options.emissive ?? 0x000000,
  emissiveIntensity: options.emissiveIntensity ?? 0,
});

function addBox(parent, size, position, material, rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function addCylinderBetween(parent, start, end, radius, material) {
  const origin = new THREE.Vector3(...start);
  const destination = new THREE.Vector3(...end);
  const direction = destination.clone().sub(origin);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, direction.length(), 14), material);
  mesh.position.copy(origin).add(destination).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  mesh.castShadow = true;
  parent.add(mesh);
  return mesh;
}

function createDrone() {
  const group = new THREE.Group();
  const shell = standardMaterial(0x101827, { metalness: 0.62, roughness: 0.24 });
  const carbon = standardMaterial(0x263349, { metalness: 0.7, roughness: 0.28 });
  const cyan = standardMaterial(0x37d7ef, { emissive: 0x0b7182, emissiveIntensity: 0.9 });
  const magenta = standardMaterial(0xd457ff, { emissive: 0x64147d, emissiveIntensity: 0.85 });

  const body = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 20), shell);
  body.scale.set(1.15, 0.36, 0.86);
  body.position.y = 0.16;
  body.castShadow = true;
  group.add(body);
  addBox(group, [0.75, 0.07, 0.5], [0, 0.49, 0], cyan);
  addBox(group, [0.46, 0.18, 0.5], [0, -0.2, 0.08], shell);

  const motorPoints = [
    [1.48, 0.17, 1.16], [-1.48, 0.17, 1.16],
    [1.48, 0.17, -1.16], [-1.48, 0.17, -1.16],
  ];

  motorPoints.forEach((point, index) => {
    addCylinderBetween(group, [point[0] * 0.18, 0.18, point[2] * 0.18], point, 0.075, carbon);
    const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.24, 24), shell);
    motor.position.set(...point);
    motor.castShadow = true;
    group.add(motor);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.66, 0.025, 10, 52), index % 2 ? magenta : cyan);
    ring.position.set(point[0], point[1] + 0.18, point[2]);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);

    const propeller = addBox(group, [1.22, 0.028, 0.075], [point[0], point[1] + 0.19, point[2]], carbon, [0, index * Math.PI / 2 + Math.PI / 4, 0]);
    propeller.userData.propeller = true;
  });

  group.rotation.x = -0.08;
  return group;
}

function createRaceCar() {
  const group = new THREE.Group();
  const red = standardMaterial(0xe43d32, { metalness: 0.62, roughness: 0.25 });
  const redDark = standardMaterial(0x8d171b, { metalness: 0.55, roughness: 0.3 });
  const carbon = standardMaterial(0x131820, { metalness: 0.72, roughness: 0.3 });
  const tire = standardMaterial(0x090b0f, { metalness: 0.08, roughness: 0.78 });
  const metal = standardMaterial(0xa9b4c1, { metalness: 0.92, roughness: 0.2 });

  addBox(group, [1.2, 0.28, 2.65], [0, 0.24, 0], red);
  addBox(group, [0.52, 0.22, 2.2], [0, 0.23, -2.15], red, [-0.035, 0, 0]);
  addBox(group, [2.18, 0.18, 0.72], [0, 0.22, 0.28], redDark);
  addBox(group, [2.75, 0.1, 0.43], [0, 0.1, -2.95], carbon);
  addBox(group, [2.35, 0.12, 0.38], [0, 1.02, 1.55], carbon);
  addBox(group, [0.12, 0.85, 0.14], [-0.92, 0.58, 1.55], carbon);
  addBox(group, [0.12, 0.85, 0.14], [0.92, 0.58, 1.55], carbon);

  const cockpit = new THREE.Mesh(new THREE.SphereGeometry(0.64, 24, 16), carbon);
  cockpit.scale.set(0.78, 0.6, 1.05);
  cockpit.position.set(0, 0.62, 0.38);
  cockpit.castShadow = true;
  group.add(cockpit);

  const halo = new THREE.Mesh(new THREE.TorusGeometry(0.47, 0.045, 10, 30, Math.PI * 1.55), metal);
  halo.position.set(0, 0.96, 0.18);
  halo.rotation.set(Math.PI / 2, 0, -Math.PI * 0.28);
  group.add(halo);
  addCylinderBetween(group, [0, 0.8, -0.24], [0, 1.05, 0.12], 0.035, metal);

  const wheelPositions = [
    [-1.18, 0.38, -1.72], [1.18, 0.38, -1.72],
    [-1.18, 0.43, 1.32], [1.18, 0.43, 1.32],
  ];
  wheelPositions.forEach(([x, y, z]) => {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.49, 0.49, 0.38, 28), tire);
    wheel.position.set(x, y, z);
    wheel.rotation.z = Math.PI / 2;
    wheel.castShadow = true;
    group.add(wheel);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.4, 20), metal);
    hub.position.set(x, y, z);
    hub.rotation.z = Math.PI / 2;
    group.add(hub);
    addCylinderBetween(group, [Math.sign(x) * 0.54, 0.3, z * 0.75], [x * 0.82, y, z], 0.025, metal);
  });

  group.rotation.x = -0.04;
  return group;
}

function initializeViewer(container) {
  const canvas = container.querySelector("canvas");
  if (!canvas || container.dataset.modelInitialized === "true") return;
  container.dataset.modelInitialized = "true";

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  } catch (_error) {
    container.dataset.modelReady = "false";
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x08101c, 1);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x08101c, 8.5, 15);
  const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 40);
  const type = container.dataset.projectViewer;
  camera.position.set(type === "drone" ? 5.8 : 6.3, type === "drone" ? 3.2 : 3.8, type === "drone" ? 6.2 : 7.2);
  camera.lookAt(0, 0.2, 0);

  scene.add(new THREE.HemisphereLight(0xa9d9ff, 0x111522, 2.15));
  const key = new THREE.DirectionalLight(0xffffff, 3.2);
  key.position.set(4, 7, 5);
  key.castShadow = true;
  scene.add(key);
  const accent = new THREE.PointLight(type === "drone" ? 0xd454ff : 0xff4b46, 13, 10);
  accent.position.set(-3.5, 2.4, -2.2);
  scene.add(accent);
  const cyan = new THREE.PointLight(0x3bdcf4, 10, 9);
  cyan.position.set(3, 1.5, 3);
  scene.add(cyan);

  const model = type === "drone" ? createDrone() : createRaceCar();
  model.scale.setScalar(type === "drone" ? 1.08 : 0.78);
  model.position.y = type === "drone" ? 0.55 : 0.04;
  scene.add(model);

  const platform = new THREE.Mesh(
    new THREE.CylinderGeometry(type === "drone" ? 3.4 : 3.7, type === "drone" ? 3.6 : 3.9, 0.16, 64),
    standardMaterial(0x101a2b, { metalness: 0.42, roughness: 0.56 })
  );
  platform.position.y = type === "drone" ? -1.05 : -0.18;
  platform.receiveShadow = true;
  scene.add(platform);

  const grid = new THREE.GridHelper(10, 14, 0x2e6aa8, 0x16263b);
  grid.position.y = platform.position.y + 0.09;
  scene.add(grid);

  let targetX = type === "drone" ? -0.08 : -0.12;
  let targetY = type === "drone" ? -0.5 : -0.62;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let visible = false;
  let frame = 0;

  const resize = () => {
    const width = Math.max(1, container.clientWidth);
    const height = Math.max(1, container.clientHeight);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  resize();
  if ("ResizeObserver" in window) new ResizeObserver(resize).observe(container);

  const render = (time = 0) => {
    if (!visible) return;
    if (!dragging && !reducedMotion.matches) targetY += 0.0017;
    model.rotation.x += (targetX - model.rotation.x) * 0.08;
    model.rotation.y += (targetY - model.rotation.y) * 0.08;
    if (type === "drone") {
      model.position.y = 0.55 + (reducedMotion.matches ? 0 : Math.sin(time * 0.00135) * 0.08);
      model.children.forEach((child) => {
        if (child.userData.propeller && !reducedMotion.matches) child.rotation.y += 0.22;
      });
    }
    renderer.render(scene, camera);
    frame = window.requestAnimationFrame(render);
  };

  const visibilityObserver = new IntersectionObserver((entries) => {
    const nextVisible = entries[0]?.isIntersecting ?? false;
    if (nextVisible === visible) return;
    visible = nextVisible;
    if (visible) {
      window.cancelAnimationFrame(frame);
      render();
    }
  }, { threshold: 0.01 });
  visibilityObserver.observe(container);

  canvas.addEventListener("pointerdown", (event) => {
    dragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    targetY += (event.clientX - lastX) * 0.009;
    targetX = THREE.MathUtils.clamp(targetX + (event.clientY - lastY) * 0.006, -0.55, 0.55);
    lastX = event.clientX;
    lastY = event.clientY;
  });
  const stopDragging = (event) => {
    dragging = false;
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
  };
  canvas.addEventListener("pointerup", stopDragging);
  canvas.addEventListener("pointercancel", stopDragging);

  renderer.render(scene, camera);
  container.dataset.modelReady = "true";
}

const viewers = Array.from(document.querySelectorAll("[data-project-viewer]"));
if ("IntersectionObserver" in window) {
  const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      initializeViewer(entry.target);
      lazyObserver.unobserve(entry.target);
    });
  }, { rootMargin: "420px 0px" });
  viewers.forEach((viewer) => lazyObserver.observe(viewer));
} else {
  viewers.forEach(initializeViewer);
}
