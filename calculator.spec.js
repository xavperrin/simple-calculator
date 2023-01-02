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
        //TODOS: Expectations*
        jasmine.addMatchers(customMatchers);//register
        const calculator=new Calculator();
        const calculator2=new Calculator();
        // expect total to be truthy;

        expect(calculator).toBeCalculator();// custom > registred into jasmine
        expect(2).not.toBeCalculator();// expect to fail
        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
        expect(calculator).toEqual(calculator2); 
        expect(calculator.constructor.name).toContain("Calc");

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
    it('can overwrite total', ()=>{
        const calculator=new Calculator();
        calculator.total=null;
        expect(calculator.total).toBeNull();
    })

    it('does not handle NaN', ()=>{
        const calculator=new Calculator;
        calculator.total=20;
        calculator.multiply("a")
       expect(calculator.total).toBeNaN();

    })

    it('does handle divide by zero', ()=>{
        const calculator=new Calculator;
        calculator.total=20;
       
        expect(()=>{calculator.divide(0);}).toThrow();
        expect(()=>{calculator.divide(0);}).toThrowError(Error);
        expect(()=>{calculator.divide(0);}).toThrowError(Error, "Cannot divide by zero");
    })

    it('returns total', ()=>{
        const calculator=new Calculator;
        calculator.total=50;
       
       expect(calculator.add(20)).toBe(70);
       expect(calculator.total).toMatch(/-?\d+/);
       expect(typeof calculator.total).toMatch('number');
       // asymmetric matcher
       // not equal in each side
       
       expect(calculator.total).toEqual(jasmine.anything());
       expect(()=>{}).toEqual(jasmine.anything());// All minus null & undefined
    });

});

describe("convert.js", function() {
    it("should convert decimal to hexadecimal", function() {
      expect(decimal2Hexadecimal(65534)).toEqual("0xFFFE");
      expect(decimal2Hexadecimal(255)).toEqual("0xFF");
      expect(decimal2Hexadecimal(16)).toEqual("0x10");
      expect(decimal2Hexadecimal(10)).toEqual("0xA");
      expect(decimal2Hexadecimal(0)).toEqual("0x0");
    });
    it("should check if Date is Valid", function(){
        expect(isDateValid('December 27, 2022 15:00:00')).toBeTruthy();
        expect(isDateValid('December 32, 2022 15:00:00')).toBeFalsy();
        
    })
    
  });
