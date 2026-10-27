const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VVy5KiSBT9l9xitIACakRFNPhAfIEgKk70IoUEUp6VJAp2uJ/dLGZVi5pvrE+YwKrq6sV0Rw2ry4W859xzH/kdpBku0BzVYPAd5ASfIUWNSescgQFQSt9HBLSABykEAzBcMeYFTjf7bR/l03oqLy+OuRYnvW5bredHU7EJ65bSJOPXD+DWAnl5jLH7m4DXueUZuF645r7bX6/juelZROu3zeGESxA+oqLcKsw1HqeXB3BrIkJMcBqM8xAliMB4jmoDYvI5+oU81+fVRapHM447Hvgq6sg40TOubejihmGwEdIVE4jXsfs5+qvS0x6V3pIXipkUlvOLF4r2bMGJxhwWjqkn/s5hSgYrofxKv8BBijzNQynFtP607s6cLeuIaFabzjaGanPJPD4/QnffRc7C3u0rGkiqy6Y7W/sc8YDVBGcr9jKVUR+HqahY7f2KwZzA29XRVulweTph7BE1zX4mbpD3Xon+j+6OkS836iSv/OUJ+qc02o5OdgYzxzSiVOza1xF3GOnlIVc/SZ/LrEc6OtHjzPUDnyHVnpaMYDI+z186u8VuPNT3q1Mk1Zb9QR/SkvyO5SU+O6XcidjRZbVktJrLA29bzFEfFrwqsVq/v9Q3cahz/SSz7KU3DibGYZp4cX2udFqG+2k+lCNanuR2FNk8v51BQ5Ef7hlFqNY8MOBuLUBQgAtKIMVZ2vg6LQC9s4VcguhdXDDb6l5Z7qkxvhK1fTgqU1HY9EMymZvSxbKDaNdbiwuycFL2AbRATjIXFQXyprigGamXqChggAow+ONbC6Sooq9la8B6XKcFfEwKaqdlHmfQey/qj6/QdbMypVadusPGQAQM2A83ohSnQdHoWKaQuCE+o2EIaQEGPowL9CNDRJD35vtxujnlIQpxXDTbZM4UpLgo48VZD1euqsrjQB4GMvhAey/bqzDR9WiZwuOoUlbl9KLvzLFtbuF6OQz2qRjXMcaKuSmMQ3W6PPxHkGYDWGs9jM0gkFQ2rZ3FVgnxccMfObF30KohC9n2yuBFjSw8WVLTRe2sxbxYxem4s561BUtOfL86ce1lb8bzh5ydbA7xKHho0Dx0xi76GezoSE4gqGd/JU0OK+Xk7jTdjjT7cTkxuSFlz9erbxXKpLZIh+WMoTbWUxgkgjhjTt2xHaBpRx/htDK7Vb7fd0bOMWTl9WtDJfdOxh4YAF7oSmyv0xG6bGcgfC2+XJpywDz/kiIKWiC+/8WJHN/v8WJP6He7rDgQvjb+FkhhEwq8PD/99fL8z/PL89PfL89Pf77b4H144relhe+N1UA3rz5G9x3wFuVXIK/aNC3G3lo/HX1bJr8YSOWw5NkIwaC33hzD3iiOzMl4u4tGcjYRmNzNnSywbWnEu04P3G7fWiCPIfUzkoABgKlHsjs4ycqmZbXUz353tcmaNpQDq0k4hgWVP8ZggxNUUJjkYMBJ/Q7XZYVutwWSWs5zi0L6Pj5Abp7ZuAS3fwEHsw/DWQcAAA==",  // Your bot's session ID (keep it secure)
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "on", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "KHAN-MD",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Jᴀᴡᴀᴅ TᴇᴄʜX",           // Owner's name
    DEV: process.env.DEV || "923427582273",                     // Developer's contact number
    DEVELOPER_NUMBER: '923427582273@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/7zfdcq.jpg",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
};
        
