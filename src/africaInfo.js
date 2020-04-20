const { MessageEmbed } = require('discord.js')
//Copyright 2020 © LordAlex2015

exports.africaInfoFR = async(message) => {

var unirest = require("unirest");

var req = unirest("GET", "https://covid19-data.p.rapidapi.com/geojson-af");

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

    res.body.features.forEach((country) => {
        europeTotCon = europeTotCon + parseInt(country.properties.confirmed) 
        europeTotdi = europeTotdi + parseInt(country.properties.deaths) 
        europeTotRec = europeTotRec + parseInt(country.properties.recovered)
        europeTotAc = europeTotAc + parseInt(country.properties.active)
    })
    const embed = new MessageEmbed()
    .setTitle('Coronavirus INFO')
    .addField('Cas confirmé en Afrique:',`${europeTotCon} cas`)
    .addField('Nombre de malade actif en Afrique:',`${europeTotAc} actifs`)
    .addField('Nombre de décès en Afrique:',`${europeTotdi} décès`)
    .addField('Nombre de guéris en Afrique:',`${europeTotRec} guéris`)
    .setThumbnail('https://i.ibb.co/6v242Ym/coronavirus.png')
    .setTimestamp()
    
    message.channel.send(embed)
});

}

exports.africaInfoEn = async(message) => {
    var unirest = require("unirest");

var req = unirest("GET", "https://covid19-data.p.rapidapi.com/geojson-af");

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

    res.body.features.forEach((country) => {
        europeTotCon = europeTotCon + parseInt(country.properties.confirmed) 
        europeTotdi = europeTotdi + parseInt(country.properties.deaths) 
        europeTotRec = europeTotRec + parseInt(country.properties.recovered)
        europeTotAc = europeTotAc + parseInt(country.properties.active)
    })
    const embed = new MessageEmbed()
    .setTitle('Coronavirus INFO')
    .addField('Confirmed case in Africa',`${europeTotCon} cases`)
    .addField('Number of active patient in Africa:',`${europeTotAc} active`)
    .addField('Number of deaths in Africa:',`${europeTotdi} deaths`)
    .addField('Number of healed in Africa:',`${europeTotRec} healed`)
    .setThumbnail('https://i.ibb.co/6v242Ym/coronavirus.png')
    .setTimestamp()
    
    message.channel.send(embed)
});
}

