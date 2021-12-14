function start() {
  let table = document.getElementById('grid');
  table.onclick = function(event) {
    let target = event.target;
    let comparator;
    let cellNumber = target.cellIndex;
    let tbody = table.tBodies[0];
    let tbodyRowsArr = [];

    if (target.tagName != 'TH') return;

    if (!target.dataset.sort) {
      target.setAttribute('data-sort', 'a-z');
    }

    for (let i = 0; i < table.tHead.rows[0].cells.length; i++) {
      table.tHead.rows[0].cells[i].classList.remove('a-z', 'z-a');
    }


    for (let i = 0; i < tbody.rows.length; i++) {
      let rows = tbody.rows;
      tbodyRowsArr.push({
        row: rows[i],
        value: rows[i].children[cellNumber].innerHTML
      });
    }

    switch (target.dataset.sort) {
      case 'a-z':
        target.setAttribute('data-sort', 'z-a');
        target.classList.add('a-z');
        if (target.dataset.type == 'number') {
          comparator = function(rowA, rowB) {
            return rowA.value - rowB.value;
          };
        } else {
          comparator = function(rowA, rowB) {
            if (rowA.value > rowB.value) return 1;
            return -1;
          };
        }
        break;
      case 'z-a':
        target.classList.add('z-a');
        target.setAttribute('data-sort', 'a-z');
        if (target.dataset.type == 'number') {
          comparator = function(rowA, rowB) {
            return rowB.value - rowA.value;
          };
        } else {
          comparator = function(rowA, rowB) {
            if (rowA.value > rowB.value) return -1;
            return 1;
          };
        }
        break;
    }

    tbodyRowsArr.sort(comparator);

    table.removeChild(tbody);

    for (let i = 0; i < tbodyRowsArr.length; i++) {
      tbody.appendChild(tbodyRowsArr[i].row);
    }

    table.appendChild(tbody);


  };
}