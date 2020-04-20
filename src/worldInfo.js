const { MessageEmbed } = require('discord.js')
//Copyright 2020 © LordAlex2015


exports.worldInfoFR = async(message) => {

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
   

    res.body.features.forEach((country) => {
        europeTotCon = europeTotCon + parseInt(country.properties.confirmed) 
        europeTotdi = europeTotdi + parseInt(country.properties.deaths) 
        europeTotRec = europeTotRec + parseInt(country.properties.recovered)
       
    })
    const embed = new MessageEmbed()
    .setTitle('Coronavirus INFO')
    .addField('Cas confirmé dans le monde:',`${europeTotCon} cas`)
   
    .addField('Nombre de décès dans le monde:',`${europeTotdi} décès`)
    .addField('Nombre de guéris dans le monde:',`${europeTotRec} guéris`)
    .setThumbnail('https://i.ibb.co/6v242Ym/coronavirus.png')
    .setTimestamp()
    
    message.channel.send(embed)
});

}

exports.worldInfoEn = async(message) => {
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
    

    res.body.features.forEach((country) => {
        europeTotCon = europeTotCon + parseInt(country.properties.confirmed) 
        europeTotdi = europeTotdi + parseInt(country.properties.deaths) 
        europeTotRec = europeTotRec + parseInt(country.properties.recovered)
       
    })
    const embed = new MessageEmbed()
    .setTitle('Coronavirus INFO')
    .addField('Confirmed case in the world:',`${europeTotCon} cases`)
   
    .addField('Number of deaths in the world:',`${europeTotdi} deaths`)
    .addField('Number of healed in the world:',`${europeTotRec} healed`)
    .setThumbnail('https://i.ibb.co/6v242Ym/coronavirus.png')
    .setTimestamp()
    
    message.channel.send(embed)
});
}