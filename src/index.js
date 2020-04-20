//Copyright 2020 © LordAlex2015

const africa = require(`./africaInfo.js`),
asia = require(`./asiaInfo.js`),
country = require(`./countryInfo.js`),
europe = require(`./europeInfo.js`),
usa = require(`./usaInfo.js`),
ww = require(`./worldInfo.js`)
//Copyright 2020 © LordAlex2015

exports.africaInfo = async(message,lang) => {
    if(lang === `fr`) {
        africa.africaInfoFr(message)
    } else {
        africa.africaInfoEn(message)
    }
}
//Copyright 2020 © LordAlex2015

exports.asiaInfo = async(message,lang) => {
    if(lang === `fr`) {
        asia.asiaInfoFr(message)
    } else {
        asia.asiaInfoEn(message)
    }
}
//Copyright 2020 © LordAlex2015

exports.countryInfo = async(message,args,lang) => {
    if(lang === `fr`) {
        country.countryInfoFr(message,args)
    } else {
        country.countryInfoEn(message,args)
    }
}
//Copyright 2020 © LordAlex2015

exports.europeInfo = async(message,lang) => {
    if(lang === `fr`) {
        europe.europeInfoFr(message)
    } else {
       europe.europeInfoEn(message)
    }
}
//Copyright 2020 © LordAlex2015

exports.usaInfo = async(message,lang) => {
    if(lang === `fr`) {
        usa.usaInfoFr(message)
    } else {
       usa.usaInfoEn(message)
    }
}
//Copyright 2020 © LordAlex2015

exports.worldInfo = async(message,lang) => {
    if(lang === `fr`) {
        ww.worldInfoFr(message)
    } else {
        ww.worldInfoEn(message)
    }
}
//Copyright 2020 © LordAlex2015
