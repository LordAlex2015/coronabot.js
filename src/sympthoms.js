const { MessageEmbed } = require('discord.js')
//Copyright 2020 © LordAlex2015

exports.symp = async(message) => {
    const embed = new MessageEmbed()
    .setTitle(`COVID-19 Sympthoms`)
    .setDescription('The COVID-19 virus affects different people in different ways.  COVID-19 is a respiratory disease and most infected people will develop mild to moderate symptoms and recover without requiring special treatment.  People who have underlying medical conditions and those over 60 years old have a higher risk of developing severe disease and death.\n\nCommon symptoms include:\n\nfever\n-tiredness\n-dry cough.\n\nOther symptoms include:\n\nshortness of breath\n-aches and pains\n-sore throat\n-and very few people will report diarrhoea, nausea or a runny nose.\n\nPeople with mild symptoms who are otherwise healthy should self-isolate and contact their medical provider or a COVID-19 information line for advice on testing and referral.\n\nPeople with fever, cough or difficulty breathing should call their doctor and seek medical attention.')
    .setFooter(`Information Source: https://www.who.int/health-topics/coronavirus`)
    message.channel.send(embed)

}