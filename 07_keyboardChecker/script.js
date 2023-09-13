const insert = document.getElementById("output");

window.addEventListener("keydown", (e) => {
  output.innerHTML = `
    <table class="table">
      <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
      </tr>

      <tr>
        <td>${e.key === " " ? "space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  `;

  // insert.innerHTML = e.key;
  // insert.innerHTML = e.keycode;
});
