const colors = ["#c084fc", "#4ade80", "#f59e0b", "#f43f5e", "#3b82f6", "#06b6d4"];

const imagesGlob = import.meta.glob('/src/assets/works/**/*.{png,jpg,jpeg,webp}', { eager: true });

export const works = Object.entries(imagesGlob).map(([filePath, module], index) => {
  const parts = filePath.split('/');
  const folderName = parts[parts.length - 2];
  
  let fileName = parts[parts.length - 1];
  fileName = fileName.substring(0, fileName.lastIndexOf('.'));
  const title = fileName.replace(/[-_]/g, ' ');

  let category = '';
  let description = '';
  let tags = [];

  if (folderName === 'Personal Favs') {
    category = 'Personal';
    description = 'Personal passion projects and experimental design explorations.';
    tags = ['Illustration', 'Poster Design', 'Typography'];
  } else if (folderName === 'Posters') {
    category = 'Posters';
    description = 'Eye-catching poster designs crafted for events, campaigns, and visual storytelling.';
    tags = ['Poster Design', 'Photoshop', 'Illustrator'];
  } else if (folderName === 'Professional Work') {
    category = 'Professional';
    description = 'Client work and professional projects spanning branding, social media, and commercial design.';
    tags = ['Branding', 'Social Media', 'Figma'];
  } else {
    category = 'Uncategorized';
    description = '';
    tags = [];
  }

  return {
    id: index + 1,
    title,
    category,
    description,
    image: module.default,
    images: [module.default],
    tags,
    year: "2026",
    client: folderName,
    color: colors[index % colors.length],
  };
});

export const categories = [
  { id: "all", label: "All" },
  { id: "Personal", label: "Personal" },
  { id: "Posters", label: "Posters" },
  { id: "Professional", label: "Professional" },
];
