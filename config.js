const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUp5UHEvTkFnRmlidXg1cFlSc0J5cjg5RU13UHdiUFBmdHJsdkNKazdtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXRudDZ6bFErUE9adGNVK1Qwc2FvZFZFTndCcDNkaG5aVUsrUHR4RVFDVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRlpjM2w1Z21RZDkvYlBqVVNnNHdJRFBSQVJwK2dYMnVlREVuK3loN1cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6UHd4NjNkWXVZODhkV2tjekVzbXc4M213MG4yWml2SE5rYmcvS29qU1hRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNIajRteXZQYXQvTm9MMDc5STlJeTgyb2ltRmgyWkI0S1BFMzJaS0hkSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1nQUVKWnhhbWNLSGRxUzJidERjMDJrRjljUStPcGp3bWYzb2dVaU5neDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0dSdlBKd0JJQUw0dmdwK21IRjRSNjVrU3VnaExuVlRXekpTY2dNWEptRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjB5ZkhIZXpROHUrYmtQdnNWbnZ0RnhSenZ6bEVDTksxcTVtVlFSdWFYST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJDbmhVa3c5OForWjJFN2lCRkp1NnZ4Yyt6ZnZWdysxMFNKTHJkSmZ0bnNVQ0VweG1ab1V0aGdxbU9QbTdNaFQwUE9KVm1tYUR0N0FIVjRkV1NiakNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6IlcxS2FyS1FpaTBVNEQ2SjA4Q1htRllXaUFBTTd1ZGdIWGlONkZXZmI3WG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Il9VMHQ0Q2tOVHF1a3BERC1UMFlBRFEiLCJwaG9uZUlkIjoiYjFlZGYxNGYtYmVhZC00YzNmLTg2ZjUtYzBlZWQyMzkyYzI1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNSWitZMjkwU2NBVTlPNkZOZEhnd2NBeTk2az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUGhnalY2a2pLSjd1VGxCV3prZUZpcFNDVms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWEQ3NlNIVjciLCJtZSI6eyJpZCI6IjkyMzMwNDg0MzU2MTo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkxFR0VORCIsImxpZCI6IjE0MzI0NjMwMjk0MTM1OTo5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHFjd04wQkVNTEYvY2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMVo0WWM4ZWhtRDArYWFRREFQNExXVWNIbjN1VFh1ZlltOVZBZ3dremJubz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMjhKYmJOdUY3ZThIS3ppeGZPRFc2V0dqVExQbFMvY2ZPcXYvOGxTZjBaRGFqYkhOcDRtUVk2Tzl3REwrK0xYUzM4MWJMKzZBNUwyMDAyQUJSczBMREE9PSIsImRldmljZVNpZ25hdHVyZSI6Iml4OEViTXpVSjNlTnl0OXdneCtsVHE3VjdzTEhpWEkvenEvRXRBaXhGaUVNREZOZ2FGUWJPR3VRUEk5L2tJaldtRWpFdm5yUE1PV1JoYWxBM2F2T0JRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzA0ODQzNTYxOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZFdlR0hQSG9aZzlQbW1rQXdEK0MxbEhCNTk3azE3bjJKdlZRSU1KTTI1NiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYzNjY0NTkxLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpJZyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Rolex MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝙍𝙤𝙡𝙚𝙭 𝙓 𝙈𝘿",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Rolex X MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "201116400502",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*𝙍𝙤𝙡𝙚𝙭 𝙓 𝙈𝘿*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ManiMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/VpWpLYgC/tourl-1763379935053.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "201116400502",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
