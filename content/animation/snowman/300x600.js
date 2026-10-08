(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_atlas_", frames: [[0,0,300,600],[832,0,161,62],[302,0,528,175],[302,177,261,294],[826,177,193,293],[565,177,259,292],[832,64,79,68],[913,64,78,66],[993,64,28,32],[913,132,44,38],[959,132,36,41]]}
];


// symbols:



(lib.background = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CTGE_RGB = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.happysnowman = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.IceBlockpngcopy = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.sadsnowman = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.smoke1 = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.smoke2 = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.snowflakeA = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.snowflakeB = function() {
	this.spriteSheet = ss["300x600_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.snowflakeC = function() {
	this.spriteSheet = ss["300x600_atlas_"];
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


(lib.textglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.698],-0.1,-0.1,0,-0.1,-0.1,141.4).s().p("AvVGcQmWipAAjzQAAjvGWirQGYirI9AAQI/AAGUCrQGYCrAADvQAADzmYCpQmUCqo/AAQo9AAmYiqg");
	this.shape.setTransform(138.8,58.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.textglow, new cjs.Rectangle(0,0,277.5,116.4), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAfBHIgHgJIgBgCIgRgbIgKgOIgKgIQgEgCgKAAIgGAAIAAA+IgUAAIAAiNIAkAAQAUAAANAKQANALAAASQAAANgGAJQgHAJgLADQAHAFAGAIQAHAHALAUIAUAcgAgigIIAIAAQAQAAAGgDQAEgCAEgGQADgFAAgHQAAgHgEgFQgDgFgGgDQgGgCgPAAIgHAAg");
	this.shape.setTransform(187.5,40.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpBHIAAiNIBRAAIAAASIg8AAIAAArIA6AAIAAASIg6AAIAAAsIA9AAIAAASg");
	this.shape_1.setTransform(175.6,40.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKBHIAAh7IgwAAIAAgSIB2AAIAAASIgyAAIAAB7g");
	this.shape_2.setTransform(163.6,40.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAwBHIhehtIAABtIgTAAIAAiNIAQAAIBfBtIAAhtIAUAAIAACNg");
	this.shape_3.setTransform(149.3,40.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJBHIAAiNIATAAIAACNg");
	this.shape_4.setTransform(138.4,40.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAvBHIgvhzIguBzIgEAAIg6iOIAVAAIAnBhIAohhIASAAIAoBhIAnhhIAUAAIg6COg");
	this.shape_5.setTransform(124.9,40.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnA8IAAgaQARAVAWAAQAIAAAHgFQAGgGAAgHQAAgNgTgMIgOgJQgPgJgGgIQgGgJAAgLQAAgRAMgKQALgLASAAQASAAAPAKIAAAXQgQgPgSAAQgJAAgGAFQgGAFAAAHQAAAGAEAGQAFAGALAGIAOAJQAaAPAAAXQAAASgLAKQgMALgRAAQgVAAgSgNg");
	this.shape_6.setTransform(103.6,40.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJBHIAAiNIATAAIAACNg");
	this.shape_7.setTransform(96.1,40.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAoBHIAAg+IhPAAIAAA+IgVAAIAAiNIAVAAIAAA9IBPAAIAAg9IAVAAIAACNg");
	this.shape_8.setTransform(85.9,40.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKBHIAAh7IgwAAIAAgSIB1AAIAAASIgxAAIAAB7g");
	this.shape_9.setTransform(72,40.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgqBHIAAiNIAVAAIAAB7IBAAAIAAASg");
	this.shape_10.setTransform(55.5,40.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgqBHIAAiNIAVAAIAAB7IBAAAIAAASg");
	this.shape_11.setTransform(45.3,40.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJBHIAAiNIATAAIAACNg");
	this.shape_12.setTransform(36.9,40.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAoBHIAAg+IhPAAIAAA+IgVAAIAAiNIAVAAIAAA9IBPAAIAAg9IAVAAIAACNg");
	this.shape_13.setTransform(26.7,40.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbBAQgRgKgJgRQgKgRAAgTQAAgfAWgUQAWgWAgAAQAWAAAcAMIAAAWQgZgOgYAAQgYAAgQAPQgQAPAAAXQAAAXAQAQQAQAPAYAAQAaAAAYgQIAAAWQgWAMgeAAQgWAAgRgJg");
	this.shape_14.setTransform(11.8,40.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgyA9QgLgJAAgOQAAgKAFgIQAFgIAMgJIAAAAIAMgHQgQgRAAgQQAAgOAKgJQAJgKAQAAQAPAAAKAJQAKAJAAAOQAAATgZARIgCACIAUAVQAJgJAHgNIAUAAQgHASgQATIAdAhIgaAAIgRgTIgHAGQgHAGgKAFQgLAEgJAAQgPAAgKgKgAgZAPQgPALAAALQAAAGAFAEQAFAEAHAAQAGAAAHgDQAHgDAFgFIAFgEIgXgbgAgTgwQgEAEAAAFQAAAGADAHQAEAGAGAGIAIgGQAJgHAAgLQAAgGgEgEQgEgEgHAAQgGAAgFAEg");
	this.shape_15.setTransform(98.9,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197.3,54);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJBHIAAhKIg1hDIAZAAIAlAxIAmgxIAZAAIg1BDIAABKg");
	this.shape.setTransform(156.9,40.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAxBIIgTgqIg8AAIgSAqIgVAAIA9iPIAOAAIBACPgAAVALIgVgyIgWAyIArAAg");
	this.shape_1.setTransform(143.7,40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhABHIAAiNIAvAAQAcAAARAIQARAJAKARQAKARAAATQABAOgGANQgFANgLAKQgKALgOAFIgPAEIgYABgAgsA1IAaAAQAQAAAHgCQAIgCAGgDIAKgIQAPgQAAgWQAAgXgPgPQgGgFgHgDQgHgEgIgBIgTgBIgaAAg");
	this.shape_2.setTransform(129.2,40.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag2A0QgVgUgBgfQABggAVgUQAVgVAhAAQAgAAAXAVQAWAUgBAgQABAfgWAUQgXAVggAAQghAAgVgVgAgngmQgPAQAAAXQgBAWARAQQAPAPAXABQAXAAAQgQQARgQgBgXQABgWgRgPQgPgPgXAAQgYAAgQAOg");
	this.shape_3.setTransform(112.5,40.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKBHIAAh7IgwAAIAAgSIB2AAIAAASIgyAAIAAB7g");
	this.shape_4.setTransform(97.6,40.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgoBHIAAiNIBQAAIAAASIg8AAIAAArIA5AAIAAASIg5AAIAAAsIA+AAIAAASg");
	this.shape_5.setTransform(80.7,40.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJBHIAAh7IgyAAIAAgSIB2AAIAAASIgxAAIAAB7g");
	this.shape_6.setTransform(68.7,40.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAxBIIgTgqIg8AAIgSAqIgVAAIA9iPIAOAAIBACPgAAVALIgVgyIgWAyIArAAg");
	this.shape_7.setTransform(55.5,40);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAfBHIgHgJIgBgCIgEgFIgNgWIgKgOIgKgIQgEgCgKAAIgGAAIAAA+IgUAAIAAiNIAkAAQAUAAANAKQANALAAASQAAANgGAJQgHAJgLADQAHAFAGAIQAHAHALAUIAUAcgAgigIIAIAAQAQAAAGgDQAEgCAEgGQADgFAAgHQAAgHgEgFQgDgFgGgDQgGgCgPAAIgHAAg");
	this.shape_8.setTransform(43,40.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAfBHIgHgJIgBgCIgEgFIgNgWIgKgOIgKgIQgEgCgKAAIgGAAIAAA+IgUAAIAAiNIAkAAQAUAAANAKQANALAAASQAAANgGAJQgHAJgLADQAHAFAGAIQAHAHALAUIAUAcgAgigIIAIAAQAQAAAGgDQAEgCAEgGQADgFAAgHQAAgHgEgFQgDgFgGgDQgGgCgPAAIgHAAg");
	this.shape_9.setTransform(167.1,14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgsA5QgFgEgDgGQgEgFgCgIQgCgIAAgRIAAhQIAUAAIAABQQAAAUAFAIQAEAIAKAEQAJAFAMAAQASAAALgJQAGgGADgHQADgHAAgQIAAhQIAUAAIAABQQAAAQgCAIQgDAJgDAFQgEAGgFAEQgRAPgbAAQgbAAgRgPg");
	this.shape_10.setTransform(152.7,14.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag2A0QgVgUgBgfQABggAVgUQAVgVAhAAQAgAAAXAVQAWAUgBAgQABAfgWAUQgXAVggAAQghAAgVgVgAgngmQgPAQAAAXQAAAWAPAQQAQAQAXAAQAYAAAPgQQAQgQAAgXQAAgWgQgPQgPgPgXAAQgYAAgQAOg");
	this.shape_11.setTransform(136.7,14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKBHIAAhKIg0hDIAZAAIAlAxIAngxIAYAAIg1BDIAABKg");
	this.shape_12.setTransform(121.8,14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAxBHIhfhtIAABtIgTAAIAAiNIARAAIBfBtIAAhtIATAAIAACNg");
	this.shape_13.setTransform(101.6,14.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgJBHIAAiNIATAAIAACNg");
	this.shape_14.setTransform(90.8,14.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAhBHIhIhGIAABGIgUAAIAAiNIAUAAIAABBIA7hBIAZAAIg9BDIBMBKg");
	this.shape_15.setTransform(76.3,14.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbBAQgRgKgJgRQgKgRAAgTQAAgfAWgUQAWgWAgAAQAWAAAcAMIAAAWQgZgOgYAAQgYAAgQAPQgQAPAAAXQAAAXAQAPQAQAQAYAAQAaAAAYgQIAAAWQgWAMgeAAQgWAAgRgJg");
	this.shape_16.setTransform(61.3,14.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag2A0QgVgUgBgfQABggAVgUQAVgVAhAAQAgAAAXAVQAWAUgBAgQABAfgWAUQgXAVggAAQghAAgVgVgAgngmQgPAQAAAXQAAAWAPAQQAQAQAXAAQAYAAAPgQQAQgQAAgXQAAgWgQgPQgPgPgXAAQgYAAgQAOg");
	this.shape_17.setTransform(45.3,14.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgpBHIAAiNIAUAAIAAB7IA/AAIAAASg");
	this.shape_18.setTransform(32.3,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.1,54);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CTGE_RGB();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.174,0.174);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,92,30.5), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnA8IAAgaQARAVAWAAQAIAAAHgFQAGgGAAgHQAAgNgTgMIgOgJQgPgJgGgIQgGgJAAgLQAAgRAMgKQALgLASAAQASAAAPAKIAAAXQgQgPgSAAQgJAAgGAFQgGAFAAAHQAAAGAEAGQAFAGALAGIAOAJQAaAPAAAXQAAASgLAKQgMALgRAAQgVAAgSgNg");
	this.shape.setTransform(179.1,40.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpBHIAAiNIBQAAIAAASIg7AAIAAArIA6AAIAAASIg6AAIAAAsIA9AAIAAASg");
	this.shape_1.setTransform(169.5,40.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKBHIAAh7IgwAAIAAgSIB1AAIAAASIgxAAIAAB7g");
	this.shape_2.setTransform(157.5,40.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAxBIIgTgqIg8AAIgSAqIgVAAIA9iPIAOAAIBACPgAAVALIgVgyIgWAyIArAAg");
	this.shape_3.setTransform(144.3,40);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAfBHIgHgJIgBgCIgEgFIgNgWIgKgOIgKgIQgEgCgKAAIgGAAIAAA+IgUAAIAAiNIAkAAQAUAAANAKQANALAAASQAAANgGAJQgHAJgLADQAHAFAGAIQAHAHALAUIAUAcgAgigIIAIAAQAQAAAGgDQAEgCAEgGQADgFAAgHQAAgHgEgFQgDgFgGgDQgGgCgPAAIgHAAg");
	this.shape_4.setTransform(131.8,40.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnA8IAAgaQARAVAWAAQAIAAAHgFQAGgGAAgHQAAgNgTgMIgOgJQgPgJgGgIQgGgJAAgLQAAgRAMgKQALgLASAAQASAAAPAKIAAAXQgQgPgSAAQgJAAgGAFQgGAFAAAHQAAAGAEAGQAFAGALAGIAOAJQAaAPAAAXQAAASgLAKQgMALgRAAQgVAAgSgNg");
	this.shape_5.setTransform(114.2,40.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAxBIIgTgqIg8AAIgSAqIgVAAIA9iPIAOAAIBACPgAAVALIgVgyIgWAyIArAAg");
	this.shape_6.setTransform(102.4,40);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgrA0QgVgUAAgeQAAggAWgUQAWgWAgAAQAMAAALADQAKACARAHIAAAVQgZgPgZAAQgXABgQAPQgQAQAAAXQAAAXAQAQQAQAQAZAAQALAAASgGIABgBIAAgdIgbAAIAAgSIAwAAIAAA7QgaAMgaAAQgiAAgWgVg");
	this.shape_7.setTransform(87.6,40.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAoBHIAAg+IhPAAIAAA+IgUAAIAAiNIAUAAIAAA9IBPAAIAAg9IAUAAIAACNg");
	this.shape_8.setTransform(66.6,40.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgrA0QgVgUAAgeQAAggAWgUQAWgWAgAAQAMAAALADQAKACARAHIAAAVQgZgPgZAAQgXABgQAPQgQAQAAAXQAAAXAQAQQAQAQAZAAQALAAASgGIABgBIAAgdIgbAAIAAgSIAwAAIAAA7QgaAMgaAAQgiAAgWgVg");
	this.shape_9.setTransform(51.1,40.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJBHIAAiNIATAAIAACNg");
	this.shape_10.setTransform(41,40.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAoBHIAAg+IhPAAIAAA+IgVAAIAAiNIAVAAIAAA9IBPAAIAAg9IAVAAIAACNg");
	this.shape_11.setTransform(30.8,40.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAfBHIgHgJIgBgCIgEgFIgNgWIgKgOIgKgIQgEgCgKAAIgGAAIAAA+IgUAAIAAiNIAkAAQAUAAANAKQANALAAASQAAANgGAJQgHAJgLADQAHAFAGAIQAHAHALAUIAUAcgAgigIIAIAAQAQAAAGgDQAEgCAEgGQADgFAAgHQAAgHgEgFQgDgFgGgDQgGgCgPAAIgHAAg");
	this.shape_12.setTransform(194.7,14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoBHIAAiNIBQAAIAAASIg8AAIAAArIA5AAIAAASIg5AAIAAAsIA+AAIAAASg");
	this.shape_13.setTransform(182.9,14.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBBHIg9iOIAUAAIAqBjIArhjIAUAAIg8COg");
	this.shape_14.setTransform(170.9,14.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag2A0QgWgUABgfQgBggAWgUQAVgVAhAAQAhAAAVAVQAXAUAAAgQAAAfgXAUQgVAVgiAAQggAAgVgVgAgngmQgQAQAAAXQABAWAQAQQAPAQAXAAQAXAAARgQQAPgQAAgXQAAgWgPgPQgRgPgXAAQgXAAgQAOg");
	this.shape_15.setTransform(156,14.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgoBHIAAiNIBQAAIAAASIg8AAIAAArIA6AAIAAASIg6AAIAAAsIA9AAIAAASg");
	this.shape_16.setTransform(136.8,14.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag/BIIBah8IhUAAIAAgSIB5AAIhaB8IBaAAIAAASg");
	this.shape_17.setTransform(124.3,14.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgoBHIAAiNIBQAAIAAASIg8AAIAAArIA6AAIAAASIg6AAIAAAsIA+AAIAAASg");
	this.shape_18.setTransform(112.9,14.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgoBHIAAiNIBQAAIAAASIg8AAIAAArIA5AAIAAASIg5AAIAAAsIA+AAIAAASg");
	this.shape_19.setTransform(102.4,14.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAfBHIgHgJIgBgCIgEgFIgNgWIgKgOIgKgIQgEgCgKAAIgGAAIAAA+IgUAAIAAiNIAkAAQAUAAANAKQANALAAASQAAANgGAJQgHAJgLADQAHAFAGAIQAHAHALAUIAUAcgAgigIIAIAAQAQAAAGgDQAEgCAEgGQADgFAAgHQAAgHgEgFQgDgFgGgDQgGgCgPAAIgHAAg");
	this.shape_20.setTransform(91.2,14.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AglBHIAAiNIBLAAIAAASIg3AAIAAAoIA3AAIAAARIg3AAIAABCg");
	this.shape_21.setTransform(79.7,14.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgKBIIAAh8IgxAAIAAgSIB2AAIAAASIgxAAIAAB8g");
	this.shape_22.setTransform(62.2,14.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAxBHIhfhtIAABtIgTAAIAAiNIARAAIBeBtIAAhtIAUAAIAACNg");
	this.shape_23.setTransform(47.9,14.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag2A0QgVgUgBgfQABggAVgUQAVgVAhAAQAgAAAXAVQAWAUgBAgQABAfgWAUQgXAVggAAQghAAgVgVgAgngmQgPAQAAAXQgBAWARAQQAPAQAXAAQAXAAAQgQQARgQgBgXQABgWgRgPQgPgPgYAAQgXAAgQAOg");
	this.shape_24.setTransform(31,14.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhABHIAAiNIAvAAQAcAAARAIQARAJAKARQAKARAAATQABAOgGANQgFANgLAKQgKALgOAFIgPAEQgFABgTAAgAgsA1IAaAAQAQAAAHgCQAIgCAGgDIAKgIQAPgQABgWQgBgXgPgPQgGgFgHgDQgHgEgIgBIgTgBIgaAAg");
	this.shape_25.setTransform(14.9,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207,54);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,161,62), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.happysnowman();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.893,0.894);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,233,262.7), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.smoke1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,79,68), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.smoke2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,78,66), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.smoke1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,79,68), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.IceBlockpngcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,193,293), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sadsnowman();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,233,262.7), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.snowflakeC();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,36,41), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.snowflakeB();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,44,38), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.snowflakeA();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,28,32), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.snowflakeA();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,28,32), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.snowflakeB();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,44,38), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.snowflakeC();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,36,41), null);


(lib.Scene_1_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.instance = new lib.background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(288));

}).prototype = p = new cjs.MovieClip();


(lib.finalSmoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.smoke2();
	this.instance.parent = this;
	this.instance.setTransform(-21,-222,2.513,2.803);

	this.instance_1 = new lib.smoke1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8,-97);

	this.instance_2 = new lib.smoke1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-98,-248,2.505,2.427);

	this.instance_3 = new lib.smoke2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-172,-177,2.436,2.436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172,-248,347,231.8);


(lib.Text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.6,-1.3,1,1,0,0,0,98.7,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.1,-28.3,197.3,54);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.3,1,1,0,0,0,103.5,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-28.3,207,54);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(99.5,27,1,1,0,0,0,99.5,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.1,54);


(lib.smokepuffs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// smoke3
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(59.8,-21,0.519,0.518,0,0,0,41.1,34.4);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:39.5,regY:34,scaleX:0.54,scaleY:0.54,x:59.6,alpha:0.053},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:60.2,y:-20.7,alpha:0.096},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:60.9,y:-20.5,alpha:0.139},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:61.5,y:-20.2,alpha:0.182},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:62.1,y:-19.9,alpha:0.225},0).wait(1).to({scaleX:0.63,scaleY:0.62,x:62.7,y:-19.7,alpha:0.268},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:63.4,y:-19.4,alpha:0.311},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:64,y:-19.2,alpha:0.354},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:64.6,y:-18.9,alpha:0.397},0).wait(1).to({scaleX:0.7,scaleY:0.69,x:65.3,y:-18.6,alpha:0.44},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:65.9,y:-18.4,alpha:0.483},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:66.5,y:-18.1,alpha:0.527},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:67.2,y:-17.9,alpha:0.57},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:67.8,y:-17.6,alpha:0.613},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:68.4,y:-17.3,alpha:0.656},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:69,y:-17.1,alpha:0.699},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:69.7,y:-16.8,alpha:0.742},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:70.3,y:-16.5,alpha:0.785},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:70.9,y:-16.3,alpha:0.828},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:71.6,y:-16,alpha:0.871},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:72.2,y:-15.8,alpha:0.914},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:72.8,y:-15.5,alpha:0.957},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:73.5,y:-15.3,alpha:1},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:73.9,y:-15,alpha:0.947},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:74.4,y:-14.7,alpha:0.895},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:74.8,y:-14.5,alpha:0.842},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:75.2,y:-14.1,alpha:0.789},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:75.7,y:-13.9,alpha:0.737},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:76.1,y:-13.6,alpha:0.684},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:76.6,y:-13.3,alpha:0.632},0).wait(1).to({scaleX:1,scaleY:1,x:77.1,y:-13.1,alpha:0.579},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:77.5,y:-12.8,alpha:0.526},0).wait(1).to({scaleX:1.02,scaleY:1.01,x:77.9,y:-12.5,alpha:0.474},0).wait(1).to({scaleX:1.03,scaleY:1.02,x:78.4,y:-12.2,alpha:0.421},0).wait(1).to({scaleX:1.04,scaleY:1.03,x:78.8,y:-12,alpha:0.368},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:79.3,y:-11.7,alpha:0.316},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:79.7,y:-11.4,alpha:0.263},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:80.1,y:-11.1,alpha:0.211},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:80.6,y:-10.9,alpha:0.158},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:81.1,y:-10.6,alpha:0.105},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:81.5,y:-10.3,alpha:0.053},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:82,y:-10,alpha:0},0).to({_off:true},1).wait(6));

	// smoke2
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.5,-12.7,0.615,0.615,0,0,0,38.8,32.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:39,regY:33,scaleX:0.63,scaleY:0.63,x:9.6,y:-12.6,alpha:0.043},0).wait(1).to({scaleX:0.64,scaleY:0.64,alpha:0.087},0).wait(1).to({scaleX:0.66,scaleY:0.66,alpha:0.13},0).wait(1).to({scaleX:0.67,scaleY:0.67,alpha:0.174},0).wait(1).to({scaleX:0.68,scaleY:0.68,alpha:0.217},0).wait(1).to({scaleX:0.7,scaleY:0.7,alpha:0.261},0).wait(1).to({scaleX:0.71,scaleY:0.71,alpha:0.304},0).wait(1).to({scaleX:0.72,scaleY:0.72,alpha:0.348},0).wait(1).to({scaleX:0.74,scaleY:0.74,alpha:0.391},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:9.7,y:-12.5,alpha:0.435},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:9.6,alpha:0.478},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:9.7,y:-12.6,alpha:0.522},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:9.6,alpha:0.565},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:-12.5,alpha:0.609},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:9.7,alpha:0.652},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:9.6,alpha:0.696},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:9.7,alpha:0.739},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:9.6,y:-12.6,alpha:0.783},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:9.7,y:-12.5,alpha:0.826},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.87},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.913},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.957},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:1},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.958},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.917},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.875},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.833},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.792},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.75},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.708},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.667},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.625},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.583},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.542},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.458},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.417},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.375},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.333},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:9.8,y:-12.4,alpha:0.292},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:9.7,alpha:0.25},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.208},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:9.8,alpha:0.167},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.125},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:9.7,alpha:0.083},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.042},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:9.8,alpha:0},0).wait(2));

	// smoke1
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-66.6,-8,0.675,0.675,0,0,0,38.4,33.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:39.5,regY:34,scaleX:0.68,scaleY:0.68,x:-66.4,y:-8.1,alpha:0.043},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:-66.9,y:-8.3,alpha:0.087},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:-67.5,y:-8.5,alpha:0.13},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-68.1,y:-8.7,alpha:0.174},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-68.7,y:-9,alpha:0.217},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:-69.2,y:-9.2,alpha:0.261},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:-69.8,y:-9.4,alpha:0.304},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-70.4,y:-9.7,alpha:0.348},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-70.9,y:-9.9,alpha:0.391},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-71.5,y:-10.1,alpha:0.435},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-72.1,y:-10.4,alpha:0.478},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:-72.7,y:-10.6,alpha:0.522},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-73.3,y:-10.8,alpha:0.565},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-73.8,y:-11.1,alpha:0.609},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-74.4,y:-11.3,alpha:0.652},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-75,y:-11.5,alpha:0.696},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-75.6,y:-11.8,alpha:0.739},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-76.1,y:-12,alpha:0.783},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-76.7,y:-12.2,alpha:0.826},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-77.3,y:-12.4,alpha:0.87},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-77.9,y:-12.7,alpha:0.913},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-78.5,y:-12.9,alpha:0.957},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-79,y:-13.1,alpha:1},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-79.7,alpha:0.955},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-80.5,alpha:0.909},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-81.2,alpha:0.864},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:-82,alpha:0.818},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-82.7,alpha:0.773},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-83.5,alpha:0.727},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-84.2,alpha:0.682},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:-85,alpha:0.636},0).wait(1).to({scaleX:0.68,scaleY:0.67,x:-85.7,alpha:0.591},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-86.5,y:-13,alpha:0.545},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-87.2,y:-13.1,alpha:0.5},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:-88,y:-13,alpha:0.455},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-88.7,alpha:0.409},0).wait(1).to({scaleX:0.61,scaleY:0.6,x:-89.5,alpha:0.364},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:-90.2,alpha:0.318},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-91,alpha:0.273},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-91.7,alpha:0.227},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-92.5,alpha:0.182},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-93.2,alpha:0.136},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-93.9,alpha:0.091},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-94.7,alpha:0.045},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-95.4,y:-12.9,alpha:0},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,-38.9,172,54);


