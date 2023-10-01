/*
Find your Hat
A Codecademy Challenge Project
Built by Benny Mattis to specifications provided by Codecademy
*/

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const randInt = x => Math.floor(Math.random() * x);

class Field {
    constructor(fieldArr) {
        this.fieldArr = fieldArr;
        this.playerLoc = {
            longitude: 0,
            latitude: 0
        };
    }

    print() {
        this.fieldArr[this.playerLoc.latitude][this.playerLoc.longitude] = pathCharacter;
        this.fieldArr.forEach(row => {
            console.log(row.join(''));
        });
    }

    move(dir) {
        switch(dir) {
            case 'N':
                this.playerLoc.latitude--;
                break;
            case 'S':
                this.playerLoc.latitude++;
                break;
            case 'E': 
                this.playerLoc.longitude++;
                break;
            case 'W':
                this.playerLoc.longitude--;
                break;
            default:
                console.log('That is not a valid direction. Enter N, S, E, or W to move.');
                break;
        }
        console.log("moved " + dir);
    }

    playerAdjacentTile(dir) {
        try {
            switch(dir) {
                case 'N':
                    return this.fieldArr[this.playerLoc.latitude - 1][this.playerLoc.longitude]
                case 'S':
                    return this.fieldArr[this.playerLoc.latitude + 1][this.playerLoc.longitude]
                case 'E': 
                    return this.fieldArr[this.playerLoc.latitude][this.playerLoc.longitude + 1]
                case 'W':
                    return this.fieldArr[this.playerLoc.latitude][this.playerLoc.longitude - 1];
                default:
                   
                return 'invalid direction';
            }
        } catch {return 'edge'};
    }

    static generateField(height, width, holeyness = .25) {
        let result = new Array(height);
        for (let i = 0; i < height; i++) {
            let row = new Array(width);
            for (let j = 0; j < width; j++) {
                Math.random() < holeyness ? row[j] = hole : row[j] = fieldCharacter;
            }
            result[i] = row;
        }
        result[randInt(height)][randInt(width)] = hat;
        return result;
    }
}

function gameLoop(field) {
    let response = 'N';
    while (true) {
        field.print();
        response = prompt('Enter the direction in which you would like to move (N, S, E, W) or type exit.');
        if (response == 'exit') break;
        if (!(response === 'N' || response === 'E' || response === 'S' || response === 'W')){ 
            prompt("Invalid input. Press enter to continue.");
            continue;
        }
        switch (field.playerAdjacentTile(response)) {
            case hat:
                prompt('You win! You found your hat.');
                return;
            case hole:
                prompt('You lose! You fell into a hole.');
                return;
            case fieldCharacter:
                field.move(response);
                break;
            case 'edge':
                prompt('You lose! You wandered off the map.');
                return;
            default:
                prompt('No backtracking!');
                break;
        }
    }
}



/*const testField = new Field([
    [fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, fieldCharacter, hat]
]);*/

const randField = new Field(Field.generateField(20, 20));
prompt('You (*) have lost your hat (^). Navigate the map to try and find it, but don\'t fall into any holes (0)!  And remember, backtracking isn\'t allowed! \nPress ENTER to continue.');
gameLoop(randField);