export class LoggerService{
    
    log(msg:string){
        console.log(msg);
    }

    warn(msg:string){
        console.warn(msg);
    }

    error(msg:string){
        console.error(msg);
    }

}