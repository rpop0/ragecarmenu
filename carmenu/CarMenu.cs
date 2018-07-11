using System;
using GTANetworkAPI;

namespace CarMenu
{
    public class Main : Script
    {
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
        }

        [Command("cmenu")]
        public void cmenuCommand(Client player)
        {
            if (!NAPI.Player.IsPlayerInAnyVehicle(player))
            {
                NAPI.Chat.SendChatMessageToPlayer(player, "Not in any vehicle!");
            }
            else
            {
                NAPI.ClientEvent.TriggerClientEvent(player, "cmenuActive");
            }
            
        }
    }
}