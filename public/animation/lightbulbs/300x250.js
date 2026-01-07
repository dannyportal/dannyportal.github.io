(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[0,0,300,600],[302,279,457,94],[302,375,293,57],[302,204,301,57],[597,375,198,63],[661,0,240,277],[302,0,357,202],[906,272,54,93],[903,0,94,134],[903,136,94,134],[761,279,143,94]]}
];


// symbols:



(lib.background = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CTN = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.GLOW = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.lightbulbOFF = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.lightbulbON = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.lightbulbONpngcopy = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.PP_LOGO_VERTICAL_WHITE = function() {
	this.initialize(ss["300x250_atlas_"]);
	this.gotoAndStop(10);
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


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_6();
	this.instance.parent = this;
	this.instance.setTransform(-110.7,-20.85,0.7351,0.7351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.7,-20.8,221.3,41.900000000000006);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_5();
	this.instance.parent = this;
	this.instance.setTransform(-60.7,-20.85,0.7351,0.7351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.7,-20.8,215.39999999999998,41.900000000000006);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(-118.5,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.5,-70,357,202);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lightbulbONpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-47,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-67,94,134);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lightbulbOFF();
	this.instance.parent = this;
	this.instance.setTransform(-27,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-46.5,54,93);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lightbulbOFF();
	this.instance.parent = this;
	this.instance.setTransform(-27,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-46.5,54,93);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lightbulbOFF();
	this.instance.parent = this;
	this.instance.setTransform(-27,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-46.5,54,93);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lightbulbOFF();
	this.instance.parent = this;
	this.instance.setTransform(-27,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-46.5,54,93);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CTN();
	this.instance.parent = this;
	this.instance.setTransform(-99,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-31.5,198,63);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_4();
	this.instance.parent = this;
	this.instance.setTransform(-166.75,-28.2,0.7351,0.7351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.7,-28.2,335.9,69.1);


(lib.Symbol_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GLOW();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_2_Layer_1, null, null);


(lib.Symbol_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lightbulbON();
	this.instance.parent = this;
	this.instance.setTransform(94,134,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_1_Layer_1, null, null);


(lib.Scene_1_LOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LOGO
	this.instance = new lib.PP_LOGO_VERTICAL_WHITE();
	this.instance.parent = this;
	this.instance.setTransform(118,5,0.4983,0.4983);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(224));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(-2,-14,1.04,0.4735);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(224));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(120,138.5,1,1,0,0,0,120,138.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,240,277), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(47,67,1,1,0,0,0,47,67);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,94,134), null);


