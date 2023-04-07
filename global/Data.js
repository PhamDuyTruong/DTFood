export const filterData = [{name:"Fast food",image: require('../assets/fastfood.png'), id:"0"},
                    {name:"Burgers",image:require("../assets/burger.png"),id:"1"},
                    {name:"Salads",image:require("../assets/salads.png"),id:"2"},
                    {name:"Hotdog",image:require("../assets/hotdog.png"),id:"3"},
                    {name:"Chinese",image:require("../assets/chinese.png"),id:"4"},
                    {name:"Mexican",image:require("../assets/mexican.png"),id:"5"},
                    {name:"Sea food",image:require("../assets/seafood.png"),id:"6"},
];


export const restaurantsData = [
    {restaurantName:"Mc Donalds", farAway:"21.2",
    businessAddress:"22 Bessie street, Cape Town",images:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/640px-McDonald%27s_Golden_Arches.svg.png',
    averageReview:4.9,numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15,
    collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
    productData:[{name:"Hand cut chips", price:29.30,image:"https://diyjoy.com/wp-content/uploads/2020/06/McdonaldsStyleFriesRecipe-3.jpg"},
    {name:"Big Mac", price:50.80,image:"https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off"},{name:"Chicken Burger",
     price:70,image:"https://hips.hearstapps.com/hmg-prod/images/mcdonald-s-menu-chicken-burger-1612263619.jpg?crop=0.495xw:0.990xh;0,0.00977xh&resize=1200:*"},
      ],
    id:0
},
    
    {restaurantName:"KFC", farAway:"12.7",businessAddress:"22 Bessie street, Cape Town",
    images:'https://upload.wikimedia.org/wikipedia/vi/thumb/7/7e/Logo_KFC.svg/1200px-Logo_KFC.svg.png',
    averageReview:4.3, numberOfReview:306, coordinates : {lat: -26.1891648, lng: 28.2441808},
    discount:20,deliveryTime:30,collectTime:10, foodType:"Chicken,Chicken wings... ",
    productData:[{name:"Hand cut chips", price:29.30,image:"https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_36/1478740/kfc_fries_international_main.jpg"},
    {name:"Big Mac", price:50.80,image:"https://static.riviu.co/960/image/2021/06/02/f6224409067fa1d485c1b0f574599074_output.jpeg"},
    {name:"Chicken Burger", price:70,image:"https://static.kfcvietnam.com.vn/images/items/lg/Burger-Zinger.jpg?v=4jZaQ4"},
        ],
    id:1
},
    
    {restaurantName:"Steers", farAway:"5",businessAddress:" 17 Olivia Rd, Johannesburg",
    images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJ5-7P0K5BHM2P3ITX5olIxro54-r4VzMSFW3OombSjUScubxKlCy4C-nmShuYCFyKHI&usqp=CAU',
     coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: 4.9,numberOfReview: 1272,
      discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
     productData:[{name:"Hand cut chips", price:29.30,image:"https://pbs.twimg.com/media/EQ9zmsIXsAEwb3P.jpg"},
      {name:"Big Mac", price:50.80,image:"https://www.kimberley.co.za/wp-content/uploads/2021/08/38361_STEERS-Sharington_Combo_Meal_Promotion-KCP-SP-v1_00a.jpg"},{name:"Chicken Burger",
       price:70,image:"https://i.ytimg.com/vi/XkeD7TKXNbg/maxresdefault.jpg"},
        ],
     id:2
    },
    
    {restaurantName:"Roman Pizza", farAway:"7",businessAddress:" 15 Atlas Rd, Kempton Park",
    images:'https://i.pinimg.com/originals/d4/cf/d3/d4cfd33e3c3382ae0f39bc862804bb8e.jpg',
    averageReview:4.3, numberOfReview:700, coordinates: {lat: -26.1845336, lng: 28.2481691},
    discount:null,deliveryTime:20,collectTime:10,foodType:"Chicken pizza, Vegetarian pizza...",
    productData:[{name:"Hand cut chips", price:29.30,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYAS16EeSZdHMSyjuqFX1i-_pGOmFPhbppXbJjKXT-RvE-1QN8FmItVGTvWHlS0MnXbU&usqp=CAU"},
      {name:"Big Mac", price:50.80,image:"https://www.pizzaexpress.vn/wp-content/uploads/2020/11/UFHsFlMmR8e6NSVYKlMw_ClassicCombo.jpg"},{name:"Chicken Burger",
       price:70,image:"https://content.jdmagicbox.com/comp/mumbai/n9/022pxx22.xx22.190104222008.m6n9/catalogue/pizza-fries-burger-mira-road-thane-xrokp8bvq3.jpg"},
        ],
    id:3
},
    ]