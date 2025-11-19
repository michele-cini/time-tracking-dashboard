//   Work
//   5hrs <!-- daily -->
//   Previous - 7hrs <!-- daily -->
//   32hrs <!-- weekly -->
//   Previous - 36hrs <!-- weekly -->
//   103hrs <!-- monthly -->
//   Previous - 128hrs <!-- monthly -->

//   Play
//   1hr <!-- daily -->
//   Previous - 2hrs <!-- daily -->
//   10hrs <!-- weekly -->
//   Previous - 8hrs <!-- weekly -->
//   23hrs <!-- monthly -->
//   Previous - 29hrs <!-- monthly -->

//   Study
//   0hrs <!-- daily -->
//   Previous - 1hr <!-- daily -->
//   4hrs <!-- weekly -->
//   Previous - 7hrs <!-- weekly -->
//   13hrs <!-- monthly -->
//   Previous - 19hrs <!-- monthly -->

//   Exercise
//   1hr <!-- daily -->
//   Previous - 1hr <!-- daily -->
//   4hrs <!-- weekly -->
//   Previous - 5hrs <!-- weekly -->
//   11hrs <!-- monthly -->
//   Previous - 18hrs <!-- monthly -->

//   Social
//   1hr <!-- daily -->
//   Previous - 3hrs <!-- daily -->
//   5hrs <!-- weekly -->
//   Previous - 10hrs <!-- weekly -->
//   21hrs <!-- monthly -->
//   Previous - 23hrs <!-- monthly -->

//   Self Care
//   0hrs <!-- daily -->
//   Previous - 1hr <!-- daily -->
//   2hrs <!-- weekly -->
//   Previous - 2hrs <!-- weekly -->
//   7hrs <!-- monthly -->
//   Previous - 11hrs <!-- monthly -->

const container = document.getElementById("inner-article");

const appendItem = (item) => {
  const section = document.createElement("section");
  section.className = "activity";
  section.id = item.title.replaceAll(' ', '-');

  section.innerHTML = `
    <div class="activity-data">
    <div class="header">
        <p>${item.title}</p>
    </div>
    <div class="time">
        <div class="daily hide">
        <h2>32hrs</h2>
        <p>Last week - 36hrs</p>
        </div>
        <div class="weekly">
        <h2>32hrs</h2>
        <p>Last week - 36hrs</p>
        </div>
        <div class="monthly hide">
        <h2>32hrs</h2>
        <p>Last week - 36hrs</p>
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
