const { MessageEmbed } = require('discord.js')
//Copyright 2020 © LordAlex2015

exports.overview = async(message) => {
    const embed = new MessageEmbed()
    .setTitle(`COVID-19 Overview`)
    .setDescription('Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.\n\nMost people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.\n\nThe best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face.\n\nThe COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).\n\nAt this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available.')
    .setFooter(`Information Source: https://www.who.int/health-topics/coronavirus`)
    message.channel.send(embed)
}