// Важные данные для таблицы. Замените на свои данные!
let tournamentData = [
    { team: "Vitality", M: 3, RW: 55, RL: 28, RD: 27, record: "3-0", E: "v"},
    { team: "The MongolZ", M: 3, RW: 69, RL: 59, RD: 10, record: "3-0", E: "v" },
    { team: "G2", M: 4, RW: 62, RL: 33, RD: 29, record: "3-1", E: "v" },
    { team: "Liquid", M: 4, RW: 72, RL: 52, RD: 20, record: "3-1", E: "v" },
    { team: "Spirit", M: 4, RW: 71, RL: 55, RD: 16, record: "3-1", E: "v" },
      { team: "MOUZ", M: 5, RW: 88, RL: 68, RD: 20, record: "3-2", E: "v" },
    { team: "HEROIC", M: 5, RW: 127, RL: 119, RD: 8, record: "3-2", E: "v" },
     { team: "FaZe", M: 5, RW: 73, RL: 91, RD: -18, record: "3-2", E: "v" },
     { team: "FURIA", M: 5, RW: 104, RL: 100, RD: 4, record: "2-3", E: "v" },
     { team: "Natus Vincere", M: 5, RW: 77, RL: 82, RD: -5, record: "2-3", E: "v" },
    { team: "MIBR", M: 5, RW: 65, RL: 110, RD: -45, record: "2-3", E: "v" },
    { team: "paiN", M: 4, RW: 87, RL: 92, RD: -5, record: "1-3", E: "v" },
    { team: "3DMAX", M: 4, RW: 54, RL: 63, RD: -9, record: "1-3", E: "v" },
    { team: "GamerLegion", M: 4, RW: 68, RL: 80, RD: -12, record: "1-3", E: "v" },
    { team: "Wildcard", M: 3, RW: 44, RL: 62, RD: -18, record: "0-3", E: "v" },
     { team: "BIG", M: 3, RW: 41, RL: 63, RD: -22, record: "0-3", E: "v" },
    // ... добавьте другие команды
];

// Функция для добавления строк в таблицу
function updateTable(data) {
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; // Очищаем таблицу

    data.forEach(team => {
        let row = tableBody.insertRow();
        let teamCell = row.insertCell();
           teamCell.innerHTML = `<span style="display: flex; align-items: center;">${team.team}</span>`;
        let mCell = row.insertCell();
        mCell.textContent = team.M;
       let rwCell = row.insertCell();
        rwCell.textContent = team.RW;
      let rlCell = row.insertCell();
        rlCell.textContent = team.RL;
         let rdCell = row.insertCell();
        rdCell.textContent = team.RD;
      let recordCell = row.insertCell();
        recordCell.textContent = team.record;
       let eCell = row.insertCell();
        eCell.textContent = team.E;
    });
}

// Вызов функции для обновления таблицы с данными
updateTable(tournamentData);