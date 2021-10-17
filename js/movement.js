const movement = {
    moveForward: function () {
        let currentCell = document.querySelector('.cellCurrent');
        currentCell.classList.remove('cellCurrent');
        const currentRow = currentCell.parentElement;
        const indexOfCurrentCell = Array.from(currentRow.children).indexOf(currentCell);
        console.log(indexOfCurrentCell);

        if (currentCell.classList.contains('cellCurrent-bottom')) {
            currentCell.classList.remove('cellCurrent-bottom');
            let nextRow = currentRow.nextElementSibling;
            const nextCell = nextRow.children.item(indexOfCurrentCell);
            // console.log(nextCell);
            nextCell.classList.add('cellCurrent', 'cellCurrent-bottom');
        } else if (currentCell.classList.contains('cellCurrent-top')) {
            currentCell.classList.remove('cellCurrent-top');
            let previousRow = currentRow.nextElementSibling;
            const nextCell = previousRow.children.item(indexOfCurrentCell);
            // console.log(nextCell);
            nextCell.classList.add('cellCurrent', 'cellCurrent-top');
        } else if (currentCell.classList.contains('cellCurrent-left')) {
            currentCell.classList.remove('cellCurrent-left');
            // console.log(currentCell.previousElementSibling);
            currentCell.previousElementSibling.classList.add('cellCurrent', 'cellCurrent-left');
        } else {
            currentCell.classList.remove('cellCurrent-right');
            currentCell.nextElementSibling.classList.add('cellCurrent', 'cellCurrent-right');
        }
    },

    turnRight: function () {
        const currentCell = document.querySelector('.cellCurrent');
        if (currentCell.classList.contains('cellCurrent-right')){
            currentCell.classList.remove('cellCurrent-right', 'cellCurrent-top');
            currentCell.classList.add('cellCurrent-bottom');
        } else {
            currentCell.classList.remove('cellCurrent-top');
            currentCell.classList.add('cellCurrent-right');
        }
    },

    turnLeft: function () {
        const currentCell = document.querySelector('.cellCurrent');
        if (currentCell.classList.contains('cellCurrent-left')){
            currentCell.classList.remove('cellCurrent-left', 'cellCurrent-bottom');
            currentCell.classList.add('cellCurrent-top');
        } else {
            currentCell.classList.remove('cellCurrent-bottom');
            currentCell.classList.add('cellCurrent-left');
        }
    }
}