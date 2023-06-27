const projects = [
  {
    title: "Spotify",
    src: "spotify.png",
    slug: "spotify",
    color: "#FFF",
    year: 2023,
  },
  {
    title: "Netflix",
    src: "netflix.png",
    slug: "netflix",
    color: "#EFE8D3",
    year: 2023,
  },
  {
    title: "Google",
    src: "google.png",
    slug: "google",
    color: "#706D63",
    year: 2023,
  },
  // {
  //   title: 'Arese Sylvester',
  // src: "arese.png",
  // slug: "arese",
  // color: "#706D63",
  //year: 2022,},
  {
    title: "Apple",
    src: "apple.png",
    slug: "apple",
    color: "#FFF",
    year: 2023,
  },
  {
    title: "Portfolio V3",
    src: "portfolio-v3.png",
    slug: "portfolio-v3",
    color: "#8C8C8C",
    year: 2023,
  },
  {
    title: "Blog",
    src: "blog.png",
    slug: "blog",
    color: "#8C8C8C",
    year: 2023,
  },
  {
    title: "Cleander",
    src: "cleander.png",
    slug: "cleander",
    color: "#FFF",
    year: 2022,
  },
  {
    title: "joshua-GPT",
    src: "joshuaGPT.png",
    slug: "joshua-gpt",
    color: "#8C8C8C",
    year: 2023,
  },
  {
    title: "Style Your Div",
    src: "style-your-div.png",
    slug: "style-your-div",
    color: "#FFF",
    year: 2023,
  },
  {
    title: "Ryter",
    src: "ryter.png",
    slug: "ryter",
    color: "#EFE8D3",
    year: 2022,
  },
  {
    title: "Business Card",
    src: "business-card.png",
    slug: "business-card",
    color: "#8C8C8C",
    year: 2023,
  },
  {
    title: "Drum Kit",
    src: "drum.png",
    slug: "drum",
    color: "#EFE8D3",
    year: 2022,
  },
  {
    title: "Dice Game",
    src: "dice.png",
    slug: "dice",
    color: "#706D63",
    year: 2022,
  },
  {
    title: "Portfolio V2",
    src: "portfolio-v2.png",
    slug: "portfolio-v2",
    color: "#EFE8D3",
    year: 2022,
  },
  {
    title: "Portfolio V1",
    src: "portfolio-v1.png",
    slug: "portfolio-v1",
    color: "#706D63",
    year: 2022,
  },
];

export { projects };

export async function getProjects(slug) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (slug) {
        const project = projects.filter((p) => p.slug === slug);
        resolve(project);
      } else {
        resolve(projects);
      }
    }, 1000);
  });
}
