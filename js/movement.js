const movement = {
    moveForward: function () {
        let currentCell = document.querySelector('.cellCurrent');
        const currentRow = currentCell.parentElement;
        const indexOfCurrentCell = Array.from(currentRow.children).indexOf(currentCell);
        console.log(indexOfCurrentCell);

        if (currentCell.classList.contains('cellCurrent-bottom')) {
            let nextRow = currentRow.nextElementSibling;
            const nextCell = nextRow.children.item(indexOfCurrentCell);
            // console.log(nextCell);
            currentCell.classList.remove('cellCurrent', 'cellCurrent-bottom');
            nextCell.classList.add('cellCurrent', 'cellCurrent-bottom');
        } else {
            currentCell.classList.remove('cellCurrent');
            currentCell.nextElementSibling.classList.add('cellCurrent');
        }
    },

    turnRight: function () {
        const currentCell = document.querySelector('.cellCurrent');
        currentCell.classList.toggle('cellCurrent-bottom');
    },
}