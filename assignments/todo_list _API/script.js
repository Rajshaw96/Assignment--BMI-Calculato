async function fetchTodos(){
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await res.json();
    let output = `
    <button>All Todo List</button>
    <button>Completed Todo List</button>
    <button>Pending Todo List</button>
    <table>
    <tr>
    <th>Id</th>
    <th>User Id</th>
    <th>Todo</th>
    <th>Status</th>
    </tr>
    `
    data.forEach(function(todo, index) {
        output += `<tr>
        <td> ${todo.id}</td>
        <td> ${todo.userId}</td>
        <td> ${todo.title}</td>
        <td> ${todo.completed? 'completed':'Pending'}</td>
        </tr>`
        
    });
    output += `</table>`

    function alterStyle(elem) {
        elem.style.background = 'green';
      }

    document.querySelector('.todos').innerHTML = output;
    }
    fetchTodos();