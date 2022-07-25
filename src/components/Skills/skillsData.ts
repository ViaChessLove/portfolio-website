export interface SkillsProps {
  id: number;
  img: string;
  title: string;
  description: string
}


export const enSkills: SkillsProps[] = [
  {
    id: 1,
    img: "./assets/images/html.png",
    title: 'HTML',
    description: 'Valid and adaptive layout with and without Figma/Photoshop templates.'
  },
  {
    id: 2,
    img: "./assets/images/css.png",
    title: 'CSS',
    description: 'Flexes, grids, preprocessors etc.'
  },
  {
    id: 3,
    img: "./assets/images/js.png",
    title: 'JavaScript',
    description: "ES6+, promises, generators, fetching, experience with API's, algorythms and complexity analysis"
  },
  {
    id: 4,
    img: "./assets/images/ts.png",
    title: 'TypeScript',
    description: "OOP, strong typing"
  },
  {
    id: 5,
    img: "./assets/images/react.png",
    title: 'React',
    description: "React Virtual DOM, React hooks, Router-dom, SPA's, functional components (from v16.8)"
  },
  {
    id: 6,
    img: "./assets/images/npm.png",
    title: 'npm',
    description: "+yarn"
  },
  {
    id: 7,
    img: "./assets/images/redux.png",
    title: 'Redux',
    description: 'Base Redux state manager, Redux-toolkit, saga'
  },
  {
    id: 8,
    img: "./assets/images/scss.png",
    title: 'Sass(SCSS)/LESS',
    description: 'Experience with preprocessors CSS'
  }, 
  {
    id: 9,
    img: "./assets/images/styled.png",
    title: 'Styled-components',
    description: 'And other CSS-in-JS libraries'
  }, 
  {
    id: 10,
    img: "./assets/images/mui.png",
    title: 'Material UI',
    description: 'v.4'
  }, 
  {
    id: 11,
    img: "./assets/images/eslint.png",
    title: 'ESlint',
    description: 'Experience in config writing'
  }, 
  {
    id: 12,
    img: "./assets/images/git.png",
    title: 'GIT',
    description: 'Basic commands in git (commit, pull, checkout etc.)'
  }
];
export const ruSkills: SkillsProps[] = [];