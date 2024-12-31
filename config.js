const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXZOiOBT9L3nVGREUxKquWkRUUPwARXBrHiIESMuXJIDQ5X/fQrur+2FntpenVELOPTnn3PsGkhQTtEQ1GL+BLMclpKhd0jpDYAwmhe+jHHSBBykEY2DORaNfdux9bi0YfqVWtl9ppXVojCgz0sTgOqTH9Pjd2SYv4N4FWXGOsPsHQIPOezu73wyi2y64+Y5mv8qkzh24Wy3ScDFhquNWC5obnhxewL1FhDjHSaBkIYpRDqMlqrcQ59+kL9Mzw58OfuikaLYLokreFWaxmmkXebWLz9NDRsx8Eg6Pwffoa+xrciDldmMZMxGHdgdqo4FgwmU43eh7TqPyVaTybkqD4Emf4CBBnuqhhGJaf1t3V1bWzc1hdzwKEt1u+qktnAz1hlUa1OuTVS06KG/SfaaMvkc8FJaZH+3XthOVirm48HN3G5plPhStTW25Va0KxqZUSSMpX4lv84+sXP6P7vFytTUveM4v6gNeJ4F6Jo5RJAv7tAiO8bmPlm6oXydapejfo+8kem8XhIl8mGwtizGGi2ayiW7SoIYB4QvXFiLkTrn61Oif9CEt8j+x7J2ag2OKhVkN4dAIO8aFD450Qa2rPfSPshnnipniSwX7EpkwrkI17eQs1Sssagi1xkn8wyRah+EtCXWuI5XorJHX4OXxoguqVQ+M+/cuyFGACc0hxWny2BO6AHqlidwc0Ye6QHHNAvWXs3Wn0tk6jPVZM6orBRnNcTS4smvfahS8TrR+6LyALsjy1EWEIG+BCU3zWkeEwAARMP77Vxck6EafvrXV+H4X+Dgn9JAUWZRC78PUj0PoummRULNOXLldoByMmc9tRClOAtLKWCQwd0NcIjmElICxDyOC7l3goRK7qMUDelM4Zc4fdxouY2tw2nIavw5aymGaPH8R2JHAn3n2hz8YCD8GrMD8gPzZ+yFCkXM9nxVFOAJdgN9bpr3zWwfZK+moCB3E7GZPjhuDaco9TpqY9Q4PF57Soxx5YEzzAnXBGbqXItunF5T8ATefl7LYhCfmciWLtRbNTvsLA62J2qhfcJ+WgvHb55iSU6/F24vzIy+eTqAL4kcCcftydsiKjNAX+rzIjPt/kZ9VqyPMsp8Joi3su+btBQ9RiCMCxkBWV5BbMzNls3CZFZnPJSWQ5EACnx59ZP0Zpt5o61+lYrhe1f3yrFs6RfPLMFVvrhIUUl5l0XI3RWnckd2XfwEBY1ChNZLkmJaBmvfkpdjhy9lBt9koY199VZPE7UxD8UIx0vWIcW7+HC9Dlhytk5JBVi8xcxUuZrXDk5W/lJb21BM2Pbl6aas9s/K1mEWdoAp0azAw+fjVNhA3bTokW7ilPignELHlq+ps/RmnUau6iJVvlcqNEzJLPGWqctRsh0lMvcft9SLZmrtEqrD/Kj278DEFovfpix8N8vaeLB+jxzBLYOvQf3jzNePMvfsF4n06/iZHE7835fhgVezNET2zzWy/ssNsA2XdnqirYDlansyLxF21MkjA/f6rC7IIUj/NYzAGMPHyFHugCyJIqPTZpnscI0JhnLWzhBvyvMD1B10Q11KWmRTSj+4GUvutaAHu/wACp8E5+AcAAA==',
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

