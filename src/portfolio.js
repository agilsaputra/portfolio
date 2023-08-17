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
    'Saya adalah lulusan universitas amikom yogyakarta. Saya terbiasa bekerja \n
dengan data, baik itu data warehouse maupun data invetory lokal, saat ini \n
saya bekerja sebagai admin yang berjualan di ecommerce (ebay). Saya
merupakan seseorang yang bekerja secara sistematis, dan memiliki
kemampuan mengelola data secara efisien dan mengambil keputusan yang
tepat. Dan saya merupakan orang yang adaptif dalam bekerja',
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
      'Simple python script to pull data from twitter API then store on csv file, this script will pull tweet contain words "indonesia" and location in yogyakarta',
    stack: ['Python', 'TwitterAPI', 'Tweepy','Parameters base Standard search API'],
    sourceCode: 'https://github.com/agilsaputra/python-script-to-csv',
    livePreview: 'https://github.com/agilsaputra/python-script-to-csv/blob/master/tweets.csv',
  },
  {
    name: 'Schedule python script use crontab',
    description:
      'Scheduling python script who will print "date.now" and words "hello from crontab", in this case cron will execute "hello_to_cron.py" every minutes then create & printed in hello.log [logfile]',
    stack: ['Cron', 'Python', 'Crontab','Linux CLI',],
    sourceCode: 'https://github.com/agilsaputra/cron_python_script',
    livePreview: 'https://github.com/agilsaputra/cron_python_script/blob/master/hello.log',
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
  'Netlify',
  'Cron',
  'Git & Github command',
  'Python',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'm.agil.saputra@gmail.com',
}

export { header, about, projects, skills, contact }
