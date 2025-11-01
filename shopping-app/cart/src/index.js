import { faker } from '@faker-js/faker';

const cartString = `<div>You have ${faker.number.int(20)} items in your cart!</div>`;

document.querySelector('#cart-list').innerHTML = cartString;