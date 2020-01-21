"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const eskom_loadshedding_api_1 = require("eskom-loadshedding-api");
console.log('Starting...');
const bot = new Discord.Client();
const commands = {
    '!status': 'Get current Esk0m Loadshedding status',
    '!municipalities': 'List of all Cape Town based Municipalities',
    '!capetown': 'List of all Cape Town based Suburbs',
};
let status;
bot.on('ready', () => {
    console.log('Bot is ready!');
    // TODO Figure out how to save stage
    /* Status.getStatus().then((status: LoadsheddingStage) => {
      this.status = status;
    }); */
});
bot.on('message', (message) => {
    // only respond if message starts with '!'
    if (message.content.substring(0, 1) === '!') {
        // remove the '!' and check
        const msg = message.content.substring(1);
        if (msg === 'cmds') {
            // Send "pong" to the same channel
            message.channel.send('My commands are: ' + JSON.stringify(this.commands, null, 2));
        }
        // send current esk0m status
        if (msg === 'status') {
            // TODO display stage to user
            // bot.users.get(message.author.id).send('Current Esk0m status is: ' + this.status);
        }
        if (msg === 'municipalities') {
            eskom_loadshedding_api_1.Search.getMunicipalities(eskom_loadshedding_api_1.Province.WESTERN_CAPE).then((muns) => {
                // console.log('Western Cape municipalities:', muns.map((el: Municipality) => el))
                message.channel.send('Western Cape Mun: ' +
                    muns.map((el) => el.id + ' => ' + el.name + '\n'));
            });
        }
        if (msg === 'ctp') {
            /* Search.searchSuburbs('Durbanville')
              .then((results: SearchSuburb[]) =>
                console.log('Searching for "Ashton":', results)
              ); */
            eskom_loadshedding_api_1.Schedule.getFullSchedule(1058542).then((schedules) => {
                // message.channel.send('Durbanville Schedules: ' + JSON.stringify(schedules, null, 2));
                console.log(schedules, 'Schedule');
            });
            eskom_loadshedding_api_1.Schedule.getFullSchedule(1002702)
                .then((schedules) => console.log(JSON.stringify(schedules, null, 4)));
        }
    }
});
bot.login(process.env.API_TOKEN);
//# sourceMappingURL=index.js.map