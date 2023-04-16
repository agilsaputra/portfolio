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
    'Currently working as Ebay Admin In addition to my eBay Admin duties, I also manage web maintenance tasks for<a href="https://pa6autoparts.com" target="_blank">https://pa6autoparts.com</a>. This includes regular website updates, such as product additions, pricing updates, and content modifications, to ensure the site remains current and user-friendly. I also conduct routine checks for website functionality, including monitoring for broken links, resolving technical issues, and optimizing site speed and performance.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/agisaputra',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Admin for Ebay Seller',
    description:
      `Februari 2021 - Present (2 tahun)

      - order management : i'm manage order from receiving purchase orders to ensuring timely and accurate order processing
      - handle buyer around the world  : 
      ensured compliance and resolved any order-related issues e.g : international shipping regulation, tax regulation each country 
      - manage stock inventory : managed stock inventory to ensure optimal stock availability and avoid stockouts .
      - Create Daily Inventory Report for Stock In and Stock Out
      - Manage customer returns according to term and polices`,
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
