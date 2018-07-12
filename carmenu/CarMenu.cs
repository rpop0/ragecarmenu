using System;
using GTANetworkAPI;

namespace CarMenu
{
    public class Main : Script
    {
    
        public static class Globals
        {
            public static bool CmenuActive;
        }
        
        [RemoteEvent("CmenuFix")]
        public void OnCmenuFix(Client player)
        {
            Vehicle car = NAPI.Player.GetPlayerVehicle(player);
            NAPI.Vehicle.RepairVehicle(car);
        }

        [RemoteEvent("CmenuOkay")]
        public void OnCmenuOkay(Client player)
        {
            NAPI.ClientEvent.TriggerClientEvent(player, "cmenuDone");
            Globals.CmenuActive = false;
        }
        
        [RemoteEvent("CmenuColor")]
        public void OnCmenuColor(Client player, int red, int green, int blue)
        {
            Vehicle car = NAPI.Player.GetPlayerVehicle(player);
            NAPI.Vehicle.SetVehicleCustomPrimaryColor(car, red, green, blue);
            NAPI.Vehicle.SetVehicleCustomSecondaryColor(car, red, green, blue);
        }
        
        [Command("cursor")]
        public void cmenuCursor(Client player)
        {
            NAPI.ClientEvent.TriggerClientEvent(player, "cmenuCursor");
        }

        [Command("cmenu")]
        public void cmenuCommand(Client player)
        {
            if (!NAPI.Player.IsPlayerInAnyVehicle(player))
            {
                NAPI.Chat.SendChatMessageToPlayer(player, "[ERROR]: Not in any vehicle!");
            }
            else if (Globals.CmenuActive == true)
            {
                NAPI.Chat.SendChatMessageToPlayer(player, "[ERROR]: Vehicle menu is already active!");
            }
            else
            {
                NAPI.ClientEvent.TriggerClientEvent(player, "cmenuActive");
                Globals.CmenuActive = true;
            }
            
        }
    }
}
