/*

El objetivo de este ejercicio es crear una máquina tragaperras utilizando 
clases donde cada vez que juguemos insertemos una moneda. 
Cada máquina tragaperras (instancia)tendrá un contador de monedas que 
automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar 
de forma automática y debe generar tres booleanos aleatorios que 
representarán el estado de las 3 ruletas. 
El usuario habrá ganado en caso de que los tres booleanos sean true , 
y por tanto deberá mostrarse por consola el mensaje:

"Congratulations!!!. You won <número de monedas> coins!!"

y reiniciar las monedas almacenadas, ya que las hemos conseguido y han 
salido de la máquina.
En caso contrario deberá mostrar otro mensaje:

"Good luck next time!!".

Ejemplo de uso

class SlothMachine {
    ***
} 

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"

*/

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
        this.coins = 0;
    }

    private nextTime(){
        //cuando no ganas e incrementas moneda y sale mensaje
        console.log("Good luck next time!!");
    }
    
} 

const machine1 = new SlothMachine();
