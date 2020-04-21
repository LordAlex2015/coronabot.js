//Copyright 2020 © LordAlex2015
const info = require(`./src/index.js`)

exports.africaInfo = async(message,lang) => {
    info.africaInfo(message,lang)
}
//Copyright 2020 © LordAlex2015

exports.asiaInfo = async(message,lang) => {
    info.asiaInfo(message,lang)
    
}
//Copyright 2020 © LordAlex2015

exports.countryInfo = async(message,args,lang) => {
    info.countryInfo(message,args,lang)
   
}
//Copyright 2020 © LordAlex2015

exports.europeInfo = async(message,lang) => {
    info.europeInfo(message,lang)
   
}
//Copyright 2020 © LordAlex2015

exports.usaInfo = async(message,lang) => {
    info.usaInfo(message,lang)
   
}
//Copyright 2020 © LordAlex2015

exports.worldInfo = async(message,lang) => {
    info.worldInfo(message,lang)
    
}
//Copyright 2020 © LordAlex2015

exports.overview = async(message,lang) => {
    info.overview(message,lang)
}
//Copyright 2020 © LordAlex2015

exports.prevention = async(message,lang) => {
    info.prev(message,lang)
}
//Copyright 2020 © LordAlex2015

exports.sympthoms = async(message,lang) => {
    info.symp(message,lang)
}
//Copyright 2020 © LordAlex2015

exports.forcedCountryInfo = async(message,country,lang) => {
    info.forceCountry(message,country,lang)
}
//Copyright 2020 © LordAlex2015
