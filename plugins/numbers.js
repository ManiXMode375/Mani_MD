// plugins/numbers.js

const axios = require('axios');
const { cmd } = require("../command");
const config = require('../config');

const ALLOWED_GROUP = config.ALLOWED_GROUP || '120363402417860683@g.us';
const POLL_INTERVAL = 3000;
const watchers = new Map();

const FOOTER = `
────────────────────

> Powered By ManiMD Official`;

// ======================================================================
// 🌍 COUNTRY CODES + FLAGS
// ======================================================================
const COUNTRY_DATA = {
  "1":  { name: "United States", flag: "🇺🇸" },
  "7":  { name: "Russia / Kazakhstan", flag: "🇷🇺" },
  "20": { name: "Egypt", flag: "🇪🇬" },
  "27": { name: "South Africa", flag: "🇿🇦" },
  "30": { name: "Greece", flag: "🇬🇷" },
  "31": { name: "Netherlands", flag: "🇳🇱" },
  "33": { name: "France", flag: "🇫🇷" },
  "34": { name: "Spain", flag: "🇪🇸" },
  "36": { name: "Hungary", flag: "🇭🇺" },
  "39": { name: "Italy", flag: "🇮🇹" },
  "40": { name: "Romania", flag: "🇷🇴" },
  "41": { name: "Switzerland", flag: "🇨🇭" },
  "43": { name: "Austria", flag: "🇦🇹" },
  "44": { name: "United Kingdom", flag: "🇬🇧" },
  "45": { name: "Denmark", flag: "🇩🇰" },
  "46": { name: "Sweden", flag: "🇸🇪" },
  "47": { name: "Norway", flag: "🇳🇴" },
  "48": { name: "Poland", flag: "🇵🇱" },
  "49": { name: "Germany", flag: "🇩🇪" },
  "51": { name: "Peru", flag: "🇵🇪" },
  "52": { name: "Mexico", flag: "🇲🇽" },
  "53": { name: "Cuba", flag: "🇨🇺" },
  "54": { name: "Argentina", flag: "🇦🇷" },
  "55": { name: "Brazil", flag: "🇧🇷" },
  "56": { name: "Chile", flag: "🇨🇱" },
  "57": { name: "Colombia", flag: "🇨🇴" },
  "58": { name: "Venezuela", flag: "🇻🇪" },
  "60": { name: "Malaysia", flag: "🇲🇾" },
  "61": { name: "Australia", flag: "🇦🇺" },
  "62": { name: "Indonesia", flag: "🇮🇩" },
  "63": { name: "Philippines", flag: "🇵🇭" },
  "64": { name: "New Zealand", flag: "🇳🇿" },
  "65": { name: "Singapore", flag: "🇸🇬" },
  "66": { name: "Thailand", flag: "🇹🇭" },
  "81": { name: "Japan", flag: "🇯🇵" },
  "82": { name: "South Korea", flag: "🇰🇷" },
  "84": { name: "Vietnam", flag: "🇻🇳" },
  "86": { name: "China", flag: "🇨🇳" },
  "90": { name: "Turkey", flag: "🇹🇷" },
  "91": { name: "India", flag: "🇮🇳" },
  "92": { name: "Pakistan", flag: "🇵🇰" },
  "93": { name: "Afghanistan", flag: "🇦🇫" },
  "94": { name: "Sri Lanka", flag: "🇱🇰" },
  "95": { name: "Myanmar", flag: "🇲🇲" },
  "98": { name: "Iran", flag: "🇮🇷" }
};

// ======================================================================
// 🛰 PLATFORM DETECTION
// ======================================================================
function detectPlatform(msg) {
  const t = msg.toLowerCase();

  if (t.includes("telegram")) return "Telegram";
  if (t.includes("whatsapp")) return "WhatsApp";
  if (t.includes("facebook")) return "Facebook";
  if (t.includes("google")) return "Google";
  if (t.includes("instagram")) return "Instagram";
  if (t.includes("microsoft")) return "Microsoft";
  if (t.includes("twitter") || t.includes("x-")) return "Twitter / X";
  if (t.includes("amazon")) return "Amazon";
  if (t.includes("tiktok")) return "TikTok";
  if (t.includes("snapchat")) return "Snapchat";
  if (t.includes("paypal")) return "PayPal";
  if (t.includes("apple")) return "Apple";
  if (t.includes("discord")) return "Discord";
  if (t.includes("uber")) return "Uber";
  if (t.includes("gmail")) return "Gmail";
  if (t.includes("yahoo")) return "Yahoo";
  if (t.includes("linkedin")) return "LinkedIn";

  return "Unknown Service";
}

