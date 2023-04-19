
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
    'Currently working as Ebay Admin In addition to my eBay Admin duties, I also manage web maintenance tasks for <a href="https://pa6autoparts.com" className="link">pa6autoparts.com</a> . This includes regular website updates, such as product additions, pricing updates, and content modifications, to ensure the site remains current and user-friendly. I also conduct routine checks for website functionality, including monitoring for broken links, resolving technical issues, and optimizing site speed and performance.',
  resume: 'https://example.com',
  social: {
    linkedin: '',
    github: 'https://github.com/agisaputra',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Admin for Ebay Seller[Pa6Autoparts]',
    description:
      `Februari 2021 - Present (2 tahun).\n
      - order management : i'm manage order from receiving purchase orders to ensuring timely and accurate order processing.\n
      - handle buyer around the world : ensured compliance and resolved any order-related issues e.g : international shipping regulation, tax regulation include negosiate with buyer there is any charge from custom clearence or not (each contry have different regulation).\n
      - manage stock inventory : managed stock inventory to ensure optimal stock availability and avoid stockouts.\n
      - Create Daily Inventory Report for Stock In and Stock Out.\n
      - Manage customer returns according to term and polices`,
    stack: ['Order Management', 'Buyer/Customer Management', 'Ms Excel','Office Management',''],
    livePreview: 'https://pa6autoparts.com',
  },
  {
    name: 'Graphic design [Penerbit Briliant Book]',
    description:
      `Februari 2019 - Januari 2021 (2 tahun)\n
        -Book Cover Design\n
        -Book Layout Design\n
        -Graphic Asset Creation`,
    stack: ['Layout Book Design', 'Graphic Design', 'Adobe Illustrator','Adobe Indesign',],
  },
 
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Office Management',
  'Experience with customer in many country',
  'Experince with Microsoft Office product',
  'Experience Adobe Product',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'm.agil.saputra@gmail.com',
}

export { header, about, projects, skills, contact }
