const { MessageEmbed } = require('discord.js')
//Copyright 2020 © LordAlex2015


exports.forcecountryInfoFR = async(message,args) => {

var unirest = require("unirest");

var req = unirest("GET", "https://covid19-data.p.rapidapi.com/geojson-ww");

req.headers({
"x-rapidapi-host": "covid19-data.p.rapidapi.com",
"x-rapidapi-key": "1063a7bcf1msh79a5019c7261ebdp132acdjsnc80ee6b08551"
});


req.end(function (res) {
    if (res.error) throw new Error(res.error);
    let europeTotCon = 0
    let europeTotdi = 0
    let europeTotRec = 0
    let europeTotAc = 0
    let name = null
    res.body.features.forEach((country) => {
        if(country.properties.name === args) {
            name = country.properties.name
        europeTotCon = europeTotCon + parseInt(country.properties.confirmed) 
        europeTotdi = europeTotdi + parseInt(country.properties.deaths) 
        europeTotRec = europeTotRec + parseInt(country.properties.recovered)
        europeTotAc = europeTotAc + parseInt(country.properties.active)
        }
    })
    if(!name !== null) {
    const embed = new MessageEmbed()
    .setTitle('Coronavirus INFO')
    .addField(`Cas confirmé | ${name}:`,`${europeTotCon} cas`)
    .addField(`Nombre de malade actif | ${name}:`,`${europeTotAc} actifs`)
    .addField(`Nombre de décès | ${name}:`,`${europeTotdi} décès`)
    .addField(`Nombre de guéris | ${name}:`,`${europeTotRec} guéris`)
    .setThumbnail(`https://i.ibb.co/6v242Ym/coronavirus.png`)
    .setTimestamp()
    
    message.channel.send(embed)
    } else {
        message.reply(`Pays non trouvé!`)
    }
});

}

exports.forcecountryInfoEn = async(message,args) => {
    var unirest = require("unirest");

var req = unirest("GET", "https://covid19-data.p.rapidapi.com/geojson-ww");

req.headers({
"x-rapidapi-host": "covid19-data.p.rapidapi.com",
"x-rapidapi-key": "1063a7bcf1msh79a5019c7261ebdp132acdjsnc80ee6b08551"
});


req.end(function (res) {
    if (res.error) throw new Error(res.error);
    let europeTotCon = 0
    let europeTotdi = 0
    let europeTotRec = 0
    let europeTotAc = 0
    let name = null
    res.body.features.forEach((country) => {
        if(country.properties.name === args) {
            name = country.properties.name
        europeTotCon = europeTotCon + parseInt(country.properties.confirmed) 
        europeTotdi = europeTotdi + parseInt(country.properties.deaths) 
        europeTotRec = europeTotRec + parseInt(country.properties.recovered)
        europeTotAc = europeTotAc + parseInt(country.properties.active)
        }
    })
    if(name === null) {
        message.reply(`Country | Not Found! *(Try in English and the starting letter in upper case^^)*`)
    }else {
    const embed = new MessageEmbed()
    .setTitle('Coronavirus INFO')
    .addField(`Confirmed case in ${name}:`,`${europeTotCon} cases`)
    .addField(`Number of active patient in ${name}:`,`${europeTotAc} active`)
    .addField(`Number of deaths in ${name}:`,`${europeTotdi} deaths`)
    .addField(`Number of healed in ${name}:`,`${europeTotRec} healed`)
    .setThumbnail('https://i.ibb.co/6v242Ym/coronavirus.png')
    .setTimestamp()
    
    message.channel.send(embed)
    }

});
}

