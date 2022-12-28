xdescribe("calculator.js", ()=>{
    //TODOS: specs
    xit('should add numbers to total', function(){
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
        // expect total to be -5;
        calculator.divide(5);
        expect(calculator.total).toBe(5);
    });  
});