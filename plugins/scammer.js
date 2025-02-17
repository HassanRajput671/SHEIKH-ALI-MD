const config = require('../config')
const { cmd, commands } = require('../command');

cmd({
    pattern: "scammer",
    alias: ["chutiye","bc-tattay"],
    desc: "show the scammers's numbers",
    category: "main",
    react: "🖕🏻",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━━〔 *Scammers's Numbers* 〕━━━┈⊷
┃★╭────────────๏
┃★│ BC tatta 1🖕🏻: +92 309 2342318
┃★│ BC tatta 2🖕🏻: +92 309 4230218
┃★│ BC tatta 3🖕🏻: +92 320 2231275
┃★│ BC tatta 4🖕🏻:+92 330 4093758
┃★│ BC tatta 1🖕🏻: +44 7715 929714
┃★│ BC tatta 6🖕🏻: +92 313 4885399
┃★│ BC gashti🖕🏻🫦: +92 329 9539369
┃★╰────────────┈⊷
╰━━━━━━━━━━━━━━━┈⊷

╭━━〔 *Contact to the owner* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• If you have more scammers's number so contact me. I will add in my bot.
┃◈┃• Type .owner to get my number
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/YdSKMhv/6767.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363333032882285@newsletter',
                        newsletterName: '𝐒𝐇𝐄𝐈𝐊𝐇-𝐀𝐋𝐈-𝐌𝐃',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});