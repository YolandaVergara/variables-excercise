'use strict';
//declaro la variable para expresar grados kelvin
const kelvin = 293;
//declaro la variable para expresar grados celsius
const celsius = 273;
//calculo grados fahrenheit utilizando la variable celsius
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
//muestro la temperatura en pantalla
document.querySelector('.fahrenheit').innerHTML = `La temperatura en grados Fahrenheit es ${fahrenheit}`;
//calculo grados newton con la variable celsius y la redondeo hacia abajo
const newton = Math.floor(celsius * (33 / 100));
//muestro la temperatura en el navegador
document.querySelector('.newton').innerHTML = `La temperatura en grados Fahrenheit es ${newton}`;