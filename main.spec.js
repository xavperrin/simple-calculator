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
            spyOn(Calculator.prototype, 'add');
            calculate('3+4');
         });
         xit('call subtract');
         xit('call multiply');
         xit('call divide');
         xit('validates operations');
         xit('calls updateResult');
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
