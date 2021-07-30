import { Wechaty} from 'wechaty'
// import {PuppetPadplus} from 'wechaty-puppet-padplus'
import {WechatyWeixinOpenAI,} from 'wechaty-weixin-openai'
const bot = Wechaty.instance()

bot
    .on('scan', (url)=>{
        let loginUrl = url.replace('qrcode', 'l')
        require('qrcode-terminal').generate(loginUrl)
        console.log(url)
})
    .on('login', user=>{
        console.log(`${user} login`)
    })
    // .on('message', msg => {
    //     if(msg.self()){
    //         return
    //     }
    //     if (msg.type() === Message.Type.Text) {
    //         const text = msg.text()
    //         msg.say(text)
    //         console.log(`Message: ${msg}`)
    //     }
    //     else{
    //         msg.say("What's the hell?")
    //         console.log(`something awesome`)
    //     }
    // })

const openAIToken = 'IXxMvDs6jzyhXbQRqnDiDbdsotDi0w'
const openAIAESKey = '4Z5Hlmv6xbRfB4d2BwvE7LunHYKKOnGsi8MpwwRVAI0'

bot.use(WechatyWeixinOpenAI({
    token: openAIToken,
    encodingAESKey: openAIAESKey
}))

bot.start()