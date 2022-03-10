const Discord = require("discord.js")
const generateimage = require("./generateimage")
require("dotenv").config()

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
})

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "hello"){
        message.reply("hello there sweetheart")
    }
})

const welcomeChannelId = "951600452783452260"

client.on("guildMemberAdd", async (member) => {
    const img = await generateimage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}>welcom to the server hunny`,
        files: [img]
    })
})

client.login(process.env.TOKEN)