(lib.Scene_1_Text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text3
	this.instance = new lib.Text3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150.8,188.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(143).to({_off:false},0).wait(1).to({regX:2,regY:-1.1,x:152.8,y:187.8,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text1
	this.instance = new lib.text1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(151.5,141.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(1).to({regX:0.8,regY:-1.3,x:152.3,y:139.9,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sadsnowman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sadsnowman
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(157.5,395.3,1,1,0,0,0,116.5,131.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:156.5},0).wait(1).to({x:157.5},0).wait(2).to({x:156.5},0).wait(1).to({x:157.5},0).wait(7).to({x:156.5},0).wait(1).to({x:157.5},0).wait(2).to({x:156.5},0).wait(1).to({x:157.5},0).wait(6).to({x:156.5},0).wait(1).to({x:157.5},0).wait(2).to({x:156.5},0).wait(1).to({x:157.5},0).wait(6).to({x:156.5},0).wait(1).to({x:157.5},0).wait(2).to({x:156.5},0).wait(1).to({x:157.5},0).wait(8).to({x:156.5},0).wait(1).to({x:157.5},0).wait(2).to({x:156.5},0).wait(1).to({x:157.5},0).wait(8).to({x:156.5},0).wait(1).to({x:157.5},0).wait(2).to({x:156.5},0).wait(1).to({x:157.5},0).wait(14).to({x:156.5},0).wait(1).to({x:157.5},0).wait(2).to({x:156.5},0).wait(1).to({x:157.5},0).wait(14).to({x:156.5},0).wait(1).to({x:157.5},0).wait(1).to({x:156.5},0).wait(1).to({x:157.5},0).wait(18).to({x:156.5},0).wait(1).to({x:157.5},0).wait(7).to({x:156.5},0).wait(1).to({x:157.5},0).wait(11).to({x:156.5},0).wait(2).to({x:157.5},0).wait(12).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(153.4,55.9,1.619,1.619,0,0,0,46.1,15.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({regX:46,regY:15.2,x:153.2,y:55.7,alpha:0.049},0).wait(1).to({alpha:0.138},0).wait(1).to({alpha:0.279},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.698},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.972},0).wait(1).to({regX:46.1,regY:15.3,x:153.4,y:55.9,alpha:1},0).wait(276));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_happy_snowman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// happy_snowman
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(157.5,395.3,1,1,0,0,0,116.5,131.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).wait(1).to({regY:131.4,y:395.4,alpha:0.5},0).wait(1).to({alpha:1},0).wait(137));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_glow_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glow
	this.instance = new lib.textglow();
	this.instance.parent = this;
	this.instance.setTransform(151.6,140.9,1,1,0,0,0,138.8,58.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({alpha:1},11).wait(55).to({alpha:0},8).to({_off:true},1).wait(192));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_glow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glow
	this.instance = new lib.textglow();
	this.instance.parent = this;
	this.instance.setTransform(151.6,140.9,1,1,0,0,0,138.8,58.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).to({alpha:1},6).wait(182));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glow
	this.instance = new lib.textglow();
	this.instance.parent = this;
	this.instance.setTransform(151.6,206.4,1,1,0,0,0,138.8,58.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(143).to({_off:false},0).to({alpha:1},7).wait(138));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CTA
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(153.5,546,1,1,0,0,0,80.5,31);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(196).to({_off:false},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(83));

}).prototype = p = new cjs.MovieClip();


