const board = {
    init: function () {
        board.drawBoard();
    },

    drawBoard: function (numberOfRowsParam = 4, numberOfCellsParam = 6) {
        const boardElement = document.querySelector('#board');
        // console.log(boardElement);
        for (let nbRows = 1; nbRows <= numberOfRowsParam; nbRows++) {
            boardElement.append(board.drawRow(nbRows, numberOfCellsParam));
        }
        const firstRowElement = boardElement.firstElementChild;
        const lastRowElement = boardElement.lastElementChild;
        // console.log(firstRowElement, lastRowElement);
        firstRowElement.firstElementChild.classList.add('cellStart', 'cellCurrent');
        lastRowElement.lastElementChild.classList.add('cellEnd');

        movement.moveForward();
        movement.turnRight();
        movement.moveForward();
    },

    drawRow: function(numberOfRows, numberOfCells) {
        const divElement = document.createElement('div');
        divElement.id = 'row' + numberOfRows;
        divElement.classList.add('cellRow');
        for (let cell = 1; cell <= 6; cell++) {
            divElement.append(board.drawCell(numberOfCells))
        }
        return divElement;
    },

    drawCell: function () {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        return cellElement;
    }

}