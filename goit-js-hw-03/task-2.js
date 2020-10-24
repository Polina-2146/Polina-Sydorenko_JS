// const calculateEngravingPrice = function (message, pricePerWord) {
//     // твій код
//   };
  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); // 80
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   ); // 120




  const calculateEngravingPrice = function (message, pricePerWord) {
    let count = 0;
    let words = message.split(" ");
    for (i = 0; i < words.length; i++) {
      if (words[i] != "") {
        count += 1;
      }
    }
    console.log(count*pricePerWord);
    };
  
  calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
  );
  
  calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
  );
  
      calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40);
  
      calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20);