(lib.IceBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// reveal_puff_copy_copy
	this.instance = new lib.finalSmoke("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-20.3,176.4,0.585,0.585,0,0,0,-3.5,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(138).to({_off:false},0).wait(1).to({regX:1.5,regY:-132.1,x:-17.3,y:91.1,alpha:0.077},0).wait(1).to({y:83.1,alpha:0.154},0).wait(1).to({y:75,alpha:0.231},0).wait(1).to({y:67,alpha:0.308},0).wait(1).to({y:59,alpha:0.385},0).wait(1).to({y:50.9,alpha:0.462},0).wait(1).to({y:42.9,alpha:0.538},0).wait(1).to({y:34.9,alpha:0.615},0).wait(1).to({y:26.8,alpha:0.692},0).wait(1).to({y:18.8,alpha:0.769},0).wait(1).to({y:10.8,alpha:0.846},0).wait(1).to({y:2.7,alpha:0.923},0).wait(1).to({y:-5.3,alpha:1},0).wait(1).to({y:-12.5,alpha:0.857},0).wait(1).to({y:-19.6,alpha:0.713},0).wait(1).to({y:-26.8,alpha:0.57},0).wait(1).to({y:-34,alpha:0.513},0).wait(1).to({y:-41.1,alpha:0.456},0).wait(1).to({y:-48.3,alpha:0.399},0).wait(1).to({y:-55.5,alpha:0.342},0).wait(1).to({y:-62.7,alpha:0.285},0).wait(1).to({y:-69.8,alpha:0.228},0).wait(1).to({y:-77,alpha:0.171},0).wait(1).to({y:-84.1,alpha:0.114},0).wait(1).to({y:-91.3,alpha:0.057},0).wait(1).to({y:-98.5,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// reveal_puff_copy
	this.instance_1 = new lib.finalSmoke("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20.3,176.4,0.585,0.585,0,0,0,-3.5,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(138).to({_off:false},0).wait(1).to({regX:1.5,regY:-132.1,x:-17.3,y:91.1,alpha:0.077},0).wait(1).to({y:83.1,alpha:0.154},0).wait(1).to({y:75,alpha:0.231},0).wait(1).to({y:67,alpha:0.308},0).wait(1).to({y:59,alpha:0.385},0).wait(1).to({y:50.9,alpha:0.462},0).wait(1).to({y:42.9,alpha:0.538},0).wait(1).to({y:34.9,alpha:0.615},0).wait(1).to({y:26.8,alpha:0.692},0).wait(1).to({y:18.8,alpha:0.769},0).wait(1).to({y:10.8,alpha:0.846},0).wait(1).to({y:2.7,alpha:0.923},0).wait(1).to({y:-5.3,alpha:1},0).wait(1).to({y:-12.5,alpha:0.857},0).wait(1).to({y:-19.6,alpha:0.713},0).wait(1).to({y:-26.8,alpha:0.57},0).wait(1).to({y:-34,alpha:0.513},0).wait(1).to({y:-41.1,alpha:0.456},0).wait(1).to({y:-48.3,alpha:0.399},0).wait(1).to({y:-55.5,alpha:0.342},0).wait(1).to({y:-62.7,alpha:0.285},0).wait(1).to({y:-69.8,alpha:0.228},0).wait(1).to({y:-77,alpha:0.171},0).wait(1).to({y:-84.1,alpha:0.114},0).wait(1).to({y:-91.3,alpha:0.057},0).wait(1).to({y:-98.5,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// reveal_puff
	this.instance_2 = new lib.finalSmoke("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7.2,162.9,0.585,0.585,0,0,0,-3.5,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(138).to({_off:false},0).wait(1).to({regX:1.5,regY:-132.1,x:-4.2,y:77.6,alpha:0.077},0).wait(1).to({y:69.6,alpha:0.154},0).wait(1).to({y:61.5,alpha:0.231},0).wait(1).to({y:53.5,alpha:0.308},0).wait(1).to({y:45.5,alpha:0.385},0).wait(1).to({y:37.4,alpha:0.462},0).wait(1).to({y:29.4,alpha:0.538},0).wait(1).to({y:21.4,alpha:0.615},0).wait(1).to({y:13.3,alpha:0.692},0).wait(1).to({y:5.3,alpha:0.769},0).wait(1).to({y:-2.7,alpha:0.846},0).wait(1).to({y:-10.8,alpha:0.923},0).wait(1).to({y:-18.8,alpha:1},0).wait(1).to({y:-26,alpha:0.857},0).wait(1).to({y:-33.1,alpha:0.713},0).wait(1).to({y:-40.3,alpha:0.57},0).wait(1).to({y:-47.5,alpha:0.513},0).wait(1).to({y:-54.6,alpha:0.456},0).wait(1).to({y:-61.8,alpha:0.399},0).wait(1).to({y:-69,alpha:0.342},0).wait(1).to({y:-76.2,alpha:0.285},0).wait(1).to({y:-83.3,alpha:0.228},0).wait(1).to({y:-90.4,alpha:0.171},0).wait(1).to({y:-97.6,alpha:0.114},0).wait(1).to({y:-104.8,alpha:0.057},0).wait(1).to({y:-112,alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// smokepuffs_copy_copy
	this.instance_3 = new lib.smokepuffs("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.3,-144.1,1,1,0,0,0,0.5,-8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).wait(1).to({regX:5.2,regY:-12.5,x:9,y:-143.5,startPosition:1},0).wait(1).to({y:-138.5,startPosition:2},0).wait(1).to({y:-136.3,startPosition:3},0).wait(1).to({y:-134.2,startPosition:4},0).wait(1).to({y:-132,startPosition:5},0).wait(1).to({y:-129.9,startPosition:6},0).wait(1).to({y:-127.8,startPosition:7},0).wait(1).to({y:-125.6,startPosition:8},0).wait(1).to({y:-123.5,startPosition:9},0).wait(1).to({y:-121.3,startPosition:10},0).wait(1).to({y:-119.2,startPosition:11},0).wait(1).to({y:-117.1,startPosition:12},0).wait(1).to({y:-114.9,startPosition:13},0).wait(1).to({y:-112.8,startPosition:14},0).wait(1).to({y:-110.7,startPosition:15},0).wait(1).to({x:8.8,y:-107.2,startPosition:16},0).wait(1).to({x:8.5,y:-103.7,startPosition:17},0).wait(1).to({x:8.3,y:-100.2,startPosition:18},0).wait(1).to({x:8.1,y:-96.7,startPosition:19},0).wait(1).to({x:7.8,y:-93.2,startPosition:20},0).wait(1).to({x:7.6,y:-89.7,startPosition:21},0).wait(1).to({x:7.4,y:-86.3,startPosition:22},0).wait(1).to({x:7.1,y:-82.8,startPosition:23},0).wait(1).to({x:6.9,y:-79.3,startPosition:24},0).wait(1).to({x:6.6,y:-75.8,startPosition:25},0).wait(1).to({x:6.4,y:-72.3,startPosition:26},0).wait(1).to({x:6.2,y:-68.8,startPosition:27},0).wait(1).to({x:5.9,y:-65.3,startPosition:28},0).wait(1).to({x:5.7,y:-61.9,startPosition:29},0).wait(1).to({x:6.8,y:-59.6,startPosition:30},0).wait(1).to({x:7.9,y:-57.3,startPosition:31},0).wait(1).to({x:8.9,y:-55.1,startPosition:32},0).wait(1).to({x:10,y:-52.8,startPosition:33},0).wait(1).to({x:11.1,y:-50.5,startPosition:34},0).wait(1).to({x:12.2,y:-48.3,startPosition:35},0).wait(1).to({x:13.2,y:-46,startPosition:36},0).wait(1).to({x:14.3,y:-43.7,startPosition:37},0).wait(1).to({x:15.4,y:-41.5,startPosition:38},0).wait(1).to({x:16.5,y:-39.2,startPosition:39},0).wait(1).to({x:17.5,y:-36.9,startPosition:40},0).wait(1).to({x:18.6,y:-34.7,startPosition:41},0).wait(1).to({x:19.7,y:-32.4,startPosition:42},0).wait(1).to({x:20.8,y:-30.1,startPosition:43},0).wait(1).to({x:21.9,y:-27.9,startPosition:44},0).wait(1).to({x:21.1,y:-26.3,startPosition:45},0).wait(1).to({x:20.4,y:-24.8,startPosition:46},0).wait(1).to({x:19.6,y:-23.2,startPosition:47},0).wait(1).to({x:18.9,y:-21.7,startPosition:48},0).wait(1).to({x:18.1,y:-20.2,startPosition:0},0).wait(1).to({x:17.4,y:-18.6,startPosition:1},0).wait(1).to({x:16.6,y:-17.1,startPosition:2},0).wait(1).to({x:15.9,y:-15.6,startPosition:3},0).wait(1).to({x:15.1,y:-14,startPosition:4},0).wait(1).to({x:14.4,y:-12.5,startPosition:5},0).wait(1).to({x:13.6,y:-11,startPosition:6},0).wait(1).to({x:12.9,y:-9.5,startPosition:7},0).wait(1).to({x:12.1,y:-7.9,startPosition:8},0).wait(1).to({x:11.4,y:-6.4,startPosition:9},0).wait(1).to({x:10.7,y:-4.8,startPosition:10},0).wait(1).to({x:10.4,y:-1.6,startPosition:11},0).wait(1).to({x:10.2,y:1.7,startPosition:12},0).wait(1).to({x:10,y:4.9,startPosition:13},0).wait(1).to({x:9.8,y:8.2,startPosition:14},0).wait(1).to({x:9.5,y:11.4,startPosition:15},0).wait(1).to({x:9.3,y:14.7,startPosition:16},0).wait(1).to({x:9.1,y:17.9,startPosition:17},0).wait(1).to({x:8.9,y:21.2,startPosition:18},0).wait(1).to({x:8.6,y:24.4,startPosition:19},0).wait(1).to({x:8.4,y:27.7,startPosition:20},0).wait(1).to({x:8.2,y:30.9,startPosition:21},0).wait(1).to({x:8,y:34.2,startPosition:22},0).wait(1).to({y:37.6,startPosition:23},0).wait(1).to({y:40.9,startPosition:24},0).wait(1).to({y:44.3,startPosition:25},0).wait(1).to({y:47.7,startPosition:26},0).wait(1).to({y:51,startPosition:27},0).wait(1).to({y:54.4,startPosition:28},0).wait(1).to({y:57.8,startPosition:29},0).wait(1).to({y:61.2,startPosition:30},0).wait(1).to({y:64.5,startPosition:31},0).wait(1).to({y:67.9,startPosition:32},0).wait(1).to({y:71.3,startPosition:33},0).wait(1).to({y:74.6,startPosition:34},0).wait(1).to({y:78,startPosition:35},0).wait(1).to({alpha:0.917,startPosition:36},0).wait(1).to({alpha:0.833,startPosition:37},0).wait(1).to({alpha:0.75,startPosition:38},0).wait(1).to({alpha:0.667,startPosition:39},0).wait(1).to({alpha:0.583,startPosition:40},0).wait(1).to({alpha:0.5,startPosition:41},0).wait(1).to({alpha:0.417,startPosition:42},0).wait(1).to({alpha:0.333,startPosition:43},0).wait(1).to({alpha:0.25,startPosition:44},0).wait(1).to({alpha:0.167,startPosition:45},0).wait(1).to({alpha:0.083,startPosition:46},0).wait(1).to({alpha:0,startPosition:47},0).to({_off:true},1).wait(12));

	// smokepuffs_copy
	this.instance_4 = new lib.smokepuffs("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-18.5,-140.3,1,1,0,0,0,0.5,-8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).wait(1).to({regX:5.2,regY:-12.5,x:-13.8,y:-139.8,startPosition:1},0).wait(1).to({y:-134.7,startPosition:2},0).wait(1).to({y:-132.6,startPosition:3},0).wait(1).to({y:-130.4,startPosition:4},0).wait(1).to({y:-128.3,startPosition:5},0).wait(1).to({y:-126.1,startPosition:6},0).wait(1).to({y:-124,startPosition:7},0).wait(1).to({y:-121.9,startPosition:8},0).wait(1).to({y:-119.7,startPosition:9},0).wait(1).to({y:-117.6,startPosition:10},0).wait(1).to({y:-115.5,startPosition:11},0).wait(1).to({y:-113.3,startPosition:12},0).wait(1).to({y:-111.2,startPosition:13},0).wait(1).to({y:-109,startPosition:14},0).wait(1).to({y:-106.9,startPosition:15},0).wait(1).to({x:-14,y:-103.4,startPosition:16},0).wait(1).to({x:-14.2,y:-99.9,startPosition:17},0).wait(1).to({x:-14.5,y:-96.4,startPosition:18},0).wait(1).to({x:-14.7,y:-93,startPosition:19},0).wait(1).to({x:-14.9,y:-89.5,startPosition:20},0).wait(1).to({x:-15.2,y:-86,startPosition:21},0).wait(1).to({x:-15.4,y:-82.5,startPosition:22},0).wait(1).to({x:-15.6,y:-79,startPosition:23},0).wait(1).to({x:-15.9,y:-75.5,startPosition:24},0).wait(1).to({x:-16.1,y:-72,startPosition:25},0).wait(1).to({x:-16.3,y:-68.6,startPosition:26},0).wait(1).to({x:-16.6,y:-65.1,startPosition:27},0).wait(1).to({x:-16.8,y:-61.6,startPosition:28},0).wait(1).to({x:-17.1,y:-58.1,startPosition:29},0).wait(1).to({x:-16,y:-55.8,startPosition:30},0).wait(1).to({x:-14.9,y:-53.6,startPosition:31},0).wait(1).to({x:-13.8,y:-51.3,startPosition:32},0).wait(1).to({x:-12.7,y:-49,startPosition:33},0).wait(1).to({x:-11.7,y:-46.8,startPosition:34},0).wait(1).to({x:-10.6,y:-44.5,startPosition:35},0).wait(1).to({x:-9.5,y:-42.2,startPosition:36},0).wait(1).to({x:-8.4,y:-40,startPosition:37},0).wait(1).to({x:-7.4,y:-37.7,startPosition:38},0).wait(1).to({x:-6.3,y:-35.4,startPosition:39},0).wait(1).to({x:-5.2,y:-33.2,startPosition:40},0).wait(1).to({x:-4.1,y:-30.9,startPosition:41},0).wait(1).to({x:-3.1,y:-28.6,startPosition:42},0).wait(1).to({x:-2,y:-26.4,startPosition:43},0).wait(1).to({x:-0.9,y:-24.1,startPosition:44},0).wait(1).to({x:-1.6,y:-22.6,startPosition:45},0).wait(1).to({x:-2.4,y:-21,startPosition:46},0).wait(1).to({x:-3.1,y:-19.5,startPosition:47},0).wait(1).to({x:-3.9,y:-18,startPosition:48},0).wait(1).to({x:-4.6,y:-16.4,startPosition:0},0).wait(1).to({x:-5.4,y:-14.9,startPosition:1},0).wait(1).to({x:-6.1,y:-13.3,startPosition:2},0).wait(1).to({x:-6.9,y:-11.9,startPosition:3},0).wait(1).to({x:-7.6,y:-10.3,startPosition:4},0).wait(1).to({x:-8.4,y:-8.8,startPosition:5},0).wait(1).to({x:-9.1,y:-7.2,startPosition:6},0).wait(1).to({x:-9.9,y:-5.7,startPosition:7},0).wait(1).to({x:-10.6,y:-4.2,startPosition:8},0).wait(1).to({x:-11.4,y:-2.6,startPosition:9},0).wait(1).to({x:-12.1,y:-1.1,startPosition:10},0).wait(1).to({x:-12.3,y:2.2,startPosition:11},0).wait(1).to({x:-12.6,y:5.4,startPosition:12},0).wait(1).to({x:-12.8,y:8.7,startPosition:13},0).wait(1).to({x:-13,y:11.9,startPosition:14},0).wait(1).to({x:-13.2,y:15.2,startPosition:15},0).wait(1).to({x:-13.5,y:18.4,startPosition:16},0).wait(1).to({x:-13.7,y:21.7,startPosition:17},0).wait(1).to({x:-13.9,y:24.9,startPosition:18},0).wait(1).to({x:-14.1,y:28.2,startPosition:19},0).wait(1).to({x:-14.4,y:31.4,startPosition:20},0).wait(1).to({x:-14.6,y:34.7,startPosition:21},0).wait(1).to({x:-14.8,y:38,startPosition:22},0).wait(1).to({y:41.3,startPosition:23},0).wait(1).to({y:44.7,startPosition:24},0).wait(1).to({y:48.1,startPosition:25},0).wait(1).to({y:51.4,startPosition:26},0).wait(1).to({y:54.8,startPosition:27},0).wait(1).to({y:58.2,startPosition:28},0).wait(1).to({y:61.5,startPosition:29},0).wait(1).to({y:64.9,startPosition:30},0).wait(1).to({y:68.3,startPosition:31},0).wait(1).to({y:71.6,startPosition:32},0).wait(1).to({y:75,startPosition:33},0).wait(1).to({y:78.4,startPosition:34},0).wait(1).to({y:81.8,startPosition:35},0).wait(1).to({alpha:0.917,startPosition:36},0).wait(1).to({alpha:0.833,startPosition:37},0).wait(1).to({alpha:0.75,startPosition:38},0).wait(1).to({alpha:0.667,startPosition:39},0).wait(1).to({alpha:0.583,startPosition:40},0).wait(1).to({alpha:0.5,startPosition:41},0).wait(1).to({alpha:0.417,startPosition:42},0).wait(1).to({alpha:0.333,startPosition:43},0).wait(1).to({alpha:0.25,startPosition:44},0).wait(1).to({alpha:0.167,startPosition:45},0).wait(1).to({alpha:0.083,startPosition:46},0).wait(1).to({alpha:0,startPosition:47},0).to({_off:true},1).wait(12));

	// smokepuffs
	this.instance_5 = new lib.smokepuffs("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(5.5,-140.3,1,1,0,0,0,0.5,-8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).wait(1).to({regX:5.2,regY:-12.5,x:10.2,y:-139.8,startPosition:1},0).wait(1).to({y:-134.7,startPosition:2},0).wait(1).to({y:-132.6,startPosition:3},0).wait(1).to({y:-130.4,startPosition:4},0).wait(1).to({y:-128.3,startPosition:5},0).wait(1).to({y:-126.1,startPosition:6},0).wait(1).to({y:-124,startPosition:7},0).wait(1).to({y:-121.9,startPosition:8},0).wait(1).to({y:-119.7,startPosition:9},0).wait(1).to({y:-117.6,startPosition:10},0).wait(1).to({y:-115.5,startPosition:11},0).wait(1).to({y:-113.3,startPosition:12},0).wait(1).to({y:-111.2,startPosition:13},0).wait(1).to({y:-109,startPosition:14},0).wait(1).to({y:-106.9,startPosition:15},0).wait(1).to({x:10,y:-103.4,startPosition:16},0).wait(1).to({x:9.7,y:-99.9,startPosition:17},0).wait(1).to({x:9.5,y:-96.4,startPosition:18},0).wait(1).to({x:9.3,y:-93,startPosition:19},0).wait(1).to({x:9,y:-89.5,startPosition:20},0).wait(1).to({x:8.8,y:-86,startPosition:21},0).wait(1).to({x:8.6,y:-82.5,startPosition:22},0).wait(1).to({x:8.3,y:-79,startPosition:23},0).wait(1).to({x:8.1,y:-75.5,startPosition:24},0).wait(1).to({x:7.8,y:-72,startPosition:25},0).wait(1).to({x:7.6,y:-68.6,startPosition:26},0).wait(1).to({x:7.4,y:-65.1,startPosition:27},0).wait(1).to({x:7.1,y:-61.6,startPosition:28},0).wait(1).to({x:6.9,y:-58.1,startPosition:29},0).wait(1).to({x:8,y:-55.8,startPosition:30},0).wait(1).to({x:9.1,y:-53.6,startPosition:31},0).wait(1).to({x:10.1,y:-51.3,startPosition:32},0).wait(1).to({x:11.2,y:-49,startPosition:33},0).wait(1).to({x:12.3,y:-46.8,startPosition:34},0).wait(1).to({x:13.4,y:-44.5,startPosition:35},0).wait(1).to({x:14.4,y:-42.2,startPosition:36},0).wait(1).to({x:15.5,y:-40,startPosition:37},0).wait(1).to({x:16.6,y:-37.7,startPosition:38},0).wait(1).to({x:17.7,y:-35.4,startPosition:39},0).wait(1).to({x:18.7,y:-33.2,startPosition:40},0).wait(1).to({x:19.8,y:-30.9,startPosition:41},0).wait(1).to({x:20.9,y:-28.6,startPosition:42},0).wait(1).to({x:22,y:-26.4,startPosition:43},0).wait(1).to({x:23.1,y:-24.1,startPosition:44},0).wait(1).to({x:22.3,y:-22.6,startPosition:45},0).wait(1).to({x:21.6,y:-21,startPosition:46},0).wait(1).to({x:20.8,y:-19.5,startPosition:47},0).wait(1).to({x:20.1,y:-18,startPosition:48},0).wait(1).to({x:19.3,y:-16.4,startPosition:0},0).wait(1).to({x:18.6,y:-14.9,startPosition:1},0).wait(1).to({x:17.8,y:-13.3,startPosition:2},0).wait(1).to({x:17.1,y:-11.9,startPosition:3},0).wait(1).to({x:16.3,y:-10.3,startPosition:4},0).wait(1).to({x:15.6,y:-8.8,startPosition:5},0).wait(1).to({x:14.8,y:-7.2,startPosition:6},0).wait(1).to({x:14.1,y:-5.7,startPosition:7},0).wait(1).to({x:13.3,y:-4.2,startPosition:8},0).wait(1).to({x:12.6,y:-2.6,startPosition:9},0).wait(1).to({x:11.9,y:-1.1,startPosition:10},0).wait(1).to({x:11.6,y:2.2,startPosition:11},0).wait(1).to({x:11.4,y:5.4,startPosition:12},0).wait(1).to({x:11.2,y:8.7,startPosition:13},0).wait(1).to({x:11,y:11.9,startPosition:14},0).wait(1).to({x:10.7,y:15.2,startPosition:15},0).wait(1).to({x:10.5,y:18.4,startPosition:16},0).wait(1).to({x:10.3,y:21.7,startPosition:17},0).wait(1).to({x:10.1,y:24.9,startPosition:18},0).wait(1).to({x:9.8,y:28.2,startPosition:19},0).wait(1).to({x:9.6,y:31.4,startPosition:20},0).wait(1).to({x:9.4,y:34.7,startPosition:21},0).wait(1).to({x:9.2,y:38,startPosition:22},0).wait(1).to({y:41.3,startPosition:23},0).wait(1).to({y:44.7,startPosition:24},0).wait(1).to({y:48.1,startPosition:25},0).wait(1).to({y:51.4,startPosition:26},0).wait(1).to({y:54.8,startPosition:27},0).wait(1).to({y:58.2,startPosition:28},0).wait(1).to({y:61.5,startPosition:29},0).wait(1).to({y:64.9,startPosition:30},0).wait(1).to({y:68.3,startPosition:31},0).wait(1).to({y:71.6,startPosition:32},0).wait(1).to({y:75,startPosition:33},0).wait(1).to({y:78.4,startPosition:34},0).wait(1).to({y:81.8,startPosition:35},0).wait(1).to({alpha:0.917,startPosition:36},0).wait(1).to({alpha:0.833,startPosition:37},0).wait(1).to({alpha:0.75,startPosition:38},0).wait(1).to({alpha:0.667,startPosition:39},0).wait(1).to({alpha:0.583,startPosition:40},0).wait(1).to({alpha:0.5,startPosition:41},0).wait(1).to({alpha:0.417,startPosition:42},0).wait(1).to({alpha:0.333,startPosition:43},0).wait(1).to({alpha:0.25,startPosition:44},0).wait(1).to({alpha:0.167,startPosition:45},0).wait(1).to({alpha:0.083,startPosition:46},0).wait(1).to({alpha:0,startPosition:47},0).to({_off:true},1).wait(12));

	// icemelt
	this.instance_6 = new lib.Symbol8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-0.5,146,1,1,0,0,0,96.5,293);
	this.instance_6.alpha = 0.68;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:146.5,y:-0.5},0).wait(58).to({regY:293,y:146},0).wait(1).to({regY:146.5,scaleY:0.99,y:0.8,alpha:0.71},0).wait(1).to({scaleY:0.98,y:2,alpha:0.74},0).wait(1).to({scaleY:0.98,y:3.3,alpha:0.739},0).wait(1).to({scaleY:0.97,y:4.5,alpha:0.737},0).wait(1).to({scaleY:0.96,y:5.7,alpha:0.736},0).wait(1).to({scaleY:0.95,y:7,alpha:0.735},0).wait(1).to({scaleY:0.94,y:8.2,alpha:0.733},0).wait(1).to({scaleY:0.93,y:9.4,alpha:0.732},0).wait(1).to({scaleY:0.92,y:10.7,alpha:0.731},0).wait(1).to({scaleY:0.92,y:11.9,alpha:0.73},0).wait(1).to({scaleY:0.91,y:13.1,alpha:0.728},0).wait(1).to({scaleY:0.9,y:14.4,alpha:0.727},0).wait(1).to({scaleY:0.89,y:15.6,alpha:0.726},0).wait(1).to({scaleY:0.88,y:16.8,alpha:0.724},0).wait(1).to({scaleY:0.87,y:18.1,alpha:0.723},0).wait(1).to({scaleY:0.86,y:20,alpha:0.722},0).wait(1).to({scaleY:0.85,y:21.9,alpha:0.72},0).wait(1).to({scaleY:0.84,y:23.7,alpha:0.719},0).wait(1).to({scaleY:0.82,y:25.6,alpha:0.718},0).wait(1).to({scaleY:0.81,y:27.5,alpha:0.717},0).wait(1).to({scaleY:0.8,y:29.4,alpha:0.715},0).wait(1).to({scaleY:0.78,y:31.3,alpha:0.714},0).wait(1).to({scaleY:0.77,y:33.2,alpha:0.713},0).wait(1).to({scaleY:0.76,y:35.1,alpha:0.711},0).wait(1).to({scaleY:0.75,y:37,alpha:0.71},0).wait(1).to({scaleY:0.73,y:38.9,alpha:0.709},0).wait(1).to({scaleY:0.72,y:40.7,alpha:0.707},0).wait(1).to({scaleY:0.71,y:42.6,alpha:0.706},0).wait(1).to({scaleY:0.69,y:44.5,alpha:0.705},0).wait(1).to({scaleY:0.69,y:45.7,alpha:0.703},0).wait(1).to({scaleY:0.68,y:46.8,alpha:0.702},0).wait(1).to({scaleY:0.67,y:48,alpha:0.701},0).wait(1).to({scaleY:0.66,y:49.2,alpha:0.7},0).wait(1).to({scaleY:0.65,y:50.3,alpha:0.698},0).wait(1).to({scaleY:0.65,y:51.5,alpha:0.697},0).wait(1).to({scaleY:0.64,y:52.6,alpha:0.696},0).wait(1).to({scaleY:0.63,y:53.8,alpha:0.694},0).wait(1).to({scaleY:0.62,y:55,alpha:0.693},0).wait(1).to({scaleY:0.61,y:56.1,alpha:0.692},0).wait(1).to({scaleY:0.61,y:57.3,alpha:0.69},0).wait(1).to({scaleY:0.6,y:58.4,alpha:0.689},0).wait(1).to({scaleY:0.59,y:59.6,alpha:0.688},0).wait(1).to({scaleY:0.58,y:60.8,alpha:0.687},0).wait(1).to({scaleY:0.57,y:61.9,alpha:0.685},0).wait(1).to({scaleY:0.57,y:62.7,alpha:0.684},0).wait(1).to({scaleY:0.56,y:63.4,alpha:0.683},0).wait(1).to({scaleY:0.56,y:64.1,alpha:0.681},0).wait(1).to({scaleY:0.55,y:64.9,alpha:0.68},0).wait(1).to({scaleY:0.55,y:65.6,alpha:0.679},0).wait(1).to({scaleY:0.54,y:66.4,alpha:0.677},0).wait(1).to({scaleY:0.54,y:67.1,alpha:0.676},0).wait(1).to({scaleY:0.53,y:67.8,alpha:0.675},0).wait(1).to({scaleY:0.53,y:68.6,alpha:0.673},0).wait(1).to({scaleY:0.52,y:69.3,alpha:0.672},0).wait(1).to({scaleY:0.52,y:70,alpha:0.671},0).wait(1).to({scaleY:0.51,y:70.8,alpha:0.67},0).wait(1).to({scaleY:0.51,y:71.6,alpha:0.668},0).wait(1).to({scaleY:0.5,y:72.3,alpha:0.667},0).wait(1).to({scaleY:0.5,y:73,alpha:0.666},0).wait(1).to({scaleY:0.49,y:74.6,alpha:0.664},0).wait(1).to({scaleY:0.48,y:76.2,alpha:0.663},0).wait(1).to({scaleY:0.47,y:77.8,alpha:0.662},0).wait(1).to({scaleY:0.46,y:79.4,alpha:0.66},0).wait(1).to({scaleY:0.44,y:81,alpha:0.659},0).wait(1).to({scaleY:0.43,y:82.6,alpha:0.658},0).wait(1).to({scaleY:0.42,y:84.2,alpha:0.657},0).wait(1).to({scaleY:0.41,y:85.8,alpha:0.655},0).wait(1).to({scaleY:0.4,y:87.4,alpha:0.654},0).wait(1).to({scaleY:0.39,y:89,alpha:0.653},0).wait(1).to({scaleY:0.38,y:90.6,alpha:0.651},0).wait(1).to({scaleY:0.37,y:92.2,alpha:0.65},0).wait(1).to({scaleY:0.36,y:93.9,alpha:0.624},0).wait(1).to({scaleY:0.34,y:95.6,alpha:0.598},0).wait(1).to({scaleY:0.33,y:97.2,alpha:0.572},0).wait(1).to({scaleY:0.32,y:98.9,alpha:0.546},0).wait(1).to({scaleY:0.31,y:100.6,alpha:0.52},0).wait(1).to({scaleY:0.3,y:102.3,alpha:0.494},0).wait(1).to({scaleY:0.29,y:104,alpha:0.468},0).wait(1).to({scaleY:0.28,y:105.7,alpha:0.442},0).wait(1).to({scaleY:0.26,y:107.3,alpha:0.416},0).wait(1).to({scaleY:0.25,y:109,alpha:0.39},0).wait(1).to({scaleY:0.24,y:110.7,alpha:0.364},0).wait(1).to({scaleY:0.23,y:112.4,alpha:0.338},0).wait(1).to({scaleY:0.22,y:114.1,alpha:0.312},0).wait(1).to({scaleY:0.21,y:115.7,alpha:0.286},0).wait(1).to({scaleY:0.2,y:117.3,alpha:0.26},0).wait(1).to({scaleY:0.19,y:118.9,alpha:0.234},0).wait(1).to({scaleY:0.17,y:120.4,alpha:0.208},0).wait(1).to({scaleY:0.16,y:122,alpha:0.182},0).wait(1).to({scaleY:0.15,y:123.6,alpha:0.156},0).wait(1).to({scaleY:0.14,y:125.2,alpha:0.13},0).wait(1).to({scaleY:0.13,y:126.8,alpha:0.104},0).wait(1).to({scaleY:0.12,y:128.4,alpha:0.078},0).wait(1).to({scaleY:0.11,y:130,alpha:0.052},0).wait(1).to({scaleY:0.1,y:131.6,alpha:0.026},0).wait(1).to({scaleY:0.09,y:133.2,alpha:0},0).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-147,193,293);


(lib.frontsnowflakes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// snowflakeC_png
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-81,20.5,1,1,0,0,0,18,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-71.6,y:25.1},0).wait(1).to({x:-62.3,y:29.8},0).wait(1).to({x:-53.1,y:34.9},0).wait(1).to({x:-44.1,y:40.1},0).wait(1).to({x:-35.3,y:45.7},0).wait(1).to({x:-26.7,y:51.7},0).wait(1).to({x:-18.4,y:58},0).wait(1).to({x:-10.5,y:64.8},0).wait(1).to({x:-3.1,y:72.2},0).wait(1).to({x:3.7,y:80.1},0).wait(1).to({x:9.5,y:88.7},0).wait(1).to({x:14.2,y:98},0).wait(1).to({x:17.4,y:108},0).wait(1).to({x:18.7,y:118.3},0).wait(1).to({x:18.1,y:128.7},0).wait(1).to({x:15.7,y:138.9},0).wait(1).to({x:11.8,y:148.5},0).wait(1).to({x:6.6,y:157.6},0).wait(1).to({x:0.6,y:166.1},0).wait(1).to({x:-6.1,y:174.1},0).wait(1).to({x:-13.4,y:181.6},0).wait(1).to({x:-21,y:188.7},0).wait(1).to({x:-29,y:195.5},0).wait(1).to({x:-32,y:207.4},0).wait(1).to({x:-34.6,y:219.4},0).wait(1).to({x:-36.9,y:231.5},0).wait(1).to({x:-38.8,y:243.6},0).wait(1).to({x:-40.2,y:255.8},0).wait(1).to({x:-41.1,y:268.1},0).wait(1).to({x:-41.6,y:280.3},0).wait(1).to({x:-41.4,y:292.6},0).wait(1).to({x:-40.7,y:304.9},0).wait(1).to({x:-39.4,y:317.1},0).wait(1).to({x:-37.4,y:329.2},0).wait(1).to({x:-34.7,y:341.2},0).wait(1).to({x:-31.3,y:353},0).wait(1).to({x:-27.2,y:364.6},0).wait(1).to({x:-22.4,y:375.9},0).wait(1).to({x:-16.9,y:386.9},0).wait(1).to({x:-10.8,y:397.5},0).wait(1).to({x:-3.9,y:407.7},0).wait(1).to({x:3.5,y:417.5},0).wait(1).to({x:11.4,y:426.9},0).wait(1).to({x:19.9,y:435.7},0).wait(1).to({x:28.8,y:444.2},0).wait(1).to({x:38.1,y:452.2},0).wait(1).to({x:47.9,y:459.7},0).wait(1).to({x:61.8,y:465.7},0).wait(1).to({x:75.4,y:472.5},0).wait(1).to({x:88.3,y:480.6},0).wait(1).to({x:100,y:490.2},0).wait(1).to({x:109.7,y:502},0).wait(1).to({x:115.6,y:515.9},0).wait(1).to({x:116.3,y:531},0).wait(1).to({x:112.2,y:545.6},0).wait(1).to({x:105,y:558.9},0).wait(1).to({x:95.8,y:571},0).wait(1).to({x:85.4,y:582.1},0).wait(1).to({x:74.3,y:592.5},0).wait(1).to({x:62.6,y:602.2},0).wait(1).to({x:50.5,y:611.4},0).wait(1).to({x:38,y:620.1},0).wait(1).to({x:25.4,y:628.5},0).wait(1).to({x:12.6,y:636.6},0).wait(1).to({x:-0.5,y:644.5},0).wait(1).to({x:-13.6,y:652.1},0).wait(1).to({x:-26.9,y:659.5},0).wait(1).to({x:-40.3,y:666.7},0).wait(1).to({x:-53.8,y:673.8},0).wait(1).to({x:-67.3,y:680.7},0).wait(1).to({x:-81,y:687.5},0).wait(1));

	// snowflakeB_png
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(179,19,1,1,0,0,0,22,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:167.5,y:26.2},0).wait(1).to({x:156.3,y:33.8},0).wait(1).to({x:145.4,y:41.9},0).wait(1).to({x:134.8,y:50.5},0).wait(1).to({x:124.6,y:59.4},0).wait(1).to({x:114.8,y:68.8},0).wait(1).to({x:105.4,y:78.6},0).wait(1).to({x:96.4,y:88.8},0).wait(1).to({x:87.8,y:99.3},0).wait(1).to({x:79.7,y:110.3},0).wait(1).to({x:72.1,y:121.5},0).wait(1).to({x:64.9,y:133},0).wait(1).to({x:58.2,y:144.8},0).wait(1).to({x:52,y:156.9},0).wait(1).to({x:46.2,y:169.2},0).wait(1).to({x:40.9,y:181.7},0).wait(1).to({x:36,y:194.3},0).wait(1).to({x:31.5,y:207.2},0).wait(1).to({x:27.4,y:220.1},0).wait(1).to({x:23.8,y:233.2},0).wait(1).to({x:20.5,y:246.4},0).wait(1).to({x:17.6,y:259.7},0).wait(1).to({x:15,y:273},0).wait(1).to({x:15.1,y:284.6},0).wait(1).to({x:16.6,y:296.2},0).wait(1).to({x:19.4,y:307.5},0).wait(1).to({x:23,y:318.5},0).wait(1).to({x:27.4,y:329.3},0).wait(1).to({x:32.4,y:339.8},0).wait(1).to({x:37.9,y:350.1},0).wait(1).to({x:43.8,y:360.1},0).wait(1).to({x:50,y:370},0).wait(1).to({x:56.5,y:379.6},0).wait(1).to({x:63.3,y:389.1},0).wait(1).to({x:70.3,y:398.5},0).wait(1).to({x:77.4,y:407.6},0).wait(1).to({x:84.7,y:416.7},0).wait(1).to({x:92.2,y:425.6},0).wait(1).to({x:99.8,y:434.5},0).wait(1).to({x:107.5,y:443.2},0).wait(1).to({x:115.3,y:451.8},0).wait(1).to({x:123.2,y:460.4},0).wait(1).to({x:131.2,y:468.8},0).wait(1).to({x:139.3,y:477.2},0).wait(1).to({x:147.5,y:485.5},0).wait(1).to({x:155.7,y:493.8},0).wait(1).to({x:164,y:502},0).wait(1).to({x:172.3,y:507.1},0).wait(1).to({x:174.6,y:516.6},0).wait(1).to({x:172.4,y:526.2},0).wait(1).to({x:168.4,y:535.4},0).wait(1).to({x:163.6,y:544.2},0).wait(1).to({x:158.3,y:552.6},0).wait(1).to({x:152.6,y:560.7},0).wait(1).to({x:146.7,y:568.7},0).wait(1).to({x:140.6,y:576.6},0).wait(1).to({x:134.3,y:584.3},0).wait(1).to({x:127.9,y:592},0).wait(1).to({x:121.4,y:599.5},0).wait(1).to({x:114.9,y:607},0).wait(1).to({x:108.2,y:614.4},0).wait(1).to({x:101.5,y:621.7},0).wait(1).to({x:94.7,y:629},0).wait(1).to({x:87.9,y:636.3},0).wait(1).to({x:81,y:643.5},0).wait(1).to({x:74.1,y:650.6},0).wait(1).to({x:67.1,y:657.8},0).wait(1).to({x:60.2,y:664.9},0).wait(1).to({x:53.1,y:671.9},0).wait(1).to({x:46.1,y:678.9},0).wait(1).to({x:39,y:686},0).wait(1));

	// snowflakeA_png
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(44,16,1,1,0,0,0,14,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:43.6,y:25.8},0).wait(1).to({x:43.3,y:35.5},0).wait(1).to({y:45.3},0).wait(1).to({x:43.6,y:55.1},0).wait(1).to({x:44.2,y:64.8},0).wait(1).to({x:45.1,y:74.6},0).wait(1).to({x:46.4,y:84.2},0).wait(1).to({x:48.1,y:93.9},0).wait(1).to({x:50.2,y:103.4},0).wait(1).to({x:52.9,y:112.8},0).wait(1).to({x:56.2,y:122},0).wait(1).to({x:60.1,y:130.9},0).wait(1).to({x:64.7,y:139.6},0).wait(1).to({x:70.1,y:147.7},0).wait(1).to({x:76.3,y:155.3},0).wait(1).to({x:83.2,y:162.1},0).wait(1).to({x:90.9,y:168.2},0).wait(1).to({x:99.2,y:173.4},0).wait(1).to({x:108,y:177.6},0).wait(1).to({x:117.2,y:180.9},0).wait(1).to({x:126.6,y:183.4},0).wait(1).to({x:136.3,y:185},0).wait(1).to({x:146,y:186},0).wait(1).to({x:152.3,y:192},0).wait(1).to({x:158.1,y:198.6},0).wait(1).to({x:163.1,y:205.8},0).wait(1).to({x:167.3,y:213.5},0).wait(1).to({x:170.5,y:221.6},0).wait(1).to({x:172.7,y:230.1},0).wait(1).to({x:173.8,y:238.7},0).wait(1).to({y:247.5},0).wait(1).to({x:172.9,y:256.2},0).wait(1).to({x:171.3,y:264.8},0).wait(1).to({x:168.9,y:273.2},0).wait(1).to({x:165.9,y:281.4},0).wait(1).to({x:162.4,y:289.4},0).wait(1).to({x:158.5,y:297.3},0).wait(1).to({x:154.2,y:304.9},0).wait(1).to({x:149.7,y:312.4},0).wait(1).to({x:144.8,y:319.7},0).wait(1).to({x:139.8,y:326.8},0).wait(1).to({x:134.5,y:333.8},0).wait(1).to({x:129.1,y:340.7},0).wait(1).to({x:123.5,y:347.4},0).wait(1).to({x:117.8,y:354},0).wait(1).to({x:112,y:360.5},0).wait(1).to({x:106,y:367},0).wait(1).to({x:92.8,y:379.3},0).wait(1).to({x:80.1,y:392.1},0).wait(1).to({x:67.9,y:405.4},0).wait(1).to({x:56.2,y:419.2},0).wait(1).to({x:45.3,y:433.6},0).wait(1).to({x:35.4,y:448.6},0).wait(1).to({x:26.6,y:464.4},0).wait(1).to({x:19.5,y:481},0).wait(1).to({x:14.2,y:498.3},0).wait(1).to({x:11.6,y:516.1},0).wait(1).to({x:11.8,y:534.2},0).wait(1).to({x:15.2,y:551.9},0).wait(1).to({x:21.7,y:568.7},0).wait(1).to({x:30.7,y:584.3},0).wait(1).to({x:41.8,y:598.6},0).wait(1).to({x:54.4,y:611.5},0).wait(1).to({x:68.1,y:623.3},0).wait(1).to({x:82.6,y:634},0).wait(1).to({x:97.7,y:643.8},0).wait(1).to({x:113.4,y:652.8},0).wait(1).to({x:129.4,y:661.2},0).wait(1).to({x:145.7,y:668.9},0).wait(1).to({x:162.3,y:676.2},0).wait(1).to({x:179,y:683},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,0,300,41);


