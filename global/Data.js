export const filterData = [{name:"Fast food",image: require('../assets/fastfood.png'), id:"0"},
                    {name:"Burgers",image:require("../assets/burger.png"),id:"1"},
                    {name:"Salads",image:require("../assets/salads.png"),id:"2"},
                    {name:"Hotdog",image:require("../assets/hotdog.png"),id:"3"},
                    {name:"Chinese",image:require("../assets/chinese.png"),id:"4"},
                    {name:"Mexican",image:require("../assets/mexican.png"),id:"5"},
                    {name:"Sea food",image:require("../assets/seafood.png"),id:"6"},
];

export const filterData2 = [{name:"Fast food",image:'https://blog.dktcdn.net/files/fast-food.jpg' , id:"0"},
{name:"Burgers",image: 'https://www.visithcmc.vn/public/uploads/0000/6/2021/08/19/marcel-burger-cropped.jpg',id:"1"},
{name:"Salads",image:"https://cdn.tgdd.vn/Files/2022/05/16/1432739/bat-mi-cach-lam-salad-hy-lap-don-gian-gion-mat-cuc-bo-duong-202205160929278475.jpg",id:"2"},
{name:"Hotdog",image: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_27/1586836/hotdogs-te-square-200702.jpg",id:"3"},
{name:"Chinese",image:"https://poshjournal.com/wp-content/uploads/2020/09/Chinese-Sausage-Fried-Rice-6.jpg",id:"4"},
{name:"Mexican",image:"https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg?quality=90&resize=556,505",id:"5"},  
{name:"Sea food",image:"https://www.foodandwine.com/thmb/t0elZfVmODnZF3NMKsSifhzgucE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/seafood-boil-FT-RECIPE0321-c085f410405b40cea0f460b12791c5d2.jpg",id:"6"},
{name:"Chinese Food",image:"https://restaurantclicks.com/wp-content/uploads/2022/04/chinese-food-dishes.jpg",id:"7"},
{name:"Mexican pie",image:"https://img.taste.com.au/wrkJw2gW/taste/2016/11/mexican-tortilla-pie-32930-1.jpeg",id:"8"},  
{name:"Ocean dish",image:"https://tb-static.uber.com/prod/image-proc/processed_images/dd8345b987154aadf074465f2d924310/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",id:"9"},
];

export const filterData3 = [{name:"Fast food",image:'https://quantrinhahang.edu.vn/wp-content/uploads/2019/06/fast-food-la-gi.jpg' , id:"0"},
{name:"Burgers",image: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg',id:"1"},
{name:"Salads",image:"https://afamilycdn.com/150157425591193600/2021/4/20/base64-1618910967516899249294.png",id:"2"},
{name:"Hotdog",image: "https://kenh14cdn.com/2019/2/2/cr-health-inlinehero-healthy-hotdogs-07-18-15490912572491297258971.jpg",id:"3"},
{name:"Chinese",image:"https://cdn.vox-cdn.com/thumbor/8ePfC6isjjed7RTOOKwQzVhgqpw=/69x0:1200x777/1200x900/filters:focal(553x251:745x443)/cdn.vox-cdn.com/uploads/chorus_image/image/59125679/crawfish_bao_1.19.jpg",id:"4"},
{name:"Mexican",image:"https://insanelygoodrecipes.com/wp-content/uploads/2022/10/Homemade-Vegan-Mexican-Beef-Tacos-with-Herbs.jpg",id:"5"},  
{name:"Sea food",image:"https://assets3.thrillist.com/v1/image/3097381/828x610/flatten;crop;webp=auto;jpeg_quality=60.jpg",id:"6"},
{name:"Chinese Food",image:"https://www.chewoutloud.com/wp-content/uploads/2021/05/lo-mein-square-500x500.jpg",id:"7"},
{name:"Mexican pie",image:"https://img.taste.com.au/CdTjooQI/w1200-h630-cfill/taste/2020/05/jun20_mexican-chicken-pies-161721-1.jpg",id:"8"},  
{name:"Ocean dish",image:"https://www.womenstuff.co.za/wp-content/uploads/2021/12/OB-Sea-Bream_header.jpeg",id:"9"},
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