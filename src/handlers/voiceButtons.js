import { MessageFlags } from "discord.js";

const lockHandler = {
    name: "voice_lock",
    async execute(interaction) {

        console.log("VOICE LOCK CLICKED");

        await interaction.reply({
            content: "✅ Le bouton fonctionne !",
            flags: MessageFlags.Ephemeral
        });
    }
};

const unlockHandler = {
    name: "voice_unlock",
    async execute(interaction) {

        console.log("VOICE UNLOCK CLICKED");

        await interaction.reply({
            content: "✅ Unlock fonctionne !",
            flags: MessageFlags.Ephemeral
        });
    }
};

export default [
    lockHandler,
    unlockHandler
];
