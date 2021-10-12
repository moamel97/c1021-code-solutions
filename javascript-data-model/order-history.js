var orderHistory = [
  {
    shipTo: 'SHIP TO',
    nameOfThePerson: 'JS Masher',
    orderPlaced: 'ORDER PLACED August 4, 2020',
    totalPriceAfterTax: 34.00,
    orderNumber: 'ORDER # 114-3941689-87772232',
    item: [
      {
        deliveryDate: 'Delivered Aug 8, 2020',
        orderName: 'JavaScript for impatient programmers',
        authorName: 'Rauschmayer, Dr. Axel',
        image: './image1',
        returnWindow: 'Return window closed on sep 7, 2020',
        PriceBeforeTax: 31.55
      }
    ]

  },
  // Second order
  {
    shipTo: 'SHIP TO',
    nameOfThePerson: 'JS Masher',
    orderPlaced: 'ORDER PLACED July 19, 2020',
    totalPriceAfterTax: 44.53,
    orderNumber: 'ORDER # 113-9984258',
    item: [
      {
        deliveryDate: 'Delivered Jul 20, 2020',
        orderName: 'The Timeless Way of Building',
        authorName: 'Alexander , christopher',
        returnWindow: 'Return window closed on Aug 19, 2020',
        image: './image2',
        PriceBeforeTax: 41.33
      }
    ]

  },
  // Third order
  {
    shipTo: 'SHIP TO',
    nameOfThePerson: 'JS Masher',
    orderPlaced: 'ORDER PLACED July 4, 2020',
    totalPriceAfterTax: 17.22,
    orderNumber: 'ORDER # 114-2875557-9059409',
    item: [
      {
        deliveryDate: 'Delivered Jul 7, 2020',
        returnWindow: 'Return window closed on Aug 5, 2020',
        orderName: 'Gamecube Controller Adapter',
        PriceBeforeTax: 15.98,
        image: './image3'
      }

    ]
  },
  // forth order
  [
    {
      shipTo: 'SHIP TO',
      nameOfThePerson: 'JS Masher',
      orderPlaced: 'ORDER PLACED July 3, 2020',
      totalPriceAfterTax: 138.93,
      orderNumber: 'ORDER # 113-2883177-2648248',
      item: [
        {
          deliveryDate: 'Delivered Jul 5, 2020',
          image: './image4',
          orderName: 'Game Cube Controller',
          returnWindow: 'Return window colsed Aug 4, 2020',
          PriceBeforeTax: 94.95,
          item: [
            {
              orderName1: 'The Art of Sql',
              image1: './image5',
              authorName: 'Faroult, Stephane',
              returnWindow1: 'Return window closed on Aug 4, 2020',
              PriceBeforeTax: 33.99
            }
          ]
        }
      ]
    }

  ]

];

console.log('The order of order history:', orderHistory);
