console.log("playgroundTS");

class SlothMachine {

    //fields
    private coins: number = 1;
    private prize: boolean;
    private roll: number;
    private winPrize: boolean[];

    private generar() : boolean {
        let turnRoll: boolean;
        this.roll = Math.floor(Math.random() * 2);
        
        console.log(this.roll);
        if(this.roll == 0){
            turnRoll = false;
        }
        else{turnRoll = true;}
        return turnRoll;
      }

    public play (){
        this.winPrize = [];
        let contPrize: number = 0;
        console.log(`Numero de monedas al entrar a play ${this.coins}`);

        for(let i:number = 0; i<3; i++){
            this.winPrize[i]=this.generar();
            console.log(this.winPrize[i]);
            if(this.winPrize[i] == true){
                contPrize++;
            }
        }
        this.coins++;
        

        console.log(`Numero de trues ${contPrize}`);
        if(contPrize == 3){
            console.log(`Numero de monedas ${this.coins}`);
            this.winner(this.coins);
            console.log("Vamos a ganado y reinicamos");
        }
        else{
            this.nextTime();
        }
    }

    private winner(num_coins: number){
        //cuando ganas reinicia moneda y sale mensaje
        console.log(`Congratulations!!!. You won ${num_coins} coins!!`);
        this.coins = 1;
    }

    private nextTime(){
        //cuando no ganas e incrementas moneda y sale mensaje
        console.log("Good luck next time!!");
    }
    
} 

const machine1 = new SlothMachine();
