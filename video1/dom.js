// examine the document object

log = console.log

// // console.dir(document);
// log(document.domain);
// log(document.URL);

// // document.title = 'Fang the malamute'
// log(document.title)

// log(document.doctype);
// log(document.head);
// log(document.body);
// log(document.all);

// // you can change things based on selector
// log(document.all[10]);

// // if you want forms on lage
// log(document.forms);
// log(document.links);
// log(document.images);

// selector methods to query the dom
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle)
// headerTitle.textContent = 'Hi There';
// headerTitle.innerText = 'Goodbye There' // pays attention to styling
// headerTitle.innerHTML = '<h3>KAJSDLKJLSKL</h3>' // puts h3 into h1 element; does not replace
// header.style.borderBottom = 'solid 3px black'


// get element(s) by class name
// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1]);
// items[1].textContent = 'Hello New Item 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'tomato';

// work with all class items

// items.style.backgroundColor = 'light grey' // does not work

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }

// get element by tag name
// var li = document.getElementsByTagName('li');
// console.log(li)
// console.log(li[1]);
// li[1].textContent = 'Hello New Item 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'tomato';

// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4'
// }

// QUERY SELECTOR //   only use for ONE item

// var header = document.querySelector('#main-header'); //use any CSS selector
// header.style.borderBottom = 'solid 4px #ccc'

// var input = document.querySelector('input'); // only picks the first
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND IT';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'cyan'

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'MediumSeaGreen';


// QUERY SELECTOR ALL //
var titles = document.querySelectorAll('.title')
console.log(titles)
titles[0].textContent = 'Hello';


// sudo selector
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i  < odd.length; i++) {
    odd[i].style.backgroundColor = 'grey';
}

var even = document.querySelectorAll('li:nth-child(even)');
for (var i = 0; i < even.length; i++) {
    even[i].style.backgroundColor = 'CornflowerBlue'
}
console.log(odd)
console.log(even)
