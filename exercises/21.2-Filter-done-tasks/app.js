let tasks = [
	{ label: 'Eat my lunch', done: true },
	{ label: 'Make the bed', done: false },
	{ label: 'Have some fun', done: false },
	{ label: 'Finish the replits', done: false },
	{ label: 'Replit the finishes', done: true },
	{ label: 'Ask for a raise', done: false },
	{ label: 'Read a book', done: true },
	{ label: 'Make a trip', done: false }
];

//your code here
	let result = tasks.filter(tasks => tasks.done === true);
	console.log(result);

	//otra opcion similar de escribir la funcion .filter:
	//let done = tasks.filter(function(tasks) {
	//	return tasks.done === true;
	//})
	//console.log(done);

