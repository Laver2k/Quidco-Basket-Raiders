var QuidcoEaster2017 = QuidcoEaster2017 || {};

QuidcoEaster2017.Eggchievements = function() {};

QuidcoEaster2017.Eggchievements.prototype = {	
	
	create: function(){

        this.add.image(0,0,'bg-eggchievements');

        this.menuButton = this.add.button(200,560,'btn-menu',  function() {
            this.state.start('Menu');
        }, this);

        this.getStats();

        //Volume control
        this.volumeIcon = this.add.button(575, 10, 'volume', QuidcoEaster2017.toggleSound, this.volumeIcon);
        if (QuidcoEaster2017.soundOn === true) {
            this.volumeIcon.frame = 1;
        } else {
            this.volumeIcon.frame = 0;
        }
        
        QuidcoEaster2017.transitionIn();
        
	},

 	getStats: function() {
	
		// Grab the username from the iframe
		var username = QuidcoEaster2017.getUrlVars()['uid'];
		var that = this;
			
		if (typeof username !== 'undefined') {
			
			var userTrimmed = username.trim();
					
			if (userTrimmed) { // will evaluate true if userTrimmed is not: null, undefined, Nan, empty string (""), 0, false
 			
				var request = new XMLHttpRequest();
				
				request.open('GET', '_/phaser/_/api/total.php?uid=' + userTrimmed, true);
				
				request.onreadystatechange = function () {
		
					if (request.readyState === 4) {
					
						if(request.status == 200) {
							
							// if total.php can't find the user in the database it will return false (string not boolean)
							if(request.responseText !== 'false') {
							
								//Turns returned values into variables
								var returnedData  = JSON.parse(request.responseText);
								var totalWinnings = returnedData.cash_total;
								var totalSlaps = returnedData.totalslaps;
								var totalPB= returnedData.pb;		
								var style = {
									font: '32px Arial',
									fill: '#ffffff',
									fontWeight: 'bold'
								}

								// prevents undefined showing if we have an error connecting to the database

								//Total Won
								if(totalWinnings !== undefined) {
									var text = "£" + totalWinnings;
									var winningsText = that.add.text(500, 390, text, style);
									winningsText.anchor.setTo(0.5);
								} else {
									var text = 'Unavailable'
									var winningsText = that.add.text(500, 390, text, style);
									winningsText.anchor.setTo(0.5);
								}

								//Total Slaps
								if(totalSlaps !== undefined) {
									var text = totalSlaps;
									var totalSlapsText = that.add.text(500, 485, text, style);
									totalSlapsText.anchor.setTo(0.5);
								} else {
									var text = 'Unavailable'
									var totalSlapstext = that.add.text(500, 485, text, style);
									totalSlapsText.anchor.setTo(0.5);
								}

								//PB
								if(totalPB !== undefined) {
									var text = totalPB;
									var totalPBText = that.add.text(500, 295, text, style);
									totalPBText.anchor.setTo(0.5);
								} else {
									var text = 'Unavailable'
									var totalPBText = that.add.text(500, 295, text, style);
									totalPBText.anchor.setTo(0.5);
								}

							
							} else { // if we have no personal best or money won, just add 0 to each
							
								var style = {
									font: '32px Arial',
									fill: '#ffffff',
									fontWeight: 'bold',
									align: 'center'
								}
								var text = '£0';
								that.add.text(430, 370, text, style);
								text = '0';
								that.add.text(440, 280, text, style);
								that.add.text(440, 460, text, style);
								
															
												
							}
							
						} else {
							
							console.log('Error: ' + request.status); // An error occurred during the request.
							
						}
					}
				}
				
				request.send();
			
			}
		
		}
		
	},   
	
}