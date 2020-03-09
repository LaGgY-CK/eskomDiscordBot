# eskomDiscordBot (Work-In-Progress)
a *Nice to have* **Discord Bot** to notify South African users when there would be loadshedding in their area, sending out an alert x min before it is scheduled.

This integrates with: [PolarizedIons/eskom-loadshedding-api](https://github.com/PolarizedIons/eskom-loadshedding-api)

# What is Loadshedding
> The deliberate shutdown of electric power in a part or parts of a power-distribution system, generally to prevent the failure of the entire system when the demand strains the capacity of the system.

[dictionary.com](https://www.dictionary.com/browse/load--shedding)

This was first introduced back in 2008 and is still an issue (2020).

# What happens during Loadshedding
As stated above Eskom delibrately shutdown electrical power in certian areas of the country to 'save' power. This is set in **Stages 1 - 8**


> **Stage 1:** ... 3 times over a four day period for two hours at a time, or 3 times over an eight day period for four hours at a time.

> **Stage 2:** ... 6 times over a four day period for two hours at a time, or 6 times over an eight day period for four hours at a time

> **Stage 3:** ... 9 times over a four day period for two hours at a time, or 9 times over an eight day period for four hours at a time.

> **Stage 4:** ... 12 times over a four day period for two hours at a time, or 12 times over an eight day period for four hours at a time.

[loadshedding.eskom](http://loadshedding.eskom.co.za/loadshedding/ScheduleInterpretation)

## Roadmap
- [x] List commands
- [ ] Display stages to user depending on their Suburb
- [ ] Check Eskom schedule every x-min
- [ ] Save user location
- [ ] Send out Alerts (Schedule changes, Imminent loadshedding in their area)
- [ ] Other features ?