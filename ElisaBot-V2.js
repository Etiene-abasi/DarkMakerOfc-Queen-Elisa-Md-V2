require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const maker = require('mumaker')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nimadl = require('xfarr-api')
const Language = require('./language')
const Lang = Language.getString('elisabot')
//const config = require("./config")
const TIME_ZONE = global.TIME_ZONE
const MENU_IMOJI = global.MENU_IMOJI
  const M_E = MENU_IMOJI.split('|')[0]
  const D_E = MENU_IMOJI.split('|')[1]
const HELPERS = '94716338723,94711421243,94719574492'
global.ALL_LINK_KICK = global.ALL_LINK_KICK 
const SEX_DL = global.SEX_VIDEO_DOWNLOAD
//global.SUDO = ["94711421243","94716221644","94716338723","94723043748"]
var LOGO_MAKING = ''
  if (global.LANG == 'EN') LOGO_MAKING = '*🌈 Take a moment to createing your textlogo...*'
  if (global.LANG == 'SI') LOGO_MAKING = '*🌈 මදක් රැදීසිටින්න ඔබගේ textlogo සෑදමින් පවතී...*'

var NOT_FOUND = ''
  if (global.LANG == 'EN') NOT_FOUND = '```🚫💬 I CAN\'T FIND ANYTHING !```'
  if (global.LANG == 'SI') NOT_FOUND = '```🚫💬 මට කිසිවක් සොයාගත නොහැකිවිය !```'
var FILE_DOWNLOAD = ''
var FILE_UPLOAD = ''
   if (global.LANG == 'EN') FILE_DOWNLOAD = '*📥 DOWNLOADING YOUR FILE...*'
   if (global.LANG == 'EN') FILE_UPLOAD =  '*📤 UPLOADING YOUR FILE...*'
   if (global.LANG == 'SI') FILE_DOWNLOAD = '*📥 ඔබගේ ගොනුව බාගතකරමින් පවති...*'
   if (global.LANG == 'SI') FILE_UPLOAD = '*📤 ඔබගේ ගොනුව එවමින් පවතී...*'

const BOT_VERSION = '3.5.0'

//rpg function\\
const { 
     cekHUNTInventoryAdaAtauGak, 
      addHhunting,  
       addHBesi, 
       addHEmas, 
       addHEmerald,
       addHUmpan,
       addHPotion,
       kurangHBesi, 
       kurangHEmas, 
       kurangHEmerald, 
       kurangHUmpan,
       kurangHPotion,
       getHBesi, 
      getHEmas, 
     getHEmerald,
     getHUmpan,
    getHPotion
   } = require('./database/user/hun_ing.js')
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./database/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./database/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./database/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./database/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./database/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const isHunt = cekHUNTInventoryAdaAtauGak(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./database/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./database/user/darah.json'))

//Database\\
let sticker = JSON.parse(fs.readFileSync('./database/sticker.json'));
let audio = JSON.parse(fs.readFileSync('./database/voice.json'));
///let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
//let videox = JSON.parse(fs.readFileSync('./database/video.json'))


//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
const prefa = '.'
module.exports = ElisaBotMd = async (ElisaBotMd, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ElisaBotMd.decodeJid(ElisaBotMd.user.id)
    	const nimanumber = "94719574492"
    	const nimanumber2 = "94715166712"
    	const pasiduu = "94716338723"
    	const isuruu = "94716221644"
    	const thinuraa = "94711421243"
        const isCreator = [pasiduu,isuruu,thinuraa,nimanumber2,botNumber,nimanumber ,...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isNima = m.sender == "94715166712@s.whatsapp.net" ? true : false
        const itsMe = m.sender == botNumber ? true : false
        const isXnxxGrp = m.chat == "120363043146209271@g.us" ? true : false 
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)
	    const llog0 = await getBuffer('https://telegra.ph/file/c020c561957a1824371af.jpg')

        //group\\
        const groupMetadata = m.isGroup ? await ElisaBotMd.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    	//const databn = global.owner+'@s.whatsapp.net'
	    
        //member\\
        	
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('welcome' in chats)) chats.welcome = false
                if (!('welcome_message' in chats)) chats.welcome_message = ''
                if (!('welcome_image' in chats)) chats.welcome_image = ''
                if (!('goodbye_message' in chats)) chats.goodbye_message = ''
                if (!('goodbye_image' in chats)) chats.goodbye_image = ''
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                welcome: false ,
                welcome_message : '' ,
                welcome_image : '',
                goodbye_message : '',
                goodbye_image : ''
                
            }
		
	  let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
		if (!('kickmessage' in setting)) setting.kickmessage = ''
		    if (!('addmessage' in setting)) setting.addmessage = ''
		    if (!('promotemessage' in setting)) setting.promotemessage = ''
		    if (!('demotemessage' in setting)) setting.demotemessage = ''
		    if (!('blockmessage' in setting)) setting.blockmessage = ''
		    if (!('unblockmessage' in setting)) setting.unblockmessage = ''
		    
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		alive : false,
		autobio: true,
		kickmessage : '' ,
        addmessage : '' ,
	    promotemessage : '',
		demotemessage : '' ,
		blockmessage : '' ,
		unblockmessage : ''
	    }
	  /*  let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
		alive : '',
	    }*/
	   
	    
        } catch (err) {
            console.error(err)
        }

        

// Block Chat 
/*const Block_chat = JSON.parse(fs.readFileSync('./database/block_chat.json'))
//const chatt = m.chat
for (any in Block_chat){
if (m.chat === any ) return
//if (m.chat.startsWith(any)) 
}
*/

// FAKE REPLYSSSS

const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.botnma}`,
"h": `${global.ownernma}`,
'seconds': '30', 
'caption': `${global.ownernma}`,
'jpegThumbnail': llog0
}
}
}

const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": 'https://telegra.ph/file/c020c561957a1824371af.jpg' //The picture
},
"title": `Queen Elisa Whatsapp Bot`, 
"description": `✨ Please give me a one start Bro`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `ᴍͥ ʀ ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ɴ ɪͣ ᴍͫ ᴀ ⁴⁹²`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
} 

const fakestatus = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "imageMessage": {
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
            "mimetype": "image/jpeg",
            "caption": `${global.ownernma}`,
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
            "fileLength": "28777",
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": "1610993486",
            "jpegThumbnail": llog0,
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
    }
}

                          const replay = (teks) => {
                               ElisaBotMd.sendMessage(m.chat, { text : teks } ,{ quoted: fvideo })  
                               }
                          const sendlogo = (teks) => {
                               ElisaBotMd.sendMessage(m.chat, { text : teks } ,{ quoted: fvideo })  
                              }
                          const reply = (teks) => {
           ElisaBotMd.sendMessage(m.chat, { text : teks } ,{ quoted: fvideo })  
}
const reply2 = (teks) => {
    ElisaBotMd.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "QUEEN ELISA V2",mediaType: 3, renderLargerThumbnail: true, showAdAttribution: true, detectLinks: true,body: "MR NIMA OFC", thumbnail: fs.readFileSync('./Elisa.jpg'),sourceUrl: ("https://youtube.com/MRNIMAOFC")}}})
}
const reply3 = (teks) => {
    //J_NIMA = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')
     ElisaBotMd.sendMessage(m.chat, { text : teks } ,{ quoted: ftoko })  
}
const m_reply = (teks) => {
                               ElisaBotMd.sendMessage(m.chat, { text : teks } ,{ quoted: m })  
                               }
	     
	          if (m.sender == '94719574492@s.whatsapp.net') {
                const nimareact = ["👨‍💻","✅","👸","🥷"]
                var mask = nimareact[Math.floor(Math.random()*nimareact.length)]
                await ElisaBotMd.sendMessage(from, { react: { text: `${mask}`, key: m.key }})
      }
      if (db.data.chats[m.chat].block_from && !isCreator ) {
      return
      }

        	if (m.chat === '120363043491784571@g.us') {
				  return
				  }
	  /*	if (m.chat === '94719574492-1634878051@g.us') {
                 return
		}
		if (m.chat === '120363052773472047@g.us') {
                 return
		}*/
				  //120363052773472047@g.us
        //Public & Self\\
        if (!ElisaBotMd.public) {
            if (!m.key.fromMe) return
        }

// Push Massage consele and Costem read \\\
if (m.message) {
 if (global.REAT_MASSAGE == 'true'){
            ElisaBotMd.readMessages([m.key])
          }
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }	    

      

	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	if (global.db.data.settings[botNumber].autobio && global.AUTO_BIO == 'on') {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		
		const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
           var utch = new Date().toLocaleDateString( get_localized_date)
           var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Colombo' }).split(' ')[1]
           const biography = '📅 ' + utch + '\n⌚ ' + time + '\n\n'+ElisaBotMd.user.name

      
		await ElisaBotMd.setStatus(biography)
		setting.status = new Date() * 1
	    }
	}

	   
/// AUTO STICKER COSTEM SEND \\\

for (let anji of sticker){
				if (budy.toLowerCase() === anji){
					result = fs.readFileSync(`./Media/sticker/${anji}.webp`)
					ElisaBotMd.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
for (let anju of audio){
				if (budy.toLowerCase() === anju){
					result = fs.readFileSync(`./Media/audio/${anju}.mp3`)
					ElisaBotMd.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			
			
/// AUTO REPLY MASSAGE \\\
const auto_reply_msg = JSON.parse(fs.readFileSync('./database/autoreply.json'))
const resevmsg = auto_reply_msg.massage
const sendmsg = auto_reply_msg.reply_massage
         for (any in resevmsg){
         if (budy.toLowerCase().startsWith(resevmsg[any])) {
         imoji = sendmsg[any]
m_reply(imoji)
}
}


      /// AUTO REPLY VIDEO \\\
          // AUTO REACt//
      
      if (m.sender == '94706258885@s.whatsapp.net') {
    //  await ElisaBotMd.sendMessage(from, { react: { text: `♥️`, key: m.key }})
      //await ElisaBotMd.sendMessage(from, { react: { text: `🙂️`, key: m.key }})
     // await ElisaBotMd.sendMessage(from, { react: { text: `️🥀`, key: m.key }})
      await ElisaBotMd.sendMessage(from, { react: { text: `💟️`, key: m.key }})
      
      }
      if (m.sender == '94713742435@s.whatsapp.net') {
      await ElisaBotMd.sendMessage(from, { react: { text: `🖤`, key: m.key }})
      }
      if (m.sender == '94764440407@s.whatsapp.net') {
      await ElisaBotMd.sendMessage(from, { react: { text: `🤍`, key: m.key }})
      }
      if (m.sender == '94716221644@s.whatsapp.net') {
      await ElisaBotMd.sendMessage(from, { react: { text: `⚕️`, key: m.key }})
      }
      if (m.sender == '94701629707@s.whatsapp.net') {
      await ElisaBotMd.sendMessage(from, { react: { text: `🐋`, key: m.key }})
      }
      if (m.sender == '94716338723@s.whatsapp.net') {
      await ElisaBotMd.sendMessage(from, { react: { text: `🧜‍♂`, key: m.key }})
      }
      if (m.sender == '94711421243@s.whatsapp.net') {
      await ElisaBotMd.sendMessage(from, { react: { text: `⚜️`, key: m.key }})
      }
      if (m.sender == '94715166712@s.whatsapp.net') {
      await ElisaBotMd.sendMessage(from, { react: { text: `🗿`, key: m.key }})
      }
	
	  //antilink\\
        if (global.antilink == 'true' && m.isGroup && db.data.chats[m.chat].antilink ) {
        if (budy.match(`chat.whatsapp.com`)) {
       // reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return 
        let gclink = (`https://chat.whatsapp.com/`+await ElisaBotMd.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return
        if (isAdmins) return 
        if (isCreator) return 
        await ElisaBotMd.sendText(m.chat,` 
      *『  ʟ ɪ ɴ ᴋ   ᴅ ᴇ ᴛ ᴇ ᴄ ᴛ ᴇ ᴅ  』*
`)
      // await ElisaBotMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       await ElisaBotMd.sendMessage(m.chat, { delete: m.key })
        }
        }

  if (global.DEL_RASH == 'true'){
  if (m.sender == '94702695534@s.whatsapp.net') await ElisaBotMd.sendMessage(m.chat, { delete: m.key })
  }
        
/*                
                        
//? ALL LINK REMOVE \\\
    if(global.ALL_LINK_KICK == 'true' && m.isGroup && !isAdmins && !iscreator) {
        if (budy.match('http://')) {
        await ElisaBotMd.sendText(m.chat,` 
      *『  ʟ ɪ ɴ ᴋ   ᴅ ᴇ ᴛ ᴇ ᴄ ᴛ ᴇ ᴅ  』*
`,m,)
        await ElisaBotMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       
        }else{
        (budy.match('https://')){
        await ElisaBotMd.sendText(m.chat,` 
      *『  ʟ ɪ ɴ ᴋ   ᴅ ᴇ ᴛ ᴇ ᴄ ᴛ ᴇ ᴅ  』*
`)
        await ElisaBotMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       
        }
        }
        }
        
  if (global.ANTI_BAD == 'true' && !m.isGroup && !isAdmins && !iscreator){
 for (any in bad){
         if (budy.toLowerCase().includes(bad[any])){
         if (!isBotAdmins) return 
        // if (isCreator) return
         await ElisaBotMd.sendMessage(from, { react: { text: `🤬`, key: m.key }})
         await ElisaBotMd.sendText(m.chat,'*Bad word detect !*')
         await ElisaBotMd.groupParticipantsUpdate(m.chat,[m.sender], 'remove')
         }}}*/
        
         //212 BLOCK \\
       if (m.sender.startsWith("212") && !m.isGroup && global.NUMBER_212_BLOCK == 'true') {
ElisaBotMd.sendMessage(from, { react: { text: `📛`, key: m.key }})
ElisaBotMd.updateBlockStatus(m.sender,'block')
            
            }
// AUTO MASSAGE REPLY REACT🐣

     if (global.AUTO_REACT == 'true' ) {
		//const sudoo = HELPERS.split(',')
		const Sudooo = [HELPERS].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		if (Sudooo){
		await ElisaBotMd.sendMessage(from, { react: { text: `👻`, key: m.key }})
         
		}
		if (m.sender == `${global.owner}@s.whatsapp.net`) {
				  await ElisaBotMd.sendMessage(from, { react: { text: global.OWNER_REACT , key: m.key }})
				 }		 
         if (budy.match(`🥲`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `😙`, key: m.key }})
         }
           if (budy.match(`😹`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `😹`, key: m.key }})
         }
           if (budy.match(`😂`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `😹`, key: m.key }})
         }
           if (budy.match(`🤣`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `😂`, key: m.key }})
         }
           if (budy.match(`🥰`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `😍`, key: m.key }})
         }
           if (budy.match(`😍`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `😇`, key: m.key }})
         }
           if (budy.match(`🤗`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `🤗`, key: m.key }})
         }
           if (budy.match(`🙂`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `😔`, key: m.key }})
         }
           if (budy.match(`😇`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `😇`, key: m.key }})
         }
           if (budy.match(`😙`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `🌝`, key: m.key }})
         }
           if (budy.match(`😪`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `😪`, key: m.key }})
         }
           if (budy.match(`😔`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `😔`, key: m.key }})
         }
           if (budy.match(`paka`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `🍆`, key: m.key }})
         }
           if (budy.match(`nima`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `👻`, key: m.key }})
         }
           if (budy.match(`❤`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `💞`, key: m.key }})
         }
           if (budy.match(`🌝`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `🌚`, key: m.key }})
         }
           if (budy.match(`🌚`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `🌝`, key: m.key }})
         }
           if (budy.match(`🤨`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `😮‍💨`, key: m.key }})
         }
           if (budy.match(`😒`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `🙄`, key: m.key }})
         }
           if (budy.match(`🤗`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `👀`, key: m.key }})
         }
         if (budy.match(`sex`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `🧐`, key: m.key }})
         }
         if (budy.match(`ima`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `🐼`, key: m.key }})
         }
         if (budy.match(`rash`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `🦄`, key: m.key }})
         }
         if (budy.match(`vish`)) {
         await ElisaBotMd.sendMessage(from, { react: { text: `🦚`, key: m.key }})
         }
         const reactimoji = ["🌍","🐼","😎","🥺","😳","😲","😯","😥","😱","😭","😖","😈","📥","😀","😃","😄","😁","😆","🥹","😅","☺","️😊","🙃","😉","😌","🤓","💦","🥸","🤩","🥳","😕","😖","😩","🥺","🖤","💔","❤️‍🔥","❤️‍🩹","💋","😤","🤬","🥵","🥶","😶","🤡","😐","😯","😮","🥱","😪","😵","😵‍💫","🙈","👺","💩","👻","💀","☠️","👾","😺","😸","😹","😻","😼","😽","🙀","😾","🫶","🤲","🫵","👍","🫳","👉","🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐻‍❄","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🌙","🍆","🍊","🥎","🧡","💟","💘","🇱🇰","🫂","👀","🪀","⚽","🧘‍♀️","✈️","🎡","⛲","🎠","⛱️","Hi","morning","night","gm","gn","😘","🤤","💪","🙏","👋","😊","🖕","🌼","🌸","🍑","ok","elisa","Elisa" ]
         const repkyreact = ["🌍","🐼","😎","🥺","😳","😲","😯","😥","😱","🤧","😖","😈","😶‍🌫️","😀","😃","😄","😁","😆","🥹","😅","☺","️😊","🙃","😉","😌","🦁","💥","🥸","🤩","🥳","😕","😖","😩","🥺","🤍","💔","❤️‍🔥","❤️‍🩹","💋","😤","🤬","🥵","🥶","😶","🤡","😐","😯","😮","🥱","😪","😵","😵‍💫","🙊","👺","💩","👻","💀","☠️","👾","😺","😸","😹","😻","😼","😽","🙀","😾","🫶","🤲","🫵","👍","🫳","👉","🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐻‍❄","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🌙","🍆","🍊","🥎","🧡","💟","💘","🇱🇰","🫂","👀","🪀","⚽","🧘‍♀️","✈️","🎡","⛲","🎠","⛱️","👋","⛅","🌌","🌄","🌙","😘","🤤","💪","🙏","👋","😊","🖕","🌼","🌸","🍑","✌️","👸","👸"]
         for (any in reactimoji){
         if (budy.toLowerCase().includes(reactimoji[any])) {
         imoji = repkyreact[any]
//await ElisaBotMd.sendText(m.chat, imoji )
         await ElisaBotMd.sendMessage(from, { react: { text: imoji, key: m.key }})
}
}
         
				 
         }
        /* const blockk = JSON.parse(fs.readFileSync('./database/Desable_chats.json'))
         for (any in blockk ){
         if (m.chat === any) return
         reply('Block chat')
         }*/
         
///  ANTI BAD WORDS
         if (global.ANTI_BADWORD == 'true' && m.isGroup && !isAdmins && !isCreator) {
         
         const bad = JSON.parse(fs.readFileSync('./database/BAD_WORD.json'))
         //await fetchJson(`https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/BADWORD.json`)
         for (any in bad){
         if (budy.toLowerCase().includes(bad[any])){
         if (!isBotAdmins) return 
        // if (isCreator) return
         //await ElisaBotMd.sendMessage(from, { react: { text: `🤬`, key: m.key }})
         await ElisaBotMd.sendMessage(m.chat, { delete: m.key })
         await ElisaBotMd.sendText(m.chat,`*@${m.sender.split("@")[0]} Bot Owner is Activated Anti Bad Words*`)
         //await ElisaBotMd.groupParticipantsUpdate(m.chat,[m.sender], 'remove')
         }}}

     
				  
				  if (!m.isGroup && global.INBOX_BLOCK == 'on') {  
				  if (!isCreator) {
				  await ElisaBotMd.sendText (m.chat, global.INBOX_BLOCK_MSG )
				  await sleep(8000)
				  return await ElisaBotMd.updateBlockStatus(m.sender, 'block')
				  }
				  }	

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
      
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: ElisaBotMd.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, ElisaBotMd.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        ElisaBotMd.ev.emit('messages.upsert', msg)
        }
	    
/*	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            ElisaBotMd.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await ElisaBotMd.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await ElisaBotMd.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    ElisaBotMd.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ElisaBotMd.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ElisaBotMd.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) ElisaBotMd.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ElisaBotMd.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ElisaBotMd.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) ElisaBotMd.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) ElisaBotMd.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ElisaBotMd.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
*/	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        if (m.isGroup) {
      if (!isInventoryLimit){addInventoriLimit(m.sender)}
      addLimit(m.sender, 1 )
      }
      
///  ANIME RANDOM
const akira = JSON.parse(fs.readFileSync('./database/Anime/akira.json'))
const ana = JSON.parse(fs.readFileSync('./database/Anime/ana.json'))
const asuna = JSON.parse(fs.readFileSync('./database/Anime/asuna.json'))
const ayuzawa = JSON.parse(fs.readFileSync('./database/Anime/ayuzawa.json'))
const boruto = JSON.parse(fs.readFileSync('./database/Anime/boruto.json'))
const elaina = JSON.parse(fs.readFileSync('./database/Anime/elaina.json'))
const emilia = JSON.parse(fs.readFileSync('./database/Anime/emilia.json'))
const erza = JSON.parse(fs.readFileSync('./database/Anime/erza.json'))
const gremory = JSON.parse(fs.readFileSync('./database/Anime/gremory.json'))
const inori = JSON.parse(fs.readFileSync('./database/Anime/inori.json'))
const kaga = JSON.parse(fs.readFileSync('./database/Anime/kaga.json'))
const kaori = JSON.parse(fs.readFileSync('./database/Anime/kaori.json'))
const kurumi = JSON.parse(fs.readFileSync('./database/Anime/kurumi.json'))
const loli = JSON.parse(fs.readFileSync('./database/Anime/loli.json'))
const madara = JSON.parse(fs.readFileSync('./database/Anime/madara.json'))
const mikasa = JSON.parse(fs.readFileSync('./database/Anime/mikasa.json'))
const miku = JSON.parse(fs.readFileSync('./database/Anime/miku.json'))
const naruto = JSON.parse(fs.readFileSync('./database/Anime/naruto.json'))
const nezuko = JSON.parse(fs.readFileSync('./database/Anime/nezuko.json'))
const rize = JSON.parse(fs.readFileSync('./database/Anime/rize.json'))
const sakura = JSON.parse(fs.readFileSync('./database/Anime/sakura.json'))
const sasuke = JSON.parse(fs.readFileSync('./database/Anime/sasuke.json'))
const shina = JSON.parse(fs.readFileSync('./database/Anime/shina.json'))
const shinka = JSON.parse(fs.readFileSync('./database/Anime/shinka.json'))
const shota = JSON.parse(fs.readFileSync('./database/Anime/shota.json'))
const waifu = JSON.parse(fs.readFileSync('./database/Anime/waifu.json'))
const yuki = JSON.parse(fs.readFileSync('./database/Anime/yuki.json'))



switch(command) {
case 'akira' : {
    var img = akira[Math.floor(Math.random() * akira.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break

   
case 'ana' : {
   var img = ana[Math.floor(Math.random() * ana.length)]  
   ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
   }
break


case 'asuna' : {
    var img = asuna[Math.floor(Math.random() * asuna.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'ayuzawa' : {
    var img = ayuzawa[Math.floor(Math.random() * ayuzawa.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'boruto' : {
    var img = boruto[Math.floor(Math.random() * boruto.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'elaina' : {
    var img = elaina[Math.floor(Math.random() * elaina.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'emilia' : {
    var img = emilia[Math.floor(Math.random() * emilia.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'erza' : {
    var img = erza[Math.floor(Math.random() * erza.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'gremory' : {
    var img = gremory[Math.floor(Math.random() * gremory.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'inori' : {
    var img = inori[Math.floor(Math.random() * inori.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'kaga' : {
    var img = kaga[Math.floor(Math.random() * kaga.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'kaori' : {
    var img = kaori[Math.floor(Math.random() * kaori.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'kurumi' : {
    var img = kurumi[Math.floor(Math.random() * kurumi.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'loli' : {
    var img = loli[Math.floor(Math.random() * loli.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'madara' : {
    var img = madara[Math.floor(Math.random() * madara.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'mikasa' : {
    var img = mikasa[Math.floor(Math.random() * mikasa.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'miku' : {
    var img = miku[Math.floor(Math.random() * miku.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'naturo' : {
    var img = naturo[Math.floor(Math.random() * naturo.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'nezuko' : {
    var img = nezuko[Math.floor(Math.random() * nezuko.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break

case 'rize' : {
    var img = rize[Math.floor(Math.random() * rize.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'sakura' : {
    var img = sakura[Math.floor(Math.random() * sakura.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'sasuke' : {
    var img = sasuke[Math.floor(Math.random() * sasuke.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'shina' : {
    var img = shina[Math.floor(Math.random() * shina.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'shinka' : {
    var img = shinka[Math.floor(Math.random() * shinka.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'shota' : {
    var img = shota[Math.floor(Math.random() * shota.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'waifu' : {
    var img = waifu[Math.floor(Math.random() * waifu.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break


case 'yuki-' : {
    var img = yuki[Math.floor(Math.random() * yuki.length)]  
        
          ElisaBotMd.sendMessage(m.chat, { image: { url: img }, caption: global.cap }, { quoted: m })
     
     }
break
case 'cecan':
            case 'china':
            case 'cogan':
            case 'indonesia':
            case 'japan':
            case 'korea':
            case 'malaysia':
            case 'thailand':
            case 'vietnam': {
                m_reply(mess.wait)
           //     if (!isPremium && global.db.data.users[m.sender].limit < 1) return m_reply(mess.endLimit) // respon ketika limit habis
      //          db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `${command}`, buttonText: {displayText: '⌲ Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `Random Asupan ${command}`,
                    footer: global.botnma ,
                    buttons: buttons,
                    headerType: 4
                }
                ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'cyberspace':
            case 'mountain':
            case 'programming':
            case 'technology': {
            m_reply(`${mess.wait} \n *Loading ${command} Wallpapers*`)
                
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `${command}`, buttonText: {displayText: '⌲ Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `Random Wallpaper ${command}`,
                    footer: global.botnma,
                    buttons: buttons,
                    headerType: 4
                }
                ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
  case 'delrash' :{
  global.DEL_RASH = text
  reply('Done !')
  }
  break
  case 'faketest' : {
  const log0 = await getBuffer('https://telegra.ph/file/c020c561957a1824371af.jpg')
  const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "94719574492-1634878051@g.us",
"inviteCode": `${global.ownernma}`,
"groupName": `${global.botnma}`, 
"caption":`ᴍͥ ʀ ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ɴ ɪͣ ᴍͫ ᴀ ⁴⁹²`, 
'jpegThumbnail': log0
}
}
}
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //The picture
},
"title": `${global.ownernma}`, 
"description": `${global.botnma}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `ᴍͥ ʀ ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ɴ ɪͣ ᴍͫ ᴀ ⁴⁹²`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
} 
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `srilanka,rathnapura`,
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${global.botnma}`, 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.botnma}`,
"h": `${global.ownernma}`,
'seconds': '30', 
'caption': `${global.ownernma}`,
'jpegThumbnail': log0
}
}
}
await ElisaBotMd.sendMessage(m.chat, { text : `hello` } ,{ quoted: ftoko })  
await ElisaBotMd.sendMessage(m.chat, { text : `hello` } ,{ quoted: fgclink })  
await ElisaBotMd.sendMessage(m.chat, { text : `hello` } ,{ quoted: flokasi })  
 await ElisaBotMd.sendMessage(m.chat, { text : `hello` } ,{ quoted: fdocs })  
 await ElisaBotMd.sendMessage(m.chat, { text : `hello` } ,{ quoted: fvideo })  
 if (isSudo) {
 reply('hello sudoo ' )
 
 }
 if(isBlock){
 reply('this is block group')
 }
  }
  break
             case 'databasetest' : {
              let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Your Blood* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Your Iron* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Your Gold* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Your Emerald* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Your Limit* : ${getLimit(m.sender)}\n
     `
     
     reply(`${teksehmazeh}
     cow ${getHBesi(m.sender)}
     tiger  ${getHEmas(m.sender)}
      rabit ${getHEmerald(m.sender)}
      frog ${getDomba(m.sender)}
    duck  ${getHUmpan(m.sender)}
  cheken   ${getHPotion(m.sender)}
  ${getLimit(m.sender)}`)
             }
/*
getHUmpan,
    getHPotion
addIkan(m.sender,Cow)
      addAyam(m.sender,tiger)
      addKelinci(m.sender,rabit)
      addDomba(m.sender,frog)
      addSapi(m.sender,duckk)
      addGajah(m.sender,chiken)
*/
             break
             /*case 'locationtest' : {
             const hasm = await getBuffer('https://telegra.ph/file/7b0f6b5e397dfb909ec1f.jpg')
var button = [
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `「 DEATH 」`
        ElisaBotMd.sendMessage(from, { caption: hg, location: { jpegThumbnail: hasm }, templateButtons: button, footer: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`, mentions: [m.sender] })


             }
             break*/
             case 'spotify' : {
             const down = await ElisaBotMd.sendText(m.chat, `*📥 Downloading Your Song...*`, m, )
             await fetchJson(`https://api.zekais.com/spotifydl?url=${text}&apikey=BRkP6EOB`)
             .then(async (nima) => {
             await ElisaBotMd.sendMessage(m.chat,{delete : down.key })  
             const up = await ElisaBotMd.sendText(m.chat, `*📤 Uploading ...*`, m, )
             await ElisaBotMd.sendMessage(m.chat, { document: { url: nima.result }, mimetype: 'audio/mpeg', fileName: `${nima.title}.mp3` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : up.key })  
             
             })       
             }
             break
             case 'fancy' : {
             if(!text) return reply('*👸💬 Need some text*\n _ex_ .fancy Queen Elisa')
             await ElisaBotMd.sendText(m.chat,mess.wait)
             const nima = await fetchJson(`https://api.tiodevhost.my.id/api/tools/styletext?text=${text}`)
             const search = nima.result
             let sections = []   
  for (let i of search) {
  const list = { title: `👸 ǫᴜᴇᴇɴ ᴇʟɪsᴀ ғᴀɴᴄʏ ᴛᴇxᴛ 👸`,
   rows :[
	    {
	     title: `${i.result}`, 
	     rowId: `genfancy ${i.result} `   
	    }
	    ]
     }
     sections.push(list)   
     }
  const sendm =  ElisaBotMd.sendMessage(
      m.chat, 
      {
       text: `${text} *Here is the list of Fancy Texts, click the button below to choose*\n\n${m.pushName}`,
       footer: `${global.botnma}`,
       title: `◯═══════════◯
${global.botnma} Fancy Text List
🗳️ Your text : ${text}`,
       buttonText: "GET FANCY TEXT",
       sections
      }, { quoted : m })
             }
             break
             
             case 'hi': case 'hai' : case 'හායි': {
             
             if (global.VOICE_REPLY == 'true') {
             await ElisaBotMd.sendMessage(m.chat, { audio: {url:'https://github.com/DarkMakerofc/UPLOADS/raw/main/VOICE/hi.mp3'}, mimetype: 'audio/mp4', ptt: true }, { quoted: m })   
             }
             }
             break
             
             case 'genfancy' : {
             m_reply(text)
             }
             break
             case 'mk': case 'මොකද කරන්නේ' :{
             if (global.VOICE_REPLY == 'true') {
             await ElisaBotMd.sendMessage(m.chat, { audio: {url:'https://github.com/DarkMakerofc/UPLOADS/raw/main/VOICE/mk.mp3'}, mimetype: 'audio/mp4', ptt: true }, { quoted: m })   
             }
             }
             break
             
             case 'gn': case 'night' :{
             if (global.VOICE_REPLY == 'true') {
             await ElisaBotMd.sendMessage(m.chat, { audio: {url:'https://github.com/DarkMakerofc/UPLOADS/raw/main/VOICE/bs.mp3'}, mimetype: 'audio/mp4', ptt: true }, { quoted: m })   
             }
             }
             break
             
             case 'bs': {
             if (global.VOICE_REPLY == 'true') {
             await ElisaBotMd.sendMessage(m.chat, { audio: {url:'https://github.com/DarkMakerofc/UPLOADS/raw/main/VOICE/bs.mp3'}, mimetype: 'audio/mp4', ptt: true }, { quoted: m })   
             }
             }
             break
             
             case 'gm': case 'morning' :{
             if (global.VOICE_REPLY == 'true') {
             await ElisaBotMd.sendMessage(m.chat, { audio: {url:'https://github.com/DarkMakerofc/UPLOADS/raw/main/VOICE/gm.mp3'}, mimetype: 'audio/mp4', ptt: true }, { quoted: m })   
             }
             }
             break
             
             case 'bye' :case 'බායි' :{
             if (global.VOICE_REPLY == 'true') {
             await ElisaBotMd.sendMessage(m.chat, { audio: {url:'https://github.com/DarkMakerofc/UPLOADS/raw/main/VOICE/bye.mp3'}, mimetype: 'audio/mp4', ptt: true }, { quoted: m })   
             }
             }
             break
             
             case 'findapk':{
/*var P_LINK = ''
if (global.LANG == 'EN') P_LINK = return reply('*👸💬 Please give me a correct link*\n _.apk https://play.google.com/store/apps/details?id=com.whatsapp_')
if (global.LANG == 'EN') P_LINK = */

           if (!text) return reply('*👸💬 Please give plastore app name*')
            await ElisaBotMd.sendText(m.chat,mess.wait)
           await fetchJson(`https://api.akuari.my.id/search/playstoresearch?query=${text}`)
            .then(async (nima) => {  
           const caption = `   *👸 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙰𝙿𝙺 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 👸*

 ☛ 𝚃𝙸𝚃𝙻𝙴 : ${nima.hasil[0].title}
 ☛ 𝙿𝙰𝙲𝙺𝙰𝙶𝙴 𝙽𝙰𝙼𝙴 : ${nima.hasil[0].appId}
 ☛ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 : ${nima.hasil[0].developer}
 ☛ 𝚁𝙰𝚃𝙴 : ${nima.hasil[0].scoreText}
 ☛ 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 : ${nima.hasil[0].summary}
 ☛ 𝚄𝚁𝙻 : ${nima.hasil[0].url} 
`
   
   const buttons = [
                    {buttonId: `getapk ${nima.hasil[0].url}`, buttonText: {displayText: '🗳️ ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴘᴋ 🗳️'}, type: 1},
                     
                ]
            const buttonMessage = {
                    image: { url: nima.hasil[0].icon },
                    caption: caption,
                    footer: global.botnma,
                    buttons: buttons,
                    headerType: 4
                }
                
           await ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
            }).catch((err) => m_reply(NOT_FOUND))
       }
       break    
       
       case 'apk' : {
            if (!text.includes('https://play.google.com/')) return reply('*👸💬 Please give me a correct link*\n _.apk https://play.google.com/store/apps/details?id=com.whatsapp_')
             const appid = text.split("details?id=")[1]
             await ElisaBotMd.sendMessage(from, { react: { text: `⬇️`, key: m.key }})
             await fetchJson(`https://api.lolhuman.xyz/api/apkdownloader?apikey=SGWN&package=${appid}`)
             .then(async (rash) => { 
             const apk = rash.result.apk_link
             const name = rash.result.apk_name
             await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
             var apppk = await ElisaBotMd.sendMessage(m.chat, { document: {url : apk } , mimetype: 'application/vnd.android.package-archive', fileName: `${name}.apk`}, { quoted: m })
             await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
             await ElisaBotMd.sendMessage(from, { react: { text: `🗃️`, key: apppk.key }})
            }).catch((err) => m_reply(NOT_FOUND))
                         }
            break
            case 'modapk' :{
            await ElisaBotMd.sendText(m.chat,mess.wait) 
            await fetchJson(`https://api.akuari.my.id/search/searchmod?query=${text}`)
            .then(async (nima) => {  
            const search = nima.respon
            let sections = []   
  for (let i of search) {
  const list = {title: `SELECT YOUR MOD APP`,
  rows: [
	    {
	     title: `${i.title}`, 
	     rowId: `modapkdl ${i.link} ${i.title}`,
      description: `➮ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 ${i.version}`	     
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  ElisaBotMd.sendMessage(
      m.chat, 
      {
       text: `${m.pushName} This is matching apk\n\n➮ ʀᴇǫᴜᴇsᴛ ${text}`,
       footer: `${global.botnma}`,
       title: "*👸 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙼𝙾𝙳 𝙰𝙿𝙺 👸*",
       buttonText: "DOWNLOAD MOD APK",
       sections
      }, { quoted : m })    
            }).catch((err) => m_reply(NOT_FOUND))
            }
            break
            case 'modapkdl' : {
            const down = await ElisaBotMd.sendMessage(from, { text: `*📥 Downloding mod apk...*` }, { quoted: m })
            const nima = await fetchJson(`https://api.akuari.my.id/downloader/dlmod?link=${args[0]}`)
            const upload = await ElisaBotMd.sendMessage(from, { text: `*📤 Uploading mod apk...*` }, { quoted: m })
            await ElisaBotMd.sendMessage(m.chat,{delete : down.key })  
            await ElisaBotMd.sendMessage(m.chat, { document: { url : nima.respon.linkdl } , mimetype: 'application/vnd.android.package-archive', fileName: `${args[1]}.apk`}, { quoted: m })
            await ElisaBotMd.sendMessage(m.chat,{delete : upload.key })  
           
            }
            break
            case 'fb3':{
            
            buttons = [
                    {buttonId: `hdfbvid ${text}`, buttonText: {displayText: 'HD VIDEO'}, type: 1},
                    {buttonId: `sdfbvid ${text}`, buttonText: {displayText: 'SD VIDEO'}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/834e7617f46166f8d439a.jpg'},
                    caption:`*👸 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙵𝙱 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 👸*

*➮ ᴜʀʟ :* ${text}
*➮ ʀᴇǫᴜᴇsᴛᴇʀ :* ${m.pushName}
                    ` ,
                    footer: global.botnma,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'hdfbvid' : {
            const down = await ElisaBotMd.sendText(m.chat, `*📥 DOWNLOADING FB VIDEO...*`, m, )
            await fetchJson(`https://api.akuari.my.id/downloader/fbdl3?link=${text}`)
            .then(async (nima) => { 
            const down = await ElisaBotMd.sendText(m.chat, `*📥 DOWNLOADING FB VIDEO...*`, m, )
            const up = await ElisaBotMd.sendText(m.chat, `*📤 UPLOADING FB VIDEO...*`, m, )
     //  await ElisaBotMd.sendMessage(m.chat,{delete : down.key })  
       await ElisaBotMd.sendMessage(m.chat, { video: { url: nima.hasil.hd }, caption: global.cap}, { quoted: m })}).catch((err) => m_reply(NOT_FOUND))
     //  await ElisaBotMd.sendMessage(m.chat,{delete : up.key })  
     
            
            }
            break
            case 'sdfbvid' : {
            await fetchJson(`https://api.akuari.my.id/downloader/fbdl3?link=${text}`)
            .then(async (nima) => { 
            const down = await ElisaBotMd.sendText(m.chat, `*📥 DOWNLOADING FB VIDEO...*`, m, )
       const up = await ElisaBotMd.sendText(m.chat, `*📤 UPLOADING FB VIDEO...*`, m, )
    //   await ElisaBotMd.sendMessage(m.chat,{delete : down.key })  
       await ElisaBotMd.sendMessage(m.chat, { video: { url: nima.hasil.sd }, caption: global.cap}, { quoted: m })}).catch((err) => m_reply(NOT_FOUND))
  //     await ElisaBotMd.sendMessage(m.chat,{delete : up.key })  
            }
           break
case 'wpaper' :{
   await ElisaBotMd.sendText(m.chat, '*LOADING...*')
   
   await ElisaBotMd.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/search/alphacoders?query=${text}` },  caption: `${global.cap}`}, { quoted: m })
   await ElisaBotMd.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/search/alphacoders?query=${text}` },  caption: `${global.cap}`}, { quoted: m }.repeat(5))
}
break
       /* case 'invexxcxntori': case 'invexxxntory': case 'pxxxxrofile':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var ElisaBotMd = await getBuffer(picak+`User's Inventory`)
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Your Blood* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Your Iron* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Your Gold* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Your Emerald* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Your Limit* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Your Potion* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HUNT RESULT🐺 ]_\n`
     teksehmazeh += `*🐟Fish* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Chicken* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Rabbit* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Sheep* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Cow* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Elephant* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await ElisaBotMd.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, ElisaBotMd, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}}])
  }
  break*/
  /*case 'tyt' :{
  await ElisaBotMd.sendText(m.chat,'serching...')
  const nimadl2 = require('xfarr-api')
  nimadl2.Youtube(`${text}`)
    .then(data => {
    //console.log(data)
   ElisaBotMd.sendText(m.chat,data)
})
  }
  break*/
  case 'news' : {
       const load = await ElisaBotMd.sendText(m.chat, mess.wait , m, ) 
       const news = await fetchJson(`https://api.sdbots.tk/hirunews`)
       const cap = `*👸 Queen Elisa News 👸*
       
*🏷️ මාතෘකාව :* ${news.title}
*⏰ අලුත් කරන වේලාව :* _${news.date}_

*📄️ විස්තරය :*
${news.description}

`
const templateButtons = [
    {index: 1, urlButton: {displayText: `හිරු පුවත්`, url: news.link }},


    ]

const templateMessage = {
    image: {url: news.img },
    caption: '     ⫷ 👸 *𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙽𝙴𝚆𝚂* 👸 ⫸\n\n'+cap,
    footer: global.botnma,
    templateButtons: templateButtons,
    headerType: 4
}
     
     await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: m })
     await ElisaBotMd.sendMessage(m.chat,{delete : load.key })  
 
    // await ElisaBotMd.sendMessage(m.chat, { image: { url : news.img} , caption : cap }, { quoted: m })
  }
  break
  case 'lyrics' :{
     const nima = await fetchJson(`https://api.sdbots.tk//lyrics?song=${text}`)
     const msg = `*✍️ Artist :* ${nima.artist}
*🗳️ Title :* ${nima.title}

*📁 LYRICS :*
${nima.lyrics}
`
await ElisaBotMd.sendText(m.chat, msg )
  }
   break
  /* case 'news2' : {
   
   
   }
   break*/
   case 'news2' : {
   const load = await ElisaBotMd.sendText(m.chat, mess.wait , m, )
       
   const {esana_scrape, esana_latest_news_id, esana_scrape_from_id} = require("esana-node-api").esana_news;
   const helnews = await esana_scrape({ fetch: 'latest' , passcode: 'uakdmin_sr_2064'}) // Enter Your Passcode or Contact Admin (+94766239744)

const title = helnews.news.helakuru.title
const news = helnews.news.helakuru.description
const img = helnews.news.helakuru.thumb
const url = helnews.news.helakuru.url
const date = helnews.news.helakuru.data

const cap = `*_🏷️ Title_ ${title}*\n\n*_📄 News_* ${news}\n`
const templateButtons = [
    {index: 1, urlButton: {displayText: `එසැන පුවත්`, url: url }},


    ]

const templateMessage = {
    image: {url: img },
    caption: '     ⫷ 👸 *𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙽𝙴𝚆𝚂* 👸 ⫸\n\n'+cap,
    footer: global.botnma+'\n ᴛʜᴀɴᴋs ᴛᴏ sɪsᴜʟʏᴀ',
    templateButtons: templateButtons,
    headerType: 4
}
     
     await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: m })
     await ElisaBotMd.sendMessage(m.chat,{delete : load.key })  
           
   }
   break
   case 'newsjson' : {
   const {esana_scrape, esana_latest_news_id, esana_scrape_from_id} = require("esana-node-api").esana_news;
   const all_news = await esana_scrape({ fetch: 'all' , passcode: 'uakdmin_sr_2064'}) // Enter Your Passcode or Contact Admin (+94766239744)
  // const helnews = await esana_scrape({ fetch: 'latest' , passcode: 'uakdmin_sr_2064'}) // Enter Your Passcode or Contact Admin (+94766239744)
 //  const helnew_s = await esana_scrape_from_id({ id: text , passcode: 'uakdmin_sr_2064'})
  const cap = `
  ${jsonformat(all_news)}
  `
reply(cap)
//reply(jsonformat(helnews))
//reply(jsonformat(helnew_s))
   
   }
 break
 case 'newsjson2' : {
   const {esana_scrape, esana_latest_news_id, esana_scrape_from_id} = require("esana-node-api").esana_news;
   //const all_news = await esana_scrape({ fetch: 'all' , passcode: 'uakdmin_sr_2064'}) // Enter Your Passcode or Contact Admin (+94766239744)
  // const helnews = await esana_scrape({ fetch: 'latest' , passcode: 'uakdmin_sr_2064'}) // Enter Your Passcode or Contact Admin (+94766239744)
   const helnew_s = await esana_scrape_from_id({ id: text , passcode: 'uakdmin_sr_2064'})
  const cap = `
  ${jsonformat(helnew_s)}
  `
reply(cap)
//reply(jsonformat(helnews))
//reply(jsonformat(helnew_s))
   
   }
 break
   case 'helakurunews' : case 'findnews' : {
   const load = await ElisaBotMd.sendText(m.chat, mess.wait , m, )

   var NEWSSS = ''
  if (global.LANG == 'EN') NEWSSS = '```👸💬 Click And Get Your news```'
  if (global.LANG == 'SI') NEWSSS = '```👸💬 ඔබට අවශ්‍ය පුවත පහත බටන බාවිතයෙන් ලබාගන්න```'

   const {esana_scrape, esana_latest_news_id, esana_scrape_from_id} = require("esana-node-api").esana_news;
   const all_news = await esana_scrape({ fetch: 'all' , passcode: 'uakdmin_sr_2064'}) // Enter Your Passcode or Contact Admin (+94766239744)
   
  
      // reply(jsonformat(all_news))
   
  // reply(i.news_id)
   let sections = []   
  for (let i of all_news) {
//  reply(i.news_id)
  const list = {title: `ǫᴜᴇᴇɴ ᴇʟɪsᴀ ɴᴇᴡs `,
  rows: [
	    {
	     title: `${i.title}`, 
	     rowId: `getnews ${i.id}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  ElisaBotMd.sendMessage(
      m.chat, 
      {
       text: NEWSSS,
       footer: global.botnma+'\n get on helakuru.com' ,
       title: "*⫷👸 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙽𝙴𝚆𝚂 👸⫸*",
       buttonText: "GET NEWS",
       sections
      }, { quoted : m })    
   
   //all
  /* const all_news = await esana_scrape({ fetch: 'all' , passcode: 'your_passcode'}) // Enter Your Passcode or Contact Admin (+94766239744)
   reply(latest_news)*/
   await ElisaBotMd.sendMessage(m.chat,{delete : load.key })  
  
   
   }
   break
   case 'getnews' : {
   const load = await ElisaBotMd.sendText(m.chat, mess.wait , m, )

   const {esana_scrape, esana_latest_news_id, esana_scrape_from_id} = require("esana-node-api").esana_news;
   const helnews = await esana_scrape_from_id({ id: text , passcode: 'uakdmin_sr_2064'})
 //  reply(jsonformat(helnews))        

const title = helnews.news_from_id.helakuru.title
const news = helnews.news_from_id.helakuru.description
const img = helnews.news_from_id.helakuru.thumb
const url = helnews.news_from_id.helakuru.url
const date = helnews.news_from_id.helakuru.data

const cap = `*_🏷️ Title_ ${title}*\n\n*_📄 News_* ${news}\n`
const templateButtons = [
    {index: 1, urlButton: {displayText: `ɴᴇᴡs ᴜʀʟ`, url: url }},
]

const templateMessage = {
    image: {url: img },
    caption: '     ⫷ 👸 *𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙽𝙴𝚆𝚂* 👸 ⫸\n\n'+cap,
    footer: `${global.botnma}` ,
    templateButtons: templateButtons,
    headerType: 4
}
     
     await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: m })
     await ElisaBotMd.sendMessage(m.chat,{delete : load.key })  
           
           
   
   }
   break
  case 'tiktok2' : {
   
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply ( '*The link you provided is not valid*')
const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')
buf = await getBuffer(thub.TIKTOK_THUB)
const cyber = await fetchJson(`https://api.sdbots.tk/tiktok?url=${text}`)
const down = await ElisaBotMd.sendText(m.chat, '*📥 DOWNLOADING YOUR TIKTOK VIDEO ...*')
VID = cyber.result.withoutWaterMarkVideo
CAP = `🕵️‍♂️ ${cyber.author}
🗒️ ${cyber.desc}`
const up = await ElisaBotMd.sendText(m.chat, '*📤 UPLOADING YOUR TIKTOK VIDEO ...*')
await ElisaBotMd.sendMessage(m.chat,{delete : down.key })  
await ElisaBotMd.sendMessage(m.chat, { video: { url: VID },jpegThumbnail:buf, caption: global.cap }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat,{delete : up.key })                              


}
break


 case 'timetest' : {
           
           const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
           var utch = new Date().toLocaleDateString( get_localized_date)
           var time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
           const biography = '📅 ' + utch + '\n⌚ ' + time + '\n\n'+'👸💬 𝚀𝚞𝚎𝚎𝚗 𝙴𝚕𝚒𝚜𝚊 𝚒𝚜 𝚘𝚗𝚕𝚒𝚗𝚎'

      
     // var time = new Date().toLocaleString('HI', { timeZone: Config.STIME_ZONE }).split(' ')[1]
      await ElisaBotMd.sendText(m.chat, biography )
      if (time == '6:08:01' ) {
      return await ElisaBotMd.sendText(m.chat, biography )
      }
      if (time == '6:08:11' ) {
      return await ElisaBotMd.sendText(m.chat, biography )
      }
       if (time == '6:08:20' ) {
      return await ElisaBotMd.sendText(m.chat, biography )
      }
 }
 break
 case 'hunting' : {
 if(!isHunt){ addHhunting(m.sender) }
 const hasm = await getBuffer('https://telegra.ph/file/6d131e49aa045657e9e67.jpg')
 //addInventoriBuruan
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
   let coww = [1,0,2,3,1,0,2,1,0,1,2,0,1]
   let tigeer = [1,0,2,0,1,0,2,1,0,1,0,0,1]
   let rabbii = [1,0,2,6,1,0,2,1,2,1,2,0,1]
   let froggg = [1,6,2,3,1,0,2,4,0,1,2,9,1]
   let duck = [1,0,2,6,1,0,2,1,2,1,2,0,1]
   let chike = [1,6,2,3,1,0,2,4,0,1,2,9,1]
      var cow = coww[Math.floor(Math.random() * coww.length)]  
      var tiger = tigeer[Math.floor(Math.random() * tigeer.length)] 
      var rabit = rabbii[Math.floor(Math.random() * rabbii.length)]  
      var frog = froggg[Math.floor(Math.random() * froggg.length)]   
      var duckk = rabbii[Math.floor(Math.random() * duck.length)]  
      var chiken = froggg[Math.floor(Math.random() * chike.length)]   
      
setTimeout( () => {
  let caption = `*[ 🧜‍♂️ HUNT RESULT 🧜‍♂️]*
*🦬 Cows* : ${cow}
*🐅 Tigers* : ${tiger}
*🐇 Rabits* : ${rabit}
*🐸 Frogs* : ${frog}
*🦆 Ducks* : ${duckk}
*🐓 Chickens* : ${chiken}`
  /*let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: '🧜‍♂ Hunt Again 🧜‍♂️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: 'https://telegra.ph/file/84266b9c31cc804698d7a.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     ElisaBotMd.sendMessage(from, buttonMessage, { quoted: m })
   */
   var button = [	
		{ quickReplyButton: { displayText: `🏹 𝗛𝗨𝗡𝗧 𝗔𝗚𝗔𝗜𝗡 🏹`, id: `${prefix}hunting` } }
		]
		
        ElisaBotMd.sendMessage(from, { caption: caption , location: { jpegThumbnail: hasm }, templateButtons: button, footer: `${botnma}`, mentions: [m.sender] })


   }, 7000)  
  setTimeout( () => {
  reply(`*@${m.sender.split("@")[0]} Started Hunting 🧜‍♂*`)     
  }, 1500)
      addHBesi(m.sender, cow)
       addHEmas(m.sender, tiger) 
       addHEmerald(m.sender, rabit)
       addHUmpan(m.sender, duckk)
       addHPotion(m.sender, chiken )
 }
break
case 'mining': case 'mine':{
//if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  let gemmm = [5,0,1,2,0,1,0,2,1,3,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  var jems = gemmm[Math.floor(Math.random() * gemmm.length)]  
  setTimeout( () => {
  let caption = `*[ ⛏️ MINING RESULT ⛏️]*
*Iron* : ${besinya}
*Gold* : ${emasnya}
*Emerald* : ${emeraldnya}
*Jem* : ${jems}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mine Again⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './media/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     ElisaBotMd.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Mining🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
 /* case 'testehi' : {
  const ehinima = await fetchJson ('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/EHIJSON.json')
  msg = ehinima.EHI_FILES[0].SG_FILE1
  msg2 = ehinima.EHI_FILES[0].SG_FILE2
  msg3 = ehinima.EHI_FILES[0].SG_FILE3
  msg4 = ehinima.EHI_FILES[0].SG_FILE4
  msg5 = ehinima.EHI_FILES[1].US_FILE1
  msg6 = ehinima.EHI_FILES[1].US_FILE2
  msg7 = ehinima.EHI_FILES[1].US_FILE3
  msg8 = ehinima.EHI_FILES[1].US_FILE4
  
  
  
  await ElisaBotMd.sendText(m.chat, `${ehinima.EHI}
 1. ${msg} 
 2. ${msg2} 
 3. ${msg3}
 4. ${msg4}
 5. ${msg5}
 6. ${msg6}
 7. ${msg7}
 8. ${msg8}
 `)
  }
  break*/
  
  case 'ehi' :  {
  const buffer = await getBuffer('https://telegra.ph/file/21440bd3801d3f280316e.jpg')
  const link = 'http://youtube.com/c/MRNIMAOFC'
  
await ElisaBotMd.sendMessage(from, { react: { text: `💉`, key: m.key }})
AGAINTRY = ` ╔══════❨ ❄ ❩══════╗

            *🎗️ ǫᴜᴇᴇɴ ᴇʟɪsᴀ ᴇʜɪ 🎗️*
    
 ▫ ғʀᴇᴇ ᴇʜɪ
 ▫ ᴍᴀᴋᴇ ᴅᴀᴛᴇ
 ▫ ᴇxᴘɪʀᴇ ᴅᴀᴛᴇ 
     
 _✕ ɴᴏ ʜᴀᴄᴋɪɴɢ_
 _✕ ɴᴏ sᴘᴀᴍ_ 
 _✕ ɴᴏ ᴅᴅᴏs_
 _✕ ᴅᴏɴ\'ᴛ ᴜsᴇ ᴜɴɴᴇᴄᴇssᴀʀʏ ᴡᴏʀᴋ_
 
    *ᴇɴᴊᴏʏ ʏᴏᴜʀ ᴇʜɪ ғɪʟᴇs 💞.*

╚══════[💀]
 `
let buttons = [
{buttonId: `httpinjector`, buttonText: {displayText: ' ʜᴛᴛᴘ ɪɴᴊᴇᴄᴛᴏʀ '}, type: 1},
{buttonId: `elisaehi`, buttonText: {displayText: ' ᴇʜɪ ғɪʟᴇ '}, type: 1},
{buttonId: `aboutehi`, buttonText: {displayText: ' ᴀʙᴏᴜᴛ '}, type: 1}

]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
jpegThumbnail:buffer,
mentions: [m.sender],
fileName: `${global.ownernma}`,
fileLength: 99999999999999,
caption: AGAINTRY,
footer: `© DARK MAKER`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${global.botnma}`,
body: `𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃`,
mediaType:2,
thumbnail: buffer,
sourceUrl: link,
mediaUrl: link,
}}
}
ElisaBotMd.sendMessage(m.chat, buttonMessage, {quoted: m })

                              
                                                                                        
                              /*buttons = [
                                          { buttonId: `httpinjector`, buttonText: { displayText: ' ʜᴛᴛᴘ ɪɴᴊᴇᴄᴛᴏʀ ' }, type: 1 },
                                          { buttonId: `elisaehi`, buttonText: { displayText: ' ᴇʜɪ ғɪʟᴇs ️' }, type: 1 },
                                          { buttonId: `aboutehi`, buttonText: { displayText: '️ ᴀʙᴏᴜᴛ ' }, type: 1 }
                                      ]
                                const buttonMessage = {
    text: AGAINTRY ,
    footer: `© ǫᴜᴇᴇɴ ᴇʟɪsᴀ ᴘᴜʙʟɪᴄ` ,
    buttons: buttons,
    headerType: 2
    }
          
                 ElisaBotMd.sendMessage(m.chat, buttonMessage , { quoted: m })
       
*/

}
break
case 'aboutehi' :{
var ABOUTEHI = ''
if (global.LANG == 'EN') ABOUTEHI = ` *Ehi file is*,
 💬 It is a method where you can get free internet by using whatsapp package.
 For example, you can use whatsapp package to go to tiktok, fb, youtube, google etc.

 This ehi file does not provide maximum internet speed.  But you can get internet facility at some speed.
 You can find this ehi file which we usually use
 You can use the type of file suitable for packages like whatsapp, facebook, youtube, zoom etc

*How to use*
 1. Install the http injector app on your phone.
 2. Select the ehi file related to your package.
 3. Enter that file into the httpinjector app and press the start button.
_( If you want to use this file, you must have one of the above packages installed )_


*© ᴍʀ ɴɪᴍᴀ*`
if (global.LANG == 'SI') ABOUTEHI = `*💬 Ehi file යනු* ,
ඔබට whatsapp package බාවිතාකර free internet ලබාගත හැකි ක්‍රමයකි.

උදාහරණයක් ලෙස , ඔබට whatsapp package එක බාවිතාකරමින් tiktok , fb , youtube , google යාම වැනිදේ සිදුකර හැකිවීම.
මෙම ehi file උපරිම අන්තර්ජාල වේගයක් ලබා නොදෙයි. නමුත් ඔබට යම් වේගයකින් අන්තර්ජාල පහසුකම් ලබාගත හැක.
ඔබට මෙම ehi file සාමාන්‍යයෙන් අප බාවිතාකරන 
whatsapp , facebook , youtube , zoom යන ආදී package වලට ගැලපෙන ආකාරයේ file බාවිතාකර හැක 


බාවිතාකරන්නේ කෙසේද ?
1. http injector app එක ඔබගේ phone එකට install කරගන්න 
2. ඔබගේ package එකට අදාල ehi file එක තෝරාගන්න 
3. එම file එක httpinjector app එකට ඇතුලත් කර start බටන් එක ඔබන්න 
( ඔබට මෙම file බාවිතාකිරීමටනම් ඉහත කිසියම් හෝ package 1ක් දමාගෙන තිබිය යුතුය )

*© ᴍʀ ɴɪᴍᴀ*`
reply (ABOUTEHI)
}
break 
case 'httpinjector' : {
       
       const load = await ElisaBotMd.sendText(m.chat,'*📤 Uploading...*' )
       await ElisaBotMd.sendMessage(m.chat, { document: { url: 'https://github.com/DarkMakerofc/UPLOADS/raw/main/APK/HTTP%20Injector%20(SSHProxyV2Ray)%20VPN.apk' }, mimetype: 'application/vnd.android.package-archive', fileName: `HTTP Injector Qᵁᴱᴱᴺ Eᴸᴵˢᴬ (SSHProxyV2Ray) VPN.apk`}, { quoted: m })
       const app = await ElisaBotMd.sendMessage(m.chat, { delete: load.key })
       await ElisaBotMd.sendMessage(from, { react: { text: `🚀`, key: app.key }})
}
break
case 'readmore' : {
if(!text) return m_reply('*👸💬 Please Give Some Text*\n'+'```Example .readmore Mr nima```')
reply(`​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​${text}`)
}
break
case 'areadmore' : {
if(!text) return m_reply('*👸💬 Please Give Some Text*\n'+'```Example .areadmore Mr nima```')
reply(`${text}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​`)
}
break
case 'sendspam': case 'sendspm': {
     if (text === "94715166712") {
     throw  ('*☡ ᴛʜɪs ɪs ᴍʏ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ*')
     }  else if (text === "94719574492") {
     throw ('*☡ ᴛʜɪs ɪs ᴍʏ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ*')
     }  else if (text === "94775315987") {
     throw  ('*☡ ᴛʜɪs ɪs ᴍʏ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ*')
     }
   
     antispmmsg = `ǫ\ᴜ\n\nᴇ\nᴇ\nɴ\n\n\nᴇ\nʟ\ns\nᴀ\n💃💞\n TEST 1K BNG *ＤＯＮＴ ＧＯ ＵＰ !!!*`
     
await ElisaBotMd.sendText(text+'@s.whatsapp.net', antispmmsg )
await ElisaBotMd.sendText(text+'@s.whatsapp.net', antispmmsg )
 await ElisaBotMd.sendText(text+'@s.whatsapp.net', antispmmsg )
 await ElisaBotMd.sendText(text+'@s.whatsapp.net', antispmmsg )
 await ElisaBotMd.sendText(text+'@s.whatsapp.net', antispmmsg )
 await ElisaBotMd.sendText(text+'@s.whatsapp.net', antispmmsg )
 await ElisaBotMd.sendText(text+'@s.whatsapp.net', antispmmsg )
 await ElisaBotMd.sendText(text+'@s.whatsapp.net', antispmmsg )
 await ElisaBotMd.sendText(text+'@s.whatsapp.net', antispmmsg )
 await ElisaBotMd.sendText(text+'@s.whatsapp.net', antispmmsg )
 await ElisaBotMd.sendText(text+'@s.whatsapp.net', antispmmsg )
 await ElisaBotMd.sendText(text+'@s.whatsapp.net', antispmmsg )
 await ElisaBotMd.sendText(text+'@s.whatsapp.net', antispmmsg )
 await ElisaBotMd.sendText(text+'@s.whatsapp.net', `.group close` )
 reply (`*✅ SUCCESS SEND SPAM !!!*`)
 }
 break
 case 'antispam' : case 'antispm' : case 'spamshild' : case  'activate' : {
    
   if (!m.isGroup) return reply ('```This can use only groups```')
     
var ANADMIN = ''
if (global.LANG == 'SI' ) ANADMIN = '*👸💬 සමූහයේ පරිපාලකයින්ට පමණක් බාවිතාකර හැක !*'
if (global.LANG == 'EN') ANADMIN =  '*👸💬 This only can use group admins*'

var DONTGOUP = ''
if (global.LANG == 'SI' ) DONTGOUP = '*ඉහලට යාමෙන් වළකින්න !!!*'
if (global.LANG == 'EN') DONTGOUP = '*DON\'T GO UP !!!*'    
    
var MAASS = ''
if (global.LANG == 'SI' ) MAASS = '```⚠️ මෙය විකෘති පනිවිඩ වලින් ඔබේ දුරකතනය සිරවීම වළකාලයි !!!```\n\n'
if (global.LANG == 'EN') MAASS = '```⚠️ This prevents your phone from getting bogged down by malicious messages !!!```\n\n'


         if (!isAdmins) return reply (ANADMIN)
         
         const antimsg = `ǫ\nᴜ\nᴇ\nᴇ\nɴ\n\nᴇ\nʟ\nɪ\ns\nᴀ\n\n\n${DONTGOUP}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${DONTGOUP}\n`
          
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, antimsg )
      await ElisaBotMd.sendText(m.chat, MAASS + global.botnma )
      

}
break
case 'elisaehi': {
    
    const ehinima = await fetchJson ('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/EHIJSON.json')
  ehi = ehinima.EHI_FILES[0].SG_FILE1
  ehi2 = ehinima.EHI_FILES[0].SG_FILE2
  ehi3 = ehinima.EHI_FILES[0].SG_FILE3
  ehi4 = ehinima.EHI_FILES[0].SG_FILE4
  ehi5 = ehinima.EHI_FILES[1].US_FILE1
  ehi6 = ehinima.EHI_FILES[1].US_FILE2
  ehi7 = ehinima.EHI_FILES[1].US_FILE3
  ehi8 = ehinima.EHI_FILES[1].US_FILE4
                 
                await ElisaBotMd.sendMessage(m.chat, { text : `
${ehinima.EHI}
${ehinima.C_E_DATES}
${ehinima.XX_XX}
` } ,{ quoted: m })
                await ElisaBotMd.sendMessage(m.chat, { document: { url: ehi }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI} FaceBook ${ehinima.EHI_IMOJI}.ehi`}, { quoted: m })
                await ElisaBotMd.sendMessage(m.chat, { document: { url: ehi2 }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI} Whatsapp ${ehinima.EHI_IMOJI}.ehi `}, { quoted: m })
                await ElisaBotMd.sendMessage(m.chat, { document: { url: ehi3 }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI} Youtube ${ehinima.EHI_IMOJI}.ehi`}, { quoted: m })
                await ElisaBotMd.sendMessage(m.chat, { document: { url: ehi4 }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI} Zoom ${ehinima.EHI_IMOJI}.ehi`}, { quoted: m })
                await ElisaBotMd.sendMessage(m.chat, { document: { url: ehi5 }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI2} FaceBook ${ehinima.EHI_IMOJI2}.ehi`}, { quoted: m })
                await ElisaBotMd.sendMessage(m.chat, { document: { url: ehi6 }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI2} Whatsapp ${ehinima.EHI_IMOJI2}.ehi `}, { quoted: m })
                await ElisaBotMd.sendMessage(m.chat, { document: { url: ehi7 }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI2} Youtube ${ehinima.EHI_IMOJI2}.ehi`}, { quoted: m })
                await ElisaBotMd.sendMessage(m.chat, { document: { url: ehi8 }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI2} Zoom ${ehinima.EHI_IMOJI2}.ehi`}, { quoted: m })
                
                await ElisaBotMd.sendText(m.chat, `✅ _Success send_ *${m.pushName}* _Ehi Files..._`,m)
                
                }
             break
  case 'ytshort': case 'shortvid': {
  var DOWNLOAD 
  if (global.LANG == 'EN') DOWNLOAD = ` *Downloading Your  ${m.pushName} Short Video ... 🔄*`
  if (global.LANG == 'SI') DOWNLOAD = ` *${m.pushName} ඔබගේ ශෝර්ට් වීඩියෝව බාගතකරමින් පවතී... 🔄*`
  var UPLOADE 
  if (global.LANG == 'EN') UPLOADE = ` *Uploading Your  ${m.pushName} Short Video ... 🔄*`
  if (global.LANG == 'SI') UPLOADE = `*${m.pushName} ඔබගේ ශෝර්ට් වීඩියෝව එවමින් පවතී... 🔄*`
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m_reply(mess.endLimi
                if (!text) return reply (  '*Enter a Link Query!*')
                if (!isUrl(args[0]) && !args[0].includes('https://youtube.com/shorts')) return reply (  '*The link you provided is not valid*')
                const load = await ElisaBotMd.sendText(m.chat, DOWNLOAD )
                anu = await fetchJson(`https://violetics.pw/api/downloader/youtube?apikey=${global.fbapi}&url=${text}`)
                tummb = await getBuffer('https://telegra.ph/file/a475d92d9ce5aba8f34f3.jpg')    
                            FBCAP = `┌────[💃 *𝙴𝚕𝚒𝚜𝚊 𝙱𝚘𝚝* 💃]───●
│
│  🧚‍♀️ 𝚂𝚑𝚘𝚛𝚝 𝚅𝚒𝚍𝚎𝚘 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛 🧚‍♀️
│⦁ 𝚃𝚒𝚝𝚕𝚎 : ${anu.result.meta.title}
│⦁ 𝚁𝚎𝚜𝚊𝚕𝚞𝚝𝚒𝚘𝚗 : ${anu.result.url[0].subname}
│⦁ 𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗 : ${anu.result.meta.duration}
│
└────────●`
                await  ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                var upload = await ElisaBotMd.sendText(m.chat, UPLOADE )
                await ElisaBotMd.sendMessage(m.chat, { video: { url: anu.result.url[0].url }, jpegThumbnail:tummb, caption:FBCAP }, { quoted: m }).catch((err) => m_reply('*Sorry, Can\'t Download Your Short Video !*'))
                await  ElisaBotMd.sendMessage(m.chat, { delete: upload.key })
            }
            break
  //transaction\\
 case 'getyt': case 'ytlist' : case 'ytl' : {
                                  
                                  if (!text) return reply (  `${Lang.EXAMPLE}\n ${prefix + command} bts boy with luv`)
                                  let yts = require("yt-search")
                                  let search = await yts(text)
                                  for (let i of search.all)
                                  if(search.length < 1) return reply (  ' NOT FOUND !!! ')
                                 const nimamsg =  `
                                      
╔═════════════════════◉
║    𝚀𝚞𝚎𝚎𝚗 𝙴𝚕𝚒𝚜𝚊 𝚈𝚝 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍   ║
 ◉═════════════════════╝
 
🐣 ᴛɪᴛʟᴇ : ${search.all[0].title}

🔍 ɢᴇᴛ ᴛʏᴘᴇ : Search

📨 ɪᴅ : ${search.all[0].videoId}

⏰ ᴅᴜʀᴀᴛɪᴏɴ : ${search.all[0].timestamp}

🥷 ᴠɪᴇᴡs : ${search.all[0].views}

😼 ᴜᴘʟᴏᴀᴅ ᴛɪᴍᴇ : ${search.all[0].ago}

✍️ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ${search.all[0].description}

🌀 ᴜʀʟ : ${search.all[0].ago}

 `
                                      
                                      let sections = [{
                                                  "title": `❶ Title - ${search.all[0].title}`,
                                                  "rows": [
                                                      {
                                                          "title": "📁  Download Song Document Type  ",
                                                          "description": search.all[0].title,
                                                          "rowId": `ytmp3 ${search.all[0].url}`
                                                      },
                                                      {
                                                          "title": "🎧 Download Song Document Type  ",
                                                          "description": search.all[0].title,
                                                          "rowId": `audytmp3 ${search.all[0].url}`
                                                      },
                                                      {
                                                          "title": "Download 360p Video",
                                                          "description": search.all[0].title,
                                                          "rowId": `ytmp4 ${search.all[0].url}`
                                                      },
                                                      {
                                                          "title": "Download 720p Video ",
                                                          "description": search.all[0].title,
                                                          "rowId": `ytmp4 ${search.all[0].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❷ Title - ${search.all[1].title}`,
                                                  "rows": [
                                                      {
                                                          "title": "📁  Download Song Document Type  ",
                                                          "description": search.all[1].title,
                                                          "rowId": `ytmp3 ${search.all[1].url}`
                                                      },
                                                      {
                                                          "title": "🎧 Download Song Document Type  ",
                                                          "description": search.all[1].title,
                                                          "rowId": `audytmp3 ${search.all[1].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 360p Video  ",
                                                          "description": search.all[1].title,
                                                          "rowId": `ytmp4 ${search.all[1].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 720p Video  ",
                                                          "description": search.all[1].title,
                                                          "rowId": `ytmp4 ${search.all[1].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❸ Title - ${search.all[2].title}`,
                                                  "rows": [
                                                      {
                                                          "title": "📁  Download Song Document Type  ",
                                                          "description": search.all[2].title,
                                                          "rowId": `ytmp3 ${search.all[2].url}`
                                                      },
                                                      {
                                                          "title": "🎧 Download Song Document Type  ",
                                                          "description": search.all[2].title,
                                                          "rowId": `audytmp3 ${search.all[2].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 360p Video  ",
                                                          "description": search.all[2].title,
                                                          "rowId": `ytmp4 ${search.all[2].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 720p Video  ",
                                                          "description": search.all[2].title,
                                                          "rowId": `ytmp4 ${search.all[2].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❹ Title - ${search.all[3].title}` ,
                                                  "rows": [
                                                      {
                                                          "title": "📁  Download Song Document Type  ",
                                                          "description": search.all[3].title,
                                                          "rowId": `ytmp3 ${search.all[3].url}`
                                                      },
                                                      {
                                                          "title": "🎧 Download Song Document Type  ",
                                                          "description": search.all[3].title,
                                                          "rowId": `audytmp3 ${search.all[3].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 360p Video  ",
                                                          "description": search.all[3].title,
                                                          "rowId": `ytmp4 ${search.all[3].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 720p Video  ",
                                                          "description": search.all[3].title,
                                                          "rowId": `ytmp4 ${search.all[3].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❺ Title - ${search.all[4].title}` ,
                                                  "rows": [
                                                      {
                                                          "title": "📁  Download Song Document Type  ",
                                                          "description": search.all[4].title,
                                                          "rowId": `ytmp3 ${search.all[4].url}`
                                                      },
                                                      {
                                                          "title": "🎧 Download Song Document Type  ",
                                                          "description": search.all[4].title,
                                                          "rowId": `audytmp3 ${search.all[4].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 360p Video  ",
                                                          "description": search.all[4].title,
                                                          "rowId": `ytmp4 ${search.all[4].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 720p Video  ",
                                                          "description": search.all[4].title,
                                                          "rowId": `ytmp4 ${search.all[4].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❻ Title - ${search.all[5].title}`,
                                                  "rows": [
                                                      {
                                                          "title": "📁  Download Song Document Type  ",
                                                          "description": search.all[5].title,
                                                          "rowId": `ytmp3 ${search.all[5].url}`
                                                      },
                                                      {
                                                          "title": "🎧 Download Song Document Type  ",
                                                          "description": search.all[5].title,
                                                          "rowId": `audytmp3 ${search.all[5].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 360p Video  ",
                                                          "description": search.all[5].title,
                                                          "rowId": `ytmp4 ${search.all[5].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 720p Video  ",
                                                          "description": search.all[5].title,
                                                          "rowId": `ytmp4 ${search.all[5].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❼ Title - ${search.all[6].title}`,
                                                  "rows": [
                                                      {
                                                          "title": "📁  Download Song Document Type  ",
                                                          "description": search.all[6].title,
                                                          "rowId": `ytmp3 ${search.all[6].url}`
                                                      },
                                                      {
                                                          "title": "🎧 Download Song Document Type  ",
                                                          "description": search.all[6].title,
                                                          "rowId": `audytmp3 ${search.all[6].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 360p Video  ",
                                                          "description": search.all[6].title,
                                                          "rowId": `ytmp4 ${search.all[6].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 720p Video  ",
                                                          "description": search.all[6].title,
                                                          "rowId": `ytmp4 ${search.all[6].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❽ Title - ${search.all[7].title}`,
                                                  "rows": [
                                                      {
                                                          "title": "📁  Download Song Document Type  ",
                                                          "description": search.all[7].title,
                                                          "rowId": `ytmp3 ${search.all[7].url}`
                                                      },
                                                      {
                                                          "title": "🎧 Download Song Document Type  ",
                                                          "description": search.all[7].title,
                                                          "rowId": `audytmp3 ${search.all[7].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 360p Video  ",
                                                          "description": search.all[7].title,
                                                          "rowId": `ytmp4 ${search.all[7].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 720p Video  ",
                                                          "description": search.all[7].title,
                                                          "rowId": `ytmp4 ${search.all[7].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❾ Title - ${search.all[8].title}`,
                                                  "rows": [
                                                      {
                                                          "title": "📁  Download Song Document Type  ",
                                                          "description": search.all[8].title,
                                                          "rowId": `ytmp3 ${search.all[8].url}`
                                                      },
                                                      {
                                                          "title": "🎧 Download Song Document Type  ",
                                                          "description": search.all[8].title,
                                                          "rowId": `audytmp3 ${search.all[8].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 360p Video  ",
                                                          "description": search.all[8].title,
                                                          "rowId": `ytmp4 ${search.all[8].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 720p Video  ",
                                                          "description": search.all[8].title,
                                                          "rowId": `ytmp4 ${search.all[8].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `➓ Title - ${search.all[9].title}`,
                                                  "rows": [
                                                      {
                                                          "title": "📁  Download Song Document Type  ",
                                                          "description": search.all[9].title,
                                                          "rowId": `ytmp3 ${search.all[9].url}`
                                                      },
                                                      {
                                                          "title": "🎧 Download Song Document Type  ",
                                                          "description": search.all[9].title,
                                                          "rowId": `audytmp3 ${search.all[9].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 360p Video  ",
                                                          "description": search.all[9].title,
                                                          "rowId": `ytmp4 ${search.all[9].url}`
                                                      },
                                                      {
                                                          "title": "🎬  Download 720p Video  ",
                                                          "description": search.all[9].title,
                                                          "rowId": `ytmp4 ${search.all[9].url}`
                                                      }
                                                  ]
                                              }
                                              
                                          ]
                                          await ElisaBotMd.sendListMsg(m.chat, `${nimamsg}`, `${global.botnma}`, `${global.ownernma}`, `ALL MENU`, sections, m)
 }
                              break	
case 'delx' : case 'delm' : {
if (!m.quoted) return m_reply('*👸💬 Reply massage*')
if (!m.isGroup) return m_reply('*👸💬 Only Can be use groups*')
if (!isAdmins) return m_reply('*👸💬 Sorry This is Admin only command*')
let { chat, fromMe, id } = m.quoted;

const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: m.quoted.id,
    participant: m.quoted.sender
}

await ElisaBotMd.sendMessage(m.chat, { delete: key })

}
break
                              case 'delttc': case 'delttt': {
                              this.game = this.game ? this.game : {}
                              try {
                              if (this.game) {
                              delete this.game
                              ElisaBotMd.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
                              } else if (!this.game) {
                              reply(`TicTacToe Session🎮 there is not any`)
                              } else throw '?'
                              } catch (e) {
                              reply('error')
                              }
                              }
                              break
                              case 'suitpvp': case 'suit': {
                              this.suit = this.suit ? this.suit : {}
                              let poin = 10
                              let poin_lose = 10
                              let timeout = 60000
                              if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
                          if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
                              if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
                              if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
                              let id = 'suit_' + new Date() * 1
                              let caption = `_*SUIT PvP*_
                  
                  @${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit
                  
                  Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
                              this.suit[id] = {
                              chat: await ElisaBotMd.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
                              id: id,
                              p: m.sender,
                              p2: m.mentionedJid[0],
                              status: 'wait',
                              waktu: setTimeout(() => {
                              if (this.suit[id]) ElisaBotMd.sendText(m.chat, `_Suit time out_`, m)
                              delete this.suit[id]
                              }, 60000), poin, poin_lose, timeout
                              }
                              }
                              break
                              
                          case 'donasi': case 'donate': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                                  ElisaBotMd.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1f4efdefa2c959dbf5a7e.jpg' }, caption: `*𝗛𝗜 𝗕𝗥𝗢 ${m.pushName}*
*BOT NAME :* _Queen Elisa V2_
*OWNER :* _MR NIMA_
*TEAM :* _NO TEAM_

*●═─═─═─═─═─═─═─═─═─═─═☐*

*ᴛʜᴀᴋs ᴛᴏ  💞*

ɢᴏᴊᴏ  -  ғʀᴏ sᴄʀɪᴘᴛ
sʟ ʀᴇᴀʟ ᴛᴇᴀᴄʜ - ғʀᴏ ʜᴇʟᴘ
ᴅᴀʀᴋ ᴀʟᴘʜᴀ - ғʀᴏ ʜᴇʟᴘ
sᴀɴᴜᴡᴀ - ғʀᴏ ʜᴇʟᴘ
ɪsᴜʀᴜ - ғʀᴏ ʜᴇʟᴘ


© ǫᴜᴇᴇɴ ᴇʟɪsᴀ ᴘᴜʙʟɪᴄ ᴇʟᴅɪᴛɪᴏɴ` }, { quoted: m })
                              }   // https://i.ibb.co/MhqzZj8/Darkmekcersilverownerfrofilepgoto.jpg
                              break
                              
                          case 'sc': case 'script': case 'git': {
                                  reply(`┌──────────────▢⃝
│        *[ 🧚 ᴇʟɪsᴀ ʙᴏᴛ ᴍᴅ 🧚 ]*
│
│ *🖥️ ɢɪᴛ :* https://github.com/DarkMakerofc/Queen-Elisa-Md-V2
│ *📡 ʏᴛ ᴄʜᴀɴɴᴇʟ :* https://www.youtube.com/c/MRNIMAOFC
│ *🌍 ᴡᴇʙ sɪᴛᴇ :* http://queenelisa.42web.io/
│
└───────▢`)
                              }
                              break
                              
                              case 'thank': case 'thanku': case 'thnks': case 'thank': {
                                  reply(`*🐣 Your are welcome... ${m.pushName}*`)
                              }
                              break
                              case 'chat': {
                                  if (!isCreator) return reply (mess.owner)
                                  if (!q) return reply ( 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
                                  if (args[0] === 'mute') {
                                      ElisaBotMd.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'unmute') {
                                      ElisaBotMd.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'archive') {
                                      ElisaBotMd.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'unarchive') {
                                      ElisaBotMd.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'read') {
                                      ElisaBotMd.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'unread') {
                                      ElisaBotMd.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'delete') {
                                      ElisaBotMd.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  }
                              }
                              break
                          
                          
                              case 'ping' : case 'ping2' : {
                              const start = new Date().getTime()
  await ElisaBotMd.sendText(m.chat, '*📡  ʀᴜɴɪɴɢ ʀᴇsᴘᴏɴᴅ...*')
  const end = new Date().getTime()
  const poonn = await ElisaBotMd.sendText(m.chat, '*ᴘᴏɴɢ* ' + (end - start) + ' *_ᴍs_*' )
  await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: poonn.key }})
  }
  break
  case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m_reply(`${m.pushName} *Already Afk*${text ? ': ' + text : ''}`)
            }
            break	
  case 'botstatus' : case 'status' : {
 const start = new Date().getTime()
 await ElisaBotMd.sendMessage(from, { react: { text: `⚧️`, key: m.key }})
 const end = new Date().getTime()
 const ping = (end - start) + 'ms' 
// const runtime = 
 const ramusage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
 m_reply('```🧬 Bot Status 🧬 ```\n\n'+'*⚙️ Ping :* ```'+ping+'```\n*⏳ Run Time :* ```'+runtime(process.uptime())+'``` \n*📶 Ram Usage :*``` '+ramusage+'```\n')
 }
 break
                    case 'mathquiz': case 'math': {
                                  if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                                  let { genMath, modes } = require('./src/math')
                                  if (!text) return reply ( `Mode: ${Object.keys(modes).join(' | ')}\n${Lang.EXAMPLE}\n: ${prefix}math medium`)
                                  let result = await genMath(text.toLowerCase())
                                  ElisaBotMd.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                                      kuismath[m.sender.split('@')[0]] = result.jawaban
                                  })
                                  await sleep(result.waktu)
                                  if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                                      console.log("Answer: " + result.jawaban)
                                      reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                                      delete kuismath[m.sender.split('@')[0]]
                                  }
                              }
                              break
                              case 'mysoulmate': {
                              if (!m.isGroup) return reply ( mess.group)
                              let member = participants.map(u => u.id)
                              let me = m.sender
                              let jodoh = member[Math.floor(Math.random() * member.length)]
                              let jawab = `👫Your match is
                  
                  @${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                              let ments = [me, jodoh]
                              let buttons = [
                                          { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                                      ]
                                      await ElisaBotMd.sendButtonText(m.chat, buttons, jawab, ElisaBotMd.user.name, m, {mentions: ments})
                              }
                              break
                              case 'couple': {
                              if (!m.isGroup) return reply (mess.group)
                              let member = participants.map(u => u.id)
                              let orang = member[Math.floor(Math.random() * member.length)]
                              let jodoh = member[Math.floor(Math.random() * member.length)]
                              let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
                  Ciee Whats Going On💖👀`
                              let menst = [orang, jodoh]
                              let buttons = [
                                          { buttonId: 'CONGRATS', buttonText: { displayText: 'CONGRATS' }, type: 1 }
                                      ]
                                      await ElisaBotMd.sendButtonText(m.chat, buttons, jawab, ElisaBotMd.user.name, m, {mentions: menst})
                              }
                              break
                              case 'join' : {
                                  if (!isCreator) return reply(mess.owner)
                                  if (!text) return reply( 'Enter the group link!')
                                  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply( 'Link Invalid!')
                                  replay(mess.wait)
                                  let result = args[0].split('https://chat.whatsapp.com/')[1]
                                  await ElisaBotMd.groupAcceptInvite(result).then((res) => reply(jsonformat('*✅ JOINED *'))).catch((err) => reply(jsonformat('*CAN`T JOIN NOW !!!*')))
                              }
                              break
                              case 'jidchat' :{
                              let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                              await ElisaBotMd.sendText(m.chat , users )
                              }
                              break
                              case 'jidgroup': {
                              if (!m.isGroup) return reply( mess.group)
                              await ElisaBotMd.sendText(m.chat,`${m.chat}`)
                              }
                              break
                              case 'jid' :{
                              if (quoted){
                              let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                               await ElisaBotMd.sendText(m.chat , users )
                              } else if (m.isGroup){
                               await ElisaBotMd.sendText(m.chat,`${m.chat}`)
                              } else if (!m.isGroup){
                            //  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                               await ElisaBotMd.sendText(m.chat , `${m.chat}` )
                              } else {
                              throw '*Reply Message.*'
                              }
                              }
                              case 'leave': {
                                  if (!isCreator) return reply( mess.owner)
                                  const LEAVE_MESSAGE = global.db.data.settings[botNumber].leavemessage || `*👋 Bye Bye ${groupMetadata.subject} Members & Admins*`
                                  await ElisaBotMd.sendText(m.chat,LEAVE_MESSAGE)
                                  await ElisaBotMd.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                              }
                              break
                          case 'kick': case 'remove': case 'ban': {
                          if (!m.isGroup) return reply( mess.group)
                                  if (!isBotAdmins) return reply( mess.botAdmin)
                                  if (!isAdmins) return reply( mess.admin)
                           let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                           if(users === "94715166712@s.whatsapp.net") return reply('*👸💬 Can`t Remove Nima*')
                           const KICK_MESSAGE = global.db.data.settings[botNumber].kickmessage || `*${users.split("@")[0]} Remove From Group*`
		                  await ElisaBotMd.groupParticipantsUpdate(m.chat, [users], 'remove')
		                  .then((res) => reply(KICK_MESSAGE)).catch((err) => reply(jsonformat(err)))
 } 
                      break
                      case 'kickall' : case 'kick all members' : {
                      if (!isCreator) return reply ('*👸💬 only owner allowd !!!*')
                      for (let mem of participants) {
                      //await ElisaBotMd.sendText(m.chat,mem.id) 
                      await sleep(1000)
                      if(mem.id == botNumber+'@s.whatsapp.net') return
                      if(mem.id == owner+'@s.whatsapp.net') return
                      await ElisaBotMd.groupParticipantsUpdate(m.chat, [mem.id], 'remove')
                      await ElisaBotMd.sendText(m.chat,`*${mem.id.split('@')[0]} Kick out !!!*`)
                                  }
                      }
                      case 'add': {
                          if (!m.isGroup) return reply( mess.group)
                                  if (!isBotAdmins) return reply( mess.botAdmin)
                                  if (!isAdmins) return reply( mess.admin)
                          let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                          const ADD_MESSAGE = global.db.data.settings[botNumber].addmessage || `*${users("@")[0]} Add to Group*`
		                  await ElisaBotMd.groupParticipantsUpdate(m.chat, [users], 'add')
		                  .then((res) => reply(ADD_MESSAGE)).catch((err) => reply(jsonformat(err)))
 }
                      break
                      
                      case 'promote': {
                          if (!m.isGroup) return reply( mess.group)
                                  if (!isBotAdmins) return reply( mess.botAdmin)
                                  if (!isAdmins) return reply( mess.admin)
                          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                          const PROMOTE_MESSAGE = global.db.data.settings[botNumber].promotemessage || `*${users.split("@")[0]} is Promote to Group Admin*`
                          await ElisaBotMd.groupParticipantsUpdate(m.chat, [users], 'promote')
                          .then((res) => reply(PROMOTE_MESSAGE)).catch((err) => reply(jsonformat(err)))
                      }
                      break
                      case 'demote': {
                          if (!m.isGroup) return reply( mess.group)
                                  if (!isBotAdmins) return reply( mess.botAdmin)
                                  if (!isAdmins) return reply( mess.admin)
                          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                          const DEMOTE_MESSAGE = global.db.data.settings[botNumber].demotemessage || `*${users.split("@")[0]} is demote to Group member*`
                          await ElisaBotMd.groupParticipantsUpdate(m.chat, [users], 'demote')
                          .then((res) => reply(DEMOTE_MESSAGE)).catch((err) => reply(jsonformat(err)))
                      }
                      break
                          case 'block': {
                          if (!isCreator) return reply( mess.owner)
                          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                          const BLOCK_MESSAGE = global.db.data.settings[botNumber].blockmessage || `*${users.split("@")[0]} is Blocked !*`
                          await ElisaBotMd.updateBlockStatus(users, 'block')
                          .then((res) => reply(BLOCK_MESSAGE)).catch((err) => reply(jsonformat(err)))
                      }
                      break
                          case 'unblock': {
                          if (!isCreator) return reply( mess.owner)
                          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                          const UNBLOCK_MESSAGE = global.db.data.settings[botNumber].unblockmessage || `*${users.split("@")[0]} is Unblocked !*`
                          await ElisaBotMd.updateBlockStatus(users, 'unblock')
                          .then((res) => reply(UNBLOCK_MESSAGE)).catch((err) => reply(jsonformat(err)))
                      }
                      break
                          case 'setname': case 'setsubject': {
                                  if (!m.isGroup) return reply( mess.group)
                                  if (!isBotAdmins) return reply( mess.botAdmin)
                                  if (!isAdmins) return reply( mess.admin)
                                  if (!text) return reply( 'Text ?')
                                  await ElisaBotMd.groupUpdateSubject(m.chat, text)
                                  await ElisaBotMd.sendText(m.chat,Lang.GROUP_NAME)
                                  .then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
                              }
                              break
                            case 'setdesc': case 'setdesk': {
                                  if (!m.isGroup) return reply( mess.group)
                                  if (!isBotAdmins) return reply( mess.botAdmin)
                                  if (!isAdmins) return reply( mess.admin)
                                  if (!text) return reply( 'Text ?')
                                  await ElisaBotMd.groupUpdateDescription(m.chat, text)
                                  await ElisaBotMd.sendText(m.chat,Lang.GROUP_DES)
                                  .then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
                              }
                              break
                            case 'setppbot': case 'setbotpp': {
                                  if (!isCreator) throw mess.owner
                                  if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                                  if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                                  if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                                  let media = await ElisaBotMd.downloadAndSaveMediaMessage(quoted)
                                  await ElisaBotMd.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                                  reply(mess.success)
                                  }
                                  break
                             case 'setppgroup': case 'setgrouppp': case 'setgcpp': case 'setppgrup': case 'setppgc': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isAdmins) throw mess.admin
                                  if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                                  if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                                  if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                                  let media = await ElisaBotMd.downloadAndSaveMediaMessage(quoted)
                                  await ElisaBotMd.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                                  reply(mess.success)
                                  }
                                  break
                                  
                                  case 'setexif': {
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`${Lang.EXAMPLE}\n : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Has Been Successfully Changed to\n\n🔮 Packname : ${global.packname}\n🔮 Author : ${global.author}`)
            }
            break
            
                  case 'grupinfo': case 'groupinfo':
                  try{
                   var pic = await ElisaBotMd.getProfilePicture(m.chat)
                    } catch {
                   var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    }
                  let ingfo = `*𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗙𝗢*\n\n*𝗡𝗔𝗠𝗘 :* ${groupName}\n*𝗜𝗗 𝗚𝗥𝗢𝗨𝗣:* ${m.chat}\n*𝗠𝗔𝗗𝗘 :* ${moment(`${groupMetadata.creation}` * 1000).tz('Africa/Harare').format('DD/MM/YYYY HH:mm:ss')}\n*𝗚𝗥𝗢𝗨𝗣 𝗢𝗪𝗡𝗘𝗥:* @${groupMetadata.owner.split('@')[0]}\n*𝗔𝗗𝗠𝗜𝗡𝗦 :* ${groupAdmins.length}\n*𝗠𝗘𝗠𝗕𝗘𝗥𝗦 :* ${participants.length}\n*𝗗𝗘𝗦𝗖 :* \n${groupMetadata.desc}`
                  ds = await getBuffer(pic)
                  ElisaBotMd.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
                  break
                  case 'tagadmin' : {
                  if (!m.isGroup) throw mess.group
                  let teks = ` _❗ ${groupName}Admins ❗_
                  
*MASSAGE :* ${q ? q : 'blank'}\n\n`
                  for (let mem of groupAdmins) {
                                  teks += `    `
                                  }
                  ElisaBotMd.sendMessage(m.chat, { text: teks, mentions: groupAdmins.map(a => a.id) }, { quoted: m })
                                  
                  }
                  break
                              case 'tagall': case 'tag': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                  let teks = ` *ＧＲＯＵＰ  ＮＯＴＩＦＹ*
                   
                    *𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : ${q ? q : 'blank'}*\n\n`
                                  for (let mem of participants) {
                                  teks += `🔵 @${mem.id.split('@')[0]}\n`
                                  }
                                  ElisaBotMd.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                                  }
                                  break
                                  case 'hidetag': {
                              if (!m.isGroup) throw mess.group
                              if (!isAdmins) throw mess.admin
                              ElisaBotMd.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
                              }
                              break
                              case '####taggrp': {
                              for (let mem of participants) {
                                 await ElisaBotMd.sendText(m.chat,mem.id) 
                                  }
                              
   }
                              break
                          case 'style': case 'styletext': {
                              /*if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
                          db.users[m.sender].limit -= 1 // -1 limit*/
                          let { styletext } = require('./lib/scraper')
                          if (!text) throw 'Enter Query text!'
                                  let anu = await styletext(text)
                                  let teks = `Entered Text:  ${text}\n\n`
                                  for (let i of anu) {
                                      teks += `🔵 *${i.name}* : ${i.result}\n\n`
                                  }
                                  reply(teks)
                          }
                          break
                                 case 'vote': {
                              if (!m.isGroup) throw mess.group
                              if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
                              if (!text) throw `Enter Reason for Vote, ${Lang.EXAMPLE}\n: *${prefix + command} Owner is handsome*`
                              reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
                              vote[m.chat] = [q, [], []]
                              await sleep(1000)
                              upvote = vote[m.chat][1]
                              devote = vote[m.chat][2]
                              teks_vote = `◉◍──[ *ᴇʟɪsᴀ ʙᴏᴛ* ]──◍◉
                  
*ʀᴇsᴏɴ:* ${vote[m.chat][0]}
                  
┌─[ ᴜᴘᴠᴏᴛᴇ ]─◉
                   
├ Total: ${vote[m.chat][1].length}
                  
                   
└────◉
                  
┌─[ ᴅᴇᴠᴏᴛᴇ ]─◉

├ Total: ${vote[m.chat][2].length}
                  
                   
└────◉
                  
*${prefix}deletevote* - to delete votes`
                  let buttonsVote = [
                    {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up-Vote'}, type: 1},
                    {buttonId: `${prefix}devote`, buttonText: {displayText: 'De-Vote'}, type: 1}
                  ]
                  
                              let buttonMessageVote = {
                                  text: teks_vote,
                                  footer: ElisaBotMd.user.name,
                                  buttons: buttonsVote,
                                  headerType: 1
                              }
                              ElisaBotMd.sendMessage(m.chat, buttonMessageVote)
                          }
                              break
                                 case 'upvote': {
                              if (!m.isGroup) throw mess.group
                              if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
                              isVote = vote[m.chat][1].concat(vote[m.chat][2])
                              wasVote = isVote.includes(m.sender)
                              if (wasVote) throw 'You have Voted'
                              vote[m.chat][1].push(m.sender)
                              menvote = vote[m.chat][1].concat(vote[m.chat][2])
                              teks_vote = `◉◍──[ *ᴇʟɪsᴀ ʙᴏᴛ* ]──◍◉
                  
*𝗥𝗘𝗔𝗦𝗢𝗡:* ${vote[m.chat][0]}
                  
┌──[ ᴜᴘᴠᴏᴛᴇ ]──◉

├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
                   
└─────◉
                  
┌──[ ᴅᴇᴠᴏᴛᴇ ]──◉

├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
                   
└─────◉
                  
                  *${prefix}hapusvote* - to delete votes`
                              let buttonsUpvote = [
                                {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up-Vote'}, type: 1},
                                {buttonId: `${prefix}devote`, buttonText: {displayText: 'De-Vote'}, type: 1}
                              ]
                  
                              let buttonMessageUpvote = {
                                  text: teks_vote,
                                  footer: ElisaBotMd.user.name,
                                  buttons: buttonsUpvote,
                                  headerType: 1,
                                  mentions: menvote
                               }
                              ElisaBotMd.sendMessage(m.chat, buttonMessageUpvote)
                          }
                               break
                                  case 'devote': {
                              if (!m.isGroup) throw mess.group
                              if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
                              isVote = vote[m.chat][1].concat(vote[m.chat][2])
                              wasVote = isVote.includes(m.sender)
                              if (wasVote) throw 'You Have Voted'
                              vote[m.chat][2].push(m.sender)
                              menvote = vote[m.chat][1].concat(vote[m.chat][2])
                              teks_vote = `◉◍──[ *ᴇʟɪsᴀ ʙᴏᴛ* ]──◍◉
                  
*𝗗𝗘𝗩𝗢𝗧𝗘:* ${vote[m.chat][0]}
                  
┌──[ ᴜᴘᴠᴏᴛᴇ ]──◉
                   
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
                   
└────◉
                  
┌──[ ᴅᴇᴠᴏᴛᴇ ]──◉
                   
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

└────◉
                  
                  *${prefix}hapusvote* - to delete votes`
                              let buttonsDevote = [
                                {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up-Vote'}, type: 1},
                                {buttonId: `${prefix}devote`, buttonText: {displayText: 'De-Vote'}, type: 1}
                              ]
                  
                              let buttonMessageDevote = {
                                  text: teks_vote,
                                  footer: ElisaBotMd.user.name,
                                  buttons: buttonsDevote,
                                  headerType: 1,
                                  mentions: menvote
                              }
                              ElisaBotMd.sendMessage(m.chat, buttonMessageDevote)
                      }
                              break
                                   
                  case 'cekvote':
                  if (!m.isGroup) throw mess.group
                  if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
                  teks_vote = `◉◍──[ *ᴇʟɪsᴀ ʙᴏᴛ* ]──◍◉
                  
*𝗥𝗘𝗔𝗦𝗢𝗡:* ${vote[m.chat][0]}
                  
┌──[ ᴜᴘᴠᴏᴛᴇ ]──◉
                   
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}

└─────◉
                  
┌──[ ᴅᴇᴠᴏᴛᴇ ]──◉
                   
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
                   
└────◉
                  
                  *${prefix}hapusvote* - to delete votes
                  
                  
                  ©${ElisaBotMd.user.id}
                  `
                  ElisaBotMd.sendTextWithMentions(m.chat, teks_vote, m)
                  break
                          case 'deletevote': case'delvote': case 'hapusvote': {
                              if (!m.isGroup) throw mess.group
                              if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
                              delete vote[m.chat]
                              reply('Successfully Deleted Vote Session In This Group')
                          }
                              break
                                 case 'group': case 'grup': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                                  if (args[0] === 'close'){
                                      await ElisaBotMd.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(Lang.G_MUTE)).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'open'){
                                      await ElisaBotMd.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(Lang.G_UNMUTE)).catch((err) => reply(jsonformat(err)))
                                  } else {
                                  let buttons = [
                                          { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                                          { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                                      ]
                                      await ElisaBotMd.sendButtonText(m.chat, buttons, `Group Mode`, ElisaBotMd.user.name, m)
                  
                               }
                              }
                              break
                              case 'mute':{
                                  if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                                  
                                  await ElisaBotMd.sendMessage(from, { react: { text: `🔐`, key: m.key }})
                                  await ElisaBotMd.groupSettingUpdate(m.chat, 'announcement')
                                  const sendmsg = await ElisaBotMd.sendText(m.chat,Lang.G_MUTE)
                                  await ElisaBotMd.sendMessage(from, { react: { text: `🔇`, key: sendmsg.key }})
                                  
                                 }
                                 break
                              case 'unmute':{
                                  if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                                  await ElisaBotMd.sendMessage(from, { react: { text: `🔓`, key: m.key }})
                                  await ElisaBotMd.groupSettingUpdate(m.chat, 'not_announcement')
                                  const sendmsg = await ElisaBotMd.sendText(m.chat,Lang.G_UNMUTE)
                                  await ElisaBotMd.sendMessage(from, { react: { text: `🔊`, key: sendmsg.key }})
                                  
                               }
                               break
                              case 'editinfo': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                               if (args[0] === 'open'){
                                  await ElisaBotMd.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(Lang.G_INFOON)).catch((err) => reply(jsonformat(err)))
                               } else if (args[0] === 'close'){
                                  await ElisaBotMd.groupSettingUpdate(m.chat, 'locked').then((res) => reply(Lang.G_UNMUTE)).catch((err) => reply(jsonformat(err)))
                               } else {
                               let buttons = [
                                          { buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
                                          { buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                                      ]
                                      await ElisaBotMd.sendButtonText(m.chat, buttons, `Mode Edit Info`, ElisaBotMd.user.name, m)
                  
                              }
                              }
                              break
                   
case 'antilink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return reply(`*ℹ️ Previously Activated.*`)
                db.data.chats[m.chat].antilink = true
                reply(`Antilink Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`*ℹ️ Not Activated.*`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink Inactive !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await ElisaBotMd.sendButtonText(m.chat, buttons, `Antilink Mode`, ElisaBotMd.user.name, m)
                }
             }
             break
                                      break 
                                      case 'antiwame': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                                  if (args[0] === "on") {
                                  if (db.chats[m.chat].wame) return m_reply(`Already Activated`)
                                  db.chats[m.chat].wame = true
                                  m_reply(`Anti Wa.me Activated!`)
                                  } else if (args[0] === "off") {
                                  if (!db.chats[m.chat].wame) return m_reply(`Already deactivated`)
                                  db.chats[m.chat].wame = false
                                  m_reply(`Anti Wa.me is not activated!`)
                                  } else {
                                   let buttons = [
                                          { buttonId: 'antiwame on', buttonText: { displayText: 'ON' }, type: 1 },
                                          { buttonId: 'antiwame off', buttonText: { displayText: 'OFF' }, type: 1 }
                                      ]
                                      await ElisaBotMd.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, ElisaBotMd.user.name, m)
                                  }
                               }
                               break
                                case 'blockgroup': case 'blockgc' : {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].block_from) return reply(`Previously Active`)
                db.data.chats[m.chat].block_from = true
                reply(`${ElisaBotMd.user.name} \nHas Been Blocked In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].block_from) return reply(`Previously Inactive`)
                db.data.chats[m.chat].block_from = false
                reply(`${ElisaBotMd.user.name}\n Has Been Unblocked In This Group!`)
                } else {
                 let buttons = [
                        { buttonId: 'blockgc on', buttonText: { displayText: 'BLOCK' }, type: 1 },
                        { buttonId: 'blockgc off', buttonText: { displayText: 'UNBLOCK' }, type: 1 }
                    ]
                    await ElisaBotMd.sendButtonText(m.chat, buttons, `*Desable Bot on This Group*`, ElisaBotMd.user.name, m)
                }
             }
             break
                              case 'invite' : case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc': {
                                  if (!m.isGroup) throw mess.group
                                  let response = await ElisaBotMd.groupInviteCode(m.chat)
                                  ElisaBotMd.sendText(m.chat, `*🖇️Link Of :* ${groupMetadata.subject} *Group*\n\nhttps://chat.whatsapp.com/${response}`, m, { detectLink: true })
                              }
                              break
                              case 'ephemeral': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                                  if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
                                  if (args[0] === 'enable') {
                                      await ElisaBotMd.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'disable') {
                                      await ElisaBotMd.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  }
                              }
                              break
                              case 'deletem': case 'del': {
                                  if (!m.quoted) throw false
                                  let { chat, fromMe, id, isBaileys } = m.quoted
                                  if (!isBaileys) throw Lang.DELETE
                                  ElisaBotMd.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
                              }
                              break
                              case 'clear' : {
await ElisaBotMd.chatModify({
			clear: {
				messages: [{
					id: m.key,
					fromMe: true
				}]
			}
		}, m.chat)
                              }
                              break
                              case 'bctext' :{
                              if (!isCreator) return reply( mess.owner)
                              if (!text) throw `${Lang.BC_GC}\n${Lang.EXAMPLE} ${prefix + command} *Hello i am using queen elisa 🤍*`
                                  let getGroups = await ElisaBotMd.groupFetchAllParticipating()
                                  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                                  let anu = groups.map(v => v.id)
                                  reply(`*Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second*`)
                                  for (let i of anu) {
                                      await sleep(1500)
                                  await ElisaBotMd.sendText(i,`『 ǫᴜᴇᴇɴ ᴇʟɪsᴀ ʙʀᴏᴀᴅᴄᴀsᴛ 』${text}`)
                                  //reply (`*Successful Sending Broadcast To ${anu.length} Group(s)*`)
                                  }
                                  reply (`*Successful Sending Broadcast To ${anu.length} Group(s)*`)
                                  
                                  
                                }
                              break
                              case 'bcimg' : {
                              let media = await quoted.download()
                              let getGroups = await ElisaBotMd.groupFetchAllParticipating()
                                  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                                  let anu = groups.map(v => v.id)
                                  reply(`*Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second*`)
                                  for (let i of anu) {
                                      await sleep(1500)
                                  await ElisaBotMd.sendText(i,`${text}`)
                                  await ElisaBotMd.sendMessage(i, { image: { url: media } }, { quoted: m })
                                  reply (`*Successful Sending Broadcast To ${anu.length} Group(s)*`)
                                  
                                  }
                                
                              }
                              break
                              case 'bcgc': case 'bcgroup': {
                                  if (!isCreator) throw mess.owner
                                  if (!text) throw `${Lang.BC_GC}${Lang.EXAMPLE}\n : ${prefix + command} hello guys, am back`
                                  let getGroups = await ElisaBotMd.groupFetchAllParticipating()
                                  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                                  let anu = groups.map(v => v.id)
                                  reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                                  for (let i of anu) {
                                      await sleep(1500)
                                      ElisaBotMd.sendText(i ,`*『 ǫᴜᴇᴇɴ ᴇʟɪsᴀ ʙʀᴏᴀᴅᴄᴀsᴛ 』*\n${text}`)
                                      
                                              }
                                  reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
                              }
                              break
                              case 'bc': case 'broadcast': case 'bcall': {
                                  if (!isCreator) throw mess.owner
                                  if (!text) throw `${Lang.BC_GC}Example : ${prefix + command} 𝙴𝚕𝚒𝚜𝚊 𝙱𝚘𝚝 𝚒𝚜 𝚑𝚎𝚛𝚎 😼♥️`
                                  let anu = await store.chats.all().map(v => v.id)
                                  reply(`Send Broadcast To ${anu.length} Chat\n ${anu.length * 1.5} second`)
                          for (let yoi of anu) {
                              await sleep(1500)
                              ElisaBotMd.sendText(yoi,`*『 ǫᴜᴇᴇɴ ᴇʟɪsᴀ ʙʀᴏᴀᴅᴄᴀsᴛ 』*\n${text}`)
                                }
                          reply('Broadcast Success')
                              }
                              break
                              case 'chatinfo': {
                                  if (!m.quoted) reply(Lang.M_REPLY)
                                  let msg = await m.getQuotedObj()
                                  if (!m.quoted.isBaileys) return reply( 'The message was not sent by a bot!')
                                  let teks = ''
                                  for (let i of msg.userReceipt) {
                                      let read = i.readTimestamp
                                      let unread = i.receiptTimestamp
                                      let waktu = read ? read : unread
                                      teks += `🔵 @${i.userJid.split('@')[0]}\n`
                                      teks += `🔵 *𝗧𝗜𝗠𝗘 :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} 🔵 *𝗦𝗧𝗔𝗧𝗨𝗦 :* ${read ? 'Read' : 'Unread'}\n\n`
                                  }
                                  ElisaBotMd.sendTextWithMentions(m.chat, teks, m)
                              }
                              break
                              case 'q': case 'quoted': {
                          if (!m.quoted) return reply(Lang.M_REPLY)
                          let wokwol = await ElisaBotMd.serializeM(await m.getQuotedObj())
                          if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
                          await wokwol.quoted.copyNForward(m.chat, true)
                              }
                          break
                              case 'listpc': {
                                   let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                                   let teks = `🔵 *𝗣𝗘𝗥𝗦𝗢𝗡𝗔𝗟 𝗖𝗛𝗔𝗧 𝗟𝗜𝗦𝗧*\n\n𝗧𝗢𝗧𝗔𝗟 𝗖𝗛𝗔𝗧 : ${anu.length} Chat\n\n`
                                   for (let i of anu) {
                                       let nama = store.messages[i].array[0].pushName
                                       teks += `🔵 *𝗡𝗔𝗠𝗘 :* ${nama}\n🔵 *𝗨𝗦𝗘𝗥 :* @${i.split('@')[0]}\n🔵 *𝗖𝗛𝗔𝗧 :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                                   }
                                   ElisaBotMd.sendTextWithMentions(m.chat, teks, m)
                               }
                               break
                                   case 'listgc': {
                                   let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                                   let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                                   for (let i of anu) {
                                       let metadata = await ElisaBotMd.groupMetadata(i)
                                       teks += `🔵 *𝗡𝗔𝗠𝗘 :* ${metadata.subject}\n *🔵OWNER :* @${metadata.owner.split('@')[0]}\n🔵 *🔵ID :* ${metadata.id}\n🔵 *MADE :* ${moment(metadata.creation * 1000).tz('Africa/Harare').format('DD/MM/YYYY HH:mm:ss')}\n🔵 *MEMBERS :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                                   }
                                   ElisaBotMd.sendTextWithMentions(m.chat, teks, m)
                           }	 
                               break
                               case 'listonline': case 'onlinelist': case 'liston': {
                                      let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                                      let online = [...Object.keys(store.presences[id]), botNumber]
                                      ElisaBotMd.sendText(m.chat, 'Online List:\n\n' + online.map(v => '🔵 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
                               }
                               break
                              case 'getstik': case 'renamesticker': {
                              if(!text) return m_reply('*👸💬 Please give your sticker name and reply it*')
                              if (!quoted) return reply(`👸💬 Reply Video/Image With Caption ${prefix + command}`)
                            
                                      if (/image/.test(mime)) {
                                  let media = await quoted.download()
                                  let encmedia = await ElisaBotMd.sendImageAsSticker(m.chat, media, m, { author: text })
                                  await fs.unlinkSync(encmedia)
                              } else if (/video/.test(mime)) {
                                  if ((quoted.msg || quoted).seconds > 11) return reply('error')
                                  let media = await quoted.download()
                                  let encmedia = await ElisaBotMd.sendVideoAsSticker(m.chat, media, m, { author: text })
                                  await fs.unlinkSync(encmedia)
                              } else {
                                  throw '*👸💬 Please give your sticker name and reply it*'
                                  }
                              }
                              break
                              case 'sticker': case 'st': case 'stickergif2': case 'sgif2': {
                              if (!quoted) return reply(`👸💬 Reply Video/Image With Caption ${prefix + command}`)
                            
                              var MAX = ''
                              if (global.LANG == 'EN') MAX= '*Maximum 10 seconds videos only!*'
                              if (global.LANG == 'SI') MAX= '*උපරිම තත්පර 10ක වීඩියෝ පමණයි !*'
                              var MA2X = ''
                              if (global.LANG == 'SI') MA2X= '*👸💬 වීඩියෝවකට හෝ ජායාරූපයකට රිප්ලයි ලබාදෙන්න !*'
                              if (global.LANG == 'EN') MA2X= '*👸💬 Please reply video or photo !*'
                              
                               ElisaBotMd.sendText(m.chat, Lang.STICKER_MAKING )
                                      if (/image/.test(mime)) {
                                  let media = await quoted.download()
                                  let encmedia = await ElisaBotMd.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: m.pushName })
                                  await fs.unlinkSync(encmedia)
                              } else if (/video/.test(mime)) {
                                  if ((quoted.msg || quoted).seconds > 11) return reply(MAX)
                                  let media = await quoted.download()
                                  let encmedia = await ElisaBotMd.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: m.pushName })
                                  await fs.unlinkSync(encmedia)
                              } else {
                                  throw MA2X
                                  }
                              }
                              break
                              case 'attp' :{
                               if (!text) return reply ('Need some word \n ex - attp Mr nima')
                               const Stik = `https://api.lolhuman.xyz/api/attp?apikey=SGWN&text=${text}`
                               await ElisaBotMd.sendMedia(m.chat, Stik , '𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰', '𝙱𝙾𝚃', m, {asSticker: true}).catch((err) => reply(err))
                               
                              }
                              break
                              case 'attp2' :{
                              if (!text) return reply ('Need some word \n ex - attp Mr nima')
                              const Stik = `https://api.botcahx.biz.id/api/maker/attp?text=${text}`
                               await ElisaBotMd.sendMedia(m.chat, Stik , '𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰', '𝙱𝙾𝚃', m, {asSticker: true}).catch((err) => reply(err))
                               
                              }
                              break
                              case 'ttp' :{
                              if (!text) return reply ('Need some word \n ex - ttp Mr nima')
                              //const Stik = `https://api.botcahx.biz.id/api/maker/ttp?text=${text}&apikey=nimavip`
                               await ElisaBotMd.sendMedia(m.chat, `https://api.botcahx.biz.id/api/maker/ttp?text=${text}` , '𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰', '𝙱𝙾𝚃', m, {asSticker: true}).catch((err) => reply(err))
                               
                              }
                              break
                              case 'tts' :{
                              if (!text) return reply('Need word')
                              const nima = await fetchJson(`https://api.botcahx.biz.id/api/soundoftext?text=${text}&lang=en-US&apikey=nimavip`).catch((err) => reply('Error 🙂'))
                              const voice = nima.result
                              //await ElisaBotMd.sendMessage(m.chat, {audio: voice, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
                              await ElisaBotMd.sendMessage(m.chat, { audio: { url: voice } , mimetype: 'audio/mpeg',ptt:true }, { quoted: m })
                              }
                              break
                              case 'short' :{
                              if (!isUrl(args[0])) return reply('*👸💬 Please Give Me a Correct Link*\n_Example - .short https://youtube.com/c/NIMAOFC')
                              const nima = await fetchJson(`https://api.botcahx.biz.id/api/linkshort/cuttly?link=${text}&apikey=nimavip`)
                              m_reply(nima.result)
                              }
                              break
                              //https://api.botcahx.biz.id/api/linkshort/cuttly?link=https://api-alpis.herokuapp.com
                              case 'short2' :{
                              if (!isUrl(args[0])) return reply('*👸💬 Please Give Me a Correct Link*\n_Example - .short2 https://youtu.be/hbwvPcnuTlY_')
                              const nima = await fetchJson(`https://api.botcahx.biz.id/api/linkshort/tinyurlwithalias?link=${args[0]}&alias=${args[1]}&apikey=nimavip`)
                              m_reply(nima.result)
                              }
                              break
                              case 'triggered' :{
                              if (!quoted) return reply('*👸💬 Please reply sticker.*')
                              let media = await ElisaBotMd.downloadAndSaveMediaMessage(quoted)
                              const gif = `https://api.botcahx.biz.id/api/maker/trigger?url=${media}&apikey=nimavip`
                              await fs.unlinkSync(media)
                              //const img = `https://api.violetics.pw/api/converter/webp-to-image?apikey=b5cd-368b-055f&image=${media}`
                              //const stick = 'https://api.akuari.my.id/canvas/triggered2?link='+img
                              await ElisaBotMd.sendMessage(m.chat, { video: { url: gif , caption: global.cap }, gifPlayback: true }, { quoted: m })
                              await ElisaBotMd.sendMessage(from, { react: { text: `✨`, key: m.key }})
                            //  await ElisaBotMd.sendMedia(m.chat, stick , '𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰', '𝙱𝙾𝚃', m, {asSticker: true}).catch((err) => reply(err))
                              }
                              break
                              case 'dltone' : {
                              //await ElisaBotMd.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                              await ElisaBotMd.sendMessage(m.chat, { audio: { url: text } , mimetype: 'audio/mpeg' }, { quoted: m })
                               
                              }
                              break
                              case 'ebinary': {
                              if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
                              let { eBinary } = require('./lib/binary')
                              let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                              let eb = await eBinary(teks)
                              reply(eb)
                          }
                          break
                              case 'dbinary': {
                              if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
                              let { dBinary } = require('./lib/binary')
                              let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                              let db = await dBinary(teks)
                              reply(db)
                          }
                          break
                              case 'emojimix': {
                              var NEED_IMOJI
                              if (global.LANG == 'EN') NEED_IMOJI =  `Example : ${prefix + command} 😅+🤔`
                              if (global.LANG == 'SI') NEED_IMOJI = ` උදාහරණ  : ${prefix + command} 😅+🤔`
                              if (!text) throw NEED_IMOJI
                          let [emoji1, emoji2] = text.split`+`
                          let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                          for (let res of anu.results) {
                              let encmedia = await ElisaBotMd.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                              await fs.unlinkSync(encmedia)
                          }
                          }
                          break
                              case 'photo': case 'toimg': {
                              var REPLY 
                              if (global.LANG == 'EN') REPLY = '*Please reply sticker*'
                              if (global.LANG == 'SI') REPLY ='*කරුනාකර ස්ටිකර් එකකට රිප්ලයි කරන්න*'
                              var STICKER
                              if (global.LANG == 'EN') STICKER = '*This is not Sticker please reply correct sticker'
                              if (global.LANG == 'SI') STICKER = '*ඔබ රිප්ලයි කරන ලද්දේ ස්ටිකර් එකකට නොවේ කරුනාකර ස්ටිකර් එකකට රිප්ලයි කරන්න*'
                                  if (!quoted) throw '*photo එකකට රිප්ලයි කරන්න !*'
                                  if (!/webp/.test(mime)) throw `${REPLY} *${prefix + command}*`
                                  const load = await ElisaBotMd.sendText(m.chat, Lang.CONVER_TING )
                                  let media = await ElisaBotMd.downloadAndSaveMediaMessage(quoted)
                                  await ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                                  let ran = await getRandom('.png')
                                  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                                      fs.unlinkSync(media)
                                      if (err) throw err
                                      let buffer = fs.readFileSync(ran)
                                      ElisaBotMd.sendMessage(m.chat, { image: buffer , caption : global.cap  }, { quoted: m })
                                      fs.unlinkSync(ran)
                                  })
                              }
                              break
                              case 'sticvid': case 'tomp4': case 'tovideo': {
                                  if (!quoted) throw 'Reply Image'
                                  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                                  const load =await ElisaBotMd.sendText(m.chat, Lang.CONVER_TING )
                          let { webp2mp4File } = require('./lib/uploader')
                                  let media = await ElisaBotMd.downloadAndSaveMediaMessage(quoted)
                                  let webpToMp4 = await webp2mp4File(media)
                                   ElisaBotMd.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: global.cap } }, { quoted: m })
                                  await fs.unlinkSync(media)
                                  ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                              }
                              break
                              case 'toaud': case 'toaudio': {
                              if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
                              if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
                              const load = await ElisaBotMd.sendText(m.chat, Lang.CONVER_TING )
                              let media = await quoted.download()
                              let { toAudio } = require('./lib/converter')
                              let audio = await toAudio(media, 'mp4')
                               ElisaBotMd.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
                               ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                              }
                              break
                              case 'tomp3': case 'mp3': {
                              if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
                              if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
                              if (!quoted) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
                              const load = await ElisaBotMd.sendText(m.chat, Lang.CONVER_TING )
                              let media = await quoted.download()
                              let { toAudio } = require('./lib/converter')
                              let audio = await toAudio(media, 'mp4')
                              ElisaBotMd.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${ElisaBotMd.user.name}.mp3`}, { quoted : m })
                              ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                              }
                              break
                              case 'tovn': case 'unvoice': {
                              if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
                              if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
                              replay(mess.wait)
                              let media = await quoted.download()
                              let { toPTT } = require('./lib/converter')
                              let audio = await toPTT(media, 'mp4')
                              ElisaBotMd.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
                              }
                              break
                              case 'togif': {
                                  if (!quoted) throw 'Reply Image'
                                  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                                  const load = await ElisaBotMd.sendText(m.chat, Lang.CONVER_TING )
                          let { webp2mp4File } = require('./lib/uploader')
                                  let media = await ElisaBotMd.downloadAndSaveMediaMessage(quoted)
                                  let webpToMp4 = await webp2mp4File(media)
                                  await ElisaBotMd.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                                  await fs.unlinkSync(media)
                                  ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                              }
                              break
    case 'imagenobg': case 'removebg': case 'remove-bg': {
    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
    let remobg = require('remove.bg')
    let apirnobg = ['uFexCoDgX9DYk4sgDYEmuE74','5Cx1DPgcR54PVn5Z5WGGn64V','BEbDqa2mxYkgRC31Z7NCpdNa']
    let apinobg = global.REMOVE_BG_API || apirnobg[Math.floor(Math.random() * apirnobg.length)]
    hmm = await './src/remobg-'+getRandom('')
    localFile = await ElisaBotMd.downloadAndSaveMediaMessage(quoted, hmm)
    outputFile = await './src/hremo-'+getRandom('.png')
    replay(mess.wait)
    remobg.removeBackgroundFromImageFile({
 path: localFile,
 apiKey: apinobg,
 size: "regular",
 type: "auto",
 scale: "100%",
 outputFile 
    }).then(async result => {
    ElisaBotMd.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
    await fs.unlinkSync(localFile)
    await fs.unlinkSync(outputFile)
    })
    }
    break
   case 'removebg2' : {
       if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`

   const media = await ElisaBotMd.downloadAndSaveMediaMessage(quoted)
   await ElisaBotMd.sendText(m.chat,media)
   ElisaBotMd.sendMessage(m.chat, { image: {url :`https://api.akuari.my.id/other/removebg3?link=${media}`} , caption : global.cap  }, { quoted: m })
   await fs.unlinkSync(media)
   }
   break
                          case 'yts': case 'ytsearch': {
                                  if (!text) return reply( `${Lang.EXAMPLE}\n _${prefix + command} how to make queen elisa`)
                                  let yts = require("yt-search")
                                  let search = await yts(text)
                                  let teks = 'Subscribe Search\n\n Result From '+text+'\n\n'
                                  let no = 1
                                  for (let i of search.all) {
                                      teks += `🔵 No : ${no++}\n💮 𝗧𝗬𝗣𝗘 : ${i.type}\n🔳 𝗩𝗜𝗗𝗘𝗢 𝗜𝗗 : ${i.videoId}\n🔴 𝗧𝗜𝗧𝗟𝗘 : ${i.title}\n🔵 𝗩𝗜𝗘𝗪𝗦 : ${i.views}\n🎬 𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡 : ${i.timestamp}\n📡 𝗨𝗣𝗟𝗢𝗔𝗗 𝗔𝗧 : ${i.ago}\n📌 𝗨𝗥𝗟 : ${i.url}\n\n─────────────────\n\n`
                                  }
                                  ElisaBotMd.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
                              }
                              break
                              case 'xnxxsh': {
                                   if (!isXnxxGrp) return m_reply(`*This command has been blocked from Bot at the request of many people !!!*
*If you want to download join grant group [ you must be 18+ to join ] minors don't join*
*ඔබට Download කිරීමට අවශනම් ප්‍රදාන group එක වෙතට සම්බන්ධ වන්න [ එයට සම්බන්ධ වීමට ඔබට වයස 18+ වියයුතුය ] පොඩි උන් join වෙන්න එපා !!!*
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
*Don't get caught by joining the little ones.*
*පොඩි උන් ජොයින් වෙන්න එපා !!!*
https://tinyurl.com/SEX-GROUP-NO-CHILDS`)
                                   if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} mia kalifa`
                                   await ElisaBotMd.sendMessage(from, { react: { text: `🍑`, key: m.key }})
                                  
                                  let search = await fetchJson(`https://nimaxxx.herokuapp.com/api/srhx?q=${text}`)
                                  let teks = '*🎭 XNXX RESULTS 🎭* '+text+'\n\n'
                                  let no = 1
                                  
                                  /*for (let i of search) {
                                      teks += `🔵 No : ${no++}\n👽 title - ${i.title}\n🔄 Duration : ${i.duration}\n 🤤 URL - ${i.link}\n\n─────────────────\n\n`*/
                                  let sections = []   
  for (let i of search) {
  const list = {title: `💥 xɴxx ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 💥`,
  rows: [
	    {
	     title: `${no++} > ${i.title}`, 
	     rowId: `downxnxx ${i.link}`,
      description: `\n➠ Title ${i.title}
➠ duration ${i.duration}`	     
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  ElisaBotMd.sendMessage(
      m.chat, 
      {
       text: `${text} *Here is the list of videos, click the button below to choose*\n\n${m.pushName}`,
       footer: `ʙᴏᴛ ʙʏ ᴅᴀʀᴋ ᴍᴀᴋᴇʀ ᴛʜᴀɴᴋs ғʀᴏ sᴀɴᴜᴡᴀ`,
       title: "*YOUR XNXX SEARCH*",
       buttonText: "ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ",
       sections
      }, { quoted : m })    
         
                                      
                                      
                                 // }
                                 // ElisaBotMd.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/023d7602dcf73bd2638a6.jpg' },  caption: teks }, { quoted: m })
                              }
                              break
                              case 'xnxxsh2': {
                                   
                                  await ElisaBotMd.sendMessage(from, { react: { text: `🍑`, key: m.key }})
                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} story wa anime`
                                  
                                  let search = await fetchJson(`https://nimaxxx.herokuapp.com/api/srhx?q=${text}`)
                                  let teks = '*🎭 XNXX RESULTS 🎭* '+text+'\n\n'
                                  let no = 1
                                  for (let i of search) {
                                      teks += `🔵 No : ${no++}\n👽 title - ${i.title}\n🔄 Duration : ${i.duration}\n 🤤 URL - ${i.link}\n\n─────────────────\n\n`
                                  }
                                  ElisaBotMd.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/023d7602dcf73bd2638a6.jpg' },  caption: teks }, { quoted: m })
                              }
                              break
                              case 'xvideo': {
                                 // if (m.isGroup) throw  '*CAN\T DOWNLOAD ON GROUPS*'
                                 if (SEX_DL == 'true' ){
                                  await ElisaBotMd.sendMessage(from, { react: { text: `🔞`, key: m.key }})
                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} step sister`
                                  
                                  let nima = await fetchJson(`http://kocakz.herokuapp.com/api/media/xvideo/search?query=${text}`)
                                  let teks = '*🎭  XVIDEO RESULTS  🎭* '+text+'\n\n'
                                  let no = 1
                                  const search = nima.result
                                  for (let i of search) {
                                      teks += `🔵 No : ${no++}\n*👽 title :* ${i.title}\n*🗳️ Info :* ${i.info}\n*☞ url :* ${i.link}\n\n─────────────────\n\n`
                                  }
                                  ElisaBotMd.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1d4a15912ba140214fa37.jpg' },  caption: teks }, { quoted: m })
                                  }else {
                                  m_reply('*18+ DOWNLOAD IS DESABLE BY OWNER*')
                                  }
                              }
                              break
                            /*  case 'xnxx' : {
                              if(!SEX_DL == 'true') return m_reply('*18+ DOWNLOAD IS DESABLE BY OWNER*')
                              if(!text) return m_reply('*👸💬 Please Give me a xnxx video title !*\n'+'```.xnxx mia kalifa```')
                              const nima = await fetchJson(`https://nimaxxx.herokuapp.com/api/srhx?q=${text}`)
                              const url = nima.result.link
                              const title = nima.result.title
                              const dlnima = await fetchJson(`https://nimaxxx.herokuapp.com/api/dlx?url=${text}`)
                              const dl_url =
                              
                              }
                              break*/
                              case 'downxvid' : {
                            //  if (m.isGroup) throw '*CAN\T DOWNLOAD ON GROUPS*'
                                  if(SEX_DL == 'true' ){

      // if (!isUrl(text) && !text.includes('https://www.xvideos.com/')) return reply ( '*👸💬 Please give me a correct link*\n'+'```example : .downxvid https://www.xvideos.com/video31785617/milf_jessryan_hot_video_clip_pussy_play_time```')
     //  const nima = await fetchJson(`http://kocakz.herokuapp.com/api/media/xvideo/detail?url=${text}`)
       //const video = nima.files.low
                               if(!text) return reply('*👸💬 Please give me a link*\n'+'```example : .downxvid https://www.xvideos.com/video31785617/milf_jessryan_hot_video_clip_pussy_play_time```')
                               if(!args[0].includes('https://www.xvideos.com/')) return reply ( '*👸💬 Please give me a correct link*\n'+'```example : .downxvid https://www.xvideos.com/video31785617/milf_jessryan_hot_video_clip_pussy_play_time```')
    
                               await ElisaBotMd.sendText(m.chat, `*🔄 Please wait Downloading _XVIDEO_ Video ${m.pushName}...*`, m, )
                               const vid = await fetchJson(`http://kocakz.herokuapp.com/api/media/xvideo/detail?url=${text}`)
                               const video = vid.result.files.low
                               const image = vid.result.image
                               
                               await ElisaBotMd.sendMessage(m.chat, { image: { url: image },  caption: `┌       *༺ 📥  𝚇𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁  📥 ༻*
                               
                               
│ *📡 ᴛɪᴛʟᴇ* : ${vid.result.title}
   
│  *📽️ ᴅᴜʀᴀᴛɪᴏɴ :* ${vid.result.duration} _s_
   
│ *💥 ǫᴜᴀʟɪᴛʏ :* ${vid.result.quality}
   
└───────────❍` })
                               await ElisaBotMd.sendMessage(m.chat, { video: { url: video }, caption: `${m.pushName} *XVIDEO DOWNLOADED*` }, { quoted: m })
                               }else {
                                  m_reply('*18+ DOWNLOAD IS DESABLE BY OWNER*')
                                  }
                               

}
break
                              case 'downxnxx' : {
                                
                                if (!isXnxxGrp) throw '*Download is only Alowd this group*\n\n_https://chat.whatsapp.com/FtaEqyeEOmLBeoefGVIulP_\n\n❍ ~if you want download xnxx video join this~'
                               await ElisaBotMd.sendMessage(from, { react: { text: `🤤`, key: m.key }})
                               await ElisaBotMd.sendText(m.chat, `*🔄 Please wait Downloading Xnxx Video ${m.pushName}...*`, m, )
                               const vid = await axios.get(`https://nimaxxx.herokuapp.com/api/dlx?url=${text}`)
                               const video = vid.data.url
                               const image = vid.data.thumb
                               
                               await ElisaBotMd.sendMessage(m.chat, { image: { url: image },  caption: `┌       *༺ 📥  𝚇𝙽𝚇𝚇 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁  📥 ༻*
                               
                               
│ *📡 ᴛɪᴛʟᴇ* : ${vid.data.title}
   
│  *📽️ ᴅᴜʀᴀᴛɪᴏɴ :* ${vid.data.duration}
   
│ *💥 ǫᴜᴀʟɪᴛʏ :* ${vid.data.quality}
   
│ *👁 ᴠɪᴇᴡs :* ${vid.data.views}
   
└───────────❍` })
                               await ElisaBotMd.sendMessage(m.chat, { video: { url: video }, caption: `*💥 SUCCESS DOWNLOAD XNXX VIDEO 💥*` }, { quoted: m })
                               
                              }
                              break
                              
                              case 'nimaxnxx' : {
                              await ElisaBotMd.sendMessage(from, { react: { text: `🤤`, key: m.key }})
                                 
                               await ElisaBotMd.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                               const vid = await axios.get(`https://nimaxxx.herokuapp.com/api/dlx?url=${text}`)
                               const video = vid.data.url
                                
                               ElisaBotMd.sendMessage(m.chat, { video: { url: video }, caption: `*${vid.data.title}*` }, { quoted: m })
                               
                              }
                              break
                              case 'git': case 'gitclone': {
           
                              let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                              if (!args[0]) reply(`Use ${prefix}gitclone repo link\n${Lang.EXAMPLE}\n: https://github.com/darkmaker/Queen-Elisa-Md-V2`)
                              if (!regex1.test(args[0])) return reply('link')
                              let [, user, repo] = args[0].match(regex1) || []
                              repo = repo.replace(/.git$/, '')
                              let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                              let filename =  `${user}${repo}`
                              //(await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                              ElisaBotMd.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
                              }
                              break
                              case 'directvideo' : {
                              await ElisaBotMd.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                              await ElisaBotMd.sendMessage(m.chat, { video: { url: text }, caption: `*If you want Download Hight Qulity Video use this link*` }, { quoted: m })
                               
                              }
                              break
                              case 'directimg' : {
                              await ElisaBotMd.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                              await ElisaBotMd.sendMessage(m.chat, { image: { url: text }, caption: `*If you want Download Hight Qulity Video use this link*` }, { quoted: m })
                               
                              }
                            break
                              case 'directmp3' : {
                              await ElisaBotMd.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                              await ElisaBotMd.sendMessage(m.chat, { audio: { url: text } , mimetype: 'audio/mpeg' }, { quoted: m })
                               
                              }
                              break
                              case 'directapk' : {
                              await ElisaBotMd.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                              await ElisaBotMd.sendMessage(m.chat, { document: { url: text }, mimetype: 'application/vnd.android.package-archive', fileName: `QueenElisa.apk`}, { quoted: m })
             
                              }
                              break
                              case 'qr' : {
                              if(!isCreator) throw mess.owner
                              await ElisaBotMd.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                              await ElisaBotMd.sendText(m.chat,'```🔄 Please Wait Connecting Elisa Bot Sever ....```')
                              await ElisaBotMd.sendMessage(m.chat, { image: { url: 'https://Mr-Nima-Test.gahakola.repl.co' }, caption: '```🧑‍💻 Download Qr Code And Scan Qr || Code More > Linked device ||```\n\n *▷ Deploy https://github.com/DarkMakerofc/Queen-Elisa-Md-V2* ' }, { quoted: m })
                               
                              }
                              break
                          case 'google': {
                                  if (!text) throw `Example : ${prefix + command} queen elisa bot`
                                  await fetchJson(`https://api.akuari.my.id/search/google?query=${text}`)
                                  .then(async (nima) => { 
                                  const res = nima.result
                                  let teks = `*『 ǫᴜᴇᴇɴ ᴇʟɪsᴀ ɢᴏᴏɢʟᴇ sᴇᴀʀᴄʜ 』* \n_🔍 sᴇᴀʀᴄʜ : ${text}_\n\n`
                                  for (let g of res) {
                                  teks += `➠ *Title* : ${g.title}\n`
                                  teks += `➠ *Description* : ${g.snippet}\n`
                                  teks += `➠ *Link* : ${g.link}\n\n────────────────────────\n\n`
                                  }
                                  reply(`teks`)
                                  }).catch((err) => m_reply(NOT_FOUND))
                                  
                                  }
                                  break
                          case 'img' : {
//if (isSupport) return
if (!text) return reply(`*🧑‍💻💬 ${m.pushName} Give Some search* \n_*🗳️ Example :* .img Queen Elisa Whatsapp bot_`)
// const load = await ElisaBotMd.sendText(m.chat,WAIT)
await ElisaBotMd.sendMessage(from, { react: { text: `🖼️`, key: m.key }})
 await fetchJson(`https://api.tiodevhost.my.id/api/search/googleimage?text=${text}`)
 .then(async (nima) => { 
 const imagee1 = nima.result[0].url
 const imagee2 = nima.result[1].url
 const imagee3 = nima.result[2].url
 const imagee4 = nima.result[3].url
 const imagee5 = nima.result[4].url
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee1 }, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee2 }, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee3 }, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee4 }, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee5 }, caption: global.CAPTION }, { quoted: m })
   
    }).catch((err) => reply(NOT_FOUND))

//reply('not setted')
}
break
                          case 'gimage': case 'img2': {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `🔍`, key: m.key }})
                          if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} ml nana`
                          let gis = require('g-i-s')
                          gis(text, async (error, result) => {
                          n = result
                          images = n[Math.floor(Math.random() * n.length)].url
                          /*let buttons = [
                                      {buttonId: `gimage ${text}`, buttonText: {displayText: 'NEXT IMG'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      image: { url: images },
                                      caption: `*𝗚𝗢𝗢𝗚𝗟𝗘 𝗜𝗠𝗔𝗚𝗘*
💫 *𝗤𝗨𝗘𝗥𝗬* : ${text}
🔗 *𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟* : ${images}`,
                                      footer: ElisaBotMd.user.name,
                                      buttons: buttons,
                                      headerType: 4
                                  }
                                  ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
                          })*/
                          const buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '❯ NEXT IMAGE ❯'}, type: 1},
                     
                ]
            const buttonMessage = {
                    image: { url: images },
                    caption: `*𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙸𝙼𝙰𝙶𝙴 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁*
⦁ *𝚁𝙴𝚀𝚄𝙴𝚂𝚃* : ${text}
⦁ *𝙼𝙴𝙳𝙸𝙰 𝚄𝚁𝙻* : ${images}
⦁ *𝚁𝙴𝚀𝚄𝙴𝚂𝚃𝙴𝚁* :${m.pushName}`,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
                
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })})
               
                          }
                          break
                          case 'play': case 'yt': { 
var GIVEME = ''
if (global.LANG == 'SI') GIVEME = "```👸💬 කරුනාකර මට වීඩියෝවක හෝ ගීතයක නමක් ලබාදෙන්න.```\n*උදාහරණ - .yt how to make queen elisa bot*"
if (global.LANG == 'EN') GIVEME ="```👸💬 Please give me a video or song name.```\n *Example - .yt how to make queen elisa bot*"
                                  await ElisaBotMd.sendMessage(from, { react: { text: `📽️`, key: m.key }})
                                  if (!text) return reply (GIVEME)
                                  await ElisaBotMd.sendText(m.chat,mess.wait, m, )
                                  let yts = require("yt-search")
                                  var svid = text.replace("shorts/","watch?v=")
                                  var s2vid = svid.replace("?feature=share","")
                                  yts(s2vid).then(async (search) => { 
                                  let nima = search.all     
if (search.all[0].type == 'channel') {

                const buttons = [
                    {buttonId: `selecttypebutton ${search.all[1].url}`, buttonText: {displayText: '🎬 VIDEO 🎬'}, type: 1},
                    {buttonId: `audioselecttypebutton  ${search.all[1].url} `, buttonText: {displayText: '🎧 AUDIO 🎧'}, type: 1},
 ]
            const buttonMessage = {
                    image: { url: search.all[1].thumbnail },
                    caption: `⫷⦁[ *👸 𝙴𝙻𝙸𝚂𝙰 𝚈𝚃 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 👸* ]⦁⫸

*ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*

 ➥ ᴛɪᴛʟᴇ -  ${search.all[1].title}

 ➥ ᴠɪᴇᴡs - ${search.all[1].views}

 ➥ ᴅᴜʀᴀᴛɪᴏɴ - ${search.all[1].timestamp}

 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${search.all[1].ago}

 ➥ ᴜʀʟ - ${search.all[1].url}` ,
                    footer: global.botnma,
                    buttons: buttons,
                    headerType: 4
                }
                
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
                 
} else if (search.all[0].type == 'video') {
                let nima = search.all           
                const buttons = [
                    {buttonId: `selecttypebutton ${search.all[0].url}`, buttonText: {displayText: '🎬 VIDEO 🎬'}, type: 1},
                    {buttonId: `audioselecttypebutton  ${search.all[0].url} `, buttonText: {displayText: '🎧 AUDIO 🎧'}, type: 1},
]
            const buttonMessage = {
                    image: { url: search.all[0].thumbnail },
                    caption:   `⫷⦁[ *👸 𝙴𝙻𝙸𝚂𝙰 𝚈𝚃 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 👸* ]⦁⫸

*ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*

 ➥ ᴛɪᴛʟᴇ -  ${search.all[0].title}

 ➥ ᴠɪᴇᴡs - ${search.all[0].views}

 ➥ ᴅᴜʀᴀᴛɪᴏɴ - ${search.all[0].timestamp}

 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${search.all[0].ago}

 ➥ ᴜʀʟ - ${search.all[0].url}` ,
                    footer: global.botnma,
                    buttons: buttons,
                    headerType: 4
                }
                
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
                 
}})
                                  

 
                 }
                              break
                              case 'ytv': {
const rash = await fetchJson(`https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json`)
const mp14 = rash.mp14
const mp24 = rash.mp24
const sdpid = rash.sddlid
const hdmidpid = rash.sdmiddlid
const hdpid = rash.hddlid
                              if (!text) throw `${Lang.EXAMPLE}\n : *${prefix + command} How to make queen elisa V2*`
                                  await ElisaBotMd.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                                  let yts = require("yt-search")
                                  var svid = text.replace("shorts/","watch?v=")
                                  var s2vid = svid.replace("?feature=share","")
                                  yts(s2vid).then(async (search) => {  
                                  for (let i of search.all)   
                                  views = search.all[0].views
                                      ngen = '⫷⦁[ *👸 𝙴𝙻𝙸𝚂𝙰 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 👸* ]⦁⫸\n\n*ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*\n\n ➥ ᴛɪᴛʟᴇ - '+search.all[0].title+'\n\n ➥ ᴠɪᴇᴡs - '+views+'\n\n ➥ ᴅᴜʀᴀᴛɪᴏɴ - '+search.all[0].timestamp+'\n\n ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - '+search.all[0].ago+'\n\n ➥ ᴜʀʟ - '+search.all[0].url

            	
                
const sections = [
    {
	title: "ＱＵＥＥＮ  ＥＬＩＳＡ Ｖ2",
	rows: [
	    {title: "144P 𝚀𝚞𝚊𝚕𝚒𝚝𝚢", rowId: `${mp14} ${search.all[0].url} 144p`, description: `${search.all[0].title}`},
	    {title: "240P 𝚀𝚞𝚊𝚕𝚒𝚝𝚢", rowId: `${mp24} ${search.all[0].url} 240p`, description: `${search.all[0].title}`},
	    {title: "360P 𝚀𝚞𝚊𝚕𝚒𝚝𝚢", rowId: `${sdpid} ${search.all[0].url} 360p`, description: `${search.all[0].title}`},
	    {title: "480P 𝚀𝚞𝚊𝚕𝚒𝚝𝚢", rowId: `${hdmidpid} ${search.all[0].url} 480p`, description: `${search.all[0].title}`},
	    {title: "720P 𝚀𝚞𝚊𝚕𝚒𝚝𝚢", rowId: `${hdpid} ${search.all[0].url} 720p`, description: `${search.all[0].title}`},
	    {title: "1080P 𝚀𝚞𝚊𝚕𝚒𝚝𝚢", rowId: `video2 ${search.all[0].url} 1080p`, description: `${search.all[0].title}`}
	
	]
    },
]

const listMessage = {
  text: ngen,
  footer: global.botnma,
  buttonText: "ＳＥＬＥＣＴ ＶＩＤＥＯ",
  sections
}

const me = await ElisaBotMd.sendMessage(m.chat, listMessage)}).catch((err) => m_reply('*Sorry, Can\'t Find your reqest ❗*'))
await ElisaBotMd.sendMessage(from, { react: { text: `🎦`, key: m.key }})
await new Promise(r => setTimeout(r, 2000)) 
await ElisaBotMd.sendMessage(from, { react: { text: `⏳`, key: m.key }})
await new Promise(r => setTimeout(r, 2000)) 
await ElisaBotMd.sendMessage(from, { react: { text: `🎦`, key: m.key }})
  }
            break

                              case 'song' : {
var GIVEME = ''
if (global.LANG == 'SI') GIVEME = "```👸💬 කරුනාකර මට ගීතයක නමක් ලබාදෙන්න.```\n*උදාහරණ - .song rosa male natuwe katu*"
if (global.LANG == 'EN') GIVEME ="```👸💬 Please give me a song name.```\n *Example - .song rosa male natuwe katu*"
const rash = await fetchJson(`https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json`)
const audidd = rash.audcmd
const docidd = rash.doccmd
                              await ElisaBotMd.sendMessage(from, { react: { text: `🎵`, key: m.key }})
                                  if (!text) return reply(GIVEME)
                                  await ElisaBotMd.sendText(m.chat, mess.wait, m, )
                                  let yts = require("yt-search")
                                 // let search = await yts(text)
                                  yts(text).then(async (search) => {  
                                  for (let i of search.all)  
                                  if(search.all.length < 1) throw Lang.NOT_FOUND 
                                     
                              
                const footer = global.botnma
                const buttons = [
                    {buttonId: `${docidd} ${search.all[0].url}`, buttonText: {displayText: '📁 DOCUMENT 📁'}, type: 1},
                    {buttonId: `${audidd}  ${search.all[0].url}`, buttonText: {displayText: '🎧 AUDIO 🎧'}, type: 1}
                    
                ]
            const buttonMessage = {
                    image: { url: search.all[0].thumbnail },
                    caption: `⫷⦁[ *👸 𝙴𝙻𝙸𝚂𝙰 𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 👸* ]⦁⫸

*ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*

 ➥ ᴛɪᴛʟᴇ -  ${search.all[0].title}

 ➥ ᴠɪᴇᴡs - ${search.all[0].views}

 ➥ ᴅᴜʀᴀᴛɪᴏɴ - ${search.all[0].timestamp}

 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${search.all[0].ago}

 ➥ ᴜʀʟ - ${search.all[0].url}`,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
                
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })})
                 
                             }
                             break
                              case 'video': { 
const rash = await fetchJson(`https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json`)
const sdpid = rash.sddlid
const hdmidpid = rash.sdmiddlid
const hdpid = rash.hddlid

var GIVEME = ''
if (global.LANG == 'SI') GIVEME = "```👸💬 කරුනාකර මට වීඩියෝවක නමක් ලබාදෙන්න.```\n*උදාහරණ - .yt how to make queen elisa bot*"
if (global.LANG == 'EN') GIVEME ="```👸💬 Please give me a video name.```\n *Example - .video how to make queen elisa bot*"

                          //await ElisaBotMd.sendMessage(from, { react: { text: `📽️`, key: m.key }})
                                  if (!text) return reply (GIVEME)
                                  await ElisaBotMd.sendText(m.chat, mess.wait, m, )
                                  let yts = require("yt-search")
                                  var svid = text.replace("shorts/","watch?v=")
                                  var s2vid = svid.replace("?feature=share","")
                                  yts(s2vid).then(async (search) => { 
                                  let nima = search.all     
if (search.all[0].type == 'channel') {

                const buttons = [
                    {buttonId: `${sdpid} ${search.all[1].url}`, buttonText: {displayText: '360p'}, type: 1},
                    {buttonId: `${hdmidpid} ${search.all[1].url} 480p`, buttonText: {displayText: '480p'}, type: 1},
                    {buttonId: `${hdpid} ${search.all[1].url} 720p`, buttonText: {displayText: '720p'}, type: 1}
                ]
            const buttonMessage = {
                    image: { url: search.all[1].thumbnail },
                    caption: `⫷⦁[ *👸 𝙴𝙻𝙸𝚂𝙰 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 👸* ]⦁⫸

*ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*

 ➥ ᴛɪᴛʟᴇ -  ${search.all[1].title}

 ➥ ᴠɪᴇᴡs - ${search.all[1].views}

 ➥ ᴅᴜʀᴀᴛɪᴏɴ - ${search.all[1].timestamp}

 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${search.all[1].ago}

 ➥ ᴜʀʟ - ${search.all[1].url}` ,
                    footer: global.botnma,
                    buttons: buttons,
                    headerType: 4
                }
                
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
                 
} else if (search.all[0].type == 'video') {
const rash = await fetchJson(`https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json`)
const sdpid = rash.sddlid
const hdmidpid = rash.sdmiddlid
const hdpid = rash.hddlid
                let nima = search.all           
                const buttons = [
                    {buttonId: `${sdpid} ${search.all[0].url}`, buttonText: {displayText: '360p'}, type: 1},
                    {buttonId: `${hdmidpid} ${search.all[0].url} 480p`, buttonText: {displayText: '480p'}, type: 1},
                    {buttonId: `${hdpid} ${search.all[0].url} 720p`, buttonText: {displayText: '720p'}, type: 1}
                ]
            const buttonMessage = {
                    image: { url: search.all[0].thumbnail },
                    caption:   `⫷⦁[ *👸 𝙴𝙻𝙸𝚂𝙰 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 👸* ]⦁⫸

*ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*

 ➥ ᴛɪᴛʟᴇ -  ${search.all[0].title}

 ➥ ᴠɪᴇᴡs - ${search.all[0].views}

 ➥ ᴅᴜʀᴀᴛɪᴏɴ - ${search.all[0].timestamp}

 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${search.all[0].ago}

 ➥ ᴜʀʟ - ${search.all[0].url}` ,
                    footer: global.botnma,
                    buttons: buttons,
                    headerType: 4
                }
                
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
                 
}})
                                  

}
                          break
                          case 'song2' : {
var GIVEME = ''
if (global.LANG == 'SI') GIVEME = "```👸💬 කරුනාකර මට ගීතයක නමක් ලබාදෙන්න.```\n*උදාහරණ - .song2 lelena*"
if (global.LANG == 'EN') GIVEME ="```👸💬 Please give me a song name.```\n *Example - .song2 lelena*"
text1 = q.split(";")[0]
text2 = q.split(";")[1]
await ElisaBotMd.sendMessage(from, { react: { text: `⌛`, key: m.key }})

                          //await ElisaBotMd.sendMessage(from, { react: { text: `🎧`, key: m.key }})
                                  if (!text) return reply (GIVEME)
                                  let yts = require("yt-search")
                                  //const load = await ElisaBotMd.sendText(m.chat, `\n*📥 Downloading ${m.pushName} your song...*\n` )
                                  const load = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN, m, )
                                  yts(text).then(async (search) => {  
                                  
                                  let nima = search.all
                                  let media = await fetchJson(`https://api.tiodevhost.my.id/api/dowloader/yt?url=${search.all[0].url}`)
                                  buf = await getBuffer(media.result.thumb)
                                  await  ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                                  //const up = await ElisaBotMd.sendText(m.chat, `\n*📤 Uploading ${m.pushName} your song...*\n` )
                                  const up = await ElisaBotMd.sendText(m.chat, global.SONG_UP, m, )
                                  
                                  if (media.result.song_size >= 120000) return reply('*FILE SIZE IS BIG !!!*')
                                  const doc = await ElisaBotMd.sendMessage(m.chat, {document:{ url: media.result.mp3 }, mimetype:"audio/mpeg", fileName: `${media.result.Title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                title:`${media.result.Title}`,
                body:"YOUTUBE MP3",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`${text}`, 
                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})
                await ElisaBotMd.sendMessage(m.chat, { delete: up.key })
                                  await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: doc.key }})

                                  }).catch((err) => m_reply(NOT_FOUND))
                           }
                          break  
                          case 'audiosong2' : {
var GIVEME = ''
if (global.LANG == 'SI') GIVEME = "```👸💬 කරුනාකර මට ගීතයක නමක් ලබාදෙන්න.```\n*උදාහරණ - .song2 lelena*"
if (global.LANG == 'EN') GIVEME ="```👸💬 Please give me a song name.```\n *Example - .song2 lelena*"

await ElisaBotMd.sendMessage(from, { react: { text: `⌛`, key: m.key }})

                          //await ElisaBotMd.sendMessage(from, { react: { text: `🎧`, key: m.key }})
                                   if (!text) return reply (GIVEME)
                                  let yts = require("yt-search")
                                  //const load = await ElisaBotMd.sendText(m.chat, `\n*📥 Downloading ${m.pushName} your song...*\n` )
                                  const load = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN, m, )
                                  yts(text).then(async (search) => {  
                                  
                                  let nima = search.all
                                  let media = await fetchJson(`https://test-apiyaa.herokuapp.com/api/dowloader/yt?url=${search.all[0].url}`)
                                  buf = await getBuffer(media.result.thumb)
                                  await  ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                                  //const up = await ElisaBotMd.sendText(m.chat, `\n*📤 Uploading ${m.pushName} your song...*\n` )
                                  const up = await ElisaBotMd.sendText(m.chat, global.SONG_UP, m, )
                                  
                                  if (media.result.song_size >= 120000) return reply('*FILE SIZE IS BIG !!!*')
                                  const doc = await ElisaBotMd.sendMessage(m.chat, {audio:{ url: media.result.mp3 }, mimetype:"audio/mpeg", fileName: `${media.result.Title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                title:`${media.result.Title}`,
                body:"YOUTUBE MP3",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`${text}`, 
                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})
                await ElisaBotMd.sendMessage(m.chat, { delete: up.key })
                                  await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: doc.key }})

                                  }).catch((err) => m_reply(NOT_FOUND))
                           }
                          break  
                          case 'song4' : {
                          var GIVEME = ''
if (global.LANG == 'SI') GIVEME = "```👸💬 කරුනාකර මට ගීතයක නමක් ලබාදෙන්න.```\n*උදාහරණ - .song3 lelena*"
if (global.LANG == 'EN') GIVEME ="```👸💬 Please give me a song name.```\n *Example - .song3 lelena*"
text1 = q.split(";")[0]
text2 = q.split(";")[1]
                          await ElisaBotMd.sendMessage(from, { react: { text: `🎧`, key: m.key }})
                                  if (!text) return reply (GIVEME)
                                  let yts = require("yt-search")
                                  //const load = await ElisaBotMd.sendText(m.chat, `\n*📥 Downloading ${m.pushName} your song...*\n` )
                                  const laod = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN, m, )
                                  yts(text).then(async (search) => {  
                                  let nima = search.all
                          
                          const akur = await fetchJson(`https://a.api.akuari.my.id/downloader/youtube3?link=${search.all[0].url}&type=360`)
                          const gettsong = akur.audio.audio
                          await  ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                          //const up = await ElisaBotMd.sendText(m.chat, `\n*📤 Uploading ${m.pushName} your song...*\n` )
                          const up = await ElisaBotMd.sendText(m.chat, global.SONG_UP, m, )
                          if ( text2 === 'audio' ){
                                 // if (media.filesize >= 120000) return reply('❗ Audio size is too big '+util.format(media))
                                  await ElisaBotMd.sendMessage(m.chat, { audio: { url : gettsong }, mimetype: 'audio/mpeg', fileName: `${akur.title}.mp3` }, { quoted: m })
                                  return await ElisaBotMd.sendMessage(m.chat, { delete: up.key })
                                  
                                  }
                                 // if (media.filesize >= 120000) return reply('❗ Audio size is too big '+util.format(media))
                                  await ElisaBotMd.sendMessage(m.chat, { document: { url : gettsong }, mimetype: 'audio/mpeg', fileName: `${akur.title}.mp3` }, { quoted: m })
                                  await ElisaBotMd.sendMessage(m.chat, { delete: up.key })
                                  
                          }).catch((err) => m_reply(err))
                          }
                          break
                          case 'video3' :{
var GIVEME = ''
if (global.LANG == 'SI') GIVEME = "```👸💬 කරුනාකර මට වීඩියෝවක නමක් ලබාදෙන්න.```\n*උදාහරණ - .yt how to make queen elisa bot*"
if (global.LANG == 'EN') GIVEME ="```👸💬 Please give me a video or song name.```\n *Example - .yt how to make queen elisa bot*"
text1 = q.split(";")[0]
text2 = q.split(";")[1]
                          if (!text) return reply(GIVEME)
                          await ElisaBotMd.sendMessage(from, { react: { text: `🎥`, key: m.key }})
                          const yts = require("yt-search")
                          const load = await ElisaBotMd.sendText(m.chat, `📥 Downloading ${m.pushName} your video...*`, m, )
                          const search = await yts(text)
                        //  for (let i of search.all)  
                          const vid = await fetchJson(`https://youtubeapisdownloader.vercel.app/youtube/downloader/video?url=${search.all[0].url}`)
                          //const data = await fetchJson(`https://cakrayp.herokuapp.com/api/youtube/video/search?query=${text}&type=default&apikey=cakrayp24Q6`)
                          const capp = `${global.cap}
                          
 *➮ ᴛɪᴛʟᴇ :* ${vid.result.title}
 
 *➮ ᴜʀʟ* ${search.all[0].url}
                          `
                          const sdsize = vid.result.downloads.tubemp3_biz[0].size
                          const hdsize = vid.result.downloads.tubemp3_biz[1].size
                          await  ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                          if (text.split(";")[1] == 'hd'){
                          if (hdsize.split('MB')[0] >= 110) return reply('*CAN\'T UPLODE YOUR FILE* \n_YOUR VIDEO BIGGER THAN 100mb_\n\nfile size')
                          const video = vid.result.downloads.tubemp3_biz[1].url
                          const upload = await ElisaBotMd.sendText(m.chat, `*📤 Uploading ${m.pushName} your video...*`, m, )
                          await ElisaBotMd.sendMessage(m.chat, { video: { url: video }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: capp }, { quoted: m })
                          return 
                          }
                          if (sdsize.split('MB')[0] >= 110) return reply('*CAN\'T UPLODE YOUR FILE* \n_YOUR VIDEO BIGGER THAN 100mb_\n\nfile size')
                          const video = vid.result.downloads.tubemp3_biz[0].url
                          const upload = await ElisaBotMd.sendText(m.chat, `*📤 Uploading ${m.pushName} your video...*`, m, )
                          await ElisaBotMd.sendMessage(m.chat, { video: { url: video }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: capp }, { quoted: m })
                          await  ElisaBotMd.sendMessage(m.chat, { delete: upload.key })
                          }     
                          break 
                          case 'video2' :{
                          const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')
                          buf = await getBuffer(thub.YT_THUB)
                          if (!text) return reply('*👸💬 Need video name or url*')
                          if (text.includes('https://youtu')){
                         // if (!text.includes('-')) return reply('*👸💬 Please give me a correct type*\n_example .video2 https://youtube.com/watch?v=on3sJ8OlH8M - 360p')
                          const quality = args[1] ? args[1] : '360'
                          await ElisaBotMd.sendMessage(from, { react: { text: `⬇️`, key: m.key }})
                          ///const load = await ElisaBotMd.sendText(m.chat, `*📥 Downloading ${m.pushName} your video...*`, m, )
                          const nima = await fetchJson(`https://api.akuari.my.id/downloader/youtube3?link=${args[0]}&type=${quality}`)
                          await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
                       ///   const upload = await ElisaBotMd.sendText(m.chat, `*📤 Uploading ${m.pushName} your video...*`, m, )
                          if (nima.mp4.size.split('MB')[0] >= 110) return m_reply('*FILE SIZE IS BIG !!!*')
                          const ytvid = await ElisaBotMd.sendMessage(m.chat, { video: { url: nima.mp4.download }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: `${global.cap}\n\n *🏷 title :*️ ${nima.title}\n*🧩 quality : ${quality}p ` }, { quoted: m })
                          await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
                          await ElisaBotMd.sendMessage(from, { react: { text: `📽️`, key: ytvid.key }})
                         
                          } else {
                    m_reply(mess.wait)
                    const yts = require("yt-search")
                    const nima = await yts(text)
                    const search = nima.all
                    
                   let sections = []   
  for (let i of search) {
  const list = { title: `✨ select ✨`,
   rows :[
	    {
	     title: `${i.title}`, 
	     rowId: `video2 ${i.url} `,
      description: `DOWNLOAD 360P QULITY`	     
	    },
	    {
	     title: `${i.title}`, 
	     rowId: `video2 ${i.url} 720`,
      description: `DOWNLOAD 720P QULITY`	     
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  ElisaBotMd.sendMessage(
      m.chat, 
      {
       text: `${text} *Here is the list of videos, click the button below to choose*\n\n${m.pushName}`,
       footer: `${global.botnma}`,
       title: `*👸 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 👸*\n\n Search from ${text}`,
       buttonText: "ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ",
       sections
      }, { quoted : m })    
               
                          
    }                       
                             
                          }
                          break
                         
                          case 'ytdl4' : {
                          let boltc = require('@bochilteam/scraper')
                          await boltc.youtubedlv2(`${text}`)
                          .then(async(nima) => {
                          const dl_url = await nima.video['360p'].download()
                          const dl_url3 = await nima.video['240p'].download()
                          const dl_url2 = await nima.video['720p'].download()
                          const dl_url4 = await nima.audio['128kbps'].download()
                          await ElisaBotMd.sendText(m.chat,`
360 ${dl_url}
240 ${dl_url2}
720 ${dl_url3}
audio ${dl_url4}
    
                          
                                                
${jsonformat(nima)}`)
                          })
                          }
                          break
                          case 'bolchidl' : {
                          let boltc = require('@bochilteam/scraper')
                          const nima = await boltc.youtubedl(`${text}`)
                          const nima1 = await boltc.youtubedlv2(`${text}`)
                          const nima2 = await boltc.youtubedl3(`${text}`)
                          reply(`${jsonformat(nima)}
▷▷▷

${jsonformat(nima1)}

▷▷▷▷

${jsonformat(nima2)}
`)
                          }
                          break
                          case 'bolchiyt' : {
                          let boltc = require('@bochilteam/scraper')
                          const nima = await boltc.youtubeSearch(`${text}`)
                          reply(`${jsonformat(nima)}`)
                          }
                          break
                          case 'ytdl5' : {
                          const url = text.split(";")[0]
                          const query = text.split(";")[1]
                          const api = require("onx-api")
const nima1 = await api.downloader.youtube.ytmp3(url)
const nima2 = await api.downloader.youtube.ytmp4(url)
const nima3 = await api.downloader.youtube.ytplay(query)
const nima4 = await api.downloader.youtube.ytplayvid(query)

await ElisaBotMd.sendText(m.chat , `${jsonformat(nima4)}`)
await ElisaBotMd.sendText(m.chat , `${jsonformat(nima1)}`)
await ElisaBotMd.sendText(m.chat , `${jsonformat(nima2)}`)
await ElisaBotMd.sendText(m.chat , `${jsonformat(nima3)}`)



                          }
                          break
                          case '144getvideo' : {
                         if(!text) return m_reply('need text')
                          await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
                          await ElisaBotMd.sendText(m.chat,mess.wait)
                          const yts = require("yt-search")
                          const search = await yts(`${args[0]}`)
                          let boltc = require('@bochilteam/scraper')
                          await boltc.youtubedlv2(search.all[0].url)
                          
                          .then(async(nima) => {
                          const dl_url = await nima.video['144p'].download()
                          const size = nima.video['144p'].fileSize
                          if(size >= 120000) return m_reply('*FILE SIZE IS SO BIG !!!*')
                       //   if(nima.video.720p.fileSize >= 110000) return m_reply('*FILE SIZE IS SO BIG !!!*')
                          await ElisaBotMd.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: global.cap }, { quoted: m })
                          }).catch((err) => m_reply(NOT_FOUND))
                      
                          }
                          break
                          case '240getvideo' : {
                         if(!text) return m_reply('need text')
                          await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
                          await ElisaBotMd.sendText(m.chat,mess.wait)
                          const yts = require("yt-search")
                          const search = await yts(`${args[0]}`)
                          let boltc = require('@bochilteam/scraper')
                          await boltc.youtubedlv2(search.all[0].url)
                          
                          .then(async(nima) => {
                          const dl_url = await nima.video['240p'].download()
                          const size = nima.video['240p'].fileSize
                          if(size >= 120000) return m_reply('*FILE SIZE IS SO BIG !!!*')
                       //   if(nima.video.720p.fileSize >= 110000) return m_reply('*FILE SIZE IS SO BIG !!!*')
                          await ElisaBotMd.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: global.cap }, { quoted: m })
                          }).catch((err) => m_reply(NOT_FOUND))
                      
                          }
                          break
                          case 'getvideo' : {
                          if(!text) return m_reply('need text')
                          await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
                          await ElisaBotMd.sendText(m.chat,mess.wait)
                          const yts = require("yt-search")
                          const search = await yts(text)
                          let boltc = require('@bochilteam/scraper')
                          await boltc.youtubedlv2(search.all[0].url)
                          .then(async(nima) => {
                          const dl_url = await nima.video['360p'].download()
                          const size = nima.video['360p'].fileSize
                          if(size >= 120000) return m_reply('*FILE SIZE IS SO BIG !!!*')
                          await ElisaBotMd.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                          //await ElisaBotMd.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: `${global.cap}` }, { quoted: m })
                          }).catch((err) => m_reply(NOT_FOUND))
                      
                          }
                          break
                          case '480getvideo' : {
                          if(!text) return m_reply('need text')
                          await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
                          await ElisaBotMd.sendText(m.chat,mess.wait)
                          const yts = require("yt-search")
                          const search = await yts(text.split("480")[0])
                          let boltc = require('@bochilteam/scraper')
                          await boltc.youtubedlv2(search.all[0].url)
                          .then(async(nima) => {
                          const dl_url = await nima.video['480p'].download()
                          const size = nima.video['480p'].fileSize
                          if(size >= 120000) return m_reply('*FILE SIZE IS SO BIG !!!*')
                          await ElisaBotMd.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: global.cap }, { quoted: m })
                          }).catch((err) => m_reply(NOT_FOUND))
                      
                          }
                          break
                          case '720getvideo' : {
                         if(!text) return m_reply('need text')
                          await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
                          await ElisaBotMd.sendText(m.chat,mess.wait)
                          const yts = require("yt-search")
                          const search = await yts(`${args[0]}`)
                          let boltc = require('@bochilteam/scraper')
                          await boltc.youtubedlv2(search.all[0].url)
                          
                          .then(async(nima) => {
                          const dl_url = await nima.video['720p'].download()
                          const size = nima.video['720p'].fileSize
                          if(size >= 120000) return m_reply('*FILE SIZE IS SO BIG !!!*')
                       //   if(nima.video.720p.fileSize >= 110000) return m_reply('*FILE SIZE IS SO BIG !!!*')
                          await ElisaBotMd.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: global.cap }, { quoted: m })
                          }).catch((err) => m_reply(NOT_FOUND))
                      
                          }
                          break
                          case 'song3' : {
                          if(!text) return m_reply('need text')
                         // await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
                          const down = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN,m,)
                          const yts = require("yt-search")
                          const search = await yts(text)
                          const buf = await getBuffer(search.all[0].thumbnail)
                          const boltc = require('@bochilteam/scraper')
                          await boltc.youtubedlv2(search.all[0].url)
                          .then(async(nima) => {
                          const dl_url = await nima.audio['128kbps'].download()
                          await ElisaBotMd.sendMessage(m.chat,{delete : down.key }) 
                          const up = await ElisaBotMd.sendText(m.chat,global.SONG_UP,m,)
                          const doc = await ElisaBotMd.sendMessage(m.chat, {document:{ url: dl_url }, mimetype:"audio/mpeg", fileName: `${nima.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                title:`${nima.title}`,
                body:"YOUTUBE MP3",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`${text}`, 
                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})
                await ElisaBotMd.sendMessage(m.chat, { delete: up.key })
                                  await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: doc.key }})
//await ElisaBotMd.sendMessage(m.chat,{delete : up.key }) 
                           //await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: m.key }})

                                  }).catch((err) => m_reply(err))
                      
                          }
                          break
                          case 'asong' : {
                          if(!text) return m_reply('need text')
                          await ElisaBotMd.sendMessage(from, { react: { text: `⬇️`, key: m.key }})
                          const yts = require("yt-search")
                          const search = await yts(text)
                          //const buf = await getBuffer(search.all[0].thumbnail)
                          const boltc = require('@bochilteam/scraper')
                          await boltc.youtubedlv3(search.all[0].url)
                          .then(async(nima) => {
                          const dl_url = await nima.audio['131'].download()
                          await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
                          await ElisaBotMd.sendMessage(m.chat, { audio : { url : dl_url }, mimetype: 'audio/mpeg', fileName: `${search.all[0].title}.mp3` }, { quoted: m })
                          
                           await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})

                                  }).catch((err) => m_reply(err))
                      
                          }
                          break
                          case 'audiosong3' : {
                          if(!text) return m_reply('need text')
                         // await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
                          const down = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN,m,)
                          const yts = require("yt-search")
                          const search = await yts(text)
                          const buf = await getBuffer(search.all[0].thumbnail)
                          const boltc = require('@bochilteam/scraper')
                          await boltc.youtubedlv2(search.all[0].url)
                          .then(async(nima) => {
                          const dl_url = await nima.audio['128kbps'].download()
                          await ElisaBotMd.sendMessage(m.chat,{delete : down.key }) 
                          const up = await ElisaBotMd.sendText(m.chat,global.SONG_UP,m,)
                          const doc = await ElisaBotMd.sendMessage(m.chat, {audio :{ url: dl_url }, mimetype:"audio/mpeg", fileName: `${nima.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                title:`${nima.title}`,
                body:"YOUTUBE MP3",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`${text}`, 
                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})
                await ElisaBotMd.sendMessage(m.chat, { delete: up.key })
                                  await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: doc.key }})
//await ElisaBotMd.sendMessage(m.chat,{delete : up.key }) 
                           //await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: m.key }})

                                  }).catch((err) => m_reply(err))
                      
                          }
                          break
                         /* case 'yt2' : {
                          if (!text) return m_reply('Please Give me a youtube link')
                          await ElisaBotMd.sendText(m.chat,mess.wait)
                          let boltc = require('@bochilteam/scraper')
                          await boltc.youtubedlv2(`${text}`)
                          .then(async(nima) => {
                          const dl_url = await nima.video['480p'].download()
                          const dl_url3 = await nima.video['240p'].download()
                          const dl_url2 = await nima.video['720p'].download()
                          const dl_url4 = await nima.audio['128kbps'].download()
                         
           const buttons = [
  {buttonId: `directvideodown ${dl_url3}`, buttonText: {displayText: '240P'}, type: 1},
  {buttonId: `directvideodown ${dl_url}`, buttonText: {displayText: '480P'}, type: 1},
  {buttonId: `directaudiodown ${dl_url4}`, buttonText: {displayText: 'AUDIO'}, type: 1}
]

const buttonMessage = {
    image: {url: nima.thubnail},
    caption: `╭────[👸 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 👸] 
│
◯ ᴛɪᴛʟᴇ : ${nima.title}

◯ ᴠɪᴅᴇᴏ ɪᴅ : ${nima.id}

◯ ʀᴇǫᴜsᴛᴇʀ : ${m.pushName}
│
╰────────────◯`,
    footer: global.botnma,
    buttons: buttons,
    headerType: 4
}

await ElisaBotMd.sendMessage(m.chat, buttonMessage)
})
                          }
                          break*/
                          case 'tiktokjson' : {
                          let boltc = require('@bochilteam/scraper')    
 //  if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
   boltc.youtubedlv3(`${text}`).then(async (video) => {  
   reply(`${jsonformat(video)}`)
     })  
                          }
                          break
                          case 'tiktokjson2' : {
                          let boltc = require('@bochilteam/scraper')    
 //  if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
   boltc.youtubedl(`${text}`).then(async (video) => {  
   reply(`${jsonformat(video)}`)
     })  
                          }
                          break
                          case 'tiktokjson3' : {
                          let boltc = require('@bochilteam/scraper')    
 //  if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
   boltc.youtubedlv2(`${text}`).then(async (video) => {  
   reply(`${jsonformat(video)}`)
     })  
                          }
                          break
                          case 'savevid' : {
                          let boltc = require('@bochilteam/scraper')
                          boltc.savefrom(text)
                         .then(async(result) => {
	                     reply(`${jsonformat(result)}`)
	                     })
                          }
                          break
                          case 'directvideo4' : {
                          
       const down = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN, m, )
       const up = await ElisaBotMd.sendText(m.chat, global.SONG_UP, m, )
       await ElisaBotMd.sendMessage(m.chat,{delete : down.key })  
       await ElisaBotMd.sendMessage(m.chat, { video: { url: text }, caption: global.cap}, { quoted: m })
       await ElisaBotMd.sendMessage(m.chat,{delete : up.key })  
                  
                          }
                          break
case 'directvideodown' : {
var DOWNLOAD = ''
if (global.LANG == 'SI' ) DOWNLOAD = '*📥 ඔබගේ වීඩියෝව බාගත කරමින් පවති...*'
if (global.LANG == 'EN' ) DOWNLOAD = '*📥 DOWNLOADING YOUR VIDEO...*'
var UPLOAD = ''
if (global.LANG == 'SI' ) UPLOAD = '*📤 ඔබගේ විඩියෝව ඔබවෙත එවමින් පවතී...*'
if (global.LANG == 'EN' ) UPLOAD = '*📤 UPLOADING YOUR VIDEO...*'
       const down = await ElisaBotMd.sendText(m.chat,DOWNLOAD, m, )
       const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')
       buf = await getBuffer(thub.SF_THUB)
       const up = await ElisaBotMd.sendText(m.chat,UPLOAD, m, )
       await ElisaBotMd.sendMessage(m.chat,{delete : down.key })  
       await ElisaBotMd.sendMessage(m.chat, { video: { url: text }, mimetype: 'video/mp4', fileName: `${text}.mp4`,jpegThumbnail:buf, caption: global.cap }, { quoted: m })
       //await ElisaBotMd.sendMessage(m.chat, { video: { url: text }, caption: global.cap}, { quoted: m })
       await ElisaBotMd.sendMessage(m.chat,{delete : up.key })  
                  }
break
case 'directaudiodown' : {

       const down = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN, m, )
     //  const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')
       buf = await getBuffer(thub.SF_THUB)
       const up = await ElisaBotMd.sendText(m.chat,global.SONG_UP, m, )
       await ElisaBotMd.sendMessage(m.chat,{delete : down.key })  
       await ElisaBotMd.sendMessage(m.chat, { video: { url: text }, mimetype: 'video/mp4', fileName: `${text}.mp4`,jpegThumbnail:buf, caption: global.cap }, { quoted: m })
       //await ElisaBotMd.sendMessage(m.chat, { video: { url: text }, caption: global.cap}, { quoted: m })
       await ElisaBotMd.sendMessage(m.chat,{delete : up.key })  
                  }
break
                          case 'ddsong' : {
const yts = require("yt-search")
//let handler = async (m, { conn, text }) => {
  if (!text) return reply( 'Please Give youtube link or song name.')
  if (text.includes('youtube')){
  await ElisaBotMd.sendMessage(from, { react: { text: `🎧`, key: m.key }})
  const boltc = require('@bochilteam/scraper')
  await ElisaBotMd.sendMessage(from, { react: { text: `⬇️`, key: m.key }})
  const url_dl = text
  const nima_url = await boltc.youtubedlv2(url_dl)
  //console.log(nima_url)
  const dl_url = await nima_url.audio['128kbps'].download()
  await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
  var doc = await ElisaBotMd.sendMessage(m.chat, { document  : { url : dl_url }, mimetype: 'audio/mpeg', fileName: `${nima_url.title}.mp3` }, { quoted: m })
  await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
  await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: doc.key }})

                
  } else {
//  m_reply('_Proses..._')
//const up = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN)
await ElisaBotMd.sendMessage(from, { react: { text: `🎧`, key: m.key }})
  const vid = await yts(text)
  await ElisaBotMd.sendMessage(from, { react: { text: `⬇️`, key: m.key }})
//  .then(async(vid) => {
  const { title, description, thumbnail, videoId } = vid
  await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
 // const url = 'https://www.youtube.com/watch?v=' + videoId
const ytLink = `https://ytdl.tiodevhost.my.id/${vid.all[0].videoId}.mpeg?filter=audioonly&quality=lowestaudio&contenttype=audio/mpeg`
    
var doc = await ElisaBotMd.sendMessage(m.chat, { document  : { url : ytLink }, mimetype: 'audio/mpeg', fileName: `${vid.all[0].title}.mp3` }, { quoted: m })
await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: doc.key }})

                      }
                          }
                          break
case 'ytmp3' : case 'seleytmp3' :{

const yts = require("yt-search")
//let handler = async (m, { conn, text }) => {
  if (!text) return reply( 'Please Give youtube link or song name.')
  if (text.includes('youtube')){
  //await ElisaBotMd.sendMessage(from, { react: { text: `🎧`, key: m.key }})
  const boltc = require('@bochilteam/scraper')
  await ElisaBotMd.sendMessage(from, { react: { text: `⬇️`, key: m.key }})
  const url_dl = text
  const nima_url = await boltc.youtubedlv2(url_dl)
  const buf = await getBuffer(nima_url.thumbnail)
//  console.log(nima_url)
  const dl_url = await nima_url.audio['128kbps'].download()
  await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
  var doc = await ElisaBotMd.sendMessage(m.chat, {document:{ url: dl_url }, mimetype:"audio/mpeg", fileName: `${nima_url.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                title:`${nima_url.title}`,
                body:"YOUTUBE MP3",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`${text}`, 
                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})
             //   await ElisaBotMd.sendMessage(m.chat, { delete: up.key })
                                 // await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: doc.key }})
  await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
  await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: doc.key }})

                
  } else {
//  m_reply('_Proses..._')
//const up = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN)
//await ElisaBotMd.sendMessage(from, { react: { text: `🎧`, key: m.key }})
  await ElisaBotMd.sendMessage(from, { react: { text: `⬇️`, key: m.key }})
  const vid = await yts(text)
//  .then(async(vid) => {
  const { title, description, thumbnail, videoId } = vid
  await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
 // const url = 'https://www.youtube.com/watch?v=' + videoId
const ytLink = `https://ytdl.tiodevhost.my.id/${vid.all[0].videoId}.mpeg?filter=audioonly&quality=lowestaudio&contenttype=audio/mpeg`
const cap = `*🏷️ title :* ${vid.all[0].title}\n*👤 Author :* ${vid.all[0].author.name} \n*🖇️ Url :* ${vid.all[0].url} \n*🕜 Duration :* ${vid.all[0].duration}\n\n${global.cap}`
var doc = await ElisaBotMd.sendMessage(m.chat, { document : { url : ytLink }, mimetype: 'audio/mpeg', caption : cap ,fileName: `${vid.all[0].title}.mp3` }, { quoted: m })
await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: doc.key }})

//await ElisaBotMd.sendMessage(m.chat, { delete: up.key })
 // ElisaBotMd.sendMessage(m.chat, { document: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: m })
//handler.help = ['yta'].map(v => v + ' <url>')
//handler.tags = ['downloader']
//handler.command = /^(yta|ytaudio|ytmp3)$/i
//}).catch((err) => m_reply(NOT_FOUND))
//module.exports = handler
                      }
                      }
                          break
case 'audio' : {

const yts = require("yt-search")
//let handler = async (m, { conn, text }) => {
  if (!text) return reply( 'Please Give youtube link or song name.')
  if (text.includes('youtube')){
//  await ElisaBotMd.sendMessage(from, { react: { text: `🎧`, key: m.key }})
  const boltc = require('@bochilteam/scraper')
  await ElisaBotMd.sendMessage(from, { react: { text: `⬇️`, key: m.key }})
  const url_dl = text
  const nima_url = await boltc.youtubedlv2(url_dl)
  const buf = await getBuffer(nima_url.thumbnail)
  const title = nima_url.title
//  console.log(nima_url)
  const dl_url = await nima_url.audio['128kbps'].download()
  await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
var doc = await ElisaBotMd.sendMessage(m.chat, {audio:{ url: dl_url }, mimetype:"audio/mpeg", fileName: `${title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                title:`${nima_url.title}`,
                body:"YOUTUBE MP3",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`${text}`, 
                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})
  await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
  await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: doc.key }})

                
  } else {
//  m_reply('_Proses..._')
//const up = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN)
//await ElisaBotMd.sendMessage(from, { react: { text: `🎧`, key: m.key }})
  const vid = await yts(text)
  await ElisaBotMd.sendMessage(from, { react: { text: `⬇️`, key: m.key }})
//  .then(async(vid) => {
  const { title, description, thumbnail, videoId } = vid
  await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
 // const url = 'https://www.youtube.com/watch?v=' + videoId
const ytLink = `https://ytdl.tiodevhost.my.id/${vid.all[0].videoId}.mpeg?filter=audioonly&quality=lowestaudio&contenttype=audio/mpeg`
    
//var doc = await ElisaBotMd.sendMessage(m.chat, { audio : { url : ytLink }, mimetype: 'audio/mpeg', fileName: `${vid.all[0].title}.mp3` }, { quoted: m })
var doc = await ElisaBotMd.sendMessage(m.chat, {audio :{ url: ytLink }, mimetype:"audio/mpeg", fileName: `${vid.all[0].title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                title:`${title}`,
                body:"YOUTUBE MP3",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`http://tiktok.com/@mr_nima_._._x`, 
                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})

await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: doc.key }})

//await ElisaBotMd.sendMessage(m.chat, { delete: up.key })
 // ElisaBotMd.sendMessage(m.chat, { document: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: m })
//handler.help = ['yta'].map(v => v + ' <url>')
//handler.tags = ['downloader']
//handler.command = /^(yta|ytaudio|ytmp3)$/i
//}).catch((err) => m_reply(NOT_FOUND))
//module.exports = handler
                      }
                      }
                          break
                              
                              case 'selecttypebutton': {  
const rash = await fetchJson(`https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json`)
const sdpid = rash.sddlid
const hdmidpid = rash.sdmiddlid
const hdpid = rash.hddlid
                          await ElisaBotMd.sendMessage(from, { react: { text: `📽️`, key: m.key }})

                              
                    YTMASS = `

╭───[  *ᴇʟɪsᴀ ʙᴏᴛ*  ]───◉
│
│  🎬 ʏᴛ  ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 🎬
│ 
│ ➧ sᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴠɪᴅᴇᴏ ʀᴇsᴏʟᴜᴛɪᴏɴ 
│
╰──────◉
`,
                            buttons = [
                                          { buttonId: `${sdpid} ${text}`, buttonText: { displayText: '360p' }, type: 1 },
                                          { buttonId: `${hdmidpid} ${text} 480p`, buttonText: { displayText: '480p' }, type: 1 },
                                          { buttonId: `${hdpid} ${text}`, buttonText: { displayText: '720p' }, type: 1 }
                                      
                                      ]
                                      await ElisaBotMd.sendButtonText(m.chat, buttons, YTMASS, `𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 ` ,m)
                                  }
                                  break
                                  case 'audioselecttypebutton': {  
                                  const rash = await fetchJson(`https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json`)
const audidd = rash.audcmd
const docidd = rash.doccmd
                          await ElisaBotMd.sendMessage(from, { react: { text: `🎧`, key: m.key }})

                              
                    YTMASS = `

╭───[  *ᴇʟɪsᴀ ʙᴏᴛ*  ]───◉
│
│  🎬 ʏᴛ  sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 🎬
│ 
│ ➧ sᴇʟᴇᴄᴛ ʏᴏᴜʀ sᴏɴɢ ᴛʏᴘᴇ
│
╰──────◉
`,
                            buttons = [
                                          { buttonId: `${docidd} ${text}`, buttonText: { displayText: '📁 DOCUMENT 📁' }, type: 1 },
                                          { buttonId: `${audidd} ${text}`, buttonText: { displayText: '🎧 AUDIO 🎧' }, type: 1 }
                                      ]
                                      await ElisaBotMd.sendButtonText(m.chat, buttons, YTMASS, `𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 ` ,m)
                                  }
                                  break
                                  case 'ytmp4' : {
                                  const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')
                              const buf = await getBuffer(thub.YT_THUB)
                          if(!text) return reply('*👸💬 Need youtube url* \n'+'```ℹ️ Example .ytmp4 https://youtube.com/watch?v=WoWlWb6vbzA```')
                          if (!text.includes('https://youtu')) return reply('*👸💬 Need youtube url* \n'+'```ℹ️ Example .ytmp4 https://youtube.com/watch?v=WoWlWb6vbzA```')
                          await ElisaBotMd.sendMessage(from, { react: { text: `⬇️`, key: m.key }})
                          //await ElisaBotMd.sendText(m.chat,mess.wait)
                          let quality = args[1] ? args[1] : '360p'
                          //const yts = require("yt-search")
                         // const search = await yts(args[0])
                          const dltext = args[0]
                          let boltc = require('@bochilteam/scraper')
                          await boltc.youtubedlv2(dltext)
                          .then(async(nima) => {
                          const dl_url = await nima.video[quality].download()
                          const size = nima.video[quality].fileSize
                          if(size >= 120000) return reply('*FILE SIZE IS SO BIG !!!*')
                          await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
                          const viddd = await ElisaBotMd.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', fileName: `${nima.title}.mp4`,jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                          await ElisaBotMd.sendMessage(from, { react: { text: `📽️`, key: viddd.key }})
                          await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
                        // await ElisaBotMd.sendMessage(from, { react: { text: ``, key: m.key }})
                         
                          // await ElisaBotMd.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                          //await ElisaBotMd.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: `${global.cap}` }, { quoted: m })
                          }).catch((err) => reply(NOT_FOUND))
                      
                          }
                          break
                             /* case 'audytmp3': case 'audytaudio': {
                              
                              AGAINTRY = ` *💃 ENJOY YOUR SONG* `
                              buttons = [
                                          { buttonId: `audioretry ${text}`, buttonText: { displayText: '♻ ᴛʀʏ ᴀɢᴀɪɴ ️♻️' }, type: 1 }
                                      ]
                                  let { yta } = require('./lib/y2mate')
                                  if (!text) throw `Example : ${prefix + command} https://Subscribe.com/watch?v=PtF6Tccag%27 320kbps`
                                  const load = await ElisaBotMd.sendText(m.chat, `\n*🔄 Preparing ${m.pushName} your song...*\n`, m, )
                                  let quality = args[1] ? args[1] : '256kbps'
                                  let media = await yta(text, quality)
                                  if (media.filesize >= 150000) return reply('❗ Audio size is too big '+util.format(media))
                                  var upload = await ElisaBotMd.sendButtonText(m.chat, buttons, AGAINTRY, `${m.pushName} Use this only if you have not received the request.` ,m)
                                  ElisaBotMd.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                                   ElisaBotMd.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: upload.key.id, participant: m.quoted.sender } })
                              }
                              break*/
                     
                              
                              case '22ytmp4': case '22ytvideo': {  
                              await ElisaBotMd.sendMessage(from, { react: { text: `📽️`, key: m.key }})
                              const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')
                              buf = await getBuffer(thub.YT_THUB)

                                  let { ytv } = require('./lib/y2mate')
                                  if (!text) return reply( `${Lang.EXAMPLE}\n ${prefix + command} https://youtube.com/watch?v=on3sJ8OlH8M`)
                                  const load = await ElisaBotMd.sendText(m.chat, mess.wait, m, )
                                  let quality = args[1] ? args[1] : '360p'
                                  await ytv(text, quality)
                                  .then(async (media) => { 
                                  buf = await getBuffer(thub.YT_THUB)
                                  if (media.filesize >= 100000) {
                                  const msg = `*⛔ FILE SIZE UP TO 100MB ⛔*
                                  
*ғɪʟᴇ ɴᴀᴍᴇ :* ${media.title}
                                  
*ғɪʟᴇ sɪᴢᴇ :* ${media.filesize}
`
                                  const templateButtons = [
                                  {index: 1, urlButton: {displayText: 'DOWNLOAD ON WEB', url: media.dl_link+'.mp4' }},
                                  {index: 2, urlButton: {displayText: 'ǫᴜᴇᴇɴ ᴇʟɪsᴀ ᴘᴜʙʟɪᴄ', url: 'https://chat.whatsapp.com/JlIOrWU08K19dFrHkOGI5N'}}
    
                                  ]

                                  const templateMessage = {
                                  text: msg,
                                  footer: global.botnma,
                                  templateButtons: templateButtons
                                  }

                                  return await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: m })   

                                 // return reply('❗ Video size is too big '+util.format(media)+'.mp4')
                                  }
                                  await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
                                  await ElisaBotMd.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`,jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                                  
                                  .catch((err) => m_reply('*Sorry, Can\'t Find your reqest 🥴*'))
                                  await  ElisaBotMd.sendMessage(m.chat, { delete: load.key })}).catch((err) => m_reply(NOT_FOUND))
                                  await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
                              }
                              break
                              case 'secytmp4': case 'secytvideo': {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `🎥`, key: m.key }})
                              AGAINTRY = ` 💃 ENJOY YOUR VIDEO `
                              
                              buttons = [
                                          { buttonId: `audioretry ${text}`, buttonText: { displayText: '♻ ᴛʀʏ ᴀɢᴀɪɴ ♻️' }, type: 1 }
                                      ]
                                const buttonMessage = {
    text: AGAINTRY ,
    footer: `${m.pushName} Use this only if you have not received the request.` ,
    buttons: buttons,
    headerType: 2
}       
                              
                                  let { ytv } = require('./lib/y2mate')
                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} https://Subscribe.com/watch?v=PtFMhcag%27 360p`
                                  const load = await ElisaBotMd.sendText(m.chat,mess.wait, m, )
                                  let quality = args[1] ? args[1] : '360p'
                                  await ytv(text, quality)
                                  .then(async (media) => { 
                                  await ElisaBotMd.sendText(m.chat, ` *ʟᴏᴀᴅɪɴɢ ${m.pushName} ʏᴏᴜʀ ᴠɪᴅᴇᴏ... 🔄*`)
                                  if (media.filesize >= 100000)  {
                                  const msg = `*⛔ FILE SIZE UP TO 100MB ⛔*
                                  
*ғɪʟᴇ ɴᴀᴍᴇ :* ${media.title}
                                  
*ғɪʟᴇ sɪᴢᴇ :* ${media.filesize}

`
                                  const templateButtons = [
                                  {index: 1, urlButton: {displayText: 'DOWNLOAD ON WEB', url: media.dl_link+'.mp4' }},
                                  {index: 2, urlButton: {displayText: 'ǫᴜᴇᴇɴ ᴇʟɪsᴀ ᴘᴜʙʟɪᴄ', url: 'https://chat.whatsapp.com/JlIOrWU08K19dFrHkOGI5N'}}
    
                                  ]

                                  const templateMessage = {
                                  text: msg,
                                  footer: global.botnma,
                                  templateButtons: templateButtons
                                  }

                                  return await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: m }) 
                                  }  
//return reply('❗ Video size is too big '+util.format(media)+'.mp4')
                                  await  ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                                  const upload = await ElisaBotMd.sendMessage(m.chat, buttonMessage , { quoted: m })
                                  await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
                                  ElisaBotMd.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: global.cap }, { quoted: m })
                                  await  ElisaBotMd.sendMessage(m.chat, { delete: upload.key })}).catch((err) => m_reply(NOT_FOUND))
                                  await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
                                  
                              }
                              break
                              case 'retryytmp4': case 'retrysecytvideo': {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                              
                                  let { ytv } = require('./lib/y2mate')
                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} https://Subscribe.com/watch?v=PtFMhcag%27 360p`
                                  let quality = args[1] ? args[1] : '360p'
                                  let media = await ytv(text, quality)
                                  await ElisaBotMd.sendText(m.chat, ` *ʟᴏᴀᴅɪɴɢ ${m.pushName} ʏᴏᴜʀ ᴠɪᴅᴇᴏ... 🔄*`)
                                  if (media.filesize >= 100000)  {
                                  const msg = `*⛔ FILE SIZE UP TO 100MB ⛔*
                                  
*ғɪʟᴇ ɴᴀᴍᴇ :* ${media.title}
                                  
*ғɪʟᴇ sɪᴢᴇ :* ${media.filesize}
`
                                  const templateButtons = [
                                  {index: 1, urlButton: {displayText: 'DOWNLOAD ON WEB', url: media.dl_link+'.mp4' }},
                                  {index: 2, urlButton: {displayText: 'ǫᴜᴇᴇɴ ᴇʟɪsᴀ ᴘᴜʙʟɪᴄ', url: 'https://chat.whatsapp.com/JlIOrWU08K19dFrHkOGI5N'}}
    
                                  ]

                                  const templateMessage = {
                                  text: msg,
                                  footer: global.botnma,
                                  templateButtons: templateButtons
                                  }

                                  return await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: m })   
                                  }
//return reply('❗ Video size is too big '+util.format(media)+'.mp4')
                                  var up = await ElisaBotMd.sendText(m.chat, `*ENJOY*`)
                                  ElisaBotMd.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: global.cap }, { quoted: m })
                                  await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
                                  
                              }
                              break
                              case '360pvideo': case 'yt360pvideo': {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `📽️`, key: m.key }})
                                  let { ytv } = require('./lib/y2mate')
                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} https://Subscribe.com/watch?v=PtFMhcag%27 360p`
                                  const load = await ElisaBotMd.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                                  let quality = args[1] ? args[1] : '360p'
                                  let media = await ytv(text, quality)
                                  if (media.filesize >= 100000) {
                                  const msg = `*⛔ FILE SIZE UP TO 100MB ⛔*
                                  
*ғɪʟᴇ ɴᴀᴍᴇ :* ${media.title}
                                  
*ғɪʟᴇ sɪᴢᴇ :* ${media.filesize}
`
                                  const templateButtons = [
                                  {index: 1, urlButton: {displayText: 'DOWNLOAD ON WEB', url: media.dl_link+'.mp4' }},
                                  {index: 2, urlButton: {displayText: 'ǫᴜᴇᴇɴ ᴇʟɪsᴀ ᴘᴜʙʟɪᴄ', url: 'https://chat.whatsapp.com/JlIOrWU08K19dFrHkOGI5N'}}
    
                                  ]

                                  const templateMessage = {
                                  text: msg,
                                  footer: global.botnma,
                                  templateButtons: templateButtons
                                  }

                                  return await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: m })   
                                  }
// return reply('❗ Video size is too big '+util.format(media)+'.mp4')
                                  await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
                                  await ElisaBotMd.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: global.cap }, { quoted: m })
                                 // await  ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                                  await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
                              }
                              break
                              
                          case 'getmusic': {
                                  let { yta } = require('./lib/y2mate')
                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} 1`
                                  if (!m.quoted) return reply('Reply Message')
                                  if (!m.quoted.isBaileys) throw `Can only reply to messages from bots`
                                  let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?Subscribe\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                                  if (!urls) throw `Maybe The Message You Replied Does Not Contain Ytsearch Results`
                                  let quality = args[1] ? args[1] : '320kbps'
                                  let media = await yta(urls[text - 1], quality)
                                  if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                                  ElisaBotMd.sendImage(m.chat, media.thumb, `🔮 𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n🔮 𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n🔮 𝗨𝗥𝗟 : ${isUrl(text)}\n🔮 𝗘𝗫𝗧 : MP3\n🔮 𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '320kbps'}`, m)
                                  ElisaBotMd.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m }).catch((err) => m_reply('*Sorry, Can\'t Find your reqest 🥴*'))
                              }
                              break
                              case 'getvideo': {
                                  let { ytv } = require('./lib/y2mate')
                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} 1`
                                  if (!m.quoted) return reply('Reply To A Message That Has Been Already Sent')
                                  if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                                  let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?Subscribe\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                                  if (!urls) throw `Maybe the message you replied does not contain the ytsearch result`
                                  let quality = args[1] ? args[1] : '360p'
                                  let media = await ytv(urls[text - 1], quality)
                                  if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                                  ElisaBotMd.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🔮 𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n🔮 𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n🔮 𝗨𝗥𝗟 : ${isUrl(text)}\n🔮 𝗘𝗫𝗧 : MP3\n🔮 𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '360p'}` }, { quoted: m }).catch((err) => m_reply('*Sorry, Can\'t Find your reqest 🥴*'))
                              }
                              break
                              case 'pinterest': {
                                  replay(mess.wait)
                                  let { pinterest } = require('./lib/scraper')
                                  anu = await pinterest(text)
                                  result = anu[Math.floor(Math.random() * anu.length)]
                                  ElisaBotMd.sendMessage(m.chat, { image: { url: result }, caption: '🔮 Media Url : '+result }, { quoted: m })
                              }
                              break
                              case 'sendme' : {
                              if (!isNima) throw ('*This is only main owner command ☺*️')
                              ElisaBotMd.sendText(m.chat,text)
                              }
                              break
                          case 'couplepp': case 'ppcouple': {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `💏`, key: m.key }})
                                  replay(mess.wait)
                                  let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                                  let random = anu[Math.floor(Math.random() * anu.length)]
                                  ElisaBotMd.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                                  ElisaBotMd.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
                              }
                          break
                              case 'coffee': case 'kopi': {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `☕`, key: m.key }})
                              let buttons = [
                                      {buttonId: `coffe`, buttonText: {displayText: 'NEXT PIC'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      image: { url: 'https://coffee.alexflipnote.dev/random' },
                                      caption: `Random Coffee`,
                                      footer: ElisaBotMd.user.name,
                                      buttons: buttons,
                                      headerType: 4
                                  }
                                  ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
                              }
                              break
                              case 'wallpaper': {
                                  if (!text) throw 'Enter Query Title'
                          let { wallpaper } = require('./lib/scraper')
                                  anu = await wallpaper(text)
                                  result = anu[Math.floor(Math.random() * anu.length)]
                          let buttons = [
                                      {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'NEXT  PIC'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      image: { url: result.image[0] },
                                      caption: `🔮 𝗧𝗜𝗧𝗟𝗘 : ${result.title}\n🔮 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬 : ${result.type}\n🔮 𝗗𝗘𝗧𝗔𝗜𝗟 : ${result.source}\n🔮 𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : ${result.image[2] || result.image[1] || result.image[0]}`,
                                      footer: ElisaBotMd.user.name,
                                      buttons: buttons,
                                      headerType: 4
                                  }
                                  ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
                              }
                              break
                              case 'wikimedia': {
                                  if (!text) throw 'Enter Query Title'
                          let { wikimedia } = require('./lib/scraper')
                                  anu = await wikimedia(text)
                                  result = anu[Math.floor(Math.random() * anu.length)]
                                  let buttons = [
                                      {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'NEXT PIC'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      image: { url: result.image },
                                      caption: `🔮 𝗧𝗜𝗧𝗟𝗘 : ${result.title}\n🔮 𝗦𝗢𝗨𝗥𝗖𝗘 : ${result.source}\n🔮 𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : ${result.image}`,
                                      footer: ElisaBotMd.user.name,
                                      buttons: buttons,
                                      headerType: 4
                                  }
                                  ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
                              }
                              break
                              case 'quotesanimekdksksksksk': case 'quoteanimexllzlzkl': {
                          let { quotesAnime } = require('./lib/scraper')
                                  let anu = await quotesAnime()
                                  result = anu[Math.floor(Math.random() * anu.length)]
                                  let buttons = [
                                      {buttonId: `quotesanime`, buttonText: {displayText: 'NEXT'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                                      footer: 'Press The Button Below',
                                      buttons: buttons,
                                      headerType: 2
                                  }
                                  ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
                              }
                              break
                              case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                                  let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                                  let buttons = [
                                      {buttonId: `motivasi`, buttonText: {displayText: 'NEXT'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      text: anu.result.message,
                                      footer: 'Press The Button Below',
                                      buttons: buttons,
                                      headerType: 2
                                  }
                                  ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
                              }
                              break
                              case 'logo' :{ 
var MAX = ''
if (global.LANG == 'SI') MAX= '```👸💬 කරුනාකර වචනයක් ලබාදෙන්න ...```\n_උදාහරණ .logo MR NIMA_'
if (global.LANG == 'EN') MAX= '```👸💬 Please give me a some words ...```\n_example .logo MR NIMA_'
if (!text) return reply (MAX)
                              
 await ElisaBotMd.sendMessage(from, { react: { text: `1️⃣`, key: m.key }})     
  
     	const desmsg = `╔═════════════════════☐

      *_𝚀𝚞𝚎𝚎𝚗 𝙴𝚕𝚒𝚜𝚊 𝙻𝚘𝚐𝚘 𝙻𝚒𝚜𝚝_*

*▣ ʀᴇǫᴜᴇsᴛᴇʀ -*  ${m.pushName}
*▣ ʟᴏɢᴏ ᴛᴇxᴛ -* ${text}

☐═════════════════════╝`
     let sections = [{

         "title": "ʙᴏᴛ ʟɪsᴛ ᴍᴇɴᴜ ᴄʟɪᴄᴋ ᴀɴᴅ sᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴏᴡɴ",
                                                  "rows": [
                                                  {
			"title": "CANDY STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `candy ${text}`
			},
		{
			"title": "CHRISTMAS STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `christmas ${text}`
			},
		{
			"title": "DEEPSEA STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `deepsea ${text}`
		},
		{
			"title": "SCIFI STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `scifi ${text}`
		},
		{
			"title": "RAINBOW STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `rainbow ${text}`
		},
		{
				"title": "WATERPIPE STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `waterpipe ${text}`
			},
         	                            {
				"title": "SPOOKEY STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `spooky ${text}`
			},
			{
				"title": "PENCIL STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `pencil ${text}`
			},		
			{
				"title": "CIRCUITE STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `circuit ${text}`
			},
			{
				"title": "DESCOVERY STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `discovery ${text}`
			},	
			{
				"title": "FICTION STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `fiction ${text}`
			},
			{
				"title": "DEMON STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `demon ${text}`
			},
			{
				"title": "TRANSFORMER STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `transformer ${text}`
			},
			{
				"title": "BERRY STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `berry ${text}`
			},
			{
				"title": "THUNDER  STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `thunder ${text}`
			},
			{
				"title": "MAGMA STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `magma ${text}`
			},
			{
				"title": "3-D STONE STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `3dstone ${text}`
			},
			{
				"title": "NEONLIGHT STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `neonlight ${text}`
			},
			{
				"title": "GLITCH STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `glitch ${text}`
			},
			{
				"title": "HARRYPOTTER STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `harrypotter ${text}`
			},
			{
				"title": "BROKENGLASS STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `brokenglass ${text}`
			},
			{
				"title": "PAPERCUT STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `papercut ${text}`
			},
			{
				"title": "WATERCOLOR STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `watercolor ${text}`
			},
			{
				"title": "MULTICOLOR STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `multicolor ${text}`
			},
			{
				"title": "NEON DEVIL STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `neondevil ${text}`
			},
			{
				"title": "UNDERWATER STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `underwater ${text}`
			},
			{
				"title": "GRAFFITIBIKE STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `graffitibike ${text}`
			},
			{
				"title": "SNOW STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `snow ${text}`
			},
			{
				"title": "CLOUD STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `cloud ${text}`
			},
			{
				"title": "HONEY STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `honey ${text}`
			},
			{
				"title": "ICE STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `ice ${text}`
			},
			{
				"title": "BISCUIT STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `biscuit ${text}`
			},
			{
				"title": "WOOD STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `wood ${text}`
			},
			{
				"title": "CHOCOLATE STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `chocolate ${text}`
			},
			{
				"title": "STRAWBERRY STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `strawberry ${text}`
			},
			{
				"title": "MATRIXS STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `matrix ${text}`
			},
			{
				"title": "BLOOD STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `blood ${text}`
			},
			{
				"title": "DROPWATER STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `dropwater ${text}`
			},
			{
				"title": "TOXIC STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `toxic ${text}`
			},
			{
				"title": "LAVA STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `lava ${text}`
			},
			{
				"title": "ROCK STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `rock ${text}`
			},
			{
				"title": "BLOODGLAS STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `bloodglas ${text}`
			},
			{
				"title": "HALLOWEN STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `hallowen ${text}`
			},
			{
				"title": "DARKGOLD STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `darkgold ${text}`
			},
			{
				"title": "JOKER STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `joker ${text}`
			},
			{
				"title": "WICKER STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `wicker ${text}`
			},
			{
				"title": "FIREWORK STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `firework ${text}`
			},
			{
				"title": "SKELETON STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `skeleton ${text}`
			},
			{
				"title": "BLACKPINK STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `blackpink ${text}`
			},
			{
				"title": "SAND STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `sand ${text}`
			},
			{
				"title": "GLUE STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `glue ${text}`
			}, ///
			{
				"title": "3D BOX STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `3dbox ${text}`
			},
			{
				"title": "GLITCH STYLE - 2",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `glitch2 ${text}`
			},
			{
				"title": "GLITCH STYLE - 3",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `glitch3 ${text}`
			},
			{
				"title": "GREEN NEON STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `greenneon ${text}`
			},
			{
				"title": "3D NEON STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `3dneon ${text}`
			},
			{
				"title": "BOKEH STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `bokeh ${text}`
			},
			{
				"title": "BEAR STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `bear ${text}`
			},
			{
				"title": "CHRISTMAS STYLE - 2",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `sparklechristmas ${text}`
			},
			{
				"title": "CHRISTMAS STYLE - 3",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `3dchristmas ${text}`
			},
			{
				"title": "RAINBOW STYLE - 3",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `rainbow2 ${text}`
			},
			{
				"title": "FRUIT JUICE STYLE",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `fruitjuice ${text}`
			},
			
			///
			{
				"title": "1917 STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `1917 ${text}`
			},
			{
				"title": "LEAVES STYLE ",
			"description": `\nMr ${m.pushName} ${global.botnma} is Ready to make your logo`,
			"rowId": `leaves ${text}`
			}
	     ]
      }
   ]
			
     await ElisaBotMd.sendListMsg(m.chat, `${desmsg}`, `${global.botnma}`, `*🎨 LOGO PACK 1*`, `MAKE LOGO`, sections, m)
 	   	                	
  }
            break
            case 'eglitch' : case 'eberry': case 'eneon' : case 'ecrismas' : case 'ethunder' : case 'eninja' :
            case 'eorange' : case 'ecake' : case 'estrowberry' : case 'eflaming' : case 'eshadow' : case 'eongrass' : 
            case 'eloveu' : case 'ecoffee' : case 'eilluminati' : {
            
            var GIVEE = ''
  if (global.LANG == 'EN') GIVEE = `*👸💬 Please give me a some words* \n_ℹ️ example ${prefix + command} MR NIMA_`
  if (global.LANG == 'SI') GIVEE = `*👸💬 කරුනාකර වචනයක් ලබාදෙන්න* \n _ℹ️ උදාහරණ ${prefix + command} MR NIMA_`
     if(!text) return reply(GIVEE)
     const logomaking = await ElisaBotMd.sendText(m.chat,LOGO_MAKING)
          
       let link      
       if (/eglitch/.test(command)) link = 'https://api.botcahx.biz.id/api/textpro/glitch?text='+text
       if (/eberry/.test(command)) link = 'https://api.botcahx.biz.id/api/textpro/berry?text='+text
       if (/eneon/.test(command)) link = 'https://api.botcahx.biz.id/api/textpro/neon?text='+text
       if (/ecrismas/.test(command)) link = 'https://api.botcahx.biz.id/api/textpro/3dchristmas?text='+text
       if (/ethunder/.test(command)) link = 'https://api.botcahx.biz.id/api/textpro/thunder?text='+text
       if (/eninja/.test(command)) link = 'https://api.botcahx.biz.id/api/textpro/ninja-logo?text='+text+'&text2=ELISA BOT'
       if (/eorange/.test(command)) link = 'https://api.botcahx.biz.id/api/textpro/3d-orange-juice?text='+text
       if (/ecake/.test(command)) link = 'https://api.botcahx.biz.id/api/textpro/chocolate-cake?text='+text
       if (/estrowberry/.test(command)) link = 'https://api.botcahx.biz.id/api/textpro/strawberry?text='+text
       if (/eflaming/.test(command)) link = 'https://api.botcahx.biz.id/api/photooxy/flaming?text='+text
       if (/eshadow/.test(command)) link = 'https://api.botcahx.biz.id/api/photooxy/shadow-sky?text='+text
       if (/eongrass/.test(command)) link = 'https://api.botcahx.biz.id/api/photooxy/under-grass?text='+text
       if (/eloveu/.test(command)) link = 'https://api.botcahx.biz.id/api/photooxy/picture-of-love?text='+text
       if (/ecoffee/.test(command)) link = 'https://api.botcahx.biz.id/api/photooxy/coffee-cup?text='+text
       if (/eilluminati/.test(command)) link = 'https://api.botcahx.biz.id/api/photooxy/illuminated-metallic?text='+text
       
    const img = await getBuffer(link)
    await ElisaBotMd.sendMessage(m.chat, { image: img, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
    await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
           
}
break
                              case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': case 'wolflogo' :
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '3dstone2': case 'neonhart' : case 'goldlion': case 'neonhart2' : case 'gem' :
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'potty' :
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': { 
 
  var MAKING = ''
  if (global.LANG == 'EN') MAKING = '*🌈 Take a moment to createing your textlogo...*'
  if (global.LANG == 'SI') MAKING = '*🌈 මදක් රැදීසිටින්න ඔබගේ textlogo සෑදමින් පවතී...*'
                          
             if (!q) return reply(`${Lang.EXAMPLE}\n : ${prefix + command} Qeen Elisa`) 
                await ElisaBotMd.sendMessage(from, { react: { text: `🎡`, key: m.key }})
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
             if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'  
             if (/neonhart/.test(command)) link = 'https://textpro.me/create-neon-light-on-brick-wall-online-1062.html'    
             if (/wolflogo/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'     
             if (/goldlion/.test(command)) link = 'https://textpro.me/create-avatar-gold-online-956.html'
             if (/neonhart2/.test(command)) link = 'https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html'
             if (/gem/.test(command)) link = 'https://textpro.me/blue-gem-text-effect-830.html'
             if (/potty/.test(command)) link = 'https://textpro.me/create-3d-pottery-text-effect-online-1088.html'
             
             let anu = await maker.textpro(link, q)
             const logomaking = await ElisaBotMd.sendText(m.chat, MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: anu }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
             break
             
             
case'glitch3':
   
if(!q) return reply(`Use ${prefix + command} text|text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case 'waterdrop':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break


case 'lion2':
   
  if(!q) return reply(`Use ${prefix + command} text`)
  await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break


case 'papercut':
   
      if(!q) return reply(`Use ${prefix + command} text`)
      await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case 'transformers':
   
      if(!q) return reply(`Use ${prefix + command} text`)
      await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   

case 'harrypot':
   
       if(!q) return reply(`Use ${prefix + command} text|text`)
       await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break


case 'neondevil':
   
      if(!q) return reply(`Use ${prefix + command} text`)
      await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case '3dstone':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case '3davengers':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'thunder':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   

case 'window':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   case 'blackpinkneon':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
      
if(!q) return reply(`Use ${prefix + command} text|text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'pornhub2':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'blackpink2':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'glitch2':
   
if(!q) return reply(`Use ${prefix + command} text|text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'glitch3':
   
if(!q) return reply(`Use ${prefix + command} text|text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case '3dspace':
   
if(!q) return reply(`Use ${prefix + command} text|text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'lion':
   
if(!q) return reply(`Use ${prefix + command} text|text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case '3dneon':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'neon':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'greenneon':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   
  
case 'bokeh':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'wolf':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break




case 'joker':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'dropwater2':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case 'carbon':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pencil':
   
if(!q) return reply(`Use ${prefix + command} text`)
await ElisaBotMd.sendText(m.chat,' *🌈 Take a moment to createing your textlogo...*' )
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
/// phtoooxy 
case 'lovemsg' :

maker.photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [`${q}`,] )
 .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
  
break
//https://photooxy.com/other-design/create-dark-metal-text-with-special-logo-160.html
case 'darkmetal' :
maker.photooxy("https://photooxy.com/other-design/create-dark-metal-text-with-special-logo-160.html", [`${q}`,] )
 .then((data) => ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m }))
  .catch((err) => console.log(err));
  
break
case 'qsteel': case 'qavenger' : case 'qpolugon' : case 'qhsteel' : case 'qwood' : case 'qlovely' : case 'qmetalic' : case 'qneon' : case 'qpubg' : case 'qfire' : case 'qhorr' : case 'qhalowin' : case 'qvideogame' :
case 'qwolf' : case 'qninja' : case 'qreto' :  {

const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )          


  text1 = q.split("|")[0]
  text2 = q.split("|")[1]
   var link 
   if (/qsteel/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/steel-text-effect-66.html`
   if (/qavenger/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/create-logo-3d-style-avengers-online-427.html`
   if (/qpolugon/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/create-logo-avatar-online-style-polygon-logo-320.html`
   if (/qhsteel/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/heated-steel-lettering-effect-65.html`
   if (/qwood/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/create-3d-wood-text-effects-online-free-705.html`
   if (/qlovely/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/lovely-floral-ornamental-banner-online-603.html`
   if (/qmetalic/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/create-metallic-cover-online-297.html` 
   if (/qneon/.test(command)) link = `https://api.akuari.my.id/ephoto/scraper-2?text=${text1}&text2=${text2}&link=https://en.ephoto360.com/neon-text-effect-online-78.html`
   if (/qpubg/.test(command)) link = `https://api.akuari.my.id/photooxy/scraper2?text1=${text1}&text2=${text2}&link=https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html` 
   if (/qfire/.test(command)) link = `https://api.akuari.my.id/photooxy/scraper2?text1=${text1}&text2=${text2}&link=https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html` 
   if (/qhorr/.test(command)) link = `https://api.akuari.my.id/textpro/scraper-2?text=${text1}&text2=${text2}&link=https://textpro.me/create-a-cinematic-horror-text-effect-1045.html`
   if (/qhalowin/.test(command)) link = `https://api.akuari.my.id/textpro/scraper-2?text=${text1}&text2=${text2}&link=https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html` 
   if (/qvideogame/.test(command)) link = `https://api.akuari.my.id/textpro/scraper-2?text=${text1}&text2=${text2}&link=https://textpro.me/video-game-classic-8-bit-text-effect-1037.html` 
   if (/qwolf/.test(command)) link = `https://api.akuari.my.id/textpro/scraper-2?text=${text1}&text2=${text2}&link=https://textpro.me/create-wolf-logo-galaxy-online-936.html`
   if (/qninja/.test(command)) link = `https://api.akuari.my.id/textpro/scraper-2?text=${text1}&text2=${text2}&link=https://textpro.me/create-ninja-logo-online-935.html`
   if (/reto/.test(command)) link = `https://api.akuari.my.id/textpro/scraper-2?text=${text1}&text2=${text2}&link=https://textpro.me/create-3d-retro-text-effect-online-free-106a5.html`
   const nima = await fetchJson(link)
   const data = nima.respon
   //const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )          
   await ElisaBotMd.sendMessage(m.chat, { image: { url: data }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
   await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
       
                  }
                  break
case 'tlc' : case 'tls' : case 'tlm' : case 'tle' : case 'tlb': case 'mountain' :{
    
   const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )          
   text1 = q.split("|")[0]
   text2 = q.split("|")[1]
   var link 
   if (/tlc/.test(command)) link = `https://api.akuari.my.id/ephoto/team-logo-cobra?text=${text1}&text_2=${text2}`
   if (/tls/.test(command)) link = `https://api.akuari.my.id/ephoto/team-logo-singa?text=${text1}&text_2=${text2}`
   if (/tlm/.test(command)) link = `https://api.akuari.my.id/ephoto/team-logo-macan?text=${text1}&text_2=${text2}`
   if (/tle/.test(command)) link = `https://api.akuari.my.id/ephoto/team-logo-elang?text=${text1}&text_2=${text2}`
   if (/tlb/.test(command)) link = `https://api.akuari.my.id/ephoto/team-logo-banteng?text=${text1}&text_2=${text2}`
   if (/mountain/.test(command)) link = `https://api.akuari.my.id/ephoto/mountain?text=${text1}&text_2=${text2}`
   
   await ElisaBotMd.sendMessage(m.chat, { image: { url: link }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
   await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
     
}
break
case 'logo3' :{
var MAX = ''
if (global.LANG == 'SI') MAX= '```👸💬 කරුනාකර වචනයක් ලබාදෙන්න ...```\n_උදාහරණ .logo3 MR | NIMA_'
if (global.LANG == 'EN') MAX= '```👸💬 Please give me a some words ...```\n_example .logo3 MR | NIMA_'
if (!text && !text.includes('|')) return reply (MAX)
                              
 await ElisaBotMd.sendMessage(from, { react: { text: `3️⃣`, key: m.key }})     
  
     	const desmsg = `╔═════════════════════☐

      *_𝚀𝚞𝚎𝚎𝚗 𝙴𝚕𝚒𝚜𝚊 𝙻𝚘𝚐𝚘 𝙻𝚒𝚜𝚝_*

*▣ ʀᴇǫᴜᴇsᴛᴇʀ -*  ${m.pushName}
*▣ ʟᴏɢᴏ ᴛᴇxᴛ -* ${text}
*▣ ᴛᴏᴛᴀʟ ʟᴏɢᴏs -* *30*

☐═════════════════════╝`    
     
     let sections = [{

            "rows": [{
			"title": "Steel style",
				"rowId": `qsteel ${text}`
			},
	     	{
			"title": "avenger style",
			"rowId": `qavenger ${text}`
			},
			{
			"title": "polygon style ",
			"rowId": `qpolugon ${text}`
			},
			{
			"title": "fire steel style ",
			"rowId": `qhsteel ${text}`
			},
			{
			"title": "wood style ",
			"rowId": `qwood ${text}`
			},
			{
			"title": "ornamental style ",
			"rowId": `qlovely ${text}`
			},
			{
			"title": "matalic style ",
			"rowId": `qmetalic ${text}`
			},
			{
			"title": "neon style ",
			"rowId": `qneon ${text}`
			},
			{
			"title": "pubg style ",
			"rowId": `qpubg ${text}`
			},
			{
			"title": "fire game style ",
			"rowId": `qfire ${text}`
			},
			{
			"title": "horror style ",
			"rowId": `qhorr ${text}`
			},
			{
			"title": "haloween style",
			"rowId": `qhalowin ${text}`
			},
			{
			"title": "video game style",
			"rowId": `qvideogame ${text}`
			},
			{
			"title": "wolf style ",
			"rowId": `qwolf ${text}`
			},
			{
			"title": "ninja style ",
			"rowId": `qninja ${text}`
			},
			{
			"title": "3d reto style ",
			"rowId": `qreto ${text}`
			},
			{
			"title": "bear style",
			"rowId": `bear ${text}`
			},
			{
			"title": "lion style ",
			"rowId": `lion ${text}`
			},
			{
			"title": "3dspace style ",
			"rowId": `3dspace ${text}`
			},
			{
			"title": "glitch style ",
			"rowId": `glitch3 ${text}`
			},
			{
			"title": "glitch style - 2 ",
			"rowId": `glitch2 ${text}`
			},
			{
			"title": "pron hub style ",
			"rowId": `pornhub2 ${text}`
			},
			{
			"title": "grafiti style ",
			"rowId": `grafiti ${text}`
			},
			{
			"title": "giltch style 3 ",
			"rowId": `glitch3 ${text}`
			},
			{
			"title": "team logo style - 1 ",
			"rowId": `tlc ${text}`
			},
			{
			"title": "team logo style - 2 ",
			"rowId": `tls ${text}`
			},
			{
			"title": "team logo style - 3 ",
			"rowId": `tlm ${text}`
			},
			{
			"title": "team logo style - 4 ",
			"rowId": `tle ${text}`
			},
			{
			"title": "team logo style - 5 ",
			"rowId": `tlb ${text}`
			},
			{
			"title": "mountain style ",
			"rowId": `mountain ${text}`
			},
			{
			"title": "✨ ǫᴜᴇᴇɴ ᴇʟɪsᴀ ✨",
			"rowId": `about`
			}
          ]
        }
     ]
     await ElisaBotMd.sendListMsg(m.chat, `${desmsg}`, `${global.botnma}`, `*🎨 LOGO PACK 3*`, `MAKE LOGO`, sections, m)
 
}
break
case 'logo4' :{
var MAX = ''
if (global.LANG == 'SI') MAX= '```👸💬 කරුනාකර වචනයක් ලබාදෙන්න ...```\n_උදාහරණ .logo4 MR NIMA_'
if (global.LANG == 'EN') MAX= '```👸💬 Please give me a some words ...```\n_example .logo4 MR NIMA_'
if (!text) return reply (MAX)
                              
 await ElisaBotMd.sendMessage(from, { react: { text: `4️⃣`, key: m.key }})     
  
     	const desmsg = `╔═════════════════════☐

      *_𝚀𝚞𝚎𝚎𝚗 𝙴𝚕𝚒𝚜𝚊 𝙻𝚘𝚐𝚘 𝙻𝚒𝚜𝚝_*

*▣ ʀᴇǫᴜᴇsᴛᴇʀ -*  ${m.pushName}
*▣ ʟᴏɢᴏ ᴛᴇxᴛ -* ${text}
*▣ ᴛᴏᴛᴀʟ ʟᴏɢᴏs -* *15*

☐═════════════════════╝`    
     
     let sections = [{

            "rows": [{
			"title": "Berry Style Logo Pack - 4",
				"rowId": `eberry ${text}`
			},
	     
			{
			"title": "Giltch Style Logo Pack - 4",
			"rowId": `eglitch ${text}`
			},
			{
			"title": "Neon Style Logo Pack - 4",
			"rowId": `eneon ${text}`
			},
			{
			"title": "Cristmas StyleLogo Pack - 4",
			"rowId": `ecrismas ${text}`
			},
			{
			"title": "Thunder Style Logo Pack - 4",
			"rowId": `ethunder ${text}`
			},
			{
			"title": "Ninja Style Pack - 4",
			"rowId": `eninja ${text}`
			},
			{
			"title": "Orange Style Logo Pack - 4",
			"rowId": `eorange ${text}`
			},
			{
			"title": "Cake Style Logo Pack - 4",
			"rowId": `ecake ${text}`
			},
			{
			"title": "StrowBerry Style Logo Pack - 4",
			"rowId": `estrowberry ${text}`
			},
			{
			"title": "Flaming Style Logo Pack - 4",
			"rowId": `eflaming ${text}`
			},
			{
			"title": "Shadow Style Logo Pack - 4",
			"rowId": `eshadow ${text}`
			},
			{
			"title": " On Grass Style Logo Pack - 4",
			"rowId": `eongrass ${text}`
			},
			{
			"title": "Love You Style Logo Pack - 4",
			"rowId": `eloveu ${text}`
			},
			{
			"title": "Coffee Style Logo Pack - 4",
			"rowId": `ecoffee ${text}`
			},
			{
			"title": "Illuminati Style Logo Pack - 4",
			"rowId": `eilluminati ${text}`
			}
			
          ]
        }
     ]
     await ElisaBotMd.sendListMsg(m.chat, `${desmsg}`, `${global.botnma}`, `*🎨 LOGO PACK 4*`, `MAKE LOGO`, sections, m)
 
}
break
case 'eglitch' : case 'eberry': case 'eneon' : case 'ecrismas' : case 'ethunder' : case 'eninja' :
            case 'eorange' : case 'ecake' : case 'estrowberry' : case 'eflaming' : case 'eshadow' : case 'eongrass' : 
            case 'eloveu' : case 'ecoffee' : case 'eilluminati' : {
            
           var GIVEE = ''
  if (global.LANG == 'EN') GIVEE = `*👸💬 Please give me a some words* \n_ℹ️ example ${prefix + command} MR NIMA_`
  if (global.LANG == 'SI') GIVEE = `*👸💬 කරුනාකර වචනයක් ලබාදෙන්න* \n _ℹ️ උදාහරණ ${prefix + command} MR NIMA_`
    
     if(!text) return reply('GIVEE')
     await ElisaBotMd.sendMessage(from, { react: { text: `🥨`, key: m.key }})     
      
       let link      
       if (/eglitch/.test(command)) link = 'https://api.tiodevhost.my.id/api/textpro/glitch?text='+text
       if (/eberry/.test(command)) link = 'https://api.tiodevhost.my.id/api/textpro/berry?text='+text
       if (/eneon/.test(command)) link = 'https://api.tiodevhost.my.id/api/textpro/neon?text='+text
       if (/ecrismas/.test(command)) link = 'https://api.tiodevhost.my.id/api/textpro/3dchristmas?text='+text
       if (/ethunder/.test(command)) link = 'https://api.tiodevhost.my.id/api/textpro/thunder?text='+text
       if (/eninja/.test(command)) link = 'https://api.tiodevhost.my.id/api/textpro/ninja-logo?text='+text+'&text2=ELISA BOT'
       if (/eorange/.test(command)) link = 'https://api.tiodevhost.my.id/api/textpro/3d-orange-juice?text='+text
       if (/ecake/.test(command)) link = 'https://api.tiodevhost.my.id/api/textpro/chocolate-cake?text='+text
       if (/estrowberry/.test(command)) link = 'https://api.tiodevhost.my.id/api/textpro/strawberry?text='+text
       if (/eflaming/.test(command)) link = 'https://api.tiodevhost.my.id/api/photooxy/flaming?text='+text
       if (/eshadow/.test(command)) link = 'https://api.tiodevhost.my.id/api/photooxy/shadow-sky?text='+text
       if (/eongrass/.test(command)) link = 'https://api.tiodevhost.my.id/api/photooxy/under-grass?text='+text
       if (/eloveu/.test(command)) link = 'https://api.tiodevhost.my.id/api/photooxy/picture-of-love?text='+text
       if (/ecoffee/.test(command)) link = 'https://api.tiodevhost.my.id/api/photooxy/coffee-cup?text='+text
       if (/eilluminati/.test(command)) link = 'https://api.tiodevhost.my.id/api/photooxy/illuminated-metallic?text='+text
       
    const img = await getBuffer(link)
    await ElisaBotMd.sendMessage(m.chat, { image: img, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
    //await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
           
}
break
                              case 'keberuntungan11111': case 'luck211111': {
                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} Dika, 7, 7, 2005`
                                  let [nama, tgl, bln, thn] = text.split`,`
                                  let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                                  if (anu.status == false) return reply(anu.message)
                                  ElisaBotMd.sendText(m.chat, `🔮 *𝗡𝗔𝗠𝗘 :* ${anu.message.nama}\n🔮 *𝗕𝗢𝗥𝗡 :* ${anu.message.tgl_lahir}\n🔮 *𝗥𝗘𝗦𝗨𝗟𝗧𝗦 :* ${anu.message.result}`, m)
                              }
                              break
                              case 'memancing1111': case 'fishing1111': {
                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} 12, 1, 2022`
                                  let [tgl, bln, thn] = text.split`,`
                                  let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                                  if (anu.status == false) return reply(anu.message)
                                  ElisaBotMd.sendText(m.chat, `🔮 *𝗗𝗔𝗧𝗘 :* ${anu.message.tgl_memancing}\n🔮 *𝗥𝗘𝗦𝗨𝗟𝗧𝗦 :* ${anu.message.result}\n🔮 *𝗡𝗢𝗧𝗘𝗦 :* ${anu.message.catatan}`, m)
                              }
                              break
                              case 'masasubur111111': case 'fertiletimekekskdk': {
                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} first day of menstruation, cycle`
                                  let [tgl, bln, thn, siklus] = text.split`,`
                                  let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                                  if (anu.status == false) return reply(anu.message)
                                  ElisaBotMd.sendText(m.chat, `🔮 *𝗝𝗔𝗦𝗜𝗟 :* ${anu.message.result}\n🔮 *𝗡𝗢𝗧𝗘𝗦 :* ${anu.message.catatan}`, m)
                              }
                              break
                              case 'zodiakjfjdkkd': case 'zodiackckdkdk': {
                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix+ command} 7 7 2005`
                                  let zodiak = [
                                      ["capricorn", new Date(1970, 0, 1)],
                                      ["aquarius", new Date(1970, 0, 20)],
                                      ["pisces", new Date(1970, 1, 19)],
                                      ["aries", new Date(1970, 2, 21)],
                                      ["taurus", new Date(1970, 3, 21)],
                                      ["gemini", new Date(1970, 4, 21)],
                                      ["cancer", new Date(1970, 5, 22)],
                                      ["leo", new Date(1970, 6, 23)],
                                      ["virgo", new Date(1970, 7, 23)],
                                      ["libra", new Date(1970, 8, 23)],
                                      ["scorpio", new Date(1970, 9, 23)],
                                      ["sagittarius", new Date(1970, 10, 22)],
                                      ["capricorn", new Date(1970, 11, 22)]
                                  ].reverse()
                  
                                  function getZodiac(month, day) {
                                      let d = new Date(1970, month - 1, day)
                                      return zodiak.find(([_,_d]) => d >= _d)[0]
                                  }
                                  let date = new Date(text)
                                  if (date == 'Invalid Date') throw date
                                  let d = new Date()
                                  let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                                  let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
                  
                                  let zodiac = await getZodiac(birth[1], birth[2])
                                  
                                  let anu = await primbon.zodiak(zodiac)
                                  if (anu.status == false) return reply(anu.message)
                                  ElisaBotMd.sendText(m.chat, `🔮 *𝗭𝗢𝗗𝗜𝗔𝗖 :* ${anu.message.zodiak}\n🔮 *𝗡𝗨𝗠𝗕𝗘𝗥 :* ${anu.message.nomor_keberuntungan}\n🔮 *𝗔𝗥𝗢𝗠𝗔 :* ${anu.message.aroma_keberuntungan}\n🔮 *𝗣𝗟𝗔𝗡𝗘𝗧 :* ${anu.message.planet_yang_mengitari}\n🔮 *𝗙𝗟𝗢𝗪𝗘𝗥 :* ${anu.message.bunga_keberuntungan}\n🔮 *𝗖𝗢𝗟𝗢𝗥 :* ${anu.message.warna_keberuntungan}\n🔮 *𝗥𝗢𝗖𝗞 :* ${anu.message.batu_keberuntungan}\n🔮 *𝗘𝗟𝗘𝗠𝗘𝗡𝗧 :* ${anu.message.elemen_keberuntungan}\n🔮 *𝗭𝗢𝗗𝗜𝗔𝗖 𝗖𝗢𝗨𝗣𝗟𝗘 :* ${anu.message.pasangan_zodiak}\n🔮 *𝗡𝗢𝗧𝗘𝗦 :* ${anu.message.catatan}`, m)
                              }
                              break
                              case 'shiondkskskso': {
                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                                  let anu = await primbon.shio(text)
                                  if (anu.status == false) return reply(anu.message)
                                  ElisaBotMd.sendText(m.chat, `🔮 *𝗥𝗘𝗦𝗨𝗟𝗧𝗦 :* ${anu.message}`, m)
                              }
                              break
                              
/*case 'tiktok4':{
//https://cakrayp.herokuapp.com/api/tiktok/video?url=https://www.tiktok.com/@imalka_venroy/video/7132747469271616794?is_from_webapp=1&sender_device=mobile&sender_web_id=7135844111252964866&apikey=cakrayp24Q6
}*/
case 'nowmtiktok': case 'nowm' : {
const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')
  // //if 
   if (!text) throw '*Enter a Link Query!*'            
//  var buf = await getBuffer('https://telegra.ph/file/b8b17994ae3cb80880a2a.jpg') 
   const down = await ElisaBotMd.sendText(m.chat, '*📥 DOWNLOADING YOUR TIKTOK VIDEO ...*')
   let bocil = require('@bochilteam/scraper')    
   if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
   bocil.tiktokdlv3(`${text}`).then(async (video) => {           
                       
     buf = await getBuffer(thub.TIKTOK_THUB)
     await ElisaBotMd.sendMessage(m.chat,{delete : down.key })
     const up = await ElisaBotMd.sendText(m.chat, '*📤 UPLOADING YOUR TIKTOK VIDEO ...*')
     await ElisaBotMd.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf,caption: `${global.cap}\n`}, { quoted: m })
     //await ElisaBotMd.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, caption: `${global.cap}` }, { quoted: m })   
     await ElisaBotMd.sendMessage(m.chat,{delete : up.key })  
     }).catch((err) => {
       ElisaBotMd.sendText(m.chat, '*SORRY CAN\'T DOWNLOAD ❗*')})
}
break
case 'tiktok' : case 'tt' : {
   if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*\n Example : .tiktok https://www.tiktok.com/@mr_nima_._._x/video/7185424580108897563'
await ElisaBotMd.sendMessage(from, { react: { text: `⬇️`, key: m.key }})

let boltc = require('@bochilteam/scraper')
boltc.savefrom(text)
.then(async(tknima) => {
const url = tknima.url[0].url
const desc = `${global.cap}

*🏷️ Title :* ${tknima.meta.title}
*🖇️ Source :* ${tknima.meta.source}
*🕜 Duration :* ${tknima.meta.duration}
`
const audio_link = tknima.url[1].url
await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
//const tkvid = await ElisaBotMd.sendMessage(m.chat, { video: { url: url } ,caption: `${desc}`}, { quoted: m })
const templateButtons = [
  {buttonId: `directmp3 ${audio_link}`, buttonText: {displayText: 'AUDIO'}, type: 1},

    ]

let buttonMessage = {
                    video : { url: url },
                    caption: desc ,
                    footer: global.botnma,
                    buttons: templateButtons,
                    headerType: 4
                }
               await ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
          
await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
//await ElisaBotMd.sendMessage(from, { react: { text: `🦋`, key: tkvid.key }})
  }).catch((err) => reply(NOT_FOUND))
     

}
break 
case 'tiktokwm' : {
if (!text) return reply('Need tiktok url')
const down = await ElisaBotMd.sendText(m.chat, '*📥 DOWNLOADING YOUR TIKTOK VIDEO ...*')
await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json').then(async (thub) => { 
buf = await getBuffer(thub.TIKTOK_THUB)
   //  await ElisaBotMd.sendMessage(m.chat,{delete : down.key })
     const viddd = await getBuffer(`https://api.akuari.my.id/downloader/tiktokwithwm?link=${text}`)
     await ElisaBotMd.sendMessage(m.chat,{delete : down.key })
     const up = await ElisaBotMd.sendText(m.chat, '*📤 UPLOADING YOUR TIKTOK VIDEO ...*')
     await ElisaBotMd.sendMessage(m.chat, { video: viddd , jpegThumbnail:buf,caption: `${global.cap}\n`}, { quoted: m })
     //await ElisaBotMd.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, caption: `${global.cap}` }, { quoted: m })   
     await ElisaBotMd.sendMessage(m.chat,{delete : up.key })  
     }).catch((err) => {
       ElisaBotMd.sendText(m.chat, NOT_FOUND)})

}
break
case 'findsticker' : case 'searchsticker' : {
 if (!text) return reply('*👸💬 Please give me sticker pack name*')
 await fetchJson(`https://api.akuari.my.id/search/stickertelegram?query=${text}`)
 

}
case 'stelegram' :{

     if (!text) return reply('👸💬 Please give me a telegram sticker pack link')
     if (!text.includes('https://t.me/addstickers')) return reply('*👸💬 Please give me a correct link*\n _.stelegram https://t.me/addstickers/ViniProduction_by_MekathKalawak_')
     //if (!isUrl(args[0]) && !args[0].includes('https://t.me/addstickers')) throw '*The link you provided is not valid*'                
    await ElisaBotMd.sendText(m.chat , '*Loading...*' )
    await fetchJson(`https://api.tiodevhost.my.id/api/dowloader/telesticker?url=${text}`)
      .then(async (sticker) => {  
  //  await ElisaBotMd.sendText(m.chat, util.format(sticker))
    const stik = sticker.result
    const img = stik[1].url
    const img2 = stik[2].url
    const img3 = stik[3].url
    const img4 = stik[4].url
    const img5 = stik[5].url
    const img6 = stik[6].url
    const img7 = stik[7].url
    const img8 = stik[8].url
    const img9 = stik[9].url
    const img10 = stik[10].url
    const img11 = stik[11].url
    const img12 = stik[12].url
    const img13 = stik[13].url
    const img14 = stik[14].url
    const img15 = stik[15].url
    
    //await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img2, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img3, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img4, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img5, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img6, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img7, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img8, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img9, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img10, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img11, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img12, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img13, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img14, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    await ElisaBotMd.sendImageAsSticker(m.chat, img15, m, { packname: global.packname, author: '『© ǫᴜᴇᴇɴ ᴇʟɪsᴀ 』' })
    }).catch((err) => m_reply('*මෙම telegram sticker Download කල නොහැක !!!*'))
    /*await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img2 }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
     await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img3 }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
    await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img4 }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
    await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img5 }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
    await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img6 }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
    await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img7 }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
    await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img8 }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
    await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img9 }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
    await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img10 }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
    await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img11 }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
    await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img12 }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
    await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img13 }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
    await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img14 }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
    await ElisaBotMd.sendMessage(m.chat ,{ sticker : { url : img15 }, packname: '𝑄𝑢𝑒𝑒𝑛 𝐸𝑙𝑖𝑠𝑎' })
    */
// https://fatiharridho.herokuapp.com/api/downloader/telesticker?url=
  
}
break
case 'sendmsg' :{
     text1 = q.split(";")[0]
     text2 = q.split(";")[1]
     if (!text) throw '*👸💬 Please give me a recipient\'s number and your massage* \n _example .sendmsg'+global.owner+' ; Hello how are you_'
 await ElisaBotMd.sendText(text1+'@s.whatsapp.net', text2 || '*Hello I am Queen Elisa*\n\n _Join My Main Group_ \n  *https://chat.whatsapp.com/JlIOrWU08K19dFrHkOGI5N*')
}
break

case 'ss' : {  
                         
var NEED = ''
if (global.LANG == 'EN') NEED = '*The link you provided is not valid* '
if (global.LANG == 'SI') NEED = '*ඔබ ලබා දුන් සබැඳිය වලංගු නැත*'

if (!text) throw NEED
const load = await ElisaBotMd.sendText(m.chat,mess.wait)
await getBuffer(`https://api.botcahx.biz.id/api/tools/ssweb?link=${text}`).then(async (imagee) => { 
await ElisaBotMd.sendMessage(m.chat, { image: imagee, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { delete: load.key }) 
   
    }).catch((err) => m_reply(NOT_FOUND))

}

break

case 'vid2': {
themeemoji ='📽️'
const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')
let { ytv } = require('./lib/y2mate')
if (!text) return reply(`${Lang.EXAMPLE}\n : ${prefix + command} https://youtube.com/watch?v=RNa4thokVJ4 360p`)
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid!`)
await ElisaBotMd.sendMessage(from, { react: { text: `📽️`, key: m.key }})
const load = await ElisaBotMd.sendText(m.chat,mess.wait)
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000)  {

msg = `*⛔ FILE SIZE UP TO 100MB ⛔*
                                  
*ғɪʟᴇ ɴᴀᴍᴇ :* ${media.title}
                                  
*ғɪʟᴇ sɪᴢᴇ :* ${media.filesize}
`
                                  const templateButtons = [
                                  {index: 1, urlButton: {displayText: 'DOWNLOAD ON WEB', url: media.dl_link+'.mp4' }},
                                  {index: 2, urlButton: {displayText: 'ǫᴜᴇᴇɴ ᴇʟɪsᴀ ᴘᴜʙʟɪᴄ', url: 'https://chat.whatsapp.com/JlIOrWU08K19dFrHkOGI5N'}}
    
                                  ]

                                  const templateMessage = {
                                  text: msg,
                                  footer: global.botnma,
                                  templateButtons: templateButtons
                                  }

                                  return await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: m })   
                                  }
                                  // reply('*File Over Limit* '+util.format(media))
var capti = `*YOUTUBE VIDEO*\n\n*${themeemoji}Title* : ${media.title}\n*${themeemoji}File size* : ${media.filesizeF}\n*${themeemoji}Url* : ${isUrl(text)}\n*${themeemoji}Ext* : Mp4\n*${themeemoji}Resoultion* : ${args[1] || '360p'}`
var buf = await getBuffer(thub.YT_THUB)
await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
await ElisaBotMd.sendMessage(m.chat, { video: { url: media.dl_link }, jpegThumbnail:buf, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `${global.cap}` }, { quoted: m }).catch((err) => reply(mess.error))
await  ElisaBotMd.sendMessage(m.chat, { delete: load.key })
await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }}) 
}
break
case 'pemoji' : {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `🛠️`, key: m.key }})
var NEED = ''
if (global.LANG == 'EN') NEED = '*Please Give me a imoji* \nExample *.pemoji 🤠*'
if (global.LANG == 'SI') NEED = '*කරුනාකර මට ඉමෝජියක් ලබාදෙන්න*\nඋදා : *.pemoji 🤠*'
     if (!text) throw NEED
   const imoji =  await fetchJson(`https://fatiharridho.herokuapp.com/api/tools/emojipedia?emoji=${encodeURIComponent(text)}`)
  // await ElisaBotMd.sendText(m.chat,util.format(imoji))
   const img = imoji.result.image[0].image
   await ElisaBotMd.sendMessage(m.chat, { image: { url: img },  caption: `${global.cap}`}, { quoted: m })
   

}
break
case 'pemoji2' :{
if (!text) return reply(`*👸💬 Please Give me a imoji*\nExample - .${command}👸`)
                          await ElisaBotMd.sendMessage(from, { react: { text: `✨`, key: m.key }})

await ElisaBotMd.sendMessage(m.chat, { image: { url:`https://api.botcahx.biz.id/api/emoji/facebook?emoji=${encodeURIComponent(text)} `},  caption: `${global.cap}`}, { quoted: m })
   

}
break
case 'pemoji3' :{
if (!text) return reply(`*👸💬 Please Give me a imoji*\nExample - .${command}👸`)
                          await ElisaBotMd.sendMessage(from, { react: { text: `✨`, key: m.key }})

await ElisaBotMd.sendMessage(m.chat, { image: { url: `https://api.botcahx.biz.id/api/emoji/samsung?emoji=${encodeURIComponent(text)}` },  caption: `${global.cap}`}, { quoted: m })
   

}
break
case 'emostick' :{
if (!text) return reply(`*👸💬 Please Give me a imoji*\nExample - .${command}👸`)
                          await ElisaBotMd.sendMessage(from, { react: { text: `✨`, key: m.key }})

await ElisaBotMd.sendMedia(m.chat, `https://api.botcahx.biz.id/api/emoji/skype?emoji=${encodeURIComponent(text)}` , '𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰', '𝙱𝙾𝚃', m, {asSticker: true}).catch((err) => reply(err))

}
break
case 'trt%%' :{

const Tssst = `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
Afrikaans - af
Albanian - sq
Amharic - am
Arabic - ar
Armenian - hy
Azerbaijani - az
Basque - eu
Belarusian - be
Bengali - bn
Bosnian - bs
Bulgarian - bg
Catalan - ca
Cebuano - ceb 
Chinese (Simplified) - zh-CN or zh
Chinese (Traditional) - zh-TW 
Corsican - co
Croatian - hr
Czech - cs
Danish - da
Dutch - nl
English - en
Esperanto - eo
Estonian - et
Finnish - fi
French - fr
Frisian - fy
Galician - gl
Georgian - ka
German - de
Greek - el
Gujarati - gu
Haitian Creole - ht
Hausa - ha
Hawaiian - haw 
Hebrew - he or iw
Hindi - hi
Hmong - hmn
Hungarian - hu
Icelandic - is
Igbo - ig
Indonesian - id
Irish - ga
Italian - it
Japanese - ja
Javanese - jv
Kannada - kn
Kazakh - kk
Khmer - km
Kinyarwanda - rw
Korean - ko
Kurdish - ku
Kyrgyz - ky
Lao - lo
Latin - la
Latvian - lv
Lithuanian - lt
Luxembourgish - lb
Macedonian - mk
Malagasy - mg
Malay - ms
Malayalam - ml
Maltese - mt
Maori - mi
Marathi - mr
Mongolian - mn
Myanmar (Burmese) - my
Nepali - ne
Norwegian - no
Nyanja (Chichewa) - ny
Odia (Oriya) - or
Pashto - ps
Persian - fa
Polish - pl
Portuguese (Portugal, Brazil) - pt
Punjabi - pa
Romanian - ro
Russian - ru
Samoan - sm
Scots Gaelic - gd
Serbian - sr
Sesotho - st
Shona - sn
Sindhi - sd
Sinhala (Sinhalese) - si
Slovak - sk
Slovenian - sl
Somali - so
Spanish - es
Sundanese - su
Swahili - sw
Swedish - sv
Tagalog (Filipino) - tl
Tajik - tg
Tamil - ta
Tatar - tt
Telugu - te
Thai - th
Turkish - tr
Turkmen - tk
Ukrainian - uk
Urdu - ur
Uyghur - ug
Uzbek - uz
Vietnamese - vi
Welsh - cy
Xhosa - xh
Yiddish - yi
Yoruba - yo
Zulu - zu

© ǫᴜᴇᴇɴ ᴇʟɪsᴀ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`
var MAX = ''
if (global.LANG == 'EN') MAX= '```✨ Transleteing ...```'
if (global.LANG == 'SI') MAX= '```✨ පරිවර්තනය කරමින් ...```'
var MDAX = ''
if (global.LANG == 'EN') MDAX= '*👸💬 Please give me a text and select language*\n _example - .trt ආයුබෝවන්;en_\n\n*✨ Translete language codes ✨*\n\n'+'```'+Tssst+'```'
if (global.LANG == 'SI') MDAX= '*👸💬 කරූනාකර වචනයක් සමග භාශාව තෝරන්න*\nඋදාහරණ - .trt good morning;si\n\n*✨ පරිවර්තනය අවශ්‍ය බාශා කෙටිනාම ✨*\n\n'+'```'+Tssst+'```'
var NimaLang = ''
if (global.LANG == 'EN') NimaLang = '*👸💬 Sorry can\'t translete become a error !*'
if (global.LANG == 'SI') NimaLang = '*👸💬 කනගාටුයි පරිවර්තනය සිදුකළ නොහැක !*'                           
                              
//if (!quoted) return reply(MAX)
if (!text) return reply (MDAX) 
text1 = text.split(";")[0]
text2 = text.split(";")[1]
//const wokwol = await ElisaBotMd.serializeM(await m.getQuotedObj())
//if (!wokwol.quoted)                       
 const nima = await fetchJson(`https://api.tiodevhost.my.id/api/info/translate?text=${text1}&lang=${text2}`)
 if (nima.stetus === 'false') return reply(NimaLang)
 const msg = nima.result
 //await ElisaBotMd.sendText(m.chat,`${MAX}`)
 await ElisaBotMd.sendText(m.chat, `${nima.result}`)
 //m_reply(nima.result)
// m_reply(msg)
}
break
/*case 'animestory' : {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `📡`, key: m.key }})

     const story = 'https://fatiharridho.herokuapp.com/api/anime/storyanime'
     await ElisaBotMd.sendMessage(m.chat, { video: { url: story },  caption: `${global.cap}`}, { quoted: m })

}*/
break
/*case 'git': case 'gitclone':
reply(mess.wait)
 let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
 if(!args[0]) throw 'link github  EXAMPLE: https://github.com/zim-bot/zim-bot-md'
if (!regex1.test(args[0])) throw 'link!'
   let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
    reply(`*Please wait, sending repository..*`)
    ElisaBotMd.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' , quoted: m,contextInfo: { externalAdReply:{
      title:"QUEEN ELISA V2",
      body:"SUB MR NIMA",
      showAdAttribution: true,
      mediaType:2,
      thumbnail: fs.readFileSync('./drips.jpg'),
      mediaUrl:`https://youtube.com/c/MRNIMAOFC`, 
      sourceUrl: `https://youtube.com/c/MRNIMAOFC`,
      }}
      })*/
case 'pic' : {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `🌝`, key: m.key }})

     ElisaBotMd.sendText(m.chat,` *Please enter pic name*
     
     ▶ *.picjeni*
     ▶ *.picrose*
     ▶ *.picjiso*
     ▶ *.picryujin*
     ▶ *.pichijaber* `)
}
break
case 'picjeni' :{  
                          await ElisaBotMd.sendMessage(from, { react: { text: `👱‍♀️`, key: m.key }})
         
         const img = 'https://betabotz-api.herokuapp.com/api/cecan/jeni?apikey=BetaBotz'
         await ElisaBotMd.sendMessage(m.chat, { image: { url: img },  caption: `${global.cap}`}, { quoted: m })

}
break
case 'picrose' :{  
                          await ElisaBotMd.sendMessage(from, { react: { text: `👱‍♀️`, key: m.key }})
         
         const img = 'https://betabotz-api.herokuapp.com/api/cecan/rose?apikey=BetaBotz'
         await ElisaBotMd.sendMessage(m.chat, { image: { url: img },  caption: `${global.cap}\n*ᴘɪᴄ ʀᴏsᴇ*`}, { quoted: m })

}
break
case 'picjiso' :{  
                          await ElisaBotMd.sendMessage(from, { react: { text: `👱‍♀️`, key: m.key }})
         
         const img = 'https://betabotz-api.herokuapp.com/api/cecan/jiso?apikey=BetaBotz'
         await ElisaBotMd.sendMessage(m.chat, { image: { url: img },  caption: `${global.cap}\n*ᴊɪsᴏ ɪᴍᴀɢᴇ*`}, { quoted: m })

}
break
case 'picryujin' :{  
                          await ElisaBotMd.sendMessage(from, { react: { text: `👱‍♀️`, key: m.key }})
         
         const img = 'https://betabotz-api.herokuapp.com/api/cecan/ryujin?apikey=BetaBotz'
         await ElisaBotMd.sendMessage(m.chat, { image: { url: img },  caption: `${global.cap}\n*ʀʏᴜᴊɪɴ ɪᴍᴀɢᴇ*`}, { quoted: m })

}
break
case 'pichijaber' :{  
                          await ElisaBotMd.sendMessage(from, { react: { text: `👩‍🦰`, key: m.key }})
         
         const img = 'https://betabotz-api.herokuapp.com/api/cecan/hijaber?apikey=BetaBotz'
         await ElisaBotMd.sendMessage(m.chat, { image: { url: img },  caption: `${global.cap}\n*ʜɪᴊᴀʙᴇʀ ɪᴍᴀɢᴇs*`}, { quoted: m })

}
break
                              case 'tiktok2': case 'ttk': {
                              if (!text) throw `Use ${Lang.EXAMPLE}\n ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
                              if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
                              const load = await ElisaBotMd.sendText(m.chat, ` ʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ${m.pushName} ᴛɪᴋᴛᴏᴋ ᴠɪᴅᴇᴏ... 🔄`)

                              anu = await fetchJson(`https://ravindumanoj-sew-api.herokuapp.com/main/download/tiktok?url=${text}&apikey=RavinduManoj`)

                             let listmn = `┌───[💃 *𝙴𝚕𝚒𝚜𝚊 𝙱𝚘𝚝* 💃]───●
│
│        🧚‍♀ 𝚃𝚒𝚔𝚃𝚘𝚔 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛 🧚‍♀
│ *ᴛʜɪs ɪs ${m.pushName} ᴠɪᴅᴇᴏ*
│
└───────● `
                              buf = await getBuffer(`https://i.ibb.co/MhqzZj8/Darkmekcersilverownerfrofilepgoto.jpg`)
                              buf2 = await getBuffer(anu.result.nowm)
                              let message = await prepareWAMessageMedia({ video: buf2, gifPlayback:false }, { upload: ElisaBotMd.waUploadToServer })
                              const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                              templateMessage: {
                              hydratedTemplate: {
                              videoMessage: message.videoMessage,
                              hydratedContentText: listmn,
                              hydratedFooterText: global.botnma,
                              hydratedButtons: [{


                              quickReplyButton: {
                              displayText: '💃 𝙸 𝙶𝙾𝚃 𝙸𝚃 💃',
                              id: `Gytt`
                              }
                              }]
                              }
                              }
                              }), { userJid: m.chat, quoted: m })
                              ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                              break
/// TEXT LOGO 2
case 'logo2' :{

if (global.LANG == 'SI') MAX= '```👸💬 කරුනාකර වචනයක් ලබාදෙන්න ...```\n_උදාහරණ .logo MR NIMA_'
if (global.LANG == 'EN') MAX= '```👸💬 Please give me a some words ...```\n_example .logo MR NIMA_'
if (!text) return reply (MAX)

await ElisaBotMd.sendMessage(from, { react: { text: `2️⃣️`, key: m.key }})             	
               
               let sections = [{ 
                    "title": `𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝚅2 𝙻𝙾𝙶𝙾 𝙻𝙸𝚂𝚃 - 2 𝚂𝙴𝙻𝙴𝙲𝚃 𝚈𝙾𝚄𝚁 𝙻𝙾𝙶𝙾 `,
                                   "rows": [
                                   {
										"title": "LEAGUE OF KING STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `lofg3 ${text}`
										},
									{
										"title": "YASHO STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `gamin ${text}`
										},
									{
										"title": "HORROR STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `horr ${text}`
									},
									{
										"title": "ARENA OF VALOR STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `lofg2 ${text}`
									},
									{
										"title": "LEAGUE OF LEGENDS STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `lofg1 ${text}`
									},
									{
											"title": "LIGHT STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `light ${text}`
										},
         	                            {
											"title": "NINJA STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `ninja ${text}`
										},
										{
											"title": "NEON-BRIGHT BLUE STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `neon5 ${text}`
										},		
										{
											"title": "NEON-DEVIL WING STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `neon4 ${text}`
										},
										{
											"title": "NEON SATIN STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `neon3 ${text}`
										},
										{
											"title": "NEON-VALANTINE STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `neon2 ${text}`
										},
										{
											"title": "NEON-GALAXY STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `neon1 ${text}`
										},
										{
											"title": "TEXT TO STETUS STYLE (life)- 1",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `status8 ${text}`
										},
										{
											"title": "TEXT TO STETUS STYLE (life)- 2",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `status7 ${text}`
										},
										{
											"title": "TEXT TO STETUS STYLE (life)- 3",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `status6 ${text}`
										},
										{
											"title": "TEXT TO STETUS  STYLE (lovely)- 4",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `status5 ${text}`
										},
										{
											"title": "TEXT TO STETUS STYLE (lovely)- 5",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `status4 ${text}`
										},
										{
											"title": "TEXT TO STETUS STYLE (mood)- 6",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `status3 ${text}`
										},
										{
											"title": "TEXT TO STETUS STYLE (mood)- 7",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `status2 ${text}`
										},
										{
											"title": "TEXT TO STETUS STYLE (mood)- 8",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `statuslogo ${text}`
										},
										{
											"title": "TATOO ON HAND STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `tattoo ${text}`
										},
										{
											"title": "LEAVES STYLE - 1",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `leaves4 ${text}`
										},
										{
											"title": "LEAVES STYLE - 2",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `leaves3 ${text}`
										},
										{
											"title": "LEAVES STYLE - 3",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `leaves2 ${text}`
										},
										{
											"title": "LEAVES STYLE - 4",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `leaves1 ${text}`
										},
										{
											"title": "LEAVES STYLE - 5",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `leaves ${text}`
										},
										{
											"title": "LEAVES STYLE - 6",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `leaves5 ${text}`
										},
										{
											"title": "VALANTINE STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `valentine ${text}`
										},
										{
											"title": "LEND STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `lende ${text}`
										},
										{
											"title": "GALAXY-ANGAL-WINGS STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `gaw ${text}`
										},
										{
											"title": "CAKE STYLE - 1",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `cake-text ${text}`
										},
										{
											"title": "CAKE STYLE - 2",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `cake-text2 ${text}`
										},
										{
											"title": "CAKE STYLE - 3",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `cake-text3 ${text}`
										},
										{
											"title": "BLOOD STYLE - 1",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `blood-frosted ${text}`
										},
										{
											"title": "BLOOD STYLE - 2",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `blood-steel ${text}`
										},
										{
											"title": "BLOOD STYLE - 3",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `Blood-Text2 ${text}`
										},
										{
											"title": "BIRTHDAY CAKE STYLE - 1",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `birthday-cake7 ${text}`
										},
										{
											"title": "BIRTHDAY CAKE STYLE - 2",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `birthday-cake6 ${text}`
										},
										{
											"title": "BIRTHDAY CAKE STYLE - 3",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `birthday-cake5 ${text}`
										},
										{
											"title": "BIRTHDAY CAKE STYLE - 4",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `birthday-cake4 ${text}`
										},
										{
											"title": "BIRTHDAY CAKE STYLE - 5",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `birthday-cake3 ${text}`
										},
										{
											"title": "BIRTHDAY CAKE STYLE - 6",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `birthday-cake2 ${text}`
										},
										{
											"title": "BIRTHDAY CAKE STYLE - 7",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `birthday-cake ${text}`
										},
										{
											"title": "QUITE STYLE ",
										"description": `Mr ${m.pushName} ${global.botnma} is Ready to make your logo`,
										"rowId": `darkgold ${text}`
										}		
							      	]
								
								}
							]
     await ElisaBotMd.sendListMsg(m.chat, `╔═════════════════════☐

     *_𝚀𝚞𝚎𝚎𝚗 𝙴𝚕𝚒𝚜𝚊 𝙻𝚘𝚐𝚘 𝙻𝚒𝚜𝚝 2_*

*▣ ʀᴇǫᴜᴇsᴛᴇʀ -*  _${m.pushName}_
*▣ ʟᴏɢᴏ ᴛᴇxᴛ -* _${text}_
*▣ ᴀᴠᴀʟᴀʙʟᴇ ʟᴏɢᴏᴇs -* _44_

☐═════════════════════╝`, `${global.botnma}`, `*🎨 LOGO PACK 2*`, `MAKE LOGO`, sections, m)
 
            }
            break



case 'lofg3' : {

     const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
     const logo = `https://api.violetics.pw/api/ephoto360/azzenka-league-of-kings?apikey=${global.fbapi}&text=${text}`
     await await ElisaBotMd.sendMessage(m.chat ,{ image :{ url : logo } , caption : `${global.cap}`})

}
break

case 'gamin' : {
     
     const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
     const logo = `https://api.violetics.pw/api/ephoto360/yasuo?apikey=7518-b675-9944&text=${text}`
     await ElisaBotMd.sendMessage(m.chat ,{ image :{ url : logo } , caption : `${global.cap}`})

}
break


case 'horr' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Horror-Gift?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break

     
case 'lofg2' :{

             const logo = `https://api.violetics.pw/api/ephoto360/Kahlii-Arena-Of-Valor?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'lofg1' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Kaisa-League-Of-Legends?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'light' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Light-Effect?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'ninja' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Ninja-Mascot?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'neon5' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Neon-Brightblue?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'neon4' :{

             const logo = `https://api.violetics.pw/api/ephoto360/Neon-Devilwing?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'neon3' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Neon-Satin?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'neon2' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Neon-Valentine?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'neon1' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Neonlight-Galaxy?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'status8' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Status-Life?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'status7' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Status-Life2?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, global.LANG )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'status6' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Status-Life3?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'status5' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Status-Love?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, global.LANG )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'status4' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Status-Love2?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, global.LANG )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'statuslogo' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Status-Mood?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, global.LANG )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'status2' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Status-Mood2?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, global.LANG )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'status3' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Status-Mood3?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, global.LANG )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'tattoo' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Tattoo-Hand?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, global.LANG )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'leaves2' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Typography-Leaves?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, global.LANG )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'leaves1' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Typography-Leavesautumn?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'leaves3' :{

             const logo = `https://api.violetics.pw/api/ephoto360/Typography-Maker?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'leaves4' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Typography-Maker2?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'leaves5' : {

             const logo = `https://api.violetics.pw/api/ephoto360/Typography-Maker3?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'valentine': {

             const logo = `https://api.violetics.pw/api/ephoto360/Valentine-Day?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'leaves': {

             const logo = `https://api.violetics.pw/api/ephoto360/Leaves-Text?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'lende': {

             const logo = `https://api.violetics.pw/api/ephoto360/Lend-Effect?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
case 'gaw':{

             const logo = `https://api.violetics.pw/api/ephoto360/Galaxy-Angelwings?apikey=${global.fbapi}&text=${text}`
             const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
             await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
             await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             }
break
// 30

case 'cake-text': case 'cake-text2': case 'cake-text3': case 'blood-frosted': case 'blood-steel': case 'Blood-Text2': case 'birthday-cake': case 'birthday-cake2' : case 'birthday-cake3' :
case 'birthday-cake4' : case 'birthday-cake5' : case 'birthday-cake6' : case 'birthday-cake7': case 'cute-typography' : {

       
       const logo = `https://api.violetics.pw/api/ephoto360/${command}?apikey=${global.fbapi}&text=${text}`
       const logomaking = await ElisaBotMd.sendText(m.chat, LOGO_MAKING )
       await ElisaBotMd.sendMessage(m.chat, { image: { url: logo }, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
       await ElisaBotMd.sendMessage(m.chat,{delete : logomaking.key })  
             
}
break





                              case 'tiktokmp3' : {
                              if (!text) throw '*Enter a Link Query!*'            
   
   const down = await ElisaBotMd.sendText(m.chat, '*📥 DOWNLOADING YOUR TIKTOK AUDIO ...*')
   let bocil = require('@bochilteam/scraper')    
   if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
   bocil.tiktokdlv3(`${text}`).then(async (video) => {           
                       
  //   buf = await getBuffer('https://telegra.ph/file/4726860906f6d3120b527.jpg')
     await ElisaBotMd.sendMessage(m.chat,{delete : down.key })
     const up = await ElisaBotMd.sendText(m.chat, '*📤 UPLOADING YOUR TIKTOK AUDIO ...*')
     await ElisaBotMd.sendMessage(m.chat, { audio: { url: video.video.music }, mimetype: 'audio/mpeg' }, { quoted: m })   
     await ElisaBotMd.sendMessage(m.chat,{delete : up.key })  
    
     }).catch((err) => {
       ElisaBotMd.sendText(m.chat, '```SORRY CAN\'T DOWNLOAD ❗```')})
}
break
case 'thubs' :{
    await ElisaBotMd.sendText(m.chat,`
    ${thub.YT_THUB}
    ${thub.FB_THUB}
    ${thub.SF_THUB}
    ${thub.TIKTOK_THUB}
    `)
    
}
break
           case 'fb2': case 'facebook': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m_reply(mess.endLimit
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
                await ElisaBotMd.sendText(m.chat, ` *Loading Your  ${m.pushName} FaceBook Video ... 🔄*`)
                anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=${global.fbapi}&url=${text}`)
                tummb = await getBuffer(thub.FB_THUB)    
                            FBCAP = `┌────[💃 *𝙴𝚕𝚒𝚜𝚊 𝙱𝚘𝚝* 💃]───●
│
│  🧚‍♀️ 𝙵𝙱 𝚅𝚒𝚍𝚎𝚘 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛 🧚‍♀️
│⦁ 𝚃𝚒𝚝𝚕𝚎 : ${anu.result.meta.title}
│⦁ 𝚂𝚞𝚋𝙽𝚊𝚖𝚎 : ${anu.result.url[0].subname}
│
└────────●`
                ElisaBotMd.sendMessage(m.chat, { video: { url: anu.result.url[0].url }, jpegThumbnail:tummb, caption:FBCAP }, { quoted: m }).catch((err) => m_reply('*Sorry, the feature is in error*'))
            }
            break
            case 'mfire2' : {
            
            anu = await fetchJson(`https://sanuw-api.herokuapp.com/docs/download/mediafire?url=${text}&apikey=sanuwa`)
            reply (` ${anu.result.nama} \n ${anu.result.size} \n ${anu.result.link}`)
            
            }
            break 
            
                              /*case 'fbdl': case 'fb': case 'facebook': {
                                  if (!text) throw ' Query Link!'
                                  m_reply(mess.wait)
                                  let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                                  ElisaBotMd.sendMessage(m.chat, { video: { url: anu.result.url }, caption: ` *Title* : ${anu.result.title}`}, { quoted: m })
                              }
                              break*/
                              case 'fbook':{     	    

             if (!text) return reply(`*Please give me a link*`)
                var Down = await ElisaBotMd.sendText(m.chat, '*📥 DOWNLOADING YOUR FACEBOOK VIDEO ...*')
                let bocil = require('@bochilteam/scraper')  
                bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                    
                buf = await getBuffer('https://telegra.ph/file/2c90d67ecebe754eaefc0.jpg')    

                for (let i of data.result) {   
                await ElisaBotMd.sendMessage(m.chat,{delete : Down.key })
                var Upload = await await ElisaBotMd.sendText(m.chat, ' *📤 UPLOADING YOUR FACEBOOK VIDEO ...*')
                await ElisaBotMd.sendMessage(m.chat, { video: { url: i.url }, caption: `${global.cap}\n\n*Quality :* ${i.quality}`}, { quoted: m })
                await ElisaBotMd.sendMessage(m.chat,{delete : Upload.key })
                }          
                }).catch((err) => {
                    ElisaBotMd.sendText(m.chat, '```Sorry Can\'t Download ❗```')})
            }
            break
    case 'twiter' : case 'insta': case 'igvid' : case 'fb': case 'get': {  
var rimogi = '' 
if (command == 'twiter') rimogi = '🎗️'
if (command == 'insta') rimogi = '🪅'
if (command == 'fb') rimogi = '🪀'
if (command == 'get') rimogi = '🧸'

const seccap = args[1] || '😍💗'
    const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')
                          await ElisaBotMd.sendMessage(from, { react: { text: `⬇️`, key: m.key }})
    
    if (!text) {
    await ElisaBotMd.sendMessage(from, { react: { text: `ℹ️`, key: m.key }})
    throw '*Please Give me a link*'
    }
   buf = await getBuffer(thub.SF_THUB)
 //  const download = await ElisaBotMd.sendText(m.chat, mess.wait)

                let bicil = require('@bochilteam/scraper')

                let urlnya = args[0]

	            bicil.savefrom(urlnya)

	            .then(async(result) => {	  	                                	                      	            

		        for(let i of result.url) {		

		        if(i.url.includes('mp4')){		           			    				

				let link = await getBuffer(i.url)
			// await ElisaBotMd.sendMessage(m.chat, { delete: download.key })	
            // const uplode = await ElisaBotMd.sendText(m.chat, ` *Please Wait ${global.botnma} Trying upload Your  ${m.pushName} Video ... 🔄*`)
             await ElisaBotMd.sendMessage(from, { react: { text: `⬆️`, key: m.key }})

                const gettl = await ElisaBotMd.sendMessage(m.chat, { video: link, jpegThumbnail:buf,caption: `${global.cap}` }, { quoted: m }) 
                //await ElisaBotMd.sendMessage(m.chat, { delete: uplode.key })    
                await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})          
                await ElisaBotMd.sendMessage(from, { react: { text: rimogi , key: gettl.key }})          

               }

              }

            }).catch((err) => reply('```Can\'t Download your Video... ☹️```'))

            }		

			break
                              case 'pindl': case 'pinterestdl': {
                                  if (!text) throw 'Enter Query Link!'
                                  replay(mess.wait)
                                  let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                                  ElisaBotMd.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
                              }
                              break
                              case 'mediafire2' : {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: m.key }})
      
      if (!text) return reply('*👸💬 Please Give Me A mediafire Link*\n```'+'.mediafire https://www.mediafire.com/view/mdn9ja4wcmy7dtd/QueenElisaBot.jpg/file```')
      if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
      
          const down = await ElisaBotMd.sendText(m.chat, '*⤵ Downloading mediafire file...*')
          
            await fetchJson(`https://sanuw-api.herokuapp.com/docs/download/mediafire?url=${text}&apikey=sanuwa`).then(async (anu) => {  
           // if (anu.stetus = 'false') return m_reply(NOT_FOUND)
            mname = anu.result.nama
            msize = anu.result.size
            murl = anu.result.link
            mmeme = anu.result.mime
           /* cpmsg = `┌───[💃 *𝙴𝚕𝚒𝚜𝚊 𝙱𝚘𝚝* 💃]───●
│
│        🧚‍♀ 𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛 🧚
‍│
│⦁ *Name* : ${mname}
│
│⦁ *Size* : ${msize}
│⦁ *Mime* : ${murl}
│⦁ *Link* : ${mmeme}
│
└───────●`*/
          // if (msize.split('MB')[0] >= 150) return reply('*CAN\'T UPLODE YOUR FILE* \n_YOUR FILE BIGGER THAN 120mb_\n\nfile size - *'+msize+'*')
           await ElisaBotMd.sendMessage(m.chat, { delete: down.key })            
           const upload = await ElisaBotMd.sendText(m.chat,'*⤴ Uploading your mediafire file...*')
           await ElisaBotMd.sendMessage(m.chat, { delete: upload.key })            
           await ElisaBotMd.sendMessage(from, { react: { text: `📁`, key: me.key }})
            })
            }
            break 
            /*case 'mediafire' :{
            if(!text && !text.includes('mediafire.com')) return reply('*Please Give me a mediafire link*')
            const down = await ElisaBotMd.sendText(m.chat,FILE_DOWNLOAD)
            const nima = await fetchJson(`https://cakrayp.herokuapp.com/api/downloader/mediafire?url=${text}&apikey=cakrayp24Q6`)
            if(nima.status == '200'){
            const msize = nima.result.filesize
            const murl = nima.result.downloads
            const mname = nima.result.filename
            const mmeme = nima.result.mimetype
          //  const down = await ElisaBotMd.sendText(m.chat,FILE_DOWNLOAD)
            if (msize.split('MB')[0] >= 150) return reply('*CAN\'T UPLODE YOUR FILE* \n_YOUR FILE BIGGER THAN 150mb_\n\nfile size - *'+msize+'*')
            const upload = await ElisaBotMd.sendText(m.chat,FILE_UPLOAD)
            await ElisaBotMd.sendMessage(m.chat, { delete: down.key })
            const me = await ElisaBotMd.sendMessage(m.chat, { document : { url : murl }, fileName : mname, mimetype: mmeme }, { quoted : m }).catch ((err) => reply('*Can\'t Download your Mediafire Link ❗*'))
            await ElisaBotMd.sendMessage(m.chat, { delete: upload.key })            
            await ElisaBotMd.sendMessage(from, { react: { text: `📁`, key: me.key }})
          
            }else{
            await ElisaBotMd.sendMessage(m.chat, { delete: down.key })
            m_reply(NOT_FOUND)
            }
            }
            break
                  */
                  case 'mediafire' : {
                  const { mediafireDl } = require('./lib/mediafire.js')
await mediafireDl(text).then(async (baby1) => {  
if (baby1[0].size.split('MB')[0] >= 150) return reply('*File Over Limit* '+util.format(baby1))
const down = await ElisaBotMd.sendText(m.chat, '*⤵ Downloading mediafire file...*')
await ElisaBotMd.sendMessage(m.chat, { delete: down.key })            
const upload = await ElisaBotMd.sendText(m.chat,'*⤴ Uploading your mediafire file...*')
        
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
//reply(`${result4}`)
const me = await ElisaBotMd.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
await ElisaBotMd.sendMessage(m.chat, { delete: upload.key })     
await ElisaBotMd.sendMessage(from, { react: { text: `📁`, key: me.key }})
}).catch ((err) => reply(NOT_FOUND))
 
}
                 break
                              
                          case 'ringtone': {
                          if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} black rover`
                          let { ringtone } = require('./lib/scraper')
                          let anu = await ringtone(text)
                          let result = anu[Math.floor(Math.random() * anu.length)]
                          ElisaBotMd.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
                          }
                          /*break
                          case 'iqra': {
                          oh = `${Lang.EXAMPLE}\n : ${prefix + command} 3\n\Available IQRA : 1,2,3,4,5,6`
                          if (!text) throw oh
                          yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                          ElisaBotMd.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
                          }
                          break
                          case 'juzamma': {
                          if (args[0] === 'pdf') {
                          replay(mess.wait)
                          ElisaBotMd.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
                          } else if (args[0] === 'docx') {
                          replay(mess.wait)
                          ElisaBotMd.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
                          } else if (args[0] === 'pptx') {
                          replay(mess.wait)
                          ElisaBotMd.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
                          } else if (args[0] === 'xlsx') {
                          replay(mess.wait)
                          ElisaBotMd.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
                          } else {
                          reply(`What format do you want? ? Example : ${prefix + command} pdf
                  
                  Available formats : pdf, docx, pptx, xlsx`)
                          }
                          }
                          break
                          case 'hadith': case 'hadist': {
                          if (!args[0]) throw `Example:
                  ${prefix + command} bukhari 1
                  ${prefix + command} abu-daud 1
                  
                  Options available:
                  abu-daud
                  1 - 4590
                  ahmad
                  1 - 26363
                  bukhari
                  1 - 7008
                  darimi
                  1 - 3367
                  ibu-majah
                  1 - 4331
                  nasai
                  1 - 5662
                  malik
                  1 - 1594
                  muslim
                  1 - 5362`
                          if (!args[1]) throw `Which Hadith??\n\nExample:\n${prefix + command} muslim 1`
                          try {
                          let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
                          let { number, arab, id } = res.find(v => v.number == args[1])
                          reply(`No. ${number}
                  
                  ${arab}
                  
                  ${id}`)
                          } catch (e) {
                          reply(`Hadith not found !`)
                          }
                          }
                          break
                          case 'alquran': {
                          if (!args[0]) throw `${Lang.EXAMPLE}\n:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
                          if (!args[1]) throw `${Lang.EXAMPLE}\n:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
                          let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                          let txt = `*Arab* : ${res.result.data.text.arab}
                  *English* : ${res.result.data.translation.en}
                  *Indonesia* : ${res.result.data.translation.id}
                  
                  ( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                          reply(txt)
                          ElisaBotMd.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
                          }
                          break
                          case 'tafsirsurah': {
                          if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
                          if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
                          let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                          let txt = `「 *Tafsir Surah*  」
                  
                  *Short* : ${res.result.data.tafsir.id.short}
                  
                  *Long* : ${res.result.data.tafsir.id.long}
                  
                  ( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                          reply(txt)
                          }
                          break
                  case 'alkitab':  if(!text) throw `Masukan Search Yang Anda Cari`
                  epep = await.fetchJson(`https://melcanz.com/alkitabsearch?q=${text}&apikey=melcantik`)
                  break*/
                  
                             case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                             var MAX = ''
                              if (global.LANG == 'EN') MAX= '*👸💬 Reply to the audio you want to change with caption _${prefix + command}_*'
                              if (global.LANG == 'SI') MAX= '*👸💬 ඔබට වෙනස් කිරීමට අවශ්‍ය වෙයිස් එක රිප්ලයි ලබාදෙන්න !*'
                              
                                  try {
                                  let set
                                  if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                                  if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                                  if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                                  if (/earrape/.test(command)) set = '-af volume=12'
                                  if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                                  if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                                  if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                                  if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                                  if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                                  if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                                  if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                                  if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                                  if (/audio/.test(mime)) {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `🎙️`, key: m.key }})
                                  replay(mess.wait)
                                  let media = await ElisaBotMd.downloadAndSaveMediaMessage(quoted)
                                  let ran = getRandom('.mp3')
                                  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                                  fs.unlinkSync(media)
                                  if (err) return reply(err)
                                  let buff = fs.readFileSync(ran)
                                  ElisaBotMd.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                                  fs.unlinkSync(ran)
                                  })
                                  } else reply(MAX)
                                  } catch (e) {
                                  reply(e)
                                  }
                                  break
                              case 'setcmd': {
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
                              case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                ElisaBotMd.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`${Lang.EXAMPLE}\n : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return reply(`${Lang.EXAMPLE}\n : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                ElisaBotMd.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '*💃 DATA BASE MASSAGE LIST 💃*\n\n'
		for (let i of seplit) {
		    teks += `💫 *Name :* ${i.nama}\n💫 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break
                          case 'anonymous': {
                                  if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                                  this.anonymous = this.anonymous ? this.anonymous : {}
                                  let buttons = [{
                                                  urlButton: {
                                                      displayText: 'REPORT BUG',
                                                      url: 'https://wa.me/94715166712?text=hello+bro+i+found+a+bug+in+your+bot'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'START CHAT',
                                                      id: 'start'
                                                  }
                                              }]
                                  ElisaBotMd.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await ElisaBotMd.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, ElisaBotMd.user.name, m)
                              }
                              break
                  case 'sendkontak': case 'sendcontact': {
                                  if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                                  this.anonymous = this.anonymous ? this.anonymous : {}
                                  let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                                  if (!room) {
                                      let buttons = [
                                          { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                                      ]
                                      await ElisaBotMd.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                                      throw false
                                  }
                                  let profile = await ElisaBotMd.profilePictureUrl(room.b)
                                  let status = await ElisaBotMd.fetchStatus(room.b)
                                  let msg = await ElisaBotMd.sendImage(room.a, profile, `Name : ${await ElisaBotMd.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                                  ElisaBotMd.sendContact(room.a, [room.b.split("@")[0]], msg)
                              }
                              break
                              case 'keluar': case 'leaave': {
                                  if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                                  this.anonymous = this.anonymous ? this.anonymous : {}
                                  let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                                  if (!room) {
                                      let buttons = [
                                          { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                                      ]
                                      await ElisaBotMd.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                                      throw false
                                  }
                                  reply('Ok')
                                  let other = room.other(m.sender)
                                  if (other) await ElisaBotMd.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                                  delete this.anonymous[room.id]
                                  if (command === 'leave') break
                              }
                              case 'mulai': case 'staart': {
                                  if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                                  this.anonymous = this.anonymous ? this.anonymous : {}
                                  if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                                      let buttons = [
                                          { buttonId: 'stop', buttonText: { displayText: 'STOP' }, type: 1 }
                                      ]
                                      await ElisaBotMd.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`, ElisaBotMd.user.name, m)
                                      throw false
                                  }
                                  let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                                  if (room) {
                                      let buttons = [
                                          { buttonId: 'next', buttonText: { displayText: 'SKIP' }, type: 1 },
                                          { buttonId: 'stop', buttonText: { displayText: 'STOP' }, type: 1 }
                                      ]
                                      await ElisaBotMd.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, ElisaBotMd.user.name, m)
                                      room.b = m.sender
                                      room.state = 'CHATTING'
                                      await ElisaBotMd.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, ElisaBotMd.user.name, m)
                                  } else {
                                      let id = + new Date
                                      this.anonymous[id] = {
                                          id,
                                          a: m.sender,
                                          b: '',
                                          state: 'WAITING',
                                          check: function (who = '') {
                                              return [this.a, this.b].includes(who)
                                          },
                                          other: function (who = '') {
                                              return who === this.a ? this.b : who === this.b ? this.a : ''
                                          },
                                      }
                                      let buttons = [
                                          { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                                      ]
                                      await ElisaBotMd.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, ElisaBotMd.user.name, m)
                                  }
                                  break
                              }
                              case 'neext': case 'lanjut': {
                                  if (m.isGroup) return reply('This Feature Cannot Be Used In Group!')
                                  this.anonymous = this.anonymous ? this.anonymous : {}
                                  let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                                  if (!romeo) {
                                      let buttons = [
                                          { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                                      ]
                                      await ElisaBotMd.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                                      throw false
                                  }
                                  let other = romeo.other(m.sender)
                                  if (other) await ElisaBotMd.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                                  delete this.anonymous[romeo.id]
                                  let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                                  if (room) {
                                      let buttons = [
                                          { buttonId: 'next', buttonText: { displayText: 'SKIP' }, type: 1 },
                                          { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                                      ]
                                      await ElisaBotMd.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, ElisaBotMd.user.name, m)
                                      room.b = m.sender
                                      room.state = 'CHATTING'
                                      await ElisaBotMd.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, ElisaBotMd.user.name, m)
                                  } else {
                                      let id = + new Date
                                      this.anonymous[id] = {
                                          id,
                                          a: m.sender,
                                          b: '',
                                          state: 'WAITING',
                                          check: function (who = '') {
                                              return [this.a, this.b].includes(who)
                                          },
                                          other: function (who = '') {
                                              return who === this.a ? this.b : who === this.b ? this.a : ''
                                          },
                                      }
                                      let buttons = [
                                          { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                                      ]
                                      await ElisaBotMd.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, ElisaBotMd.user.name, m)
                                  }
                                  break
                              }
                              case 'public': {
                                  if (!isCreator) throw mess.owner
                                  ElisaBotMd.public = true
                                  reply('𝗯𝗼𝘁 𝗻𝗼𝘄 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝘀 𝗽𝘂𝗯𝗹𝗶𝗰')
                              }
                              break
                              case 'self': {
                                  if (!isCreator) throw mess.owner
                                  ElisaBotMd.public = false
                                  reply('𝗯𝗼𝘁 𝗻𝗼𝘄 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝘀 𝗽𝗿𝗶𝘃𝗮𝘁𝗲')
                              }
                              break
                             
                              case 'owner': case 'creator': {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `👤`, key: m.key }})
                              ElisaBotMd.sendContact(m.chat, global.owner, m)
                              }
                              break
                                      case 'bug': case 'reportowner': {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `⛔`, key: m.key }})
                                          if(!text) throw `Enter The Bug Example\n\n${command} < YOUR REPORT MASSAGE > `
                                          await ElisaBotMd.sendMessage(`94715166712@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
                  Report Message: ${text}` })
                  const repo = await ElisaBotMd.sendMessage(`*『 𝙱𝚄𝙶 𝚁𝙴𝙿𝙾𝚁𝚃 』* ${Lang.OWNER_REPORT}`)
                  await ElisaBotMd.sendMessage(from, { react: { text: `✅`, key: repo.key }})
                                      }
                                      break
                                      case 'sendbug' : {
                                      num = text.split('&')[0]
                                      massage = text.split('&')[1]
                                      await ElisaBotMd.sendText(`${num}@s.whatsapp.net`, massage)
                                      }
                                      break
                  /*case 'speedtest': case 'testspeed': {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `🔩`, key: m.key }})
                              m_reply('Testing Elisa bot Speed...')
                              let cp = require('child_process')
                              let { promisify } = require('util')
                              let exec = promisify(cp.exec).bind(cp)
                            let o
                            try {
                            o = await exec('python speed.py')
                            } catch (e) {
                            o = e
                           } finally {
                          let { stdout, stderr } = o
                          if (stdout.trim()) m_reply(stdout)
                          if (stderr.trim()) m_reply(stderr)
                              }
                              }
                              break*/
                              case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':  
                          await ElisaBotMd.sendMessage(from, { react: { text: `🧝‍♀️`, key: m.key }})
                                      reply3(mess.wait)
                                      axios.get(`https://api.waifu.pics/sfw/${command}`)
                                      .then(({data}) => {
                                      ElisaBotMd.sendVideoAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
                                      
                                      })
                                      break
                                      case 'tr' : 
case 'trt' : {
const { translate } = require('@vitalets/google-translate-api');
const defaultLang = 'si'
const tld = 'cn'
    let err = `

≡ *Lista de idiomas admitidos:* 

https://cloud.google.com/translate/docs/languages
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

   
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       m_reply(result.text)

//reply(tr_text)
}
break
                              case 'waifu': case 'loli':
                                      reply(mess.wait)
                                      axios.get(`https://api.waifu.pics/sfw/waifu`)
                                      .then(({data}) => {
                                      ElisaBotMd.sendImage(m.chat, data.url, mess.success, m)
                                      })
                                      break
case 'menu': case 'panel':{
  const anu = await fetchJson ('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')
  const NIMAMSG = anu.MENU_NOTE
  const start = new Date().getTime()
  await ElisaBotMd.sendMessage(from, { react: { text: `📃`, key: m.key }})
  const end = new Date().getTime()
  const ping = end - start
  const menuimg = ['https://telegra.ph/file/b91dbaab278c1fe440de6.jpg','https://telegra.ph/file/a7954b940ac9acddf285a.jpg','https://telegra.ph/file/6576c2b80ddd95740f302.jpg','https://telegra.ph/file/48e575fbd6978f77ac796.jpg','https://telegra.ph/file/57221b23abeb4e16a9ffd.jpg','https://telegra.ph/file/ddae7eba259b9686bb761.jpg']
  const result = menuimg[Math.floor(Math.random() * menuimg.length)]   
  const url = `https://api.tiodevhost.my.id/api/maker/resize?url=${result}&width=300&height=250`
  ram0 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
  
           const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
           var utch = new Date().toLocaleDateString( get_localized_date)
           var time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
           const biography = '*📅 ᴛᴏᴅᴀʏ ɪs :* ' + utch + '\n*⌚ ɴᴏᴡ ᴛɪᴍᴇ :* ' + time

                                 message = await prepareWAMessageMedia({ image : { url: global.alivelogo} }, { upload:   ElisaBotMd.waUploadToServer })

       const MENUMSG = `*WELCOME ${m.pushName}*

*👸 ᴜᴘ ᴛɪᴍᴇ :* ${runtime(process.uptime())}
${biography}

➮ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 - ${global.botnma}
➮ 𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 - ${global.ownernma}
➮ 𝙽𝚄𝙼𝙱𝙴𝚁 - ${global.owner}
➮ 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚂𝙿𝙴𝙴𝙳 - ${(end - start)} Ms
➮ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - ${ram0}

${NIMAMSG}

​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╭──❰ *𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* ❱
│ ${prefix}tiktok
│ ${prefix}tiktok2
│ ${prefix}video
│ ${prefix}video2
│ ${prefix}song
│ ${prefix}song2
│ ${prefix}song3
│ ${prefix}fb
│ ${prefix}fb2
│ ${prefix}fb3
│ ${prefix}fbook
│ ${prefix}ig
│ ${prefix}ig2
│ ${prefix}twitter
│ ${prefix}ytmp3
│ ${prefix}ytmp4
│ ${prefix}ehi
│ ${prefix}apk
│ ${prefix}modapk
│ ${prefix}downxvid
╰────────────⦁

╭──❰ *𝚂𝙴𝙰𝚁𝙲𝙷 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* ❱
│ ${prefix}play
│ ${prefix}yts
│ ${prefix}img
│ ${prefix}pinterest
│ ${prefix}wikimedia
│ ${prefix}ytsearch
│ ${prefix}apk
│ ${prefix}modapk
╰────────────⦁

╭──❰ *𝚁𝙰𝙽𝙳𝙾𝙼 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* ❱
│ ${prefix}pic
│ ${prefix}coffee
│ ${prefix}couplepp
╰─────────────⦁

╭──❰ *𝙵𝚄𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* ❱
│ ${prefix}couple
│ ${prefix}mysoulmate
│ ${prefix}math
╰────────────⦁

╭──❰ *𝙰𝚂𝚄𝙿𝙰𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* ❱
│ ${prefix}cecan
│ ${prefix}china
│ ${prefix}cogan
│ ${prefix}indonesia
│ ${prefix}japan
│ ${prefix}korea
│ ${prefix}malaysia
│ ${prefix}thailand
│ ${prefix}vietnam 
╰────────────⦁

╭──❰ *𝚅𝙾𝙸𝙲𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* ❱
│ ${prefix}bass
│ ${prefix}blown
│ ${prefix}deep
│ ${prefix}earrape
│ ${prefix}fast
│ ${prefix}fat
│ ${prefix}nightcore
│ ${prefix}reverse
│ ${prefix}robot
│ ${prefix}slow
│ ${prefix}squirrel
╰────────────⦁

╭──❰ *𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* ❱
│ ${prefix}photo
│ ${prefix}ss
│ ${prefix}removebg
│ ${prefix}sticker
│ ${prefix}emojimix
│ ${prefix}tovideo
│ ${prefix}togif
│ ${prefix}attp
│ ${prefix}attp2
│ ${prefix}attp3
│ ${prefix}ttp
│ ${prefix}tts
│ ${prefix}unvoice
│ ${prefix}fancy
╰─────────────⦁
  
╭──❰ *𝚁𝙰𝙽𝙳𝙾𝙼 𝙰𝙽𝙸𝙼𝙴* ❱
│ ${prefix}akira  
│ ${prefix}ana
│ ${prefix}asuna 
│ ${prefix}ayuzawa 
│ ${prefix}boruto
│ ${prefix}elaina 
│ ${prefix}emilia 
│ ${prefix}erza  
│ ${prefix}gremory  
│ ${prefix}inori  
│ ${prefix}kaga  
│ ${prefix}kaori  
│ ${prefix}kurumi  
│ ${prefix}loli  
│ ${prefix}madara  
│ ${prefix}mikasa  
│ ${prefix}miku  
│ ${prefix}naruto  
│ ${prefix}nezuko  
│ ${prefix}rize  
│ ${prefix}sakura  
│ ${prefix}sasuke  
│ ${prefix}shina  
│ ${prefix}shinka  
│ ${prefix}shota  
│ ${prefix}waifu  
│ ${prefix}yuki  
│ ${prefix}bully
│ ${prefix}cuddle
│ ${prefix}cry
│ ${prefix}hug
│ ${prefix}awoo
│ ${prefix}kiss
│ ${prefix}lick
│ ${prefix}pat
│ ${prefix}smug
│ ${prefix}bonk
│ ${prefix}yeet
│ ${prefix}blush
│ ${prefix}smile
│ ${prefix}wave
│ ${prefix}highfive
│ ${prefix}handhold
│ ${prefix}nom
│ ${prefix}bite
│ ${prefix}glomp
│ ${prefix}slap
│ ${prefix}kill
│ ${prefix}happy
│ ${prefix}wink
│ ${prefix}poke
│ ${prefix}dance
│ ${prefix}cringe
╰─────────────⦁

╭──❰ *𝙶𝚁𝙾𝚄𝙿 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* ❱
│ ${prefix}grouplink
│ ${prefix}ephemeral
│ ${prefix}setgrouppp
│ ${prefix}setname
│ ${prefix}group
│ ${prefix}editinfo
│ ${prefix}grupinfo
│ ${prefix}add
│ ${prefix}kick
│ ${prefix}promote
│ ${prefix}demote
│ ${prefix}delm
╰────────────⦁

╭──❰ *𝙼𝙸𝚂𝙲 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* ❱
│ ${prefix}speedtest
│ ${prefix}ping
│ ${prefix}ping2
│ ${prefix}owner
│ ${prefix}donate
│ ${prefix}menu
│ ${prefix}delete
│ ${prefix}chatinfo
│ ${prefix}quoted
│ ${prefix}listpc
│ ${prefix}listgc
│ ${prefix}listonline
│ ${prefix}report
╰─────────────⦁

╭──❰ *𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* ❱
│ ${prefix}setcmd
│ ${prefix}listcmd
│ ${prefix}delcmd
│ ${prefix}lockcmd
│ ${prefix}addmsg
│ ${prefix}listmsg
│ ${prefix}getmsg
│ ${prefix}delmsg
╰─────────────⦁ 

╭────❰ *𝙻𝙾𝙶𝙾 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* ❱   
│ ${prefix}logo
│ ${prefix}logo2
│ ${prefix}logo3
│ ${prefix}logo4
╰──────────────⦁

╭───❰ *𝙾𝚆𝙽𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂* ❱
│ ${prefix}chat
│ ${prefix}join
│ ${prefix}leave
│ ${prefix}setbotpp
│ ${prefix}block
│ ${prefix}unblock
│ ${prefix}bcgroup
│ ${prefix}bcall
│ ${prefix}setalive
│ ${prefix}setwelcome
│ ${prefix}setgoodbye
│ ${prefix}setmessage
│ ${prefix}deletemessage
│ ${prefix}delete
╰────────────⦁

╭───❮ *𝙾𝚃𝙷𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝚂* ❯
│ ${prefix}tr
│ ${prefix}alive
│ ${prefix}bug
│ ${prefix}xnxxsh
│ ${prefix}xvideo
│ ${prefix}about
│ ${prefix}news
│ ${prefix}readmore
│ ${prefix}areadmore
│ ${prefix}cyberspace
│ ${prefix}mountain
│ ${prefix}programming
│ ${prefix}technology
╰─────────────⦁`

                                  /*template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: MENUMSG  ,
                                              hydratedFooterText: global.botnma ,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'ɢɪᴛʜᴜʙ',
                                                      url: `https://github.com/DarkMakerofc/Queen-Elisa-Md-V2`
                                                  }
                                              },{
                                                  urlButton: {
                                                      displayText: 'ʏᴏᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ',
                                                      url: `https://youtube.com/c/MRNIMAOFC`
                                                  }
                                              },{
                                                  quickReplyButton: {
                                                      displayText: 'ʟɪsᴛ ᴍᴇɴᴜ',
                                                      id: `list`
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: 'ᴏᴡɴᴇʀ',
                                                      id: `owner`
                                                      }
                                                  }, {
                                                  quickReplyButton: {
                                                      displayText: 'sʏsᴛᴇᴍ ᴀʙᴏᴜᴛ',
                                                      id: `ping`
                                                      }
                                                  
                                              }]
{buttonId: `command`, buttonText: {displayText: '☰ ʟɪsᴛ ᴍᴇɴᴜ ☰'}, type: 1},
{buttonId: `owner`, buttonText: {displayText: '🧑‍💻 ᴏᴡɴᴇʀ 🧑‍💻️'}, type: 1},
{buttonId: `elisaallmenu`, buttonText: {displayText: '⚙ ᴀʟʟ ᴍᴇɴᴜ ️⚙️'}, type: 1}
            
  {quickReplyButton: {displayText: 'ʟɪsᴛ ᴍᴇɴᴜ', id: 'list'}},
    {quickReplyButton: {displayText: 'ᴏᴡɴᴇʀ', id: 'owner'}},
    {quickReplyButton: {displayText: 'sᴛᴇᴛᴜs', id: 'stetus'}},
                                        }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                  ElisaBotMd.send5ButImg(m.chat, template.message, { messageId: template.key.id })*/
const templateButtons = [
  {buttonId: `list`, buttonText: {displayText: 'ʟɪsᴛ ᴍᴇɴᴜ'}, type: 1},
  {buttonId: `owner`, buttonText: {displayText: 'ᴏᴡɴᴇʀ‍️'}, type: 1},
  {buttonId: `status`, buttonText: {displayText: 'sᴛᴀᴛᴜs'}, type: 1},

    ]


let buttonMessage = {
                    image: { url: result },
                    caption: MENUMSG ,
                    footer: global.botnma,
                    buttons: templateButtons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: fakestatus })
         
     
     //await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: fakestatus })   

                              }
                              break

case 'alive' : {
ElisaBotMd.readMessages([m.key])
await ElisaBotMd.sendPresenceUpdate('recording', m.chat) 
await ElisaBotMd.sendMessage(m.chat, { audio: {url :'https://github.com/DarkMakerofc/UPLOADS/raw/main/VOICE/alive.mp3'}, mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
           
if (global.db.data.settings[botNumber].alive){
await ElisaBotMd.sendMessage(from, { react: { text: `👋`, key: m.key }})
                 
                                 let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
                    {buttonId: `status`, buttonText: {displayText: '𝚂𝚃𝙰𝚃𝚄𝚂'}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: '𝙾𝚆𝙽𝙴𝚁'}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: global.db.data.settings[botNumber].LOGO },
                    caption: global.db.data.settings[botNumber].MASSAGE,
                    footer: global.botnma,
                    buttons: buttons,
                    headerType: 4
                }
              await ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
      
//reply(global.db.data.settings[botNumber].MASSAGE + '\n' + global.db.data.settings[botNumber].LOGO)
} else {
//reply('Default Alive')
const ita = '```'
              await ElisaBotMd.sendMessage(from, { react: { text: `👋`, key: m.key }})
              
                 let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
                    {buttonId: `status`, buttonText: {displayText: '𝚂𝚃𝙰𝚃𝚄𝚂'}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: '𝙾𝚆𝙽𝙴𝚁'}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: global.alivelogo },
                    caption:`${ita}◈ Queen Elisa Bot is Online ◈${ita}

*( ᴅᴇᴘʟᴏʏ ) ▽* 
 _http://github.com/darkmakerofc_
*( ᴏᴡɴᴇʀ ) ▽* 
_${global.owner}_
*( ᴘᴜʙʟɪᴄ ɢʀᴏᴜᴘ ) ▽*
_https://chat.whatsapp.com/BbIpvkRD4qP6xKckb8cpT0_
*( ᴠᴇʀsɪᴏɴ ) ▽*
 _${BOT_VERSION}_
*( ʏᴏᴜᴛᴜʙᴇ ) ▽*
 _https://youtube.com/MRNIMAOFC_

*[ ⏱️ ʀᴜɴ ᴛɪᴍᴇ ⏱️] ▽*
${runtime(process.uptime())}

${ita}💗 THANKS FOR USING QUEEN ELISA 💗${ita}
`,
                    footer: global.botnma,
                    buttons: buttons,
                    headerType: 4
                }
              await ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
         

}
}
break
case 'deletemessage' : {
if(!isCreator) throw mess.admin
if (args[0] == 'kick' ){
delete global.db.data.settings[botNumber].kickmessage 
reply(mess.success)
} else if (args[0] == 'add' ){
delete global.db.data.settings[botNumber].addmessage 
reply(mess.success)
} else if (args[0] == 'promote' ){
delete global.db.data.settings[botNumber].promotemessage 
reply(mess.success)
} else if (args[0] == 'demote' ){
delete global.db.data.settings[botNumber].demotemessage 
reply(mess.success)
} else if (args[0] == 'block' ){
delete global.db.data.settings[botNumber].blockmessage 
reply(mess.success)
} else if (args[0] == 'unblock' ){
delete global.db.data.settings[botNumber].unblockmessage 
reply(mess.success)
} else {
const desmsg = `*Please Select What Do you*
*Delete Message*	
     	`    
     
     let sections = [{

            "rows": [{
			"title": "Kick Message",
				"rowId": `deletemessage kick`
			},
	  		{
			"title": "Add Message",
			"rowId": `deletemessage add`
			},
			{
			"title": "Promote Message",
			"rowId": `deletemessage promote`
			},
			{
			"title": "Demote Message",
			"rowId": `deletemessage demote`
			},
			{
			"title": "Block Message",
			"rowId": `deletemessage block`
			},
			{
			"title": "Unblock Message",
			"rowId": `deletemessage unblock`
			}
			
          ]
        }
     ]
     await ElisaBotMd.sendListMsg(m.chat, `${desmsg}`, `${global.botnma}`, `*BOT SETTINGS*`, `SELECT`, sections, m)
 
}
}
break
case 'setmessage' : {

if(!isCreator) throw mess.owner
if(!quoted) throw '*ℹ️ Please reply message*'
//if(!args[0]) throw 
if ( args[0] == 'kick' ){
global.db.data.settings[botNumber].kickmessage = m.quoted.text
reply(mess.success)
} else if ( args[0] == 'add' ){
global.db.data.settings[botNumber].addmessage = m.quoted.text
reply(mess.success)
} else if ( args[0] == 'promote' ){
global.db.data.settings[botNumber].promotemessage = m.quoted.text
reply(mess.success)
} else if ( args[0] == 'demote' ){
global.db.data.settings[botNumber].demotemessage = m.quoted.text
reply(mess.success)
} else if ( args[0] == 'block' ){
global.db.data.settings[botNumber].blockmessage = m.quoted.text
reply(mess.success)
} else if ( args[0] == 'unblock' ){
global.db.data.settings[botNumber].unblockmessage = m.quoted.text
reply(mess.success)
} else if ( args[0] == 'leave' ){
global.db.data.settings[botNumber].leavemessage = m.quoted.text
} else {
await ElisaBotMd.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/b1343c61f7fcb88abfcee.jpg' }, caption: `*❗ Please Give me message*
_kick , add , promote , demote , block , unblock , leave_
*ℹ️ Example : _.setmessage kick_*` }, { quoted: m })
//m_reply(`<`)
}
}
break
case 'setalive' : {
if(!isCreator) throw mess.admin
if (!quoted) throw '```Please reply Photo Massage```'
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
if (!/image/.test(mime)) throw '```Please reply Photo Massage```'
const media = await ElisaBotMd.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
await fs.unlinkSync(media)
global.db.data.settings[botNumber] = {
MASSAGE : m.quoted.text ,
LOGO : anu
}
global.db.data.settings[botNumber].alive = true
reply(mess.success)
}
break
case 'deletealive' : {
if(!isCreator) throw mess.admin
global.db.data.settings[botNumber].alive = false
reply(mess.success)
}
break
case 'delete' : {
if(!isCreator) return reply(mess.owner)
if(args[0] == 'alive' ){
delete global.db.data.settings[botNumber].alive 
reply('*✅ Done Using Default Alive Massage*')
} else if(args[0] == 'welcome' ){
if (!db.data.chats[m.chat].welcome ) return reply(`*ℹ️ Welcome is Not Activated.*`)
delete global.db.data.settings[botNumber].welcome_message
delete global.db.data.settings[botNumber].welcome_image
reply('*✅ Done Using Default Welcome Massage*')
} else if(args[0] == 'goodbye' ){
//if (!db.data.chats[m.chat].welcome ) return reply(`*ℹ️ GoodBye Not Activated.*`)
delete global.db.data.settings[botNumber].goodbye_message 
delete global.db.data.settings[botNumber].goodbye_image 
reply('*✅ Done Using Default Good Bye Massage*')

} else {
const desmsg = ` *Please Select What Do you*
*Want Delete*	
     	`    
     
     let sections = [{

            "rows": [{
			"title": "Alive Message",
				"rowId": `delete alive`
			},
	  		{
			"title": "Welcome Message",
			"rowId": `delete welcome`
			},
			{
			"title": "Good Bye Message",
			"rowId": `delete goodbye`
			}
			
          ]
        }
     ]
     await ElisaBotMd.sendListMsg(m.chat, `${desmsg}`, `${global.botnma}`, `*BOT SETTINGS*`, `SELECT`, sections, m)
 
}
}
break
case 'setwelcome' : {
if(!isCreator) throw mess.admin
if (!quoted) throw '```Please reply Photo Massage```'
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
if (!/image/.test(mime)) throw '```Please reply Photo Massage```'
const media = await ElisaBotMd.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
await fs.unlinkSync(media)
global.db.data.chats[m.chat] = {
welcome_message : m.quoted.text ,
welcome_image : anu,
goodbye_message : global.db.data.chats[m.chat].goodbye_message,
goodbye_image : global.db.data.chats[m.chat].goodbye_image
}
//global.db.data.chats
reply(mess.success)
}
break 
case 'setgoodbye' : {
if(!isCreator) throw mess.admin
if (!quoted) throw '```Please reply Photo Massage```'
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
if (!/image/.test(mime)) throw '```Please reply Photo Massage```'
const media = await ElisaBotMd.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
await fs.unlinkSync(media)
global.db.data.chats[m.chat] = {
goodbye_message  : m.quoted.text ,
goodbye_image : anu,
welcome_message : global.db.data.chats[m.chat].welcome_message,
welcome_image : global.db.data.chats[m.chat].welcome_image
}
reply(mess.success)
}
break
case 'welcome' : {
var msg = ''
if(global.LANG == 'EN') msg = `*Hello ${m.pushName}* 
You can turn the welcome message on/off by pressing the button below
`
if(global.LANG == 'SI') msg = `*Hello ${m.pushName}*
ඔබට මෙමගින් welcome message එක on / off කිරීම සිදු කළ හැක ඒ සදහ පහත බටන් බාව්ත කරන්න
`
if (!m.isGroup) return replay(`${mess.group}`)
//if (!isBotAdmins) return replay(`${mess.botAdmin}`)
//if (!isAdmins) return replay(`${mess.admin}`)
if (args[0] === "on") {
if (db.data.chats[m.chat].welcome ) return reply(`*ℹ️ Previously Activated.*`)
db.data.chats[m.chat] = {
welcome : true ,
welcome_message : '' ,
welcome_image : '',
goodbye_message : '',
goodbye_image : ''
}
reply(`*Welcome message is on*`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].welcome ) return reply(`*ℹ️ Not Activated.*`)
db.data.chats[m.chat].welcome = false
reply(`*Welcome Message is off*`)
      } else {
let buttons = [
      { buttonId: 'welcome on', buttonText: { displayText: 'On' }, type: 1 },
      { buttonId: 'welcome off', buttonText: { displayText: 'Off' }, type: 1 }
        ]
   ElisaBotMd.sendButtonText(m.chat, buttons, msg , ElisaBotMd.user.name, m)
}
                       
}
break
              /*   case 'alive': case 'bot':{  
                 // Push Message To Console && Auto Read
                         ElisaBotMd.readMessages([m.key])
            
                // await ElisaBotMd.sendReadReceipt(from, m.sender, [m.key.id])
                          ElisaBotMd.readMessages([m.key])
                          await ElisaBotMd.sendPresenceUpdate('recording', m.chat) 
                          await ElisaBotMd.sendMessage(m.chat, { audio: {url :'https://github.com/DarkMakerofc/UPLOADS/raw/main/VOICE/alive.mp3'}, mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
              if (global.alive === 'default') {
              
 
              
                             
  }
                              break*/
                  /* case 'command': case 'list' : case 'cmmd' : {  
                          await ElisaBotMd.sendMessage(from, { react: { text: `🗒️`, key: m.key }})
                   var time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
                   ram0 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
                  let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                  listMessage :{
                                      description: `
                                      
👋 𝗛𝗶  ${pushname}

╭──────[ 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝙼𝙳 ]
│
│ *𝙱𝙾𝚃 𝙽𝙰𝙼𝙴* : ${global.botnma}
│
│ *𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴* : ${global.ownernma}
│
│ *𝚁𝚄𝙽 𝚃𝙸𝙼𝙴* : ${runtime(process.uptime())}
│
│ *𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴* : ${ram0}
│
│ *𝙽𝙾𝚆 𝙰𝚃* : ${time}
│
╰─────────────────────⦁

`,

                                      buttonText: "𝗠𝗘𝗡𝗨",
                                      footerText: global.botnma,
                                      listType: "SINGLE_SELECT",
                                      sections: [{
                                                  "title": "ʙᴏᴛ ʟɪsᴛ ᴍᴇɴᴜ ᴄʟɪᴄᴋ ᴀɴᴅ sᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴏᴡɴ",
                                                  "rows": [
                                                      {
                                                          "title": "❰❰⦁ 𝗚𝗥𝗢𝗨𝗣 𝗖𝗠𝗗 ⦁❱❱",
                                                          "description": Lang.GROUP_CMD_DESC ,
                                                          "rowId": `${prefix}grpmenu`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `${global.botnma} *ᗰᗴᑎᑌ* `,
                                                  "rows": [
                                                      {
                                                          "title": "❰❰⦁ 𝗠𝗘𝗡𝗨 𝗖𝗠𝗗 ⦁❱❱",
                                                          "description": Lang.ALL_CMD ,
                                                          "rowId": `${prefix}elisaallmenu`
                                                      },
                                                      {
                                                          "title": "❰❰⦁ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗠𝗗 ⦁❱❱",
                                                          "description": Lang.DOWNLOAD_CMD ,
                                                          "rowId": `${prefix}elisadownloadmenu`
                                                      },
                                                      {
                                                          "title": "❰❰⦁ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗠𝗗 ⦁❱❱",
                                                          "description": Lang.SEARCH_CMD ,
                                                          "rowId": `${prefix}elisasearchmenu`
                                                      },
                                                          {
                                                              "title": "❰❰⦁ 𝗙𝗨𝗡 𝗖𝗠𝗗 ⦁❱❱",
                                                          "description": Lang.FUN_CMD ,
                                                          "rowId": `${prefix}funmenu`
                                                          },
                                                          {
                                                              "title": "❰❰⦁ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗖𝗠𝗗 ⦁❱❱",
                                                          "description": Lang.CONVERT_CMD ,
                                                          "rowId": `${prefix}elisaconvertmenu`
                                                          },
                                                          {
                                                              "title": "❰❰⦁ 𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗖𝗠𝗗 ⦁❱❱",
                                                          "description": Lang.RANDOM_ANIME ,
                                                          "rowId": `${prefix}elisaranimemenu`
                                                          },
                                                          {
                                                          "title": "❰❰⦁ 𝗠𝗜𝗦𝗖 𝗖𝗠𝗗 ⦁❱❱",
                                                          "description": Lang.MISC_CMD ,
                                                          "rowId": `${prefix}elisanocategorymenu`
                                                          },
                                                          {
                                                              "title": "❰❰⦁ 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗖𝗠𝗗 ⦁❱❱",
                                                          "description": Lang.DATABASE_CMD ,
                                                          "rowId": `${prefix}elisadatabasemenu`
                                                          },
                                                          {
                                                              "title": "❰❰⦁ 𝙇𝙊𝙂𝙊 𝙈𝙀𝙉𝙐 ⦁❱❱",
                                                          "description": Lang.LOGO_CMD ,
                                                          "rowId": `${prefix}logomenu`
                                                          },
                                                          {
                                                              "title": "❰❰⦁ 𝗩𝗢𝗜𝗖𝗘 𝗖𝗠𝗗 ⦁❱❱",
                                                          "description": Lang.VOICE_CMD ,
                                                          "rowId": `${prefix}elisavoicemenu`
                                                          }
                                                  ]
                                              },
                                              {
                                                  "title": "❰❰⦁ 𝗖𝗛𝗔𝗧 𝗖𝗠𝗗 ⦁❱❱",
                                                  "rows": [
                                                      {
                                                          "title": "❰❰⦁ 𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗖𝗠𝗗 ⦁❱❱",
                                                          "description": Lang.ABOUT_CMD ,
                                                          "rowId": `${prefix}elisaanonymouschatmenu`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": "❰❰⦁ 𝗢𝗪𝗡𝗘𝗥 ⦁❱❱",
                                                  "rows": [
                                                      {
                                                          "title": "❰❰⦁ 𝗢𝗪𝗡𝗘𝗥 𝗖𝗠𝗗 ⦁❱❱",
                                                          "description": Lang.OWNER_CMD ,
                                                          "rowId": `${prefix}ownermenu`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": "❰❰⦁ 𝗖𝗥𝗘𝗗𝗜𝗧𝗦 𝗕𝗢𝗧𝗦 ⦁❱❱",
                                                  "rows": [
                                                      {
                                                          "title": "❰❰⦁ 𝘼𝘽𝙊𝙐𝙏 ⦁❱❱",
                                                          "description": Lang.ABOUT_CMD ,
                                                          "rowId": `${prefix}about`
                                                      }
                                                  ]
                                              }
                                          ],
                            listType: 1
                                  }
                              }), {})
                              ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                              break*/
case 'command': case 'list' : case 'cmd' : { 
const sendListMsg = require('@adiwajshing/baileys')
 await ElisaBotMd.sendMessage(from, { react: { text: `🗒️`, key: m.key }})
                  const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
                  var date = new Date().toLocaleDateString( get_localized_date)
                  var time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
                  ram0 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
                  
 
desmsg = `╭╌┄┄『 *USER DETAILS* 』
┊ ▢ 𝙽𝚄𝙼𝙱𝙴𝚁 :  ${m.sender.split('@')[0]}
┊ ▢ 𝙽𝙰𝙼𝙴 :  ${m.pushName}
╰ ┄┬┄┄┄◯
╭┄ ┴┄『 *BOT DETAILS* 』
┊ ▢  𝙽𝙰𝙼𝙴 : ${global.botnma}
┊ ▢  𝙽𝚄𝙼𝙱𝙴𝚁 : ${botNumber.split('@')[0]}
┊ ▢  𝙷𝙾𝚂𝚃 𝙾𝙽 : heroku 
┊ ▢  𝚆𝙴𝙱 : opera
╰┄┬┄╌╌╌┄◯
╭┄┴┄┄『 *ABOUT SYSTEM* 』
┊ ▢  𝙿𝚁𝙴𝙵𝙸𝚇 : ${prefix}
┊ ▢  𝚃𝙸𝙼𝙴 : ${time}
┊ ▢  𝙳𝙰𝚃𝙴 : ${date}
┊ ▢  𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 : ${ram0}
╰┄┄┄┄┄┄┄┄┄◯`
    
            
          let sections = [{

         "title": "ʙᴏᴛ ʟɪsᴛ ᴍᴇɴᴜ ᴄʟɪᴄᴋ ᴀɴᴅ sᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴏᴡɴ",
                                                  "rows": [
                                                      {
                                                          "title": "▷ GROUP MENU ◁",
                                                          "description": Lang.GROUP_CMD_DESC ,
                                                          "rowId": `${prefix}grpmenu`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `${global.botnma} *ᗰᗴᑎᑌ* `,
                                                  "rows": [
                                                      {
                                                          "title": "▷ DOWNLOAD MENU ◁",
                                                          "description": Lang.DOWNLOAD_CMD ,
                                                          "rowId": `${prefix}elisadownloadmenu`
                                                      },
                                                      {
                                                          "title": "▷ SEARCH MENU ◁",
                                                          "description": Lang.SEARCH_CMD ,
                                                          "rowId": `${prefix}elisasearchmenu`
                                                      },
                                                          {
                                                              "title": "▷ FUN MENU ◁",
                                                          "description": Lang.FUN_CMD ,
                                                          "rowId": `${prefix}funmenu`
                                                          },
                                                          {
                                                              "title": "▷ CONVERT MENU ◁",
                                                          "description": Lang.CONVERT_CMD ,
                                                          "rowId": `${prefix}elisaconvertmenu`
                                                          },
                                                          {
                                                              "title": "▷ RANDOM ANIME MENU ◁",
                                                          "description": Lang.RANDOM_ANIME ,
                                                          "rowId": `${prefix}elisaranimemenu`
                                                          },
                                                          {
                                                          "title": "▷ MISC MENU ◁",
                                                          "description": Lang.MISC_CMD ,
                                                          "rowId": `${prefix}elisanocategorymenu`
                                                          },
                                                          {
                                                              "title": "▷ TEXT TO LOGO ◁",
                                                          "description": Lang.LOGO_CMD ,
                                                          "rowId": `${prefix}textlogo`
                                                          },
                                                          {
                                                              "title": "▷ LOGO PACK MENU ◁",
                                                          "description": Lang.LOGO_CMD ,
                                                          "rowId": `${prefix}logomenu`
                                                          },
                                                          {
                                                              "title": "▷ VOICE MENU ◁",
                                                          "description": Lang.VOICE_CMD ,
                                                          "rowId": `${prefix}elisavoicemenu`
                                                          }
                                                  ]
                                              },
                                              {
                                                  "title": "▷ OWNER ◁",
                                                  "rows": [
                                                      {
                                                          "title": "▷ OWNER MENU◁",
                                                          "description": Lang.OWNER_CMD ,
                                                          "rowId": `${prefix}ownermenu`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": "▷ CREDITS BOT ◁",
                                                  "rows": [
                                                      {
                                                          "title": "▷ ABOUT ◁",
                                                          "description": Lang.ABOUT_CMD ,
                                                          "rowId": `${prefix}about`
                                                      },
                                                      {
                                                          "title": "▷ HELPERS ◁",
                                                          "description": Lang.ABOUT_CMD ,
                                                          "rowId": `${prefix}helpers`
                                                      }
                                                    ]
							}
						]
						await ElisaBotMd.sendListMsg(m.chat, `${desmsg}`, `${global.botnma}`, `    `, `ALL MENU`, sections, m)
                }
            
            break
                  case 'grpmenu': {  
  const start = new Date().getTime()
  await ElisaBotMd.sendMessage(from, { react: { text: `♥️`, key: m.key }})
  const end = new Date().getTime()
  const ping = (end - start) + ' *_ᴍs_*' 
  const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]

                          await ElisaBotMd.sendMessage(from, { react: { text: `📜`, key: m.key }})

var GRPDES = ''
if (global.LANG == 'EN') GRPDES = '```Get Group link```'
if (global.LANG == 'SI') GRPDES = '```ඔබ සිටින සමූහයේ ලින්කුව ගැනීමට```'
var GRPPP = ''
if (global.LANG == 'EN') GRPPP = '```Change Group Profile photo [ reply photo ]```'
if (global.LANG == 'SI') GRPPP = '```සමූහයේ ප්‍රොෆයිල් චායාරූපය වෙනස් කරයි [ ජායාරූපයකට රිප්ලයි ලබාදෙන්න ]```'
var SETNAME = ''
if (global.LANG == 'EN') SETNAME = '```Change Group Name```'
if (global.LANG == 'SI') SETNAME = '```සමූහයේ නම වෙනස් කරයි```'
var GROUDES = ''
if (global.LANG == 'EN') GROUDES = '```Change send massage type (only admin/allparticipate)```'
if (global.LANG == 'SI') GROUDES = '```සමූහයේ මැස්ස්සේජ් යවන ආකාරය වෙනස් කරයි ( ඇඩ්මින්ලට පමණක් / සියලු දෙනාට )```'
var EDITINFO = ''
if (global.LANG == 'EN') EDITINFO = '```Change Group Edit info```'
if (global.LANG == 'SI') EDITINFO = '```සමූහයේ එඩිට් ඉන්ෆො වෙනස් කරයි```'
var GRPINFO = ''
if (global.LANG == 'EN') GRPINFO ='```Send Group details```'
if (global.LANG == 'SI') GRPINFO = '```සමූහයේ තොරතුරු ලබාගැනීමට```'
var ADDDES =''
if (global.LANG == 'EN') ADDDES = '```Add new member```'
if (global.LANG == 'SI') ADDDES = '```සමූහයට අයෙකු එකතු කිරීමට```'
var KICKDES = ''
if (global.LANG == 'EN') KICKDES = '```Remove member from group```'
if (global.LANG == 'SI') KICKDES = '```සමූහයේ අයෙකු ඉවත් කිරීමට```'
var PROMOTEDES = ''
if (global.LANG == 'EN') PROMOTEDES = '```give admin on group```'
if (global.LANG == 'SI') PROMOTEDES = '```සමූහයේ ඇඩ්මින් තනතුර ලබාදීම```'
var DEMOTEDES = ''
if (global.LANG == 'EN') DEMOTEDES = '```Demote From group admin```'
if (global.LANG == 'SI') DEMOTEDES = '```ගෲප් එකේ ඇඩ්මින් වරයෙකුගේ ඇඩ්මින් ඉවත්කිරීමට```'
var DELX = ''
if (global.LANG == 'EN') DELX = '```Delete massage for everyone```'
if (global.LANG == 'SI') DELX = '```පනිවිඩයක් සියලු දෙනාගෙන් මකාදැමීමට [ delete for everyone ]```'

prefix = '.'

                                anu = `
*◯───────[ GROUP MENU ]───────◯*

╭⛒  *ᴏᴡɴᴇʀ* ${global.ownernma}
├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
╰⛒  *ᴛɪᴍᴇ* ${time}

${M_E} *${prefix}grouplink* 
   ${D_E} ${GRPDES}
${M_E} *${prefix}setgrouppp* 
   ${D_E} ${GRPPP}
${M_E} *${prefix}setname* 
   ${D_E} ${SETNAME}
${M_E} *${prefix}group* 
   ${D_E} ${GROUDES}
${M_E} *${prefix}editinfo* 
   ${D_E} ${EDITINFO}
${M_E} *${prefix}grupinfo* 
   ${D_E} ${GRPINFO}
${M_E} *${prefix}add* 
   ${D_E} ${ADDDES}
${M_E} *${prefix}kick* 
   ${D_E} ${KICKDES}
${M_E} *${prefix}promote* 
   ${D_E} ${PROMOTEDES}
${M_E} *${prefix}demote* 
   ${D_E} ${DEMOTEDES}

*───────────◯* `,
next = Lang.NEXT_BUTTON
back = Lang.BACK_BUTTON

footer = global.botnma
                 buttons = [
                    {buttonId: `list`, buttonText: {displayText: back}, type: 1},
                    {buttonId: `elisadownloadmenu`, buttonText: {displayText: next}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/6e6e5387b5ff163765bb1.jpg'},
                    caption:anu ,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                   /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/6e6e5387b5ff163765bb1.jpg' } }, { upload:   ElisaBotMd.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: anu ,
                                              hydratedFooterText: global.botnma ,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                      url: 'https://youtube.com/c/MRNIMAOFC'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: `${back}` ,
                                                      id: 'list'
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: `${next}` ,
                                                      id: 'elisadownloadmenu'
                                                      }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                             */
}
                  break
case 'helpers' : {
  await ElisaBotMd.sendText(m.chat,`   *👸 𝙷𝙴𝙻𝙿𝙴𝚁𝚂 👸*
  
💞 𝚂𝙻 𝚁𝙴𝙰𝙻 𝚃𝙴𝙲𝙷 
💞 𝙳𝙰𝚁𝙺 𝙰𝙻𝙿𝙷𝙰
💞 𝚂𝙰𝙽𝙷𝚆𝙰
💞 𝚃𝙷𝙰𝚂𝙷𝙸

`)
}
break
                  case 'elisadownloadmenu': {  
const start = new Date().getTime()
  await ElisaBotMd.sendMessage(from, { react: { text: `♥️`, key: m.key }})
  const end = new Date().getTime()
  const ping = (end - start) + ' *_ᴍs_*' 
  const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]

await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
var TIKTOK = ''
if (global.LANG == 'EN') TIKTOK = '```Download Your Tiktok Link video```'
if (global.LANG == 'SI') TIKTOK = '```ඔබගේ ටික්ටොක් වීඩියෝ ලින්කුව බාගතකරයි```'
var INSTA = ''
if (global.LANG == 'EN') INSTA = '```Download your instagram link Video```'
if (global.LANG == 'SI') INSTA = '```ඔබගේ ඉන්ස්ටාග්‍රෑම් වීඩියෝ ලින්ක් බාගත කරයි```'
var IG2 = ''
if (global.LANG == 'EN') IG2 = '```Download your instagram link Video type ( ii )```'
if (global.LANG == 'SI') IG2 = '```ඔබගේ ඉන්ස්ටාග්‍රෑම් වීඩියෝ ලින්ක් බාගත කරයි ආකාරය ( ii )```'
var YTMP3 = ''
if (global.LANG == 'EN') YTMP3 = '```Download your youtube link song```'
if (global.LANG == 'SI') YTMP3 = '```ඔබගේ යූටියුබ් ලින්කුවේ සින්දුව බාගත කරයි```'
var YTMP4 = ''
if (global.LANG == 'EN') YTMP4  = '```Download your youtube link video```'
if (global.LANG == 'SI') YTMP4  = '```ඔබගේ යූටියුබ් ලින්කුවේ වීඩියෝව බාගත කරය```'
var GETMUSIC = ''
if (global.LANG == 'EN') GETMUSIC = '```Get your song```'
if (global.LANG == 'SI') GETMUSIC  = '```ඔබගේ සින්දුව එවයි```'
var GETVIDEO = ''
if (global.LANG == 'EN') GETVIDEO  = '```get your video```'
 if (global.LANG == 'SI') GETVIDEO  = '```ඔබගේ විඩියෝව එවයි```'
var SONG = ''
var YTV = ''
if (global.LANG == 'EN') YTV = '```Download videos [ 144p / 240p / 360p / 480p / 720p / 1080p ] Qualitys``` Can not Download up to 100mb videos ❗'
if (global.LANG == 'SI') YTV = '```වීඩියෝ බාගතකිරීම [ 144p / 240p / 360p / 480p / 720p / 1080p ]``` 100mb වඩා වීඩීයෝ බාගතකළ නොහැක ❗'
if (global.LANG == 'EN') SONG  = '```The song you name will download```'
if (global.LANG == 'SI') SONG  = '```ඔබ නම් යෙදූ ගීතය බාගත කරයි```'
var VIDEO = ''
if (global.LANG == 'EN') VIDEO = '```The video you name will download```'
if (global.LANG == 'SI') VIDEO  = '```ඔබ නම් යෙදූ ගීතය බාගත කරයි```'
var YT = ''
if (global.LANG == 'EN') YT  = '```Your song or video will be searched on YouTube and downloaded```'
if (global.LANG == 'SI') YT  = '```ඔබගේ සින්දුව හෝ වීඩියෝව යූටියුබ් හී සර්ච් කර බාගත කරයි```'
var FB  = ''
if (global.LANG == 'EN') FB  =' ```Download your facebook video link```'
if (global.LANG == 'SI') FB  = '```ඔබගේ ෆේස් බූක් වීඩියෝ ලින්කුව බාගත කරයි```'
var FB2 = '' 
if (global.LANG == 'EN') FB2  = '```Download your facebook video link type ( ii )```'
if (global.LANG == 'SI') FB2  = '```ඔබගේ ෆේස් බූක් වීඩියෝ ලින්කුව බාගත කරය ආකාරය ( ii )```'
var SONG2 = ''
var VIDEO2 = ''
if (global.LANG == 'EN') SONG2  = '```The song you name will download [ none button ]```'
if (global.LANG == 'SI') SONG2  = '```ඔබ නම් යෙදූ ගීතය බාගත කරයි [ බටන් මැස්ස්සේජ් නොමැතිව ]```'
if (global.LANG == 'EN') VIDEO2  = '```The video you name will download [ none button ]```'
if (global.LANG == 'SI') VIDEO2  = '```ඔබ නම් යෙදූ වීඩියෝව බාගත කරයි [ බටන් මැස්ස්සේජ් නොමැතිව ]```'
var APK = ''
var MOD_APK = ''
var TELE = ''
var XNXX = ''
if (global.LANG == 'EN') APK = '```Download Plastore apk```'
if (global.LANG == 'SI') APK = '```Plastore Apk බාගත කිරීමට```'
if (global.LANG == 'EN') MOD_APK = '```Mod Apk Download```'
if (global.LANG == 'SI') MOD_APK = '```මොඩ් Apk බාගත කිරීම```'
if (global.LANG == 'EN') TELE = '```Telegram Sticker Download```'
if (global.LANG == 'SI') TELE = '```Telegram ස්ටිකර් බාගත කිරීමට```'
if (global.LANG == 'EN') XNXX = '```Xnxx Video Download ( only main Group )```'
if (global.LANG == 'SI') XNXX = '```Xnxx වීඩියෝ බාගත කිරීම ( ප්‍රදාන ශාපයේ පමණක් වලංගු විදානයකි )```'

 prefix = '.'
anu = `*◯───────[ DOWNLOAD MENU ]───────◯*

╭⛒  *ᴏᴡɴᴇʀ* ${global.ownernma}
├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
╰⛒  *ᴛɪᴍᴇ* ${time}

${M_E} *${prefix}tiktok* 
   ${D_E} ${TIKTOK}    
${M_E} *${prefix}tiktok2*  
   ${D_E}  ${TIKTOK} _type ( ii )_   
${M_E} *${prefix}insta*  
   ${D_E}  ${INSTA}   
${M_E} *${prefix}ig2*  
   ${D_E}  ${IG2}   
${M_E} *${prefix}fb*  
   ${D_E}  ${FB}   
${M_E} *${prefix}fb2*  
   ${D_E}  ${FB2}   
${M_E} *${prefix}ytmp3*  
   ${D_E}  ${YTMP3}   
${M_E} *${prefix}ytmp4*  
   ${D_E}  ${YTMP4}   
${M_E} *${prefix}getmusic*  
   ${D_E}  ${GETMUSIC}   
${M_E} *${prefix}getvideo*  
   ${D_E}  ${GETVIDEO}   
${M_E} *${prefix}song*  
   ${D_E}  ${SONG}   
${M_E} *${prefix}song2*  
   ${D_E}  ${SONG2}   
${M_E} *${prefix}video*  
   ${D_E}  ${VIDEO}   
${M_E} *${prefix}video2*  
   ${D_E}  ${VIDEO2}   
${M_E} *${prefix}ytv*  
   ${D_E}  ${YTV}   
${M_E} *${prefix}yt*  
   ${D_E}  ${YT}    
${M_E} *${prefix}apk*  
   ${D_E}  ${APK}    
${M_E} *${prefix}modapk*  
   ${D_E}  ${MOD_APK}    
${M_E} *${prefix}stelegram*  
   ${D_E}  ${TELE}    
${M_E} *${prefix}xnxxsh*  
   ${D_E}  ${XNXX} 

*────────◯*`,

next = Lang.NEXT_BUTTON
back = Lang.BACK_BUTTON

      footer = global.botnma
                 buttons = [
                    {buttonId: `grpmenu`, buttonText: {displayText: back}, type: 1},
                    {buttonId: `elisasearchmenu`, buttonText: {displayText: next}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/e0aa108673b5059695677.jpg' },
                    caption:anu ,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                   /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/e0aa108673b5059695677.jpg' } }, { upload:   ElisaBotMd.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: anu ,
                                              hydratedFooterText: global.botnma ,
                                              hydratedButtons: [{
                                              
                                                  quickReplyButton: {
                                                      displayText: `${back}` ,
                                                      id: 'grpmenu'
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: `${next}` ,
                                                      id: 'elisasearchmenu'
                                                      }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                             */
}
                              break 
                              case 'elisasearchmenu': { 
const start = new Date().getTime()
  await ElisaBotMd.sendMessage(from, { react: { text: `♥️`, key: m.key }})
  const end = new Date().getTime()
  const ping = (end - start) + ' *_ᴍs_*' 
  const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]

                          await ElisaBotMd.sendMessage(from, { react: { text: `🔍`, key: m.key }})
var PLAY = ''
if (global.LANG == 'EN') PLAY = '```Search youtube and download```'
if (global.LANG == 'SI') PLAY = '```යූටියුබ් හි සර්ච් කර Download කරයි```'
var YTS = ''
if (global.LANG == 'EN') YTS = '```search your text on youtube```'
if (global.LANG == 'SI') YTS =  '```ඔබගේ වචනය යූටියුබ් හී සොයයි```'
var GOOGLE = ''
if (global.LANG == 'EN') GOOGLE = '```search your word on google```'
if (global.LANG == 'SI') GOOGLE = '```ඔබගේ වචනය ගූහල් හී සොයයි```'
var IMG = ''
if (global.LANG == 'EN') IMG = '```search google image```'
if (global.LANG == 'SI') IMG = '```ගූගල්හී ජායාරූප සොයයි```'
var PINSA = ''
if (global.LANG == 'EN') PINSA = '```search image from pinterest```'
if (global.LANG == 'SI') PINSA = '```pinterest හී ජාඅයාරූප සොයයි```'
var WALLPAPER  = ''
if (global.LANG == 'EN') WALLPAPER = '```search wallpapers```'
if (global.LANG == 'SI') WALLPAPER = '```වෝල්පේපර්ස් සොයයි```'
var WIKI = ''
if (global.LANG == 'EN') WIKI = '```search on wikipidia```'
if (global.LANG == 'SI') WIKI = '```විකිපීඩියා හී සර්ච් කරයි```'
prefix = '.'
                                  anu = `*◯───────[ SEARCH MENU ]───────◯*

╭⛒  *ᴏᴡɴᴇʀ* ${global.ownernma}
├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
╰⛒  *ᴛɪᴍᴇ* ${time}

${M_E} *${prefix}play*   
   ${D_E}  ${PLAY}
${M_E} *${prefix}yts*   
   ${D_E}  ${YTS}
${M_E} *${prefix}google*   
   ${D_E}  ${GOOGLE}
${M_E} *${prefix}img*   
   ${D_E}  ${IMG}
${M_E} *${prefix}pinterest*   
   ${D_E}  ${PINSA}
${M_E} *${prefix}wallpaper*   
   ${D_E}  ${WALLPAPER}
${M_E} *${prefix}wikimedia*   
   ${D_E}  ${WIKI}
${M_E} *${prefix}ytsearch*   
   ${D_E}  ${YTS}
      
*──────────◯*
`
 next = Lang.NEXT_BUTTON
back = Lang.BACK_BUTTON
                    
                    footer = global.botnma
                 buttons = [
                    {buttonId: `elisadownloadmenu`, buttonText: {displayText: back}, type: 1},
                    {buttonId: `randommenu`, buttonText: {displayText: next}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/422f47351a4ba19070837.jpg' },
                    caption: anu,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                    /*message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/422f47351a4ba19070837.jpg' } }, { upload:   ElisaBotMd.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: anu ,
                                              hydratedFooterText: global.botnma ,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                      url: 'https://youtube.com/c/MRNIMAOFC'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: `${back}` ,
                                                      id: 'elisadownloadmenu'
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: `${next}` ,
                                                      id: 'randommenu'
                                                      }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              */
}
                  break
                  case 'randommenu': { 
const start = new Date().getTime()
  await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
  const end = new Date().getTime()
  const ping = (end - start) + ' *_ᴍs_*' 
  const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]

                          await ElisaBotMd.sendMessage(from, { react: { text: `🗳️`, key: m.key }})
var COFFY = ''
if (global.LANG == 'EN') COFFY = '```Send random coffee image```'
if (global.LANG == 'SI') COFFY = '```අහබු ලෙස coffee ජායාරූප එවයි.```'
var COUPP = ''
if (global.LANG == 'EN') COUPP = '```send copple profile photo randomly```'
if (global.LANG == 'SI') COUPP = '_අහබු ලෙස copple profile photo එවයි```'
prefix = '.'
                      anu = `*◯───────[ RANDOM MENU ]───────◯*

╭⛒  *ᴏᴡɴᴇʀ* ${global.ownernma}
├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
╰⛒  *ᴛɪᴍᴇ* ${time}

${M_E} *${prefix}coffee*   
   ${D_E}  ${COFFY}
${M_E} *${prefix}couplepp*   
   ${D_E}  ${COUPP}
   
*──────────◯*
`
next = Lang.NEXT_BUTTON
back = Lang.BACK_BUTTON

footer = global.botnma
                 buttons = [
                    {buttonId: `elisasearchmenu`, buttonText: {displayText: back}, type: 1},
                    {buttonId: `funmenu`, buttonText: {displayText: next}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/60f9d53af312a48e619ad.jpg' },
                    caption:anu ,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
          
          
                   /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/60f9d53af312a48e619ad.jpg' } }, { upload:   ElisaBotMd.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: anu ,
                                              hydratedFooterText: global.botnma ,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                      url: 'https://youtube.com/c/MRNIMAOFC'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: `${back}` ,
                                                      id: 'elisasearchmenu'
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: `${next}` ,
                                                      id: 'funmenu'
                                                      }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                             */
}
                  break
                  case 'funmenu': {  
const start = new Date().getTime()
  await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
  const end = new Date().getTime()
  const ping = (end - start) + ' *_ᴍs_*' 
  const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]

                          await ElisaBotMd.sendMessage(from, { react: { text: `🤪`, key: m.key }})
                      
var COPLE = ''
if (global.LANG == 'EN') COPLE = '```Choose two members from the group.```'
if (global.LANG == 'SI') COPLE = '```ගෲප් එකේ සිටින දෙදෙනෙකු තෝරයි.```'
var MYSOLO = ''
if (global.LANG == 'EN') MYSOLO = '```Choose your soulmate```.' 
if (global.LANG == 'SI') MYSOLO ='```ඔබගේ ආත්මීය මිතුරා තෝරයි```.'
var MATH = ''
if (global.LANG == 'EN') MATH = '```Counting with Bot```.'
if (global.LANG == 'SI') MATH = '```බොට් සමග ගණන් සෑදීමට.```'
prefix = '.'
anu = `*◯───────[ FUN MENU ]───────◯*

╭⛒  *ᴏᴡɴᴇʀ* ${global.ownernma}
├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
╰⛒  *ᴛɪᴍᴇ* ${time}

${M_E} *${prefix}couple*   
   ${D_E}  ${COPLE}
${M_E} *${prefix}mysoulmate*   
   ${D_E}  ${MYSOLO}
${M_E} *${prefix}math*   
   ${D_E}  ${MATH}
   
*──────────◯*
`
next = Lang.NEXT_BUTTON
back = Lang.BACK_BUTTON
                   
                   footer = global.botnma
                 buttons = [
                    {buttonId: `randommenu`, buttonText: {displayText: back}, type: 1},
                    {buttonId: `elisavoicemenu`, buttonText: {displayText: next}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/f2bb8d4fbd8fc9ca5a496.jpg'},
                    caption: anu,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                    /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/f2bb8d4fbd8fc9ca5a496.jpg' } }, { upload:   ElisaBotMd.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: anu ,
                                              hydratedFooterText: global.botnma ,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                      url: 'https://youtube.com/c/MRNIMAOFC'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: `${back}` ,
                                                      id: 'randommenu'
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: `${next}` ,
                                                      id: 'elisavoicemenu'
                                                      }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                             */
}
                  break
                  case 'elisavoicemenu': {  
const start = new Date().getTime()
  await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
  const end = new Date().getTime()
  const ping = (end - start) + ' *_ᴍs_*' 
  const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
                  
                          await ElisaBotMd.sendMessage(from, { react: { text: `🎙️`, key: m.key }})
                  
var VOICEDESC = ''
if (global.LANG == 'EN') VOICEDESC= '*💬 About Voice changer cmd*\n ```When you reply to one of your voice messages and use the following command, the corresponding voice has been changed.```'
if (global.LANG == 'SI') VOICEDESC= '*💬 වොයිස් විධාන පිලිබද* \n ```ඔබගේ වොයිස් මැස්ස්සේජ් එකක් සදහා රිප්ලයි කර පහත කමාන්ඩ් බාවිතකරවිට ඒවාට අදාල voice වෙනස් වී ලැබෙයි```'
prefix = '.'
                      anu = `*◯───────[ VOICE MENU ]───────◯*

╭⛒  *ᴏᴡɴᴇʀ* ${global.ownernma}
├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
╰⛒  *ᴛɪᴍᴇ* ${time}

${M_E} *${prefix}bass*
${M_E} *${prefix}blown*
${M_E} *${prefix}deep*
${M_E} *${prefix}earrape*
${M_E} *${prefix}fast*
${M_E} *${prefix}fat*
${M_E} *${prefix}nightcore*
${M_E} *${prefix}reverse*
${M_E} *${prefix}robot*
${M_E} *${prefix}slow*
${M_E} *${prefix}squirrel*

${VOICEDESC}

*──────────◯*
`
                  next = Lang.NEXT_BUTTON
back = Lang.BACK_BUTTON

footer = global.botnma
                 buttons = [
                    {buttonId: `funmenu`, buttonText: {displayText: back}, type: 1},
                    {buttonId: `elisaconvertmenu`, buttonText: {displayText: next}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/5178ff96358a9e33cf7da.jpg'},
                    caption:anu ,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
          
          
                   /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/5178ff96358a9e33cf7da.jpg' } }, { upload:   ElisaBotMd.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: anu ,
                                              hydratedFooterText: global.botnma ,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                      url: 'https://youtube.com/c/MRNIMAOFC'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: `${back}` ,
                                                      id: 'funmenu'
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: `${next}` ,
                                                      id: 'elisaconvertmenu'
                                                      }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                             */
}
                  break
                  case 'religionmenukdksoejdjj': {
                      anu = `
*𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡 𝗠𝗘𝗡𝗨*
 Islamic
🔵 ${prefix}iqra
🔵 ${prefix}hadith
🔵 ${prefix}alquran
🔵 ${prefix}juzamma
🔵 ${prefix}tafsirsurah`
                  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./media/image/Elisa.jpg')},
                                              hydratedFooterText: `𝚀𝚞𝚎𝚎𝚗 𝙴𝚕𝚒𝚜𝚊 𝙿𝚞𝚋𝚕𝚒𝚌 𝙴𝚍𝚒𝚝𝚒𝚘𝚗 `,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://www.youtube.com/c/MRNIMAOFC'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'horoscopemenuxxxxxxx': {
                      anu = `
 *𝗛𝗢𝗥𝗢𝗦𝗖𝗢𝗣𝗘 𝗠𝗘𝗡𝗨*

🔵 ${prefix}hockeynumber
🔵 ${prefix}dreammeaning
🔵 ${prefix}namemeaning
🔵 ${prefix}fortunetelling
🔵 ${prefix}marriageprediction
🔵 ${prefix}wife&husband
🔵 ${prefix}fortunetelling2
🔵 ${prefix}matchname
🔵 ${prefix}couplematch
🔵 ${prefix}married
🔵 ${prefix}businessnature
🔵 ${prefix}sustenance
🔵 ${prefix}profession
🔵 ${prefix}fate
🔵 ${prefix}potentialdisease
🔵 ${prefix}tarot
🔵 ${prefix}fengshui
🔵 ${prefix}goodday
🔵 ${prefix}badday
🔵 ${prefix}unluckyday
🔵 ${prefix}dragonday
🔵 ${prefix}sustenance2
🔵 ${prefix}luck
🔵 ${prefix}weton
🔵 ${prefix}character
🔵 ${prefix}luck2
🔵 ${prefix}fishing
🔵 ${prefix}fertiletime
🔵 ${prefix}zodiac
🔵 ${prefix}shio`
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./media/image/Elisa.jpg')},
                                              hydratedFooterText: `𝚀𝚞𝚎𝚎𝚗 𝙴𝚕𝚒𝚜𝚊 𝙿𝚞𝚋𝚕𝚒𝚌 𝙴𝚍𝚒𝚝𝚒𝚘𝚗 `,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://www.youtube.com/c/MRNIMAOFC'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'elisaconvertmenu': {  
const start = new Date().getTime()
  await ElisaBotMd.sendMessage(from, { react: { text: `⚙️`, key: m.key }})
  const end = new Date().getTime()
  const ping = (end - start) + ' *_ᴍs_*' 
  const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]

                        //  await ElisaBotMd.sendMessage(from, { react: { text: `🛠️`, key: m.key }})
                  prefix = '.'
var IMG = ''
if (global.LANG == 'EN' ) IMG= '```Sticker convert to photo.```'
if (global.LANG == 'SI' ) IMG= '```ස්ටිකර් 1ක් ෆොටෝ 1ක් බවට හැරවීම.```'
var RBG = ''
if (global.LANG == 'EN' ) RBG= '```Remove photo background.```'
if (global.LANG == 'SI' ) RBG= '```ජායාරූප වල පසුබිම ඉවත්කරයි```'
var STICKER = ''
if (global.LANG == 'EN' ) STICKER= '```image / small video convert to sticker```'
if (global.LANG == 'SI' ) STICKER= '```ජායාරූපයක් හෝ කුඩා වීඩීයෝවක් ස්ටිකර් බවට පත්කිරීම```'
var EMOJIMIX = ''
if (global.LANG == 'EN' ) EMOJIMIX= '```Mix 2 imoji and make sticker```'
if (global.LANG == 'SI' ) EMOJIMIX= '```ඉමෝජි 2ක් එකතු කර ස්ටිකර් සාදයි```'
var TOVIDEO = ''
if (global.LANG == 'EN' ) TOVIDEO= '```Animation sticker convert to video```'
if (global.LANG == 'SI' ) TOVIDEO= '```ඇනිමේශන් ස්ටිකර් වීඩියෝ බවට හැරවීම```'
var GIF = ''
if (global.LANG == 'EN' ) GIF= '```Animation Sticker Convert to Gif```'
if (global.LANG == 'SI' ) GIF= '```ඇනිමේශන් ස්ටිකර් GIF බවට පත්කිරීම```'
var URL = ''
if (global.LANG == 'EN' ) URL= '```Get url your image / video```'
if (global.LANG == 'SI' ) URL= '```ඔබගේ ජායාරූපයට හෝ වීඩියෝවට ලින්කුවක් ලබාදෙයි```'
var FANCY = ''
if (global.LANG == 'EN' ) FANCY = '```Make fancy text```'
if (global.LANG == 'SI' ) FANCY = '```විවිද හැඩවලින් අකුරු සෑදීම [ only english ]```'

                  anu = `*◯───────[ CONVERT MENU ]───────◯*

╭⛒  *ᴏᴡɴᴇʀ* ${global.ownernma}
├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
╰⛒  *ᴛɪᴍᴇ* ${time}

${M_E} *${prefix}toimage*   
   ${D_E}  ${IMG}
${M_E} *${prefix}removebg*   
   ${D_E}  ${RBG}
${M_E} *${prefix}sticker*   
   ${D_E} ${STICKER}
${M_E} *${prefix}emojimix*   
   ${D_E}  ${EMOJIMIX}
${M_E} *${prefix}tovideo*   
   ${D_E}  ${TOVIDEO}
${M_E} *${prefix}togif*   
   ${D_E}  ${GIF}
${M_E} *${prefix}tourl*   
   ${D_E}  ${URL} 
${M_E} *${prefix}fancy*   
   ${D_E}  ${FANCY} 
   
*──────────◯*
`
                    next = Lang.NEXT_BUTTON
back = Lang.BACK_BUTTON

    footer = global.botnma
                 buttons = [
                    {buttonId: `elisavoicemenu`, buttonText: {displayText: back}, type: 1},
                    {buttonId: `elisaranimemenu`, buttonText: {displayText: next}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/b6077fd339af273d1ec4e.jpg'},
                    caption:anu ,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                    /*message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/b6077fd339af273d1ec4e.jpg' } }, { upload:   ElisaBotMd.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: anu ,
                                              hydratedFooterText: global.botnma ,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                      url: 'https://youtube.com/c/MRNIMAOFC'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: `${back}` ,
                                                      id: 'elisavoicemenu'
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: `${next}` ,
                                                      id: 'elisaranimemenu'
                                                      }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                             */
}
                  break
                  case 'elisaranimemenu': {  
const start = new Date().getTime()
  await ElisaBotMd.sendMessage(from, { react: { text: `📥`, key: m.key }})
  const end = new Date().getTime()
  const ping = (end - start) + ' *_ᴍs_*' 
  const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]

                         // await ElisaBotMd.sendMessage(from, { react: { text: `🌝`, key: m.key }})

next = Lang.NEXT_BUTTON
back = Lang.BACK_BUTTON


                      anu = `*◯───────[ DOWNLOAD MENU ]───────◯*

╭⛒  *ᴏᴡɴᴇʀ* ${global.ownernma}
├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
╰⛒  *ᴛɪᴍᴇ* ${time}

${M_E} ${prefix}akira  
${M_E} ${prefix}ana
${M_E} ${prefix}asuna 
${M_E} ${prefix}ayuzawa 
${M_E} ${prefix}boruto
${M_E} ${prefix}elaina 
${M_E} ${prefix}emilia 
${M_E} ${prefix}erza  
${M_E} ${prefix}gremory  
${M_E} ${prefix}inori  
${M_E} ${prefix}kaga  
${M_E} ${prefix}kaori  
${M_E} ${prefix}kurumi  
${M_E} ${prefix}loli  
${M_E} ${prefix}madara  
${M_E} ${prefix}mikasa  
${M_E} ${prefix}miku  
${M_E} ${prefix}naruto  
${M_E} ${prefix}nezuko  
${M_E} ${prefix}rize  
${M_E} ${prefix}sakura  
${M_E} ${prefix}sasuke  
${M_E} ${prefix}shina  
${M_E} ${prefix}shinka  
${M_E} ${prefix}shota  
${M_E} ${prefix}waifu  
${M_E} ${prefix}yuki  
${M_E} ${prefix}bully
${M_E} ${prefix}cuddle
${M_E} ${prefix}cry
${M_E} ${prefix}hug
${M_E} ${prefix}awoo
${M_E} ${prefix}kiss
${M_E} ${prefix}lick
${M_E} ${prefix}pat
${M_E} ${prefix}smug
${M_E} ${prefix}bonk
${M_E} ${prefix}yeet
${M_E} ${prefix}blush
${M_E} ${prefix}smile
${M_E} ${prefix}wave
${M_E} ${prefix}highfive
${M_E} ${prefix}handhold
${M_E} ${prefix}nom
${M_E} ${prefix}bite
${M_E} ${prefix}glomp
${M_E} ${prefix}slap
${M_E} ${prefix}kill
${M_E} ${prefix}happy
${M_E} ${prefix}wink
${M_E} ${prefix}poke
${M_E} ${prefix}dance
${M_E} ${prefix}cringe

*──────────◯*
`

footer = global.botnma
                 buttons = [
                    {buttonId: `elisaconvertmenu`, buttonText: {displayText: back}, type: 1},
                    {buttonId: `elisanocategorymenu`, buttonText: {displayText: next}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/a41e3b88d1676fa98dd00.jpg'},
                    caption: anu,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                 /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/a41e3b88d1676fa98dd00.jpg' } }, { upload:   ElisaBotMd.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: anu ,
                                              hydratedFooterText: global.botnma ,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                      url: 'https://youtube.com/c/MRNIMAOFC'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: `${back}` ,
                                                      id: 'elisaconvertmenu'
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: `${next}` ,
                                                      id: 'elisanocategorymenu'
                                                      }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                             */
}
                  break
                  case 'elisanocategorymenu': {  
const start = new Date().getTime()
  await ElisaBotMd.sendMessage(from, { react: { text: `🎗️`, key: m.key }})
  const end = new Date().getTime()
  const ping = (end - start) + ' *_ᴍs_*' 
  const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]

                        //  await ElisaBotMd.sendMessage(from, { react: { text: `⚙️`, key: m.key }})
                  prefix = '.'

next = Lang.NEXT_BUTTON
back = Lang.BACK_BUTTON

var SPEED = ''
if (global.LANG == 'EN' ) SPEED = '```Test Bot Speed```'
if (global.LANG == 'SI') SPEED = '```බොට්ගේ වේගය මැනීමට```'
var PING = ''
if (global.LANG == 'EN' ) PING= '```Test Bot ping.```'
if (global.LANG == 'SI') PING= '```බොට්ගේ පින්ග් පරීක්ශාකිරීමට```'
var OWNER = ''
if (global.LANG == 'EN' ) OWNER = '```Send Bot Owner Contact```'
if (global.LANG == 'SI') OWNER = '```බොට් අයිතිකරුගේ නම්බර් එක එවයි```'
var DONA = ''
if (global.LANG == 'EN' ) DONA = '```Donate fro bot```'
if (global.LANG == 'SI') DONA = '```බොට් සදහා ආදාරයක් කිරීමට```'
var MENU = ''
if (global.LANG == 'EN' ) MENU = '```Send Bot Menu```'
if (global.LANG == 'SI') MENU= '```බොට් මෙනුව එවයි```'
var DELETE = ''
if (global.LANG == 'EN' ) DELETE= '```Delete massage if bot send```'
if (global.LANG == 'SI') DELETE= '```බොට් යැවූ මැස්ස්සේජ් මකාදමයි```'
var QUO = ''
if (global.LANG == 'EN' ) QUO = '```Send Quoted Massage```'
if (global.LANG == 'SI') QUO = '```ඔබ විමසූ පනිවුඩය රිප්ලයි කර ඇති මැස්ස්සේජ් එක එවයි```'
var LIP = ''
if (global.LANG == 'EN' ) LIP = '```Send personal massage list```'
if (global.LANG == 'SI') LIP= '```ඉන්බොක්ස් ඇති චැට් පෙන්වයි```'
var LPO = ''
if (global.LANG == 'EN' ) LPO= '```Show online List```'
if (global.LANG == 'SI') LPO= '```ඔන්ලයින් සිටින අය පෙන්වයි```'
var REPORT = ''
if (global.LANG == 'EN' ) REPORT= '```report from bot owner```'
if (global.LANG == 'SI') REPORT = '```බොට් අයිතිකරුට වාර්තාකරන්න```'


anu = `*◯───────[ MISC MENU ]───────◯*

╭⛒  *ᴏᴡɴᴇʀ* ${global.ownernma}
├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
╰⛒  *ᴛɪᴍᴇ* ${time}

${M_E} *${prefix}speedtest*   
    ${D_E}  ${SPEED}
${M_E} *${prefix}ping*   
    ${D_E}  ${PING}
${M_E} *${prefix}owner*   
    ${D_E}  ${OWNER}
${M_E} *${prefix}donate*   
    ${D_E}  ${DONA}
${M_E} *${prefix}menu*   
    ${D_E}  ${MENU}
${M_E} *${prefix}delete*   
    ${D_E}  ${DELETE}
${M_E} *${prefix}quoted*   
    ${D_E}  ${QUO}
${M_E} *${prefix}listpc*   
    ${D_E}  ${LIP}
${M_E} *${prefix}listonline*   
    ${D_E}  ${LPO}
${M_E} *${prefix}report*   
    ${D_E}  ${REPORT}
    
*──────────◯*
`
                    footer = global.botnma
                 buttons = [
                    {buttonId: `elisaranimemenu`, buttonText: {displayText: back}, type: 1},
                    {buttonId: `textlogo`, buttonText: {displayText: next}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/be3ca9a3bdac2fbe47f10.jpg' },
                    caption:anu ,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                    /*message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/be3ca9a3bdac2fbe47f10.jpg' } }, { upload:   ElisaBotMd.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: anu ,
                                              hydratedFooterText: global.botnma ,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                      url: 'https://youtube.com/c/MRNIMAOFC'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: `${back}` ,
                                                      id: 'elisaranimemenu'
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: `${next}` ,
                                                      id: 'elisadatabasemenu'
                                                      }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              */
}
                  break
                  case 'textlogo': { 
const start = new Date().getTime()
  await ElisaBotMd.sendMessage(from, { react: { text: `👻`, key: m.key }})
  const end = new Date().getTime()
  const ping = (end - start) + ' *_ᴍs_*' 
  const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]

                          await ElisaBotMd.sendMessage(from, { react: { text: `⚧️️`, key: m.key }})
prefix = '.'
                      anu = `*◯───────[ TEXT TO LOGO MENU ]───────◯*

╭⛒  *ᴏᴡɴᴇʀ* ${global.ownernma}
├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
╰⛒  *ᴛɪᴍᴇ* ${time}

${M_E} *${prefix}eglitch*
${M_E} *${prefix}eberry*
${M_E} *${prefix}eneon*
${M_E} *${prefix}ecrismas*
${M_E} *${prefix}ethunder*
${M_E} *${prefix}eninja*
${M_E} *${prefix}eorange*
${M_E} *${prefix}ecake*
${M_E} *${prefix}estrowberry*
${M_E} *${prefix}eflaming*
${M_E} *${prefix}eshadow*
${M_E} *${prefix}eongrass*
${M_E} *${prefix}eloveu*
${M_E} *${prefix}ecoffee*
${M_E} *${prefix}eilluminati*

   ${D_E} ${prefix}eberry MR NIMA
 
*──────────◯*
`
next = Lang.NEXT_BUTTON
back = Lang.BACK_BUTTON

footer = global.botnma
                 buttons = [
                    {buttonId: `elisanocategorymenu`, buttonText: {displayText: back}, type: 1},
                    {buttonId: `logomenu`, buttonText: {displayText: next}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/43fb12ef3bb693973d756.jpg' },
                    caption:anu ,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                    /*message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/15c3205613be1d0bd1f1b.jpg' } }, { upload:   ElisaBotMd.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: anu ,
                                              hydratedFooterText: global.botnma ,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                      url: 'https://youtube.com/c/MRNIMAOFC'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: `${back}` ,
                                                      id: 'elisanocategorymenu'
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: `${next}` ,
                                                      id: 'elisaanonymouschatmenu'
                                                      }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              */
}
                  break
                  case 'elisaanonymouschatmenu': {
next = Lang.NEXT_BUTTON
back = Lang.BACK_BUTTON
                      anu = `
*𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗠𝗘𝗡𝗨*
👤 ${prefix}start
👤 ${prefix}next
👤 ${prefix}stop
                      `
                      footer = global.botnma
                 buttons = [
                    {buttonId: `elisadatabasemenu`, buttonText: {displayText: back}, type: 1},
                    {buttonId: `logomenu`, buttonText: {displayText: next}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/4c48b566ce23dd180d1be.jpg'},
                    caption: anu,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
         
}
                  break
                  case 'logomenu': {  
const start = new Date().getTime()
  await ElisaBotMd.sendMessage(from, { react: { text: `♥️`, key: m.key }})
  const end = new Date().getTime()
  const ping = (end - start) + ' *_ᴍs_*' 
  const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]

                          await ElisaBotMd.sendMessage(from, { react: { text: `🌸`, key: m.key }})

prefix = '.'
var LOGODESC = ''
if (global.LANG == 'EN') LOGODESC = '```Make logos on logo pack -1```'
if (global.LANG == 'SI') LOGODESC = '```ලෝගෝ සෑදීම ආකාරය - 1```'
var LOGODESC_2 = ''
if (global.LANG == 'EN') LOGODESC_2 = '```Make logos on logo pack -2```'
if (global.LANG == 'SI') LOGODESC_2 = '```ලෝගෝ සෑදීම ආකාරය - 2```'
var LOGODESC_3 = ''
if (global.LANG == 'EN') LOGODESC_3 = '```Make logos on logo pack -3```'
if (global.LANG == 'SI') LOGODESC_3 = '```ලෝගෝ සෑදීම ආකාරය - 3```'
 
                      anu = `*◯───────[ LOGO MENU ]───────◯*

╭⛒  *ᴏᴡɴᴇʀ* ${global.ownernma}
├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
╰⛒  *ᴛɪᴍᴇ* ${time}

${M_E} *.logo*   
    ${D_E}  ${LOGODESC}
${M_E} *.logo2*   
    ${D_E}  ${LOGODESC_2}
${M_E} *.logo3*
    ${D_E}  ${LOGODESC_3}

 *_Example : .logo1 MR NIMA_*
 
 *──────────◯*
 `,
next = Lang.NEXT_BUTTON
back = Lang.BACK_BUTTON

footer = global.botnma
                 buttons = [
                    {buttonId: `elisanocategorymenu`, buttonText: {displayText: back}, type: 1},
                    {buttonId: `elisasistemmenu`, buttonText: {displayText: next}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/fe4955fa5a37e91f0ce85.jpg'},
                    caption: anu,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                   /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/fe4955fa5a37e91f0ce85.jpg' } }, { upload:   ElisaBotMd.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: anu ,
                                              hydratedFooterText: global.botnma ,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                      url: 'https://youtube.com/c/MRNIMAOFC'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: `${back}` ,
                                                      id: 'elisadatabasemenu'
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: `${next}` ,
                                                      id: 'ownermenu'
                                                      }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                            */
                              }
                  break
                  case 'elisasistemmenu': {
const start = new Date().getTime()
  await ElisaBotMd.sendMessage(from, { react: { text: `🧬`, key: m.key }})
  const end = new Date().getTime()
  const ping = (end - start) + ' *_ᴍs_*' 
  const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]

                      anu = `*◯───────[ SYSTEM MENU ]───────◯*

╭⛒  *ᴏᴡɴᴇʀ* ${global.ownernma}
├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
╰⛒  *ᴛɪᴍᴇ* ${time}

${M_E} ${prefix}antilink
${M_E} ${prefix}welcome
${M_E} ${prefix}blockgc

*──────────◯*
`
                  footer = global.botnma
                 buttons = [
                    {buttonId: `logomenu`, buttonText: {displayText: back}, type: 1},
                    {buttonId: `ownermenu`, buttonText: {displayText: next}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/5e9592ed3d63a4ecc2ae6.jpg'},
                    caption: anu,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                 /* const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./media/image/Elisa.jpg')},
                                              hydratedFooterText: `𝚀𝚞𝚎𝚎𝚗 𝙴𝚕𝚒𝚜𝚊 𝙿𝚞𝚋𝚕𝚒𝚌 𝙴𝚍𝚒𝚝𝚒𝚘𝚗 `,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://www.youtube.com/c/MRNIMAOFC'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                             */ }
                  break
                    case 'ownermenu': {  
const start = new Date().getTime()
  await ElisaBotMd.sendMessage(from, { react: { text: `⚜️️`, key: m.key }})
  const end = new Date().getTime()
  const ping = (end - start) + ' *_ᴍs_*' 
  const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]

                         // await ElisaBotMd.sendMessage(from, { react: { text: `🎭`, key: m.key }})

var JOIN = ''
if (global.LANG == 'EN') JOIN= '```Join yousing invite link```'
if (global.LANG == 'SI') JOIN= '```ගෲප් ලින්ක් බාවිතාකරමින් ඒයට join වීමට```'
var LEAVE = ''
if (global.LANG == 'EN') LEAVE= '```Leave from group```'
if (global.LANG == 'SI') LEAVE= '```ගෲප් එකකින් බොට්ව ඉවත් කිරීමට```'
var SETPP = ''
if (global.LANG == 'EN') SETPP= '```Change bit profile photo```'
if (global.LANG == 'SI') SETPP= '```බොට්ගේ ෆ්‍රොෆයිල් ජායාරූපය වෙනස් කිරීම```'
var BLOCK = ''
if (global.LANG == 'EN') BLOCK= '```Block user```'
if (global.LANG == 'SI') BLOCK= '```අයෙකු අවහිර කිරීමට```'
var UNBLOCK = ''
if (global.LANG == 'EN') UNBLOCK= '```unblock user```'
if (global.LANG == 'SI') UNBLOCK= '```අවහිර කර අයෙකුගේ අවහිරතාවය ඉවත් කිරීම```'
var BCGRP = ''
if (global.LANG == 'EN') BCGRP= '```send broadcast All groups```'
if (global.LANG == 'SI') BCGRP= '```සමූහ වලට පමනක් බ්‍රෝඩ්කාස්ට් යැවීමට```'
var BCALL = ''
if (global.LANG == 'EN') BCALL= '```Send broadcast all chats```'
if (global.LANG == 'SI') BCALL= '```සියලුම චැට් සදහා බ්‍රෝඩ්කාස්ට් යැවීම```'
var ALIVEM = ''
if (global.LANG == 'EN') ALIVEM= '```Change Bot alive message [ reply your image alive message ]```'
if (global.LANG == 'SI') ALIVEM= '```බොට්ගේ Alive පනිවිඩය වෙනස් කිරීමට [ ඔබගේ Alive පනිවිඩයට රිප්ලයි කරන්න ]```'
var WELCOMEM = ''
if (global.LANG == 'EN') WELCOMEM = '```Change Bot welcome message [ reply your image welcome message ]```'
if (global.LANG == 'SI') WELCOMEM = '```බොට්ගේ පිලිගැනීම් පනිවිඩය වෙනස් කිරීමට [ ඔබගේ පිලිගැනීම් පනිවිඩයට රිප්ලයි කරන්න ]```'
var GOODBYEM = ''
if (global.LANG == 'EN') GOODBYEM = '```Change Bot goodbye message [ reply your image goodbye message ]```'
if (global.LANG == 'SI') GOODBYEM = '```බොට්ගේ GoodBye පනිවිඩය වෙනස් කිරීමට [ ඔබගේ GoodBye පනිවිඩයට රිප්ලයි කරන්න ]```'
var SETM = ''
if (global.LANG == 'EN') SETM= '```Change your bot messages [ add , kick , promote , demote , block , unblock , leave ]```'
if (global.LANG == 'SI') SETM= '```ඔබගේ බොට්ගේ පනිවිඩය වෙනස් කිරීමට [ add , kick , promote , demote , block , unblock , leave ] ```'
var DELM = ''
if (global.LANG == 'EN') DELM= '```delete your message [ add , kick , promote , demote , block , unblock , leave ]```'
if (global.LANG == 'SI') DELM= '```ඔබ දැමූ පනිවිඩ මකාදැමීමට [ add , kick , promote , demote , block , unblock , leave ]```'
var DELL = ''
if (global.LANG == 'EN') DELL= '```Use default [ welcome , goodbye , alive ] messages```'
if (global.LANG == 'SI') DELL= '```Default [ welcome , goodbye , alive ] පනිවිඩ බාවිත කිරීමට```'

prefix = '.'
anu = `*◯───────[ OWNER MENU ]───────◯*

╭⛒  *ᴏᴡɴᴇʀ* ${global.ownernma}
├⛒  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
╰⛒  *ᴛɪᴍᴇ* ${time}

${M_E} *${prefix}join*   
    ${D_E}  ${JOIN}
${M_E} *${prefix}leave*   
    ${D_E}  ${LEAVE}
${M_E} *${prefix}setbotpp*   
    ${D_E}  ${SETPP}
${M_E} *${prefix}block*   
    ${D_E}  ${BLOCK}
${M_E} *${prefix}unblock*   
    ${D_E}  ${UNBLOCK}
${M_E} *${prefix}bcgroup*   
    ${D_E}  ${BCGRP}
${M_E} *${prefix}bcall*   
    ${D_E}  ${BCALL}
${M_E} *${prefix}setalive*   
    ${D_E}  ${ALIVEM}
${M_E} *${prefix}setwelcome*   
    ${D_E}  ${WELCOMEM}
${M_E} *${prefix}setgoodbye*   
    ${D_E}  ${GOODBYEM}
${M_E} *${prefix}setmessage*   
    ${D_E}  ${SETM}
${M_E} *${prefix}deletemessage*   
    ${D_E}  ${DELM}
${M_E} *${prefix}delete*   
    ${D_E}  ${DELL}


    
*──────────◯*
`
                      next = Lang.NEXT_BUTTON
back = Lang.BACK_BUTTON
   
   footer = global.botnma
                 buttons = [
                    {buttonId: `elisasistemmenu`, buttonText: {displayText: back}, type: 1},
                    {buttonId: `about `, buttonText: {displayText: 'ǫᴜᴇᴇɴ ᴇʟɪsᴀ'}, type: 1}
                    
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/f9ef7247406e4a86c3a77.jpg' },
                    caption: anu,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
               ElisaBotMd.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                   /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/f9ef7247406e4a86c3a77.jpg' } }, { upload:   ElisaBotMd.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: anu ,
                                              hydratedFooterText: global.botnma ,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                      url: 'https://youtube.com/c/MRNIMAOFC'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: `${back}` ,
                                                      id: 'logomenu'
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: `ᴀʙᴏᴜᴛ ᴇʟɪsᴀ` ,
                                                      id: 'about'
                                                      }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    ElisaBotMd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                            */  }
                  break
         /*  case 'elisaallmenu': {  
                    await ElisaBotMd.sendMessage(from, { react: { text: `🗒`️, key: m.key }})
 const anu = `
┏━━━━━━━━━━━━✿
┃⦁ 𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚 𝐏𝐮𝐛𝐥𝐢𝐜 
┃⦁ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 - 𝐕1 𝐛𝐞𝐭𝐚
┃⦁ 𝐖𝐨𝐫𝐤 𝐓𝐲𝐩𝐞 - 𝐩𝐮𝐛𝐥𝐢𝐜 
┃⦁ 𝐑𝐮𝐧 𝐓𝐢𝐦𝐞 - ${runtime(process.uptime())}
┗━━━━━━━✿
  *ᴀʟʟ ᴍᴇɴᴜ ⟱*

    ╭──❰💃 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 💃❱
    │🌋 ${prefix}grouplink
    │🌋 ${prefix}ephemeral
    │🌋 ${prefix}setgrouppp
    │🌋 ${prefix}setname
    │🌋 ${prefix}group
    │🌋 ${prefix}editinfo
    │🌋 ${prefix}grupinfo
    │🌋 ${prefix}add
    │🌋 ${prefix}kick
    │🌋 ${prefix}promote
    │🌋 ${prefix}demote
    ╰────────────⦁

    ╭──❰ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 ❱
    │🌍 ${prefix}tiktok
    │🌍 ${prefix}instagram
    │🌍 ${prefix}ig2
    │🌍 ${prefix}igreels
    │🌍 ${prefix}igtv
    │🌍 ${prefix}twitter
    │🌍 ${prefix}twittermp3
    │🌍 ${prefix}ytmp3
    │🌍 ${prefix}ytmp4
    │🌍 ${prefix}getmusic
    │🌍 ${prefix}getvideo
    ╰────────────⦁

    ╭──❰ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 ❱
    │💮 ${prefix}play
    │💮 ${prefix}yts
    │💮 ${prefix}google
    │💮 ${prefix}gimage
    │💮 ${prefix}pinterest
    │💮 ${prefix}wallpaper
    │💮 ${prefix}wikimedia
    │💮 ${prefix}ytsearch
    ╰────────────⦁

    ╭──❰ 𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨 ❱
    │🧱 ${prefix}coffee
    │🧱 ${prefix}couplepp
    ╰─────────────⦁
 
    ╭──❰ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 ❱
    │🧚‍♀️ ${prefix}couple
    │🧚‍♀️ ${prefix}mysoulmate
    │🧚‍♀️ ${prefix}math
    ╰────────────⦁

    ╭──❰ 𝗩𝗢𝗜𝗖𝗘 𝗠𝗘𝗡𝗨 ❱
    │🎙️ ${prefix}bass
    │🎙️ ${prefix}blown
    │🎙️ ${prefix}deep
    │🎙️ ${prefix}earrape
    │🎙️ ${prefix}fast
    │🎙️ ${prefix}fat
    │🎙️ ${prefix}nightcore
    │🎙️ ${prefix}reverse
    │🎙️ ${prefix}robot
    │🎙️ ${prefix}slow
    │🎙️ ${prefix}squirrel
    ╰────────────⦁
                    
    ╭──❰ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 ❱
    │💱 ${prefix}toimage
    │💱 ${prefix}removebg
    │💱 ${prefix}sticker
    │💱 ${prefix}emojimix
    │💱 ${prefix}tovideo
    │💱 ${prefix}togif
    │💱 ${prefix}tourl
    │💱 ${prefix}ebinary
    │💱 ${prefix}dbinary
    ╰─────────────⦁
                  
    ╭──❰ *RANDOM ANIME* ❱
    │♨⃞  ${prefix}loli
    │♨⃞  ${prefix}neko
    │♨⃞  ${prefix}waifu
    │♨⃞  ${prefix}shinobu
    │♨⃞  ${prefix}megumin
    │♨⃞  ${prefix}bully
    │♨⃞  ${prefix}cuddle
    │♨⃞  ${prefix}cry
    │♨⃞  ${prefix}hug
    │♨⃞  ${prefix}awoo
    │♨⃞  ${prefix}kiss
    │♨⃞  ${prefix}lick
    │♨⃞  ${prefix}pat
    │♨⃞  ${prefix}smug
    │♨⃞  ${prefix}bonk
    │♨⃞  ${prefix}yeet
    │♨⃞  ${prefix}blush
    │♨⃞  ${prefix}smile
    │♨⃞  ${prefix}wave
    │♨⃞  ${prefix}highfive
    │♨⃞  ${prefix}handhold
    │♨⃞  ${prefix}nom
    │♨⃞  ${prefix}bite
    │♨⃞  ${prefix}glomp
    │♨⃞  ${prefix}slap
    │♨⃞  ${prefix}kill
    │♨⃞  ${prefix}happy
    │♨⃞  ${prefix}wink
    │♨⃞  ${prefix}poke
    │♨⃞  ${prefix}dance
    │♨⃞  ${prefix}cringe
    ╰─────────────⦁
    ╭──❰ 𝗠𝗜𝗦𝗖 𝗠𝗘𝗡𝗨 ❱
    │🪐 ${prefix}speedtest
    │🪐 ${prefix}ping
    │🪐 ${prefix}owner
    │🪐 ${prefix}donate
    │🪐 ${prefix}menu
    │🪐 ${prefix}delete
    │🪐 ${prefix}chatinfo
    │🪐 ${prefix}quoted
    │🪐 ${prefix}listpc
    │🪐 ${prefix}listgc
    │🪐 ${prefix}listonline
    │🪐 ${prefix}report
    ╰─────────────⦁
    ╭──❰ 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗠𝗘𝗡𝗨 ❱
    │🗂️ ${prefix}setcmd
    │🗂️ ${prefix}listcmd
    │🗂️ ${prefix}delcmd
    │🗂️ ${prefix}lockcmd
    │🗂️ ${prefix}addmsg
    │🗂️ ${prefix}listmsg
    │🗂️ ${prefix}getmsg
    │🗂️ ${prefix}delmsg
    ╰─────────────⦁                                                                     
    ╭──❰ 𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗖𝗛𝗔𝗧 ❱
    │🔲 ${prefix}start
    │🔲 ${prefix}next
    │🔲 ${prefix}stop
    ╰─────────────⦁
╭────❰ 𝙇𝙊𝙂𝙊 𝙈𝙀𝙉𝙐 ❱   
│💠${prefix}candy
│💠${prefix}blackpinkneon
│💠${prefix}deepsea
│💠${prefix}scifi
│💠${prefix}fiction
│💠${prefix}berry
│💠${prefix}fruitjuice
│💠${prefix}biscuit
│💠${prefix}wood
│💠${prefix}chocolate
│💠${prefix}matrix
│💠${prefix}blood
│💠${prefix}halloween
│💠${prefix}wicker
│💠${prefix}darkgold
│💠${prefix}firework
│💠${prefix}skeleton
│💠${prefix}sand
│💠${prefix}glue
│💠${prefix}leaves
│💠${prefix}magma
│💠${prefix}lava
│💠{prefix}rock
│💠${prefix}bloodglas
│💠${prefix}underwater
│💠${prefix}textmaker
│💠${prefix}honey
│💠${prefix}ice
│💠${prefix}watercolor
│💠${prefix}multicolor
│💠${prefix}snow
│💠${prefix}harrypot
│💠${prefix}harrypotter
│💠${prefix}brokenglass
│💠${prefix}waterpipe
│💠${prefix}spooky
│💠${prefix}circuit
│💠${prefix}metallic
│💠${prefix}demon
│💠${prefix}sparklechristmas
│💠${prefix}christmas
│💠${prefix}3dchristmas
│💠${prefix}3dbox
│💠${prefix}waterdrop
│💠${prefix}lion2
│💠${prefix}papercut
│💠${prefix}transformer
│💠${prefix}neondevil
│💠${prefix}3davengers
│💠${prefix}3dstone
│💠${prefix}3dstone2
│💠${prefix}summertime
│💠${prefix}thunder
│💠${prefix}window
│💠${prefix}graffiti
│💠${prefix}graffitibike
│💠${prefix}pornhub
│💠${prefix}glitch
│💠${prefix}blackpink
│💠${prefix}glitch2
│💠${prefix}glitch3
│💠${prefix}3dspace
│💠${prefix}lion
│💠${prefix}3dneon
│💠${prefix}greenneon
│💠${prefix}bokeh
│💠${prefix}holographic
│💠${prefix}bear
│💠${prefix}wolf
│💠${prefix}joker
│💠${prefix}dropwater
│💠${prefix}dropwater2
│💠${prefix}thewall
│💠${prefix}neonlight
│💠${prefix}natural
│💠${prefix}carbon
│💠${prefix}pencil
│💠${prefix}blackpink2
│💠${prefix}neon
│💠${prefix}neonlight2
│💠${prefix}toxic
│💠${prefix}strawberry
│💠${prefix}discovery
│💠${prefix}1917
│💠${prefix}sci_fi
│💠${prefix}ancient
│💠${prefix}fabric
│💠${prefix}hoorror
│💠${prefix}whitebear
│💠${prefix}juice
│💠${prefix}batman
│💠${prefix}multicolor
│💠${prefix}collwall
│💠${prefix}wonderful
│💠${prefix}cool
│💠${prefix}sketch
│💠${prefix}marvel
│💠${prefix}foggy
│💠${prefix}writing
│💠${prefix}halloweenfire
│💠${prefix}halloween
│💠${prefix}watercolor
│💠${prefix}classic
└──────────⦁

    ╭───❰ 𝗘𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨 ❱
    │❶ ${prefix}ffcover
    │❷ ${prefix}crossfire
    │❸ ${prefix}galaxy
    │❹ ${prefix}glass
    │❺ ${prefix}neon
    │❻ ${prefix}beach
    │❼ ${prefix}blackpink
    │❽ ${prefix}igcertificate
    │❾ ${prefix}ytcertificate
    └───────────⦁
    ╭──❰ 𝗦𝗬𝗦𝗧𝗘𝗠 𝗠𝗘𝗡𝗨 ❱
    │⚙️ ${prefix}antilink
    │⚙️ ${prefix}mute
    │⚙️ ${prefix}antiwame
    ╰─────────────⦁
    ╭───❰ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ❱
    │👤 ${prefix}chat
    │👤 ${prefix}join
    │👤 ${prefix}leave
    │👤 ${prefix}setbotpp
    │👤 ${prefix}block
    │👤 ${prefix}unblock
    │👤 ${prefix}bcgroup
    │👤 ${prefix}bcall
    ╰────────────⦁`
    
    const templateButtons = [
  {index: 1, urlButton: {displayText: '⭐ Star Baileys on GitHub!', url: 'https://github.com/adiwajshing/Baileys'}},
  {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+1 (234) 5678-901'}},
  {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}},
]

const buttonMessage = {
    text: anu ,
    footer: 'Hello World',
    templateButtons: templateButtons,
    image: {url: 'https://telegra.ph/file/348467f5557c3b1e15f37.jpg'}
}

const sendMsg = await ElisaBotMd.sendMessage(m.chat, templateMessage)
    
    
    
    break
            
case 'test': {


const buttons = [
                    {index: 1, urlButton: {displayText: '⭐ Star Baileys on GitHub!', url: 'https://github.com/adiwajshing/Baileys'}},
                    {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+1 (234) 5678-901'}},
                    {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}}

                ]
            const buttonMessage = {
                    image: { url: 'https://telegra.ph/file/348467f5557c3b1e15f37.jpg' },
                    caption: `🌍`,
                    footer: `𝘘𝘜𝘌𝘌𝘕  𝘌𝘓𝘐𝘚𝘈  -  𝘝2`,
                    buttons: buttons,
                    headerType: 4
                }
                

const templateButtons = [
  {index: 1, urlButton: {displayText: '⭐ Star Baileys on GitHub!', url: 'https://github.com/adiwajshing/Baileys'}},
  {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+1 (234) 5678-901'}},
  {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}},
]

const buttonMessage = {
    text: 'TEST111' ,
    footer: 'Hello World',
    templateButtons: templateButtons,
    image: {url: 'https://telegra.ph/file/348467f5557c3b1e15f37.jpg'}
}

const sendMsg = await ElisaBotMd.sendMessage(m.chat, buttonMessage)
    
      }     */ 
                  case 'about': {
                  anu = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')
                    G_LINK = anu.PUBLIC_GROUP
                 //const anu2 = await axios.get(`https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json`)
                 
                 
const msg = `*👸 𝑄𝑈𝐸𝐸𝑁 𝐸𝐿𝐼𝑆𝐴 𝑉2 👸*


*👨‍💻 ᴅᴇᴠᴏʟᴏᴘᴇʀ :* ᴍʀ ɴɪᴍᴀ
*📡 ᴡᴇʙ ᴀᴘɪ :* ʙᴀɪʟɪʏᴇs
*🦄 ᴡᴇʙsɪᴛᴇ :* http://www.queenelisa.42web.io

*[ ɴɪᴍᴀ ]  💭*
✓ ǫᴜᴇᴇɴ ᴇʟɪsᴀ ʙᴏᴛ ʙᴀsᴇ ɪs ɢᴏᴊᴏ , ᴛʜᴀɴᴋs ғᴏʀ ᴀʟʟ ʜᴇʟᴘᴇʀs | _@sᴀɴᴜᴡᴀ @sʟʀᴇᴀʟᴛᴇᴄʜ @ᴅᴀʀᴋᴀʟᴘʜᴀ  @ɪsᴜʀᴜ_ | *ғʀᴏ ʜᴇʟᴘs 💞*
✓ ɴᴏ ᴀɴʏ ǫᴜᴇᴇɴ ᴇʟɪsᴀ ᴛᴇᴀᴍ

*😎 ʜᴏᴡ ʏᴏᴜ ᴄᴀɴ ʜᴇʟᴘ ᴍʀ ɴɪᴍᴀ ᴏғᴄ*

*sᴜʙsᴄʀɪʙᴇ ʜɪs ᴄʜᴀɴɴᴇʟ : https://youtube.com/c/MRNIMAOFC*
`
    const templateButtons = [
    {index: 1, urlButton: {displayText: '𝗕𝗢𝗧 𝗜𝗡𝗦𝗧𝗔𝗟𝗟', url: 'https://github.com/darkmakerofc/Queen-Elisa-Md-V2'}},
    {index: 2, urlButton: {displayText: '𝗪𝗔𝗧𝗖𝗛 𝗩𝗜𝗗𝗘𝗢', url: G_LINK }},
    {index: 3, quickReplyButton: {displayText: '𝗤𝘂𝗲𝗲𝗻 𝗘𝗹𝗶𝘀𝗮 𝗣𝘂𝗯𝗹𝗶𝗰 𝗚𝗿𝗼𝘂𝗽', id: 'publicgroup'}},
]

const templateMessage = {
    image: {url: 'https://telegra.ph/file/7390dd698fa45dacbdba8.jpg'},
    caption: msg,
    footer: 'ǫᴜᴇᴇɴ ᴇʟɪsᴀ ᴡᴀ ʙᴏᴛ ᴍᴅ',
    templateButtons: templateButtons,
    headerType: 4
}
     
     await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: m })   

await ElisaBotMd.sendMessage(from, { react: { text: `❤`, key: m.key }})  
await new Promise(r => setTimeout(r, 5000))            
await ElisaBotMd.sendMessage(from, { react: { text: `🧡`, key: m.key }})   
await new Promise(r => setTimeout(r, 5000))           
await ElisaBotMd.sendMessage(from, { react: { text: `💛`, key: m.key }})  
await new Promise(r => setTimeout(r, 5000))            
await ElisaBotMd.sendMessage(from, { react: { text: `💚`, key: m.key }})   
await new Promise(r => setTimeout(r, 5000))           
await ElisaBotMd.sendMessage(from, { react: { text: `💙`, key: m.key }})   
await new Promise(r => setTimeout(r, 5000))           
await ElisaBotMd.sendMessage(from, { react: { text: `💜`, key: m.key }})   
await new Promise(r => setTimeout(r, 5000))           
await ElisaBotMd.sendMessage(from, { react: { text: `🤎`, key: m.key }})   
await new Promise(r => setTimeout(r, 5000))           
await ElisaBotMd.sendMessage(from, { react: { text: `🖤`, key: m.key }})    
await new Promise(r => setTimeout(r, 5000))          
await ElisaBotMd.sendMessage(from, { react: { text: `🤍`, key: m.key }})   
await new Promise(r => setTimeout(r, 5000))           
await ElisaBotMd.sendMessage(from, { react: { text: `💖`, key: m.key }})              
                 }
                 break
                  case 'thank':   {
                          await ElisaBotMd.sendMessage(from, { react: { text: `❤`, key: m.key }})
                  reply(`*𝚃𝚑𝚊𝚗𝚔𝚜 𝚏𝚛𝚘 𝚌𝚑𝚘𝚘𝚜𝚒𝚗𝚐 𝙴𝚕𝚒𝚜𝚊 𝙱𝚘𝚝 𝙼𝚍 💞*
                  
𝙿𝚕𝚎𝚊𝚜𝚎 𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙼𝚁 𝙽𝙸𝙼𝙰 𝚈𝚃 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 : *https://www.youtube.com/c/MRNIMAOFC*
*𝚒𝚏 𝚈𝚘𝚞 𝚆𝚊𝚗𝚝 𝙼𝚊𝚔𝚎 𝙱𝚘𝚝 𝚟𝚒𝚍𝚎𝚘 𝚒𝚗 𝚖𝚢 𝚌𝚑𝚊𝚗𝚗𝚎𝚕 ♥️*
                  `)
                  }
                  break
                  case 'publicgroup' : {
                   const anu = await fetchJson ('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')
const msg =  `*👸 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙿𝚄𝙱𝙻𝙸𝙲 𝙶𝚁𝙾𝚄𝙿 👸*

${anu.PUBLIC_GROUP_RULES}

`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'ᴊᴏɪɴ ɴᴏᴡ', url: 'https://chat.whatsapp.com/BbIpvkRD4qP6xKckb8cpT0'}},
    {index: 2, urlButton: {displayText: 'sᴜʙsᴄʀɪʙᴇ', url: 'https://youtube.com/c/MRNIMAOFC'}}
    
    ]

const templateMessage = {
    text: msg,
    footer: 'ＱＵＥＥＮ ＥＬＩＳＡ Ｖ2',
    templateButtons: templateButtons
}

const sendｍsg = await ElisaBotMd.sendMessage(m.chat, templateMessage, { quoted: m })   

}
                  break
                              default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    ElisaBotMd.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    }
    catch (err) {
       await ElisaBotMd.sendMessage(m.chat, { text : `${err}` })
       await ElisaBotMd.sendMessage(mek.key.remoteJid , { react: { text: `⚠️`, key: m.key }})          
     
       //m_reply(err)
       
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
// ttdownnima@gmail.com - 7518-b675-9944 (tiktok download api)