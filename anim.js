BABYLON.SceneLoader.Append("./", "f3d-walk.glb", scene,
    function (newMeshes2, particleSystems, skeletons) {
        var walk = scene.getMeshByName("__root__");
        walk.scaling= new BABYLON.Vector3(0.3,0.3,0.3);
        walk.position = new BABYLON.Vector3(0, 0, 0);

        let isWPressed = false;

        document.addEventListener('keydown', (e) => {
            if (e.keyCode == 87) { isWPressed = true; }
        });

        document.addEventListener('keyup', (e) => {
            if (e.keyCode == 87) { isWPressed = false; }
        });

        scene.registerBeforeRender(function() {
            if (!scene.isReady()) return;

            if (isWPressed) {
                scene.beginAnimation(skeletons[0], 1, 32, true);
            } else {    // I'm guessing animating from frame 1 to frame 1 is a pause
                scene.beginAnimation(skeletons[0], 1, 1, true);
            }
        });
    });