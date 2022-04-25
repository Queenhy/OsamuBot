const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");
const { HottieGenerator } = require("./hottieGenerator.js");
const { Messages } = require("./Messages.js");
const createMessages = new Messages();
const msgHottieGenerator = new HottieGenerator();
let sendMessages;

//const targetChannelId = "789612794445955114"; // #welcome on KnF
targetChannelId = "955446918710980648"; // #a-la-table on HQ Café BigBang
const frequency = 60 * 60 * 1000;
//const frequency = 20 * 1000;

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(token);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  const { commandName } = interaction;

  switch (commandName) {
    case "start":
      console.log("Intervals started!");
      const hottieGenerator = new HottieGenerator();

      sendMessages = setInterval(() => {
        const hottie = hottieGenerator.getRandomHottie();
        sendMessage(hottie);
      }, frequency);
      break;
    case "stop":
      clearInterval(sendMessages);
      console.log("Intervals cleared!");
      break;
    default:
      console.log("dafuq u want from meeee?!");
      break;
  }
});

client.on("messageCreate", (message) => {
  const { content, channel } = message;
  const parts = content.split(" ");
  const userHandle = parts[1];
  const senderHandle = message.author.username;

  if (content.startsWith("!sleep")) {
    message.delete();
    const hottie = msgHottieGenerator.getRandomHottie();
    createMessages.sendMessage("sleep", channel, userHandle, senderHandle);
    createMessages.sendEmbedMessage(
      "sleep",
      hottie,
      channel,
      userHandle,
      senderHandle
    );
  } else if (content.startsWith("!bonk")) {
    message.delete();
    const hottie = msgHottieGenerator.getRandomHottie();
    createMessages.sendMessage("bonk", channel, userHandle, senderHandle);
    createMessages.sendEmbedMessage(
      "bonk",
      hottie,
      channel,
      userHandle,
      senderHandle
    );
  } else if (content.startsWith("!praise")) {
    message.delete();
    const hottie = msgHottieGenerator.getRandomHottie();
    createMessages.sendMessage("praise", channel, userHandle, senderHandle);
    createMessages.sendEmbedMessage(
      "praise",
      hottie,
      channel,
      userHandle,
      senderHandle
    );
  } else if (content.startsWith("!flick")) {
    message.delete();
    const hottie = msgHottieGenerator.getRandomHottie();
    createMessages.sendMessage("flick", channel, userHandle, senderHandle);
    createMessages.sendEmbedMessage(
      "flick",
      hottie,
      channel,
      userHandle,
      senderHandle
    );
  } else if (content.startsWith("!go")) {
    message.delete();
    const hottie = msgHottieGenerator.getRandomHottie();
    createMessages.sendMessage("go", channel, userHandle, senderHandle);
    createMessages.sendEmbedMessage(
      "go",
      hottie,
      channel,
      userHandle,
      senderHandle
    );
  } else if (content.startsWith("!kiss")) {
    message.delete();
    const hottie = msgHottieGenerator.getRandomHottie();
    createMessages.sendMessage("kiss", channel, userHandle, senderHandle);
    createMessages.sendEmbedMessage(
      "kiss",
      hottie,
      channel,
      userHandle,
      senderHandle
    );
  } else if (content.startsWith("!hug")) {
    message.delete();
    const hottie = msgHottieGenerator.getRandomHottie();
    createMessages.sendMessage("hug", channel, userHandle, senderHandle);
    createMessages.sendEmbedMessage(
      "hug",
      hottie,
      channel,
      userHandle,
      senderHandle
    );
  } else if (content.startsWith("!coffee")) {
    message.delete();
    const hottie = msgHottieGenerator.getRandomHottie();
    createMessages.sendMessage("coffee", channel, userHandle, senderHandle);
    createMessages.sendEmbedMessage(
      "coffee",
      hottie,
      channel,
      userHandle,
      senderHandle
    );
  } else if (content.startsWith("!thirst")) {
    message.delete();
    const hottie = msgHottieGenerator.getRandomHottie();
    createMessages.sendMessage("thirst", channel, userHandle, senderHandle);
    createMessages.sendEmbedMessage(
      "thirst",
      hottie,
      channel,
      userHandle,
      senderHandle
    );
  }
});

function sendMessage(hottie) {
  const intervalMessageChannel = client.channels.cache.get(targetChannelId);
  createMessages.sendEmbedMessage("interval", hottie, intervalMessageChannel);
}
