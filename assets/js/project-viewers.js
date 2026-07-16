import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.184.0/build/three.module.js";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const standardMaterial = (color, options = {}) => new THREE.MeshStandardMaterial({
  color,
  metalness: options.metalness ?? 0.48,
  roughness: options.roughness ?? 0.34,
  emissive: options.emissive ?? 0x000000,
  emissiveIntensity: options.emissiveIntensity ?? 0,
});

const physicalMaterial = (color, options = {}) => new THREE.MeshPhysicalMaterial({
  color,
  metalness: options.metalness ?? 0.55,
  roughness: options.roughness ?? 0.28,
  clearcoat: options.clearcoat ?? 0.65,
  clearcoatRoughness: options.clearcoatRoughness ?? 0.16,
  emissive: options.emissive ?? 0x000000,
  emissiveIntensity: options.emissiveIntensity ?? 0,
  transparent: options.transparent ?? false,
  opacity: options.opacity ?? 1,
  side: options.side ?? THREE.FrontSide,
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
  group.name = "DroneDream detailed quadcopter";

  const carbon = physicalMaterial(0x171827, { metalness: 0.72, roughness: 0.28, clearcoat: 0.75 });
  const graphite = standardMaterial(0x30334a, { metalness: 0.7, roughness: 0.34 });
  const metal = standardMaterial(0x697087, { metalness: 0.9, roughness: 0.22 });
  const glass = physicalMaterial(0x07121c, {
    metalness: 0.2,
    roughness: 0.05,
    emissive: 0x0b3e56,
    emissiveIntensity: 0.55,
    transparent: true,
    opacity: 0.92,
  });
  const cyan = standardMaterial(0x54e8ff, { emissive: 0x54e8ff, emissiveIntensity: 4.2 });
  cyan.toneMapped = false;
  const magenta = standardMaterial(0xff4fd8, { emissive: 0xff4fd8, emissiveIntensity: 4.2 });
  magenta.toneMapped = false;

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.48, 0.82, 10, 24), carbon);
  body.rotation.x = Math.PI / 2;
  body.scale.set(1.08, 0.68, 1.28);
  body.castShadow = true;
  group.add(body);

  const upperShell = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 18), graphite);
  upperShell.scale.set(1.02, 0.36, 1.2);
  upperShell.position.set(0, 0.28, -0.05);
  upperShell.castShadow = true;
  group.add(upperShell);

  addBox(group, [0.78, 0.25, 0.9], [0, 0.39, -0.15], carbon, [-0.04, 0, 0]);
  addBox(group, [0.8, 0.018, 0.16], [0, 0.523, -0.25], cyan);

  const motorPoints = [
    [-1.58, 0.04, -1.3], [1.58, 0.04, -1.3],
    [-1.58, 0.04, 1.3], [1.58, 0.04, 1.3],
  ];

  motorPoints.forEach((point, index) => {
    const shoulder = [point[0] * 0.34, 0.02, point[2] * 0.34];
    const elbow = [point[0] * 0.72, point[2] > 0 ? 0.02 : 0.1, point[2] * 0.72];
    addCylinderBetween(group, shoulder, elbow, 0.095, carbon);
    addCylinderBetween(group, elbow, point, 0.082, graphite);

    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.19, 0.18, 24), metal);
    collar.position.set(...point);
    collar.castShadow = true;
    group.add(collar);

    const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.18, 0.26, 24), carbon);
    motor.position.set(point[0], point[1] + 0.17, point[2]);
    motor.castShadow = true;
    group.add(motor);

    const rotor = new THREE.Group();
    rotor.position.set(point[0], point[1] + 0.33, point[2]);
    rotor.userData.rotor = true;
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.08, 18), metal);
    hub.position.y = 0.03;
    rotor.add(hub);

    const bladeMaterial = physicalMaterial(index < 2 ? 0x596177 : 0x3f465b, {
      metalness: 0.42,
      roughness: 0.22,
      clearcoat: 0.35,
      transparent: true,
      opacity: 0.82,
      side: THREE.DoubleSide,
    });
    const bladeGeometry = new THREE.BoxGeometry(1.42, 0.026, 0.105, 8, 1, 2);
    const firstBlade = new THREE.Mesh(bladeGeometry, bladeMaterial);
    firstBlade.rotation.y = 0.08;
    firstBlade.castShadow = true;
    rotor.add(firstBlade);
    const secondBlade = firstBlade.clone();
    secondBlade.rotation.y = Math.PI / 2 + 0.08;
    rotor.add(secondBlade);

    const wash = new THREE.Mesh(
      new THREE.RingGeometry(0.28, 0.76, 48),
      new THREE.MeshBasicMaterial({
        color: index % 2 === 0 ? 0x54e8ff : 0xff4fd8,
        transparent: true,
        opacity: 0.075,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    wash.rotation.x = -Math.PI / 2;
    wash.position.y = -0.025;
    rotor.add(wash);
    group.add(rotor);

    const led = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 10), point[2] > 0 ? magenta : cyan);
    led.position.set(point[0], point[1] - 0.11, point[2] + (point[2] > 0 ? 0.11 : -0.11));
    group.add(led);
  });

  const gimbalYaw = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.16, 24), metal);
  gimbalYaw.position.set(0, -0.47, 0.49);
  group.add(gimbalYaw);
  addCylinderBetween(group, [0, -0.48, 0.49], [0, -0.69, 0.7], 0.045, metal);
  addBox(group, [0.43, 0.35, 0.38], [0, -0.71, 0.78], graphite, [-0.13, 0, 0]);
  const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.125, 0.145, 0.09, 28), glass);
  lens.rotation.x = Math.PI / 2;
  lens.position.set(0, -0.73, 1.005);
  group.add(lens);
  const lensCore = new THREE.Mesh(new THREE.CircleGeometry(0.07, 24), cyan);
  lensCore.position.set(0, -0.73, 1.054);
  group.add(lensCore);

  [-0.52, 0.52].forEach((x) => {
    const hip = [x, -0.3, -0.22];
    const footFront = [x * 1.28, -0.94, 0.68];
    const footRear = [x * 1.28, -0.94, -0.7];
    addCylinderBetween(group, hip, footFront, 0.043, metal);
    addCylinderBetween(group, hip, footRear, 0.043, metal);
    addCylinderBetween(group, footRear, footFront, 0.038, graphite);
  });

  [-0.585, 0.585].forEach((x) => addBox(group, [0.035, 0.12, 0.74], [x, 0.04, 0.02], x < 0 ? cyan : magenta));
  group.rotation.x = -0.08;
  return group;
}

