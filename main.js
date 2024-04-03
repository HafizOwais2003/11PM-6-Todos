import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: "what you want to add in your Todos?"
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: "Do you want to add more ?",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
    ;
}
let deleteTask = await inquirer.prompt({
    name: 'index',
    type: 'number',
    message: 'Task ko delete karne ke liye index enter karein:'
});
let index = deleteTask.index;
if (index >= 0 && index < todos.length) {
    todos.splice(index, 1);
    console.log('Task successfully delete ho gaya hai.');
}
else {
    console.log('Invalid index. Task delete nahi hua.');
}
console.log('Updated Todos:');
console.log(todos);
