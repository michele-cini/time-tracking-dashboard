const container = document.getElementById("inner-article");

const appendItem = (item) => {
  const section = document.createElement("section");
  section.className = "activity";
  section.id = item.title.replaceAll(" ", "-");

  section.innerHTML = `
    <div class="activity-data">
    <div class="header">
        <p>${item.title}</p>
    </div>
    <div class="time">
        <div class="daily hide">
        <h2>${item.timeframes.daily.current}hrs</h2>
        <p>Yesterday - ${item.timeframes.daily.previous}hrs</p>
        </div>
        <div class="weekly">
        <h2>${item.timeframes.weekly.current}hrs</h2>
        <p>Last week - ${item.timeframes.weekly.previous}hrs</p>
        </div>
        <div class="monthly hide">
        <h2>${item.timeframes.monthly.current}hrs</h2>
        <p>Last month - ${item.timeframes.monthly.previous}hrs</p>
        </div>
    </div>
    </div>
    `;

  container.appendChild(section);
};

const populateDOM = (data) => {
  data.forEach((item) => {
    appendItem(item);
  });
};

fetch("data.json")
  .then((response) => {
    if (!response.ok) return console.log("something went wrong.");

    return response.json();
  })
  .then((data) => {
    populateDOM(data);
  });

const time = document.getElementById("time-frame");

time.addEventListener("click", (e) => {
  const id = e.target.id;
  const daily = document.querySelectorAll(".daily");
  const weekly = document.querySelectorAll(".weekly");
  const monthly = document.querySelectorAll(".monthly");
  switch (id) {
    case "daily":
      e.currentTarget.querySelector("#daily").classList.add("selected");
      e.currentTarget.querySelector("#weekly").classList.remove("selected");
      e.currentTarget.querySelector("#monthly").classList.remove("selected");

      daily.forEach((item) => item.classList.remove("hide"));
      weekly.forEach((item) => item.classList.add("hide"));
      monthly.forEach((item) => item.classList.add("hide"));
      break;
    case "weekly":
      e.currentTarget.querySelector("#daily").classList.remove("selected");
      e.currentTarget.querySelector("#weekly").classList.add("selected");
      e.currentTarget.querySelector("#monthly").classList.remove("selected");

      daily.forEach((item) => item.classList.add("hide"));
      weekly.forEach((item) => item.classList.remove("hide"));
      monthly.forEach((item) => item.classList.add("hide"));
      break;
    case "monthly":
      e.currentTarget.querySelector("#daily").classList.remove("selected");
      e.currentTarget.querySelector("#weekly").classList.remove("selected");
      e.currentTarget.querySelector("#monthly").classList.add("selected");

      daily.forEach((item) => item.classList.add("hide"));
      weekly.forEach((item) => item.classList.add("hide"));
      monthly.forEach((item) => item.classList.remove("hide"));
      break;
  }
});
