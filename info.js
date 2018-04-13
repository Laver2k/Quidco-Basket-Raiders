var QuidcoEaster2017 = QuidcoEaster2017 || {};

QuidcoEaster2017.Info = function() {};

QuidcoEaster2017.Info.prototype = {	
	
	create: function(){

        this.add.image(0,0,'info-bg');


		//Instructions group
		this.instructionsGroup = this.add.group(); 
        this.instructionsPaper = this.add.image(0,640,'instructions-paper');

        this.btnInstructionsBack = this.add.button(210,1140,'btn-back', this.submenuToMenu, this);
		this.btnInstructionsBack.originGroup = this.instructionsGroup ;
		this.instructionsGroup.addMultiple([this.instructionsPaper, this.btnInstructionsBack]);


		//Prizes group
		this.prizesGroup = this.add.group(); 
        this.prizesPaper = this.add.image(0,640,'prizes-paper');

        this.btnPrizesBack = this.add.button(210,1150,'btn-back', this.submenuToMenu, this);
		this.btnPrizesBack.originGroup = this.prizesGroup;
		this.prizesGroup.addMultiple([this.prizesPaper, this.btnPrizesBack]);


		//Sponsors group
		this.sponsorsGroup = this.add.group(); 
		this.sponsorsSet1 = this.add.group(); 
		this.sponsorsSet2 = this.add.group(); 

        this.sponsorsPaper = this.add.image(0,640,'sponsors-paper');

        this.arrowLeft = this.add.button(60,900,'arrow-left', this.cycleSponsors, this);
        this.arrowRight = this.add.button(550,900,'arrow-right', this.cycleSponsors, this);

        this.btnSponsorsBack = this.add.button(210,1150,'btn-back', this.submenuToMenu, this);
		this.btnSponsorsBack.originGroup = this.sponsorsGroup;

		this.sponsorsGroup.addMultiple([this.sponsorsPaper, this.btnSponsorsBack, this.arrowLeft, this.arrowRight, this.sponsorsSet1, this.sponsorsSet2]);



        //Output grid of sponsors
  
  		//Group 1
        var row = 0;
        var column = 1;
        var startPoint = 0;
        var endPoint = 15;
        var maxColumns = 4;
        for (i = startPoint; i < QuidcoEaster2017.sponsorImages.length; i++) { 
			if (i > endPoint) {
				break;
			}
			//this.logo = this.add.image(column*90+50,row*90+170+610,QuidcoEaster2017.sponsorImages[i]);



			this.logo = this.createSponsor(column*90+52, row*90+170+610, QuidcoEaster2017.sponsorImages[i], QuidcoEaster2017.sponsorLinks[i], QuidcoEaster2017.sponsorImages[i]);
			this.logo.scale.setTo(0.6);
			this.sponsorsSet1.add(this.logo);

			if ( column > 0 && column % maxColumns === 0  ) {
				row++;
			}
			if (column === maxColumns) {
				column = 1;
			} else {
				column++;
			}
		}

	  	//Group 2
        row = 0;
        column = 1;
        startPoint = 16;
        endPoint = 28;
        maxColumns = 4;
        for (i = startPoint; i < QuidcoEaster2017.sponsorImages.length; i++) { 
			if (i > endPoint) {
				break;
			}

			this.set2logo = this.createSponsor(column*90+50, row*90+170+610, QuidcoEaster2017.sponsorImages[i], QuidcoEaster2017.sponsorLinks[i], QuidcoEaster2017.sponsorImages[i]);

			this.set2logo.scale.setTo(0.6);
			this.sponsorsSet2.add(this.set2logo);
			if ( column > 0 && column % maxColumns === 0  ) {
				row++;
			}
			if (column === maxColumns) {
				column = 1;
			} else {
				column++;
			}
		}
		this.sponsorsSet2.alpha = 0;
		this.sponsorsSet2.position.x = this.sponsorsSet2.position.x-1000; //Overlaying these causes weird click out urls so move it away.


        //Menu Group
		this.menuGroup = this.add.group(); 
        this.menuPaper = this.add.image(0,30,'info-menu');
        this.btnInstructions = this.add.button(135,210,'info-btn-instructions', this.menuToSubmenu, this);
		this.btnInstructions.targetGroup = this.instructionsGroup;



        this.btnPrizes = this.add.button(135,300,'info-btn-prizes', this.menuToSubmenu, this);
		this.btnPrizes.targetGroup = this.prizesGroup;

        this.btnSponsors = this.add.button(135,390,'info-btn-sponsors', this.menuToSubmenu, this);
        this.btnSponsors.targetGroup = this.sponsorsGroup;


        this.btnBack = this.add.button(135,480,'info-btn-back', function() {
            this.state.start('Menu');
        }, this);

		this.menuGroup.addMultiple([this.menuPaper, this.menuPaper, this.btnInstructions, this.btnPrizes, this.btnSponsors, this.btnBack]);
		//this.menuGroup.alpha = 0;


        //Volume control
        this.volumeIcon = this.add.button(575, 10, 'volume', QuidcoEaster2017.toggleSound, this.volumeIcon);
        if (QuidcoEaster2017.soundOn === true) {
            this.volumeIcon.frame = 1;
        } else {
            this.volumeIcon.frame = 0;
        }
        
        QuidcoEaster2017.transitionIn();


	},


	createSponsor: function(xpos, ypos, image, link, name) {

		var sponsor = this.add.button(xpos, ypos, image, function(){

		  this.openURL(link, name);

		}, this);
		return sponsor;
	},

	openURL: function(url, name){
//		console.log('button: '+url+ " / " +name);
		window.open( url, name);  
	},


	menuToSubmenu: function(button) {
		var target = button.targetGroup;

		var hidetween = QuidcoEaster2017.Game.add.tween(this.menuGroup).to({
            x:0,
            y:700
        }, 500, 'Linear', true, 0, 0);

		var showtween = QuidcoEaster2017.Game.add.tween(target).to({
            x:0,
            y:-608
        }, 500, 'Linear', true, 600, 0);
        
	},

  
	submenuToMenu: function(button) {
		var origin = button.originGroup;
		var hidetween = QuidcoEaster2017.Game.add.tween(origin).to({
            x:0,
            y:0
        }, 500, 'Linear', true, 0, 0);
		var showtween = QuidcoEaster2017.Game.add.tween(this.menuGroup).to({
            x:0,
            y:0
        }, 500, 'Linear', true, 600, 0);

	},  

	cycleSponsors: function() {
		if (this.sponsorsSet2.alpha === 0) {
			this.sponsorsSet2.alpha = 1;
			this.sponsorsSet1.alpha = 0;
			this.sponsorsSet2.position.x = this.sponsorsSet2.position.x+1000;
			this.sponsorsSet1.position.x = this.sponsorsSet2.position.x-1000;

		} else {
			this.sponsorsSet2.alpha = 0;
			this.sponsorsSet1.alpha = 1;
			this.sponsorsSet2.position.x = this.sponsorsSet2.position.x-1000;
			this.sponsorsSet1.position.x = this.sponsorsSet2.position.x+1000;
		}

	},
	
}