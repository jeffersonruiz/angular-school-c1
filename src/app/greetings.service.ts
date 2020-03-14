import { LoggerService } from "./logger.service";
import { Injectable } from '@angular/core';

@Injectable()
export class GreetingsService{

    public counter=0;
    
    constructor(private logger:LoggerService){

    }

    handleGreetins(message:string){

        this.counter++;
        this.logger.log(message);

    }

}