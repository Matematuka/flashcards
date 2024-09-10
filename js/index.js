document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('table');
  const cells = Array.from(table.getElementsByTagName('td'));
  const originalContent = cells.map((cell) => cell.textContent);

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
          cell.classList.add('cell-hover');
        }
      });
    }
  }

  function handleMouseOut(evt) {
    const target = evt.target;
    if (target.tagName === 'TD') {
      const symbol = target.textContent;
      cells.forEach((cell) => {
        if (cell.textContent === symbol) {
          cell.classList.remove('cell-hover');
        }
      });
    }
  }

  function handleDocumentClick(evt) {
    const target = evt.target;
    if (!table.contains(target)) {
      cells.forEach((cell, index) => {
        cell.textContent = originalContent[index];
      });
    }
  }

  table.addEventListener('click', handleClick);
  table.addEventListener('mouseover', handleMouseOver);
  table.addEventListener('mouseout', handleMouseOut);
  document.addEventListener('click', handleDocumentClick);
});
