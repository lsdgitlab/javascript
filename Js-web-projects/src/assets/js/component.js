import logo from '../image/DIGIVERSE00.svg';
import pattImg from "../image/pattern.png";

function component(){
    // let m = document.createElement('main');
    // let p = document.createElement('p');
    // let img = document.createElement('img')
    // m.append(p);
    // p.append(img);
    // img.src=pattImg;
    // // logo.alt="LOGO";
    // // document.getElementById("bannerImg").src =  headerbanner;

    // return m
}

export default component

// Three js Cube
let camera, cube, scene, renderer

function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
    75, window.innerWidth  / window.innerHeight,
    0.1,
    1000
)

renderer = new THREE.WebGLRenderer({antialise:true});
renderer.setSize(window.innerWidth, window.innerHeight);
console.log(renderer);
// const el = document.getElementById('myCanvas').innerHTML;
// // const main = document.createElement('main');
// // el.append(renderer.domElement)
// console.log(el);

// document.getElementById("mainContent").appendChild(renderer.domElement);
document.body.appendChild(renderer.domElement);
console.log("test");

const geometry = new THREE.BoxGeometry(2, 2, 2);

// const material = new THREE.MeshBasicMaterial({color: 0x008790});
// console.log(path);
const texture = new THREE.TextureLoader().load('assets/image/logo.jpg');
const material = new THREE.MeshBasicMaterial({map:texture});
cube = new THREE.Mesh(geometry, material);
scene.add(cube)

camera.position.z = 5;


}


function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

}
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);
init();
animate();

// Three JS Circle 