var QuidcoEaster2017 = QuidcoEaster2017 || {};

QuidcoEaster2017.Preload = function() {};

QuidcoEaster2017.Preload.prototype = {



	preload: function() {

        this.add.image(0,0,'preloader-bg');

        //Preload bar
        this.preloadBar = this.add.sprite(325, 455, 'preloader-bar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.preloadFill = this.add.sprite(177, 453, 'preloader-fill');
        this.preloadFill.anchor.setTo(0, 0.5);
        this.preloadFill.scale.setTo(1, 1);

        // set loadingBar sprite as a loader sprite.
        this.load.setPreloadSprite(this.preloadFill);

        this.load.path = '_/phaser/assets/';

        //Misc


        //Game
        this.load.image('game-bg','game-bg.jpg');
        this.load.image('game-egg','game-egg.png');
        this.load.image('gradient','gradient.png');

        //Arms
        this.load.image('arm-bear','arm-bear.png');
        this.load.image('arm-robot','arm-robot.png');
        this.load.image('arm-light','arm-light.png');
        this.load.image('arm-dark','arm-dark.png');
        this.load.image('arm-boxer','arm-boxer.png');
        this.load.image('arm-hook','arm-hook.png');
        this.load.image('arm-tentacle','arm-tentacle.png');


        //UI
        this.load.image('blue-bar','blue-bar.png');
        this.load.image('container-bar','container-bar.png');
        this.load.image('info-bg','ui/info-bg.jpg');
        this.load.image('instructions-paper','ui/instructions-paper.png');
        this.load.image('btn-back','ui/btn-back.png');
        this.load.image('prizes-paper','ui/prizes-paper.png');
        this.load.image('sponsors-paper','ui/sponsors-paper.png');
        this.load.image('bg-fail','ui/bg-fail.jpg');
        this.load.image('fail-arms','ui/fail-arms.png');

        this.load.image('arrow-left','ui/arrow-left.png');
        this.load.image('arrow-right','ui/arrow-right.png');

        this.load.image('info-menu','ui/info-menu.png');
        this.load.image('info-btn-prizes','ui/info-btn-prizes.png');
        this.load.image('info-btn-instructions','ui/info-btn-instructions.png');
        this.load.image('info-btn-sponsors','ui/info-btn-sponsors.png');
        this.load.image('info-btn-back','ui/info-btn-back.png');
        this.load.spritesheet('volume','ui/volume.png', 53, 41);

        this.load.image('bg-menu','ui/bg-menu.jpg');
        this.load.image('bg-lose','ui/bg-lose.jpg');
        this.load.image('btn-main-menu','ui/btn-main-menu.png');
        this.load.image('text-extra-prizes','ui/text-extra-prizes.png');
        this.load.image('text-share','ui/text-share.png');
        this.load.image('btn-play-big','ui/btn-play-big.png');
        this.load.image('btn-information','ui/btn-information.png');
        this.load.image('btn-eggchievements','ui/btn-eggchievements.png');
        this.load.image('bg-eggchievements','ui/eggchievements-bg.jpg');

        this.load.image('menu-arm-left','ui/menu-arm-left.png');

        this.load.audio('fail', ['sound/pop.mp3', 'sound/pop.ogg']);

        this.load.audio('bear', ['sound/bear.mp3', 'sound/bear.ogg']);
        this.load.audio('bear2', ['sound/bear2.mp3', 'sound/bear2.ogg']);
        this.load.audio('boxer', ['sound/boxer.mp3', 'sound/boxer.ogg']);
        this.load.audio('boxer2', ['sound/boxer2.mp3', 'sound/boxer2.ogg']);
        this.load.audio('ouch', ['sound/ouch.mp3', 'sound/ouch.ogg']);
        this.load.audio('ouch2', ['sound/ouch2.mp3', 'sound/ouch2.ogg']);
				this.load.audio('ouch3', ['sound/ouch3.mp3', 'sound/ouch3.ogg']);
        this.load.audio('ouch4', ['sound/ouch4.mp3', 'sound/ouch4.ogg']);
        this.load.audio('pirate', ['sound/pirate.mp3', 'sound/pirate.ogg']);
        this.load.audio('pirate2', ['sound/pirate2.mp3', 'sound/pirate2.ogg']);
        this.load.audio('fail', ['sound/pop.mp3', 'sound/pop.ogg']);
        this.load.audio('robot', ['sound/robot.mp3', 'sound/robot.ogg']);
        this.load.audio('robot2', ['sound/robot2.mp3', 'sound/robot2.ogg']);
        this.load.audio('slap', ['sound/slap.mp3', 'sound/slap.ogg']);
        this.load.audio('tentacle', ['sound/tentacle.mp3', 'sound/tentacle.ogg']);
        this.load.audio('tentacle2', ['sound/tentacle2.mp3', 'sound/tentacle2.ogg']);


        //Have you won?
        this.load.image('prize-egg','prize-egg.png');
        this.load.image('egg-crack','egg-crack.png');
        this.load.image('crack-mask','crack-mask.png');
        this.load.image('text-tap','ui/text-tap-on.png');
        this.load.image('banner-winner','ui/banner-winner.png');

        this.load.image('chick-1','ui/chick-1.png');
        this.load.image('chick-2','ui/chick-2.png');

        this.load.image('chick-body-left','ui/chick-body-left.png');
        this.load.image('chick-body-right','ui/chick-body-right.png');

        this.load.image('chick-head-left','ui/chick-head-left.png');
        this.load.image('chick-head-right','ui/chick-head-right.png');



        //Prize winner
        this.load.image('banner-eggcellent','ui/banner-eggcellent.png');
        this.load.image('bg-plain','ui/bg-plain.jpg');
        this.load.image('btn-menu','ui/btn-menu.png');
        this.load.image('share-facebook','ui/share-facebook.png');
        this.load.image('share-twitter','ui/share-twitter.png');
        this.load.image('sponsor-box','ui/sponsor-box.jpg');
        this.load.spritesheet('confetti', 'ui/confetti.png', 50, 34);

        this.load.image('win-1','ui/win-1.png');
        this.load.image('win-5','ui/win-5.png');
        this.load.image('win-10','ui/win-10.png');
        this.load.image('win-25','ui/win-25.png');
        this.load.image('win-25p','ui/win-25p.png');
        this.load.image('win-50p','ui/win-50p.png');

        //Sponsors
        this.load.image('adidas','sponsors/adidas.png');
        this.load.image('ao','sponsors/ao.png');
        this.load.image('bathstore','sponsors/bathstore.jpg');
        this.load.image('bensons','sponsors/bensons.png');
        this.load.image('booking','sponsors/booking.jpg');
        this.load.image('carpetright','sponsors/carpetright.png');
        this.load.image('etsy','sponsors/etsy.png');
        this.load.image('evans','sponsors/evans.jpg');
        this.load.image('expedia','sponsors/expedia.gif');
        this.load.image('first-choice','sponsors/first-choice.png');
        this.load.image('groupon','sponsors/groupon.png');
        this.load.image('halfords','sponsors/halfords.png');
        this.load.image('hobbycraft','sponsors/hobbycraft.jpg');
        this.load.image('hotels','sponsors/hotels.gif');
        this.load.image('hungryhouse','sponsors/hungryhouse.png');
        this.load.image('iceland','sponsors/iceland.png');
        this.load.image('iceland-large','sponsors/iceland-large.png');
        this.load.image('justeat','sponsors/justeat.png');
        this.load.image('lastminute','sponsors/lastminute.jpg');
        this.load.image('laterooms','sponsors/laterooms.png');
        this.load.image('marks','sponsors/marks.png');
        this.load.image('nike','sponsors/nike.png');
        this.load.image('now','sponsors/now.jpg');
        this.load.image('ryman','sponsors/ryman.png');
        this.load.image('talktalk','sponsors/talktalk.png');
        this.load.image('tbs','sponsors/tbs.png');
        this.load.image('thomson','sponsors/thomson.png');
        this.load.image('travelodge','sponsors/travelodge.png');
        this.load.image('waitrose','sponsors/waitrose.png');
        this.load.image('zalando','sponsors/zalando.png');
	},

	create: function(){

        var slap = this.add.audio('slap');
        var fail = this.add.audio('fail');
        var bear = this.add.audio('bear');
        var bear2 = this.add.audio('bear2');
        var boxer = this.add.audio('boxer');
        var boxer2 = this.add.audio('boxer2');
        var ouch = this.add.audio('ouch');
        var ouch2 = this.add.audio('ouch2');
        var pirate = this.add.audio('pirate');
        var pirate2 = this.add.audio('pirate2');
        var robot = this.add.audio('robot');
        var robot2 = this.add.audio('robot2');
        var slap = this.add.audio('slap');
        var tentacle = this.add.audio('tentacle');
        var tentacle2 = this.add.audio('tentacle2');

        this.sound.setDecodedCallback(
            [slap, fail, bear, bear2, boxer, boxer2, ouch, ouch2, pirate, pirate2, robot, robot2, tentacle, tentacle2],
            this.start, this
        );

    },


    start: function() {
        this.state.start('Menu');
    },


}
