const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVy46jRhT9l9ranQY/AFtqKeAX2MYYDMb2aBZlKKD8AEwVz5Z/IlI0v5DMOst8yGznTyLsbnUvMpOOxKJUFOeeOueeyzMII0zQDJWg/wziBGeQonpJyxiBPpBSz0MJaAIXUgj6AIkp3uPR1pH99mRGuYoGl9znzZRKnJ1oME5cl5/qdrhRnsC1CeJ0f8LOTwAJwzMrd8MbsTSRZ5VgmI1txXcbwaMzQy2B9C49MQr5YlBtn8C1RoQ4waE/igN0Rgk8zVC5hDj5GH2otSwLXbJyftAUHk2WXWmIpnuSL7OxdG4QLQ2NON+58Vj/GP0BnTO+6Z9LZ5/GBhtoVhk60QJHB11qNYTxdHt5lA75RhCVO32C/RC5iotCimn5Yd2JaG9kcdxGXI72m/JiL6HJ8cWWm4TDUtCdnca6Bm+fSHv7MeIa18MdG3XEdLBTMotRs4itDj3rfJgcdgJzbvtQNgKiTHL1PfFl8torx/+juzPdVQ6JW7a78ip8KdcFGWb7cbCZ6kO/ikb+/sKW6tg1j52P0S+S5WQ4Z1bdecAuGGiMt8p4qxXnSkf7jLeSVK5CcZ6pVvsdfUjT5Gcs80fujEfR7sC3mells3ushnLBje3KlJjUntimPLeEdW7u5nq08UZsVMjwJJLLTJHccS/wHKk0p/zBinnaNsrHSeFm7jB/ut3oiErFBX322gQJ8jGhCaQ4Cm97Hb4JoJutkJMgepMXLOFIHAhikuNFEBxogzOXbX3jzYuetnkUzWQ79neneO95xfYJNEGcRA4iBLkyJjRKShURAn1EQP/T5yYIUUHvxtXl2mwTeDgh1ArT+BRB99XV15fQcaI0pKsydAb1AiWgz7xtI0px6JNaxzSEiRPgDA0CSAnoe/BE0LUJXJRhB9V4AOpdfqQuOsYZR5oZdvwpvx6LNeUgCu9HGK/V8/be/oFBbfTQQRA+CE4XPbAcclkPCT2ehaAJ8Etm6m9+aGHW2uSl2BqV+VhsaOZWC8ajGfENxfBvNty1RwlyQZ8mKWqCPXSOaWxGRxT+BFd1jxdN54v8kFQVOQxJXnVtaS3zR/Ud7t1T0H9+m1ODyK3xdmxHtqe8DZrgfGtBXN+81W31GJ5p8XyX6/PMr+SXvBYSxvEvIaKgCUJYnwaz77///f3Ln/Xz21fl+5evn9T021/iBX/7YyZ+ruu/mFMju4hCfCL1cJpr+PGiSiMF7yqeTCYi8cWBX6v/auZrKu5dF2xyoYVkq9sJbEXq0Z06EQvsZOVjqo5Ka8Uep3zniPj50Xn6FxDQB73CRkYmlhbB+fwwGOUHizPild5WGb0rNBbtdBkzrOIJkpA3pnRHMdujwVA+LfyRNgslVpX4tVGUUjEUYWOqhN6Ek/Snutq9qd4Xa+WpJsqdSJ+WpWhs1Ch1G8u4PeRgIlV+sTx3Okk+4obzCMdcNnH0dtcp0/Ustqzt0J43XBw1Am2VK86SXXRDsiQnNNDveb3Ni9PLnMa3JD2/tKCH0W3svZjznya+pYG5Nt9hvAzSH3SctF0Ly0UYsBpS1lj09rYp+eo2nAsZf5DU04juBqgxldOyK4Pr9XMTxCdIvSg517+L876OzAkSKr6l2cRnRCg8x6DP8u0u12m1uNb1H7YMzEgDCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "mushaqibka",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "2520907027756",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '1' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

