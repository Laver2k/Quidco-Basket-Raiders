var QuidcoEaster2017 = QuidcoEaster2017 || {};

QuidcoEaster2017.Win = function() {};

QuidcoEaster2017.Win.prototype = {	
	
    init: function(data) {
        //console.log(data);
        this.prize = data;

        switch(this.prize) {
            case 1: 
            this.prize = "25p";
            break;
            case 2: 
            this.prize = "50p";
            break;
            case 3: 
            this.prize = "£1";
            break;
            case 4: 
            this.prize = "£5";
            break;
            case 5: 
            this.prize = "£10";
            break;
            case 6: 
            this.prize = "£25";
            break;
            default: //If somethings not right..
            this.state.start('Lose'); //..they lose.
        }
    },

	create: function() {

        this.add.image(0,0,'bg-plain');

        //Chick 1
        this.chick1 = this.add.image(30,490,'chick-body-right');
        this.chick1head = this.add.image(80,520,'chick-head-right');
        this.chick1head.anchor.setTo(0.5);
        var fadeTween = QuidcoEaster2017.Game.add.tween(this.chick1head).to({
            angle: -20    
        }, 1000, 'Linear', true, 1000, -1);
        fadeTween.yoyo(true, 1000);

        //Chick 2
        this.chick2 = this.add.image(500,490,'chick-body-left');
        this.chick2head = this.add.image(550,520,'chick-head-left');
        this.chick2head.anchor.setTo(0.5);
        this.chick2head.angle = 10;
        fadeTween = QuidcoEaster2017.Game.add.tween(this.chick2head).to({
            angle: -10    
        }, 1000, 'Linear', true, 1000, -1);
        fadeTween.yoyo(true, 1000);

        this.emitter = this.add.emitter(320, -100);
        this.emitter.makeParticles('confetti', [1,2,3,4], 800);

        this.emitter.minParticleSpeed.setTo(-300, 30);
        this.emitter.maxParticleSpeed.setTo(300, 100);
        this.emitter.minParticleScale = 0.7;
        this.emitter.maxParticleScale = 0.9;
        this.emitter.gravity = 50;
        this.emitter.flow(6000, 200, 30, -1);


        this.banner = this.add.image(320,100,'banner-eggcellent');
        this.banner.anchor.setTo(0.5);

        this.sponsorA = this.add.image(170,275,'sponsor-box');
        this.sponsorB = this.add.image(330,275,'sponsor-box');

        var sponsor1 = QuidcoEaster2017.dailySponsors(1);
        this.add.button(179,285,sponsor1.data.image, function(){
          this.openURL(sponsor1.data.url, sponsor1.data.name);
        }, this);

        var sponsor2 = QuidcoEaster2017.dailySponsors(2);
        this.add.button(338,285,sponsor2.data.image, function(){
          this.openURL(sponsor2.data.url, sponsor2.data.name);
        }, this);

        this.shareText = this.add.image(208,507,'text-share');


        this.facebook = this.add.button(220,535,'share-facebook',  function() {
            this.openURL("http://www.facebook.com/sharer.php?u="+encodeURI("http://www.quidco.com&t=I've just played #BasketBandits on @Quidco. £20,000 up for grabs, play today for your chance to win!"),"Share on Facebook");
        }, this);

        this.twitter = this.add.button(320,535,'share-twitter',  function() {
            this.openURL("http://twitter.com/intent/tweet?url=http://www.quidco.com&text=I%27ve%20just%20played%20%23BasketBandits%20on%20%40Quidco%2E%20£20K%20up%20for%20grabs%2C%20play%20today%20for%20your%20chance%20to%20win%21","Share on Twitter");
        }, this);

        this.menuButton = this.add.button(200,430,'btn-menu',  function() {
            this.state.start('Menu');
        }, this);



        switch(this.prize) {
            case "25p":
            this.add.image(160,155,'win-25p');
            break;
            case "50p":
            this.add.image(160,155,'win-50p');
            break;
            case "£1":
            this.add.image(170,155,'win-1');
            break;
            case "£5":
            this.add.image(170,155,'win-5');
            break;
            case "£10":
            this.add.image(160,155,'win-10');
            break;
            case "£25":
            this.add.image(160,155,'win-25');
            break;
            default: //If somethings not right..
            this.state.start('Lose'); //..they lose.

        }



        // helpers
        this.centerX = this.game.width / 2;
        this.centerY = this.game.height / 2;

        // make btn graphic
        var btnGraphic = this.make.graphics(0,0);
        btnGraphic.beginFill(0xffffff);
        btnGraphic.drawRect(0, 0, 200, 100);


        this.extraPrizes = this.add.image(30,200,'text-extra-prizes');

        //Volume control
        this.volumeIcon = this.add.button(575, 10, 'volume', QuidcoEaster2017.toggleSound, this.volumeIcon);
        if (QuidcoEaster2017.soundOn === true) {
            this.volumeIcon.frame = 1;
        } else {
            this.volumeIcon.frame = 0;
        }

        QuidcoEaster2017.transitionIn();


	},

    openURL: function(url, name){
        window.open( url, name);  
    },
	
}