'use strict';

const log = console.log;

const container = document.querySelector('.container');
const itemsBlock = document.querySelectorAll('.items');
log(itemsBlock);
const itemFirstBlock = document.querySelector('.item_one');
const itemSecondBlock = document.querySelector('.item_two');
const itemThirdBlock = document.querySelector('.item_three');
const itemFourthBlock = document.querySelector('.item_four');
const itemFifthBlock = document.querySelector('.item_five');
const itemSixthBlock = document.querySelector('.item_six');
const allHeader = document.querySelectorAll('.item__title');
log(allHeader);

const secondHeader = document.querySelector('.item_two .item__title');
const thirdHeader = document.querySelector('.item_three .item__title');
const fourthHeader = document.querySelector('.item_four .item__title');
const fifthHeader = document.querySelector('.item_five .item__title');
const sixthHeader = document.querySelector('.item_six .item__title');
// const cloneThird = thirdHeader.cloneNode();
// const text = document.createElement('This и прототипы объектов');
// cloneThird.append(text);


log(sixthHeader);


itemsBlock[0].prepend(itemFirstBlock);
itemFirstBlock.after(itemSecondBlock);
itemSecondBlock.after(itemThirdBlock);
itemThirdBlock.after(itemFourthBlock);

const listTwo = document.querySelector('.item_two .props__list');
const listThree = document.querySelector('.item_three .props__list');
const listFive = document.querySelector('.item_five .props__list');
const listSix = document.querySelector('.item_six .props__list');
const listFour = document.querySelector('.item_four .props__list');
listSix.before(secondHeader);
listFive.before(sixthHeader);
log(listSix);

listTwo.before(fifthHeader);
const itemForFourth = document.querySelector('.item_two .props__list .props__item:nth-child(4)');
const itemForThree = document.querySelector('.item_four .props__list .props__item:nth-child(3)');
itemForThree.after(itemForFourth);


const a = document.querySelector('.item_six .props__list .props__item:nth-child(9)');
const b = document.querySelector('.item_six .props__list .props__item:nth-child(10)');

listTwo.append(a);
listTwo.append(b);


const cloneThird = thirdHeader.cloneNode();
const text = document.createTextNode('This и прототипы объектов');
cloneThird.append(text);
thirdHeader.replaceWith(cloneThird);
log(cloneThird);
listThree.before(listFive);
sixthHeader.after(listThree);

const ads = document.querySelector('.ads');
ads.remove();