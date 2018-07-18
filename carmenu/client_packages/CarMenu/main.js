var menuEvents = ["carColorChangeToServer", "menuOkayToServer", "menuFixToServer", "ems1", "ems2", "ems3", "ems4", "ems5", "br1", "br2", "br3", "br4", "su1", "su2", "su3", "su4", "su5",  "trs1", "trs2", "trs3", "trs4", "cmenuDone", "cmenuCursor", "menuTurboToServer"];


var carMenuOpen = false;
mp.events.add('cmenuActive', () =>{
	if(carMenuOpen) return 0;
	carMenu = mp.browsers.new('package://CarMenu/carmenu.html');
	mp.gui.cursor.show(true, true);
	carMenuOpen = true;
});





mp.events.add("carColorChangeToServer", (red, green, blue) =>{
	mp.events.callRemote('CmenuColor', red, green, blue);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Vehicle color changed!");
	mp.game.ui.drawNotification(true, false);
});




mp.events.add('menuFixToServer', () => {
	mp.events.callRemote('CmenuFix');
});

//Engine mods
mp.events.add('ems1', (player) => {
	mp.players.local.vehicle.setMod(11, -1);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Default engine added!");
	mp.game.ui.drawNotification(true, false);

});
mp.events.add('ems2', (player) => {
	mp.players.local.vehicle.setMod(11, 0);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Engine EMS 1 upgrade added!");
	mp.game.ui.drawNotification(true, false);
});
mp.events.add('ems3', (player) => {
	mp.players.local.vehicle.setMod(11, 1);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Engine EMS 2 upgrade added!");
	mp.game.ui.drawNotification(true, false);
});
mp.events.add('ems4', (player) => {
	mp.players.local.vehicle.setMod(11, 2);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Engine EMS 3 upgrade added!");
	mp.game.ui.drawNotification(true, false);
});
mp.events.add('ems5', (player) => {
	mp.players.local.vehicle.setMod(11, 3);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Engine EMS 4 upgrade added!");
	mp.game.ui.drawNotification(true, false);
});

//Brakes mods
mp.events.add('br1', () => {
	mp.players.local.vehicle.setMod(12, -1);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Standard Brakes added!");
	mp.game.ui.drawNotification(true, false);
});
mp.events.add('br2', () => {
	mp.players.local.vehicle.setMod(12, 0);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Street Brakes added!");
	mp.game.ui.drawNotification(true, false);
});
mp.events.add('br3', () => {
	mp.players.local.vehicle.setMod(12, 1);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Sport Brakes added!");
	mp.game.ui.drawNotification(true, false);
});
mp.events.add('br4', () => {
	mp.players.local.vehicle.setMod(12, 2);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Race Brakes added!");
	mp.game.ui.drawNotification(true, false);
});


//Suspension mods
mp.events.add('su1', () => {
	mp.players.local.vehicle.setMod(15, -1);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Standard Suspension added!");
	mp.game.ui.drawNotification(true, false);
});
mp.events.add('su2', () => {
	mp.players.local.vehicle.setMod(15, 0);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Lower Suspension added!");
	mp.game.ui.drawNotification(true, false);
});

mp.events.add('su3', () => {
	mp.players.local.vehicle.setMod(15, 1);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Street Suspension added!");
	mp.game.ui.drawNotification(true, false);
});

mp.events.add('su4', () => {
	mp.players.local.vehicle.setMod(15, 2);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Sport Suspension added!");
	mp.game.ui.drawNotification(true, false);
});

mp.events.add('su5', () => {
	mp.players.local.vehicle.setMod(15, 3);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Race Suspension added!");
	mp.game.ui.drawNotification(true, false);
});


//Turbo
mp.events.add('menuTurboToServer', () => {
	mp.players.local.vehicle.setMod(18, 0);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Turbo tuning added!");
	mp.game.ui.drawNotification(true, false);
});

//Tranmission
mp.events.add('trs1', () => {
	mp.players.local.vehicle.setMod(13, -1);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Standard Transmission added!");
	mp.game.ui.drawNotification(true, false);
});
mp.events.add('trs2', () => {
	mp.players.local.vehicle.setMod(13, 0);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Street Transmission added!");
	mp.game.ui.drawNotification(true, false);
});
mp.events.add('trs3', () => {
	mp.players.local.vehicle.setMod(13, 1);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Sport Transmission added!");
	mp.game.ui.drawNotification(true, false);
});
mp.events.add('trs4', () => {
	mp.players.local.vehicle.setMod(13, 2);
	mp.game.ui.setNotificationTextEntry("STRING");
	mp.game.ui.setNotificationMessage("CHAR_CARSITE3", "CHAR_CARSITE3", false, 4, "Vehicle tuner", "Race Transmission added!");
	mp.game.ui.drawNotification(true, false);
});



mp.events.add('cmenuDone', () =>{
	carMenu.destroy();
	carMenuOpen = false;
	mp.gui.cursor.show(false, false);
})

mp.events.add('cmenuCursor', () =>{
	mp.gui.cursor.show(true, true);
});

mp.events.add("menuOkayToServer", () => {
	mp.events.callRemote('CmenuOkay');
});





