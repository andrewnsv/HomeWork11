const output = document.getElementById("output");
const restoreBtn = document.getElementById("restore-btn");

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((d) => {
      output.innerHTML += `<li>
        <img src="${d.image}">
            <div class="wrap-item">
                <div class='name-content'>Имя:
                    <p>${d.name}</p>
                </div>
                <div class='name-content'>Статус:
                    <p> ${d.status}</p>
                </div>
                <div class='name-content'>Айди: 
                    <p>${d.id}</p>
                </div>
                <button btn-name="delete">Delete Block</button>
            </div>
        </li>`;
    });

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

      data.results.forEach((d) => {
        output.innerHTML += `<li>
          <img src="${d.image}">
              <div class="wrap-item">
                  <div class='name-content'>Имя:
                      <p>${d.name}</p>
                  </div>
                  <div class='name-content'>Статус:
                      <p> ${d.status}</p>
                  </div>
                  <div class='name-content'>Айди: 
                      <p>${d.id}</p>
                  </div>
                  <button btn-name="delete">Delete Block</button>
              </div>
          </li>`;
      });
    })
  });
