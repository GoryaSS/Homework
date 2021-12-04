let clockObj = {
  clockCalk(hour, minute, second) {
    minute = minute + ((second - (Math.round((second / 60 - Math.floor(second / 60)) * 60))) / 60);
    hour = hour + Math.round(minute / 60);
    clockObj.hours = (hour < 100 ? (("00" + (hour + 1)).slice(-2)) : (("00" + (hour + 1)).slice(-3)));
    clockObj.minutes = ("0" + (Math.round((minute / 60 - Math.floor(minute / 60)) * 60))).slice(-2);
    clockObj.seconds = ("0" + (Math.round((second / 60 - Math.floor(second / 60)) * 60))).slice(-2);
  },
  showClockCalk() {
    console.log((this.hours + ':' + this.minutes + ':' + this.seconds));
  }
};
clockObj.clockCalk(12, 121, 121);
clockObj.showClockCalk();