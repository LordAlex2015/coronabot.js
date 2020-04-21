# coronabot.js
### By: LordAlex2015
### Contact via Discord => ArviX#8443

[![NPM](https://nodei.co/npm/coronabot.js.png)](https://nodei.co/npm/coronabot.js/)
[![PATREON](https://www.patreon.com/bePatron?u=34038000)](https://c6.patreon.com/becomePatronButton.bundle.js)

<a href="https://www.patreon.com/bePatron?u=34038000" data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
## Description:
 Display Covid-19 info's

## Dependencies
- discord.js (V12/latest)
- unirest

## Docs 
[https://coronabotjs.arvix.tk/]( https://coronabotjs.arvix.tk/ )

## Code

> Langs: 
> - fr
> - en

### Info's in regions
- **World**
- **Africa**
- **Asia**
- **USA**
- **Europe**
- **Country**

```javascript
const coronaInfo = require('coronabot.js'),
prefix  = '!',
args = message.content.slice(prefix.length).trim().split(/ +/g),
lang = 'en' //You can choose fr
args.shift() //To delete the command
//For country's
    if(message.content.startsWith(`${prefix}countryInfo`)) {
        coronaInfo.countryInfo(message,args,lang)
    }
//For World, It's the same for : Asia/Europe/USA/Africa
    if(message.content === `${prefix}worldInfo`) {
        coronaInfo.worldInfo(message,lang)
    }
//For Sympthoms of COVID-19, It's the same for: overview/prevention
    if(message.content === `${prefix}sympthoms`) {
       coronaInfo.sympthoms(message,lang)
    }
```

*Copyright 2020 © LordAlex2015*