// const books = [
//     { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//     { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//     { id: 3, title: "1984", author: "George Orwell", year: 1949 },
// ];

// let button = document.querySelector('.btn');
// let input = document.querySelector('.inp');
// let select = document.getElementById('select');
// let mainDiv = document.querySelector('.main');

// function search() {
//     let divs = document.querySelectorAll('.div');
//     let count = 0; 
//     if (input.value == '') {
//         return
//     }

//     divs.forEach(elm => {
//         elm.style.display = 'none'
//     })

//     if (select.value == 'title') {
//         books.forEach((elm) => {
//             let arr = elm.title.split(' ')
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i].includes(input.value)) {                    
//                     let y = arr[i].split(input.value);
//                     y[0] = '<span class="sp">' + input.value + '</span>'
//                     y = y.join(' ')
//                     arr[i] = y;
//                     generatorDiv(arr.join(' '), elm.author);
//                     count++
//                     break
//                 } 
//             }
//         })
//     } else {
//         books.forEach((elm) => {
//             let arr = elm.author.split(' ')
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i].includes(input.value)) {
//                     let y = arr[i].split(input.value);
//                     y[0] = '<span class="sp">' + input.value + '</span>'
//                     y = y.join(' ')
//                     arr[i] = y;
//                     generatorDiv(elm.title, arr.join(' '));
//                     count++
//                     break
//                 }
//             }
//         })
//     }
//     if(count == 0){
//         let h1 = document.createElement('h1');
//         h1.className = 'div';
//         h1.innerText = 'No books found.';
//         mainDiv.append(h1) 
//     }
// }

// function generatorDiv(title, author) {
//     let d = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let h2 = document.createElement('h1');
//     let p = document.createElement('p');
//     let p1 = document.createElement('p');
//     let sp1 = document.createElement('span');
//     let sp2 = document.createElement('span');
//     h1.innerText = 'title:';
//     h2.innerText = 'author:';
//     p.innerHTML = title
//     p1.innerHTML = author
//     d.append(h1)
//     d.append(p)
//     d.append(h2)
//     d.append(p1)
//     sp1.className = 'sp';
//     sp2.className = 'sp';
//     d.className = 'div'
//     mainDiv.append(d)
// }