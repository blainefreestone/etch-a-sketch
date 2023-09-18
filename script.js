const style = document.createElement('style');
const container = document.querySelector('#container');
const changeSizeBtn = document.querySelector('#change-size-btn');
let gridDivs = [];

function generateNewGrid(size)
{
    // Clear previous grid if there was one.
    while (container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
    gridDivs = [];

    style.innerHTML = `
    .grid-square {
        background-color: gainsboro;
        height: ${500 / size}px;
        width: ${500 / size}px;
    }
    
    .grid-square.colored {
        background-color: black;
    }
    `
    document.head.appendChild(style);

    for (let column = 0; column < size; column++)
    {
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('column');
        columnDiv.setAttribute('data-column', column);

        for (let row = 0; row < size; row++)
        {
            let gridDiv = document.createElement('div');
            gridDiv.classList.add('grid-square');
            gridDiv.setAttribute('data-column', column);
            gridDiv.setAttribute('data-row', row);
            columnDiv.appendChild(gridDiv);
            gridDivs.push(gridDiv);
        }

        container.appendChild(columnDiv);
        
        gridDivs.forEach(gridBox => gridBox.addEventListener('mouseover', updateGridBox));
    }
}

function updateGridBox(e)
{
    e.target.classList.add('colored');
}

changeSizeBtn.addEventListener('click', e => {
    while (true)
    {
        let size = prompt('What size grid would you like?');
        if (isNaN(size) || size > 100)
        {
            alert("Please enter a valid number under 100.")
        }
        generateNewGrid(size);
        break;
    }
})

generateNewGrid(16);