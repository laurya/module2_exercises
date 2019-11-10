console.log("playgroundTS");

class SlothMachine {

    private coins: number = 0;
    private prize: boolean;
    private roll: number;
    private winPrize: boolean[];

    private generar() : boolean {
        let turnRoll: boolean;
        this.roll = Math.floor(Math.random() * 2);
        
        if(this.roll == 0){
            turnRoll = false;
        }
        else{turnRoll = true;}
        return turnRoll;
      }

    public play (){
        this.winPrize = [];
        let contPrize: number = 0;
        this.coins++;

        for(let i:number = 0; i<3; i++){
            this.winPrize[i]=this.generar();
            if(this.winPrize[i] == true){
                contPrize++;
            }
        }

        if(contPrize == 3){
            this.winner(this.coins);
        }
        else{
            this.nextTime();
        }
    }

    private winner(num_coins: number){
        console.log(`Congratulations!!!. You won ${num_coins} coins!!`);
        this.coins = 0;
    }

    private nextTime(){
        console.log("Good luck next time!!");
    }
    
} 

const machine1 = new SlothMachine();
