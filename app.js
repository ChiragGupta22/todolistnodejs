import readline from "readline"

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

const todo = [];

const showMenu  = () => {
console.log("1: add  a  task");
console.log("2: view task");
console.log("3: Exit");
rl.question("Choose an option",handleInput)



}

const handleInput = (option) => {
  if(option === "1"){
    rl.question("enter a task", (task) => {
      todo.push(task)
      console.log("task added:",task);
      showMenu()
      
    })
  }
  else if(option === "2"){
    console.log("\n your todo list");
     todo.forEach((task,index) => {
      console.log(`${index+1}. ${task}`);
      
     })
     showMenu()
  }else if(option === "3"){
    console.log('good bye');
    rl.close()
  }
  else{
    console.log("Invalid Option plz try agin");
    showMenu()
    
  }
}

showMenu();