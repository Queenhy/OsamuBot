const { MessageEmbed } = require("discord.js");
const kakashi = require("./kakashi.json");

class Messages {
  constructor() {}

  sendEmbedMessage(command, hottie, channel, userHandle, senderHandle) {
  if (userHandle === "<@433899225030590464>") {
      this.#sendKakashiMessage(command, channel, userHandle, senderHandle);
    } else {
      let embedMessage = this.#createEmbedMsg(
        command,
        hottie,
        userHandle,
        senderHandle
      );
      channel.send({ embeds: [embedMessage] });
    }
  }

  sendMessage(command, channel, userHandle, senderHandle) {
    let msg;

    switch (command) {
      case "praise":
        msg = `${senderHandle} is praising ${userHandle}.`;
        break;
      case "go":
        msg = `${senderHandle} is motivating ${userHandle}.`;
        break;
      case "bonk":
        msg = `${senderHandle} is bonking ${userHandle}.`;
        break;
      case "thirst":
        msg = `${senderHandle} wants ${userHandle} to drink some water.`;
        break;
      case "sleep":
        msg = `${senderHandle} is sending ${userHandle} to bed.`;
        break;
      case "flick":
        msg = `${senderHandle} is flicking ${userHandle}.`;
        break;
      case "kiss":
        msg = `${senderHandle} is smooching ${userHandle}.`;
        break;
      case "hug":
        msg = `${senderHandle} is giving ${userHandle} endless hugs <3.`;
        break;
      case "coffee":
        msg = `${senderHandle} wants to go on a date with ${userHandle}.`;
        break;
      default:
        msg = `${userHandle}, stop. What are ya doin, ya scrub?`;
        break;
    }

    channel.send(msg);
  }

  #sendKakashiMessage(command, channel, userHandle, senderHandle) {
    let kakashicommand;

    if (command.includes("praise")) {
      kakashicommand = "praise";
    } else if (command.includes("go")) {
      kakashicommand = "go";
    } else if (command.includes("bonk")) {
      kakashicommand = "bonk";
    } else if (command.includes("sleep")) {
      kakashicommand = "sleep";
    } else if (command.includes("kiss")) {
      kakashicommand = "kiss";
    } else if (command.includes("hug")) {
      kakashicommand = "hug";
    } else if (command.includes("flick")) {
      kakashicommand = "flick";
    } else if (command.includes("thirst")) {
      kakashicommand = "thirst";
    } else if (command.includes("coffee")) {
      kakashicommand = "coffee";
    }

    let embedMessage = this.#createKakashiEmbedMsg(
      kakashicommand,
      kakashi,
      userHandle
    );

    channel.send({ embeds: [embedMessage] });
  }
  #createKakashiEmbedMsg(command, kakashi, userHandle) {
    let description, img;

    switch (command) {
      case "praise":
        description = kakashi.praisetext;
        img = kakashi.praiseimage;
        break;
      case "bonk":
        description = kakashi.bonktext;
        img = kakashi.bonkimage;
        break;
      case "kiss":
        description = kakashi.kisstext;
        img = kakashi.praiseimage;
        break;
      case "hug":
        description = kakashi.hugtext;
        img = kakashi.praiseimage;
        break;
      case "go":
        description = kakashi.motivationtext;
        img = kakashi.motivationimage;
        break;
      case "sleep":
        description = kakashi.sleeptext;
        img = kakashi.sleepimage;
        break;
      case "thirst":
        description = kakashi.text;
        img = kakashi.image;
        break;
      case "coffee":
        description = kakashi.coffeetext;
        img = kakashi.praiseimage;
        break;
      case "flick":
        description = kakashi.flicktext;
        img = kakashi.bonkimage;
        break;
      default:
        description = `${userHandle}, stop. What are ya doin, ya scrub?`;
        img = kakashi.bonkimage;
        break;
    }

    const embedMsg = new MessageEmbed()
      .setColor("#C0C0C0")
      .setTitle(kakashi.name)
      .setDescription(description)
      .setImage(img);

    return embedMsg;
  }

  #createEmbedMsg(command, hottie, userHandle) {
    let description, img;

    switch (command) {
      case "praise":
        description = `${userHandle}, baby you are doing so well!`;
        img = hottie.praiseimage;
        break;
      case "go":
        description = `GO GO ${userHandle} YOU CAN DO IT!`;
        img = hottie.praiseimage;
        break;
      case "bonk":
        description = `Go to horny jail ${userHandle}!`;
        img = hottie.bonkimage;
        break;
      case "thirst":
        description = hottie.text;
        img = hottie.image;
        break;
      case "sleep":
        description = `Go to sleep and dream of me ${userHandle} <3`;
        img = hottie.sleepimage;
        break;
      case "interval":
        description = hottie.text;
        img = hottie.image;
        break;
      case "kiss":
        description = `Smooching you ${userHandle} <3`;
        img = hottie.praiseimage;
        break;
      case "hug":
        description = `Come here, into my arms ${userHandle} <3`;
        img = hottie.praiseimage;
        break;
      case "flick":
        description = `Stahp ${userHandle} <3`;
        img = hottie.bonkimage;
        break;
      case "coffee":
        description = `I found a new coffee place down the street, wanna check it out with me ${userHandle}?`;
        img = hottie.praiseimage;
        break;
      default:
        description = `${userHandle}, stop. What are ya doin, ya scrub?`;
        img = hottie.bonkimage;
        break;
    }

    const embedMsg = new MessageEmbed()
      .setColor("#40E0D0")
      .setTitle(hottie.name)
      .setDescription(description)
      .setImage(img);

    return embedMsg;
  }
}

module.exports = { Messages };
