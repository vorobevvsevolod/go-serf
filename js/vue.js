let app = new Vue ({
    el:'#app',
    data(){
      return{
        travel:[
          {id:1, subtitle:'Shore', title:'Malibu Beach', location:'California', infotitle:'Queensland Australia', distance:'10,215', timeHours:'23', timeMinutes:'5', price:'2,000' },
          {id:2, subtitle:'Shore', title:'Airlie beach', location:'Australia', infotitle:'Queensland Australia', distance:'17,265', timeHours:'12', timeMinutes:'15', price:'2,576' },
          {id:3, subtitle:'Shore', title:'Cloud Nine', location:'Philippines', infotitle:'Queensland Australia', distance:'13,545', timeHours:'16', timeMinutes:'50', price:'3,124' },
          {id:4, subtitle:'Shore', title:'Vieux Boucau', location:'France', infotitle:'Queensland Australia', distance:'7,065', timeHours:'5', timeMinutes:'55', price:'1,976' },
          {id:5, subtitle:'Shore', title:'Malibu Beach', location:'California', infotitle:'Queensland Australia', distance:'6,895', timeHours:'3', timeMinutes:'25', price:'1,276' },
          {id:6, subtitle:'Shore', title:'Airlie beach', location:'Australia', infotitle:'Queensland Australia', distance:'16,985', timeHours:'6', timeMinutes:'45', price:'5,956' },
          {id:7, subtitle:'Shore', title:'Cloud Nine', location:'Philippines', infotitle:'Queensland Australia', distance:'11,665', timeHours:'4', timeMinutes:'65', price:'8,906' },
          {id:8, subtitle:'Shore', title:'Vieux Boucau', location:'France', infotitle:'Queensland Australia', distance:'10,865', timeHours:'7', timeMinutes:'35', price:'1,976' },
        ],
         
        sleeps:[
          {id:1, subtitle:'Resorts', title:'Auberge', location:'Australia', name:'excellent'},
          {id:2, subtitle:'Resorts', title:'Auberge', location:'Australia', name:'excellent'},
          {id:3, subtitle:'Resorts', title:'Auberge', location:'Australia', name:'excellent'},
          {id:4, subtitle:'Resorts', title:'Auberge', location:'Australia', name:'excellent'},
          {id:5, subtitle:'Resorts', title:'Auberge', location:'Australia', name:'excellent'},
          {id:6, subtitle:'Resorts', title:'Auberge', location:'Australia', name:'excellent'},
          {id:7, subtitle:'Resorts', title:'Auberge', location:'Australia', name:'excellent'},
          {id:8, subtitle:'Resorts', title:'Auberge', location:'Australia', name:'excellent'},
        ],
        nights: 5,
        guests: 4,
        price: 349,

        surfMaps:[
          {id:1, title:'Malibu Beach', subtitle:'California', high:'9 - 13', temp:'+2.3', speed:'4'},
          {id:2, title:'Airlie beach', subtitle:'Australia', high:'9 - 13', temp:'+2.3', speed:'4'},
          {id:3, title:'Cloud Nine', subtitle:'Philippines', high:'9 - 13', temp:'+2.3', speed:'4'},
          {id:4, title:'Vieux Boucau', subtitle:'France', high:'9 - 13', temp:'+2.3', speed:'4'},
          {id:5, title:'Malibu Beach', subtitle:'California', high:'9 - 13', temp:'+2.3', speed:'4'},
          {id:6, title:'Airlie beach', subtitle:'Australia', high:'9 - 13', temp:'+2.3', speed:'4'},
          {id:7, title:'Cloud Nine', subtitle:'Philippines', high:'9 - 13', temp:'+2.3', speed:'4'},
          {id:8, title:'Vieux Boucau', subtitle:'France', high:'9 - 13', temp:'+2.3', speed:'4'},          
        ],

        surfSliders:[
          {id:1, title:'Malibu', subtitle:'Beach', location:'California', locationStrana:'USA' },
          {id:2, title:'Airlie', subtitle:'Beach', location:'Queenslan', locationStrana:'Australia' },
          {id:3, title:'Cloud', subtitle:'Nine', location:'Siargao', locationStrana:'Philippines' },
          {id:4, title:'Vieux', subtitle:'Boucau', location:'Hossegor', locationStrana:'France' },
          {id:5, title:'Malibu', subtitle:'Beach', location:'California', locationStrana:'USA' },
          {id:6, title:'Airlie', subtitle:'Beach', location:'Queenslan', locationStrana:'Australia' },
          {id:7, title:'Cloud', subtitle:'Nine', location:'Siargao', locationStrana:'Philippines' },
          {id:8, title:'Vieux', subtitle:'Boucau', location:'Hossegor', locationStrana:'France' }
        ],

        headerSliders:[
          {id:1, title:'North Shore', number:'01'},
          {id:2, title:'South Shore', number:'02'},
          {id:2, title:'West Shore',  number:'03'},
          {id:2, title:'East Shore',  number:'04'},
        ], 

        shops:[
            {id:1, title:'North Nugget TT', price:'799', src:'img/Surfboard.png'},
            {id:2, title:'South Nugget TT', price:'999', src:'img/Surfboard.png'},
            {id:2, title:'West Nugget TT', price:'1299', src:'img/Surfboard.png'},
            {id:2, title:'East Nugget TT', price:'899', src:'img/Surfboard.png'},
        ]
        
      
    }
  },

  methods: {
    nightsMinus(event){
      event.preventDefault();
      if(this.nights != 2){
        this.nights -= 1;
        this.price -= 49;
      }     
    },

    nightsPlus(event){
      event.preventDefault();
      this.nights += 1;
      this.price += 49;
    },

    guestsMinus(event){
      event.preventDefault();
      if(this.guests != 1){
        this.guests -= 1;
        this.price -= 38;
      } 
    },

    guestsPlus(event){
      event.preventDefault();
      this.guests += 1;
      this.price += 38;
    },
  },


  });