// const products = [
//     { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
//     { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
//     { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
// ];  

// let button = document.querySelector('.btn');
// let category = document.querySelector('#category');
// let tag = document.querySelector('#tag');
// let divProduct = document.querySelector('.product-div')

// function filtered() {
//     let count = 0;
//     let div = document.querySelectorAll('.div')
//     if (category.value != 'None' || tag.value != 'None') {
//         div.forEach(elm => {
//             elm.style.display = 'none'
//         });
        
//         products.forEach((elm, i) => {
//             if (category.value == elm.category && (tag.value == elm.tags[0] || tag.value == elm.tags[1])) {
//                 count++
//                 generatorDiv(elm)            
//             } else if (category.value == elm.category && tag.value == 'None') {
//                 count++
//                 generatorDiv(elm)        
//             } else if ((tag.value == elm.tags[0] || tag.value == elm.tags[1]) && category.value == 'None') {
//                 count++
//                 generatorDiv(elm)          
//             } else if(count == 0 && i == products.length - 1){
//                 let h1 = document.createElement('h1');
//                 h1.className = 'div';
//                 h1.innerText = 'No products found.';
//                 divProduct.append(h1)                
//             }
//         })
//     }
// }

// function generatorDiv(obj) {
//     let d = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let h2 = document.createElement('h1');
//     let h3 = document.createElement('h1');
//     let p = document.createElement('p');
//     let p1 = document.createElement('p');
//     let p2 = document.createElement('p');
//     h1.innerText = 'NAME:';
//     h2.innerText = 'CATEGORY:';
//     h3.innerText = 'PRICE:';
//     p.innerText = obj.name
//     p1.innerText = obj.category
//     p2.innerText = obj.price
//     d.append(h1)
//     d.append(p)
//     d.append(h2)
//     d.append(p1)
//     d.append(h3)
//     d.append(p2)
//     d.className = 'div'
//     divProduct.append(d)
//     return obj.id
// }



