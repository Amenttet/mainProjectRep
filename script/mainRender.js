var container, stats;

var camera, controls, scene, renderer;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 20000 );
    camera.position.z = 500;

    controls = new THREE.TrackballControls( camera );

    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.0;

    controls.noZoom = false;
    controls.noPan = true;

    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;

    controls.keys = [ 65, 83, 68 ];

    controls.addEventListener( 'change', render );

    // world

    scene = new THREE.Scene();

    var starfield = (function(){
        var texture	= THREE.ImageUtils.loadTexture('images/galaxy_starfield.png')
        var material	= new THREE.MeshBasicMaterial({
            map	    : texture,
            side	: THREE.DoubleSide
        })
        var geometry	= new THREE.SphereGeometry(9000, 8, 8)
        var mesh = new THREE.Mesh(geometry, material);
        return mesh;
        })();
    scene.add(starfield);


    var sun = (function(){
        var geometry	= new THREE.SphereGeometry(100, 32, 32)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/sunmap.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/moonbump1k.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        return mesh;
    })();
    scene.add(sun);


    var geometry1 = new THREE.SphereGeometry(10,16,16);
    var material1 =  new THREE.MeshLambertMaterial( { color:0x800080, shading: THREE.FlatShading } );

    var mercury = (function(){
        var geometry	= new THREE.SphereGeometry(10, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/mercurymap.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/mercurybump.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 200;
        return mesh;
    })();
    scene.add( mercury );

    var planet2 = new THREE.Mesh (geometry1,material1);
    planet2.position.x = 0;
    planet2.position.y = 0;
    planet2.position.z = 300;
    planet2.updateMatrix();
    scene.add( planet2 );

    var planet3 = new THREE.Mesh (geometry1,material1);
    planet3.position.x = 0;
    planet3.position.y = 0;
    planet3.position.z = 400;
    planet3.updateMatrix();
    scene.add( planet3 );

    var planet4 = new THREE.Mesh (geometry1,material1);
    planet4.position.x = 0;
    planet4.position.y = 0;
    planet4.position.z = 500;
    planet4.updateMatrix();
    scene.add( planet4 );

    var planet5 = new THREE.Mesh (geometry1,material1);
    planet5.position.x = 0;
    planet5.position.y = 00;
    planet5.position.z = 600;
    planet5.updateMatrix();
    scene.add( planet5 );

    var planet6 = new THREE.Mesh (geometry1,material1);
    planet6.position.x = 0;
    planet6.position.y = 0;
    planet6.position.z = 700;
    planet6.updateMatrix();
    scene.add( planet6 );

    var planet7 = new THREE.Mesh (geometry1,material1);
    planet7.position.x = 0;
    planet7.position.y = 0;
    planet7.position.z = 800;
    planet7.updateMatrix();
    scene.add( planet7 );

    var planet8 = new THREE.Mesh (geometry1,material1);
    planet8.position.x = 0;
    planet8.position.y = 0;
    planet8.position.z = 900;
    planet8.updateMatrix();
    scene.add( planet8 );

    var planet9 = new THREE.Mesh (geometry1,material1);
    planet9.position.x = 0;
    planet9.position.y = 0;
    planet9.position.z = 1000;
    planet9.updateMatrix();
    scene.add( planet9 );


    // lights

    light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 1, 1, 1 );
    scene.add( light );

    light = new THREE.DirectionalLight( 0x002288 );
    light.position.set( -1, -1, -1 );
    scene.add( light );

    light = new THREE.AmbientLight( 0x222222 );
    scene.add( light );


    // renderer

    renderer = new THREE.WebGLRenderer( { antialias: false } );
    renderer.setSize( window.innerWidth, window.innerHeight );

    container = document.getElementById( 'container' );
    container.appendChild( renderer.domElement );
    //

    window.addEventListener( 'resize', onWindowResize, false );

    //

    render();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    controls.handleResize();

    render();

}

function animate()
{
    requestAnimationFrame( animate );
    render();
    controls.update();
}

function render()
{

    var time = Date.now() * 0.0005;

    for ( var i = 2, l = 11; i < l; i ++ ) {

        scene.children[ i ].position.x = Math.sin( time * 0.5 * i ) * i * 150;
        scene.children[ i ].position.z = Math.cos( time * 0.5 * i) * i * 150;

    }

    renderer.render( scene, camera );
}
