const threeArea = document.getElementById('three-area');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, threeArea.offsetWidth / threeArea.offsetHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( threeArea.offsetWidth, threeArea.offsetHeight );
renderer.setClearColor( 0x000000, 0 ); // the default

threeArea.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();

window.addEventListener('resize', function(event) {
    renderer.setSize(threeArea.offsetWidth, threeArea.offsetHeight);
    camera.aspect = threeArea.offsetWidth / threeArea.offsetHeight;
    camera.updateProjectionMatrix();
}, true);