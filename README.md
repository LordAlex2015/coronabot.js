# coronabot.js
### By: LordAlex2015
### Contact via Discord => ArviX#8443

## Description:
 Display Covid-19 info's

## Dependencies
- discord.js (V12)
- unirest



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
const coronaInfo = require(`coronabot.js`),
prefix  = `!`,
args = message.content.slice(prefix.length).trim().split(/ +/g),
lang = `en` //You can choose fr

//For country's
    if(message.content.startsWith(prefix + `countryInfo`)) {
        coronaInfo.countryInfo(message,args,lang)
    }
//For World, It's the same for : Asia/Europe/USA/Africa
    if(message.content === prefix + `worldInfo`) {
        coronaInfo.worldInfo(message,lang)
    }

```

*Copyright 2020 © LordAlex2015*