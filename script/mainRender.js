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
            bumpMap	: THREE.ImageUtils.loadTexture('images/sunmap.jpg'),
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

    var venus = (function(){
        var geometry	= new THREE.SphereGeometry(10, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/venusmap.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/venusbump.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 300;
        return mesh;
    })();
    scene.add( venus );

    var earth = (function(){
        var geometry	= new THREE.SphereGeometry(10, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/earthmap1k.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/earthbump1k.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 400;
        return mesh;
    })();
    scene.add( earth );

    var mars = (function(){
        var geometry	= new THREE.SphereGeometry(10, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/marsmap1k.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/marsbump1k.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 500;
        return mesh;
    })();
    scene.add( mars );

    var jupiter = (function(){
        var geometry	= new THREE.SphereGeometry(10, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/jupitermap.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/jupitermap.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 600;
        return mesh;
    })();
    scene.add( jupiter );

    var saturn = (function(){
        var geometry	= new THREE.SphereGeometry(10, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/saturnmap.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/saturnmap.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 700;
        return mesh;
    })();
    scene.add( saturn );

    var uranus = (function(){
        var geometry	= new THREE.SphereGeometry(10, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/uranusmap.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/uranusmap.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 800;
        return mesh;
    })();
    scene.add( uranus );

    var neptune = (function(){
        var geometry	= new THREE.SphereGeometry(10, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/neptunemap.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/neptunemap.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 900;
        return mesh;
    })();
    scene.add( neptune );

    var pluton = (function(){
        var geometry	= new THREE.SphereGeometry(10, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/plutomap1k.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/plutobump1k.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 1000;
        return mesh;
    })();
    scene.add( pluton );


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
/*
    for ( var i = 2, l = 11; i < l; i ++ ) {

        scene.children[ i ].position.x = Math.sin( time * 0.5 * i ) * i * 150;
        scene.children[ i ].position.z = Math.cos( time * 0.5 * i) * i * 150;

    }
*/
    renderer.render( scene, camera );
}
