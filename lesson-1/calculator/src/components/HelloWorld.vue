<template>
  <div class="hello">
    <input v-model.number="operand1" name="oper1"/>
    <input v-model.number="operand2" name="oper2"/>
    = {{ result }}
    <div>
      <button 
        v-for="op in operations"
        v-bind:key="op"
        @click="calculated(op)"
        :name="op">
        {{ op }}
      </button>
    </div>
    <input type="checkbox" id="keyboard" v-model="showKeyboard">
    <label for="keyboard">Показать экранную клавиатуру</label>
  <div v-show="showKeyboard">
    <button v-for="n in numbers"
    :key="n"
    :id="n"
    @click="toInput(n, operand)"
    class="screen">{{ n }}
    </button>
    <button @click="deleteLast(operand)" name="backspace"> Bs </button>
    
    <form>
      <input type="radio" id="1" value="operand1" v-model="operand">
      <label for="1">operand 1</label>

      <input type="radio" id="2" value="operand2" v-model="operand">
      <label for="2">operand 2</label>
      
    </form>
  </div>
  
  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    operations: ['+', '-', '*', '/', '**', '%'],
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    showKeyboard: false,
    operand: 'operand1',
  }),
  methods: {
    calculated(operation) {
      const { operand1, operand2 } = this;
      const calcOperations = {
        "+": () => operand1 + operand2,
        "-": () => operand1 - operand2,
        "*": () => operand1 * operand2,
        "/": () => operand1 / operand2,
        "**": () => operand1 ** operand2,
        "%": () => Math.trunc(operand1 / operand2),
      };

      this.result = calcOperations[operation]();
    },
    toInput(n, operand) {

      switch (operand) {
        case 'operand1':
          this.operand1 = Number(this.operand1 + n);
          break;
        case 'operand2':
          this.operand2 = Number(this.operand2 + n);
          break;
      }
    
    },

    deleteLast(operand) {
      switch (operand) {
        case 'operand1':
          this.operand1 = this.delNumber(this.operand1);
          break;
        case 'operand2':
          this.operand2 = this.delNumber(this.operand2);
          break;
      }

    },
    delNumber(n) {
      const arr = Array.from(n.toString());
      arr.pop();
      n = Number(arr.join(''));
      return n;
    },
  },
};
</script>


<style modules lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div {
  margin-top: 30px;
}
button {
  margin-right: 10px;
}
</style>