(lib.backgroundsnowflakes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// snowflakeA_png
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(50,-47,1,1,0,0,0,14,16);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({x:55.4,y:-38.7},0).wait(1).to({x:60.6,y:-30.3},0).wait(1).to({x:65.7,y:-21.7},0).wait(1).to({x:70.5,y:-13.1},0).wait(1).to({x:75.2,y:-4.4},0).wait(1).to({x:79.8,y:4.4},0).wait(1).to({x:84.2,y:13.3},0).wait(1).to({x:88.5,y:22.3},0).wait(1).to({x:92.5,y:31.3},0).wait(1).to({x:96.4,y:40.5},0).wait(1).to({x:99.9,y:49.8},0).wait(1).to({x:103,y:59.3},0).wait(1).to({x:105.5,y:68.9},0).wait(1).to({x:107,y:78.5},0).wait(1).to({y:88.4},0).wait(1).to({x:105.6,y:98.2},0).wait(1).to({x:103.2,y:107.8},0).wait(1).to({x:99.8,y:117.2},0).wait(1).to({x:95.6,y:126.2},0).wait(1).to({x:90.8,y:134.8},0).wait(1).to({x:85.3,y:143.1},0).wait(1).to({x:79.1,y:150.9},0).wait(1).to({x:72,y:157.7},0).wait(1).to({x:65.6,y:163.4},0).wait(1).to({x:59.4,y:169.8},0).wait(1).to({x:53.6,y:176.3},0).wait(1).to({x:48,y:183},0).wait(1).to({x:42.6,y:189.9},0).wait(1).to({x:37.3,y:196.9},0).wait(1).to({x:32.3,y:204},0).wait(1).to({x:27.5,y:211.3},0).wait(1).to({x:22.8,y:218.7},0).wait(1).to({x:18.4,y:226.3},0).wait(1).to({x:14.3,y:234},0).wait(1).to({x:10.4,y:241.8},0).wait(1).to({x:6.9,y:249.8},0).wait(1).to({x:3.8,y:258},0).wait(1).to({x:2,y:265.5},0).wait(1).to({x:1.4,y:274.9},0).wait(1).to({x:1.5,y:283.8},0).wait(1).to({x:2.1,y:292.6},0).wait(1).to({x:3.3,y:301.3},0).wait(1).to({x:5.1,y:309.9},0).wait(1).to({x:7.7,y:318.2},0).wait(1).to({x:10.9,y:325.8},0).wait(1).to({x:15.3,y:333.5},0).wait(1).to({x:20.1,y:341.2},0).wait(1).to({x:25.3,y:348.6},0).wait(1).to({x:30,y:353.9},0).wait(1).to({x:37.8,y:360.1},0).wait(1).to({x:45.2,y:365},0).wait(1).to({x:52.9,y:369.2},0).wait(1).to({x:60.9,y:372.7},0).wait(1).to({x:68.8,y:376.3},0).wait(1).to({x:76.7,y:380.2},0).wait(1).to({x:84.4,y:384.4},0).wait(1).to({x:92,y:388.7},0).wait(1).to({x:99.4,y:393.3},0).wait(1).to({x:106.7,y:398.1},0).wait(1).to({x:113.8,y:403.2},0).wait(1).to({x:120.7,y:408.5},0).wait(1).to({x:127.5,y:414.1},0).wait(1).to({x:134,y:419.9},0).wait(1).to({x:140.3,y:426},0).wait(1).to({x:146.3,y:432.4},0).wait(1).to({x:152,y:439},0).wait(1).to({x:157.4,y:445.9},0).wait(1).to({x:162.4,y:453.1},0).wait(1).to({x:166.9,y:460.6},0).wait(1).to({x:170.5,y:468.6},0).wait(1).to({x:172,y:477},0).wait(1));

	// snowflakeB_png
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-202,-35,1,1,0,0,0,22,19);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(1).to({x:-193,y:-18.5},0).wait(1).to({x:-183.7,y:-2.3},0).wait(1).to({x:-173.9,y:13.7},0).wait(1).to({x:-163.7,y:29.3},0).wait(1).to({x:-153,y:44.7},0).wait(1).to({x:-141.8,y:59.7},0).wait(1).to({x:-130.2,y:74.4},0).wait(1).to({x:-118.2,y:88.8},0).wait(1).to({x:-105.7,y:102.7},0).wait(1).to({x:-92.8,y:116.3},0).wait(1).to({x:-79.4,y:129.4},0).wait(1).to({x:-65.7,y:142.1},0).wait(1).to({x:-51.5,y:154.4},0).wait(1).to({x:-37,y:166.2},0).wait(1).to({x:-22.1,y:177.5},0).wait(1).to({x:-6.9,y:188.4},0).wait(1).to({x:8.7,y:198.8},0).wait(1).to({x:24.6,y:208.7},0).wait(1).to({x:40.7,y:218.1},0).wait(1).to({x:57.2,y:227},0).wait(1).to({x:73.9,y:235.5},0).wait(1).to({x:90.8,y:243.5},0).wait(1).to({x:108,y:251},0).wait(1).to({x:113.7,y:256.4},0).wait(1).to({x:118.8,y:262.4},0).wait(1).to({x:122.9,y:269.1},0).wait(1).to({x:125.7,y:276.4},0).wait(1).to({x:127,y:284.1},0).wait(1).to({x:126.6,y:291.9},0).wait(1).to({x:124.8,y:299.6},0).wait(1).to({x:121.8,y:306.8},0).wait(1).to({x:117.9,y:313.7},0).wait(1).to({x:113.4,y:320.1},0).wait(1).to({x:108.5,y:326.2},0).wait(1).to({x:103.1,y:332},0).wait(1).to({x:97.5,y:337.5},0).wait(1).to({x:91.7,y:342.7},0).wait(1).to({x:85.7,y:347.8},0).wait(1).to({x:79.5,y:352.6},0).wait(1).to({x:73.3,y:357.4},0).wait(1).to({x:66.9,y:361.9},0).wait(1).to({x:60.4,y:366.3},0).wait(1).to({x:53.8,y:370.7},0).wait(1).to({x:47.2,y:374.9},0).wait(1).to({x:40.5,y:379},0).wait(1).to({x:33.8,y:383},0).wait(1).to({x:27,y:387},0).wait(1).to({x:18.5,y:392.6},0).wait(1).to({x:10,y:398.2},0).wait(1).to({x:1.4,y:403.8},0).wait(1).to({x:-7.3,y:409.2},0).wait(1).to({x:-15.9,y:414.7},0).wait(1).to({x:-24.7,y:420},0).wait(1).to({x:-33.5,y:425.2},0).wait(1).to({x:-42.3,y:430.3},0).wait(1).to({x:-51.2,y:435.4},0).wait(1).to({x:-60.2,y:440.3},0).wait(1).to({x:-69.2,y:445.2},0).wait(1).to({x:-78.3,y:449.8},0).wait(1).to({x:-87.4,y:454.4},0).wait(1).to({x:-96.7,y:458.8},0).wait(1).to({x:-106,y:463},0).wait(1).to({x:-115.4,y:467.1},0).wait(1).to({x:-124.9,y:470.9},0).wait(1).to({x:-134.4,y:474.5},0).wait(1).to({x:-144.1,y:477.9},0).wait(1).to({x:-153.9,y:480.9},0).wait(1).to({x:-163.8,y:483.6},0).wait(1).to({x:-173.7,y:485.9},0).wait(1).to({x:-183.8,y:487.7},0).wait(1).to({x:-194,y:489},0).wait(1));

	// snowflakeC_png
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-95,-13.9,1,1,0,0,0,18,20.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).wait(1).to({x:-79.9,y:-6.5},0).wait(1).to({x:-64.9,y:1.5},0).wait(1).to({x:-50.3,y:9.9},0).wait(1).to({x:-36.1,y:19.3},0).wait(1).to({x:-25,y:29.9},0).wait(1).to({x:-13,y:43.4},0).wait(1).to({x:-2.5,y:57.5},0).wait(1).to({x:4.2,y:70.2},0).wait(1).to({x:10.5,y:87.6},0).wait(1).to({x:15.6,y:103.9},0).wait(1).to({x:20,y:120.1},0).wait(1).to({x:24.1,y:136.7},0).wait(1).to({x:26,y:151},0).wait(1).to({x:24,y:169.8},0).wait(1).to({x:19.7,y:186.4},0).wait(1).to({x:13.2,y:201},0).wait(1).to({x:4.6,y:215},0).wait(1).to({x:-6.2,y:224.7},0).wait(1).to({x:-22.8,y:235.8},0).wait(1).to({x:-37.2,y:245.4},0).wait(1).to({x:-51.5,y:254.9},0).wait(1).to({x:-66.6,y:264.9},0).wait(1).to({x:-79.4,y:273.5},0).wait(1).to({x:-82.6,y:276.1},0).wait(1).to({x:-86.3,y:279.1},0).wait(1).to({x:-89.9,y:282.2},0).wait(1).to({x:-93.5,y:285.2},0).wait(1).to({x:-97,y:288.3},0).wait(1).to({x:-100.4,y:291.4},0).wait(1).to({x:-103.8,y:294.6},0).wait(1).to({x:-107.1,y:298},0).wait(1).to({x:-109.8,y:301.2},0).wait(1).to({x:-111.8,y:305.2},0).wait(1).to({x:-113.5,y:309.7},0).wait(1).to({x:-114.4,y:314.6},0).wait(1).to({x:-113.3,y:317.9},0).wait(1).to({x:-111.6,y:322.9},0).wait(1).to({x:-111,y:327.4},0).wait(1).to({x:-110.6,y:331.5},0).wait(1).to({x:-109.5,y:336.5},0).wait(1).to({x:-108,y:340.8},0).wait(1).to({x:-106.6,y:345.2},0).wait(1).to({x:-105.5,y:349.7},0).wait(1).to({x:-104.6,y:354.3},0).wait(1).to({x:-103.9,y:358.9},0).wait(1).to({x:-103.3,y:363.5},0).wait(1).to({x:-103,y:367.9},0).wait(1).to({x:-101.4,y:374.7},0).wait(1).to({x:-99.7,y:381.5},0).wait(1).to({x:-97.8,y:388.3},0).wait(1).to({x:-95.7,y:395},0).wait(1).to({x:-93.5,y:401.6},0).wait(1).to({x:-91,y:408.2},0).wait(1).to({x:-88.3,y:414.6},0).wait(1).to({x:-85.4,y:421},0).wait(1).to({x:-82.2,y:427.3},0).wait(1).to({x:-78.7,y:433.4},0).wait(1).to({x:-75,y:439.3},0).wait(1).to({x:-71,y:445},0).wait(1).to({x:-66.6,y:450.5},0).wait(1).to({x:-62,y:455.8},0).wait(1).to({x:-57,y:460.7},0).wait(1).to({x:-51.7,y:465.3},0).wait(1).to({x:-46.2,y:469.5},0).wait(1).to({x:-40.3,y:473.4},0).wait(1).to({x:-34.2,y:476.8},0).wait(1).to({x:-27.9,y:479.8},0).wait(1).to({x:-21.3,y:482.4},0).wait(1).to({x:-14.6,y:484.5},0).wait(1).to({x:-7.8,y:486.2},0).wait(1).to({x:-1,y:487.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,99.5,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-28.3,199.1,54);


(lib.Scene_1_Text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text2
	this.instance = new lib.Text2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(153.3,136.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).wait(1).to({regX:0.8,regY:-1.3,x:154.1,y:135.6,alpha:0.167},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_iceblock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iceblock
	this.instance = new lib.IceBlock("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(153.1,382.9,0.917,0.891,0,0,0,-0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_frontsnowflakes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frontsnowflakes
	this.instance = new lib.frontsnowflakes("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(142,-30.9,1,1,0,0,0,44,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(227).to({startPosition:11},0).wait(1).to({regX:51,regY:354,x:149,y:302.6,alpha:0.975,startPosition:12},0).wait(1).to({alpha:0.95,startPosition:13},0).wait(1).to({alpha:0.925,startPosition:14},0).wait(1).to({alpha:0.9,startPosition:15},0).wait(1).to({alpha:0.875,startPosition:16},0).wait(1).to({alpha:0.85,startPosition:17},0).wait(1).to({alpha:0.825,startPosition:18},0).wait(1).to({alpha:0.8,startPosition:19},0).wait(1).to({alpha:0.775,startPosition:20},0).wait(1).to({alpha:0.75,startPosition:21},0).wait(1).to({alpha:0.725,startPosition:22},0).wait(1).to({alpha:0.7,startPosition:23},0).wait(1).to({alpha:0.675,startPosition:24},0).wait(1).to({alpha:0.65,startPosition:25},0).wait(1).to({alpha:0.625,startPosition:26},0).wait(1).to({alpha:0.6,startPosition:27},0).wait(1).to({alpha:0.575,startPosition:28},0).wait(1).to({alpha:0.55,startPosition:29},0).wait(1).to({alpha:0.525,startPosition:30},0).wait(1).to({alpha:0.5,startPosition:31},0).wait(1).to({alpha:0.475,startPosition:32},0).wait(1).to({alpha:0.45,startPosition:33},0).wait(1).to({alpha:0.425,startPosition:34},0).wait(1).to({alpha:0.4,startPosition:35},0).wait(1).to({alpha:0.375,startPosition:36},0).wait(1).to({alpha:0.35,startPosition:37},0).wait(1).to({alpha:0.325,startPosition:38},0).wait(1).to({alpha:0.3,startPosition:39},0).wait(1).to({alpha:0.275,startPosition:40},0).wait(1).to({alpha:0.25,startPosition:41},0).wait(1).to({alpha:0.225,startPosition:42},0).wait(1).to({alpha:0.2,startPosition:43},0).wait(1).to({alpha:0.175,startPosition:44},0).wait(1).to({alpha:0.15,startPosition:45},0).wait(1).to({alpha:0.125,startPosition:46},0).wait(1).to({alpha:0.1,startPosition:47},0).wait(1).to({alpha:0.075,startPosition:48},0).wait(1).to({alpha:0.05,startPosition:49},0).wait(1).to({alpha:0.025,startPosition:50},0).wait(1).to({alpha:0,startPosition:51},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_backgroundsnowflakes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// backgroundsnowflakes
	this.instance = new lib.backgroundsnowflakes("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(182,-83.9,1,1,0,0,0,20.5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(225).to({startPosition:51},0).wait(1).to({regX:-19,regY:222.5,x:142.5,y:189.1,alpha:0.964,startPosition:52},0).wait(1).to({alpha:0.929,startPosition:53},0).wait(1).to({alpha:0.893,startPosition:54},0).wait(1).to({alpha:0.857,startPosition:55},0).wait(1).to({alpha:0.821,startPosition:56},0).wait(1).to({alpha:0.786,startPosition:57},0).wait(1).to({alpha:0.75,startPosition:58},0).wait(1).to({alpha:0.714,startPosition:59},0).wait(1).to({alpha:0.679,startPosition:60},0).wait(1).to({alpha:0.643,startPosition:61},0).wait(1).to({alpha:0.607,startPosition:62},0).wait(1).to({alpha:0.571,startPosition:63},0).wait(1).to({alpha:0.536,startPosition:64},0).wait(1).to({alpha:0.5,startPosition:65},0).wait(1).to({alpha:0.464,startPosition:66},0).wait(1).to({alpha:0.429,startPosition:67},0).wait(1).to({alpha:0.393,startPosition:68},0).wait(1).to({alpha:0.357,startPosition:69},0).wait(1).to({alpha:0.321,startPosition:70},0).wait(1).to({alpha:0.286,startPosition:71},0).wait(1).to({alpha:0.25,startPosition:72},0).wait(1).to({alpha:0.214,startPosition:73},0).wait(1).to({alpha:0.179,startPosition:74},0).wait(1).to({alpha:0.143,startPosition:75},0).wait(1).to({alpha:0.107,startPosition:76},0).wait(1).to({alpha:0.071,startPosition:77},0).wait(1).to({alpha:0.036,startPosition:78},0).wait(1).to({alpha:0,startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1));

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
	this.frame_287 = function() {
		this.___loopingOver___ = true;
		_this = this;
		
		pauseFor = function(sec){
		
		    _this.stop();
		
		    setTimeout(function(){_this.play()}, sec*1000);
		
		}
		pauseFor(12);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(287).call(this.frame_287).wait(1));

	// Logo_obj_
	this.Logo = new lib.Scene_1_Logo();
	this.Logo.name = "Logo";
	this.Logo.parent = this;
	this.Logo.depth = 0;
	this.Logo.isAttachedToCamera = 0
	this.Logo.isAttachedToMask = 0
	this.Logo.layerDepth = 0
	this.Logo.layerIndex = 0
	this.Logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Logo).wait(5).to({regX:153.2,regY:55.8,x:153.2,y:55.8},0).wait(7).to({regX:0,regY:0,x:0,y:0},0).wait(276));

	// CTA_obj_
	this.CTA = new lib.Scene_1_CTA();
	this.CTA.name = "CTA";
	this.CTA.parent = this;
	this.CTA.depth = 0;
	this.CTA.isAttachedToCamera = 0
	this.CTA.isAttachedToMask = 0
	this.CTA.layerDepth = 0
	this.CTA.layerIndex = 1
	this.CTA.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(197).to({regX:153.5,regY:546,x:153.5,y:546},0).wait(91));

	// Text3_obj_
	this.Text3 = new lib.Scene_1_Text3();
	this.Text3.name = "Text3";
	this.Text3.parent = this;
	this.Text3.depth = 0;
	this.Text3.isAttachedToCamera = 0
	this.Text3.isAttachedToMask = 0
	this.Text3.layerDepth = 0
	this.Text3.layerIndex = 2
	this.Text3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Text3).wait(144).to({regX:152.8,regY:187.8,x:152.8,y:187.8},0).wait(144));

	// glow_obj_
	this.glow = new lib.Scene_1_glow();
	this.glow.name = "glow";
	this.glow.parent = this;
	this.glow.depth = 0;
	this.glow.isAttachedToCamera = 0
	this.glow.isAttachedToMask = 0
	this.glow.layerDepth = 0
	this.glow.layerIndex = 3
	this.glow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.glow).wait(288));

	// Text2_obj_
	this.Text2 = new lib.Scene_1_Text2();
	this.Text2.name = "Text2";
	this.Text2.parent = this;
	this.Text2.depth = 0;
	this.Text2.isAttachedToCamera = 0
	this.Text2.isAttachedToMask = 0
	this.Text2.layerDepth = 0
	this.Text2.layerIndex = 4
	this.Text2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Text2).wait(101).to({regX:154.1,regY:135.6,x:154.1,y:135.6},0).wait(187));

	// glow_obj_
	this.glow_1 = new lib.Scene_1_glow_1();
	this.glow_1.name = "glow_1";
	this.glow_1.parent = this;
	this.glow_1.depth = 0;
	this.glow_1.isAttachedToCamera = 0
	this.glow_1.isAttachedToMask = 0
	this.glow_1.layerDepth = 0
	this.glow_1.layerIndex = 5
	this.glow_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.glow_1).wait(288));

	// Text1_obj_
	this.Text1 = new lib.Scene_1_Text1();
	this.Text1.name = "Text1";
	this.Text1.parent = this;
	this.Text1.depth = 0;
	this.Text1.isAttachedToCamera = 0
	this.Text1.isAttachedToMask = 0
	this.Text1.layerDepth = 0
	this.Text1.layerIndex = 6
	this.Text1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Text1).wait(22).to({regX:152.3,regY:139.9,x:152.3,y:139.9},0).wait(75).to({_off:true},1).wait(190));

	// glow_obj_
	this.glow_2 = new lib.Scene_1_glow_2();
	this.glow_2.name = "glow_2";
	this.glow_2.parent = this;
	this.glow_2.depth = 0;
	this.glow_2.isAttachedToCamera = 0
	this.glow_2.isAttachedToMask = 0
	this.glow_2.layerDepth = 0
	this.glow_2.layerIndex = 7
	this.glow_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.glow_2).wait(288));

	// frontsnowflakes_obj_
	this.frontsnowflakes = new lib.Scene_1_frontsnowflakes();
	this.frontsnowflakes.name = "frontsnowflakes";
	this.frontsnowflakes.parent = this;
	this.frontsnowflakes.setTransform(149,292.2,1,1,0,0,0,149,292.2);
	this.frontsnowflakes.depth = 0;
	this.frontsnowflakes.isAttachedToCamera = 0
	this.frontsnowflakes.isAttachedToMask = 0
	this.frontsnowflakes.layerDepth = 0
	this.frontsnowflakes.layerIndex = 8
	this.frontsnowflakes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.frontsnowflakes).wait(228).to({regY:302.5,y:302.5},0).wait(39).to({_off:true},1).wait(20));

	// iceblock_obj_
	this.iceblock = new lib.Scene_1_iceblock();
	this.iceblock.name = "iceblock";
	this.iceblock.parent = this;
	this.iceblock.setTransform(153,382.9,1,1,0,0,0,153,382.9);
	this.iceblock.depth = 0;
	this.iceblock.isAttachedToCamera = 0
	this.iceblock.isAttachedToMask = 0
	this.iceblock.layerDepth = 0
	this.iceblock.layerIndex = 9
	this.iceblock.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.iceblock).to({_off:true},167).wait(121));

	// happy_snowman_obj_
	this.happy_snowman = new lib.Scene_1_happy_snowman();
	this.happy_snowman.name = "happy_snowman";
	this.happy_snowman.parent = this;
	this.happy_snowman.depth = 0;
	this.happy_snowman.isAttachedToCamera = 0
	this.happy_snowman.isAttachedToMask = 0
	this.happy_snowman.layerDepth = 0
	this.happy_snowman.layerIndex = 10
	this.happy_snowman.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.happy_snowman).wait(150).to({regX:157.5,regY:395.4,x:157.5,y:395.4},0).wait(138));

	// sadsnowman_obj_
	this.sadsnowman = new lib.Scene_1_sadsnowman();
	this.sadsnowman.name = "sadsnowman";
	this.sadsnowman.parent = this;
	this.sadsnowman.setTransform(157.5,395.4,1,1,0,0,0,157.5,395.4);
	this.sadsnowman.depth = 0;
	this.sadsnowman.isAttachedToCamera = 0
	this.sadsnowman.isAttachedToMask = 0
	this.sadsnowman.layerDepth = 0
	this.sadsnowman.layerIndex = 11
	this.sadsnowman.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sadsnowman).wait(149).to({regX:157,regY:395.3,x:157,y:395.3},0).wait(5).to({_off:true},1).wait(133));

	// backgroundsnowflakes_obj_
	this.backgroundsnowflakes = new lib.Scene_1_backgroundsnowflakes();
	this.backgroundsnowflakes.name = "backgroundsnowflakes";
	this.backgroundsnowflakes.parent = this;
	this.backgroundsnowflakes.setTransform(171.8,-58.7,1,1,0,0,0,171.8,-58.7);
	this.backgroundsnowflakes.depth = 0;
	this.backgroundsnowflakes.isAttachedToCamera = 0
	this.backgroundsnowflakes.isAttachedToMask = 0
	this.backgroundsnowflakes.layerDepth = 0
	this.backgroundsnowflakes.layerIndex = 12
	this.backgroundsnowflakes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.backgroundsnowflakes).wait(226).to({regX:142.5,regY:189,x:142.5,y:189},0).wait(30).to({_off:true},1).wait(31));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.parent = this;
	this.background.setTransform(150,300,1,1,0,0,0,150,300);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 13
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(288));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,248.6,301,651.5);
// library properties:
lib.properties = {
	id: '8E54E61450E20C44AC725DA250253C04',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/snowman_atlas_main.png", id:"300x600_atlas_"}
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
an.compositions['8E54E61450E20C44AC725DA250253C04'] = {
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
