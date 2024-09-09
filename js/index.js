document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('table');
  const cells = table.getElementsByTagName('td');

  function handleClick(evt) {
    const target = evt.target;
    if (target.tagName === 'TD') {
      const symbol = target.textContent;
      for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === symbol) {
          cells[i].textContent = '';
        }
      }
    }
  }

  table.addEventListener('click', handleClick);
});
