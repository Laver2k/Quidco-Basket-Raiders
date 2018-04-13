var QuidcoEaster2017 = QuidcoEaster2017 || {};

QuidcoEaster2017 = {

	eggAlreadyGrabbed: false,
	handsSlapped: 0,
	sponsorLinks: ['http://www.quidco.com/adidas-shop/', 'http://www.quidco.com/ao-com/', 'http://www.quidco.com/bathstore/', 'http://www.quidco.com/bensons-for-beds/', 'http://www.quidco.com/booking-com/', 'http://www.quidco.com/carpetright/', 'http://www.quidco.com/etsy/', 'http://www.quidco.com/evans-cycles/', 'http://www.quidco.com/expedia/', 'http://www.quidco.com/first-choice/', 'http://www.quidco.com/groupon/', 'http://www.quidco.com/halfords/', 'http://www.quidco.com/hobbycraft/', 'http://www.quidco.com/hotels-com/', 'http://www.quidco.com/hungryhouse/', 'http://www.quidco.com/iceland/', 'http://www.quidco.com/just-eat/', 'http://www.quidco.com/lastminute-com/', 'http://www.quidco.com/laterooms-com/', 'http://www.quidco.com/marks-spencer/', 'http://www.quidco.com/nike-store/', 'http://www.quidco.com/now-tv/', 'http://www.quidco.com/ryman/', 'http://www.quidco.com/talktalk-broadband-and-digital-tv/', 'http://www.quidco.com/the-body-shop/', 'http://www.quidco.com/thomson/', 'http://www.quidco.com/travelodge-uk/', 'http://www.quidco.com/waitrose/', 'http://www.quidco.com/zalando/'],
	sponsorImages: ['adidas', 'ao', 'bathstore', 'bensons', 'booking', 'carpetright', 'etsy', 'evans', 'expedia', 'first-choice', 'groupon', 'halfords', 'hobbycraft', 'hotels', 'hungryhouse', 'iceland', 'justeat', 'lastminute', 'laterooms', 'marks', 'nike', 'now', 'ryman', 'talktalk', 'tbs', 'thomson', 'travelodge', 'waitrose', 'zalando'],
	soundOn: true,



	//Return sponsors for set days
	dailySponsors: function(firstOrSecond) {

    
	    var singleLogo = {};
	    // we are using the day of the month
	    // not the day of the year which is used in all the php scripts
	    var now        = new Date();
	    var dayOfMonth = now.getDate();

	    
	    var logoOne = {};
	    var logoTwo = {};



	    // depending on the day, set the logos data object
	    switch(dayOfMonth) {
	      case 3: //3rd
	        logoOne.data = {
	          logowidth: 118,
	          image: 'ryman',
	          name: 'Rymans',
	          url: 'http://www.quidco.com/ryman/'
	        }

	        logoTwo.data = {
	          logowidth: 127,
	          image:'laterooms',
	          name: 'Laterooms',
	          url: 'http://www.quidco.com/laterooms-com/'
	        }
	        break;
	        
	      case 4:
	        logoOne.data = {
	          logowidth: 110,
	          image:'etsy',
	          name: 'Etsy',
	          url: 'http://www.quidco.com/etsy/'
	        }

	        logoTwo.data = {
	          logowidth: 129,
	          image:'lastminute',
	          name: 'Lastminute',
	          url: 'http://www.quidco.com/lastminute-com/'
	        }
	        break;
	      
	      case 5:
	        logoOne.data = {
	          logowidth: 86,
	          image:'travelodge',
	          name: 'Travelodge UK',
	          url: 'http://www.quidco.com/travelodge-uk/'
	        }

	        logoTwo.data = {
	          logowidth: 95,
	          image:'carpetright',
	          name: 'Carpetright',
	          url: 'http://www.quidco.com/carpetright/'
	        }
	        break;

	      case 6:
	        logoOne.data = {
	          logowidth: 136,
	          image:'hobbycraft',
	          name: 'Hobbycraft',
	          url: 'http://www.quidco.com/hobbycraft/'
	        }

	        logoTwo.data = {
	          logowidth: 69,
	          image:'iceland',
	          name: 'Iceland',
	          url: 'http://www.quidco.com/iceland/'
	        }
	        break;

	      case 7:
	        logoOne.data = {
	          logowidth: 84,
	          image:'adidas',
	          name: 'adidas',
	          url: 'http://www.quidco.com/adidas-shop/'
	        }

	        logoTwo.data = {
	          logowidth: 122,
	          image:'first-choice',
	          name: 'First Choice',
	          url: 'http://www.quidco.com/first-choice/'
	        }
	        break;

	      case 8:
	        logoOne.data = {
	          logowidth: 92,
	          image:'ao',
	          name: 'AO.com',
	          url: 'http://www.quidco.com/ao-com/'
	        }

	        logoTwo.data = {
	          logowidth: 102,
	          image:'hungryhouse',
	          name: 'Hungryhouse',
	          url: 'http://www.quidco.com/hungryhouse/'
	        }
	        break;

	      case 9:
	        logoOne.data = {
	          logowidth: 61,
	          image:'expedia',
	          name: 'Expedia',
	          url: 'http://www.quidco.com/expedia/'
	        }

	        logoTwo.data = {
	          logowidth: 128,
	          image:'talktalk',
	          name: 'TalkTalk Broadband',
	          url: 'http://www.quidco.com/talktalk-broadband-and-digital-tv/'
	        }
	        break;

	      case 10:
	        logoOne.data = {
	          logowidth: 88,
	          image:'booking',
	          name: 'Booking.com',
	          url: 'http://www.quidco.com/booking-com/'
	        }

	        logoTwo.data = {
	          logowidth: 85,
	          image:'waitrose',
	          name: 'Waitrose',
	          url: 'http://www.quidco.com/waitrose/'
	        }
	        break;

	      case 11:
	        logoOne.data = {
	          logowidth: 124,
	          image:'hotels',
	          name: 'Hotels.com',
	          url: 'http://www.quidco.com/hotels-com/'
	        }

	        logoTwo.data = {
	          logowidth: 69,
	          image:'zalando',
	          name: 'Zalando',
	          url: 'http://www.quidco.com/zalando/'
	        }
	        break;

	      case 12:
	        logoOne.data = {
	          logowidth: 101,
	          image:'bathstore',
	          name: 'Bathstore',
	          url: 'http://www.quidco.com/bathstore/'
	        }

	        logoTwo.data = {
	          logowidth: 129,
	          image:'tbs',
	          name: 'The Body Shop',
	          url: 'http://www.quidco.com/the-body-shop/'
	        }
	        break;

	      case 13:
	        logoOne.data = {
	          logowidth: 126,
	          image:'evans',
	          name: 'Evans Cycles',
	          url: 'http://www.quidco.com/evans-cycles/'
	        }

	        logoTwo.data = {
	          logowidth: 90,
	          image:'nike',
	          name: 'Nike',
	          url: 'http://www.quidco.com/nike-store/'
	        }
	        break;

	      case 14:
	        logoOne.data = {
	          logowidth: 118,
	          image:'justeat',
	          name: 'Just Eat',
	          url: 'http://www.quidco.com/just-eat/'
	        }

	        logoTwo.data = {
	          logowidth: 107,
	          image:'now',
	          name: 'NOW TV',
	          url: 'http://www.quidco.com/now-tv/'
	        }
	        break;

	      case 15:
	        logoOne.data = {
	          logowidth: 105,
	          image:'thomson',
	          name: 'Thomson',
	          url: 'http://www.quidco.com/thomson/'
	        }

	        logoTwo.data = {
	          logowidth: 118,
	          image:'marks',
	          name: 'M&S',
	          url: 'http://www.quidco.com/marks-spencer/'
	        }
	        break;

	      case 16:
	        logoOne.data = {
	          logowidth: 97,
	          image:'iceland',
	          name: 'Iceland',
	          url: 'http://www.quidco.com/iceland/'
	        }

	        logoTwo.data = {
	          logowidth: 97,
	          image:'groupon',
	          name: 'Groupon',
	          url: 'http://www.quidco.com/groupon/'
	        }
	        break;

	      case 17:
	        logoOne.data = {
	          logowidth: 97,
	          image:'bensons',
	          name: 'Bensons for Beds',
	          url: 'http://www.quidco.com/bensons-for-beds/'
	        }

	        logoTwo.data = {
	          logowidth: 97,
	          image:'halfords',
	          name: 'Halfords',
	          url: 'http://www.quidco.com/halfords/'
	        }
	        break;


	      default:
	        logoOne.data = {
	          logowidth: 97,
	          image:'ryman',
	          name: 'Rymans',
	          url: 'http://www.quidco.com/ryman/'
	        }

	        logoTwo.data = {
	          logowidth: 97,
	          image:'laterooms',
	          name: 'Laterooms',
	          url: 'http://www.quidco.com/laterooms-com/'
	        }
	    }
	    

	    if (firstOrSecond === 1) {
	      singleLogo = logoOne;
	    } else {
	      singleLogo = logoTwo;
	    }
	    return singleLogo;
    
	},



    toggleSound: function(volumeIcon) {
        if (QuidcoEaster2017.soundOn === true) {
            QuidcoEaster2017.soundOn = false;
            QuidcoEaster2017.Game.sound.mute = true;
            volumeIcon.frame = 0;
        } else {
            QuidcoEaster2017.soundOn = true;
            QuidcoEaster2017.Game.sound.mute = false;
            volumeIcon.frame = 1;
        }


    },



	/**
	*	Adds an overalying graphic and fades it out
	*	
	*/	
	transitionIn: function() {

		var overlay = QuidcoEaster2017.Game.add.graphics(0, 0);
		overlay.beginFill('0xffffff', 1);
		overlay.drawRect(0, 0, QuidcoEaster2017.Game.width, QuidcoEaster2017.Game.height);
		overlay.alpha = 1;
		
		var fadeTween = QuidcoEaster2017.Game.add.tween(overlay).to({
			alpha: 0	
		}, 500, 'Linear', true );

	},



	/**
	*	Adds an overalying graphic and fades it out
	*	
	*/	
	transitionOut: function() {
		var overlay = QuidcoEaster2017.Game.add.graphics(0, 0);
		overlay.beginFill('0xffffff', 1);
		overlay.drawRect(0, 0, QuidcoEaster2017.Game.width, QuidcoEaster2017.Game.height);
		overlay.alpha = 0;
		
		var fadeTween = QuidcoEaster2017.Game.add.tween(overlay).to({
			alpha: 1	
		}, 500, 'Linear', true );

	},



    /**
     * call this anywhere in the game with
     * QuidcoEaster2017.getUrlVars()['uid'];
     * @return {string} vars - above example would return the user id.
     */
    getUrlVars: function() {

        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
    
        return vars;

    }

};

QuidcoEaster2017.Boot = function() {};

QuidcoEaster2017.Boot.prototype = {

	init: function(){
		this.input.maxPointers = 1;

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignVertically   = false;
		this.scale.pageAlignHorizontally = true;
		this.scale.setMinMax(0, 0, 640, 640);
// When you click out of the phaser game focus, it will pause.
		// This is fine but there are issues on ios that you can't get the game back in focus.
		// Add the below to combat this
//		if(!this.game.device.desktop) {
		this.stage.disableVisibilityChange = true;
//		}

		this.stage.backgroundColor = '0xffffff';
				
	},
	
	preload: function(){
		
		// Load the graphics for the preload state here so they are available
		this.load.path = '_/phaser/assets/ui/';			
		//this.load.image('preloaderBar', 'preloader-bar.png');
		//this.load.spritesheet('preloaderSprite', 'preloader-sprite.png', 127, 165);

        //Preloader
        this.load.image('preloader-bg','preloader-bg.jpg'); 
        this.load.image('preloader-bar','preloader-bar.png'); 
        this.load.image('preloader-fill','preloader-fill.png'); 
		
	},
	
	
	create: function(){
				
		this.state.start('Preload');
		
	}
	
}