console.log("tst123");
// var AmanHe = 160;
// var AmanAge = 24;
// var PrafullaHe = 170;
// var PrafullaAge = 35;

// var scoreAman = AmanHe + 5 * AmanAge;
// var scorePrafulla = PrafullaHe + 5 * PrafullaAge;

// if(scorePrafulla > scoreAman){
//     console.log('Prafulla Wins with ' + scorePrafulla + ' points');
// } else if(scoreAman > scorePrafulla){
//     console.log('Aman Wins with ' + scoreAman + ' points');
// } else if (scorePrafulla === scoreAman){
//     console.log("There is a draw");
// }

// const FCC = "freeCodeCamp"; // Change this line
// let fact = "is cool!"; // Change this line
// fact = "is awesome!";
// console.log(FCC, fact); // Change this lin

// canvas
const canvas = document.querySelector('canvas.webGl')

// scene
const scene = new THREE.Scene();

// object
const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);
console.log(geometry);

// material
const material = new THREE.MeshBasicMaterial();
material.color = new THREE.Color(0xff0000);

// mesh
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

// light
const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x =2
pointLight.position.y =3
pointLight.position.z =4
scene.add(pointLight)

const sizes = {
    width:window.innerWidth,
    height:window.innerHeight
}

window.addEventListener( 'resize', ()=>{
    // update size
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // camera
    CanvasCaptureMediaStreamTrack.aspect = sizes.width/ sizes.height
    camera.updateProjectionMatrix()

    // rendere
    rendere.setSize(sizes.width, sizes.height)
    rendere.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

/*  Camera */
// base Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/ sizes.height, 0.1, 100) 
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer


const rendere = new THREE.WebGLRenderer({
    canvas: canvas
})
rendere.setSize(sizes.width, sizes.height)
rendere.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/* Animate */
const clock = new THREE.Clock()
const tick = () =>{
    const elapsedTime = clock.getElapsedTime()

    // update object 
    sphere.rotation.y = .5 * elapsedTime

    // update Orbital Controls
    // controls.update()

    // Render
    rendere.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick();










