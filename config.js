const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xqZSt4bTdURDhXYVhqSU5JZ0dRYmJaQTdPWGY5OVRtQUZBOU40cVFGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmQzSHpUMWk1eVg3KzRlbVRoU1ZHdkVrK09BcHdOK01pV291QmNzVlExVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZR3RRa0VxLy90NDR4OVhoRFJrY1NmMG1yeGdjUjBtNUNTTUkwZys1NEZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2Tll1OTFjWmRnMUFCQWZLQ0laZi9nbjUvWjZZYm9kNldXWHQ0VHJyVFNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitGOGpVTzFvcFRTUlhIK0pNVnQweHBGVit0TWVEbzNlYkJYTW9TQ3pjMmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVOa0F2TGNoYjJHQTJyeEtOUXorVzk3Rlh3d1JGSFRaR2Fab0ovdFRwQWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1BBSVlaYlluSUFBYlZPMCtjNXI5WDhUU1ZGMUM3cFh2a0taVUtWR2xIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNU1yZWNqMDUrRjVSeC92RWJrc1d2ZUdoYXFZYWttVnRuMHR1eVpDdlJIdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpwaldWcytPMDIyNklERytGejcxRGh2SUFEZUdxMWtrZkUxdHBMRFppZUFrVnRKWW1FRFpKaXFmeE9tVjBwY09NYlZBc0dLUlhwL09CaVkwQWRhK0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJoaXk1Z3c1MFBTenJhVFl6MDF6dkdwWkJ4aHVma0tuWU1yRlZEandiZlhrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwNDg0MzU2MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTk4Q0M5MDlENDJFQUQ4NDMyNkE4RDk2QUE1QUNBMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYzNDA0NTY2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhMHByQXNsMFRDT01IRjZSNkNDM0RnIiwicGhvbmVJZCI6ImZiMGQ0ZjIwLTdiOGItNGNkNC1hMTkxLTI4MTRiMmMyMTU4MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkZ2V2MWhMT1hURXhuMlF3RzF5cGRNRTYxOUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzJwK21MaHB0K3F3Ym5CaU91blI5by9KS2VjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRRVkU3OUhEIiwibWUiOnsiaWQiOiI5MjMzMDQ4NDM1NjE6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJMRUdFTkQiLCJsaWQiOiIxNDMyNDYzMDI5NDEzNTk6NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xXY3dOMEJFSWZXN2NnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjFaNFljOGVobUQwK2FhUURBUDRMV1VjSG4zdVRYdWZZbTlWQWd3a3pibm89IiwiYWNjb3VudFNpZ25hdHVyZSI6InlnRS9zTVZlNklsZFdDRERGYjFXZ25Ia0NURmQwK1JPZzBJbDNuUXhNdUREZDRiQnp1RHNQcXlwL2V3NjlQZ1haenp5aVg5UW02QTIxWlFoQ0xuRUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3TU9xUU9wVVY4OVVWNVJWcWpqenVYRU9qaHZIZDhETzgyV2ZCZzFQUkdiSEJlV3VESnhCbjg2aEhhUkdyNS9rWUdrZm9vZS9KdEFtd2dUSFBVOUZDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMwNDg0MzU2MTo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRXZUdIUEhvWmc5UG1ta0F3RCtDMWxIQjU5N2sxN24ySnZWUUlNSk0yNTYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUWdJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MzQwNDU2NCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCRFAifQ==",
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
