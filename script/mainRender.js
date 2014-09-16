var container, stats;

var camera, controls, scene, renderer;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 500;

    controls = new THREE.TrackballControls( camera );

    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.0;

    controls.noZoom = false;
    controls.noPan = false;

    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;

    controls.keys = [ 65, 83, 68 ];

    controls.addEventListener( 'change', render );

    // world

    scene = new THREE.Scene();

    var geometry = new THREE.SphereGeometry(80,16,16);
    var material =  new THREE.MeshLambertMaterial( { color:0xffff00, shading: THREE.FlatShading } );

    var mesh = new THREE.Mesh (geometry,material);
    mesh.updateMatrix();
    mesh.matrixAutoUpdate = false;
    scene.add( mesh );

    var geometry1 = new THREE.SphereGeometry(10,16,16);
    var material1 =  new THREE.MeshLambertMaterial( { color:0x800080, shading: THREE.FlatShading } );

    var planet1 = new THREE.Mesh (geometry1,material1);
    planet1.position.x = 0;
    planet1.position.y = 0;
    planet1.position.z = 200;
    planet1.updateMatrix();
    //planet1.matrixAutoUpdate = false;
    scene.add( planet1 );

    var planet2 = new THREE.Mesh (geometry1,material1);
    planet2.position.x = 0;
    planet2.position.y = 0;
    planet2.position.z = 300;
    planet2.updateMatrix();
    //planet2.matrixAutoUpdate = false;
    scene.add( planet2 );

    var planet3 = new THREE.Mesh (geometry1,material1);
    planet3.position.x = 0;
    planet3.position.y = 0;
    planet3.position.z = 400;
    planet3.updateMatrix();
    //planet3.matrixAutoUpdate = false;
    scene.add( planet3 );

    var planet4 = new THREE.Mesh (geometry1,material1);
    planet4.position.x = 0;
    planet4.position.y = 0;
    planet4.position.z = 500;
    planet4.updateMatrix();
    //planet4.matrixAutoUpdate = false;
    scene.add( planet4 );

    var planet5 = new THREE.Mesh (geometry1,material1);
    planet5.position.x = 0;
    planet5.position.y = 00;
    planet5.position.z = 600;
    planet5.updateMatrix();
    //planet5.matrixAutoUpdate = false;
    scene.add( planet5 );

    var planet6 = new THREE.Mesh (geometry1,material1);
    planet6.position.x = 0;
    planet6.position.y = 0;
    planet6.position.z = 700;
    planet6.updateMatrix();
    //planet6.matrixAutoUpdate = false;
    scene.add( planet6 );

    var planet7 = new THREE.Mesh (geometry1,material1);
    planet7.position.x = 0;
    planet7.position.y = 0;
    planet7.position.z = 800;
    planet7.updateMatrix();
   // planet7.matrixAutoUpdate = false;
    scene.add( planet7 );

    var planet8 = new THREE.Mesh (geometry1,material1);
    planet8.position.x = 0;
    planet8.position.y = 0;
    planet8.position.z = 900;
    planet8.updateMatrix();
    //planet8.matrixAutoUpdate = false;
    scene.add( planet8 );

    var planet9 = new THREE.Mesh (geometry1,material1);
    planet9.position.x = 0;
    planet9.position.y = 0;
    planet9.position.z = 1000;
    planet9.updateMatrix();
    //planet9.matrixAutoUpdate = false;
    scene.add( planet9 );

    //scene.matrixAutoUpdate = false;

    // create sprites

    var amount = 500;
    var radius = 1000;

    //var mapA = THREE.ImageUtils.loadTexture( "textures/sprite0.png", undefined, createHUDSprites );
    var mapB = THREE.ImageUtils.loadTexture( "textures/sprite1.png" );
    mapC = THREE.ImageUtils.loadTexture( "textures/sprite2.png" );

    group = new THREE.Object3D();

    var materialC = new THREE.SpriteMaterial( { map: mapC, color: 0xffffff, fog: true } );
    var materialB = new THREE.SpriteMaterial( { map: mapB, color: 0xffffff, fog: true } );

    for ( var a = 0; a < amount; a ++ ) {

        var x = Math.random() - 0.5;
        var y = Math.random() - 0.5;
        var z = Math.random() - 0.5;

        if ( z < 0 ) {

            material = materialB.clone();

        } else {

            material = materialC.clone();
            material.color.setHSL( 0.5 * Math.random(), 0.75, 0.5 );
            material.map.offset.set( -0.5, -0.5 );
            material.map.repeat.set( 2, 2 );

        }

        var sprite = new THREE.Sprite( material );

        sprite.position.set( x, y, z );
        sprite.position.normalize();
        sprite.position.multiplyScalar( radius );

        group.add( sprite );

    }

    scene.add( group );

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

function createHUDSprites ( texture ) {

    var material = new THREE.SpriteMaterial( { map: texture } );

    var width = material.map.image.width;
    var height = material.map.image.height;

    spriteTL = new THREE.Sprite( material );
    spriteTL.scale.set( width, height, 1 );
    sceneOrtho.add( spriteTL );

    spriteTR = new THREE.Sprite( material );
    spriteTR.scale.set( width, height, 1 );
    sceneOrtho.add( spriteTR );

    spriteBL = new THREE.Sprite( material );
    spriteBL.scale.set( width, height, 1 );
    sceneOrtho.add( spriteBL );

    spriteBR = new THREE.Sprite( material );
    spriteBR.scale.set( width, height, 1 );
    sceneOrtho.add( spriteBR );

    spriteC = new THREE.Sprite( material );
    spriteC.scale.set( width, height, 1 );
    sceneOrtho.add( spriteC );

    updateHUDSprites();

};


function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    controls.handleResize();

    render();

}

function cosmos(scene)
{

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

    for ( var i = 1, l = 10; i < l; i ++ ) {

        scene.children[ i ].position.x = Math.sin( time * 0.5 * i ) * i * 150;
        scene.children[ i ].position.z = Math.cos( time * 0.5 * i) * i * 150;

    }

    renderer.render( scene, camera );
}
