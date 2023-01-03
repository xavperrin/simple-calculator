describe('main.js', function(){
   describe('calculate()', function () {
         it('validate expressions when the 1st number is invalid', () => {
            spyOn(window, 'updateResult');
            calculate('a+3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('operation not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
         });
         it('validate expressions when the 2nd number is invalid', () => {
            spyOn(window, 'updateResult'); //.and.stub(); is yhe default, can be omitted
            calculate('3+a');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('operation not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
         });
         it('validate expressions when operation is invalid', function(){
            spyOn(window, 'updateResult');
            calculate('a_3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('operation not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
         });


         it('calls add', function () {
            const spy=spyOn(Calculator.prototype, 'add');
            calculate('3+4');
            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledWith(4);
         });
         it('call subtract', ()=>{
            const sub=spyOn(Calculator.prototype, 'subtract');
            const add=spyOn(Calculator.prototype, 'add');
            calculate('3-4');
            expect(add).toHaveBeenCalledTimes(1);
            expect(add).toHaveBeenCalledWith(3);
            expect(sub).toHaveBeenCalledTimes(1);
            expect(sub).toHaveBeenCalledWith(4);
         });
         it('call multiply', ()=>{
            const add=spyOn(Calculator.prototype, 'add');
            const multi=spyOn(Calculator.prototype, 'multiply');
            calculate('3*8');
            expect(add).toHaveBeenCalledTimes(1);
            expect(add).toHaveBeenCalledWith(3);
            expect(multi).not.toHaveBeenCalledWith(3);
            expect(multi).toHaveBeenCalledTimes(1);
            expect(multi).toHaveBeenCalledWith(8);
         });
         it('call divide', ()=>{
            const add=spyOn(Calculator.prototype, 'add');
            const divide=spyOn(Calculator.prototype, 'divide');
            calculate('15/3');

            expect(add).toHaveBeenCalledTimes(1);
            expect(add).toHaveBeenCalledWith(15);
            expect(divide).not.toHaveBeenCalledWith(15);
            expect(divide).toHaveBeenCalledTimes(1);
            expect(divide).toHaveBeenCalledWith(3);

         });
         it('calls updateResult (example using and.callThrough)', ()=>{
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callThrough();

            calculate('5*6');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(5*6);

         });
      });
   describe('updateResult()', function(){
   beforeAll(function(){
         //executed ONCE before all specs
         element=document.createElement('div');
         element.setAttribute('id', 'result');
         document.body.appendChild(element);
         
         this.element=element

      })
      afterAll(()=>{
         //executed ONCE after all specs
         element=document.getElementById('result');
         document.body.removeChild(this.element);
      it('add result to DOM element', function(){

         updateResult('5');
         expect(this.element.innerText).toBe('5');
      });
   });
});
});
