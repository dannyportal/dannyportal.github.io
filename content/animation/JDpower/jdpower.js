(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_JD_POWERS_NJ_2YEARS_IN_A_ROW_atlas_P_", frames: [[0,0,300,121],[302,117,104,39],[302,0,121,115]]},
		{name:"300x250_JD_POWERS_NJ_2YEARS_IN_A_ROW_atlas_NP_", frames: [[0,0,336,223]]}
];


// symbols:



(lib.familypic = function() {
	this.initialize(ss["300x250_JD_POWERS_NJ_2YEARS_IN_A_ROW_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gradientphoto = function() {
	this.initialize(ss["300x250_JD_POWERS_NJ_2YEARS_IN_A_ROW_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NJLOGO = function() {
	this.initialize(ss["300x250_JD_POWERS_NJ_2YEARS_IN_A_ROW_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.trophies = function() {
	this.initialize(ss["300x250_JD_POWERS_NJ_2YEARS_IN_A_ROW_atlas_P_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.yellowandbluetrims = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// azul
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A5A92").s().p("A3TVGQpqovAAsXQAAsWJqowQJqovNpAAQNqAAJpIvQJrIwAAMWQAAMXprIvQppIwtqAAQtpAApqowg");
	this.shape.setTransform(3.05,163.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// yellow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CEC391").s().p("A4ZVGQqIovAAsXQAAsWKIowQKHovOSAAQOTAAKHIvQKIIwAAMWQAAMXqIIvQqHIwuTAAQuSAAqHowg");
	this.shape_1.setTransform(3.05,156.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.9,-34.9,442,389);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gradientphoto();
	this.instance.parent = this;
	this.instance.setTransform(-150,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-60.5,300,121);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gradientphoto();
	this.instance.parent = this;
	this.instance.setTransform(-150,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-60.5,300,121);


(lib.TROPHIES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.trophies();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,115);


(lib.Scene_1_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1C196").s().p("A2QSBMAAAgkBMAshAAAMAAAAkBgA1lRfMArLAAAMAAAgi9MgrLAAAg");
	this.shape.setTransform(149.95,124.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(161));

}).prototype = p = new cjs.MovieClip();


(lib.NJSMALLLOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NJLOGO();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,39);


(lib.gradient_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#133052","#133154","#225E99","#23619E","#133052"],[0,0.459,0.631,0.792,1],0,125,0,-125).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.goldenbgcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1C196").s().p("A1SCfIAAk+MAqlAAAIAAE+g");
	this.shape.setTransform(132.775,15.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,0,272.6,31.9);


(lib.familypic_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.familypic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,223);


(lib.COPY4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAhIAAg/IANAAIAAAIQADgFADgCQADgDAFAAQADAAADACIgFAOIgFgCQgDAAgDAFQgCAFAAAMIAAAdg");
	this.shape.setTransform(172.35,60.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgNQAAgOAKgKQAJgKAOAAQAOAAAKAKQAKAKAAAOIAAAEIgzAAQABAGAFAFQAFADAHAAQAJABAGgHIANAGQgFAIgHADQgHAEgJAAQgPAAgJgKgAgKgPQgDACgDAGIAiAAQgCgFgFgDQgFgEgFAAQgHAAgEAEg");
	this.shape_1.setTransform(166.35,60.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANAgIgNgkIgNAkIgKAAIgXg/IAPAAIAOAjIANgjIAJAAIAOAjIAMgjIAQAAIgXA/g");
	this.shape_2.setTransform(157.7,60.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAYQgJgKAAgOQgBgOALgKQAKgJAMAAQAIABAIAEQAJAEAEAJQAFAHgBAIQABAJgFAIQgEAIgJAEQgHAFgJAAQgNAAgKgKgAgMgMQgEAFAAAHQAAAJAEAEQAFAGAHAAQAIAAAEgGQAFgEAAgJQAAgHgEgFQgFgGgIABQgGgBgGAGg");
	this.shape_3.setTransform(149.05,60.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZArIAAhVIASAAQANAAAGACQAHADADAGQAEAFAAAJQAAAJgFAGQgFAFgIACQgFABgLAAIAAAlgAgIgIIAFAAIAHgCIAFgDIABgEQgBgFgDgCQgDgCgHAAIgEAAg");
	this.shape_4.setTransform(142.05,59.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgDQACgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_5.setTransform(133.475,62.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghArIAAhVIAUAAQARAAAJAEQAJAFAHALQAFAKAAANQAAAKgDAJQgDAIgGAFQgGAGgHACQgGACgQAAgAgRAbIAIAAQAKAAAFgDQAFgCADgGQADgHAAgIQABgNgIgIQgHgGgOAAIgGAAg");
	this.shape_6.setTransform(127.8,59.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgDQACgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_7.setTransform(121.725,62.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAfIAMgKIAHAGIAEABQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABgCAAgIIAAg7IARAAIAAA4QAAANgCAGQgDAGgEADQgGADgHAAQgNAAgKgNg");
	this.shape_8.setTransform(116.8,59.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAHIAAgNIAdAAIAAANg");
	this.shape_9.setTransform(108.425,60.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAFAMIADgFIACgHIgFAAIAAgQIAOAAIAAAIQAAAIgCAFQgCAGgEAGgAgSAMIAEgFIACgHIgGAAIAAgQIAOAAIAAAIQAAAIgBAFQgCAGgFAGg");
	this.shape_10.setTransform(195.075,39.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AANAgIgNgkIgNAkIgKAAIgXg/IAPAAIAOAjIANgjIAJAAIAOAjIAMgjIAQAAIgXA/g");
	this.shape_11.setTransform(187.4,43.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAYQgJgKAAgOQgBgOALgJQAKgKAMABQAIgBAIAFQAJAEAEAJQAFAHgBAIQABAJgFAIQgEAIgJAEQgHAFgJgBQgNAAgKgJgAgMgMQgEAFAAAHQAAAJAEAFQAFAFAHAAQAIAAAEgFQAFgFAAgJQAAgHgEgFQgFgGgIAAQgGAAgGAGg");
	this.shape_12.setTransform(178.75,43.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAJArIgSgkIgBAAIAAAkIgRAAIAAhVIASAAQANAAAGADQAGACAEAGQADAGAAAIQAAAIgDAGQgFAFgIADIAUAmgAgKgJIAFAAQAHAAADgCQADgBgBgGIgBgEIgDgEIgIAAIgFAAg");
	this.shape_13.setTransform(171.8,42.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAIgJANAAQAFgBAFADQAFACAEAFIAAgHIAQAAIAAA+IgQAAIAAgHQgEAFgFABQgFACgEAAQgNAAgJgJgAgLgNQgFAGAAAHQAAAJAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgJQAAgIgFgFQgFgEgHgBQgHABgFAEg");
	this.shape_14.setTransform(160.5,43.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANAhIAAgcQAAgLgBgDQgBgEgDgCQgDgCgDAAQgEAAgEADQgDAEgBAFQgBADAAAJIAAAaIgQAAIAAg/IAQAAIAAAHQAFgFAFgCQADgCAFAAQAJAAAHAHQAFAGAAALIAAApg");
	this.shape_15.setTransform(149.775,43.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHAtIAAg/IAPAAIAAA/gAgGgbQgDgCAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgDg");
	this.shape_16.setTransform(144.675,42.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAWIAKgKQADAEAEABIAFADQAEAAACgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgDgGgEIgFgDQgPgHAAgLQAAgHAGgGQAFgGAIABQAHAAAFACQAGADADAFIgKAKQgGgGgEAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIABACIAEADIAFAEQAKAEADAEQAEAEAAAHQAAAJgHAFQgGAGgKgBQgNABgJgMg");
	this.shape_17.setTransform(137.175,43.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAhIAAg/IAOAAIAAAIQACgFACgCQAEgDAEAAQAEAAADACIgFAOIgFgCQgDAAgDAFQgBAFAAAMIAAAdg");
	this.shape_18.setTransform(132.9,43.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAIgJANAAQAFgBAFADQAFACAEAFIAAgHIAQAAIAAA+IgQAAIAAgHQgFAFgEABQgFACgFAAQgMAAgJgJgAgLgNQgFAGAAAHQAAAJAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgJQAAgIgFgFQgFgEgHgBQgHABgFAEg");
	this.shape_19.setTransform(126.65,43.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAYQgKgJABgOQgBgOAKgJQAJgLAOABQAOgBAKALQAKAJgBAPIAAADIgyAAQABAGAFAEQAFAFAHAAQAIgBAHgFIANAGQgFAHgHADQgHAEgJgBQgPAAgJgJgAgLgPQgCACgDAGIAiAAQgCgFgFgDQgFgEgFAAQgGAAgGAEg");
	this.shape_20.setTransform(119,43.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHArIAAglIgagwIASAAIAPAfIAQgfIASAAIgaAwIAAAlg");
	this.shape_21.setTransform(111.45,42.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgOAMgJQAJgKAMABQAIgBAJAFQAIAEAEAJQAEAHABAIQgBAJgEAIQgEAIgIAEQgIAFgJgBQgNAAgKgJgAgLgMQgGAFAAAHQAAAJAGAFQAEAFAHAAQAIAAAEgFQAFgFAAgJQAAgHgEgFQgGgGgHAAQgHAAgEAGg");
	this.shape_22.setTransform(100.5,43.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAOAgIgOgkIgNAkIgKAAIgXg/IAQAAIANAjIAOgjIAIAAIANAjIAOgjIAPAAIgXA/g");
	this.shape_23.setTransform(91.85,43.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIArIAAhFIgPAAIAAgQIAvAAIAAAQIgQAAIAABFg");
	this.shape_24.setTransform(84.525,42.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAMIAKgaIALAGIgNAXg");
	this.shape_25.setTransform(258.625,30.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWArIAOgcIgZg5IARAAIAQAnIARgnIARAAIgnBVg");
	this.shape_26.setTransform(253.575,28.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXAYQgJgJAAgPQAAgNAJgJQAKgLANAAQAPAAAJALQAJAJAAAOIAAAEIgyAAQABAHAFAEQAFADAHAAQAIAAAHgFIANAFQgFAIgHADQgHADgJABQgOAAgKgKgAgLgPQgDACgCAGIAiAAQgCgFgFgEQgFgDgFAAQgGAAgGAEg");
	this.shape_27.setTransform(246.25,27.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWAXIAKgLQADADAEACIAFACQAEAAACgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgFgGgDIgFgCQgPgIAAgLQAAgIAGgFQAFgGAIAAQAHABAFADQAGACADAFIgKAKQgGgGgEAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIABADIAEACIAFADQAKAFADADQAEAGAAAGQAAAIgHAGQgGAFgKABQgNgBgJgKg");
	this.shape_28.setTransform(239.675,27.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgQAhIAAg/IAOAAIAAAIQACgFACgCQAEgDAEAAQADAAAEACIgFAOIgEgCQgEAAgDAFQgCAFABAMIAAAdg");
	this.shape_29.setTransform(235.4,27.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgXAYQgJgJAAgPQAAgNAJgJQAJgLAOAAQAOAAAKALQAJAJAAAOIAAAEIgyAAQABAHAFAEQAFADAGAAQAJAAAHgFIANAFQgFAIgHADQgHADgKABQgOAAgJgKgAgLgPQgDACgCAGIAhAAQgBgFgFgEQgEgDgHAAQgGAAgFAEg");
	this.shape_30.setTransform(229.4,27.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWAgIAMgMIAGAGIAFACQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAQACgCgBgIIAAg7IARAAIAAA4QAAAOgCAFQgDAGgFADQgEADgHAAQgOAAgKgMg");
	this.shape_31.setTransform(222.3,26.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAOAgIgOgkIgNAkIgKAAIgXg/IAQAAIAMAjIAPgjIAIAAIANAjIAOgjIAPAAIgXA/g");
	this.shape_32.setTransform(211.65,27.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXAYQgKgJAAgPQAAgNAKgJQAKgLANAAQAPAAAJALQAKAJAAAOIAAAEIgzAAQABAHAFAEQAFADAGAAQAKAAAGgFIANAFQgFAIgHADQgHADgKABQgNAAgKgKgAgKgPQgDACgDAGIAiAAQgCgFgFgEQgFgDgGAAQgFAAgFAEg");
	this.shape_33.setTransform(203,27.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AATArIgkg4IAAA4IgQAAIAAhVIAPAAIAkA3IAAg3IARAAIAABVg");
	this.shape_34.setTransform(194.7,26.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AANAhIAAgcQAAgLgBgDQgBgEgDgCQgDgCgDAAQgEAAgEADQgDAEgBAFQgBADAAAJIAAAaIgQAAIAAg/IAQAAIAAAHQAFgFAFgCQADgCAFAAQAJAAAHAHQAFAGAAALIAAApg");
	this.shape_35.setTransform(183.325,27.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgHAtIAAg+IAPAAIAAA+gAgGgaQgDgEAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAFQAAADgDAEQgDACgEAAQgDABgDgDg");
	this.shape_36.setTransform(178.225,25.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgXAYQgKgJAAgPQAAgNAKgJQAJgLAOAAQAOAAAKALQAKAJAAAOIAAAEIgzAAQABAHAFAEQAFADAGAAQAKAAAGgFIANAFQgFAIgHADQgHADgKABQgOAAgJgKgAgKgPQgEACgCAGIAiAAQgCgFgFgEQgFgDgGAAQgGAAgEAEg");
	this.shape_37.setTransform(169.6,27.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWAYQgKgLAAgNQAAgIAFgIQAEgHAJgFQAIgFAJAAQAKABAHAEQAIADAFAHIgOAIQgDgEgEgCQgEgBgFgBQgIABgFAFQgGAFAAAHQAAAJAGAFQAFAFAIAAQAKAAAGgIIANAJQgKANgTABQgQAAgJgKg");
	this.shape_38.setTransform(161.825,27.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgHAtIAAg+IAPAAIAAA+gAgGgaQgDgEAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAFQAAADgDAEQgDACgEAAQgDABgDgDg");
	this.shape_39.setTransform(156.575,25.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgEAgIgbg/IAQAAIAPAlIAQglIAQAAIgbA/g");
	this.shape_40.setTransform(151.825,27.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgQAhIAAg/IAOAAIAAAIQACgFACgCQAEgDAEAAQADAAAEACIgFAOIgEgCQgEAAgDAFQgCAFABAMIAAAdg");
	this.shape_41.setTransform(146.75,27.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgXAYQgJgJAAgPQAAgNAJgJQAJgLAOAAQAOAAAKALQAJAJAAAOIAAAEIgyAAQABAHAFAEQAFADAGAAQAJAAAHgFIANAFQgFAIgHADQgHADgKABQgOAAgJgKgAgLgPQgDACgCAGIAhAAQgBgFgFgEQgEgDgHAAQgGAAgFAEg");
	this.shape_42.setTransform(140.75,27.15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgOApQgHgFgFgJIAOgJQAGAMAHAAQAEAAADgDQADgCAAgDQAAgDgCgDIgJgJQgOgLgEgGQgEgGAAgGQAAgJAHgHQAHgGAJAAQAGAAAGADQAGADAGAIIgLALQgHgJgGAAQgDAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIACAEIAKALIAMAJQAFAFACAFQACAFAAAFQAAALgHAHQgIAGgLAAQgJAAgGgEg");
	this.shape_43.setTransform(133.65,26.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgWAYQgKgLAAgNQAAgIAFgIQAEgHAJgFQAIgFAJAAQAKABAHAEQAIADAFAHIgOAIQgDgEgEgCQgEgBgFgBQgIABgFAFQgGAFAAAHQAAAJAGAFQAFAFAIAAQAKAAAGgIIANAJQgKANgTABQgQAAgJgKg");
	this.shape_44.setTransform(123.425,27.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHAtIAAg+IAPAAIAAA+gAgGgaQgDgEAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAFQAAADgDAEQgDACgEAAQgDABgDgDg");
	this.shape_45.setTransform(118.175,25.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQAhIAAg/IANAAIAAAIQADgFACgCQAEgDAEAAQADAAAEACIgFAOIgEgCQgEAAgDAFQgBAFAAAMIAAAdg");
	this.shape_46.setTransform(115.05,27.075);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgIArIAAgwIgIAAIAAgOIAIAAIAAgXIAPAAIAAAXIAKAAIAAAOIgKAAIAAAwg");
	this.shape_47.setTransform(111.175,26);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgWAYQgKgLAAgNQAAgIAFgIQAEgHAJgFQAIgFAJAAQAKABAHAEQAIADAFAHIgOAIQgDgEgEgCQgEgBgFgBQgIABgFAFQgGAFAAAHQAAAJAGAFQAFAFAIAAQAKAAAGgIIANAJQgKANgTABQgQAAgJgKg");
	this.shape_48.setTransform(105.375,27.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgXAYQgJgJAAgPQAAgNAJgJQAKgLANAAQAPAAAJALQAJAJAAAOIAAAEIgyAAQABAHAFAEQAFADAHAAQAIAAAHgFIANAFQgFAIgHADQgHADgJABQgOAAgKgKgAgLgPQgDACgCAGIAiAAQgCgFgFgEQgFgDgFAAQgGAAgGAEg");
	this.shape_49.setTransform(97.75,27.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgHAsIAAhXIAPAAIAABXg");
	this.shape_50.setTransform(92.45,25.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgXArIAAhVIAvAAIAAAQIgfAAIAAAQIAfAAIAAAOIgfAAIAAAXIAfAAIAAAQg");
	this.shape_51.setTransform(88.15,26.05);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgHAsIAAhXIAPAAIAABXg");
	this.shape_52.setTransform(80,25.925);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgHAtIAAg+IAPAAIAAA+gAgGgaQgDgEAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAFQAAADgDAEQgDACgEAAQgDABgDgDg");
	this.shape_53.setTransform(77.075,25.85);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgXAYQgJgJAAgPQAAgNAJgKQAJgKAMAAQAFAAAFADQAFACAEAEIAAgGIAQAAIAAA+IgQAAIAAgHQgEAFgFACQgFACgFAAQgMAAgJgKgAgLgMQgFAFAAAHQAAAIAFAGQAFAFAHAAQAHAAAFgFQAFgGAAgIQAAgIgFgEQgFgGgHAAQgHAAgFAGg");
	this.shape_54.setTransform(71.55,27.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgIArIAAgwIgIAAIAAgOIAIAAIAAgXIAPAAIAAAXIAKAAIAAAOIgKAAIAAAwg");
	this.shape_55.setTransform(66.025,26);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgXAYQgJgJAAgPQAAgNAJgJQAJgLAOAAQAPAAAJALQAJAJAAAOIAAAEIgyAAQABAHAFAEQAFADAHAAQAIAAAHgFIANAFQgFAIgHADQgHADgJABQgPAAgJgKgAgLgPQgDACgCAGIAhAAQgBgFgFgEQgEgDgGAAQgGAAgGAEg");
	this.shape_56.setTransform(60.3,27.15);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAJArIgSgkIgBAAIAAAkIgRAAIAAhVIASAAQANAAAGACQAGADAEAGQADAGABAIQAAAJgFAFQgDAFgJACIAUAngAgKgIIAFAAQAHAAADgCQADgCgBgFIgBgGIgDgDIgIAAIgFAAg");
	this.shape_57.setTransform(53.35,26.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AANAsIAAgcIgBgPQgBgDgDgCQgDgBgDAAQgEAAgEADQgDACgCAGIAAANIAAAZIgQAAIAAhXIAQAAIAAAfQAEgEAFgCQAEgCAFAAQAJAAAHAGQAFAGAAAKIAAAqg");
	this.shape_58.setTransform(39.225,25.925);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgIArIAAgwIgIAAIAAgOIAIAAIAAgXIAPAAIAAAXIAKAAIAAAOIgKAAIAAAwg");
	this.shape_59.setTransform(33.875,26);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgHAtIAAg+IAPAAIAAA+gAgGgaQgDgEAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAFQAAADgDAEQgDACgEAAQgDABgDgDg");
	this.shape_60.setTransform(30.525,25.85);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AANAgIgNgkIgNAkIgKAAIgXg/IAPAAIANAjIAPgjIAIAAIAOAjIAMgjIAQAAIgXA/g");
	this.shape_61.setTransform(24.3,27.175);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AANAhIAAgcQAAgLgBgDQgBgEgDgCQgDgCgDAAQgEAAgEADQgDAEgBAFQgBADAAAJIAAAaIgQAAIAAg/IAQAAIAAAHQAFgFAFgCQADgCAFAAQAJAAAHAHQAFAGAAALIAAApg");
	this.shape_62.setTransform(264.975,10.575);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgXAYQgJgKAAgOQgBgOALgKQAKgJAMAAQAIABAIAEQAJAEAEAIQAFAIgBAIQABAJgFAIQgEAIgJAEQgHAFgJAAQgNAAgKgKgAgMgMQgEAFAAAHQAAAJAEAEQAFAGAHAAQAIAAAEgGQAFgEAAgJQAAgHgEgFQgFgGgIABQgGgBgGAGg");
	this.shape_63.setTransform(257.5,10.65);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgHAtIAAg/IAPAAIAAA/gAgGgbQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgEg");
	this.shape_64.setTransform(252.175,9.35);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgIAsIAAgyIgIAAIAAgNIAIAAIAAgYIAPAAIAAAYIAKAAIAAANIgKAAIAAAyg");
	this.shape_65.setTransform(249.025,9.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgWAXQgKgJAAgNQAAgJAFgIQAEgIAJgEQAIgEAJgBQAKAAAHAFQAIADAFAHIgOAIQgDgEgEgCQgEgCgFABQgIgBgFAGQgGAFAAAIQAAAHAGAGQAFAFAIAAQAKAAAGgIIANAJQgKAOgTAAQgQAAgJgLg");
	this.shape_66.setTransform(243.225,10.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgXAYQgJgKAAgOQAAgOAJgJQAJgKAMAAQAFABAFACQAFACAEAEIAAgHIAQAAIAAA/IgQAAIAAgGQgEADgFACQgFACgFABQgMAAgJgKgAgLgNQgFAGAAAHQAAAJAFAEQAFAGAHAAQAHAAAFgFQAFgGAAgIQAAgHgFgGQgFgEgHAAQgHAAgFAEg");
	this.shape_67.setTransform(235.35,10.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgKAtIAAgxIgFAAIAAgOIAFAAIABgOQAAgGAEgDQAEgDAGAAQAFAAAGADIAAALIgGAAIgEAAIgBAEIAAAIIALAAIAAAOIgLAAIAAAxg");
	this.shape_68.setTransform(229.875,9.35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgWAWIAKgKQADAEAEACIAFABQAEAAACgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgGgDIgFgDQgPgGAAgMQAAgHAGgGQAFgFAIgBQAHAAAFADQAGADADAFIgKAKQgGgGgEAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIABACIAEAEIAFACQAKAFADADQAEAFAAAHQAAAJgHAFQgGAGgKAAQgNAAgJgMg");
	this.shape_69.setTransform(225.475,10.65);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgHAtIAAg/IAPAAIAAA/gAgGgbQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgEg");
	this.shape_70.setTransform(221.425,9.35);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgIAsIAAgyIgIAAIAAgNIAIAAIAAgYIAPAAIAAAYIAKAAIAAANIgKAAIAAAyg");
	this.shape_71.setTransform(218.275,9.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgXAYQgJgKAAgOQAAgOAJgJQAJgKAMAAQAFABAFACQAFACAEAEIAAgHIAQAAIAAA/IgQAAIAAgGQgFADgEACQgFACgFABQgMAAgJgKgAgLgNQgFAGAAAHQAAAJAFAEQAFAGAGAAQAIAAAFgFQAFgGAAgIQAAgHgFgGQgFgEgIAAQgGAAgFAEg");
	this.shape_72.setTransform(212.3,10.65);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgPApQgGgFgFgJIAOgJQAGAMAHAAQAEAAADgDQADgCAAgDQAAgDgCgDIgJgJQgOgLgEgGQgEgGAAgGQAAgJAHgHQAGgGAJAAQAHAAAGADQAGADAHAIIgMALQgHgJgHAAQgCAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIABAEIAMALIALAJQAFAFACAFQACAFAAAFQAAALgHAHQgIAGgMAAQgIAAgHgEg");
	this.shape_73.setTransform(205.25,9.525);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgQAhIAAg/IAOAAIAAAIQACgFACgCQAEgDAEAAQAEAAADACIgFAOIgEgCQgEAAgDAFQgBAFgBAMIAAAdg");
	this.shape_74.setTransform(197.25,10.575);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgXAYQgJgKAAgNQAAgOAJgKQAJgKAOAAQAPAAAJAKQAJAKAAAPIAAADIgyAAQABAGAFAFQAFADAHAAQAIABAHgHIANAGQgFAIgHADQgHAEgJAAQgPAAgJgKgAgLgPQgDACgCAGIAhAAQgBgFgFgEQgEgDgGAAQgGAAgGAEg");
	this.shape_75.setTransform(191.25,10.65);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAhAhIAAghQAAgJgDgEQgDgEgFAAQgEAAgDACQgEADgBAEQgCAEAAAIIAAAdIgPAAIAAgfQAAgIgBgDQgBgEgDgCQgCgCgEAAQgEAAgDACQgEADgBAEQgCAEAAAIIAAAdIgQAAIAAg/IAQAAIAAAHQAEgEAFgCQAFgDAGAAQAGAAAFADQAEADADAGQAEgGAFgDQAGgDAGAAQAHAAAFAEQAFADADAFQACAFAAALIAAAlg");
	this.shape_76.setTransform(181.775,10.575);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgXAYQgJgKAAgOQAAgOALgKQAJgJAMAAQAJABAHAEQAJAEAEAIQAEAIAAAIQAAAJgEAIQgEAIgJAEQgHAFgJAAQgNAAgKgKgAgMgMQgEAFgBAHQABAJAEAEQAFAGAHAAQAHAAAFgGQAFgEAAgJQAAgHgEgFQgGgGgHABQgHgBgFAGg");
	this.shape_77.setTransform(172.25,10.65);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgIAsIAAgyIgIAAIAAgNIAIAAIAAgYIAPAAIAAAYIAKAAIAAANIgKAAIAAAyg");
	this.shape_78.setTransform(166.675,9.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgWAWIAKgKQADAEAEACIAFABQAEAAACgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgGgDIgFgDQgPgGAAgMQAAgHAGgGQAFgFAIgBQAHAAAFADQAGADADAFIgKAKQgGgGgEAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIABACIAEAEIAFACQAKAFADADQAEAFAAAHQAAAJgHAFQgGAGgKAAQgNAAgJgMg");
	this.shape_79.setTransform(162.075,10.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgQAcQgGgFgDgIQgCgGAAgOIAAgbIAQAAIAAAfQAAAIACADQABAEADACQACACADAAQAEAAADgCQACgCACgEQABgDAAgHIAAggIAQAAIAAAbQAAAQgCAGQgEAIgGADQgGAEgKABQgKAAgGgFg");
	this.shape_80.setTransform(155.9,10.75);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgcAhQgNgNAAgUQAAgMAGgKQAGgKALgGQALgGALAAQALAAAKAEQAKAFAHAIIgMALQgLgMgPAAQgLAAgJAIQgIAJAAALQAAAJADAGQAEAHAHAEQAHAEAHAAQAHAAAGgDQAGgDAHgHIALAMQgJAJgJAEQgIADgLAAQgTAAgNgMg");
	this.shape_81.setTransform(147.675,9.525);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgHAsIAAhXIAPAAIAABXg");
	this.shape_82.setTransform(138.15,9.425);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgXAYQgJgKAAgOQAAgOAJgJQAIgKANAAQAFABAFACQAFACAEAEIAAgHIAQAAIAAA/IgQAAIAAgGQgEADgFACQgFACgEABQgNAAgJgKgAgLgNQgFAGAAAHQAAAJAFAEQAFAGAHAAQAHAAAFgFQAFgGAAgIQAAgHgFgGQgFgEgHAAQgHAAgFAEg");
	this.shape_83.setTransform(132.6,10.65);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgHAtIAAg/IAPAAIAAA/gAgGgbQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgEg");
	this.shape_84.setTransform(127.325,9.35);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgIAsIAAgyIgIAAIAAgNIAIAAIAAgYIAPAAIAAAYIAKAAIAAANIgKAAIAAAyg");
	this.shape_85.setTransform(124.175,9.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AANAhIAAgcQAAgLgBgDQgBgEgDgCQgDgCgDAAQgEAAgEADQgDAEgBAFQgBADAAAJIAAAaIgQAAIAAg/IAQAAIAAAHQAFgFAFgCQADgCAFAAQAJAAAHAHQAFAGAAALIAAApg");
	this.shape_86.setTransform(118.725,10.575);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgXAYQgJgKAAgNQAAgOAJgKQAKgKANAAQAPAAAJAKQAJAKAAAPIAAADIgyAAQABAGAFAFQAFADAHAAQAIABAHgHIANAGQgFAIgHADQgHAEgJAAQgOAAgKgKgAgLgPQgDACgCAGIAiAAQgCgFgFgEQgFgDgFAAQgGAAgGAEg");
	this.shape_87.setTransform(111.25,10.65);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgXAkQgJgKAAgPQAAgNAJgJQAJgKAMAAQAFAAAFADQAFACAEAEIAAggIAQAAIAABYIgQAAIAAgHQgFAEgEACQgFACgFAAQgMAAgJgJgAgLgBQgFAFAAAHQAAAJAFAFQAFAGAGgBQAIAAAFgEQAFgGAAgJQAAgIgFgEQgFgFgIAAQgGAAgFAFg");
	this.shape_88.setTransform(103.3,9.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgHAtIAAg/IAPAAIAAA/gAgGgbQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgEg");
	this.shape_89.setTransform(98.025,9.35);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgWAWIAKgKQADAEAEACIAFABQAEAAACgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgGgDIgFgDQgPgGAAgMQAAgHAGgGQAFgFAIgBQAHAAAFADQAGADADAFIgKAKQgGgGgEAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIABACIAEAEIAFACQAKAFADADQAEAFAAAHQAAAJgHAFQgGAGgKAAQgNAAgJgMg");
	this.shape_90.setTransform(93.875,10.65);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgNQAAgOAKgKQAKgKANAAQAPAAAJAKQAKAKAAAPIAAADIgzAAQABAGAFAFQAFADAGAAQAKABAGgHIANAGQgFAIgHADQgHAEgKAAQgNAAgKgKgAgKgPQgDACgDAGIAhAAQgBgFgFgEQgEgDgHAAQgFAAgFAEg");
	this.shape_91.setTransform(87.45,10.65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAJArIgRglIgCAAIAAAlIgQAAIAAhVIARAAQANAAAGACQAGADAEAGQAEAFAAAJQgBAIgEAGQgEAFgHACIAUAngAgKgIIAFAAQAHgBADgCQACgCABgEIgBgGIgFgCIgIgBIgEAAg");
	this.shape_92.setTransform(80.5,9.55);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AANAhIAAgcQAAgLgBgDQgBgEgDgCQgDgCgDAAQgEAAgEADQgDAEgBAFQgBADAAAJIAAAaIgQAAIAAg/IAQAAIAAAHQAFgFAFgCQADgCAFAAQAJAAAHAHQAFAGAAALIAAApg");
	this.shape_93.setTransform(69.725,10.575);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgHAtIAAg/IAPAAIAAA/gAgGgbQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgEg");
	this.shape_94.setTransform(64.625,9.35);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgIAsIAAgyIgIAAIAAgNIAIAAIAAgYIAPAAIAAAYIAKAAIAAANIgKAAIAAAyg");
	this.shape_95.setTransform(58.125,9.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgWAWIAKgKQADAEAEACIAFABQAEAAACgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgGgDIgFgDQgPgGAAgMQAAgHAGgGQAFgFAIgBQAHAAAFADQAGADADAFIgKAKQgGgGgEAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIABACIAEAEIAFACQAKAFADADQAEAFAAAHQAAAJgHAFQgGAGgKAAQgNAAgJgMg");
	this.shape_96.setTransform(53.525,10.65);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgNQAAgOAKgKQAJgKAOAAQAOAAAKAKQAKAKAAAPIAAADIgzAAQABAGAFAFQAFADAHAAQAJABAGgHIANAGQgFAIgHADQgHAEgJAAQgPAAgJgKgAgKgPQgDACgDAGIAiAAQgCgFgFgEQgFgDgFAAQgHAAgEAEg");
	this.shape_97.setTransform(47.1,10.65);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AANAsIAAgcIgBgPQgBgDgDgCQgDgBgDAAQgEAAgEADQgDACgCAGIAAANIAAAZIgQAAIAAhXIAQAAIAAAfQAEgEAFgCQAEgCAFAAQAJAAAHAGQAFAGAAAKIAAAqg");
	this.shape_98.setTransform(39.675,9.425);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgPArQgGgCgEgFQgFgFgCgGIASAAQACADAEABIAIABQAGAAAEgCQAEgCABgDQACgDAAgIQgEAFgFABQgFACgEAAQgNAAgJgJQgJgJAAgNQAAgQAJgJQAJgIAMAAQAEAAAFACQAFACAFAFIAAgHIAQAAIAAA1QAAAQgHAIQgIAKgSAAQgIAAgHgCgAgLgYQgFAFAAAIQAAAIAFAEQAFAFAHAAQAHAAAFgFQAFgEAAgIQAAgIgFgFQgFgFgIAAQgGAAgFAFg");
	this.shape_99.setTransform(31.975,11.825);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgHAtIAAg/IAPAAIAAA/gAgGgbQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgEg");
	this.shape_100.setTransform(26.675,9.35);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAOArIAAgmIgcAAIAAAmIgQAAIAAhVIAQAAIAAAgIAcAAIAAggIARAAIAABVg");
	this.shape_101.setTransform(21.2,9.55);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAFAQIAAgIQAAgHACgFQABgFAFgGIAGAEIgDAGIgCAFIAFAAIAAAQgAgSAQIAAgIQAAgHACgFQACgFAEgGIAGAEIgDAGIgCAFIAGAAIAAAQg");
	this.shape_102.setTransform(14.225,6.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,68);


(lib.copy3animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#132F51").s().p("AgOBYQgGgHAAgIQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAIgGAHQgGAGgJAAQgIAAgGgGgAgQAlIAAiCIAhAAIAACCg");
	this.shape.setTransform(224,17.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#132F51").s().p("AAhBaIghhzIggBzIggAAIgpizIAiAAIAaByIAfhyIAcAAIAgByIAahyIAiAAIgpCzg");
	this.shape_1.setTransform(209.3,17.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#132F51").s().p("AhBBCQgbgcAAgmQAAgZAMgVQANgWAWgNQAVgMAZAAQAmAAAbAbQAbAcAAAnQAAAngbAbQgbAbgmAAQgoAAgagcgAgpgrQgRASAAAaQAAAdAWASQAQANAVAAQAYAAARgRQARgSAAgaQAAgYgRgSQgRgSgZAAQgYAAgRARg");
	this.shape_2.setTransform(187.475,17.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#132F51").s().p("AAUBaIgohMIgCAAIAABMIgjAAIAAizIAkAAQAdAAANAGQAMAFAIAMQAIAMAAARQAAASgJAMQgIALgRAGIArBQgAgWgTIAKAAQAPAAAHgEQAGgEAAgKQAAgGgDgEQgEgFgFgCQgEgBgNAAIgJAAg");
	this.shape_3.setTransform(170.55,17.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#132F51").s().p("AAzBaIgOglIhJAAIgOAlIgjAAIBFizIAhAAIBFCzgAgXATIAvAAIgXg8g");
	this.shape_4.setTransform(146.25,17.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#132F51").s().p("AAnBaIhMh1IAAB1IgiAAIAAizIAhAAIBLB1IAAh1IAjAAIAACzg");
	this.shape_5.setTransform(120.75,17.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#132F51").s().p("AgQBaIAAizIAhAAIAACzg");
	this.shape_6.setTransform(108,17.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#132F51").s().p("AgfBVQgOgKgLgUIAdgRQANAYAQAAQAJAAAGgFQAGgFAAgHQAAgGgEgGQgFgGgOgNQgegXgJgNQgIgNAAgNQAAgTAOgNQAPgNATAAQAOAAAMAGQAMAGAOARIgZAWQgOgTgNAAQgGAAgEAEQgEAEgBAEQAAAFADAEQAFAFATASIAZATQAKALAEAJQAEAKAAALQAAAWgPAPQgPAOgYAAQgTAAgOgJg");
	this.shape_7.setTransform(90.65,17.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#132F51").s().p("AAUBaIgohMIgDAAIAABMIgiAAIAAizIAkAAQAdAAANAGQAMAFAIAMQAIAMAAARQAAASgJAMQgIALgRAGIAqBQgAgXgTIALAAQAPAAAHgEQAGgEAAgKQAAgGgDgEQgEgFgFgCQgEgBgNAAIgKAAg");
	this.shape_8.setTransform(78.05,17.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#132F51").s().p("AAzBaIgOglIhJAAIgOAlIgjAAIBFizIAhAAIBFCzgAgXATIAvAAIgXg8g");
	this.shape_9.setTransform(60.75,17.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#132F51").s().p("AgwBaIAAizIBhAAIAAAiIg/AAIAAAgIA/AAIAAAgIg/AAIAAAvIA/AAIAAAig");
	this.shape_10.setTransform(45.45,17.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#132F51").s().p("AgQBaIAAhOIg1hlIAlAAIAgBBIAihBIAkAAIg1BlIAABOg");
	this.shape_11.setTransform(30.775,17.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#132F51").s().p("Ag9BcIAAgRIA3g4QATgUAHgLQAHgNAAgKQAAgKgHgIQgHgGgLAAQgKAAgHAIQgIAIAAAPIghAAQABgeARgQQARgRAZAAQARAAAMAHQANAHAHANQAIAMAAAOQAAAQgKATQgJARgYAZIgTAWIA/AAIAAAfg");
	this.shape_12.setTransform(8.775,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,229.7,34.3);


(lib.copy2animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBbIAAhnIgRAAIAAgdIARAAIAAgxIAgAAIAAAxIAUAAIAAAdIgUAAIAABng");
	this.shape.setTransform(85.4,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAvIAUgWQAGAGAIAFQAIAEAFAAQAGAAAFgDQAEgDAAgFQgBgHgOgIIgKgFQghgPABgZQAAgQAMgLQAMgLASAAQANAAALAGQAMAFAHALIgUAVQgMgNgLAAQgFAAgDADQgDACAAADQAAADACACQACADAHAEIANAGQATAJAHAJQAHAKAAANQAAASgNAMQgNAMgVAAQgdAAgRgXg");
	this.shape_1.setTransform(75.85,20.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxAyQgUgUAAgdQAAgeAUgUQAUgUAdAAQAeAAAUAUQAUAUAAAgIAAAGIhqAAQACAPAKAIQAKAIAPAAQASAAAOgNIAcANQgLAPgOAIQgPAHgUAAQgeAAgUgUgAgXghQgGAFgGAMIBHAAQgDgLgKgHQgJgHgNAAQgNAAgLAIg");
	this.shape_2.setTransform(62.525,20.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaBcIAAg6QAAgXgCgJQgCgGgGgFQgFgDgIAAQgJgBgHAHQgHAGgDALQgCAHAAAUIAAA2IghAAIAAi3IAhAAIAABAQAKgIAKgEQAJgEAKAAQAUAAANAOQAMALAAAWIAABYg");
	this.shape_3.setTransform(47.075,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBZQgOgFgJgJQgJgJgEgOIAkAAQAFAFAIADQAHADALAAQAMAAAJgEQAIgEADgHQAEgGgBgRQgJAKgJADQgKAEgLAAQgaAAgTgUQgSgTAAgcQAAgfATgUQASgRAZAAQAKAAAKAEQAKAEAKAKIAAgPIAhAAIAABxQAAAhgNARQgSAVglAAQgSAAgNgFgAgYgzQgLAKAAAQQAAAQALAKQAKALAQAAQAPAAAKgKQAKgKAAgQQAAgRgKgKQgKgLgQAAQgPAAgKALg");
	this.shape_4.setTransform(30.95,22.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBeIAAiEIAhAAIAACEgAgOg4QgGgGAAgKQAAgIAGgHQAGgGAIAAQAJAAAGAHQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_5.setTransform(19.975,17.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBcIAAg6QAAgXgCgJQgCgGgGgFQgFgDgIAAQgJgBgHAHQgHAGgDALQgCAHAAAUIAAA2IghAAIAAi3IAhAAIAABAQAKgIAKgEQAJgEAKAAQAUAAANAOQAMALAAAWIAABYg");
	this.shape_6.setTransform(9.575,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.1,34.3);


(lib.copy1animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1C196").s().p("AgjBEIAAiEIAdAAIAAARQAEgKAHgFQAIgFAJAAQAGAAAIADIgLAdQgGgDgDAAQgIAAgFAJQgFAKAAAbIAAA8g");
	this.shape.setTransform(156.475,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1C196").s().p("AgjA6QgNgJgFgSQgEgMAAgfIAAg3IAhAAIAABAQAAASADAHQACAHAHAEQAFAEAHAAQAIAAAHgEQAFgEADgHQACgGAAgSIAAhBIAiAAIAAA4QAAAigGANQgHAPgNAJQgNAIgUAAQgVAAgOgKg");
	this.shape_1.setTransform(144.5,20.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1C196").s().p("AgxAxQgTgUgBgdQAAgeAXgVQAUgSAaAAQASAAARAJQAQAKAKAQQAIAQABASQgBATgIAQQgKAQgQAKQgQAJgTAAQgcAAgVgVgAgZgbQgKALAAAQQAAARAKALQAKALAPAAQAPAAALgLQAKgLAAgRQAAgQgKgLQgLgLgPAAQgPAAgKALg");
	this.shape_2.setTransform(129,20.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1C196").s().p("AgxAyQgUgUAAgdQAAgeAUgUQAUgUAdAAQAeAAAUAUQAUAUAAAgIAAAGIhqAAQACAPAKAIQAKAIAPAAQASAAAOgNIAcANQgLAPgOAIQgPAHgUAAQgeAAgUgUgAgXghQgGAFgGAMIBHAAQgDgLgKgHQgJgHgNAAQgNAAgLAIg");
	this.shape_3.setTransform(106.025,20.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1C196").s().p("AgjBEIAAiEIAdAAIAAARQAEgKAHgFQAIgFAJAAQAGAAAIADIgLAdQgGgDgDAAQgIAAgFAJQgFAKAAAbIAAA8g");
	this.shape_4.setTransform(94.475,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1C196").s().p("AgxAyQgTgUAAgeQAAgeATgTQASgUAaAAQALAAAKAFQALAEAJAJIAAgPIAhAAIAACEIghAAIAAgOQgKAJgKAFQgKAEgKAAQgaAAgTgUgAgYgbQgKALAAAQQAAARAKALQAKALAPAAQAPAAALgLQAKgLAAgRQAAgRgKgKQgLgLgPAAQgPAAgKALg");
	this.shape_5.setTransform(81.425,20.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1C196").s().p("AgjA6QgNgJgGgSQgDgMAAgfIAAg3IAhAAIAABAQAAASADAHQACAHAHAEQAFAEAHAAQAJAAAGgEQAFgEADgHQACgGAAgSIAAhBIAiAAIAAA4QAAAigGANQgHAPgNAJQgNAIgUAAQgVAAgOgKg");
	this.shape_6.setTransform(59,20.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1C196").s().p("AgxAxQgTgUgBgdQAAgeAXgVQAUgSAaAAQASAAARAJQAQAKAKAQQAIAQABASQgBATgIAQQgKAQgQAKQgQAJgTAAQgcAAgVgVgAgZgbQgKALAAAQQAAARAKALQAKALAPAAQAPAAALgLQAKgLAAgRQAAgQgKgLQgLgLgPAAQgPAAgKALg");
	this.shape_7.setTransform(43.5,20.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1C196").s().p("AgQBaIAAhOIg1hlIAlAAIAgBBIAihBIAkAAIg1BlIAABOg");
	this.shape_8.setTransform(27.775,17.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,34.3);


(lib.copy2banimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBYQgGgHAAgIQAAgJAGgGQAGgGAIAAQAIAAAHAGQAGAGAAAJQAAAIgGAHQgHAGgIAAQgIAAgGgGgAgQAlIAAiCIAhAAIAACCg");
	this.shape.setTransform(88,17.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguBbIAbg7Igzh6IAjAAIAiBUIAmhUIAiAAIhTC1g");
	this.shape_1.setTransform(77.25,22.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBbIAAhnIgRAAIAAgdIARAAIAAgxIAgAAIAAAxIAUAAIAAAdIgUAAIAABng");
	this.shape_2.setTransform(66.4,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBeIAAiEIAhAAIAACEgAgOg4QgGgGAAgKQAAgIAGgHQAGgGAIAAQAJAAAGAHQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_3.setTransform(59.475,17.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjBEIAAiEIAdAAIAAARQAEgKAHgFQAIgFAJAAQAGAAAIADIgLAdQgGgDgDAAQgIAAgFAJQgFAKAAAbIAAA8g");
	this.shape_4.setTransform(52.975,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxAxQgTgUAAgdQgBgeAXgVQAUgSAaAAQASAAAQAJQARAKAJAQQAKAQgBASQABATgKAQQgJAQgQAKQgQAJgTAAQgcAAgVgVgAgZgbQgLALAAAQQAAARALALQAKALAPAAQAQAAAJgLQALgLAAgRQAAgQgKgLQgLgLgPAAQgPAAgKALg");
	this.shape_5.setTransform(40.5,20.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQBeIAAiEIAhAAIAACEgAgOg4QgGgGAAgKQAAgIAGgHQAGgGAIAAQAJAAAGAHQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_6.setTransform(29.475,17.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjBEIAAiEIAdAAIAAARQAEgKAHgFQAIgFAJAAQAGAAAIADIgLAdQgGgDgDAAQgIAAgFAJQgFAKAAAbIAAA8g");
	this.shape_7.setTransform(22.975,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhEBcIAAi0IAhAAIAAAPQAJgJALgFQAKgEALAAQAaAAASATQATAUAAAfQAAAcgTAUQgTAUgaAAQgKAAgKgEQgKgEgKgJIAAA+gAgagyQgKALAAARQAAASAKAKQAKALAQAAQAOAAALgLQAKgLAAgRQAAgRgKgLQgKgLgPAAQgQAAgKALg");
	this.shape_8.setTransform(10.575,22.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.1,34.3);


(lib.Scene_1_yellow_n_blue_trims_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// yellow_n_blue_trims_
	this.instance = new lib.yellowandbluetrims("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(151.1,478.7,0.694,0.9089,0,0,0,3.1,354.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({regY:354.1,scaleX:1,scaleY:1,x:151.05,y:478.6},6).wait(107).to({startPosition:0},0).wait(1).to({regY:159.6,y:284.95},0).wait(1).to({y:286.7},0).wait(1).to({y:289.75},0).wait(1).to({y:294.65},0).wait(1).to({y:302.05},0).wait(1).to({y:310.95},0).wait(1).to({y:317.5},0).wait(1).to({y:320.65},0).wait(1).to({regY:354.1,y:516},0).wait(18));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_TROPHIES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TROPHIES
	this.instance = new lib.TROPHIES("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(152.25,192.55,0.9,0.9,0,0,0,60.5,57.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(143).to({_off:false},0).wait(1).to({regY:57.5,scaleX:0.9043,scaleY:0.9043,x:152.2,y:192.45,alpha:0.0432},0).wait(1).to({scaleX:0.9152,scaleY:0.9152,y:192.4,alpha:0.1517},0).wait(1).to({scaleX:0.9373,scaleY:0.9373,y:192.45,alpha:0.3732},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:152.25,alpha:0.7182},0).wait(1).to({scaleX:0.9946,scaleY:0.9946,x:152.2,alpha:0.9455},0).wait(1).to({scaleX:1,scaleY:1,x:152.25,y:192.5,alpha:1},0).wait(12));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pic
	this.instance = new lib.familypic_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(162.9,214.3,1,1,0,0,0,168,111.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({scaleX:1.0809,scaleY:1.0809,x:162.95},128).to({scaleX:1.09,scaleY:1.09,x:162.9,alpha:0},15).wait(12));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_NJ_LOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// NJ_LOGO
	this.instance = new lib.NJSMALLLOGO("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(65.95,37.5,0.9,0.9,0,0,0,52.1,19.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(134).to({_off:false},0).wait(1).to({regX:52,scaleX:0.9023,scaleY:0.9023,x:65.8,alpha:0.0231},0).wait(1).to({scaleX:0.907,scaleY:0.907,alpha:0.0703},0).wait(1).to({scaleX:0.9151,scaleY:0.9151,x:65.85,alpha:0.1517},0).wait(1).to({scaleX:0.9283,scaleY:0.9283,x:65.8,y:37.45,alpha:0.2829},0).wait(1).to({scaleX:0.9481,scaleY:0.9481,y:37.5,alpha:0.481},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:65.85,y:37.45,alpha:0.7182},0).wait(1).to({scaleX:0.9894,scaleY:0.9894,y:37.5,alpha:0.8937},0).wait(1).to({scaleX:0.9978,scaleY:0.9978,y:37.45,alpha:0.9779},0).wait(1).to({scaleX:1,scaleY:1,x:65.9,y:37.5,alpha:1},0).wait(18));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_COPY4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// COPY4
	this.instance = new lib.COPY4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(149.9,90.8,0.9,0.9,0,0,0,140,34);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).wait(1).to({regX:140.1,regY:34.2,scaleX:0.9017,scaleY:0.9017,x:150,y:90.95,alpha:0.0173},0).wait(1).to({scaleX:0.905,scaleY:0.905,alpha:0.0498},0).wait(1).to({scaleX:0.9102,scaleY:0.9102,x:149.95,y:91,alpha:0.1023},0).wait(1).to({scaleX:0.9182,scaleY:0.9182,x:150,y:90.95,alpha:0.1817},0).wait(1).to({scaleX:0.9298,scaleY:0.9298,x:149.95,alpha:0.298},0).wait(1).to({scaleX:0.946,scaleY:0.946,x:150,alpha:0.4602},0).wait(1).to({scaleX:0.9655,scaleY:0.9655,x:149.95,alpha:0.6553},0).wait(1).to({scaleX:0.9826,scaleY:0.9826,alpha:0.8262},0).wait(1).to({scaleX:0.9934,scaleY:0.9934,alpha:0.9335},0).wait(1).to({scaleX:0.9986,scaleY:0.9986,x:150,alpha:0.9856},0).wait(1).to({regX:140,regY:34,scaleX:1,scaleY:1,x:149.9,y:90.8,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.gradient_bg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(161));

}).prototype = p = new cjs.MovieClip();


(lib.dropshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,121);


(lib.copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("AhrDcIAAm3IAxAAIAAG3g");
	var mask_graphics_10 = new cjs.Graphics().p("AmxDcIAAm3INjAAIAAG3g");
	var mask_graphics_11 = new cjs.Graphics().p("AplDcIAAm3ITLAAIAAG3g");
	var mask_graphics_12 = new cjs.Graphics().p("ArjDcIAAm3IXHAAIAAG3g");
	var mask_graphics_13 = new cjs.Graphics().p("AtEDcIAAm3IaJAAIAAG3g");
	var mask_graphics_14 = new cjs.Graphics().p("AuRDcIAAm3IcjAAIAAG3g");
	var mask_graphics_15 = new cjs.Graphics().p("AvRDcIAAm3IejAAIAAG3g");
	var mask_graphics_16 = new cjs.Graphics().p("AwGDcIAAm3MAgNAAAIAAG3g");
	var mask_graphics_17 = new cjs.Graphics().p("AwyDcIAAm3MAhlAAAIAAG3g");
	var mask_graphics_18 = new cjs.Graphics().p("AxWDcIAAm3MAitAAAIAAG3g");
	var mask_graphics_19 = new cjs.Graphics().p("Ax0DcIAAm3MAjpAAAIAAG3g");
	var mask_graphics_20 = new cjs.Graphics().p("AyLDcIAAm3MAkXAAAIAAG3g");
	var mask_graphics_21 = new cjs.Graphics().p("AydDcIAAm3MAk7AAAIAAG3g");
	var mask_graphics_22 = new cjs.Graphics().p("AyqDcIAAm3MAlVAAAIAAG3g");
	var mask_graphics_23 = new cjs.Graphics().p("AyxDcIAAm3MAljAAAIAAG3g");
	var mask_graphics_24 = new cjs.Graphics().p("Ay0DcIAAm3MAlpAAAIAAG3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:-10.8249,y:11.05}).wait(1).to({graphics:mask_graphics_10,x:27.4927,y:11.05}).wait(1).to({graphics:mask_graphics_11,x:48.054,y:11.05}).wait(1).to({graphics:mask_graphics_12,x:62.4332,y:11.05}).wait(1).to({graphics:mask_graphics_13,x:73.5002,y:11.05}).wait(1).to({graphics:mask_graphics_14,x:82.3871,y:11.05}).wait(1).to({graphics:mask_graphics_15,x:89.6776,y:11.05}).wait(1).to({graphics:mask_graphics_16,x:95.7172,y:11.05}).wait(1).to({graphics:mask_graphics_17,x:100.7288,y:11.05}).wait(1).to({graphics:mask_graphics_18,x:104.8641,y:11.05}).wait(1).to({graphics:mask_graphics_19,x:108.2297,y:11.05}).wait(1).to({graphics:mask_graphics_20,x:110.9018,y:11.05}).wait(1).to({graphics:mask_graphics_21,x:112.9346,y:11.05}).wait(1).to({graphics:mask_graphics_22,x:114.3654,y:11.05}).wait(1).to({graphics:mask_graphics_23,x:115.2173,y:11.05}).wait(1).to({graphics:mask_graphics_24,x:115.501,y:11.05}).wait(156));

	// copy3
	this.instance = new lib.copy3animation("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(114.9,17.2,1,1,0,0,0,114.9,17.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(171));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ay0DcIAAm3MAlpAAAIAAG3g");
	mask_1.setTransform(115.501,11.05);

	// bg
	this.instance_1 = new lib.goldenbgcopy3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(117.75,50.9,1,1,0,0,0,134.1,16);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:132.8,regY:15.9,x:116.45,y:50},0).wait(1).to({y:48.45},0).wait(1).to({y:45.75},0).wait(1).to({y:41.45},0).wait(1).to({y:34.9},0).wait(1).to({y:27.1},0).wait(1).to({y:21.3},0).wait(1).to({y:18.5},0).wait(1).to({regX:134.1,regY:16,x:117.75,y:17.9},0).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,0,240.9,33.1);


(lib.copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1AFAIAAp/MAqCAAAIAAJ/g");
	mask.setTransform(95.55,3);

	// Layer_2
	this.instance = new lib.copy2banimation("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(144,64.3,1,1,0,0,0,49,34.3);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({regX:46.9,regY:19.9,scaleX:1.0047,scaleY:1.0047,x:142.1,y:49.1},0).wait(1).to({scaleX:1.0143,scaleY:1.0143,x:142.55,y:47.6},0).wait(1).to({scaleX:1.0309,scaleY:1.0309,x:143.35,y:44.85},0).wait(1).to({scaleX:1.0577,scaleY:1.0577,x:144.6,y:40.55},0).wait(1).to({scaleX:1.0981,scaleY:1.0981,x:146.55,y:34.05},0).wait(1).to({scaleX:1.1464,scaleY:1.1464,x:148.8,y:26.25},0).wait(1).to({scaleX:1.1822,scaleY:1.1822,x:150.5,y:20.55},0).wait(1).to({scaleX:1.1993,scaleY:1.1993,x:151.35,y:17.75},0).wait(1).to({regX:49.1,regY:34.3,scaleX:1.2039,scaleY:1.2039,x:154.15,y:34.35},0).to({regX:49,scaleX:1,scaleY:1,x:144,y:34.3},10).wait(122));

	// Layer_1
	this.instance_1 = new lib.copy2animation("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(48,64.3,1,1,0,0,0,48,34.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:46.3,regY:20,scaleX:1.0062,scaleY:1.0062,x:46.1,y:49.15},0).wait(1).to({scaleX:1.019,scaleY:1.019,x:45.6,y:47.6},0).wait(1).to({scaleX:1.0411,scaleY:1.0411,x:44.7,y:44.8},0).wait(1).to({scaleX:1.0766,scaleY:1.0766,x:43.35,y:40.4},0).wait(1).to({scaleX:1.1303,scaleY:1.1303,x:41.3,y:33.7},0).wait(1).to({scaleX:1.1945,scaleY:1.1945,x:38.75,y:25.7},0).wait(1).to({scaleX:1.242,scaleY:1.242,x:36.9,y:19.8},0).wait(1).to({scaleX:1.2648,scaleY:1.2648,x:36,y:16.95},0).wait(1).to({regX:47.9,regY:34.3,scaleX:1.2708,scaleY:1.2708,x:37.9,y:34.35},0).to({regX:48,scaleX:1,scaleY:1,x:48,y:34.3},10).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-9.2,236,44.2);


(lib.copy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhEOIAAobMAnEAAAIAAIbg");
	mask.setTransform(92.1,8.05);

	// Layer_1
	this.instance = new lib.copy1animation("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(90,64.3,1,1,0,0,0,90,34.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:90.4,regY:18,scaleX:1.0033,scaleY:1.0033,x:90.4,y:47.2},0).wait(1).to({scaleX:1.0102,scaleY:1.0102,y:45.7},0).wait(1).to({scaleX:1.022,scaleY:1.022,x:90.45,y:43.05},0).wait(1).to({scaleX:1.041,scaleY:1.041,y:38.8},0).wait(1).to({scaleX:1.0696,scaleY:1.0696,y:32.4},0).wait(1).to({scaleX:1.104,scaleY:1.104,x:90.5,y:24.7},0).wait(1).to({scaleX:1.1294,scaleY:1.1294,y:19.1},0).wait(1).to({scaleX:1.1416,scaleY:1.1416,y:16.35},0).wait(1).to({regX:90,regY:34.2,scaleX:1.1448,scaleY:1.1448,x:90.1,y:34.25},0).to({regY:34.3,scaleX:1,scaleY:1,x:90,y:34.3},8).wait(163));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,-4.9,206.1,40);


(lib.Scene_1_drop_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drop_shadow
	this.instance = new lib.dropshadow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(149,149.5,1,1,0,0,0,150,60.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(149,149.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},21).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance_1}]},107).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({alpha:1},6).to({_off:true},107).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({_off:false},0).wait(1).to({y:150.3768},0).wait(1).to({y:152.1721},0).wait(1).to({y:155.2644},0).wait(1).to({y:160.2501},0).wait(1).to({y:167.7774},0).wait(1).to({y:176.7908},0).wait(1).to({y:183.4614},0).wait(1).to({y:186.6593},0).to({_off:true},1).wait(18));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_COPY3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// COPY3
	this.instance = new lib.copy3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(204.35,37.2,0.7,0.7,0,0,0,115,17.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(138).to({_off:false},0).wait(23));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// copy2
	this.instance = new lib.copy2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(159.5,66.2,1,1,0,0,0,102.5,17.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).wait(83).to({startPosition:83},0).wait(1).to({regX:92.6,regY:18,scaleX:0.9973,scaleY:0.9973,x:149.6,y:66.95,alpha:0.9725,startPosition:84},0).wait(1).to({scaleX:0.9913,scaleY:0.9913,y:66.85,alpha:0.913,startPosition:85},0).wait(1).to({scaleX:0.9806,scaleY:0.9806,x:149.65,y:66.65,alpha:0.806,startPosition:86},0).wait(1).to({scaleX:0.9627,scaleY:0.9627,x:149.7,y:66.4,alpha:0.6268,startPosition:87},0).wait(1).to({scaleX:0.9369,scaleY:0.9369,x:149.8,y:65.95,alpha:0.3691,startPosition:88},0).wait(1).to({scaleX:0.9141,scaleY:0.9141,x:149.9,y:65.6,alpha:0.1408,startPosition:89},0).wait(1).to({scaleX:0.9029,scaleY:0.9029,x:149.95,y:65.4,alpha:0.0286,startPosition:90},0).wait(1).to({regX:102.5,regY:17.2,scaleX:0.9,scaleY:0.9,x:158.85,y:64.65,alpha:0,startPosition:91},0).wait(27));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_copy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// copy1
	this.instance = new lib.copy1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,36.2,1,1,0,0,0,90,17.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(97).to({startPosition:97},0).wait(1).to({regX:90.6,regY:20.2,scaleX:0.9973,scaleY:0.9973,x:150.6,y:39.2,alpha:0.9725,startPosition:98},0).wait(1).to({scaleX:0.9913,scaleY:0.9913,y:39.25,alpha:0.913,startPosition:99},0).wait(1).to({scaleX:0.9806,scaleY:0.9806,x:150.65,y:39.4,alpha:0.806,startPosition:100},0).wait(1).to({scaleX:0.9627,scaleY:0.9627,y:39.6,alpha:0.6268,startPosition:101},0).wait(1).to({scaleX:0.9369,scaleY:0.9369,x:150.75,y:39.95,alpha:0.3691,startPosition:102},0).wait(1).to({scaleX:0.9141,scaleY:0.9141,x:150.8,y:40.15,alpha:0.1408,startPosition:103},0).wait(1).to({scaleX:0.9029,scaleY:0.9029,x:150.85,y:40.35,alpha:0.0286,startPosition:104},0).wait(1).to({regX:90,regY:17.2,scaleX:0.9,scaleY:0.9,x:150.3,y:37.65,alpha:0,startPosition:105},0).wait(27));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._300x250_JD_POWERS_NJ_2YEARS_IN_A_ROW = function(mode,startPosition,loop) {
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
	this.frame_160 = function() {
		this.___loopingOver___ = true;
		_this = this;
		
		pauseFor = function(sec){
		
		    _this.stop();
		
		    setTimeout(function(){_this.play()}, sec*1000);
		
		}
		pauseFor(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(160).call(this.frame_160).wait(1));

	// COPY4_obj_
	this.COPY4 = new lib.Scene_1_COPY4();
	this.COPY4.name = "COPY4";
	this.COPY4.parent = this;
	this.COPY4.depth = 0;
	this.COPY4.isAttachedToCamera = 0
	this.COPY4.isAttachedToMask = 0
	this.COPY4.layerDepth = 0
	this.COPY4.layerIndex = 0
	this.COPY4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.COPY4).wait(150).to({regX:149.9,regY:91,x:149.9,y:91},0).wait(10).to({regX:0,regY:0,x:0,y:0},0).wait(1));

	// COPY3_obj_
	this.COPY3 = new lib.Scene_1_COPY3();
	this.COPY3.name = "COPY3";
	this.COPY3.parent = this;
	this.COPY3.depth = 0;
	this.COPY3.isAttachedToCamera = 0
	this.COPY3.isAttachedToMask = 0
	this.COPY3.layerDepth = 0
	this.COPY3.layerIndex = 1
	this.COPY3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.COPY3).wait(161));

	// TROPHIES_obj_
	this.TROPHIES = new lib.Scene_1_TROPHIES();
	this.TROPHIES.name = "TROPHIES";
	this.TROPHIES.parent = this;
	this.TROPHIES.depth = 0;
	this.TROPHIES.isAttachedToCamera = 0
	this.TROPHIES.isAttachedToMask = 0
	this.TROPHIES.layerDepth = 0
	this.TROPHIES.layerIndex = 2
	this.TROPHIES.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.TROPHIES).wait(144).to({regX:152.3,regY:192.5,x:152.3,y:192.5},0).wait(5).to({regX:0,regY:0,x:0,y:0},0).wait(12));

	// NJ_LOGO_obj_
	this.NJ_LOGO = new lib.Scene_1_NJ_LOGO();
	this.NJ_LOGO.name = "NJ_LOGO";
	this.NJ_LOGO.parent = this;
	this.NJ_LOGO.depth = 0;
	this.NJ_LOGO.isAttachedToCamera = 0
	this.NJ_LOGO.isAttachedToMask = 0
	this.NJ_LOGO.layerDepth = 0
	this.NJ_LOGO.layerIndex = 3
	this.NJ_LOGO.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.NJ_LOGO).wait(135).to({regX:65.9,regY:37.5,x:65.9,y:37.5},0).wait(8).to({regX:0,regY:0,x:0,y:0},0).wait(18));

	// copy2_obj_
	this.copy2 = new lib.Scene_1_copy2();
	this.copy2.name = "copy2";
	this.copy2.parent = this;
	this.copy2.depth = 0;
	this.copy2.isAttachedToCamera = 0
	this.copy2.isAttachedToMask = 0
	this.copy2.layerDepth = 0
	this.copy2.layerIndex = 4
	this.copy2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.copy2).wait(127).to({regX:149.6,regY:67,x:149.6,y:67},0).wait(7).to({regX:0,regY:0,x:0,y:0},0).wait(27));

	// copy1_obj_
	this.copy1 = new lib.Scene_1_copy1();
	this.copy1.name = "copy1";
	this.copy1.parent = this;
	this.copy1.depth = 0;
	this.copy1.isAttachedToCamera = 0
	this.copy1.isAttachedToMask = 0
	this.copy1.layerDepth = 0
	this.copy1.layerIndex = 5
	this.copy1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.copy1).wait(127).to({regX:150.6,regY:39.2,x:150.6,y:39.2},0).wait(7).to({regX:0,regY:0,x:0,y:0},0).wait(27));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("EgMFAgsQlxldAAntQAAntFxldQFxlcIIAAQIJAAFxFcQFxFdAAHtQAAHtlxFdQlxFcoJAAQoIAAlxlcg");
	var mask_graphics_7 = new cjs.Graphics().p("EgMQAgpQl0lfAAnwQAAnwF0lfQFzlfIMAAQINAAF0FfQFzFfAAHwQAAHwlzFfQl0FfoNAAQoMAAlzlfg");
	var mask_graphics_8 = new cjs.Graphics().p("EgMkAglQl4ljAAn2QAAn2F4ljQF4ljITAAQIUAAF4FjQF4FjAAH2QAAH2l4FjQl4FjoUAAQoTAAl4ljg");
	var mask_graphics_9 = new cjs.Graphics().p("EgNBAgfQl/lpAAn+QAAn/F/lpQF/loIdAAQIeAAF/FoQF/FpAAH/QAAH+l/FpQl/FpoeAAQodAAl/lpg");
	var mask_graphics_10 = new cjs.Graphics().p("EgNqAgXQmJlxAAoLQAAoKGJlxQGJlwIrAAQIsAAGJFwQGJFxAAIKQAAILmJFxQmJFxosAAQorAAmJlxg");
	var mask_graphics_11 = new cjs.Graphics().p("EgOhAgMQmWl9AAoaQAAoaGWl9QGWl7I+AAQI/AAGWF7QGXF9AAIaQAAIamXF9QmWF8o/AAQo+AAmWl8g");
	var mask_graphics_12 = new cjs.Graphics().p("Avqf8QmomLAAowQAAovGomMQGomLJXAAQJYAAGoGLQGpGMAAIvQAAIwmpGLQmoGMpYAAQpXAAmomMg");
	var mask_graphics_13 = new cjs.Graphics().p("Aw4fpQm/mgAApLQAApLG/mgQHAmeJ4AAQJ5AAG/GeQHAGgAAJLQAAJLnAGgQm/Gfp5AAQp4AAnAmfg");
	var mask_graphics_14 = new cjs.Graphics().p("Ax/fQQnem5AApvQAApvHem3QHdm5KiAAQKjAAHdG5QHeG3AAJvQAAJvneG5QndG4qjAAQqiAAndm4g");
	var mask_graphics_15 = new cjs.Graphics().p("AzUeyQoAnWAAqZQAAqYIAnWQIAnWLUAAQLUAAIAHWQIBHWAAKYQAAKZoBHWQoAHWrUAAQrUAAoAnWg");
	var mask_graphics_16 = new cjs.Graphics().p("A0peUQokn0AArDQAArDIknzQIjn0MGAAQMGAAIkH0QIkHzAALDQAALDokH0QokH0sGAAQsGAAojn0g");
	var mask_graphics_17 = new cjs.Graphics().p("A1wd7QpBoMAArmQAArlJBoNQJBoNMvAAQMvAAJBINQJCINAALlQAALmpCIMQpBINsvAAQsvAApBoNg");
	var mask_graphics_18 = new cjs.Graphics().p("A2hdqQpVoeAAr+QAAr9JVoeQJVoeNMAAQNMAAJWIeQJVIeAAL9QAAL+pVIeQpWIetMAAQtMAApVoeg");
	var mask_graphics_19 = new cjs.Graphics().p("A2/dgQpiopAAsNQAAsMJiopQJiooNdAAQNeAAJiIoQJiIpAAMMQAAMNpiIpQpiIoteAAQtdAApioog");
	var mask_graphics_20 = new cjs.Graphics().p("A3OdaQppouAAsVQAAsTJpouQJoouNmAAQNnAAJoIuQJpIuAAMTQAAMVppIuQpoIutnAAQtmAApooug");
	var mask_graphics_21 = new cjs.Graphics().p("A3TdZQpqowAAsXQAAsWJqovQJqowNpAAQNqAAJpIwQJrIvAAMWQAAMXprIwQppIvtqAAQtpAApqovg");
	var mask_graphics_134 = new cjs.Graphics().p("A3TdZQpqowAAsXQAAsWJqovQJqowNpAAQNqAAJpIwQJrIvAAMWQAAMXprIwQppIvtqAAQtpAApqovg");
	var mask_graphics_135 = new cjs.Graphics().p("A3TddQpqovAAsYQAAsWJqovQJqovNpAAQNqAAJpIvQJrIvAAMWQAAMYprIvQppIvtqAAQtpAApqovg");
	var mask_graphics_136 = new cjs.Graphics().p("A3TdmQpqovAAsYQAAsWJqovQJqovNpAAQNqAAJpIvQJrIvAAMWQAAMYprIvQppIvtqAAQtpAApqovg");
	var mask_graphics_137 = new cjs.Graphics().p("A3Td1QpqowAAsXQAAsVJqowQJqowNpAAQNqAAJpIwQJrIwAAMVQAAMXprIwQppIvtqABQtpgBpqovg");
	var mask_graphics_138 = new cjs.Graphics().p("A3TeOQpqowAAsXQAAsWJqovQJqowNpAAQNqAAJpIwQJrIvAAMWQAAMXprIwQppIvtqAAQtpAApqovg");
	var mask_graphics_139 = new cjs.Graphics().p("A3TezQpqowAAsXQAAsWJqovQJqowNpAAQNqAAJpIwQJrIvAAMWQAAMXprIwQppIvtqAAQtpAApqovg");
	var mask_graphics_140 = new cjs.Graphics().p("A3TffQpqowAAsWQAAsXJqovQJqovNpAAQNqAAJpIvQJrIvAAMXQAAMWprIwQppIwtqgBQtpABpqowg");
	var mask_graphics_141 = new cjs.Graphics().p("EgXTAgAQpqowAAsXQAAsWJqovQJqowNpAAQNqAAJpIwQJrIvAAMWQAAMXprIwQppIvtqAAQtpAApqovg");
	var mask_graphics_142 = new cjs.Graphics().p("EgXTAgPQpqovAAsXQAAsWJqowQJqovNpAAQNqAAJpIvQJrIwAAMWQAAMXprIvQppIwtqAAQtpAApqowg");
	var mask_graphics_143 = new cjs.Graphics().p("EgXTAgUQpqowAAsXQAAsWJqovQJqowNpAAQNqAAJpIwQJrIvAAMWQAAMXprIwQppIvtqAAQtpAApqovg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:137.4511,y:244.0253}).wait(1).to({graphics:mask_graphics_7,x:137.9388,y:244.0384}).wait(1).to({graphics:mask_graphics_8,x:138.73,y:244.0303}).wait(1).to({graphics:mask_graphics_9,x:139.9318,y:244.0087}).wait(1).to({graphics:mask_graphics_10,x:141.6213,y:244.0282}).wait(1).to({graphics:mask_graphics_11,x:143.89,y:244.0398}).wait(1).to({graphics:mask_graphics_12,x:146.95,y:244.0117}).wait(1).to({graphics:mask_graphics_13,x:149.0782,y:244.0278}).wait(1).to({graphics:mask_graphics_14,x:149.0667,y:244.0241}).wait(1).to({graphics:mask_graphics_15,x:149.0679,y:244.0255}).wait(1).to({graphics:mask_graphics_16,x:149.0978,y:244.0377}).wait(1).to({graphics:mask_graphics_17,x:149.0818,y:244.0249}).wait(1).to({graphics:mask_graphics_18,x:149.0862,y:244.0283}).wait(1).to({graphics:mask_graphics_19,x:149.0861,y:244.0218}).wait(1).to({graphics:mask_graphics_20,x:149.1125,y:244.0108}).wait(1).to({graphics:mask_graphics_21,x:149.05,y:244.025}).wait(113).to({graphics:mask_graphics_134,x:149.05,y:244.025}).wait(1).to({graphics:mask_graphics_135,x:149.05,y:244.45}).wait(1).to({graphics:mask_graphics_136,x:149.05,y:245.35}).wait(1).to({graphics:mask_graphics_137,x:149.05,y:246.85}).wait(1).to({graphics:mask_graphics_138,x:149.05,y:249.325}).wait(1).to({graphics:mask_graphics_139,x:149.05,y:253.025}).wait(1).to({graphics:mask_graphics_140,x:149.05,y:257.45}).wait(1).to({graphics:mask_graphics_141,x:149.05,y:260.725}).wait(1).to({graphics:mask_graphics_142,x:149.05,y:262.3}).wait(1).to({graphics:mask_graphics_143,x:149.05,y:262.725}).wait(18));

	// drop_shadow_obj_
	this.drop_shadow = new lib.Scene_1_drop_shadow();
	this.drop_shadow.name = "drop_shadow";
	this.drop_shadow.parent = this;
	this.drop_shadow.depth = 0;
	this.drop_shadow.isAttachedToCamera = 0
	this.drop_shadow.isAttachedToMask = 0
	this.drop_shadow.layerDepth = 0
	this.drop_shadow.layerIndex = 6
	this.drop_shadow.maskLayerName = 0

	var maskedShapeInstanceList = [this.drop_shadow];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.drop_shadow).wait(135).to({regX:149,regY:168.5,x:149,y:168.5},0).wait(8).to({regX:0,regY:0,x:0,y:0},0).wait(18));

	// pic_obj_
	this.pic = new lib.Scene_1_pic();
	this.pic.name = "pic";
	this.pic.parent = this;
	this.pic.depth = 0;
	this.pic.isAttachedToCamera = 0
	this.pic.isAttachedToMask = 0
	this.pic.layerDepth = 0
	this.pic.layerIndex = 7
	this.pic.maskLayerName = 0

	var maskedShapeInstanceList = [this.pic];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.pic).wait(161));

	// yellow_n_blue_trims__obj_
	this.yellow_n_blue_trims_ = new lib.Scene_1_yellow_n_blue_trims_();
	this.yellow_n_blue_trims_.name = "yellow_n_blue_trims_";
	this.yellow_n_blue_trims_.parent = this;
	this.yellow_n_blue_trims_.depth = 0;
	this.yellow_n_blue_trims_.isAttachedToCamera = 0
	this.yellow_n_blue_trims_.isAttachedToMask = 0
	this.yellow_n_blue_trims_.layerDepth = 0
	this.yellow_n_blue_trims_.layerIndex = 8
	this.yellow_n_blue_trims_.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.yellow_n_blue_trims_).wait(135).to({regX:151,regY:302.8,x:151,y:302.8},0).wait(8).to({regX:0,regY:0,x:0,y:0},0).wait(18));

	// frame_obj_
	this.frame = new lib.Scene_1_frame();
	this.frame.name = "frame";
	this.frame.parent = this;
	this.frame.setTransform(150,125,1,1,0,0,0,150,125);
	this.frame.depth = 0;
	this.frame.isAttachedToCamera = 0
	this.frame.isAttachedToMask = 0
	this.frame.layerDepth = 0
	this.frame.layerIndex = 9
	this.frame.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(161));

	// bg_obj_
	this.bg = new lib.Scene_1_bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(150,150,1,1,0,0,0,150,150);
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 10
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(161));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,125,292,391);
// library properties:
lib.properties = {
	id: 'BAF4C0A43B4FF642915EDA1E636522B1',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/jdpower_atlas_p.png", id:"300x250_JD_POWERS_NJ_2YEARS_IN_A_ROW_atlas_P_"},
		{src:"images/jdpower_atlas_np.jpg", id:"300x250_JD_POWERS_NJ_2YEARS_IN_A_ROW_atlas_NP_"}
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
an.compositions['BAF4C0A43B4FF642915EDA1E636522B1'] = {
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
