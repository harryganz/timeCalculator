(function(){
  var app = angular.module('timecalculator', []);
  app.controller('TimeController', function(){
    this.times = [
      {"hours": 0, "minutes": 0, "seconds": 0},
      {"hours": 0, "minutes": 0, "seconds": 0}
      ];
    this.result = "0 hours, 0 minutes, 0 seconds";
    this.insertTime = function(){
      t = {hours: 0, minutes: 0, seconds: 0};
      this.times.push(t);
    };
    this.removeTime = function(index){
      this.times.splice(index, 1);
    };
    this.addTimes = function(){
      var t = 0;
      for (var i = 0; i < this.times.length; i++){
        t += parseFloat(this.times[i].hours)*3600 +
         parseFloat(this.times[i].minutes)*60 +
         parseFloat(this.times[i].seconds);
      }
      var hours = Math.floor(t/3600);
      var minutes = Math.floor((t - hours*3600)/60);
      var seconds = t - hours*3600 - minutes*60;
      this.result = hours + " hours, " + minutes + " minutes, "
      + seconds + " seconds";
    };
  });
})()
