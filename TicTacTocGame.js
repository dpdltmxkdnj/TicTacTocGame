let $td = Array.from(document.querySelectorAll("td"));
const $table = document.querySelector("table");

let clickable = true;

function add(e) {
  let $tdCopy = Array.from(document.querySelectorAll("td"));
  let current = e.target;
  if (
    current.nodeName == "TR" ||
    current.nodeName == "IMG" ||
    current.nodeName == "TBODY" ||
    current.nodeName == "TABLE" ||
    (current.nodeName == "TD" && current.children.length) ||
    !clickable
  )
    return;
  const $img = document.createElement("img");
  $img.src = "o.png";
  current.append($img);
  $td = $td.filter((v, i, arr) => v.id !== current.id);
  clickable = false;

  let computer = setTimeout(() => {
    if ($td.length == 0) {
      alert("끝!");
      for (let i = 0; i < 9; i++) {
        $tdCopy[i].hasChildNodes()
          ? $tdCopy[i].removeChild($tdCopy[i].firstChild)
          : null;
      }
      $td = Array.from(document.querySelectorAll("td"));
      clickable = true;
      return;
    }
    const $img = document.createElement("img");
    $img.src = "x.png";
    current = $td[Math.floor(Math.random() * $td.length)];
    $td = $td.filter((v, i, arr) => v.id !== current.id);
    current.append($img);
    clickable = true;
    if (
      ($tdCopy[0].children[0]?.src.includes("x.png") &&
        $tdCopy[3].children[0]?.src.includes("x.png") &&
        $tdCopy[6].children[0]?.src.includes("x.png")) ||
      ($tdCopy[1].children[0]?.src.includes("x.png") &&
        $tdCopy[4].children[0]?.src.includes("x.png") &&
        $tdCopy[7].children[0]?.src.includes("x.png")) ||
      ($tdCopy[2].children[0]?.src.includes("x.png") &&
        $tdCopy[5].children[0]?.src.includes("x.png") &&
        $tdCopy[8].children[0]?.src.includes("x.png")) ||
      ($tdCopy[0].children[0]?.src.includes("x.png") &&
        $tdCopy[1].children[0]?.src.includes("x.png") &&
        $tdCopy[2].children[0]?.src.includes("x.png")) ||
      ($tdCopy[3].children[0]?.src.includes("x.png") &&
        $tdCopy[4].children[0]?.src.includes("x.png") &&
        $tdCopy[5].children[0]?.src.includes("x.png")) ||
      ($tdCopy[6].children[0]?.src.includes("x.png") &&
        $tdCopy[7].children[0]?.src.includes("x.png") &&
        $tdCopy[8].children[0]?.src.includes("x.png")) ||
      ($tdCopy[0].children[0]?.src.includes("x.png") &&
        $tdCopy[4].children[0]?.src.includes("x.png") &&
        $tdCopy[8].children[0]?.src.includes("x.png")) ||
      ($tdCopy[2].children[0]?.src.includes("x.png") &&
        $tdCopy[4].children[0]?.src.includes("x.png") &&
        $tdCopy[6].children[0]?.src.includes("x.png"))
    ) {
      clickable = false;
      setTimeout(() => {
        alert("컴퓨터 승");

        for (let i = 0; i < 9; i++) {
          $tdCopy[i].hasChildNodes()
            ? $tdCopy[i].removeChild($tdCopy[i].firstChild)
            : null;
        }
        $td = Array.from(document.querySelectorAll("td"));
        clickable = true;
      }, 50);
      return;
    }
  }, 1000);

  if (
    ($tdCopy[0].children[0]?.src.includes("o.png") &&
      $tdCopy[3].children[0]?.src.includes("o.png") &&
      $tdCopy[6].children[0]?.src.includes("o.png")) ||
    ($tdCopy[1].children[0]?.src.includes("o.png") &&
      $tdCopy[4].children[0]?.src.includes("o.png") &&
      $tdCopy[7].children[0]?.src.includes("o.png")) ||
    ($tdCopy[2].children[0]?.src.includes("o.png") &&
      $tdCopy[5].children[0]?.src.includes("o.png") &&
      $tdCopy[8].children[0]?.src.includes("o.png")) ||
    ($tdCopy[0].children[0]?.src.includes("o.png") &&
      $tdCopy[1].children[0]?.src.includes("o.png") &&
      $tdCopy[2].children[0]?.src.includes("o.png")) ||
    ($tdCopy[3].children[0]?.src.includes("o.png") &&
      $tdCopy[4].children[0]?.src.includes("o.png") &&
      $tdCopy[5].children[0]?.src.includes("o.png")) ||
    ($tdCopy[6].children[0]?.src.includes("o.png") &&
      $tdCopy[7].children[0]?.src.includes("o.png") &&
      $tdCopy[8].children[0]?.src.includes("o.png")) ||
    ($tdCopy[0].children[0]?.src.includes("o.png") &&
      $tdCopy[4].children[0]?.src.includes("o.png") &&
      $tdCopy[8].children[0]?.src.includes("o.png")) ||
    ($tdCopy[2].children[0]?.src.includes("o.png") &&
      $tdCopy[4].children[0]?.src.includes("o.png") &&
      $tdCopy[6].children[0]?.src.includes("o.png"))
  ) {
    setTimeout(() => {
      alert("나의 승");
      for (let i = 0; i < 9; i++) {
        $tdCopy[i].hasChildNodes()
          ? $tdCopy[i].removeChild($tdCopy[i].firstChild)
          : null;
      }
      clearTimeout(computer);
      $td = Array.from(document.querySelectorAll("td"));
      clickable = true;
    }, 50);
    return;
  }
}

$table.addEventListener("click", (e) => {
  add(e);
});
