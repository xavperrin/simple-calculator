describe("calculator.js", ()=>{
    //TODOS: specs
    it('should add numbers to total', function(){
        //TODOS: Expectations
        const calculator=new Calculator();
        calculator.add(5);
        // expect total to be 5;
        expect(calculator.total).toBe(5);
    });  
    it('should subtract numbers to total', function(){
        //TODOS: Expectations
        const calculator=new Calculator();
        calculator.subtract(5);
        // expect total to be -5;
        expect(calculator.total).toBe(-5);
    });  
    it('should multiply numbers to total', function(){
        //TODOS: Expectations
        const calculator=new Calculator();
        calculator.total=5;
        // expect total to be -5;
        calculator.multiply(6);
        expect(calculator.total).toBe(30);
    });
    
    it('should divide numbers to total', function(){
        //TODOS: Expectations
        const calculator=new Calculator();
        calculator.total=25;
        // expect total to be 5;
        calculator.divide(5);
        expect(calculator.total).toBe(5);
        expect(calculator.total).toBeTruthy();
    });  

    it('should initialize total', function(){
        //TODOS: Expectations
        const calculator=new Calculator();
        
        // expect total to be 0;
        expect(calculator.total).toBe(0);
        expect(calculator.total).toBeFalsy();
    });

    it('can be instantiated', function(){
        //TODOS: Expectations
        const calculator=new Calculator();
        const calculator2=new Calculator();
        // expect total to be truthy;
        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
    });

    it('instantiate unique object', function(){
        //TODOS: Expectations
        const calculator1=new Calculator();
        const calculator2=new Calculator();
        // expect are unique;
        expect(calculator1).not.toBe(calculator2);
        
    });

    it('has common operations', function(){
        //TODOS: Expectations
        const calculator1=new Calculator();
        // expect are unique;
        expect(calculator1.add).toBeDefined();// or not.toBeUndefined()
        expect(calculator1.multiply).toBeDefined();
        expect(calculator1.divide).toBeDefined();
        expect(calculator1.subtract).toBeDefined();
    });
});

describe("convert.js", ()=> {
    it("should convert decimal to hexadecimal", ()=> {
      expect(decimalToHexadecimal(65534)).toEqual("FFFE");
      expect(decimalToHexadecimal(255)).toEqual("FF");
      expect(decimalToHexadecimal(16)).toEqual("10");
      expect(decimalToHexadecimal(10)).toEqual("A");
      expect(decimalToHexadecimal(0)).toEqual("0");
    });
  });