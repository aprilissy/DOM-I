const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};



// Example: Update the img src for the logo
/* Logo Image */
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// April's Code Begins Here:
////////////////////////// Site Images
/* CTA Image */
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

/* Middle Image */
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])



///////////////// Navigation Elements
const navElements = document.querySelectorAll('a')
const navigation = []

for (const [key, value] of Object.entries(siteContent.nav)) {
  navigation.push({
    key,
    value: value
  })
}

/* loop through nav assigning keys: 3 ways - Nate's help */
/* 1st Way */
for (let i = 0; i < navElements.length; i++) {
  navElements[i].textContent = navigation[i].value
}

/* 2nd Way */
// navElements.forEach((ele, idx) => {
//   ele.textContent = navigation[idx].value
// })

/* 3rd Way */
// const func = (ele, idx) => {
//   ele.textContent = navigation[idx].value
// }
// navElements.forEach(func)



// cta section content
// h1 content with line breaks
const ctaH1 = document.querySelector('.cta-text h1')
ctaH1.innerHTML = siteContent['cta']['h1'].replace(/ /g, '<br /> ')

//button
const button = document.querySelector('.cta-text button')
button.textContent = siteContent['cta']['button']



//////////////////// main section content
const main = []

for (const [key, value] of Object.entries(siteContent['main-content'])) {
  main.push({
    keys: key.split('-'),
    value: value
  })
}

const mainH4 = document.querySelectorAll('.text-content h4')
const mainP = document.querySelectorAll('.text-content p')

let j = 0;
let k = 0;
for (let i = 0; i < main.length; i++) {
  if (main[i].keys[1] === 'h4') {
    mainH4[j].textContent = main[i].value
    j++
  } else if (main[i].keys[1] === 'content') {
    mainP[k].textContent = main[i].value
    k++
  }
}


///////////////// Contact Section Content
const contact = document.querySelector('.contact h4')
contact.textContent = siteContent.contact['contact-h4']

const contactInfo = document.querySelectorAll('.contact p')


const address = []

for (const [key, value] of Object.entries(siteContent['contact'])) {
  address.push({
    keys: key,
    value: value
  })
}

let l = 0
for (let i = 1; i < address.length; i++) {
  contactInfo[l].textContent = address[i].value
  l++
}


/////////////// Footer Section Content
const copyright = document.querySelector('footer p')
copyright.textContent = siteContent['footer']['copyright']