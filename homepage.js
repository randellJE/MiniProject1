const toggler = document.querySelector(".btn");
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

const carData = [
    {
      title: "Audi",
      description:
        "Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany.",
    },
    {
      title: "Mercedes-Benz",
      description:
        "Mercedes-Benz, commonly referred to as Mercedes, is a German luxury automotive brand.",
    },
    {
      title: "BMW",
      description:
        "Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria,  Germany.",
    },
  ];
  function getCars() {
    return new Promise(resolve => {
        setTimeout(function() {
            //resolve the promise with the car data after 1s
            resolve(carData)
        }), 3000
    })
  }
  function addCard2(car) {
    const template = document.getElementById("car-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = car.title;
    template.querySelector('.card-text').innerText=car.description;
    document.querySelector('#car-list').appendChild(template);
  }
  //get data asynchronously, then use it to populate a template
  getCars().then((cars) => cars.forEach(car => addCard2(car)))

const data = [{name: 'bob', age: 23}, {name: 'alice', age: 39}]

addCard2(data)
addCard2(data)