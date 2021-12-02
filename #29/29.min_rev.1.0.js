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
  distance: 500,
  fuelToTravel() {
    let hours = Math.floor(travelCalc.distance / carInfo.avgSpeed);
    let minutes = ((travelCalc.distance / carInfo.avgSpeed) % 1);
    let timeToTravel = (hours + ':' + minutes.toFixed(1) * 60);
    let timeBetweenRest = 4;
    console.log(`Дистанція: ${travelCalc.distance} км;`);
    if (travelCalc.distance > (carInfo.volumeFuelTank / carInfo.avgFuelConsumption * 100)) {
      console.log(`Одного баку недостатньо -  необхідна дозаправка на ${Math.ceil((travelCalc.distance * carInfo.avgFuelConsumption / 100) - carInfo.volumeFuelTank)} л`);
    }
    for (let i = 0; i < (Math.ceil(this.distance / (carInfo.avgSpeed * timeBetweenRest))); i++) {
      travelCalc.timeToRest = i;
      travelCalc.timeWithRest = hours + i;
    }
    if ((travelCalc.distance / carInfo.avgSpeed) >= 4) {
      console.log("Час на поїздку: " + (travelCalc.timeWithRest + ':' + minutes.toFixed(1) * 60));
      console.log(`Включаючи час на відпочинок ${(travelCalc.timeToRest)} год.`);
    } else {
      console.log("Час на поїздку: " + timeToTravel);
    }
  },
};
travelCalc.fuelToTravel();
