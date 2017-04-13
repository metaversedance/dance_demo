var orbRadianPosition = {
  foreGround: {min: Math.PI/6  , max: 5*Math.PI/6 } ,
  backGround: {min: 7*Math.PI/6 , max: 11*Math.PI/6}
}

function Character(moodMaster_k, moodMaster_damp) {
  this.moodMaster_k =moodMaster_k || 1;
  this.moodMaster_damp = moodMaster_k|| 1;
  this.springArray=[];
  this.addToSpringArray = function(spring) {
    this.springArray.push(spring);
  };
  this.allSpringsStop = function() {
    this.springArray.forEach(function(spring){
      spring.active = false;
    });
  };
  this.allSpringsStart = function() {
  this.springArray.forEach(function(spring){
    spring.active = true;
  });
};
}


function SpringObj(k, damp, x,v) {
  this.k = k || 12;
  this.damp = damp || 15
  this.x = x || 0;
  this.v =v || 0 ;
  this.currentTarget=0;
  this.newTarget = 0;
  this.timeToReset=1;
  this.timeCounter = 0;
  this.getSpringX = function () {
    return this.x;
  };
  this.active = true;
  this.parent=null;
  this.setParent = function(parent) {
    parent.springArray.push(this);
    this.parent = parent;
  }
  this.newTarget = function () {
    var low = this.targetRange.min;
    var high = this.targetRange.max;
    return Math.random() * (high - low) + low;
}
  this.resetTimeRange = 3;
  this.targetRange = {min: 0, max: 1};
  this.updateSpring = function () {
    if (this.active === true) {
    this.x += this.v * dts2;
    this.v += ( this.k * this.parent.moodMaster_k * (this.currentTarget - this.x) - this.damp * this.parent.moodMaster_damp * this.v) *dts2;
     this.resetTimeRange=this.resetTimeRange;
      this.targetRange=this.targetRange;

      this.timeCounter += 0.01;
      if(this.timeCounter>this.timeToReset) {
        this.currentTarget=this.newTarget();

        this.timeToReset=this.resetTimeRange*Math.random();
        this.timeCounter = 0;
      }
    } 
}
}

function animateEmotions(morphObj) {
  var morphTargets = morphObj.morphTargetInfluences;
  setInterval(function(){
    morphTargets[1] = emotionSpringSad.getSpringX()
    morphTargets[2] = emotionSpringQuizzical.getSpringX()
    morphTargets[3] = emotionSpringPouty.getSpringX()
    morphTargets[4] = emotionSpringMischief.getSpringX()
    morphTargets[6] = emotionSpringHuh.getSpringX()
    morphTargets[7] = emotionSpringGasp.getSpringX()
    morphTargets[8] = emotionSpringDisgusted.getSpringX()
    morphTargets[9] = emotionSpringAwkward.getSpringX()

  },20)
}


var BoyChar = new Character()
var emotionSpringSad = new SpringObj(10,10,0,0);
emotionSpringSad.targetRange.min=0;
emotionSpringSad.targetRange.max=.3;
emotionSpringSad.resetTimeRange = 5
emotionSpringSad.setParent(BoyChar)

var emotionSpringQuizzical = new SpringObj(10,10,0,0);
emotionSpringQuizzical.targetRange.min=0;
emotionSpringQuizzical.targetRange.max=1;
emotionSpringQuizzical.resetTimeRange = 3
emotionSpringQuizzical.setParent(BoyChar)

var emotionSpringPouty = new SpringObj(10,10,0,0);
emotionSpringPouty.targetRange.min=0;
emotionSpringPouty.targetRange.max=.3;
emotionSpringPouty.resetTimeRange = 3
emotionSpringPouty.setParent(BoyChar)




var emotionSpringMischief = new SpringObj(10,10,0,0);
emotionSpringMischief.targetRange.min=0;
emotionSpringMischief.targetRange.max=1;
emotionSpringMischief.resetTimeRange = 3
emotionSpringMischief.setParent(BoyChar)


var emotionSpringHuh = new SpringObj(10,10,0,0);
emotionSpringHuh.targetRange.min=0;
emotionSpringHuh.targetRange.max=.3;
emotionSpringHuh.resetTimeRange = 3
emotionSpringHuh.setParent(BoyChar)

var emotionSpringGasp = new SpringObj(10,10,0,0);
emotionSpringGasp.targetRange.min=0;
emotionSpringGasp.targetRange.max=.01;
emotionSpringGasp.resetTimeRange = 3
emotionSpringGasp.setParent(BoyChar)

var emotionSpringDisgusted = new SpringObj(10,10,0,0);
emotionSpringDisgusted.targetRange.min=0;
emotionSpringDisgusted.targetRange.max=.3;
emotionSpringDisgusted.resetTimeRange = 3
emotionSpringDisgusted.setParent(BoyChar)


var emotionSpringAwkward = new SpringObj(10,10,0,0);
emotionSpringAwkward.targetRange.min=0;
emotionSpringAwkward.targetRange.max=1;
emotionSpringAwkward.resetTimeRange = 3
emotionSpringAwkward.setParent(BoyChar)









function degreeToRadian(degree) {
  return degree*Math.PI/180;
}






var dts2 = 0;
var dt2 = 0;
var lastTime2 = 0;

var sinMove =0;


setInterval(function() {
   spontanimation2()
}, 10);

function spontanimation2() {
   var timeNow = new Date().getTime();
   if(lastTime2 != 0) {
       dt2 = (timeNow - lastTime2) / 1000; // elapsed time in milliseconds
   }
   lastTime2 = timeNow;

   dts2 = dt2;
   if(dts2 > 0.05) {
       dts2 = 0.05
   } 

BoyChar.springArray.forEach(function(spring){
  spring.updateSpring();
})




}

// setInterval(function(){
//   perlinSpring.resetTimeRange=.03
//   perlinSpring.targetRange.min = 8;
//   perlinSpring.targetRange.max = 14;
//   setTimeout(function() {
//   perlinSpring.resetTimeRange=3

//     perlinSpring.targetRange.min = 1;
//     perlinSpring.targetRange.max = 9;

//   },2500)


// },5000)






