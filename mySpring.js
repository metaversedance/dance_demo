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


function SpringObj(k, damp, x,v,target) {
  this.k = k || 12;
  this.damp = damp || 15
  this.x = x || 0;
  this.v =v || 0 ;
  this.currentTarget= target || 0;
  this.newTarget = target || 0;
  this.timeToReset=1;
  this.timeCounter = 0;
  this.getSpringX = function () {
    this.x += this.v * dts2;
    this.v += ( this.k * this.parent.moodMaster_k * (this.currentTarget - this.x) - this.damp * this.parent.moodMaster_damp * this.v) *dts2;
    return this.x;
  };
  this.active = true;
  this.parent=null;
  this.setParent = function(parent) {
    parent.springArray.push(this);
    this.parent = parent;
  }
  this.newTarget = function() {
    var num = Math.random()*this.targetRange.max + this.targetRange.min; // this will get a number between min & max
    if (this.targetRange.min < 0) { // if min is negative
      num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
      return num;
    }
    else { return num}
  }
  this.resetTimeRange = 3;
  this.targetRange = {min: 1, max: 1000};
  this.updateSpring = function () {
    if (this.active === true) {
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




var BoyChar = new Character()


var emotionSpring = new SpringObj(10,10,.5,1,1);
emotionSpring.targetRange.min=0;
emotionSpring.targetRange.max=5;
emotionSpring.setParent(BoyChar)







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






