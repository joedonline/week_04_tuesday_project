const mySwitch = document.getElementById("mySwitch");
const wrapper = document.getElementById('wrapper');
const logo = document.getElementById('logo');

let lights = true;
let lightsStatus = document.querySelector('p.lightsStatus');

const switchOnOff = () => {
  lights = lights ? false : true;
  if (lights) {
    console.log(lights, wrapper);
    wrapper.classList.remove('lights_off');
    wrapper.classList.add('lights_on');
  } else {
    console.log(lights, wrapper);
    wrapper.classList.remove('lights_on');
    wrapper.classList.add('lights_off');
  }
};

let spinIt = false;

const spinLogo = () => {
  spinIt = spinIt ? false : true;
  if (spinIt) {
    console.log(spinIt, logo);
    logo.classList.remove('spinIt');
    logo.classList.add('spinIt');
  } else {
    console.log(spinIt, logo);
    logo.classList.remove('spinIt');
    logo.classList.add('spinIt');
  }
};

const noSpin = () => {
  spinIt = spinIt ? false : true;
  if (spinIt) {
    console.log(spinIt, logo);
    logo.classList.remove('spinIt');
  } else {
    console.log(spinIt, logo);
    logo.classList.remove('spinIt');
  }
};

mySwitch.addEventListener('click', switchOnOff);
logo.addEventListener('mouseenter', spinLogo);
logo.addEventListener('mouseleave', noSpin);
