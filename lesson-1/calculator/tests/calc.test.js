import 'regenerator-runtime/runtime';
// import sinon from 'sinon';
import HelloWorld from '../src/components/HelloWorld.vue';
import { mount } from '@vue/test-utils';
// import { render } from '@vue/server-test-utils';
describe('Calculator input tests', () => {
    test('Test operand1 input value', async () => {
      const wrapper = mount(HelloWorld);
    
      const operand1Input = wrapper.find('input[name=oper1]');
      operand1Input.setValue('1');
    
      expect(wrapper.vm.operand1).toBe(1);
    });
    
    test('Test operand2 input value', async () => {
      const wrapper = mount(HelloWorld);
    
      const operand2Input = wrapper.find('input[name=oper2]');
      operand2Input.setValue('1');
    
      expect(wrapper.vm.operand2).toBe(1);
    });
});
   
describe('Calculator logic test', () => {
    test ('Test sum operation', () => {
        const Wrapper = mount(HelloWorld);

        const operand1 = Wrapper.find('input[name=oper1]');
        operand1.setValue('100');

        const operand2 = Wrapper.find('input[name=oper2]');
        operand2.setValue('5');

        const sumBtn = Wrapper.find('button[name="+"]');
        sumBtn.trigger('click');

        expect(Wrapper.vm.result).toBe(105);
    });
    test ('Test sub operation', () => {
        const Wrapper = mount(HelloWorld);

        const operand1 = Wrapper.find('input[name=oper1]');
        operand1.setValue('100');

        const operand2 = Wrapper.find('input[name=oper2]');
        operand2.setValue('5');

        const sumBtn = Wrapper.find('button[name="-"]');
        sumBtn.trigger('click');

        expect(Wrapper.vm.result).toBe(95);
    });
    test ('Test mult operation', () => {
        const Wrapper = mount(HelloWorld);

        const operand1 = Wrapper.find('input[name=oper1]');
        operand1.setValue('10');

        const operand2 = Wrapper.find('input[name=oper2]');
        operand2.setValue('5');

        const sumBtn = Wrapper.find('button[name="*"]');
        sumBtn.trigger('click');

        expect(Wrapper.vm.result).toBe(50);
    });
    test ('Test div operation', () => {
        const Wrapper = mount(HelloWorld);

        const operand1 = Wrapper.find('input[name=oper1]');
        operand1.setValue('100');

        const operand2 = Wrapper.find('input[name=oper2]');
        operand2.setValue('5');

        const sumBtn = Wrapper.find('button[name="/"]');
        sumBtn.trigger('click');

        expect(Wrapper.vm.result).toBe(20);
    });
    test ('Test trunc operation', () => {
        const Wrapper = mount(HelloWorld);

        const operand1 = Wrapper.find('input[name=oper1]');
        operand1.setValue('10');

        const operand2 = Wrapper.find('input[name=oper2]');
        operand2.setValue('3');

        const sumBtn = Wrapper.find('button[name="%"]');
        sumBtn.trigger('click');

        expect(Wrapper.vm.result).toBe(3);
    });
    test ('Test power operation', () => {
        const Wrapper = mount(HelloWorld);

        const operand1 = Wrapper.find('input[name=oper1]');
        operand1.setValue('10');

        const operand2 = Wrapper.find('input[name=oper2]');
        operand2.setValue('2');

        const sumBtn = Wrapper.find('button[name="**"]');
        sumBtn.trigger('click');

        expect(Wrapper.vm.result).toBe(100);
    });
});
describe('Calculator interface tests', () => {   
    test('When checkbox is checked screen board is shown', () => {
        const Wrapper = mount(HelloWorld);
        Wrapper.find('input#keyboard').setChecked();
        expect(Wrapper.vm.showKeyboard).toBe(true);
    });
    test('Calls function deleteLast when button Bs was clicked', () => {
        const Wrapper = mount(HelloWorld);
        
        const spydeleteLast = jest.spyOn(Wrapper.vm, 'deleteLast');
        Wrapper.find('button[name="backspace"]').trigger('click');
        expect(spydeleteLast).toHaveBeenCalled();
        
    });
    test('Screen keyboard pass number to input operand1', () => {
        const Wrapper = mount(HelloWorld);
        const btns = Wrapper.findAll('button.screen');
        for( let i = 0; i<btns.length; i++) {

            Wrapper.find('input[type=radio][value=operand1]').setChecked();
            Wrapper.vm.operand1 = 0;
            btns.at(i).trigger('click');
            expect(Wrapper.vm.operand1).toBe(i);
        } 
    });
    test('Screen keyboard pass number to input operand2', () => {
        const Wrapper = mount(HelloWorld);
        const btns = Wrapper.findAll('button.screen');
        for( let i = 0; i<btns.length; i++) {
            Wrapper.find('input[type=radio][value=operand2]').setChecked();
            Wrapper.vm.operand2 = 0;
            btns.at(i).trigger('click');
            expect(Wrapper.vm.operand2).toBe(i);
        } 
    });
    test('Radio button set operand', () => {
        const Wrapper = mount(HelloWorld);
        Wrapper.find('input[type=radio][value=operand1]').setChecked();
        expect(Wrapper.vm.operand).toBe('operand1');

        Wrapper.find('input[type=radio][value=operand2]').setChecked();
        expect(Wrapper.vm.operand).toBe('operand2');
    });

})
