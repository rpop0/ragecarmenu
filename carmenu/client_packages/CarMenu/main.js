mp.events.add('cmenuActive', () =>{
	carMenu = mp.browsers.new('package://CarMenu/carmenu.html');
	mp.gui.cursor.show(true, true);
	mp.gui.chat.activate(true);
});



mp.events.add("menuOkayToServer", () => {
	mp.events.callRemote('CmenuOkay');
});

mp.events.add('menuFixToServer', () => {
	mp.events.callRemote('CmenuFix');
});

//Engine mods
mp.events.add('ems1', () => {
	mp.players.local.vehicle.setMod(11, -1);
});
mp.events.add('ems2', () => {
	mp.players.local.vehicle.setMod(11, 0);
});
mp.events.add('ems3', () => {
	mp.players.local.vehicle.setMod(11, 1);
});
mp.events.add('ems4', () => {
	mp.players.local.vehicle.setMod(11, 2);
});
mp.events.add('ems5', () => {
	mp.players.local.vehicle.setMod(11, 3);
});

//Breaks mods
mp.events.add('br1', () => {
	mp.players.local.vehicle.setMod(12, -1);
});
mp.events.add('br2', () => {
	mp.players.local.vehicle.setMod(12, 0);
});
mp.events.add('br3', () => {
	mp.players.local.vehicle.setMod(12, 1);
});
mp.events.add('br4', () => {
	mp.players.local.vehicle.setMod(12, 2);
});


//Suspension mods
mp.events.add('su1', () => {
	mp.players.local.vehicle.setMod(15, -1);
});
mp.events.add('su2', () => {
	mp.players.local.vehicle.setMod(15, 0);
});

mp.events.add('su3', () => {
	mp.players.local.vehicle.setMod(15, 1);
});

mp.events.add('su4', () => {
	mp.players.local.vehicle.setMod(15, 2);
});

mp.events.add('su5', () => {
	mp.players.local.vehicle.setMod(15, 3);
});


//Turbo
mp.events.add('menuTurboToServer', () => {
	mp.players.local.vehicle.setMod(18, 0);
});

//Tranmission
mp.events.add('trs1', () => {
	mp.players.local.vehicle.setMod(13, -1);
});
mp.events.add('trs2', () => {
	mp.players.local.vehicle.setMod(13, 0);
});
mp.events.add('trs3', () => {
	mp.players.local.vehicle.setMod(13, 1);
});
mp.events.add('trs4', () => {
	mp.players.local.vehicle.setMod(13, 2);
});



mp.events.add('cmenuDone', () =>{
	carMenu.destroy();
	mp.gui.cursor.show(false, false);
})