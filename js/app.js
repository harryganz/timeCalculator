(function(){
  var app = angular.module('timecalculator', []);
  app.controller('TimeController', function(){
    this.times = [
      {"hours": null, "minutes": null, "seconds": null},
      {"hours": null, "minutes": null, "seconds": null}
      ];
    this.result = "0 hours, 0 minutes, 0 seconds";
    this.insertTime = function(){
      t = {hours: null, minutes: null, seconds: null};
      this.times.push(t);
    };
    this.removeTime = function(index){
      this.times.splice(index, 1);
    };
    this.addTimes = function(){
      var t = 0;
      for (var i = 0; i < this.times.length; i++){
        var h = this.times[i].hours ? this.times[i].hours : 0;
        var m = this.times[i].minutes ? this.times[i].minutes : 0;
        var s = this.times[i].seconds ? this.times[i].seconds : 0;
        t += parseFloat(h)*3600 +
         parseFloat(m)*60 +
         parseFloat(s);
      }
      var hours = Math.floor(t/3600);
      var minutes = Math.floor((t - hours*3600)/60);
      var seconds = t - hours*3600 - minutes*60;
      this.result = hours + " hours, " + minutes + " minutes, "
      + seconds + " seconds";
    };
  });
})()
