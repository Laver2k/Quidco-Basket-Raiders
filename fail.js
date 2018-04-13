var QuidcoEaster2017 = QuidcoEaster2017 || {};

QuidcoEaster2017.Fail = function() {};

QuidcoEaster2017.Fail.prototype = {	
	
    create: function(){
        
        this.pageDemo = this.add.text(20, 20, "Didn't win a prize", { font: "25px Georgia", fill: "#000" }); 

        // helpers
        this.centerX = this.game.width / 2;
        this.centerY = this.game.height / 2;

        this.add.image(0,0,'bg-fail');

        this.thumbsDown = this.add.image(0,380,'fail-arms');

        var thumbsDownTween = QuidcoEaster2017.Game.add.tween(this.thumbsDown).to({
            y:this.thumbsDown.position.y+25
        }, 1500, 'Linear', true, 0, -1);
        thumbsDownTween.yoyo(true, 0);



        // make btn graphic
        var btnGraphic = this.make.graphics(0,0);
        btnGraphic.beginFill(0xffffff);
        btnGraphic.drawRect(0, 0, 200, 70);



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

        //Update hands slapped in database
        var username = QuidcoEaster2017.getUrlVars()['uid']; //Get username
        if (typeof username !== 'undefined') { //Only do this if we find a user..
            var userTrimmed = username.trim(); //trim the username
            if(userTrimmed) { // will evaluate true if userTrimmed is not: null, undefined, Nan, empty string (""), 0, false
                var request = new XMLHttpRequest(); //new ajax
                request.open('POST', '_/phaser/_/api/update-slaps.php?uid=' + userTrimmed + '&newslaps='+QuidcoEaster2017.handsSlapped, true); //send user id and number of hands slapped to php file
                request.onreadystatechange = function () {
                    if (request.readyState === 4) {
                        if(request.status === 200) { //Everything has worked
                           // var returnedData = JSON.parse(request.responseText);
                           // console.log(returnedData);
                        } else {
                            console.log('Error: ' + request.status); // An error occurred during the request.
                        }
                    }            
                }
                request.send(); //Go!
            } 
        } 

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