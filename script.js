const container = document.querySelector('#container');
const gridDivs = [];

for (let column = 0; column < 16; column++)
{
    let columnDiv = document.createElement('div');
    columnDiv.classList.add('column');
    columnDiv.setAttribute('data-column', column);

    for (let row = 0; row < 16; row++)
    {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-square');
        gridDiv.setAttribute('data-column', column);
        gridDiv.setAttribute('data-row', row);
        columnDiv.appendChild(gridDiv);
        gridDivs.push(gridDiv);
    }

    container.appendChild(columnDiv);
}

function updateGridBox(e)
{
    e.target.classList.add('colored');
}

gridDivs.forEach(gridBox => gridBox.addEventListener('mouseover', updateGridBox));