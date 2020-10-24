


  const calculateEngravingPrice = function (message, pricePerWord) {
    let price = message.split (" ");
    return price.lenght * pricePerWord;
  };
  console.log (
  calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
  )
  );
  
  console.log (
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        20,
    )
    );
  
    console.log (
      calculateEngravingPrice(
          'Proin sociis natoque et magnis parturient montes mus',
          40,
      )
      );
  
      console.log (
        calculateEngravingPrice(
            'Proin sociis natoque et magnis parturient montes mus',
            20,
        )
        );