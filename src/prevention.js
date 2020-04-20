const { MessageEmbed } = require('discord.js')
//Copyright 2020 © LordAlex2015

exports.prev = async(message) => {
    const embed = new MessageEmbed()
    .setTitle(`COVID-19 Preventions`)
    .setDescription('To prevent infection and to slow transmission of COVID-19, do the following:\n-Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.\n-Maintain at least 1 metre distance between you and people coughing or sneezing.\n-Avoid touching your face.\n-Cover your mouth and nose when coughing or sneezing.\n-Stay home if you feel unwell.\n-Refrain from smoking and other activities that weaken the lungs.\n-Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people.')
    .setFooter(`Information Source: https://www.who.int/health-topics/coronavirus`)
    message.channel.send(embed)

}