var QuidcoEaster2017 = QuidcoEaster2017 || {};

QuidcoEaster2017.Lose = function() {};

QuidcoEaster2017.Lose.prototype = {	
	
	create: function(){
		
        this.pageDemo = this.add.text(20, 20, "Didn't win a prize", { font: "25px Georgia", fill: "#000" }); 

        // helpers
        this.centerX = this.game.width / 2;
        this.centerY = this.game.height / 2;

        this.add.image(0,0,'bg-lose');


        //Chick 1
        this.chick1 = this.add.image(-30,380,'chick-body-right');
        this.chick1head = this.add.image(10,410,'chick-head-right');
        this.chick1head.anchor.setTo(0.5);
        this.chick1.scale.setTo(0.8);
        this.chick1head.scale.setTo(0.8);
        var fadeTween = QuidcoEaster2017.Game.add.tween(this.chick1head).to({
            angle: 30    
        }, 2500, 'Linear', true, 2000, -1);
        fadeTween.yoyo(true, 3000);

        //Chick 2
        this.chick2 = this.add.image(20,500,'chick-body-right');
        this.chick2head = this.add.image(80,535,'chick-head-right');
        this.chick2head.anchor.setTo(0.5);
        this.chick2.scale.setTo(1);
        this.chick2head.scale.setTo(1);
        fadeTween = QuidcoEaster2017.Game.add.tween(this.chick2head).to({
            angle: 30    
        }, 2500, 'Linear', true, 1000, -1);
        fadeTween.yoyo(true, 2000);


        //Chick 3
        this.chick3 = this.add.image(500,370,'chick-body-right');
        this.chick3head = this.add.image(540,400,'chick-head-right');
        this.chick3head.anchor.setTo(0.5);
        this.chick3.scale.setTo(0.7);
        this.chick3head.scale.setTo(0.7);
        fadeTween = QuidcoEaster2017.Game.add.tween(this.chick3head).to({
            angle: 30    
        }, 2200, 'Linear', true, 2000, -1);
        fadeTween.yoyo(true, 1000);


        //Chick 4
        this.chick4 = this.add.image(500,490,'chick-body-left');
        this.chick4head = this.add.image(545,530,'chick-head-left');
        this.chick4head.anchor.setTo(0.5);
        fadeTween = QuidcoEaster2017.Game.add.tween(this.chick4head).to({
            angle: -30    
        }, 1600, 'Linear', true, 2000, -1);
        fadeTween.yoyo(true, 1000);

        //Chick 5
        this.chick5 = this.add.image(100,390,'chick-body-left');
        this.chick5head = this.add.image(145,425,'chick-head-left');
        this.chick5head.anchor.setTo(0.5);
        this.chick5.scale.setTo(0.85);
        this.chick5head.scale.setTo(0.85);
        fadeTween = QuidcoEaster2017.Game.add.tween(this.chick5head).to({
            angle: -30    
        }, 1600, 'Linear', true, 2000, -1);
        fadeTween.yoyo(true, 1000);



        // make btn graphic
        var btnGraphic = this.make.graphics(0,0);
        btnGraphic.beginFill(0xffffff);
        btnGraphic.drawRect(0, 0, 200, 70);

        // replay btn
        var menuBtn = this.add.button(this.centerX, this.centerY +260, "btn-main-menu", function() {
           
            this.state.start('Menu');

        }, this);
        menuBtn.anchor.setTo(0.5);



        this.sponsorA = this.add.image(170,380,'sponsor-box');
        this.sponsorB = this.add.image(330,380,'sponsor-box');

        var sponsor1 = QuidcoEaster2017.dailySponsors(1);
        this.add.button(179,390,sponsor1.data.image, function(){
          this.openURL(sponsor1.data.url, sponsor1.data.name);
        }, this);

        var sponsor2 = QuidcoEaster2017.dailySponsors(2);
        this.add.button(338,390,sponsor2.data.image, function(){
          this.openURL(sponsor2.data.url, sponsor2.data.name);
        }, this);

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