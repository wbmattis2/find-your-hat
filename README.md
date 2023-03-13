# find-your-hat
"Find Your Hat" Codecademy Challenge Project
by Benny Mattis

##Description

This is the result of a guided Challenge Project included on Codecademy's Back-End Engineer career path. Its ultimate purpose is to demonstrate my abilities with the popular JavaScript runtime environment, Node.js. The app functions as a simple game, allowing users to navigate through a maze in order to find their hat.

##Features

The app notifies users when they have entered a name that has already been saved to the planner's contacts, and alerts the user again if they attempt to save such a duplicate. When planning an appointment, users can associate the appointment with a contact among those that have been saved in the planner. The program employs stateful and stateless React function components to achieve the desired result.

##How to Use

First, download the contents of the repository and store those contents in a folder. Ensure you have (installed Node Package Manager)[https://www.codecademy.com/article/setting-up-node-locally], then navigate to the folder containing the project using your command line interface. Enter the command `npm install` in your command line interface and wait for the package manager to finish executing that command. Finally, enter the command `node main` to run the main.js file. The game is played within the command line interface.

The player-character is designated by an asterisk (*). The player can direct this character by entering commands corresponding to the four cardinal directions (N, S, E, W). The player will lose if they fall into a "hole" (O) or if they exit the map. The player wins when they have navigated to their "hat" (^). The challenge lies in the player's inability to backtrack; the hat must be located without backtracking.

##Technologies

This app was made with Node.js.

##Special Thanks

Special thanks to Codecademy for providing the starter code for this project and for helping me learn how to use Node.js.

##License

All rights reserved. By viewing this project solution, you agree not to bypass Codecademy's code of conduct.
