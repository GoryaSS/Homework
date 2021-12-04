let carInfo = {
  manufacturer: "mitsubishi",
  model: "colt",
  gradYear: 2007,
  avgSpeed: 113,
  volumeFuelTank: 47,
  avgFuelConsumption: 6.3,
  showCarInfo() {
    console.log(`Виробник: ${this.manufacturer};\n 
    модель: ${this.model};\n рік випуску: ${this.gradYear};\n 
    середня швидкість, км/год: ${this.avgSpeed};\n 
    об'єм баку, л: ${this.volumeFuelTank};\n
    середня витрати палива, л/100км: ${this.avgFuelConsumption};`);
    
    if (carInfo.drivers != undefined) {
      console.log(`водії: ${this.drivers};`);
    }
  }
};
// carInfo.drivers = "Ihor";
carInfo.drivers = "Anastasi";
carInfo.showCarInfo();

let travelCalc = {
    distance: 350,
    fuelToTravel() {
      let hours = Math.floor(travelCalc.distance/carInfo.avgSpeed);
      let minutes = ((travelCalc.distance/carInfo.avgSpeed) % 1);
      let timeToTravel = (hours + ':' + minutes.toFixed(1) * 60);  

      console.log(`Дистанція: ${travelCalc.distance} км;\n
      Необхідний об'єм палива: ${Math.ceil(travelCalc.distance * carInfo.avgFuelConsumption / 100)} л;\n
      Дистанція на одній заправці: ${Math.round((carInfo.volumeFuelTank/carInfo.avgFuelConsumption) * 100)} км;`);
      if (travelCalc.distance > (carInfo.volumeFuelTank / carInfo.avgFuelConsumption * 100)) {
        console.log(`Необхідна дозаправка: ${Math.ceil((travelCalc.distance * carInfo.avgFuelConsumption / 100)-carInfo.volumeFuelTank)} л`);
      } 
      // for (let i = 0; i >= 4; i++ ) {
      // }
      if ((travelCalc.distance/carInfo.avgSpeed) >= 4 || (travelCalc.distance / carInfo.avgSpeed) <= 4) {
        console.log("Час на поїздку: " + timeToTravel);
      } else { 
        console.log("Час на поїздку: " + timeToTravel);
      }
  },
};
travelCalc.fuelToTravel();


// let carInfo = {
//     manufacturer: "Mitsubishi",
//     model: "LancerEvo",
//     gradYear: 2007,
//     avgSpeed: 100,
//     volumeFuelTank: 70,
//     avgFuelConsumption: 15,
//     drivers: true,
//     showCarInfo() {
//         console.log(
//             `Производитель: ${this.manufacturer};\n модель: ${this.model};\n год выпуска: ${this.gradYear};\n средняя скорость, км/ч: ${this.avgSpeed};\n обьем бака, л: ${this.volumeFuelTank};\n расход, л/100км: ${this.avgFuelConsumption};`
//         );
//         if (this.drivers == true) {
//             carInfo.drivers = "Stig"; // Выбор водителя
//             // carInfo.drivers = "Schumacher"; // Выбор водителя 2
//             console.log(`Водитель: ${this.drivers};`);
//         }
//     },
// };
// carInfo.showCarInfo();