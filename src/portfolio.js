const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://agilsaputra.netlify.app/',
  title: 'Agil Saputra',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'M Agil Saputra',
  role: '',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/agilsaputra',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Extract data from twitter API using python',
    description:
      'Simple python script to pull data from twitter API then store on csv file, you',
    stack: ['Python', 'TwitterAPI', 'Tweepy'],
    sourceCode: 'https://github.com/agilsaputra/python-script-to-csv',
    livePreview: 'https://github.com/agilsaputra/python-script-to-csv/blob/master/tweets.csv',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Docker',
  'Airflow',
  'Sql',
  'Familiar with linux cli and shell',
  'Metabase',
  'Netlify'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'm.agil.saputra@gmail.com',
}

export { header, about, projects, skills, contact }
