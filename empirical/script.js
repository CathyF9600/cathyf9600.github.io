const videos = [
  ["Mhh-3UwiSEY", "Abs-EE (W/O pretrain)"],
  ["0x7OGEGgG0I", "Abs-Joint (W/O pretrain)"],
  ["hblTDF8l2jg", "Delta-EE (W/O pretrain)"],
  ["NZYDyBE5FYQ", "Delta-Joint (W/O pretrain)"],
  ["gfeQlBzvs1U", "Abs-EE (W pretrain)"],
  ["izQUTP0dBQ4", "Abs-Joint (W pretrain)"],
  ["goG8wssn9rQ", "Delta-EE (W pretrain)"],
  ["Kir665YSHiA", "Delta-Joint (W pretrain)"],
  ["OivNCwQMlqI", "Abs-EE (hard mode)"],
  ["9e2gBoZZSus", "Abs-Joint (hard mode)"],
  ["BWa1Hu5f43s", "Delta-EE (hard mode)"],
  ["Oh9KMxILBOI", "Delta-Joint (hard mode)"],
];

const grid = document.querySelector("#youtube-grid");

if (grid) {
  const fragment = document.createDocumentFragment();

  videos.forEach(([id, label]) => {
    const card = document.createElement("figure");
    card.className = "youtube-card";

    const frame = document.createElement("iframe");
    frame.src = `https://www.youtube-nocookie.com/embed/${id}`;
    frame.title = label;
    frame.loading = "lazy";
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen = true;

    const caption = document.createElement("figcaption");
    caption.textContent = label;

    card.append(frame, caption);
    fragment.append(card);
  });

  grid.append(fragment);
}
