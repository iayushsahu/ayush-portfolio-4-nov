export type Certification = { name: string; issuer: string; date: string; badge?: string; cat: string };

export const certifications: Certification[] = [
  { name: 'IBM Generative AI Fundamentals Specialization', issuer: 'IBM', date: 'Nov 2025', badge: 'UNM8051J3JJ7', cat: 'Gen-AI' },
  { name: 'Generative AI: Prompt Engineering', issuer: 'Coursera', date: 'Nov 2025', badge: 'AB4I1JEO1UCN', cat: 'Gen-AI' },
  { name: 'Develop AI Agents with Microsoft Foundry & VS Code', issuer: 'Microsoft Learn', date: 'Aug 2026', cat: 'Gen-AI' },
  { name: 'Pandas Data Science Certification', issuer: 'Kaggle', date: 'Sep 2023', cat: 'Data' },
  { name: 'Python Programming Specialist', issuer: 'Kaggle', date: 'Aug 2023', cat: 'Data' },
  { name: 'Back End & Full Stack Web Development in Node.js', issuer: 'Coding Ninjas', date: 'Feb 2023', badge: '35a5dcd94cd6bd9e', cat: 'Full-Stack' },
  { name: 'Front End & Full Stack Web Development', issuer: 'Coding Ninjas', date: 'Dec 2022', badge: '494b24870098f6b3', cat: 'Full-Stack' },
  { name: 'Full Stack Development Certification', issuer: 'Simplilearn', date: 'Apr 2022', badge: '3372969', cat: 'Full-Stack' },
  { name: 'React.js Skill Assessment', issuer: 'HackerRank', date: 'Aug 2021', badge: '#31d03ac7bef0', cat: 'Full-Stack' },
  { name: 'Python Skill Certification', issuer: 'HackerRank', date: 'Jul 2021', badge: '#9A7E69441703', cat: 'Data' },
  { name: 'Responsive Web Design', issuer: 'Sololearn', date: 'Jul 2021', badge: '1162-10208273', cat: 'Full-Stack' },
];

export const education = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Information Technology',
  institution: 'Rajiv Gandhi Prodyogiki Vishwavidyalaya (RGPV)',
  period: '2018 — 2022',
  location: 'Madhya Pradesh, India',
};
