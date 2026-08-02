
import { MessageFlags } from "discord.js";

const lockHandler = {
    name: "voice_lock",
    async execute(interaction) {

        const channel = interaction.member.voice.channel;

        if (!channel)
            return interaction.reply({
                content: "❌ Join your voice channel first.",
                flags: MessageFlags.Ephemeral
            });

        const everyone = interaction.guild.roles.everyone;

        await channel.permissionOverwrites.edit(everyone, {
            Connect: false
        });

        await interaction.reply({
            content: "🔒 Voice locked.",
            flags: MessageFlags.Ephemeral
        });
    }
};

const unlockHandler = {
    name: "voice_unlock",
    async execute(interaction) {

        const channel = interaction.member.voice.channel;

        if (!channel)
            return interaction.reply({
                content: "❌ Join your voice channel first.",
                flags: MessageFlags.Ephemeral
            });

        const everyone = interaction.guild.roles.everyone;

        await channel.permissionOverwrites.edit(everyone, {
            Connect: true
        });

        await interaction.reply({
            content: "🔓 Voice unlocked.",
            flags: MessageFlags.Ephemeral
        });
    }
};

export default [
    lockHandler,
    unlockHandler
];
