let Calculator = class {

    constructor(){                 
        this.total=0;
    }
   

    add(number){
      return this.total=number+this.total;
    }
    subtract(b){
        return this.total-=b;
      }
    multiply(b){
        return this.total*=b;
      }

    divide(b){
        if(b===0)
         throw new Error(`Cannot divide by zero`); 
        return this.total=this.total/b;
      }
}                                                                                                                    