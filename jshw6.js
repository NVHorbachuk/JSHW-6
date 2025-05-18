// // // Task 1
// <script>
//   document.getElementById("test").innerHTML = "Last";
// </script> */

// // Task 2

  // <script>
  //   // Знаходимо елемент
  //   const img = document.querySelector('.image');
    
  //   // Змінюємо зображення
  //   img.src = 'cat.jpg';
    
  //   // Виводимо оновлений тег у модальному вікні
  //   alert(img.outerHTML);
  // </script>

  // // Task 3

    // // Отримуємо всі <p> елементи всередині <div id="text">
    // const paragraphs = document.querySelectorAll('#text p');

    // // Проходимося по кожному елементу та виводимо його вміст
    // paragraphs.forEach((p, index) => {
    //   console.log(`Selector text ${index}: ${p.textContent}`);
    // });

    // // Task 4
  
    // ---  Cпосіб:
    // const items = document.querySelectorAll('#list li');
    // const order1 = [0, 4, 1, 3, 2]; // Порядок елементів
    // let output1 = '';
    // order1.forEach(index => {
    //   output1 += items[index].textContent + ', ';
    // });
    // alert('Спосіб 1:\n' + output1.slice(0, -2));
  
    // // Task 6
    //  // 1. Введення повідомлень
    // const message1 = prompt("Введіть перше повідомлення:");
    // const message2 = prompt("Введіть друге повідомлення:");

    // // Запис у поля вводу
    // const input1 = document.getElementById('input1');
    // const input2 = document.getElementById('input2');

    // input1.value = message1;
    // input2.value = message2;

    // // 2. Обмін значеннями між input1 та input2
    // const temp = input1.value;
    // input1.value = input2.value;
    // input2.value = temp;

    // // Task 7
    //  // Створення <main> з
    // const main = document.createElement('main');
    // main.className = 'mainClass check item';

    // // Створення <div>
    // const div = document.createElement('div');
    // div.id = 'myDiv';

    // // Створення <p>
    // const p = document.createElement('p');
    // p.textContent = 'First paragraph';

    // // Вкладення елементів
    // div.appendChild(p);
    // main.appendChild(div);
    // document.body.appendChild(main);




