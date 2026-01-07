(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[0,0,740,623],[0,625,286,179],[0,923,218,88],[411,979,92,36],[226,806,224,115],[288,625,62,62],[0,806,224,115],[220,923,189,71],[411,923,72,54]]}
];


// symbols:



(lib.background = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.city = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.citylights = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CTlogo = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.energyball = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.energyball_solo = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.energywaves = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.enrollbutton = function() {
	this.spriteSheet = ss["300x250_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.moon = function() {
	this.spriteSheet = ss["300x250_atlas_"];
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


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFFCC").s().p("AhdHgQiDAAAAiDIAAq5QAAiDCDAAIC7AAQCDAAAACDIAAK5QAACDiDAAg");
	this.shape.setTransform(22.5,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,45,96), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.enrollbutton();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,189,71), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAJADIAAAUQAGgTALgBIgRAAIgiAAAAJgWIAAAZ");
	this.shape.setTransform(2.6,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-1,-1,7.3,6.5), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AgOAPQgHgCgIgIIANAAQgFgWAHADIAAATgAgQAFQABAFABAFAgQAFIACAAIAsAA");
	this.shape.setTransform(3,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-1,-1,8,5.1), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.moon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,72,54), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,740,623), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.city();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,286,179), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4CAFIAAgJMAwFAAAIAAAJg");
	this.shape.setTransform(153.9,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,307.7,1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFEaIAAozIALAAIAAIzg");
	this.shape.setTransform(0.6,28.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,1.2,56.3), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.energyball();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,224,115), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvA3IAEgZQAOALATAAQAUAAAAgPQABgIgRgHIgEgCQgbgKAAgXQAAgSAPgLQAMgKAVAAQAXABAPAIIgFAZQgQgKgQAAQgRgBAAAMQAAAIAOAGIAFACQAdAMAAAVQgBAVgQALQgOALgWgBQgXAAgOgIg");
	this.shape.setTransform(202.7,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaBUIAXioIAfAAIgYCog");
	this.shape_1.setTransform(194.6,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3ARQAAglARgVQARgWAcAAQAxABAAAtQAAAmgQAVQgRAWgdgBQgxAAAAgugAgMgdQgHAJgCAPIgCAPQgEAeAXAAQAVAAAFgiIACgPQAFgegYAAQgKAAgHAKg");
	this.shape_2.setTransform(184.6,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3ARQAAglARgVQAQgWAdAAQAxABAAAtQAAAmgRAVQgQAWgdgBQgxAAAAgugAgMgdQgHAJgCAPIgDAPQgDAeAWAAQAWAAAFgiIADgPQAEgegYAAQgJAAgIAKg");
	this.shape_3.setTransform(171.8,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbApIAIg8IgZAAIAEgZIAZAAIAEgeIAfgDIgFAhIAeAAIgEAZIgdAAIgJA7QgCANAOAAQAHABALgFIgCAYQgNAFgQAAQgjAAAGglg");
	this.shape_4.setTransform(160.9,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2ARQABgmATgWQASgTAcgBQAUAAAMAKQALAKgBARQABAUgZAKQgWAKgfAAIAAABQAAAKAFAHQAHAGALAAQAXAAASgNIgDAaQgQAMgaAAQgxAAgBgugAgKggQgIAKgDAPQAVABAMgGQANgFAAgJQABgPgRAAQgKAAgJAJg");
	this.shape_5.setTransform(144.4,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARBUIAKhLQADgVgRAAQgLAAgKANQgJANgDAOIgHA4IggAAIAYioIAfAAIgJBFIAAAAQANgXAaAAQAQAAAJAKQAJAIAAAQIgMBYg");
	this.shape_6.setTransform(131,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbApIAJg8IgaAAIADgZIAaAAIAEgeIAfgDIgFAhIAeAAIgEAZIgeAAIgIA7QgCANAOAAQAIABAJgFIgCAYQgMAFgQAAQgiAAAFglg");
	this.shape_7.setTransform(119.9,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1ARQAAgmATgWQASgTAbgBQAWAAALAKQALAKAAARQAAAUgaAKQgVAKgfAAIAAABQgBAKAHAHQAGAGAMAAQAWAAARgNIgCAaQgQAMgaAAQgyAAABgugAgJggQgKAKgCAPQAVABAMgGQAOgFAAgJQAAgPgQAAQgLAAgIAJg");
	this.shape_8.setTransform(103.4,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjA8IgXh3IAgAAIANBfIAohfIAfAAIg4B3g");
	this.shape_9.setTransform(91.8,18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag6ARQgBgiAOgVQAQgYAbgBQAVAAAJAOIABAAIABgKIAdAAIgLBVIgEAiIgcAAIACgVIgBAAQgNAZgZgBQglABAAgvgAgPgbQgHAIgCAOIgDANQgBAOAEAIQAEAHAKAAQAKABAJgMQAJgNADgOIADgaQgIgKgNAAQgLAAgHAKg");
	this.shape_10.setTransform(77.9,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARBUIAKhLQADgVgRAAQgLAAgKANQgJANgDAOIgHA4IggAAIAYioIAfAAIgJBFIAAAAQANgXAaAAQAQAAAJAKQAJAIAAAQIgMBYg");
	this.shape_11.setTransform(63.9,15.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1ARQAAgmATgWQASgTAbgBQAWAAALAKQALAKAAARQAAAUgaAKQgVAKgfAAIAAABQgBAKAHAHQAGAGAMAAQAWAAARgNIgCAaQgQAMgaAAQgyAAABgugAgJggQgKAKgCAPQAVABAMgGQAOgFAAgJQAAgPgQAAQgLAAgIAJg");
	this.shape_12.setTransform(45.8,18.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAFBQIgIiBIgBAAIguCBIgmAAIgRifIAfAAIAICBIABAAIAtiBIApAAIAHCBIAuiBIAgAAIg+Cfg");
	this.shape_13.setTransform(29.9,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226.1,31.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAIAAAGAGQAHAGAAAIQAAAIgHAHQgGAGgIAAQgIAAgGgGg");
	this.shape.setTransform(208.6,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1ARQAAgmATgWQASgTAcgBQAUAAAMAKQALAKAAARQAAAUgZAKQgWAKgfAAIAAABQgBAKAHAHQAGAGAMAAQAVAAASgNIgCAaQgQAMgaAAQgxAAAAgugAgKggQgIAKgDAPQAVABAMgGQANgFAAgJQAAgPgPAAQgLAAgJAJg");
	this.shape_1.setTransform(199.9,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5BtIAFgXQAEABAGABQAOAAADgSIAPhoIgaAAIADgZIAaAAIADgPQAEgmAmABQALAAAJADIgEAXQgGgCgGAAQgPAAgCASIgBAKIAcAAIgDAZIgeAAIgPBtQgEAmglAAQgLgBgJgDg");
	this.shape_2.setTransform(189.2,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbBWIARh3IAeAAIgQB3gAgEg0QgFgGgBgIQABgIAFgGQAFgFAHAAQAJAAAFAFQAGAGAAAIQAAAIgGAGQgFAFgJABQgHgBgFgFg");
	this.shape_3.setTransform(182.1,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBUIAYioIAdAAIgXCog");
	this.shape_4.setTransform(175.6,15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqA+IARh3IAaAAIgCAVQALgZAbAAIAGABIgFAcIgHAAQgMAAgKAKQgKAMgDARIgIA3g");
	this.shape_5.setTransform(162.6,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6AVIALhSIAgAAIgKBHQgEAaAWAAQAUAAAFgaIAKhHIAeAAIgKBJQgDAZgOAMQgPANgaAAQgwAAAAgpg");
	this.shape_6.setTransform(150.9,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3ARQAAglARgVQAQgWAdAAQAxABAAAtQAAAmgRAVQgQAWgdgBQgxAAAAgugAgMgdQgGAJgDAPIgDAPQgDAeAWAAQAWAAAFgiIADgPQAEgegXAAQgKAAgIAKg");
	this.shape_7.setTransform(137.2,18.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+BVIAfgzIgch2IAfAAIARBZIABAAIAphZIAgAAQgtBegsBLg");
	this.shape_8.setTransform(125,20.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqA+IARh3IAaAAIgCAVQAMgZAaAAIAGABIgFAcIgHAAQgMAAgKAKQgKAMgCARIgJA3g");
	this.shape_9.setTransform(108.5,17.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2ARQAAgmAUgWQASgTAbgBQAWAAALAKQAKAKAAARQAAAUgZAKQgVAKgfAAIAAABQAAAKAFAHQAHAGALAAQAWAAATgNIgDAaQgQAMgaAAQgyAAAAgugAgKggQgJAKgCAPQAVABAMgGQANgFABgJQgBgPgQAAQgKAAgJAJg");
	this.shape_10.setTransform(97.4,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFA8IgIhZIgjBZIgjAAIgNh3IAcAAIAHBZIAhhZIAkAAIAIBZIAAAAIAhhZIAcAAIgvB3g");
	this.shape_11.setTransform(82.8,18.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag3ARQAAglARgVQARgWAcAAQAxABAAAtQAAAmgRAVQgQAWgdgBQgxAAAAgugAgMgdQgHAJgCAPIgCAPQgFAeAXAAQAWAAAFgiIACgPQAFgegYAAQgJAAgIAKg");
	this.shape_12.setTransform(66.4,18.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+BWIAXioIAcAAIgDAUIAAAAQAOgXAaAAQAmAAAAAtQAAAigPAVQgPAagcAAQgVAAgIgNIAAAAIgJA6gAgFgvQgJANgCAQIgEAWQAHALAOAAQAMAAAHgJQAHgIACgOIACgQQACgNgEgHQgFgHgKAAQgLAAgIAMg");
	this.shape_13.setTransform(52.8,20.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag3ARQAAglARgVQAQgWAdAAQAxABAAAtQAAAmgRAVQgQAWgdgBQgxAAAAgugAgMgdQgHAJgCAPIgDAPQgDAeAWAAQAWAAAFgiIADgPQAEgegYAAQgJAAgIAKg");
	this.shape_14.setTransform(34.5,18.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbApIAIg8IgZAAIAEgZIAZAAIAFgeIAegDIgFAhIAeAAIgEAZIgdAAIgJA7QgCANAOAAQAHABALgFIgCAYQgNAFgQAAQgjAAAGglg");
	this.shape_15.setTransform(23.7,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231.1,31.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.energywaves();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,118.1,60.7), null);


(lib.Scene_1_side_line_animated_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// side_line_animated_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIADIAAgFIAQAAIAAAFg");
	this.shape.setTransform(147.9,189.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLADIAAgFICXAAIAAAFg");
	this.shape_1.setTransform(154.6,189.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiOADIAAgFIEdAAIAAAFg");
	this.shape_2.setTransform(161.3,189.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjRADIAAgFIGjAAIAAAFg");
	this.shape_3.setTransform(168.1,189.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkUADIAAgFIIpAAIAAAFg");
	this.shape_4.setTransform(174.8,189.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlXADIAAgFIKvAAIAAAFg");
	this.shape_5.setTransform(181.5,189.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AmbADIAAgFIM3AAIAAAFg");
	this.shape_6.setTransform(188.2,189.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AneADIAAgFIO9AAIAAAFg");
	this.shape_7.setTransform(195,189.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AohADIAAgFIRDAAIAAAFg");
	this.shape_8.setTransform(201.7,189.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AplADIAAgFITLAAIAAAFg");
	this.shape_9.setTransform(208.5,189.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AqoADIAAgFIVRAAIAAAFg");
	this.shape_10.setTransform(215.2,189.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ArrADIAAgFIXXAAIAAAFg");
	this.shape_11.setTransform(221.9,189.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AsuADIAAgFIZdAAIAAAFg");
	this.shape_12.setTransform(228.6,189.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AtxADIAAgFIbjAAIAAAFg");
	this.shape_13.setTransform(235.4,189.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Au1ADIAAgFIdqAAIAAAFg");
	this.shape_14.setTransform(242.1,189.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Av4ADIAAgFIfxAAIAAAFg");
	this.shape_15.setTransform(248.8,189.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},85).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).wait(151));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_linedown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// linedown
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape.setTransform(147.4,152.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDC6IAAlzIAHAAIAAFzg");
	this.shape_1.setTransform(147.4,170.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},68).to({state:[]},1).to({state:[{t:this.shape_1}]},16).to({state:[]},16).wait(151));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cityLights = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cityLights
	this.instance = new lib.citylights();
	this.instance.parent = this;
	this.instance.setTransform(79,124,0.661,0.661);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(151).to({_off:false},0).wait(101));

}).prototype = p = new cjs.MovieClip();


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CTlogo();
	this.instance.parent = this;
	this.instance.setTransform(-44,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-16,92,36);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-4.4,1,1,0,0,0,115.5,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.5,-20.3,231.1,31.8);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,1.1,1,1,0,0,0,113,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,-14.8,226.1,31.8);


(lib.Scene_1_text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text2
	this.instance = new lib.text2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(148.1,79.2,0.661,0.661,0,0,0,0,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(152).to({_off:false},0).wait(1).to({regX:-0.6,regY:-2.3,x:147.7,y:77.6,alpha:0.167},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text1
	this.instance = new lib.text1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(147.8,56,0.661,0.661,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1).to({regX:0.4,regY:1,x:147.9,y:56.5,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_stars2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stars2
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(214.1,130.6,0.661,0.661,0,0,0,2.6,2.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(184).to({_off:false},0).wait(1).to({x:214,y:130.5,alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(7));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_star_twinkle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star_twinkle1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(242.2,100.6,0.661,0.661,0,0,0,3.1,1.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(184).to({_off:false},0).wait(1).to({regX:3,regY:1.5,x:242.1,alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.879},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.515},0).wait(1).to({alpha:0.394},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.03},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.677},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.812},0).wait(1).to({alpha:0.624},0).wait(1).to({alpha:0.436},0).wait(1).to({alpha:0.248},0).wait(1).to({alpha:0.06},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.687},0).wait(1).to({alpha:1},0).wait(10));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_side_line_animated_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// side_line_animated_2
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(147.2,189.5,0.885,0.661,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101).to({_off:false},0).wait(1).to({regX:153.8,regY:0.5,scaleX:0.87,x:268,y:189.8},0).wait(1).to({scaleX:0.86,x:252.7},0).wait(1).to({scaleX:0.85,x:237.5},0).wait(1).to({scaleX:0.83,x:222.2},0).wait(1).to({scaleX:0.82,x:207},0).wait(1).to({scaleX:0.81,x:191.7},0).wait(1).to({scaleX:0.79,x:176.4},0).wait(1).to({scaleX:0.81,x:165.4},0).wait(1).to({scaleX:0.82,x:154.4},0).wait(1).to({scaleX:0.84,x:143.3},0).wait(1).to({scaleX:0.85,x:132.3},0).wait(1).to({scaleX:0.87,x:121.3},0).wait(1).to({scaleX:0.88,x:110.3},0).wait(1).to({scaleX:0.9,x:99.2},0).wait(1).to({scaleX:0.91,x:88.2},0).wait(1).to({scaleX:0.92,x:77.1},0).wait(1).to({scaleX:0.9,x:72.7},0).wait(1).to({scaleX:0.87,x:68.4},0).wait(1).to({scaleX:0.84,x:64},0).wait(1).to({scaleX:0.81,x:59.6},0).wait(1).to({scaleX:0.78,x:55.3},0).wait(1).to({scaleX:0.75,x:50.9},0).wait(1).to({scaleX:0.72,x:46.5},0).wait(1).to({scaleX:0.7,x:42.1},0).wait(1).to({scaleX:0.67,x:37.7},0).wait(1).to({scaleX:0.64,x:33.3},0).wait(1).to({scaleX:0.61,x:29},0).wait(1).to({scaleX:0.58,x:24.6},0).wait(1).to({scaleX:0.55,x:20.2},0).wait(1).to({scaleX:0.53,x:15.8},0).wait(1).to({scaleX:0.5,x:11.4},0).wait(1).to({scaleX:0.47,x:7},0).wait(1).to({scaleX:0.44,x:2.7},0).wait(118));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_side_line_animated_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// side_line_animated_2
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(375.9,189.5,0.934,0.661,0,0,0,0,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).wait(1).to({regX:153.8,regY:0.5,x:510.7,y:189.8},0).wait(1).to({x:502},0).wait(1).to({x:493.2},0).wait(1).to({x:484.4},0).wait(1).to({x:475.6},0).wait(1).to({x:466.9},0).wait(1).to({x:458.1},0).wait(1).to({x:449.3},0).wait(1).to({x:440.5},0).wait(1).to({x:431.8},0).wait(1).to({x:423},0).wait(1).to({x:414.2},0).wait(1).to({x:405.4},0).wait(1).to({x:396.7},0).wait(1).to({x:387.9},0).wait(118));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Moon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Moon
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(230.3,115.9,0.661,0.661,0,0,0,36,26.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.moon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(206,98,0.661,0.661);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},182).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(182).to({_off:false},0).wait(1).to({regY:27,x:230.2,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1).to({_off:true},1).wait(61));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_LOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LOGO
	this.instance = new lib.logo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(148.5,21.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:2,regY:2,x:150.5,y:23.5,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_linedown_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// linedown_2
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(147.4,171,0.661,0.661,0,0,0,0.6,28.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101).to({_off:false},0).wait(1).to({regY:28.1,x:134.1,y:170.8},0).wait(1).to({x:120.8},0).wait(1).to({x:107.5},0).wait(1).to({x:94.2},0).wait(1).to({x:80.9},0).wait(1).to({x:67.6},0).wait(1).to({x:54.3},0).wait(1).to({x:41},0).wait(1).to({x:27.7},0).wait(1).to({x:14.4},0).wait(1).to({x:1.1},0).wait(1).to({x:-12.2},0).wait(1).to({x:-25.5},0).wait(1).to({x:-38.7},0).wait(1).to({x:-52.1},0).wait(1).to({x:-65.4},0).wait(135));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_18_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_18_copy
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(230.7,215.6,0.661,0.661,0,0,0,22.6,48.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(228).to({_off:false},0).wait(1).to({regX:22.5,regY:48,rotation:2.7,x:213.9,y:215.9,alpha:0.69},0).wait(1).to({rotation:5.5,x:197.1,y:216.3,alpha:0.621},0).wait(1).to({rotation:8.2,x:180.3,y:216.6,alpha:0.552},0).wait(1).to({rotation:10.9,x:163.6,y:217,alpha:0.483},0).wait(1).to({rotation:13.6,x:146.8,y:217.4,alpha:0.414},0).wait(1).to({rotation:16.4,x:130,y:217.8,alpha:0.345},0).wait(1).to({rotation:19.1,x:113.3,y:218.2,alpha:0.276},0).wait(1).to({rotation:21.8,x:96.5,y:218.6,alpha:0.207},0).wait(1).to({rotation:24.5,x:79.7,y:219,alpha:0.138},0).wait(1).to({rotation:27.3,x:62.9,y:219.3,alpha:0.069},0).wait(1).to({rotation:30,x:46.2,y:219.8,alpha:0},0).wait(1).to({x:-28.7,y:258.4,alpha:0.33},0).wait(1).to({y:224.4,alpha:0.32},0).wait(11));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(378,149.6,0.661,0.661,0,0,0,143.1,89.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(108).to({_off:false},0).wait(1).to({regX:143,x:369.1},0).wait(1).to({x:360.4},0).wait(1).to({x:351.6},0).wait(1).to({x:342.8},0).wait(1).to({x:334},0).wait(1).to({x:325.3},0).wait(1).to({x:316.5},0).wait(1).to({x:307.7},0).wait(1).to({x:299},0).wait(1).to({x:290.2},0).wait(1).to({x:281.4},0).wait(1).to({x:272.6},0).wait(1).to({x:263.8},0).wait(1).to({x:255.1},0).wait(1).to({x:246.3},0).wait(1).to({x:237.5},0).wait(1).to({x:228.8},0).wait(1).to({x:220},0).wait(1).to({x:211.2},0).wait(1).to({x:202.4},0).wait(1).to({x:193.7},0).wait(1).to({x:184.9},0).wait(1).to({x:176.1},0).wait(1).to({x:167.3},0).wait(1).to({x:158.6},0).wait(1).to({x:149.8},0).wait(118));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_energyball_still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// energyball_still
	this.instance = new lib.energyball();
	this.instance.parent = this;
	this.instance.setTransform(109,77,0.661,0.661);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(182.8,115.3,0.661,0.661,0,0,0,112,57.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},64).to({state:[{t:this.instance_1}]},37).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101).to({_off:false},0).wait(1).to({regY:57.5,x:169.5,y:115.2},0).wait(1).to({x:156.2},0).wait(1).to({x:142.9},0).wait(1).to({x:129.6},0).wait(1).to({x:116.3},0).wait(1).to({x:103},0).wait(1).to({x:89.7},0).wait(1).to({x:76.4},0).wait(1).to({x:63.1},0).wait(1).to({x:49.8},0).wait(1).to({x:36.5},0).wait(1).to({x:23.2},0).wait(1).to({x:9.9},0).wait(1).to({x:-3.3},0).wait(1).to({x:-16.7},0).wait(1).to({x:-30},0).wait(135));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CTA
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(149.8,222.3,0.661,0.661,0,0,0,94.5,35.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195).to({_off:false},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:1},0).wait(41));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(-4,-13);

	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(366,298.5,1,1,0,0,0,370,311.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},85).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).wait(1).to({x:359.6},0).wait(1).to({x:353.1},0).wait(1).to({x:346.7},0).wait(1).to({x:340.2},0).wait(1).to({x:333.8},0).wait(1).to({x:327.3},0).wait(1).to({x:320.9},0).wait(1).to({x:314.4},0).wait(1).to({x:308},0).wait(1).to({x:301.5},0).wait(1).to({x:295.1},0).wait(1).to({x:288.6},0).wait(1).to({x:282.2},0).wait(1).to({x:275.7},0).wait(1).to({x:269.3},0).wait(1).to({x:262.8},0).wait(1).to({x:256.4},0).wait(1).to({x:249.9},0).wait(1).to({x:243.5},0).wait(1).to({x:237},0).wait(1).to({x:230.6},0).wait(1).to({x:224.1},0).wait(1).to({x:217.7},0).wait(1).to({x:211.2},0).wait(1).to({x:204.8},0).wait(1).to({x:198.3},0).wait(1).to({x:191.9},0).wait(1).to({x:185.4},0).wait(1).to({x:179},0).wait(1).to({x:172.5},0).wait(1).to({x:166.1},0).wait(1).to({x:159.6},0).wait(1).to({x:153.2},0).wait(1).to({x:146.7},0).wait(1).to({x:140.3},0).wait(1).to({x:133.8},0).wait(1).to({x:127.4},0).wait(1).to({x:120.9},0).wait(1).to({x:114.5},0).wait(1).to({x:108},0).wait(1).to({x:101.6},0).wait(1).to({x:95.1},0).wait(1).to({x:88.7},0).wait(1).to({x:82.2},0).wait(1).to({x:75.8},0).wait(1).to({x:69.3},0).wait(1).to({x:62.9},0).wait(1).to({x:56.4},0).wait(1).to({x:50},0).wait(1).to({x:43.5},0).wait(1).to({x:37.1},0).wait(1).to({x:30.6},0).wait(1).to({x:24.2},0).wait(1).to({x:17.7},0).wait(1).to({x:11.3},0).wait(1).to({x:4.8},0).wait(1).to({x:-1.6},0).wait(1).to({x:-8.1},0).wait(1).to({x:-14.5},0).wait(1).to({x:-21},0).wait(1).to({x:-27.4},0).wait(1).to({x:-33.9},0).wait(1).to({x:-40.3},0).wait(1).to({x:-46.8},0).wait(1).to({x:-53.2},0).wait(1).to({x:-59.7},0).wait(101));

}).prototype = p = new cjs.MovieClip();


(lib.energyBall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// waves
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(0.6,0.1,0.922,0.922,0,0,0,32.1,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:59.1,regY:30.3,scaleX:0.99,scaleY:0.99,x:27.3,y:0.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:29.1,y:1},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:31},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:32.8,y:1.1},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:34.6},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:36.4,y:1.2},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:38.3},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:40.1,y:1.3},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:41.9},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:43.7,y:1.4},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:45.6},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:47.4,y:1.5},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:49.2},0).wait(1).to({scaleX:1.87,scaleY:1.87,x:51,y:1.6},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:52.7},0).wait(1).to({scaleX:2,scaleY:2,x:54.4,y:1.7},0).wait(1).to({scaleX:2.06,scaleY:2.06,x:56.2},0).wait(1).to({scaleX:2.13,scaleY:2.13,x:58,y:1.8},0).wait(1).to({scaleX:2.19,scaleY:2.19,x:59.7,y:1.9},0).wait(1).to({scaleX:2.26,scaleY:2.26,x:61.5,alpha:0.75},0).wait(1).to({scaleX:2.32,scaleY:2.32,x:63.2,alpha:0.5},0).wait(1).to({scaleX:2.39,scaleY:2.39,x:64.9,y:2,alpha:0.25},0).wait(1).to({scaleX:2.45,scaleY:2.45,x:66.7,y:2.1,alpha:0},0).wait(1));

	// ball
	this.instance_1 = new lib.energyball_solo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-34,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-31,113.9,62);


(lib.Scene_1_energyballAnimated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// energyballAnimated
	this.instance = new lib.energyBall("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(166.3,114.3,0.661,0.661,0,0,0,26.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({startPosition:15},0).wait(1).to({regX:66.5,regY:2.1,x:192.8,y:115.6,alpha:0,startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1));

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
	this.frame_251 = function() {
		this.___loopingOver___ = true;
		_this = this;
		
		pauseFor = function(sec){
		
		    _this.stop();
		
		    setTimeout(function(){_this.play()}, sec*1000);
		
		}
		pauseFor(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(251).call(this.frame_251).wait(1));

	// LOGO_obj_
	this.LOGO = new lib.Scene_1_LOGO();
	this.LOGO.name = "LOGO";
	this.LOGO.parent = this;
	this.LOGO.setTransform(150.5,23.5,1,1,0,0,0,150.5,23.5);
	this.LOGO.depth = 0;
	this.LOGO.isAttachedToCamera = 0
	this.LOGO.isAttachedToMask = 0
	this.LOGO.layerDepth = 0
	this.LOGO.layerIndex = 0
	this.LOGO.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.LOGO).wait(252));

	// ctaMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An0DJQhXAAAAhXIAAjjQAAhXBXAAIPpAAQBXAAAABXIAADjQAABXhXAAg");
	mask.setTransform(149.5,220.4);

	// Layer_18_copy_obj_
	this.Layer_18_copy = new lib.Scene_1_Layer_18_copy();
	this.Layer_18_copy.name = "Layer_18_copy";
	this.Layer_18_copy.parent = this;
	this.Layer_18_copy.depth = 0;
	this.Layer_18_copy.isAttachedToCamera = 0
	this.Layer_18_copy.isAttachedToMask = 0
	this.Layer_18_copy.layerDepth = 0
	this.Layer_18_copy.layerIndex = 1
	this.Layer_18_copy.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_18_copy];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_18_copy).wait(229).to({regX:94,regY:238.1,x:94,y:238.1},0).wait(23));

	// CTA_obj_
	this.CTA = new lib.Scene_1_CTA();
	this.CTA.name = "CTA";
	this.CTA.parent = this;
	this.CTA.depth = 0;
	this.CTA.isAttachedToCamera = 0
	this.CTA.isAttachedToMask = 0
	this.CTA.layerDepth = 0
	this.CTA.layerIndex = 2
	this.CTA.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(196).to({regX:149.8,regY:222.3,x:149.8,y:222.3},0).wait(56));

	// text2_obj_
	this.text2 = new lib.Scene_1_text2();
	this.text2.name = "text2";
	this.text2.parent = this;
	this.text2.depth = 0;
	this.text2.isAttachedToCamera = 0
	this.text2.isAttachedToMask = 0
	this.text2.layerDepth = 0
	this.text2.layerIndex = 3
	this.text2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(153).to({regX:147.7,regY:77.6,x:147.7,y:77.6},0).wait(99));

	// text1_obj_
	this.text1 = new lib.Scene_1_text1();
	this.text1.name = "text1";
	this.text1.parent = this;
	this.text1.depth = 0;
	this.text1.isAttachedToCamera = 0
	this.text1.isAttachedToMask = 0
	this.text1.layerDepth = 0
	this.text1.layerIndex = 4
	this.text1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text1).wait(30).to({regX:148,regY:56.5,x:148,y:56.5},0).wait(222));

	// stars2_obj_
	this.stars2 = new lib.Scene_1_stars2();
	this.stars2.name = "stars2";
	this.stars2.parent = this;
	this.stars2.depth = 0;
	this.stars2.isAttachedToCamera = 0
	this.stars2.isAttachedToMask = 0
	this.stars2.layerDepth = 0
	this.stars2.layerIndex = 5
	this.stars2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.stars2).wait(185).to({regX:214.1,regY:130.6,x:214.1,y:130.6},0).wait(67));

	// star_twinkle1_obj_
	this.star_twinkle1 = new lib.Scene_1_star_twinkle1();
	this.star_twinkle1.name = "star_twinkle1";
	this.star_twinkle1.parent = this;
	this.star_twinkle1.depth = 0;
	this.star_twinkle1.isAttachedToCamera = 0
	this.star_twinkle1.isAttachedToMask = 0
	this.star_twinkle1.layerDepth = 0
	this.star_twinkle1.layerIndex = 6
	this.star_twinkle1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.star_twinkle1).wait(185).to({regX:242.1,regY:100.7,x:242.1,y:100.7},0).wait(67));

	// Moon_obj_
	this.Moon = new lib.Scene_1_Moon();
	this.Moon.name = "Moon";
	this.Moon.parent = this;
	this.Moon.depth = 0;
	this.Moon.isAttachedToCamera = 0
	this.Moon.isAttachedToMask = 0
	this.Moon.layerDepth = 0
	this.Moon.layerIndex = 7
	this.Moon.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Moon).wait(183).to({regX:230,regY:115.9,x:230,y:115.9},0).wait(8).to({regX:0,regY:0,x:0,y:0},0).wait(61));

	// MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_151 = new cjs.Graphics().p("AvdAWIAAgrIe7AAIAAArg");
	var mask_1_graphics_152 = new cjs.Graphics().p("AvdAiIAAhDIe7AAIAABDg");
	var mask_1_graphics_153 = new cjs.Graphics().p("AvdAuIAAhbIe7AAIAABbg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AvdA6IAAhzIe7AAIAABzg");
	var mask_1_graphics_155 = new cjs.Graphics().p("AvdBGIAAiLIe7AAIAACLg");
	var mask_1_graphics_156 = new cjs.Graphics().p("AvdBSIAAijIe7AAIAACjg");
	var mask_1_graphics_157 = new cjs.Graphics().p("AvdBeIAAi7Ie7AAIAAC7g");
	var mask_1_graphics_158 = new cjs.Graphics().p("AvdBqIAAjTIe7AAIAADTg");
	var mask_1_graphics_159 = new cjs.Graphics().p("AvdB2IAAjrIe7AAIAADrg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AvdCCIAAkDIe7AAIAAEDg");
	var mask_1_graphics_161 = new cjs.Graphics().p("AvdCOIAAkbIe7AAIAAEbg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AvdCaIAAkzIe7AAIAAEzg");
	var mask_1_graphics_163 = new cjs.Graphics().p("AvdCmIAAlLIe7AAIAAFLg");
	var mask_1_graphics_164 = new cjs.Graphics().p("AvdCyIAAljIe7AAIAAFjg");
	var mask_1_graphics_165 = new cjs.Graphics().p("AvdC+IAAl7Ie7AAIAAF7g");
	var mask_1_graphics_166 = new cjs.Graphics().p("AvdDKIAAmSIe7AAIAAGSg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AvdDWIAAmrIe7AAIAAGrg");
	var mask_1_graphics_168 = new cjs.Graphics().p("AvdDhIAAnCIe7AAIAAHCg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AvdDuIAAnbIe7AAIAAHbg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AvdD5IAAnxIe7AAIAAHxg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AvdEFIAAoKIe7AAIAAIKg");
	var mask_1_graphics_172 = new cjs.Graphics().p("AvdERIAAoiIe7AAIAAIig");
	var mask_1_graphics_173 = new cjs.Graphics().p("AvdEeIAAo7Ie7AAIAAI7g");
	var mask_1_graphics_174 = new cjs.Graphics().p("AvdEqIAApSIe7AAIAAJSg");
	var mask_1_graphics_175 = new cjs.Graphics().p("AvdE1IAApqIe7AAIAAJqg");
	var mask_1_graphics_176 = new cjs.Graphics().p("AvdFCIAAqDIe7AAIAAKDg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AvdFNIAAqaIe7AAIAAKag");
	var mask_1_graphics_178 = new cjs.Graphics().p("AvdFZIAAqxIe7AAIAAKxg");
	var mask_1_graphics_179 = new cjs.Graphics().p("AvdFlIAArJIe7AAIAALJg");
	var mask_1_graphics_180 = new cjs.Graphics().p("AvdFyIAArjIe7AAIAALjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(151).to({graphics:mask_1_graphics_151,x:152.1,y:186}).wait(1).to({graphics:mask_1_graphics_152,x:152.1,y:184.9}).wait(1).to({graphics:mask_1_graphics_153,x:152.1,y:183.7}).wait(1).to({graphics:mask_1_graphics_154,x:152.1,y:182.6}).wait(1).to({graphics:mask_1_graphics_155,x:152.1,y:181.5}).wait(1).to({graphics:mask_1_graphics_156,x:152.1,y:180.3}).wait(1).to({graphics:mask_1_graphics_157,x:152.1,y:179.2}).wait(1).to({graphics:mask_1_graphics_158,x:152.1,y:178}).wait(1).to({graphics:mask_1_graphics_159,x:152.1,y:176.9}).wait(1).to({graphics:mask_1_graphics_160,x:152.1,y:175.8}).wait(1).to({graphics:mask_1_graphics_161,x:152.1,y:174.6}).wait(1).to({graphics:mask_1_graphics_162,x:152.1,y:173.5}).wait(1).to({graphics:mask_1_graphics_163,x:152.1,y:172.4}).wait(1).to({graphics:mask_1_graphics_164,x:152.1,y:171.2}).wait(1).to({graphics:mask_1_graphics_165,x:152.1,y:170.1}).wait(1).to({graphics:mask_1_graphics_166,x:152.1,y:168.9}).wait(1).to({graphics:mask_1_graphics_167,x:152.1,y:167.8}).wait(1).to({graphics:mask_1_graphics_168,x:152.1,y:166.7}).wait(1).to({graphics:mask_1_graphics_169,x:152.1,y:165.5}).wait(1).to({graphics:mask_1_graphics_170,x:152.1,y:164.4}).wait(1).to({graphics:mask_1_graphics_171,x:152.1,y:163.3}).wait(1).to({graphics:mask_1_graphics_172,x:152.1,y:162.1}).wait(1).to({graphics:mask_1_graphics_173,x:152.1,y:161}).wait(1).to({graphics:mask_1_graphics_174,x:152.1,y:159.9}).wait(1).to({graphics:mask_1_graphics_175,x:152.1,y:158.7}).wait(1).to({graphics:mask_1_graphics_176,x:152.1,y:157.6}).wait(1).to({graphics:mask_1_graphics_177,x:152.1,y:156.4}).wait(1).to({graphics:mask_1_graphics_178,x:152.1,y:155.3}).wait(1).to({graphics:mask_1_graphics_179,x:152.1,y:154.2}).wait(1).to({graphics:mask_1_graphics_180,x:152.1,y:153}).wait(1).to({graphics:null,x:0,y:0}).wait(71));

	// cityLights_obj_
	this.cityLights = new lib.Scene_1_cityLights();
	this.cityLights.name = "cityLights";
	this.cityLights.parent = this;
	this.cityLights.depth = 0;
	this.cityLights.isAttachedToCamera = 0
	this.cityLights.isAttachedToMask = 0
	this.cityLights.layerDepth = 0
	this.cityLights.layerIndex = 8
	this.cityLights.maskLayerName = 0

	var maskedShapeInstanceList = [this.cityLights];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.cityLights).wait(252));

	// side_line_animated_2_obj_
	this.side_line_animated_2 = new lib.Scene_1_side_line_animated_2();
	this.side_line_animated_2.name = "side_line_animated_2";
	this.side_line_animated_2.parent = this;
	this.side_line_animated_2.depth = 0;
	this.side_line_animated_2.isAttachedToCamera = 0
	this.side_line_animated_2.isAttachedToMask = 0
	this.side_line_animated_2.layerDepth = 0
	this.side_line_animated_2.layerIndex = 9
	this.side_line_animated_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.side_line_animated_2).wait(120).to({regX:453.8,regY:189.8,x:453.8,y:189.8},0).wait(132));

	// Layer_7_obj_
	this.Layer_7 = new lib.Scene_1_Layer_7();
	this.Layer_7.name = "Layer_7";
	this.Layer_7.parent = this;
	this.Layer_7.depth = 0;
	this.Layer_7.isAttachedToCamera = 0
	this.Layer_7.isAttachedToMask = 0
	this.Layer_7.layerDepth = 0
	this.Layer_7.layerIndex = 10
	this.Layer_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_7).wait(109).to({regX:263.9,regY:149.6,x:263.9,y:149.6},0).wait(143));

	// energyball_still_obj_
	this.energyball_still = new lib.Scene_1_energyball_still();
	this.energyball_still.name = "energyball_still";
	this.energyball_still.parent = this;
	this.energyball_still.depth = 0;
	this.energyball_still.isAttachedToCamera = 0
	this.energyball_still.isAttachedToMask = 0
	this.energyball_still.layerDepth = 0
	this.energyball_still.layerIndex = 11
	this.energyball_still.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.energyball_still).wait(102).to({regX:76.5,regY:115.1,x:76.5,y:115.1},0).wait(150));

	// side_line_animated_2_obj_
	this.side_line_animated_2_1 = new lib.Scene_1_side_line_animated_2_1();
	this.side_line_animated_2_1.name = "side_line_animated_2_1";
	this.side_line_animated_2_1.parent = this;
	this.side_line_animated_2_1.depth = 0;
	this.side_line_animated_2_1.isAttachedToCamera = 0
	this.side_line_animated_2_1.isAttachedToMask = 0
	this.side_line_animated_2_1.layerDepth = 0
	this.side_line_animated_2_1.layerIndex = 12
	this.side_line_animated_2_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.side_line_animated_2_1).wait(102).to({regX:177.2,regY:189.8,x:177.2,y:189.8},0).wait(150));

	// side_line_animated_1_obj_
	this.side_line_animated_1 = new lib.Scene_1_side_line_animated_1();
	this.side_line_animated_1.name = "side_line_animated_1";
	this.side_line_animated_1.parent = this;
	this.side_line_animated_1.depth = 0;
	this.side_line_animated_1.isAttachedToCamera = 0
	this.side_line_animated_1.isAttachedToMask = 0
	this.side_line_animated_1.layerDepth = 0
	this.side_line_animated_1.layerIndex = 13
	this.side_line_animated_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.side_line_animated_1).wait(252));

	// linedown_2_obj_
	this.linedown_2 = new lib.Scene_1_linedown_2();
	this.linedown_2.name = "linedown_2";
	this.linedown_2.parent = this;
	this.linedown_2.depth = 0;
	this.linedown_2.isAttachedToCamera = 0
	this.linedown_2.isAttachedToMask = 0
	this.linedown_2.layerDepth = 0
	this.linedown_2.layerIndex = 14
	this.linedown_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.linedown_2).wait(102).to({regX:41,regY:170.9,x:41,y:170.9},0).wait(150));

	// linedown_obj_
	this.linedown = new lib.Scene_1_linedown();
	this.linedown.name = "linedown";
	this.linedown.parent = this;
	this.linedown.depth = 0;
	this.linedown.isAttachedToCamera = 0
	this.linedown.isAttachedToMask = 0
	this.linedown.layerDepth = 0
	this.linedown.layerIndex = 15
	this.linedown.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.linedown).wait(252));

	// energyballAnimated_obj_
	this.energyballAnimated = new lib.Scene_1_energyballAnimated();
	this.energyballAnimated.name = "energyballAnimated";
	this.energyballAnimated.parent = this;
	this.energyballAnimated.setTransform(164,114.2,1,1,0,0,0,164,114.2);
	this.energyballAnimated.depth = 0;
	this.energyballAnimated.isAttachedToCamera = 0
	this.energyballAnimated.isAttachedToMask = 0
	this.energyballAnimated.layerDepth = 0
	this.energyballAnimated.layerIndex = 16
	this.energyballAnimated.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.energyballAnimated).wait(64).to({regX:192.8,regY:115.6,x:192.8,y:115.6},0).wait(188));

	// bg_obj_
	this.bg = new lib.Scene_1_bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(366,298.5,1,1,0,0,0,366,298.5);
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 17
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(86).to({regX:153.1,x:153.1},0).wait(166));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(146,112,740,623);
// library properties:
lib.properties = {
	id: 'CD51949FA9CC6D46B1A2E0785B10B0C0',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/city_atlas.png", id:"300x250_atlas_"}
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
an.compositions['CD51949FA9CC6D46B1A2E0785B10B0C0'] = {
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