// ======================================================================
// 🔒 MASK NUMBER FUNCTION
// ======================================================================
function maskNumber(number) {
  const num = number.replace(/\D/g, "");
  if (num.length < 7) return num;
  const first = num.slice(0, 5);
  const last = num.slice(-3);
  return `${first}***${last}`;
}

// ======================================================================
// 📱 MAIN COMMAND: .numbers
// ======================================================================
cmd({
  pattern: 'numbers',
  desc: 'Get live numbers by country code',
  category: 'main',
  react: '📱',
  public: true,
  filename: __filename
}, async (Void, m, text, { args }) => {
  try {
    const countryCode = args[0]?.replace(/\D/g, "");
    if (!countryCode)
      return await m.reply("❌ Please provide a country code.\nExample: `.numbers 92`");

    const res = await axios.get("https://arslan-md-otp-api.vercel.app/api/numbers");

    const filtered = res.data?.data?.aaData?.filter(row => {
      const num = row[2]?.replace(/\D/g, "");
      return num?.startsWith(countryCode);
    }) || [];

    if (filtered.length === 0)
      return await m.reply(`❌ No numbers found for country code: ${countryCode}`);

    let msg = `📱 Live Numbers for +${countryCode}:\n\n`;
    filtered.forEach(n => {
      msg += `• ${n[2]} (${n[0]} - ${n[3]} - ${n[4]})\n`;
    });

    await Void.sendMessage(m.chat, { text: msg + FOOTER });

    if (m.chat === ALLOWED_GROUP && !watchers.has(m.chat))
      startWatcher(m.chat, Void);

  } catch (err) {
    console.error("Numbers error:", err);
    await m.reply("❌ Error fetching numbers.");
  }
});

// ======================================================================
// 🔄 OTP WATCHER
// ======================================================================
function startWatcher(groupId, Void) {
  if (watchers.has(groupId)) return;

  const seen = new Set();
  const interval = setInterval(async () => {
    try {
      const res = await axios.get("https://arslan-md-otp-api.vercel.app/api/sms?iDisplayLength=10000");
      const smsList = res.data?.data?.aaData?.map(r => ({
        id: `${r[2]}_${r[0]}`,
        phone: r[2],
        message: r[4],
        timestamp: r[0]
      })) || [];

      for (const sms of smsList) {
        if (seen.has(sms.id)) continue;
        seen.add(sms.id);

        const rawMsg = sms.message || "";
        const phone = sms.phone.replace(/\D/g, "");

        const cc = Object.keys(COUNTRY_DATA).find(c => phone.startsWith(c)) || "??";
        const country = COUNTRY_DATA[cc]?.name || "Unknown Country";
        const flag = COUNTRY_DATA[cc]?.flag || "🏳️";
        const platform = detectPlatform(rawMsg);
        const otp = rawMsg.match(/\d{4,8}/)?.[0] || "N/A";
        const masked = maskNumber(phone);
        const safeMsg = rawMsg.replace(/[^\w\s\.\-\_\:\@]/g, "");
        const time = new Date().toLocaleString();

        // 📩 FINAL OTP MESSAGE
        const msg = `
${flag} New ${country} ${platform} OTP Received

⏰ Time: ${time}
🌍 Country: ${country} ${flag}
🛰 Service: ${platform}
📞 Number: ${masked}
🔑 OTP: ${otp}

📨 Full-Message:
${safeMsg}
${FOOTER}`;

        await Void.sendMessage(groupId, { text: msg });
      }
    } catch (err) {
      console.error("Watcher error:", err);
    }
  }, POLL_INTERVAL);

  watchers.set(groupId, { interval, seen });
}
