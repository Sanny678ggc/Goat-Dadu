module.exports = {
    config: {
        name: "haha",
        version: "1.0",
        author: "Jay",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "hahahaha", "haha", "hahaha", "haaha", "hahha") return message.reply("happy kapala?");
}
};