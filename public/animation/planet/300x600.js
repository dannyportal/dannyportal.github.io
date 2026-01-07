(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_atlas_", frames: [[1368,661,300,600],[1465,516,189,71],[1465,225,561,109],[804,0,659,659],[1465,336,300,178],[804,1022,131,157],[0,0,802,1723],[1465,0,560,223],[804,661,562,359]]}
];


// symbols:



(lib.bg = function() {
	this.initialize(ss["300x600_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BTN = function() {
	this.initialize(ss["300x600_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["300x600_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.earth = function() {
	this.initialize(ss["300x600_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.GogreenSign2 = function() {
	this.initialize(ss["300x600_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.leaf = function() {
	this.initialize(ss["300x600_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.leafStalkpngcopy = function() {
	this.initialize(ss["300x600_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.NYGE_RGB_dropshadow = function() {
	this.initialize(ss["300x600_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.savetheworld = function() {
	this.initialize(ss["300x600_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(-140.2,-27.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.2,-27.2,280.5,54.5);


(lib.Symbol_7_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NYGE_RGB_dropshadow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2818,0.2818);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_7_Layer_1, null, null);


(lib.Symbol_5_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BTN();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_5_Layer_1, null, null);


(lib.Symbol_4_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GogreenSign2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.053,0.053);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_4_Layer_1, null, null);


(lib.Symbol_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.leaf();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.0446,0.0446);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_3_Layer_1, null, null);


(lib.Symbol_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.savetheworld();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.047,0.0493);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_2_Layer_1, null, null);


(lib.Symbol_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.earth();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2498,0.2498);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_1_Layer_1, null, null);


(lib.Scene_1_stalk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stalk
	this.instance = new lib.leafStalkpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(54,213,0.2756,0.2756);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).wait(197));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-52,-164,1.7055,1.4548);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(284));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_7_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(78.9,31.4,1,1,0,0,0,78.9,31.4);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,157.8,62.9), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_5_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(94.5,35.5,1,1,0,0,0,94.5,35.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,189,71), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_4_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(8,4.7,1,1,0,0,0,8,4.7);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,15.9,9.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(2.9,3.5,1,1,0,0,0,2.9,3.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,5.9,7), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(13.2,8.8,1,1,0,0,0,13.2,8.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,26.4,17.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(82.3,82.3,1,1,0,0,0,82.3,82.3);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,164.6,164.6), null);


(lib.Scene_1_savethe_planet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// savethe_planet
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(150.2,148.8,1,1,0,0,0,13.2,8.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).wait(1).to({scaleX:6.1565,scaleY:1.979,x:150.15,y:148.7,alpha:0.1667},0).wait(1).to({scaleY:2.958,alpha:0.3333},0).wait(1).to({scaleY:3.9371,y:148.65,alpha:0.5},0).wait(1).to({scaleY:4.9161,y:148.55,alpha:0.6667},0).wait(1).to({scaleY:5.8951,alpha:0.8333},0).wait(1).to({scaleY:6.8741,y:148.5,alpha:1},0).wait(1).to({scaleY:6.1565,y:148.55},0).wait(44).to({regX:14.3,regY:10.1,x:151.85,y:155.7},0).wait(1).to({regX:13.2,regY:8.8,scaleX:6.6767,scaleY:6.6767,x:144.5,y:147,alpha:0.8},0).wait(1).to({scaleX:7.1969,scaleY:7.1969,x:143.9,y:146.35,alpha:0.6},0).wait(1).to({scaleX:4.9675,scaleY:4.9675,x:146.35,y:149.1,alpha:0.4},0).wait(1).to({scaleX:2.7382,scaleY:2.7382,x:148.8,y:151.95,alpha:0.2},0).wait(1).to({scaleX:0.5088,scaleY:0.5088,x:151.25,y:154.75,alpha:0},0).wait(203));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_LOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LOGO
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(145.9,46.4,1,1,0,0,0,78.9,31.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(278));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_leaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leaf
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(170,137,1,1,0,0,0,0,7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).wait(1).to({regX:2.9,regY:3.5,scaleX:2.4643,scaleY:2.4643,rotation:-3.7497,x:176.55,y:127.9,alpha:0.5},0).wait(1).to({scaleX:3.9287,scaleY:3.9287,rotation:-7.4994,x:179.5,y:121.85,alpha:1},0).wait(1).to({scaleX:3.9286,scaleY:3.9286,rotation:-11.2492,x:178.45,y:121.3},0).wait(1).to({rotation:-14.9989,x:177.4,y:120.75},0).wait(1).to({rotation:0.0889,x:181.4,y:123.25},0).wait(1).to({rotation:15.1766,x:184.55,y:126.7},0).wait(1).to({rotation:7.5883,x:183.1,y:124.85},0).wait(1).to({rotation:0,x:181.4,y:123.25},0).wait(1).to({regX:0.1,regY:7.1,x:170.35,y:137.15},0).wait(1).to({regX:2.9,regY:3.5,x:181.3,y:122.95},0).wait(26).to({regX:0.1,regY:9.2,x:170.35,y:137.4},0).wait(1).to({regX:2.9,regY:3.5,scaleX:4.6153,scaleY:4.6153,x:183.25,y:111.05},0).wait(1).to({scaleX:5.302,scaleY:5.302,x:185.15,y:107.1},0).wait(1).to({scaleX:3.867,scaleY:3.867,x:181.05,y:115.25,alpha:0.6667},0).wait(1).to({scaleX:2.4319,scaleY:2.4319,x:176.95,y:123.3,alpha:0.3333},0).wait(1).to({scaleX:0.9969,scaleY:0.9969,x:172.85,y:131.45,alpha:0},0).wait(51).to({_off:true},1).wait(154));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_9
	this.instance = new lib.Symbol6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(149.9,112.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200).to({_off:false},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_goGreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// goGreen
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(144.5,154.95,1,1,0,0,0,8,4.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122).to({_off:false},0).wait(1).to({regX:7.9,scaleX:3.0213,scaleY:3.0213,x:144.25,y:154.9,alpha:0.1667},0).wait(1).to({scaleX:5.0426,scaleY:5.0426,x:144.2,alpha:0.3333},0).wait(1).to({scaleX:7.0639,scaleY:7.0639,x:144.05,alpha:0.5},0).wait(1).to({scaleX:9.0851,scaleY:9.0851,x:143.95,alpha:0.6667},0).wait(1).to({scaleX:11.1064,scaleY:11.1064,x:143.9,alpha:0.8333},0).wait(1).to({scaleX:13.1277,scaleY:13.1277,x:143.75,alpha:1},0).wait(40).to({scaleX:13.568,scaleY:13.568,x:143.8},0).wait(1).to({scaleX:14.0084,scaleY:14.0084,x:143.85,y:154.95},0).wait(1).to({scaleX:14.4487,scaleY:14.4487,x:143.9,y:154.9},0).wait(1).to({scaleX:12.5152,scaleY:12.166,x:144.05,y:154.95,alpha:0.8571},0).wait(1).to({scaleX:10.5818,scaleY:9.8832,x:144.2,y:154.9,alpha:0.7143},0).wait(1).to({scaleX:8.6483,scaleY:7.6005,x:144.35,alpha:0.5714},0).wait(1).to({scaleX:6.7148,scaleY:5.3178,x:144.55,y:154.95,alpha:0.4286},0).wait(1).to({scaleX:4.7814,scaleY:3.035,x:144.7,y:154.9,alpha:0.2857},0).wait(1).to({scaleX:2.8479,scaleY:0.7523,x:144.85,y:154.95,alpha:0.1429},0).wait(1).to({scaleX:0.9144,scaleY:1.5305,skewX:180,x:145,y:154.9,alpha:0},0).wait(1).to({_off:true},1).wait(105));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_earth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// earth
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(144.55,708.2,0.9417,0.9417,0,0,0,82.4,82.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:82.3,x:147.3,y:674.5},0).wait(1).to({x:149.25,y:640.8},0).wait(1).to({y:607.1},0).wait(1).to({y:573.4},0).wait(1).to({y:539.7},0).wait(1).to({y:506},0).wait(1).to({y:472.3},0).wait(1).to({x:147.3,y:438.6},0).wait(1).to({x:144.4,y:404.9},0).wait(1).to({x:146.45,y:371.2},0).wait(1).to({x:147.1,y:337.5},0).wait(1).to({x:146.45,y:303.8},0).wait(1).to({x:144.4,y:316.4},0).wait(1).to({x:145.3,y:329.05},0).wait(2).to({x:144.4},0).wait(1).to({x:144.8},0).wait(1).to({x:144.4},0).wait(1).to({regX:10.7,regY:50.1,x:77.05,y:298.75},0).wait(1).to({regX:82.3,regY:82.3,x:144.4,y:329},0).wait(263));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(147.4,181,1,1,0,0,0,94.5,35.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(192).to({_off:false},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(87));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_283 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(283).call(this.frame_283).wait(1));

	// LOGO_obj_
	this.LOGO = new lib.Scene_1_LOGO();
	this.LOGO.name = "LOGO";
	this.LOGO.parent = this;
	this.LOGO.depth = 0;
	this.LOGO.isAttachedToCamera = 0
	this.LOGO.isAttachedToMask = 0
	this.LOGO.layerDepth = 0
	this.LOGO.layerIndex = 0
	this.LOGO.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.LOGO).wait(3).to({regX:145.9,regY:46.4,x:145.9,y:46.4},0).wait(281));

	// Layer_9_obj_
	this.Layer_9 = new lib.Scene_1_Layer_9();
	this.Layer_9.name = "Layer_9";
	this.Layer_9.parent = this;
	this.Layer_9.depth = 0;
	this.Layer_9.isAttachedToCamera = 0
	this.Layer_9.isAttachedToMask = 0
	this.Layer_9.layerDepth = 0
	this.Layer_9.layerIndex = 1
	this.Layer_9.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_9).wait(201).to({regX:149.9,regY:112.5,x:149.9,y:112.5},0).wait(83));

	// button_obj_
	this.button = new lib.Scene_1_button();
	this.button.name = "button";
	this.button.parent = this;
	this.button.depth = 0;
	this.button.isAttachedToCamera = 0
	this.button.isAttachedToMask = 0
	this.button.layerDepth = 0
	this.button.layerIndex = 2
	this.button.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.button).wait(193).to({regX:147.4,regY:181,x:147.4,y:181},0).wait(91));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_87 = new cjs.Graphics().p("AAACvQggAAgdgQQgdgQgTgbQgcgrABhPQABg8ARgiQAQggAfgUQAggVAjgBQAjgBAiATQAgASASAfQAXApgBBEQgBBJgcAqQgSAbgeAQQgcAPgfAAIgBAAg");
	var mask_graphics_88 = new cjs.Graphics().p("AhDEYQgqgVgWgvQgVgvAMguQAJgdAEgPQADgQgBgdIAAiNQgBghACgTQADgcAIgWQAOghAfgXQAfgWAlgDQAjgCAiARQAiASASAgQAQAbAFAnQADAYAAAuIAACMQAABQgKApQgRBFguAhQgeAVgmADIgJABQghAAgdgPg");
	var mask_graphics_89 = new cjs.Graphics().p("AgLH5QgigBgfgSQgfgSgRgeQgSgggDgtQgBgcAEg2QAfllgSkBQgDgsAEgWQAIgpAkgeQAjgdArgDQAqgCAmAZQAmAZASAoQALAaAEAjQACAXgBApIgCEUQgBBrgBAeQgDBHgMCLQgDAlgEASQgGAfgMAVQgRAegfASQgfASggAAIgCAAg");
	var mask_graphics_90 = new cjs.Graphics().p("AgaKJQgfgEgbgTQgagUgPgcQgLgXgEghQgCgUAAgnIgCliQAAi1ABhbQACiYAHh5QAEhBALgnQAQg3AlgcQAagUAigFQAhgEAfAMQAfAMAWAaQAWAaAIAhQAFAVgBAcIgEAxQgMB2gDCTQgCBYACCwIADFZQAAA8gGAiQgJA0gbAfQgVAYgfALQgXAJgWAAIgQgBg");
	var mask_graphics_91 = new cjs.Graphics().p("AgYLGQgfgIgYgXQgYgXgLgeQgKgbgBgnIABhDQABgwgNhmQgNhjACg0QABggAHgwIAKhRQAGg7gBh5IgClqQAAgwADgaQAGgoARgcQARgcAfgRQAfgRAhABQAhABAeASQAeASARAdQAPAaAFAkQADAYAAArIAAG6QAABugGA3IgHA2QgFAhgBAVQgCAhAFAtIAJBOQAJBFABBQQABA8gJAnQgNA1ghAeQgYAVggAIQgPADgOAAQgQAAgRgFg");
	var mask_graphics_92 = new cjs.Graphics().p("AgtM/QgigFgdgVQgegWgQgfQgPgbgGgnQgEgagBgsQgFixAimlQAfl+gQjWQgFhOAEglQAHg/AigkQAUgVAcgLQAcgKAcACQAdADAZAQQAaAQAPAYQAOAWAHAfQAEAVAEAlQAKCCgDCCQgCA3AGAbQAEAQAKAaIAPApQAOAugGA/QgEAegQBQQhBEzAQE3QADBCgDAfQgGA2gaAhQgWAbgiANQgXAJgYAAQgKAAgLgCg");
	var mask_graphics_93 = new cjs.Graphics().p("ACSOnQgegRgSgbQgTgegGgsQgDgbABg1QAHl6gkkhQgViigBg7QgBh9AphXQANgaADgRQAEgYgPgNQgJgJgagDIiqgVQhEgJglgNQg5gTgbgnQgdgrAFhBQADgtAXhGQAQgxAMgZQAUgnAagXQAjgdA0gFQAvgEAvAQQAoAOArAdQAcATAxAnQAQgfAggUQAfgTAjgBQAkgBAgARQAhASASAeQAWAkABA1QAAAlgMA6QgKAvAAAYQABAcAMAwQANAyADAaQAHArgGAiQgCARgNApQgLAlgCAVQgCAbAIArQALA4ABAOQADAkgIA1IgOBYQgGA6AHBSIAPCMQAFBIgBB0QgBCUABApQACA4gDAZQgEAtgSAfQgRAcgeARQgeARghAAIgCAAQggAAgegPg");
	var mask_graphics_94 = new cjs.Graphics().p("ADzP1Qg0gmgahbQgfhtAGikQAPi7ABhdIgBhpQAAg+AGgrQADgYAQhMQANg9ACgmQADgugKhCQgLhLgFgmQgFgrgBhCIgZAJQgkALgvADQgcACg4AAQhMAAgmgBQg/gCgzgHQhDgJgpgXQgugagcgxQgagvgDg2QgCg0ATg0QARgxAjgrQA7hLBsg2QBJgkA6gEQAkgDAhAJQAiAKAaAWIAQAQQAJAJAIAFQANAJAgALQAZAMATAWQAJALAHANQABg2AHgfQAKg2AdggQAogtBEAEQBDAEAjAyQAdAoABBAQABAdgKBWQgNBuAJCXQAEBYAPCvQAFBOgBA1QAABIgJA6IgPBTQgKAzgDAgQgEArADBLQAEBUgCAiIgSCcQgLBdAMA9QAHAnAYBPQAQBEgUAtQgXA1g/APQgTAEgRAAQgqAAghgYg");
	var mask_graphics_95 = new cjs.Graphics().p("AFBQfQgeghgKg4QgGgkAChDQACh5gEh4QgGiXgChMQgDhcABi6IADmzQgbAFgdgHQgngIgdgZQgjAvhGAQQgbAGgiABQgVABgpAAQgpgBgWgCQgigEgbgJQgfgMgWgWQgXgYgGgdQgrAKgugIQgtgJgkgaQglgagXgnQgYgogFgsQgGgyAUhCQASg7AcgnQAegoBIgxQA+gqAugQQA4gTBRABQAvABBdAHIBDAEQAlADAcAIQAiALAZAVQAcAYAJAeIAHAeQAEASAHAKQAGAHALAHIAKAGIABhgQAAgyADgZQAEgpAMgfQAPgkAcgZQAfgaAkgCQArgCAmAhQAiAgAOAuQALAlgBA1QAAAegEA9QgDBGAGBqIALCwQAFCAgMDcQgND9AABfQAABfAMDoQALDQgCB2QgBAvgGAeQgJApgVAbQghAsg9ADIgIAAQg3AAgkglg");
	var mask_graphics_96 = new cjs.Graphics().p("AGYTIIgBAAQhMgKgSguQgJgVAFgeQACgMAMgnQAehpgUifQgdizgGhZQgEg8AFikQAFiNgMhSQgPhMgFgmQgKhDAJgwQAFgYASgyQARgvAEgaIADgTQgNAFgQACQgYAEgtAAIkwABQg1AAgdgGQgsgJgagZIgPgQQgJgJgIgEQgIgEgOgDIgXgDQgYgGgdgYIgwgoQgQgLgegNQgigPgNgIQgogXgagqQgagogJgwQgQhXAkhjQAfhVA2gbQAXgLAigDQAMgBAwAAQBaABAQABQA8AFAoAXIAUAMQAMAHAKACQAKADANgBIAXgDQBDgIA7AYQAdAMAzAjQAwAhAVATQATARAkAlQALAKAZATIANAKIAAgdQADjsgBgnQgCg8ACgZQAEgvAUgfQAdgvA9gJQA8gKArAkQArAlALBHQAGAtgFBVQgODgAZDaQAPCEACAbQAFBagRBDIgPAzQgKAfgCAWQgDAaADAkIAJA+QALBTAACEQAAC3ABAhQACAsAcELQAUC9gMB6QgFAqgKAcQgOAlgbASQgSAMgdAFIgKACIgBAAQgQACgZAAIgEAAQgXAAgTgCg");
	var mask_graphics_97 = new cjs.Graphics().p("AGkUqQgqgMgbgrQgYgngFgxQgDgkAGg4QAIhLAAgSQACg7gOhUQgShegIgvQgaiyAikwIAajxQAJhoAAhVIgaAEQgZACgxAAQiZABg8gDQh2gGhagZQhtgdhTg+QhchEgohdQgGgPgPgsQgNgmgLgVIghg6QgTgigFgbQgHghAMghQALghAZgXQAogiBDgFQAhgCBTAKIBVAJQA0AGAiAFQDBAgCkBoQBJAvA8A5QAAhXAKiHQANi4gBhTQgBhEAEgaQAGg0AZggQAigtA+gCQA+gDAmAqQAZAbAKAsQAIAgACAxQABBMgKB7QgNCagBAtQgEBnAREMQAODsgNCGQgFAwgRBpQgQBigFA2QgNCRAXDjQAgE5ADA7QACA7gEAlQgGA1gUAmQgXAtgsAYQgfARgeAAQgPAAgPgFg");
	var mask_graphics_98 = new cjs.Graphics().p("AFmWMQhVj0gGkBQgDhsAOivQARjZAChCQACg7AAicQgBh0AEhKIglAAQiIgEicgcQh9gXhbggQhygnhTg9Qg/gughgyQgWghgPgtQgLgggMg0QgNg6gBglIABgSQAAgcAMgZQAEgKAFgJQARgbAbgRQAcgRAfgCIAMAAIAIgBQASgBBEABQAcABA4AAQAxABAiAFQAdAFA4AQQB0AjA0AYQBEAgBnBMQA9AtAcAPIAiARIADACQADiHgRjdQgVkTADh5QABgzAHggQAJgtAZgcQAlgrBAABQA/ACAjAtQAaAiAGA1QADAdgCBEQgEB2AVEJQATD5gICHQgDA2gMBiQgNBqgDAuQgIBkAACyQABDGgFBSQgGBxgVDjQgLDGAjCJIAqCeQARBbgdA9g");
	var mask_graphics_99 = new cjs.Graphics().p("AEwZgQAXhiAEiAQABhGgFieQgToFAHoIQgzAShTAAQhKAAhjgJIisgRIhCgIQgkgGgagLQg2gXgtg2QgjgpgihCIgYguQgOgbgNgRIghgnQgVgYgIgSQgQgfAFglIgJgPQgNgcgBgdQAAgdANgbQAMgcAXgTQAtglBMAAQAbAAAmAFIBAAKICOAKQBXAGA2AOQB/AhCOB5QA1AtAXAiIAFAIIAChLIAIjWQADh5gCheQgFlBhEk6QgNg+gBgeQgDg0ARglQAZgzA9gQQA9gRAvAfQArAdAWA8QAPApAJBJIAYC9QAXCvAFBJQANCcgDDLQgBBGgJEiQgaLbAcLkQAGCUgBA+QgCB2gQBbg");
	var mask_graphics_100 = new cjs.Graphics().p("ADqbSQAjgnARgVQAdgjAMgfQAMgcADglQADgXAAgtIAEp3QAAhPgBgnQgBhCgGg1QgEgjgJg1IgPhZQgPhlgHiDIgOgBIjOACQh5AAhRgVQhhgYhTg6QhUg7g3hSIgig2IgWgjIgVgPQhNg8gMg/QgHggALgiQALghAYgYQAZgXAigIQAigJAhAJIATAGQAVgBAXACQBAADBuAQIBDAKQAmgPA3AFQA+AFBUAdQA+AWA4AaQAsAVAhAUIgChvQgChFAGgjQAJg4AeghQALhRAEg4QAJibgei/QgUh7g1jbQgMg1gOgbQgGgMgYglQgUgegHgWQgSg0Afg2QAeg1A2gMQAqgJAsASQAqARAfAkQAiAmAXA9QAOAkASBLQA4DoAUB2QAiDEgCCeQgCBZgOB8QgIBHgTCOQgfEDAdChQAPBYACAUQAEA+gWApIgCAEQAHA2AOBNQAVCMAFCyQADBngCDYIgFGnQgBBagFAvQgIBLgZA3g");
	var mask_graphics_101 = new cjs.Graphics().p("AFFdSQgKiiAMkXQAPk/gDh6QgBhJgGhuIgLi3QgFh0gBiJIgRAGQgeAHgrAEIhJAEQhtAMg1ACQhdAFhBgWQg3gThAgvQh/hchch/Qgmg0gHgmQgGgdAIgeQgbgQgSgdQgVgiABgnQABgmAWghQAXghAjgPQAbgLAlgBQAOgBA0ACQArABBlgCQBdgCAzADQCsALBgBQQAXATAhAlQAoAtANANIA6A3IABgfIALoVQADiagBhIQgDh+gQhjQgoj+iEifQhBhPgOgXQglg+APg0QAOgzA5gYQA1gWA3AQIAHACQAFggAOgXQARgcAdgRQAcgRAhgBQAggBAeAPQAeAOASAbQAWAfAHAwQADAaAAA9QgBAvgCATQgEAlgOAaQgHAOgLAMQBhDDAiEDQARCIACCrQABBngGDOIgKFiQgGDegBBmQgCC1AHCPIAODfQAKCIABBXQABBrgSE/QgPELANCfg");
	var mask_graphics_102 = new cjs.Graphics().p("AHmemQg9AAgigrQgUgZgJgpQgGgZgDgxQgbnJAFnCIABieQgBhZgGhEQgDgkgJhGIgDgbIgzgCQgbgBhcADQhKACgtgFQgogEgzgMQgfgIg7gQQhGgVgkgNQg6gWgrgZQhYg1hOhmQgog0gPgoQgKgagCgaQgMgXgDgZQgDgjAPghQAQgiAdgTQAcgUArgGQAcgFAxABQB6ABCFAOQBrALBEATQBhAbBUA2QA0AjAWAiQAFAHALAXIACAGIABgTIAMqqQADjEgJhmQgPikg2h5IgTgoIgJgQIgogmQghgegKgNQgagigBguIABgQIgLgHIghgTQgVgLgLgJQgcgWgPgiQgPgiAEgkQAEgkAWgdQAWgfAhgNQA4gXBGAdQATAHAUANIAChAQACgcADgOQAJgmAfgcQAfgbAmgEQAMgCAXABQAXAAALgBIApgHQAhgEAgALQAfAMAWAYQAWAYAJAhQAJAggHAgQgFAXgWArIgfA+QgTAmgNATQgTAfgWASQgTAQgWAJIAHAVIAQAtIACAFQASATAMAOQAqAxAGAwQADAZgGAYQAqCIAPCnQANCagIEqIgLGiQgFDeAFBmQACAzAHBJIALB9QAKB+AFCfQADBfACC/IAKLPQABA3gFAfQgHAvgYAdQgiAqg8AAIgBAAg");
	var mask_graphics_103 = new cjs.Graphics().p("AE1fTQgOnVgFj8QgImPAElCIABhAIg2AAQh8ABg9gCQhrgChLgSQhAgQhZgnQg8gagngVQg1gdgmggQgsglgdgsQgggxgJg0IgEgdQgDgSgFgLQgEgKgJgPIgOgZQgSgjAJgsQAJgrAfgaQAegaAxgJQAggFA6AAQBuAAA+AHQCmASDIBeQArAUAZAQQAkAVAWAaQAQASARAfIAcAyIAHjfQAHjNAJhaQALheADgwQAVkfh1kXQhzkTjZjDQgrgmgOgQQgdghgLggQgTg4Akg4QAjg3A6gIQA5gHA7AoQArAdA1A8IAgAlQgCgMgLgkQgbhaAbg1QASgjA4gmQAogaAcgKQAggKAoABQA3AAAoAUQAPAHAUAOIAhAZIAuAgQAaATAPASQAfAngBA2QgBA2ggAmQgKALgSAQIgdAaQgVAUgoA8QglA1gdAWQggAYglAHIAdAtQB7DAAvC6QARBDAMBWQAHA3AKBlQAHBJACAqQAEA/gEAzQgCAigIA2IgNBZQgHA6gFB4QgpQxAtQmg");
	var mask_graphics_104 = new cjs.Graphics().p("AGrf/QgfgFgRgSQgTgSgFgiQgDgQgBgtQgBg9gNhVIgZiRQgWiFgHiqQgEhlAAjMIgCnsQgRABgygDIi5ADQhtAAhIgUQgngKgtgWQgcgNg0gcQhig0gvglQgvglg2hBQglgsgLgjQgGgUACgVIgNgRQgTgiABgkQABgkAVggQAVggAigQQAagLAkgDQASgBAvABICbgBQBfgBA8AHQCmASB7BSQA9AqA9BCIgDpfQAAhugDg6QgFhdgQhJQgMg6gahNIgviFQhGjLgghAQhHiQhpg/QgagQhAgbQg8gagdgUQgtgegYgrQgbgxAMgtQAPg0A4gZQA1gXA6AMQAvAJA2AhIBdA+IBqBHIAjAaIgBhIQgBghABgQQACgbAIgUQANgkAfgYQAbgVAfgGQAHgQAMgPQAUgZAcgNQAjgPAuADQAjACAwAOQAdAJAXALQAJADAJAEQAgAQAXAgQAWAdALAnQARA6gLA2QgGAbgRAoQgmBYgkAzQg5BShSAxQgmAWghAGQA8CNAyCRQA3CfASBmQAOBQAFBmQADA+AAB6IAFXcQAACEACBJQADBxAIBcQAJBWAXCbQAaCnAIBJQAFAogCAYQgEAjgSAWQgUAXglAJQgZAGgsABIgIAAQgeAAgSgEg");
	var mask_graphics_105 = new cjs.Graphics().p("EAKWAhAQgjgCgggVQgfgVgPghQgLgWgEgeQgDgSgBglQgTohgFjcQgFkDAAkEQgKgGgKgHQgagWgXgmIgFgIQgbAFgfABQgjABg2gEIhZgGQhjABgygFQhUgHhegkQhZghg3gsQgWgRgpgoQgogogXgRIgogeQgYgSgMgRQgcgmAHgzQAEghAQgaQgEgVACgUQAEghATgbQATgbAdgPQAYgLAhgEQAUgDAoAAICUgBQBQAAApABQBCADA1AJQBeAPBzAuQBeAoA0ArQAdAZAgAoQAFjWAIjXQAGiKgBg/QgDhxgUhXQgKgugZhJQgghfgHgWQgIgbgVhTQgRhEgOgpQgziVhrh4Qhsh4iMhEQgqgUg4gUIhjgiQhZgdgvgLQhNgRg/AEQgXACg9AJQg1AJgfgBQguAAgmgRQgqgUgRgkQgWgsAXg1QAVgxAugcQAngYA5gKQAkgGBDgDQCQgIBMAEQB6AFBdAgQA6AUA/AjQAwAbBCAtQB3BRBbBPQABgUAEgQQAHgkAXgwQAlhLAtg/QA3hOBEg9QAPgPAPgLQANgMAQgJQAbgPAhgBQAggCAdAMQAdAMAVAYQAWAXAIAeQAIAaAAA3IABCLQAAA+gGAfQgFAdgUA1QgeBQgbAlQgOATgaAZIgqApIgZAaQgPAPgMAIQgSANgUAFQAdA5ATA7QAOAsATBXQATBaANArQALAiAkBdQAgBPAMAxQASBIACBcQABA0gEBzQgcKWAFKXQACEIAIDBQAJD3AVDRQAGBDgCAkQgEA4gaAlQgUAegiAQQgdAPgfAAIgKgBg");
	var mask_graphics_106 = new cjs.Graphics().p("EAKQAhVQg3gHgdgoQgVgdgIgrQgEgbgBg0QgCjXADhsQAGizAYiNIAVh0QAMhEAEgwQAEg4gChJIgHiBQgFhRgDhfIgCAAQgQABhPgCQgZAAg+ABQg3ABgggBQg3gDhDgMQgtgJhLgSQgtgLgagIQgmgMgdgQQgggRgkgeQgVgSgngnQg1g1gXgfQgmgxgNgxIgGgfQgEgVgDgKIgLgkQgHgWgCgPQgFgjAPgjQAQgiAdgTQAggWAwgFQAegDA4AEQCjAJBIAMQCCAUBaAzQAbAPApAdIBDAvIA8AlQAjAWAWAUIAGAGIAAh4QgBmZgbjrQgqlih1kHQgyhug0g/Qg9hKhmg+QhAgnh/g8QhcgrgzgNQhGgQhiAFQiYAIiOAtQhVAagjAFQhFAJgugaQgtgagOg4QgOg3AcgtQAhg1BfggQBTgbBtgQQBCgKCCgMQBcgIAxgBQBOgBA+AMQA3ALBBAcQApARBJAmQCeBQBWA8QA9ApAxAtIAEgeQABgPgDh0QgChPAUgvQAPgkAqgvQBKhVBbg/QBCgvAxgEQAMgBAMABQAhABAgATQAkAVAQAlQAQAjAABBQABA4gFAlQgFAlgWBDIgRA1QgtCQgYBCQgTAzgSAWQgXAdglAMQgfAKgegEQgMAZgRASQgNANgQAJQAYA0AoBnQAyCBAUBGQAbBZAUCAQAtEfAFHDIADFyQACDaAICZIAJCjQAEBdgFBFQgFA8gOBVIgZCRQgjDoAMEoQADBQgIAtQgNBEgrAhQggAZgqAAIgUgBg");
	var mask_graphics_107 = new cjs.Graphics().p("EAKfAhZQgmjpABlkIADkpQACixgEh3QgDhUgJiSIgIiDIgLABIjdAHQhEACgigBQg4gBgsgHQhxgRhGg/QgQgPgZgdQgdgigLgMQgQgQghgdQgigdgPgPQgjgkgrhCQgTgdgJgSQgNgbgEgYQgIgxAbguQAbgtAvgQQAagJAnAAIBDAAQAzAACygkQCMgdBVAXQAiAJAmATQAYALAsAaIBbA0IACkMQABjjgIiQQgLjLgiikQgah/gohOQgphRhPhUQibijjLhSQjVhWjQAgQg2AJhBASQgqAMhKAZQgoAOgTAIQggAOgWASQgKAIgzA2QglAmggALQguAPgvgcQgugcgQgwQgOgtAOg0QAMgwAigoQAdgjAsgeQAjgXA0gZQCwhUC7gdQDEgdC2AkQD5AyD4CuQA9AsAzAsQACgcAAghIgDhjQgCgqACgYQACglAJgcQAXhKBKg6QAtgjBjgzQBDgiAngJQAxgKAtAQQAwARAWAoQAiA9gqBsQgPAmghBKQgbBDgGAyQgCAXACBlQACBLgSAsQgPAngnAqQg/BFhEAQQAUAvASA2QBADMAUEOQAKCVABFRQABGMAKH2QAGEVARJtQAKFrAMC0g");
	var mask_graphics_108 = new cjs.Graphics().p("EAMsAg2QgTAAgJgCQgPgDgKgIQgSgPgCgrQgDhEAMhfIAXiiQANhpAEiEQADhPAAifQgBnNgCj6QgmAXgwAIQgoAHg5gBQhBgEghAAIiYADQhaABg7gSQghgJglgTQgYgMgrgYQhRgugpgfQhDgzg8hNQg1hGgNg4QgIglAHgjQAIgmAXgZQAgghA8gJQAcgFBLAAQBDAACJgIQB5gDBRATQA+APBeArQBXAoAyAlQBGAzAeBAIAGALQgHk1gNkEQgKjEgTh0QgijUhfjTQhZjFiIi7QgvhAgngiQg2gvg6gJQgRgDg6AAQguAAgbgKQgSgHgdgVQgggXgQgHQglgQhEAEQirAKifBJQifBJh3B7Ig4A8QghAhgeASQglAXgoADQgtAEgggVQgkgXgMgvQgKgtAOgsQAMgmAegmQAVgdAnglQCmieC6heQDNhoDPgOQC3gMDJA4QByAfBSAuQBvA/BjBzQAuA2AvBGIgCjZQgBg/AJghQAIgdATgfQAmg8BLg8QA9guAugOQBGgUAxAgQAhAVASApQAQAkABAtQABAegGA0QgGA6AAAXIABAwQAAAcgDATQgEAegWA3QghBRgOAdQgpBUgvAuQgdAcgjAQQgeANgdADQCgE8AuEtQAQBpAKDDQAND1AGE0QADCqAEF/QAFG3gHDaQgKFtgrEhQgEAWgEALQgGARgNAJQgJAGgOACIgaABg");
	var mask_graphics_109 = new cjs.Graphics().p("EANbAhIQgogFgVgaQgNgRgEgaQgDgSABgeIARqkQAGj6AAh9QAAjKgKijIgPADQgZAEgvAAIjTAAQhwAAg7gGQhegKhFgdQhJgfgZgyIgJgWQgGgNgHgHQgHgHgLgGIgUgLQhEgkgnhSQgdhBgHhdQgHhhAogqQAZgcAugKQAfgGA1AAQB+gBBBAGQBpAIBQAcQA3ATBjA0QBPAqAhAaQARAMAbAaIAfAcQgEhlgBiDIgBkkQgDljgnjhQgNhQgSg7QgWhJggg5Qg1hdhnhWQg/g1iFhYQgxgggZgOQgqgZgkgOQhBgZhSgIQg7gGheACQiEADhWARQh2AWhTA2QgcASg2ApQgjAYgeALQgLASgQATIg5BEQgMARgQAeIgaAxQgSAdgEAMQgGARgHAjQgLAkgdAZQgcAaglAHQgkAGgkgOQgkgPgWgeQgkgyAKhJQAHgzAkhHIATgkIAYgqQAYgpAZgjQAjgxAigjQAVgWATgNQAMgWAXgUQARgPAlgZQBHguAmgWQA9glA1gWQBlgqCEgQQBegMCUgCQBZgBA2ADQBPAFA+AQQBWAWBfA0QBDAkBjBFQBXA8A1AsIAjAeIACgzIgBhsQgBhBAHgrQAHgtAQgdQAUglA0gpQBRhABhgsQAzgXAhgCQAjgCAiARQAhARATAeQAcAqgBBFQAAAWgEAkIgFA6IgBAzQgCAegDAUIgHAgQgFAVgCALQgDAXgCAuQgFBCgkBFQgdA4g0A/QgkArgcAOQgdARgjgBQBZC6AdD9QAQCOAADSIgBFhQACBqAICTIAPD+QAwNng7NkQgZgLgkADIg/AIIgJABIgZACIgWgCg");
	var mask_graphics_110 = new cjs.Graphics().p("EAMwAhFQAFhyADiBQADilgCkUIgDsmQgRADgTgCQgMgCgZgGQgYgGgNgCQgUgCgcAFIgwAJQgfAFgoACIhIABQg4gBgYgBQgsgDgigJQg5gQhCgqIhyhPQglgZgNgLQgbgXgMgYQgTglAHgoIAEgQQABgKgBgHQgDgMgTgVQhDhKgBhTQgBgsAVgoQAWgoAngTQAWgLAdgEQAWgCAiABQBBACBrAQQCEAVAoAEIBEAGQApAEAbAGQA5AKArAZQAxAcAYAsQAEAHAMAbQAKAVAIALQAIAKAOANIAXAVIAJAKIgCn6QgBj6gFh9QgChEgFgsQgGg9gNgxQgRg9gihFQgXguguhNQhPiGgzhDQhPhrhWg+Qh7hairgfQiVgbivATQklAfiOCRQgpAqgmA9QgXAmgoBLQgmBJgQAqQgZBDABA4QABAkAOA6QARBHADAXQAIA0gNAsQgPAzgmAYQgoAZg0gNQgxgNghgnQgzg8gMh5QgdkaCLkGQCMkID5iAQDPhrEWgKQDvgIDUBIQCyA8CEBsQABghADgUQAHgfAPgoQAVgyATgZQAfgmBOglQBagqAdgYQAIgHAfggQAYgYASgLQAjgWArAAQArABAhAYQAhAYAPAoQAOApgLAnQgDALgJATIgLAdQgHAWgDA0QgEA/gGAqQgIA5gPAtQgoByhTA0IgTALQgKAHgFAHQgGAIgDAMIgGAVQgMAnggAbQAkA5AaAxQBBB3AhBtQAkB6ALCeQAHBjgCC7QgFLgABFfQABJdARHiQAFB5gEA9QgHBlgdBLg");
	var mask_graphics_111 = new cjs.Graphics().p("EANHAhBQAgkogakjIgPiaQgKhegDg8QgEhLABieQABiagFhPQgEhDgOh1QgaAKgeAEQgbAEgkAAIhAgBQhuACg3gBQhYgBg+gRQhXgZhjhKQhyhWhRhoQhNhiALhNQAHgwAmgmQAmgjAygLQAXgFAggBIA5ABQAqABBWgCQBLAAAzAKQAXAEAnAKIA9APQAgAHBAALQA4ALAkAPQA2AYAzAzIAAg6QAAjegEhVQgVnBiroCQgdhYgYgqQgzhZhqhNQiChcifgnQiegnieAWQieAWiPBQQiOBQhlB8QhYBqgKBgQgEAkAHA1IAMBaQAIBaghA2QAdBPAvBJQAYAlAGAPQALAegEAhQgEAhgTAaQgTAageAQQgdAPghAAQgfABgfgOQgegNgWgYQgPgSgUglQg2hhgbhIQglhggFhWQgEg0AMghQAIgVAOgRQgFhFABgrQAChkAchKQAahDBHheQBliDBihUQB9hqCahBQCahBCkgQQCkgPCjAhQCjAhCSBOQB9BBBqBgQADhMAchZQAWhHAeglQAKgLASgRIAbgbQAOgPAXggQAXghAMgOQAxg4A1ABQAKABAUAEQAUAEAKAAQAKAAARgCQATgDAHAAQAZgBAYAJQAYAJARARQAlAiAOBHQAWBugjBsIgfBSQgUAygFAiQgCALgEAtQgDAjgGAUQgLAkgdAjQgWAaglAfQglAdggASQAgAaAOApQAQAsgBA/QAAAkgHBKQgEA8APAhQAIAPAPATIAcAgQBKBbAECSQACA5gKBGQgFAqgQBTQAmAtABBMQABAugSBZQgwD5gHEuQgFDgATFOIAhIwQAPFBgODug");
	var mask_graphics_112 = new cjs.Graphics().p("EANmAheQAEqkgIlvQgEjDgLhzQgEgogNhiIgDgYIgZADQhMAGiYABIhegBQg1gCgogIQjBgji7i3Qg0gzgggtQgog4gQg5QgRg+ASgvQAMgeAcgXQAagVAhgMQAdgIAlgEQAWgDAtgBQBHgCDVgBQBpgBA6AIQCIARB/BOIALmzQABgygCgYQgDgpgMgeQgHgSgRgdQgTgggHgPQgPglgFg8QgDhDgFghQgHg2gchMQgghUgOgrIgmiGQgXhQgbgxQhPiPjWhcQh8g1h9gWQiEgYh9AOQiFAPh1A4Qh6A6hWBdQhEBKhMCJQgoBLgKAvQgJAuAJBPQAJBeAOA+QAUBUAkA+QAPAaA7BNQAwA/ASAtQAZA+gRBBQgUBGg6ARQgeAJgigKQgfgIgcgWQgXgSgXgcQgOgSgYgkQhAhegegzQgvhTgYhJQgRgygLhBQgHgpgJhMQgKhTgCgqQgDhFAMg3QAQhLA9hvQBcioBVhhQCUilDghVQDVhSDqAJQCqAHClA2QClA2CPBfQBIAwA2A0IABgPQAFg5AkhZQAdhJAphQQAVgoASgcQATgeAlgvQAUgaANgNQATgVATgLQAYgPAdgEQAdgDAbAIQAcAIAWATQAWASAMAaQAWAtgKBFQgDATgIAlIgLA5IgHBOQgGBUgSBAQgWBIgqBAQgrBAg7AwQgvAmguAQIgBAAIALAiIA/DMQAOAmA/CNQAxBtASBIQATBMAFBiQADA7gCB2QgHFWgFCCIgFCrQgBBgAGBKQAEAyAMBSQAOBjADAhQAJBMAFBeQADA9ACBtQAIF/gELEg");
	var mask_graphics_113 = new cjs.Graphics().p("EANkAhhQhDgHgggzQgUgfgFgvQgEgdACg4QAHjGgFpwQgCkcAHjeIgHADQgeAKgpAFIhIAFQh1AHgfABQhUAAg+gRQgvgNhXgpQhbgtgwgiQhHgygjg+IgXgsQgOgcgLgQQgIgKgXgaQgUgWgJgQQgagsAPg2QAOg2AtgaQAcgQApgEQAXgDAyABICuADQBlACBIALQDGAcBzBsQASARAfAiQAgAkAQAQIADACIAKiBQAGhWgBg/QgBg2gIhLIgOiAQgRjfgLhwQgSjEghiGQgriwhViHQhfiZiIhSQhIgshfgdQhMgXhmgRQiNgYhoAGQiGAJheA6QghAVhBA3Qg9A1gmAVQgcARg+AcQgzAcgXAiQgTAdgGApQgEAcAAAwQADDEAYC6QAJBEAJAoQAPA7AXArQAcAyAwAuQAmAlA6ApQA+ArAzAYQBBAeA8AGQAnAEBRgBQBGAEAnAdQApAeAHA4QAHA4ghAnQgpAxheAKQiVARigg+QiMg2iGhtQiDhtg4hrQgphRgaiNQgrjnAAjwQAAh4AShRQAZhsA8hEQAqgtBTgxQB0hEAUgOQAWgQAxgqQAtgmAbgTQBKgyBlgaQBTgVBtgGQCjgJCZAZQCiAbCOA/QCPBAB0BjQAEhJANgzQAVhOA0hPQAhgxA0g7QAmgqAdgZQAogiAngRQAtgUAwADQAzADAjAcQAsAkANBDQAJAugIBJQgGBBgaCXQgLA5gHAVQgaBQhRBYQg6A+gyAVQgfANghgBQAvBdAuCMQAhBkATBLQAXBfAHBTQAEAuACBSQABBaACAmQAEA9AQBxQARB4AFA3QAKCBgNC4QgIBogSDRQgKCfACEqIAEPjQAAA9gGAhQgJAygcAfQgiAlg2AAIgTgBg");
	var mask_graphics_114 = new cjs.Graphics().p("EAPLAhYIgMgBQgngDgTgKQgqgVgNg7QgJgpAEhDQAUkrgjomQgSkagIjPQgpAQg3AGQgyAFhLAAIh8AAQg4ABgcAAQgvgBgjgHQhjgUhWhOQhEg/g7hoIgdgzQgRgegNgTIgkgzQgUgegHgZQgMgoAQgqQAQgqAjgWQArgdBGACQAoABBPANQBCAICIAAQB5AEBJAiQAaAMAfAVIA0AoICYB1QAXlGAEimQAJklg1jNQgehzg6iAQgthkhKiCQgnhGgcgoQgog6grgnQhEg9h8g4QhQgjhCgSQhQgVhHAAQg/ABhPATQgkAJhnAfQhdAdgcAJQhDAXgxAaQhuA8hPBpQhOBngdB8QgcB6AWCBQAVB+BCBtIAnA9QAXAkALAaQAJAVAFATQAwAiApAYQBHApBEAUQBQAXBoACQBCACB6gJQA6gEAgADQAxAFAgAXQAYASAPAbQAPAbAAAeQABAegNAcQgNAcgXATQgpAhhWAIQg7AFiHAAQhDAAgigCQg4gCgtgHQj/glkKjqQgngigYgbQgggjgSgjQgVgpgCgrQgDgpAQgiIgKgcQgziQgFiWQgHjnBojQQBsjXC+h1QA+gnBTgiQA6gYBfggQCKguBXgTQB+gcBoAGQBhAFBvAjQBXAbBwA0QBDAgArAZQA6AhAqAlQAoAjAmAwIgChJQgBg/ACgiQAFg2APgpQALgdAXglIAphAIAVghQAMgSAMgMQAfgfAtgIIARgCIAFgGQAdggApgKQAogJApAQQAoAPAYAiQATAcAKArQAIAoABA6IgCBjIABA5QgBAhgHAXQgFARgLAUIgUAjIgpBLQgZAugSAcQg0BRhKA8QgbAXgaAOQArBPAhBIQBSCvAlCjQA1DngKFPQgDBagMDDQgMC7gCBjQgFC4ANDzIAbGqQAiIXgfE7QgDAbgEAPQgGAWgNAOQgRATghAGIgDAAQgMACgSAAIgagBg");
	var mask_graphics_115 = new cjs.Graphics().p("EAOmAhBQg+gDgigsQgXgegIgvQgEgeAAg4IAT0TQgtAXg9AQQjGAyjAgvQhTgUhogvQhzgzg9g5Qg3g0gfhHQgghHgBhMQgBg+AWgnQATghAngWQAigTArgHQAhgGAvABIBSACQAiABBCgDQA7gBAoAGQAxAIBUAeQCKAyBWAzQA+AkAwAqQAEkpgFiRQgJj7gmjEQgsjshcjCQhmjYiZiXQhMhLhFgfQhOgiiGgBQk8gDkjB8Qg/AagpAbQg2AighApQglAugXBGQgOArgSBWQgXBugFA7QgIBfAUBKQAJAjAcBCQAdBDAKAhQAHAZACAZQA0AxBaBIQA+AyAnAZQA6AlA2AQQBAASBpgEQBfgEBegOQBRgNAygWIAygbQAfgQAVgGQAwgNAwAUQAxAVASAtQARAogNAuQgNAsghAhQgyAyhrAgQi8A5jeAAQiKAAhbgbQh6giiJhrQg1gog9g3QgogjhFhCQgpgngUgXQgggkgQgjQgdg/AJhDQADgRAEgPQgSg3gJglQgZhvASiOQALhWAoinQAWhZAPgrQAZhIAigzQAwhEBhhEQE1jWHkgdQBYgFBEADQBVAEBGASQBrAbBnBAQBYA5BPBRQAVhtA1htQAYgyAYghQAbgmArglQAggcAygjQA0gkAigNQA1gTAsAQQAYAKAUAVQATAUALAaQASArgBBAQgBBBgSBPQgLA0gbBZQgaBWgWAvQghBGguArIgcAZQgSAPgKALQgJAKgXAiQgSAagPAOIASAjQBHCPApB/QBLDkAWEsQANC4gEFkIgTb3QgBA7gGAhQgKAygbAeQgjAog6AAIgGAAg");
	var mask_graphics_116 = new cjs.Graphics().p("EAMYAhKQAVhkAIhrQAHhYAAiwIAAwaQgNACgPAAQgMgBgVgDQgYgEgJgBQgWgBgdAFIgxALQiuAojMgoQg8gLgggSQgygbgNgsIgGgXQgDgPgFgIQgIgMgSgKIgfgOQgtgWg6g7QgngngXgeQgegpgNgoQgOguAKguQAKgxAjgbQAWgSAigIQAYgGAmgDQBggICyABQBjAAAxAHQA7AHBIAZQDOBHBECFIAJAUQgEgngMhVQgLhQgEgtQgKhnAEiSIAIj8QAJk0g4i4Qg5i/iJiZQiJiai3hQQi3hQjNAEQjNAEi0BWQh9A7hXBaQhhBkggB3QgWBVAHCBQAMDTBJCHQA4BnBgBNQBdBKBzAmQBvAkB7gBQB2AABzghQCagrBLhXQAlgqAWg4QAVg1AFg7QABhDAEgiQAGg5AaghQAVgbAigNQAhgNAiAHQA/ANAjBFQAfA8gDBLQgFBhg2CDQgeBJgeAzQgmBAguAsQhIBGiBA0QizBIi8AMQjDAMixg4Qi3g5iSh9QiWiBhLiqQguhpgWiCQgShugCiIQgChPAGg6QAHhJAUg7QAchTBBhbQCVjODwh4QDsh2EDgDQD9gDD0BrQCyBNCRB8QgDgrgCgsQgDhcAVgyQAWgzBEg8QBHhABcg5QAygfAhgIQAjgIAjAJQAkAJAZAYQAbAaALApQAKAkgEAqQgDAggLAtIgUBMIgVBhQgMA7gOAlQgdBJg5A5IgiAfQgVATgLANIgWAdQgNARgKAJIgFAFIAPAaQA+B1ArC7QA+EIgIDWQgCAkgLCIQgKBqACBBQABArAGA5IAMBiQAZDfAIEYQAECtgBFMIgFRWg");
	var mask_graphics_117 = new cjs.Graphics().p("EAPYAhkIABABIkOgCQghjlAhlLQAxl3APi7QALiHAEioQgRgFgTgIQgpgUgWgIQg9gXhrACQiIACglgFQhWgMh0g4QgsgWgZgRQglgYgWgcQgNgRgRghQgVgngIgNQgQgZgjgnQgogtgNgSQgcgkgLglQgNgrALglQAPgxA1gfQAogXA9gIQBTgMBxALQBCAGCEAUICWAUQBVAOA7AaQBGAfAwA0IgBnnQgBiMgBhFQgDh0gHhcQgKh6gVhaQgbhxgxhVQggg2gxg6Qgkgpg7g7Qg8g7gqgkQg6gxg2ghQhig7h4gaQhwgZh5AIQjeAQjgB5QhSAtg4AvQhFA6gjBEQgzBgABCZQABBUgFAgIgDAPQAFATABAWIAHBoQAEAiAOAoQAKAaATAsQAVAxAQAcQAWApAYAdQArAyBKAoQAtAYBcAkQA4AWAeAIQAwAPAoABQAkACAtgHQAZgEA2gNQCGghA+gUQBJgXAugdQA8gmAYg1QAKgYAMg+QAKg4AQgcIAKgPQgWgCgXgGQgigLgcgVQgegcgQgMIgXgOQgPgJgIgGQgVgRgOgYQgPgYgDgaQgEgbAGgbQAHgaAPgWQAIgLAPgQIAXgZIAcgoQAQgYAOgMQAkgeA6gBQgWgZgIgNQgWgjAAgqQABgrAWghQAXgiAogPQApgQAnALQAdAIAdAXQAVARAaAfQA5BBAYA4QATApASBSQAhCRAKBKQAQB8gPBhQgGAngNAwQgHAdgSA3QgJAhgIARQgMAbgQAQQgUAVgeAJQgcAJgfgCIAAAAQgbAsgdAgQhKBQh/A0QhRAgibAmQhdAWgvAIQhPAMhAgBQhkgDhygmQhVgeh0g8QhGgkgpgcQg7gmgmgsQglgqgrhSQh0jfgMi4QgEg5AKgrQgFgagCglQgKisAviZQAzinBthwQBPhRCMhOQDPhzDQgtQDngzDOArQBzAZB9A4QCKA+BjBSQAoAhAtAuIAdAeQgEgOgCgQQgFgiACgyQABg4AIghQAGgXASgsQATgwANgYQAUgnAYgZQALgNASgOIAfgaIAzgtQATgrAjgVQAcgRAngCIgTAAQAagFAaAGIADABQAcAHAXARQAWASAOAZQAOAZACAcQACAVgEAhQgGAqgBALIABAyQABAfgEATQgCAMgJAZQgJAYgDANQgDANgBATIgBAhQgFBBgqBYQgdA/gfAgQgbAcg1AgQgdASgVAIIgGACQBABUAiBOQAkBRASBrQANBLAIB5QAUEZAEFiQACDNgDGuQgCDPgDBoQgFCsgNCJQgJBmgTCkQAMAFAMAHQAkAYAPAlQAOAhAABBIgBCLQAABRAFA6QAIBkAcBzQAIAmAJAUIAOAhQAHATgBAPg");
	var mask_graphics_118 = new cjs.Graphics().p("EAOKAhRIhqgDQgvgBgUgPQgRgMgKgZQgGgRgEgeQgNhfgFiCQgIjNAKkBQAFiVAUk4IASkPQgfAFgkABQhAAAhagLQhrgMhBgSQhcgZhUgzQg1gggqgnQgngjgmgyQgeglgng5QgcgqgNgbQgTgpABgjQABgjATgfQAUgfAegQQAegPAqgDQAWgBA2ACQBAAECAAEQBvAIBNAYQBBAVBFApQA4AgBDA0QAXARASAQIABgTQAGhlACgyQAEhTgChEQgBg0gHhhQgIhngCguIgCiNQAAhWgFg2QgKiMgqiEQhIjiibimQioixjVgxQhogYiaAEQiBAChaAVQicAlh/BsQh/Brg+CUQgiBQgFBJQgIBfApB6IBTDRIAeBIQASAoAWAaQAlArBUAsQBhAyBGASQBvAbClgUQBggMBJgXQBZgbBBgvQBehCA1huQAYgyANg1QgaACgZgIQgRgGgXgPIgngYQgSgKgagLIgugTQhSgkhDg4QgqgjgMgeQgJgXgBgtQgBgfACgSQADgaAIgUQAMgaAfgfQApgqAIgLIAUgeQANgTAJgKQARgTAXgKQgbgigHghQgGghALggQAMggAZgVQAegYApgEQAngFAnAOQA9AVBCBDQCmCpA3DzQA3DyhLDhQguCIhSBjQhBBNhdA7QhWA2hnAiQisA4jwACQiFABhSgUQgzgNg7gaQgrgUg9ghQhDglgrgfQg5gogmgtQgigngdg4QgTgkgchDQhTjFgeiMQgqi+AiicQAwjaDOjSQBihlBfg5QB/hLCqgeQCJgYC2ADQCAACBfAPQB3ATBeArQB7A5CCB8IAIAIIAAgBIgCg1QgBgfADgVQAIhHA5hGQAkgrBOhAQBShEAtgdQBBgrA0gIQAigFAfAHQAhAJAWAVQAbAZALAsQAJAhABAxQAEDJhECCQgUAmgzBFQgcAmgSAVQgbAggaAVIgYASQgOALgJAJQgHAIgPAUQgOATgIAIIgIAIQBjCxAjC9QAMBCAHBTQAEA1AFBhQANEzAFFHQABAyACAZQADApAIAgIANArQAKAdADAPQANAwAABBQABAQgEBiQgFCrAXCqIAjDRQAWCAAEBTQACAjgBCAQAABlAIA+IAPBpQAHA9gLAsQgOA2guAhQgxAjgvgUQgDBkgaBfQgFAVgGALQgJARgNAIQgKAHgQACIgQAAIgMAAg");
	var mask_graphics_119 = new cjs.Graphics().p("EAN9AhEQhBgHgegxQgRgcgGgsIgGhOQgDgrgOg/QgPhFgHgjQgRhfgDh4QgBhIAEiQIAMl+IAGiRQgUABgWgBQgdgBg1gKImmhHQg7gKgegKQgwgRgagfQgZgegEgrQgDgrAUgjQhThOgrhtQgXg6ACguQABgcALgZQALgaAUgRQAYgUAngHQAagFAtgBQBugBA3ABQBbADBJALQC4AbB4BZQAgAYA1AzQgFgdgShKQgQhEgDgqQgDg7AThTQAYheAKgwQAtjRgyjQQgKgrgfhgQgchYgLgyIgThgQgMg3gRglQgTgogkgqQgVgZgwguQg9g7gigcQg3gtg0gWQB3BlBOCBQBTCIAZCRQAVB3gQCEQgPB+gtBuQgyB2hQBXQiOCYjxBCQhhAbh5AMQhcALiCAEQhEADgogDQg7gEgugPQgxgSgygmQgmgdgwgxQilimheitQhtjKgDjGQgBhLAOhaQAKg+AXhlQAZhvAWg+QAghdAvhAQA7hSBnhEQBmhFB0goQBegiBzgSQD6goDsAuQD8AxC/CMQA8AtBEBAIARARQABiNAaiJQALg3ANgbQAMgYAmguIAsg7QAbgiAXgUQAegaAigMQAcgKAbACIgIgBQApAAAjAZQAkAZANAnQAIAYACAzQADBugJA7QgEAegOA7IgYBgQgMAzgKAYQgQAlghAmQgVAXgrApQgWAUgNAKQgUAPgSAJQAYAhAPAgQASAnAMA7IASBmQAJAxAVBKIAjB6QBFEFgQELQAtAhAcA5QAYA0AHA/QAFA0gHBBQgEAngOBOIg6FGQgnDbgLBmQgYDaANFSQASHkgBBKQAAA5gHAiQgLAygbAeQgiAkg2AAIgQAAgAmT4fQiZAehvBKQhqBGgkBcQgNAfgIAyIgPBUQgJAngZBNQgUBFAAAwQABAfAJAmQAFAWAOAuQAVBFAOAlQAVA5AYArQAkBAA+BDQAkAoBRBLQAUATALAIQASAOARAFQARAGAeACQCQAICPgZQCPgZCDg4QBSgiApgoQAdgdAXgrQAQgfATg0QAOgnAJggQgTAAgVgCQgrgGhGgWQhCgWgpgVQg4gdgfgpIgVgdIgTgdQgjgrgQgVQgpg2ghhPQgehHACgvQABgmASgjQASgjAfgYQAegYAmgKIAGgBQgGgKgFgKQgNgfADghQACggATgdQATgcAcgPQApgXA8AHQAoAEBCAWQg8gohWgQQg+gMhggCIgZAAQiUAAhyAWg");
	var mask_graphics_120 = new cjs.Graphics().p("EAOdAhIQgkgFgegdQgcgagOgmQgMgggEgrQgCgZAAg0QACnPAIrVIAAgFQgXABgbgDIg/gIQhAgIg9AAIhagBQg0gBglgHQhdgQhihCQg/gqhnhdQg2gxgbgeQgrgwgUgvQgfhFAPhEQAIgjAUgdQAVgeAegRQAegQApgFQAZgEA0AAQB1AAA7AGQBmAKCOAvQBKAYAxAWQBCAeAxAkQAdAVAaAaIACiDQAHklAAhrQABiPgGheQgHiAgXhpQgrjIhtiyQhKh7hjhkIANAOQAkAsAfA/QATAmAfBPQAfBRAIAmQAJAnAHBEIASC/QAGA5gDAgQgEAxgWAgQgIANgLAKQgCAxgOAsQgjBvh5BiQh0BgiaA1Qg9AUhOARQguAKhgARQiKAYhLAFQh3AGhcgXQhVgWhmg+Qhmg/g1hCQgaghgfg3Qghg+gSgeIg9hfQgkg5gSgqQgWgzgMhEQgIgqgJhTQgNh2AAg/QgBhmAYhNQANgrAagzQAQggAig5QArhKAbgoQAqg+ArgqQBRhRCXhHQCShFCCgaQBBgNBSgGQAygEBjgDQB0gEA8ADQBiAGBLAZQA3ATA8AkQAsAaA9AtQB2BWBWBXIgBgiQgDhKAGghQAJgoAEgVIAFgfQADgTAEgNQAOgtA5g2QBGhDAQgYIATggQALgUAKgLQAVgZAggMQAggNAhAFQAgAEAcAVQAbAVAOAeQAJAVAEAdQACATABAiIAACGQgBBKgGA6QgFAqgIAXQgIAZgbAsQgcAuggAuQghAvgYAbQgjAngkAVQgNAIgOAGIAVApQAlBJAqBsQBECpAWBxQAPBSAFBoQACBBgBB7IgWdnIAAClQABBcAGBIQAHBQABAWQABA6gNAqQgQA0gpAhQglAfgoAAIgPgBgApE3SQhaA0hABIQhuB8gbCyQgaCsA+ChQAgBRBMB7QArBGAeAlQAsA4AxAfQBTA1B8ABQBSAACMgaQCGgZBEgVQBvghBLg1QAughAZgnQAegvgGguQgEgagRghIgYgoQgoAAgWgDQgkgDgbgKQgigMgjgbQgYgTgkgjQhphqheh6Qgrg3gLgnQgGgUgBgdIAAgxQAAgyACgQIAAgEQgHgMgFgOIgEgOQgRACgTAAQhOAAgtgfQgZgSgPgcQgPgdgBgfQgBgeAOgdQAIgRALgNQhfAchQAugADF4uQAhAQA7AlQBCAqAiAaQAXARATARQgdgbgegZQhshahggaIgFgCQAQAGASAJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(87).to({graphics:mask_graphics_87,x:255.9504,y:595.1732}).wait(1).to({graphics:mask_graphics_88,x:257.0715,y:582.2008}).wait(1).to({graphics:mask_graphics_89,x:256.9362,y:570.2183}).wait(1).to({graphics:mask_graphics_90,x:255.825,y:562.6652}).wait(1).to({graphics:mask_graphics_91,x:257.0164,y:554.1573}).wait(1).to({graphics:mask_graphics_92,x:257.4768,y:542.9077}).wait(1).to({graphics:mask_graphics_93,x:237.1648,y:530.5525}).wait(1).to({graphics:mask_graphics_94,x:226.8377,y:523.6232}).wait(1).to({graphics:mask_graphics_95,x:216.5802,y:515.2048}).wait(1).to({graphics:mask_graphics_96,x:213.5574,y:510.5017}).wait(1).to({graphics:mask_graphics_97,x:210.6424,y:498.5374}).wait(1).to({graphics:mask_graphics_98,x:213.518,y:490.2975}).wait(1).to({graphics:mask_graphics_99,x:212.2199,y:469.1521}).wait(1).to({graphics:mask_graphics_100,x:209.7657,y:457.7}).wait(1).to({graphics:mask_graphics_101,x:211.0034,y:444.9969}).wait(1).to({graphics:mask_graphics_102,x:213.3761,y:436.7487}).wait(1).to({graphics:mask_graphics_103,x:215.0515,y:432.0457}).wait(1).to({graphics:mask_graphics_104,x:214.5136,y:427.7785}).wait(1).to({graphics:mask_graphics_105,x:196.1247,y:421.9328}).wait(1).to({graphics:mask_graphics_106,x:186.6215,y:419.0935}).wait(1).to({graphics:mask_graphics_107,x:177.9867,y:418.6077}).wait(1).to({graphics:mask_graphics_108,x:169.6577,y:422.2117}).wait(1).to({graphics:mask_graphics_109,x:165.9844,y:420.8557}).wait(1).to({graphics:mask_graphics_110,x:163.1619,y:420.6744}).wait(1).to({graphics:mask_graphics_111,x:163.0888,y:421.148}).wait(1).to({graphics:mask_graphics_112,x:162.4027,y:418.1717}).wait(1).to({graphics:mask_graphics_113,x:167.8698,y:418.2154}).wait(1).to({graphics:mask_graphics_114,x:163.8529,y:419.3594}).wait(1).to({graphics:mask_graphics_115,x:163.2923,y:415.1639}).wait(1).to({graphics:mask_graphics_116,x:164.7071,y:420.1186}).wait(1).to({graphics:mask_graphics_117,x:167.1255,y:417.6874}).wait(1).to({graphics:mask_graphics_118,x:165.4705,y:419.742}).wait(1).to({graphics:mask_graphics_119,x:165.3678,y:414.5931}).wait(1).to({graphics:mask_graphics_120,x:161.3328,y:416.9901}).wait(164));

	// stalk_obj_
	this.stalk = new lib.Scene_1_stalk();
	this.stalk.name = "stalk";
	this.stalk.parent = this;
	this.stalk.depth = 0;
	this.stalk.isAttachedToCamera = 0
	this.stalk.isAttachedToMask = 0
	this.stalk.layerDepth = 0
	this.stalk.layerIndex = 3
	this.stalk.maskLayerName = 0

	var maskedShapeInstanceList = [this.stalk];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.stalk).wait(284));

	// goGreen_obj_
	this.goGreen = new lib.Scene_1_goGreen();
	this.goGreen.name = "goGreen";
	this.goGreen.parent = this;
	this.goGreen.depth = 0;
	this.goGreen.isAttachedToCamera = 0
	this.goGreen.isAttachedToMask = 0
	this.goGreen.layerDepth = 0
	this.goGreen.layerIndex = 4
	this.goGreen.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.goGreen).wait(123).to({regX:144.6,regY:155.2,x:144.6,y:155.2},0).wait(56).to({regX:0,regY:0,x:0,y:0},0).wait(105));

	// leaf_obj_
	this.leaf = new lib.Scene_1_leaf();
	this.leaf.name = "leaf";
	this.leaf.parent = this;
	this.leaf.depth = 0;
	this.leaf.isAttachedToCamera = 0
	this.leaf.isAttachedToMask = 0
	this.leaf.layerDepth = 0
	this.leaf.layerIndex = 5
	this.leaf.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.leaf).wait(38).to({regX:181.8,regY:115.8,x:181.8,y:115.8},0).wait(8).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:181.8,regY:115.8,x:181.8,y:115.8},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:181.8,regY:115.8,x:181.8,y:115.8},0).wait(56).to({regX:0,regY:0,x:0,y:0},0).wait(154));

	// savethe_planet_obj_
	this.savethe_planet = new lib.Scene_1_savethe_planet();
	this.savethe_planet.name = "savethe_planet";
	this.savethe_planet.parent = this;
	this.savethe_planet.depth = 0;
	this.savethe_planet.isAttachedToCamera = 0
	this.savethe_planet.isAttachedToMask = 0
	this.savethe_planet.layerDepth = 0
	this.savethe_planet.layerIndex = 6
	this.savethe_planet.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.savethe_planet).wait(26).to({regX:143.9,regY:146.7,x:143.9,y:146.7},0).wait(50).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:143.9,regY:146.7,x:143.9,y:146.7},0).wait(207));

	// earth_obj_
	this.earth = new lib.Scene_1_earth();
	this.earth.name = "earth";
	this.earth.parent = this;
	this.earth.depth = 0;
	this.earth.isAttachedToCamera = 0
	this.earth.isAttachedToMask = 0
	this.earth.layerDepth = 0
	this.earth.layerIndex = 7
	this.earth.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.earth).wait(2).to({regX:146.9,regY:506,x:146.9,y:506},0).wait(18).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:146.9,regY:506,x:146.9,y:506},0).wait(263));

	// bg_obj_
	this.bg = new lib.Scene_1_bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(203.8,272.4,1,1,0,0,0,203.8,272.4);
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 8
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(284));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98,136,361.7,649.7);
// library properties:
lib.properties = {
	id: 'E1E7939D49E6074ABBB0BDD99DA61D83',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/planet_atlas.png", id:"300x600_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E1E7939D49E6074ABBB0BDD99DA61D83'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
