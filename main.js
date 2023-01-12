const output = document.getElementById("output");
const restoreBtn = document.getElementById("restore-btn");
const renderList = (elements) => {
  return elements.reduce((acc, current) => {
    acc += `<li>
    <img src="${current.image}">
        <div class="wrap-item">
            <div class='name-content'>Имя:
                <p>${current.name}</p>
            </div>
            <div class='name-content'>Статус:
                <p> ${current.status}</p>
            </div>
            <div class='name-content'>Айди: 
                <p>${current.id}</p>
            </div>
            <button btn-name="delete">Delete Block</button>
        </div>
    </li>`

    return acc;
  }, '');
}

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {

    output.innerHTML = renderList(data.results);

    output.addEventListener("click", (e) => {
      let target = e.target.closest("li");

      if (target) {
        let allLi = document.querySelectorAll("li");

        allLi.forEach((li) => {
          li.classList.remove("active");
        });
        target.classList.add("active");

        const res = document.querySelector(".res span");
        res.textContent = target.querySelectorAll("p")[0].textContent;

        if (e.target.matches('button[btn-name="delete"]')) {
          target.remove();
          res.textContent = "";
        }
      }
    });


    restoreBtn.addEventListener('click', () => {
      const listItems = document.querySelectorAll("li");

      if (listItems.length > 0) {
        listItems.forEach(item => {
          item.remove();
        });
      }

      output.innerHTML = renderList(data.results);
    })
  });