(lib.Scene_1_text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text3
	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(153.55,83.05,0.6802,0.6802);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(212).to({_off:false},0).wait(1).to({regX:1.2,regY:6.4,x:154.35,y:87.4,alpha:0.1429},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8
	this.instance = new lib.Tween8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(179.5,88.15,0.6802,0.6802);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({_off:false},0).to({x:217.5,alpha:1},10).to({startPosition:0},36).to({alpha:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(148.95,89.2,0.6802,0.6802);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({x:158,alpha:1},9).to({startPosition:0},52).to({regX:0.1,regY:0.1,scaleX:0.6801,scaleY:0.6801,x:158.05,y:89.25},70).to({regX:0.4,regY:0.4,x:109.35,y:88.25},11).to({startPosition:0},36).to({alpha:0},11).wait(12));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(153.5,125.7,0.6802,0.6802,0,0,0,120,138.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(154).to({_off:false},0).wait(1).to({regY:138.5,x:153.45,y:125.6,alpha:0.0909},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).wait(36).to({regY:138.6,x:153.5,y:125.7},0).wait(1).to({regY:138.5,x:153.45,y:125.6},0).wait(22));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150.8,143.2,0.6802,0.6802);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({_off:false},0).to({x:151.3,y:138.4},11,cjs.Ease.quadInOut).to({y:141.5},13).to({y:142.85},14).to({startPosition:0},50).wait(23));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(340.9,234.15,0.6802,0.6802);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({_off:false},0).to({x:174.95,y:210.15},24,cjs.Ease.quartOut).to({startPosition:0},78).wait(9));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CTA
	this.instance = new lib.Symbol4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(151.55,230.3,0.4984,0.4984);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(212).to({_off:false},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.LIGHTS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2_copy_copy_copy_copy_copy
	this.instance = new lib.lightbulbON();
	this.instance.parent = this;
	this.instance.setTransform(103,67,1,1,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).to({_off:true},2).wait(75));

	// Layer_2_copy_copy_copy_copy
	this.instance_1 = new lib.lightbulbON();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47,67,1,1,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({_off:true},2).wait(78));

	// Layer_2_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,47,67);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({_off:false},0).wait(7).to({scaleX:0.9995,scaleY:0.9995,rotation:8.8017,y:-2},0).wait(1).to({scaleX:0.9988,scaleY:0.9988,rotation:24.7906,y:-5.7},0).wait(1).to({scaleX:0.9984,scaleY:0.9984,rotation:40.587,y:-9.35},0).wait(1).to({scaleX:0.9985,scaleY:0.9985,rotation:56.1718,x:0.05,y:-13},0).wait(1).to({scaleX:0.999,scaleY:0.999,rotation:71.7189,y:-16.6},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:87.2192,x:0,y:-20.2},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,rotation:102.3084,y:-23.8},0).wait(1).to({scaleX:0.9987,scaleY:0.9987,rotation:117.5807,x:-0.05,y:-27.4},0).wait(1).to({scaleX:0.9984,scaleY:0.9984,rotation:132.8391,x:0,y:-30.9},0).wait(1).to({scaleX:0.9985,scaleY:0.9985,rotation:147.8869,y:-34.4},0).wait(1).to({scaleX:0.9991,scaleY:0.9991,rotation:162.7105,x:-0.05,y:-37.85},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:177.4871,y:-41.35},0).wait(1).to({scaleX:1,scaleY:1,rotation:180,x:0,y:-43.35},0).wait(1).to({y:-45.15},0).wait(1).to({y:-46.9},0).wait(1).to({y:-48.65},0).wait(1).to({y:-50.4},0).wait(1).to({y:-49.7},0).wait(1).to({y:-47.6},0).wait(1).to({y:-45.55},0).wait(1).to({y:-43.5},0).wait(1).to({y:-41.45},0).wait(1).to({y:-39.9},0).to({_off:true},1).wait(2));

	// Layer_2_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance_3 = new lib.lightbulbON();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-9,67,1,1,180);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).to({_off:true},8).wait(33));

	// Layer_2_copy_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance_4 = new lib.lightbulbON();
	this.instance_4.parent = this;
	this.instance_4.setTransform(103,67,1,1,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({_off:true},7).wait(42));

	// Layer_2_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance_5 = new lib.lightbulbON();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-66,67,1,1,180);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60).to({_off:false},0).to({_off:true},5).wait(50));

	// Layer_2_copy_copy_copy_copy_copy_copy_copy
	this.instance_6 = new lib.lightbulbON();
	this.instance_6.parent = this;
	this.instance_6.setTransform(47,67,1,1,180);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(55).to({_off:false},0).to({_off:true},3).wait(57));

	// Layer_2_copy_copy_copy_copy_copy_copy
	this.instance_7 = new lib.lightbulbON();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-9,67,1,1,180);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({_off:false},0).to({_off:true},3).wait(62));

	// Layer_2_copy_copy_copy_copy_copy
	this.instance_8 = new lib.lightbulbON();
	this.instance_8.parent = this;
	this.instance_8.setTransform(160,67,1,1,180);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45).to({_off:false},0).to({_off:true},3).wait(67));

	// Layer_2_copy_copy_copy_copy
	this.instance_9 = new lib.lightbulbON();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-9,67,1,1,180);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(41).to({_off:false},0).to({_off:true},2).wait(72));

	// Layer_2_copy_copy_copy
	this.instance_10 = new lib.lightbulbON();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-9,67,1,1,180);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(32).to({_off:false},0).to({_off:true},2).wait(81));

	// Layer_2_copy_copy
	this.instance_11 = new lib.lightbulbON();
	this.instance_11.parent = this;
	this.instance_11.setTransform(47,67,1,1,180);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({_off:false},0).to({_off:true},2).wait(84));

	// Layer_2
	this.instance_12 = new lib.lightbulbON();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-66,68,1,1,180);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(26).to({_off:false},0).to({_off:true},2).wait(87));

	// lightbulbOFF_png
	this.instance_13 = new lib.Tween1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(113.05,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({startPosition:0},87).to({x:110,y:300.3},7,cjs.Ease.quadIn).to({_off:true},1).wait(20));

	// lightbulbOFF_png
	this.instance_14 = new lib.Tween2("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(56,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({startPosition:0},87).to({y:290.5},7,cjs.Ease.quadIn).to({_off:true},1).wait(20));

	// MIDDLE_BULB
	this.instance_15 = new lib.lightbulbOFF();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-27,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},88).wait(27));

	// lightbulbOFF_png
	this.instance_16 = new lib.Tween3("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-56,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({startPosition:0},87).to({x:-59,y:290.5},7,cjs.Ease.quadIn).to({_off:true},1).wait(20));

	// lightbulbOFF_png
	this.instance_17 = new lib.Tween4("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-113.05,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({startPosition:0},87).to({y:290.5},7,cjs.Ease.quadIn).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-117.4,320,464.20000000000005);


(lib.Scene_1_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.LIGHTS("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-110.45,170.55,0.6802,0.6802);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:150.65,startPosition:23},23,cjs.Ease.cubicOut).to({startPosition:36},13).wait(77));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
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
	this.frame_223 = function() {
		this.___loopingOver___ = true;
		_this = this;
		
		pauseFor = function(sec){
		
		    _this.stop();
		
		    setTimeout(function(){_this.play()}, sec*1000);
		
		}
		pauseFor(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(223).call(this.frame_223).wait(1));

	// CTA_obj_
	this.CTA = new lib.Scene_1_CTA();
	this.CTA.name = "CTA";
	this.CTA.parent = this;
	this.CTA.depth = 0;
	this.CTA.isAttachedToCamera = 0
	this.CTA.isAttachedToMask = 0
	this.CTA.layerDepth = 0
	this.CTA.layerIndex = 0
	this.CTA.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(213).to({regX:151.6,regY:230.3,x:151.6,y:230.3},0).wait(11));

	// text3_obj_
	this.text3 = new lib.Scene_1_text3();
	this.text3.name = "text3";
	this.text3.parent = this;
	this.text3.depth = 0;
	this.text3.isAttachedToCamera = 0
	this.text3.isAttachedToMask = 0
	this.text3.layerDepth = 0
	this.text3.layerIndex = 1
	this.text3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text3).wait(213).to({regX:154.4,regY:87.4,x:154.4,y:87.4},0).wait(11));

	// Layer_8_obj_
	this.Layer_8 = new lib.Scene_1_Layer_8();
	this.Layer_8.name = "Layer_8";
	this.Layer_8.parent = this;
	this.Layer_8.depth = 0;
	this.Layer_8.isAttachedToCamera = 0
	this.Layer_8.isAttachedToMask = 0
	this.Layer_8.layerDepth = 0
	this.Layer_8.layerIndex = 2
	this.Layer_8.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_8).wait(212).to({_off:true},1).wait(11));

	// Layer_7_obj_
	this.Layer_7 = new lib.Scene_1_Layer_7();
	this.Layer_7.name = "Layer_7";
	this.Layer_7.parent = this;
	this.Layer_7.depth = 0;
	this.Layer_7.isAttachedToCamera = 0
	this.Layer_7.isAttachedToMask = 0
	this.Layer_7.layerDepth = 0
	this.Layer_7.layerIndex = 3
	this.Layer_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_7).wait(224));

	// Layer_4_obj_
	this.Layer_4 = new lib.Scene_1_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.parent = this;
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 4
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(224));

	// Layer_6_obj_
	this.Layer_6 = new lib.Scene_1_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.parent = this;
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 5
	this.Layer_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(155).to({regX:153.5,regY:125.7,x:153.5,y:125.7},0).wait(46).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:153.5,regY:125.7,x:153.5,y:125.7},0).wait(22));

	// hand_obj_
	this.hand = new lib.Scene_1_hand();
	this.hand.name = "hand";
	this.hand.parent = this;
	this.hand.depth = 0;
	this.hand.isAttachedToCamera = 0
	this.hand.isAttachedToMask = 0
	this.hand.layerDepth = 0
	this.hand.layerIndex = 6
	this.hand.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(224));

	// Layer_3_obj_
	this.Layer_3 = new lib.Scene_1_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(-110.5,170.6,1,1,0,0,0,-110.5,170.6);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 7
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(36).to({_off:true},77).wait(111));

	// LOGO_obj_
	this.LOGO = new lib.Scene_1_LOGO();
	this.LOGO.name = "LOGO";
	this.LOGO.parent = this;
	this.LOGO.setTransform(153.6,28.4,1,1,0,0,0,153.6,28.4);
	this.LOGO.depth = 0;
	this.LOGO.isAttachedToCamera = 0
	this.LOGO.isAttachedToMask = 0
	this.LOGO.layerDepth = 0
	this.LOGO.layerIndex = 8
	this.LOGO.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.LOGO).wait(224));

	// bg_obj_
	this.bg = new lib.Scene_1_bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(154,128.1,1,1,0,0,0,154,128.1);
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 9
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(224));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,111,558.7,295.4);
// library properties:
lib.properties = {
	id: '8CF877C7BCDA8E49882A7326A5907F26',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/lightbulbs_atlas.png", id:"300x250_atlas_"}
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
an.compositions['8CF877C7BCDA8E49882A7326A5907F26'] = {
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
