var QuidcoEaster2017 = QuidcoEaster2017 || {};

window.onload = function() {

	var width  = 640;
	var height = 640;
	
	QuidcoEaster2017.Game = new Phaser.Game(width, height, Phaser.AUTO, 'game-wrapper');
	
	QuidcoEaster2017.Game.state.add('Boot', QuidcoEaster2017.Boot);
	QuidcoEaster2017.Game.state.add('Preload', QuidcoEaster2017.Preload);
	QuidcoEaster2017.Game.state.add('Menu', QuidcoEaster2017.Menu);
	QuidcoEaster2017.Game.state.add('Info', QuidcoEaster2017.Info);
	QuidcoEaster2017.Game.state.add('Eggchievements', QuidcoEaster2017.Eggchievements);

	QuidcoEaster2017.Game.state.add('Success', QuidcoEaster2017.Success);
	QuidcoEaster2017.Game.state.add('Fail', QuidcoEaster2017.Fail);
	QuidcoEaster2017.Game.state.add('Win', QuidcoEaster2017.Win);
	QuidcoEaster2017.Game.state.add('Lose', QuidcoEaster2017.Lose);

	QuidcoEaster2017.Game.state.add('TheGame', QuidcoEaster2017.TheGame);
	
	QuidcoEaster2017.Game.state.start('Boot');

};