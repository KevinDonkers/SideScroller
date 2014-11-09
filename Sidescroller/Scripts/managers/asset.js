var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "temple", src: "assets/images/temple.jpg" },
        { id: "theme", src: "assets/sounds/theme.wav" },
        { id: "hit", src: "assets/sounds/hit.wav" },
        { id: "yay", src: "assets/sounds/gem.wav" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [2, 2, 40, 80],
            [719, 2, 84, 15],
            [719, 19, 30, 48],
            [44, 2, 223, 67],
            [269, 2, 223, 67],
            [494, 2, 223, 67]
        ],
        "animations": {
            "adventurer": [0],
            "arrow": [1],
            "gem": [2],
            "instructionsButton": [3],
            "playButton": [4],
            "tryAgainButton": [5]
        }
    };

    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
