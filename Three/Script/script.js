// console.log(THREE)

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshBasicMaterial({color: 'blue'})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const size={
    width: window.innerWidth,
    height: window.innerHeight
}

// camera
const camera = new THREE.PerspectiveCamera(75, size.width/size.height)
camera.position.x = 2;
camera.position.y = -1;
camera.position.z = 4;
// , 0.1, 1000
scene.add(camera)

// render
const SceneObj = document.querySelector(".scene")
const renderer = new THREE.WebGLRenderer({canvas: SceneObj})
renderer.setSize(size.width, size.height)
renderer.render(scene,camera)