function createRaceCar() {
  const group = new THREE.Group();
  group.name = "RaceCar Lab detailed formula car";
  const red = physicalMaterial(0xd94b3a, { metalness: 0.56, roughness: 0.24, clearcoat: 0.86 });
  const redDark = physicalMaterial(0x9d261f, { metalness: 0.58, roughness: 0.28, clearcoat: 0.72 });
  const carbon = physicalMaterial(0x11171c, { metalness: 0.58, roughness: 0.3, clearcoat: 0.42 });
  const carbonSoft = standardMaterial(0x26333b, { metalness: 0.52, roughness: 0.32 });
  const tire = standardMaterial(0x070809, { metalness: 0.02, roughness: 0.9 });
  const metal = standardMaterial(0xbac4ca, { metalness: 0.9, roughness: 0.22 });
  const darkMetal = standardMaterial(0x2f3940, { metalness: 0.82, roughness: 0.28 });
  const cyan = standardMaterial(0x43d5f5, { emissive: 0x0c5364, emissiveIntensity: 0.58, metalness: 0.72, roughness: 0.24 });
  const gold = standardMaterial(0xd5b15b, { metalness: 0.72, roughness: 0.28 });

  // Floor, diffuser and sculpted side edges.
  addBox(group, [2.05, 0.1, 5.65], [0, 0.27, -0.28], carbon);
  [-0.92, 0.92].forEach((x) => addBox(group, [0.08, 0.17, 5.45], [x, 0.37, -0.3], carbonSoft));
  [-0.65, 0, 0.65].forEach((x) => addBox(group, [0.06, 0.07, 1.25], [x, 0.44, -3.15], cyan, [-0.24, 0, 0]));

  // Multi-element front wing with endplates and painted central bridge.
  addBox(group, [3.15, 0.08, 0.42], [0, 0.42, 3.72], carbon);
  addBox(group, [2.72, 0.07, 0.34], [0, 0.55, 3.48], carbonSoft, [-0.13, 0, 0]);
  [-1.55, 1.55].forEach((x) => addBox(group, [0.07, 0.58, 0.65], [x, 0.57, 3.62], carbon));
  addBox(group, [0.82, 0.08, 0.52], [0, 0.63, 3.64], red);

  // Rear wing, twin supports and endplates.
  addBox(group, [2.42, 0.12, 0.48], [0, 1.65, -3.72], carbon, [0.07, 0, 0]);
  addBox(group, [2.3, 0.09, 0.34], [0, 1.88, -3.62], carbonSoft, [0.17, 0, 0]);
  [-1.2, 1.2].forEach((x) => addBox(group, [0.08, 0.72, 0.78], [x, 1.67, -3.66], carbon));
  [-0.42, 0.42].forEach((x) => addBox(group, [0.08, 1.05, 0.1], [x, 1.15, -3.58], metal, [0.07, 0, 0]));

  // Tapered nose and crash structure.
  const nose = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.47, 2.1, 8), red);
  nose.position.set(0, 0.72, 2.72);
  nose.rotation.x = Math.PI / 2;
  nose.castShadow = true;
  group.add(nose);
  const noseTip = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.2, 0.28, 8), metal);
  noseTip.position.set(0, 0.7, 3.62);
  noseTip.rotation.x = Math.PI / 2;
  group.add(noseTip);

  // Monocoque, cockpit opening, seat and instrument shelf.
  const monocoque = new THREE.Mesh(new THREE.CapsuleGeometry(0.65, 1.72, 8, 20), carbonSoft);
  monocoque.rotation.x = Math.PI / 2;
  monocoque.scale.set(1.0, 0.72, 1.05);
  monocoque.position.set(0, 0.82, 0.42);
  monocoque.castShadow = true;
  group.add(monocoque);
  const cockpit = new THREE.Mesh(new THREE.SphereGeometry(0.62, 28, 18), tire);
  cockpit.scale.set(0.7, 0.55, 1.05);
  cockpit.position.set(0, 1.15, 0.56);
  group.add(cockpit);
  addBox(group, [0.7, 0.26, 0.98], [0, 0.81, 0.55], standardMaterial(0x3c4449, { roughness: 0.82, metalness: 0.08 }));
  addBox(group, [0.38, 0.08, 0.52], [0, 1.03, 1.0], metal, [0.33, 0, 0]);

  // Halo and steering assembly.
  addCylinderBetween(group, [0, 1.38, 0.9], [0, 1.88, 0.52], 0.055, metal);
  addCylinderBetween(group, [0, 1.86, 0.5], [-0.58, 1.55, -0.15], 0.055, metal);
  addCylinderBetween(group, [0, 1.86, 0.5], [0.58, 1.55, -0.15], 0.055, metal);
  addCylinderBetween(group, [-0.58, 1.55, -0.15], [0.58, 1.55, -0.15], 0.055, metal);
  addCylinderBetween(group, [0, 1.04, 0.85], [0, 0.74, 1.55], 0.035, metal);
  addCylinderBetween(group, [-0.72, 0.7, 1.85], [0.72, 0.7, 1.85], 0.055, darkMetal);
  const steeringWheel = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.035, 12, 28), carbonSoft);
  steeringWheel.position.set(0, 1.08, 0.85);
  steeringWheel.rotation.x = Math.PI / 2;
  group.add(steeringWheel);

  // Sidepods, cooling intakes and visible radiator fins.
  [-1, 1].forEach((side) => {
    addBox(group, [0.52, 0.72, 1.55], [side * 0.94, 0.75, -0.48], side < 0 ? red : redDark);
    addBox(group, [0.42, 0.44, 0.08], [side * 0.91, 0.79, 0.1], darkMetal, [0, side * 0.12, 0]);
    [-0.14, -0.07, 0, 0.07, 0.14].forEach((offset) => {
      addBox(group, [0.018, 0.39, 0.05], [side * 0.94 + offset, 0.79, 0.15], metal);
    });
    addBox(group, [0.42, 0.28, 1.65], [side * 0.68, 0.52, -1.6], carbonSoft, [0.06, 0, side * 0.18]);
  });

  // Exposed electric powertrain details.
  addBox(group, [1.05, 0.38, 1.48], [0, 0.52, -0.75], darkMetal);
  [-0.28, 0, 0.28].forEach((x) => addBox(group, [0.1, 0.03, 1.25], [x, 0.72, -0.75], standardMaterial(0xf3b743, { emissive: 0x704411, emissiveIntensity: 0.3 })));
  addBox(group, [0.72, 0.36, 0.65], [0.46, 0.83, -1.62], darkMetal);
  [-0.2, -0.1, 0, 0.1, 0.2].forEach((offset) => addBox(group, [0.035, 0.05, 0.52], [0.46 + offset, 1.025, -1.62], metal));
  const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.72, 24), metal);
  motor.position.set(0, 0.7, -2.3);
  motor.rotation.z = Math.PI / 2;
  motor.castShadow = true;
  group.add(motor);
  const motorRing = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.035, 12, 30), cyan);
  motorRing.position.set(0, 0.7, -2.3);
  motorRing.rotation.y = Math.PI / 2;
  group.add(motorRing);
  const differential = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.56, 18), darkMetal);
  differential.position.set(0, 0.65, -2.82);
  differential.rotation.z = Math.PI / 2;
  group.add(differential);
  addCylinderBetween(group, [-1.36, 0.62, -2.35], [-0.25, 0.65, -2.8], 0.045, metal);
  addCylinderBetween(group, [1.36, 0.62, -2.35], [0.25, 0.65, -2.8], 0.045, metal);

  // ECU and sensor nodes.
  addBox(group, [0.54, 0.22, 0.62], [-0.43, 0.93, 0.05], standardMaterial(0x6b51ba, { metalness: 0.55, roughness: 0.36 }));
  addBox(group, [0.32, 0.035, 0.38], [-0.43, 1.06, 0.05], standardMaterial(0xbbabff, { emissive: 0x6249c2, emissiveIntensity: 0.65 }));
  [[-1.45, 0.9, 2.15], [1.45, 0.9, 2.15], [-1.45, 0.9, -2.35], [1.45, 0.9, -2.35], [0, 1.28, -1.2], [0, 1.36, 1.2]].forEach((position) => {
    const sensor = new THREE.Mesh(new THREE.SphereGeometry(0.065, 14, 14), standardMaterial(0xb492ff, { emissive: 0x6f44dd, emissiveIntensity: 1.1 }));
    sensor.position.set(...position);
    group.add(sensor);
  });

  // Wheels, discs, calipers and double-wishbone suspension.
  const wheelPositions = [[-1.55, 0.64, 2.15], [1.55, 0.64, 2.15], [-1.55, 0.64, -2.35], [1.55, 0.64, -2.35]];
  wheelPositions.forEach(([x, y, z]) => {
    const wheelGroup = new THREE.Group();
    wheelGroup.position.set(x, y, z);
    wheelGroup.userData.wheel = true;
    const tyreMesh = new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.16, 18, 42), tire);
    tyreMesh.rotation.y = Math.PI / 2;
    tyreMesh.scale.z = 1.18;
    tyreMesh.castShadow = true;
    wheelGroup.add(tyreMesh);
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.29, 0.32, 24), darkMetal);
    rim.rotation.z = Math.PI / 2;
    rim.castShadow = true;
    wheelGroup.add(rim);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.39, 18), cyan);
    hub.rotation.z = Math.PI / 2;
    wheelGroup.add(hub);
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.27, 0.06, 30), metal);
    disc.rotation.z = Math.PI / 2;
    wheelGroup.add(disc);
    addBox(wheelGroup, [0.18, 0.11, 0.2], [x > 0 ? -0.04 : 0.04, 0.08, 0], gold);
    group.add(wheelGroup);
  });

  [-1, 1].forEach((side) => {
    [[0.52, 0.92, 1.68, 1.38, 0.78, 2.15], [0.52, 0.92, 2.03, 1.38, 0.78, 2.15], [0.54, 0.46, 1.66, 1.38, 0.42, 2.15], [0.54, 0.46, 2.04, 1.38, 0.42, 2.15]].forEach(([sx, sy, sz, ex, ey, ez]) => addCylinderBetween(group, [side * sx, sy, sz], [side * ex, ey, ez], 0.025, metal));
    addCylinderBetween(group, [side * 1.36, 0.66, 2.15], [side * 0.32, 1.22, 1.78], 0.032, red);
    [[0.55, 0.95, -1.9, 1.38, 0.78, -2.35], [0.55, 0.95, -2.35, 1.38, 0.78, -2.35], [0.56, 0.46, -1.9, 1.38, 0.42, -2.35], [0.56, 0.46, -2.38, 1.38, 0.42, -2.35]].forEach(([sx, sy, sz, ex, ey, ez]) => addCylinderBetween(group, [side * sx, sy, sz], [side * ex, ey, ez], 0.025, metal));
    addCylinderBetween(group, [side * 1.36, 0.66, -2.35], [side * 0.36, 1.18, -2.03], 0.032, red);
  });

  // A small code-generated team mark, echoing the full RaceCar Lab livery system.
  const liveryCanvas = document.createElement("canvas");
  liveryCanvas.width = 768;
  liveryCanvas.height = 256;
  const context = liveryCanvas.getContext("2d");
  if (context) {
    context.clearRect(0, 0, 768, 256);
    context.fillStyle = "#ffffff";
    context.font = "900 128px Arial Black, Arial, sans-serif";
    context.fillText("01", 18, 142);
    context.fillStyle = "#43d5f5";
    context.fillRect(240, 58, 470, 14);
    context.font = "800 54px Arial, sans-serif";
    context.fillText("RACECAR LAB", 242, 145);
    const texture = new THREE.CanvasTexture(liveryCanvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    [-1, 1].forEach((side) => {
      const mark = new THREE.Mesh(new THREE.PlaneGeometry(1.45, 0.48), new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, side: THREE.DoubleSide }));
      mark.position.set(side * 1.205, 0.86, -0.42);
      mark.rotation.y = side > 0 ? Math.PI / 2 : -Math.PI / 2;
      group.add(mark);
    });
  }

  group.rotation.x = -0.03;
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
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x08101c, 1);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x08101c, 8.5, 15);
  const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 40);
  const type = container.dataset.projectViewer;
  camera.position.set(type === "drone" ? 5.8 : 6.7, type === "drone" ? 3.2 : 3.6, type === "drone" ? 6.2 : 8.2);
  camera.lookAt(0, type === "drone" ? 0.1 : 0.55, 0);

  scene.add(new THREE.HemisphereLight(0xc9e7ff, 0x111522, 2.65));
  const key = new THREE.DirectionalLight(0xffffff, 4.1);
  key.position.set(4, 7, 5);
  key.castShadow = true;
  scene.add(key);
  const accent = new THREE.PointLight(type === "drone" ? 0xd454ff : 0xff4b46, 13, 10);
  accent.position.set(-3.5, 2.4, -2.2);
  scene.add(accent);
  const cyan = new THREE.PointLight(0x3bdcf4, 10, 9);
  cyan.position.set(3, 1.5, 3);
  scene.add(cyan);
  const rim = new THREE.DirectionalLight(type === "drone" ? 0xff69da : 0xff7b62, 2.2);
  rim.position.set(-4, 3.5, -5);
  scene.add(rim);

  const model = type === "drone" ? createDrone() : createRaceCar();
  model.scale.setScalar(type === "drone" ? 1.08 : 0.88);
  model.position.y = type === "drone" ? 0.55 : -0.1;
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
    }
    if (!reducedMotion.matches) {
      model.traverse((child) => {
        if (child.userData.rotor) child.rotation.y += 0.24;
        if (child.userData.wheel) child.rotation.x += 0.025;
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
