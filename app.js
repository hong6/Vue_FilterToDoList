let todos = [{
  name:"Debug the UI",
  complete: false,
},
{
  name:"Refactor build steps",
  complete: true
},
{
  name:"Update Models",
  complete: false
},
{
  name: "Upgrade Components",
  complete: true
},
{
  name:"Test App",
  complete: false
}
];

new Vue({  
  el:`#app`,  
  template:"#app-template", 
  data:()=>(
      {
          todos,
          text:``,
          showComplete:true,
      }
  ),  
  computed:{
      filteredTodos(){
          return this.todos
              .filter(todo=>this.showComplete ? true : !todo.complete);
      },      
      submitIsDisabled(){
          return this.text == "";
      }
  },  
  methods:{     
      addTodo(){
          todos.push({
              name:this.text,
              complete:false
          });         
          this.text = ``;
      },
  }
});