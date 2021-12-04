let carInfo = {
  manufacturer: "mitsubishi",
  model: "colt",
  gradYear: 2007,
  avgSpeed: 113,
  volumeFuelTank: 47,
  avgFuelConsumption: 6.3,
  showCarInfo() {
    console.log(`Виробник: ${this.manufacturer};\n модель: ${this.model};\n рік випуску: ${this.gradYear};\n середня швидкість, км/год: ${this.avgSpeed};\n об'єм баку, л: ${this.volumeFuelTank};\n середня витрати палива, л/100км: ${this.avgFuelConsumption};`);
    if (carInfo.drivers != undefined) {
      console.log(`водії: ${this.drivers};`);
    }
  }
};
// carInfo.drivers = "Ihor";
carInfo.drivers = "Anastasi";
carInfo.showCarInfo();

let travelCalc = {
  fuelToTravel(value) {
    if (isNaN(value)) {
      return console.log("This is not a number");
    }
    let hours = Math.floor(value / carInfo.avgSpeed);
    let minutes = ((value / carInfo.avgSpeed) % 1);
    let timeToTravel = (hours + ':' + minutes.toFixed(1) * 60);
    let timeBetweenRest = 4;
    let fullTankDistance = carInfo.volumeFuelTank / carInfo.avgFuelConsumption * 100;
      console.log(`Дистанція: ${value} км;`);
    if (value > fullTankDistance) {
      console.log(`Одного баку недостатньо -  необхідна дозаправка на ${Math.ceil((value * carInfo.avgFuelConsumption / 100) - carInfo.volumeFuelTank)} л`);
    }
    for (let i = 0; i < (Math.ceil(value / (carInfo.avgSpeed * timeBetweenRest))); i++) {
      this.timeToRest = i;
      this.timeWithRest = hours + i;
    }
    if ((value / carInfo.avgSpeed) > 4) {
      console.log("Час на поїздку: " + (this.timeWithRest + ':' + minutes.toFixed(1) * 60));
      console.log(`Включаючи час на відпочинок ${(this.timeToRest)} год.`);
    } else {
      console.log("Час на поїздку: " + timeToTravel);
    }
  },
};
travelCalc.fuelToTravel(1560);
