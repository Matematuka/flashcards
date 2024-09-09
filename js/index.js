document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('table');
  const cells = Array.from(table.getElementsByTagName('td'));

  function handleClick(evt) {
    const target = evt.target;
    if (target.tagName === 'TD') {
      const symbol = target.textContent;
      cells.forEach((cell) => {
        if (cell.textContent === symbol) {
          cell.textContent = '';
        }
      });
    }
  }

  function handleMouseOver(evt) {
    const target = evt.target;
    if (target.tagName === 'TD') {
      const symbol = target.textContent;
      cells.forEach((cell) => {
        if (cell.textContent === symbol) {
          cell.classList.add('background');
        }
      });
    }
  }

  function handleMouseOut(evt) {
    if (evt.target.tagName === 'TD') {
      const symbol = evt.target.textContent;
      cells.forEach((cell) => {
        if (cell.textContent === symbol) {
          cell.classList.remove('background');
        }
      });
    }
  }

  table.addEventListener('click', handleClick);
  table.addEventListener('mouseover', handleMouseOver);
  table.addEventListener('mouseout', handleMouseOut);
});
