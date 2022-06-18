// bundle-ignore

const groups = ["meta-tags", "open-graph", "twitter"];
groups.forEach((group) => {
  const meta = document.querySelector("#" + group);
  const metaSubTags = document.querySelectorAll("." + group + " input");
  meta.addEventListener("change", () => {
    metaSubTags.forEach((tag) => (tag.checked = meta.checked));
  });
});
