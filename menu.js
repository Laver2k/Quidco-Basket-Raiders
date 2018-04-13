var QuidcoEaster2017 = QuidcoEaster2017 || {};

QuidcoEaster2017.Menu = function() {};

QuidcoEaster2017.Menu.prototype = {	
	
	create: function(){

        // helpers
        this.centerX = this.game.width / 2;
        this.centerY = this.game.height / 2;

        // We need to grab the user id from the iframe url for later user
        var userId = QuidcoEaster2017.getUrlVars()['uid'];

        this.add.image(0,0,'bg-menu');
        
        this.mainSponsor = this.add.button(235,200,'iceland-large', function(){
          this.openURL('http://www.quidco.com/iceland/', 'iceland');
        }, this);

        this.mainSponsor.scale.setTo(0.8);



        //Animated arms

        this.leftArm = this.add.image(-1070,30,'menu-arm-left');
        this.leftArm.scale.setTo(0.9);
        this.leftArm.angle = -70;


        this.rightArm = this.add.image(1200,300,'arm-dark');
        this.rightArm.scale.setTo(0.8);
        this.rightArm.angle = -120;


        
        this.tweenLeftArm();


        // make btn graphic
        var playBtnGraphic = this.make.graphics(0,0);
        playBtnGraphic.beginFill(0xffffff);
        playBtnGraphic.drawRect(0, 0, 200, 60);


        // create btn
        var playBtn = this.add.button(320,500, 'btn-play-big', function() {
           
            this.clearSessionStorage(userId);
            this.optInProcess(userId);
            this.addSec();

        }, this);
        playBtn.anchor.setTo(0.5);



        // create btn
        var infoBtn = this.add.button(30,565, 'btn-information', function() {
            this.state.start('Info');
        }, this);

        // create btn
        var eggchieveBtn = this.add.button(330,565, 'btn-eggchievements', function() {
            this.state.start('Eggchievements');
        }, this);

        //Volume control
        this.volumeIcon = this.add.button(575, 10, 'volume', QuidcoEaster2017.toggleSound, this.volumeIcon);
        if (QuidcoEaster2017.soundOn === true) {
            this.volumeIcon.frame = 1;
        } else {
            this.volumeIcon.frame = 0;
        }

        //console.log(QuidcoEaster2017.soundOn);

        //Volume control
        this.volumeIcon = this.add.button(575, 10, 'volume', QuidcoEaster2017.toggleSound, this.volumeIcon);
        if (QuidcoEaster2017.soundOn === true) {
            this.volumeIcon.frame = 1;
        } else {
            this.volumeIcon.frame = 0;
        }

        QuidcoEaster2017.transitionIn();

	},

    tweenLeftArm: function() {

        this.leftArmTween = QuidcoEaster2017.Game.add.tween(this.leftArm).to({
            x:-220,
            y:280
        }, 1500, 'Linear', false, 0, 0);

       this.leftArmTweenB = QuidcoEaster2017.Game.add.tween(this.leftArm).to({
            x:-1070,
            y:30
        }, 1500, 'Linear', false, 2000, 0);

        this.leftArmTween.chain(this.leftArmTweenB);

        this.leftArmTweenB.onComplete.add(this.tweenRightArm, this);
        
        this.leftArmTween.start();
    },


    tweenRightArm: function() {
        this.rightArmTween = QuidcoEaster2017.Game.add.tween(this.rightArm).to({
            x:380,
            y:500
        }, 1500, 'Linear', false, 0, 0);

        this.rightArmTweenB = QuidcoEaster2017.Game.add.tween(this.rightArm).to({
            x:1200,
            y:300
        }, 1500, 'Linear', false, 2000, 0);

        this.rightArmTween.chain(this.rightArmTweenB);

        this.rightArmTweenB.onComplete.add(this.tweenLeftArm, this); //If the animation completes, it means the hand has gotten to an egg.
        this.rightArmTween.start();
        
    },


    /**
     * Check if user is opted in via session storage, if yes, play else
     * Check if user exists in DB. If yes add to session storage and play else
     * Add user to DB, add to session storage, play
     * @param {integer} userId - The user id
     */
    optInProcess: function(userId) {
        
        var self = this;
        
        var userId = userId;
        
        var sessionOptedIn = sessionStorage.getItem('readyOptedIn');
        var sessionUser    = sessionStorage.getItem('readyUserId');
       
        // we have no session storage OR
        // the user has been on a winning retailer page and we've set optedin to false
        // to prevent DB calls each time checking if they have opted in.
        if(sessionOptedIn === null || sessionOptedIn ==='false' || sessionUser === null) {
        
           // console.log('optInProcess - no session storage or opted in is false or no user id so check DB');

            $.post('./_/api/opt-in.php', { userId: userId })
                
                .done(function(data) {

                    var data = JSON.parse(data);
                    
                    //console.log('returned data', data);
                    if(data.optedin === true) { // we have a user or added a new user
                        
                        // set session storage to true to prevent further ajax requests
                        sessionStorage.setItem('readyUserId', userId);
                        sessionStorage.setItem('readyOptedIn', 'true');
                    }

                    // user should now be opted in so we can start the game
                  //  console.log('optInProcess - user has either just opted in or has been retrieved from the DB');
                    self.state.start('TheGame');

            }).fail(function(){
	            // unable to connect to DB. Start the game anyway
	            // as they can play but they will never win a prize
               // console.log('opt in failed');
                self.state.start('TheGame');
            });

        } else {
          //  console.log('user already opted in so start the game');
            this.state.start('TheGame');
        }

    },

    /**
     * Clears the session storage if the userid is different from the done
     * currently being stored.
     * @param {integer} userId - The user id
     */
    clearSessionStorage: function(userId) {

        var userId = userId;

        if (this.checkDifferentUser(userId)) {

           // console.log('checkDifferentUser - session cleared');
 
            var keysToClear = ['readyUserId', 'readyOptedIn', 'readyToggleFooter', 'ready96', 'ready374', 'ready11334', 'ready1282', 'ready5144', 'ready6721', 'ready9155', 'ready11473', 'ready3336', 'ready3533', 'ready2490', 'ready4439', 'ready238', 'ready324', 'ready6423', 'ready7170', 'ready244', 'ready6183', 'ready5675', 'ready2188', 'ready2361', 'ready2694', 'ready1829', 'ready8213', 'ready1274', 'ready956', 'ready11474', 'ready6078', 'ready4321', 'ready154'];

            keysToClear.forEach(function(currentValue){
                sessionStorage.removeItem(currentValue);
            });

        } else {
         //   console.log('clearSesionStorage - no need, user is the same or doesn\'t exist in session storage');
        }

    },

    /**
     * Checks if the current user is the same as the one stored in session storage
     * @param {integer} userId - The user id
     * @return {boolean} returns true if the user is different
     */
    checkDifferentUser: function(userId) {

        var sessionUserId = sessionStorage.getItem('readyUserId');

        // if(sessionUserId !== null) {

        //     if(userId != sessionUserId) {
        //         return true;
        //     }
        // }

        if(userId != sessionUserId || sessionUserId === null) {
            return true;
        }

        return false;

    },

    /**
     * Adds or updates the timestamp for the current user
     * Helps prevent people targeting the logic file on a loop
     */
    addSec: function() {

       // console.log('addSec called');
		
        var username = QuidcoEaster2017.getUrlVars()['uid'];

		if (typeof username !== 'undefined') {
	
			var userTrimmed = username.trim();
						
			if (userTrimmed) { // will evaluate true if userTrimmed is not: null, undefined, Nan, empty string (""), 0, false
 			
				var request = new XMLHttpRequest();
				
				request.open('POST', '_/phaser/_/api/test.php?uid=' + userTrimmed, true);
				
				request.onreadystatechange = function () {
		
					if (request.readyState === 4) {
					
						if(request.status === 200) {
						
							// no response needed
						
						} 
						// If we don't recieve a response here, nothing will get logged into the database
						// and therefore the user will always lose when it comes to the "see what you've won section"
												
					}
					
				}
				
				request.send();
			
			}
		
		}

    },



    openURL: function(url, name){
        window.open( url, name);  
    },




	
}