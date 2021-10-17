const movement = {
    moveForward: function () {
        const currentCell = document.querySelector('.cellCurrent');
        // console.log(currentCell);

        const nextCell = currentCell.nextElementSibling;
        // console.log(nextCell);
        currentCell.classList.remove('cellCurrent');
        nextCell.classList.add('cellCurrent');
    }
}