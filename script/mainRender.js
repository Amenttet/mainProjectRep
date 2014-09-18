var container, stats;

var camera, controls, scene, renderer;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 20000 );
    camera.position.z = 1090+500;

    controls = new THREE.TrackballControls( camera );

    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.0;
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
        var geometry	= new THREE.SphereGeometry(1090, 32, 32)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/sunmap.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/sunmap.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        return mesh;
    })();
    scene.add(sun);

    var mercury = (function(){
        var geometry	= new THREE.SphereGeometry(3.8, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/mercurymap.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/mercurybump.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 1128;
        return mesh;
    })();
    scene.add( mercury );

    var venus = (function(){
        var geometry	= new THREE.SphereGeometry(9.5, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/venusmap.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/venusbump.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 1162;
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
        mesh.position.z = 1190;
        return mesh;
    })();
    scene.add( earth );

    var mars = (function(){
        var geometry	= new THREE.SphereGeometry(5.3, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/marsmap1k.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/marsbump1k.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 1242;
        return mesh;
    })();
    scene.add( mars );

    var jupiter = (function(){
        var geometry	= new THREE.SphereGeometry(112, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/jupitermap.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/jupitermap.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 1610;
        return mesh;
    })();
    scene.add( jupiter );

    var saturn = (function(){
        var geometry	= new THREE.SphereGeometry(94, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/saturnmap.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/saturnmap.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 2044;
        return mesh;
    })();
    scene.add( saturn );

    var uranus = (function(){
        var geometry	= new THREE.SphereGeometry(39, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/uranusmap.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/uranusmap.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 3012;
        return mesh;
    })();
    scene.add( uranus );

    var neptune = (function(){
        var geometry	= new THREE.SphereGeometry(38, 16, 16)
        var material	= new THREE.MeshPhongMaterial({
            map	: THREE.ImageUtils.loadTexture('images/neptunemap.jpg'),
            bumpMap	: THREE.ImageUtils.loadTexture('images/neptunemap.jpg'),
            bumpScale: 0.002
        })
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 4090;
        return mesh;
    })();
    scene.add( neptune );


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

    var time = Date.now() ;
/*
    for ( var i = 2, l = 10; i < l; i ++ ) {

        scene.children[ i ].position.x = Math.sin( time * 0.5 * i ) * i * 150;
        scene.children[ i ].position.z = Math.cos( time * 0.5 * i) * i * 150;

    }
*/
    scene.children[ 2 ].position.x = Math.sin( time * 0.00016) * 1128;
    scene.children[ 2 ].position.z = Math.cos( time * 0.00016) * 1128;
    scene.children[ 3 ].position.x = Math.sin( time * 0.00065) * 1162;
    scene.children[ 3 ].position.z = Math.cos( time * 0.00065) * 1162;
    scene.children[ 4 ].position.x = Math.sin( time * 0.0004) * 1190;
    scene.children[ 4 ].position.z = Math.cos( time * 0.0004) * 1190;
    scene.children[ 5 ].position.x = Math.sin( time * 0.0002127) * 1242;
    scene.children[ 5 ].position.z = Math.cos( time * 0.0002127) * 1242;
    scene.children[ 6 ].position.x = Math.sin( time * 0.0000337) * 1610;
    scene.children[ 6 ].position.z = Math.cos( time * 0.0000337) * 1610;
    scene.children[ 7 ].position.x = Math.sin( time * 0.0000135) * 2044;
    scene.children[ 7 ].position.z = Math.cos( time * 0.0000135) * 2044;
    scene.children[ 8 ].position.x = Math.sin( time * 0.0000047) * 3012;
    scene.children[ 8 ].position.z = Math.cos( time * 0.0000047) * 3012;
    scene.children[ 9 ].position.x = Math.sin( time * 0.0000002) * 4090;
    scene.children[ 9 ].position.z = Math.cos( time * 0.0000002) * 4090;
    renderer.render( scene, camera );
}
