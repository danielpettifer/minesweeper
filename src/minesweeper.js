const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	const board = [];
	// do this action a certain number of times **for loop** use descriptive variable names
	for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex ++) {
		// create the board array
		const row = [];
		// add another loop here for the 
		for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex ++) {
			row.push(' ');
		}
		board.push(row);
	}
	// make sure you return
	return board;
};

console.log(generatePlayerBoard(5,3));