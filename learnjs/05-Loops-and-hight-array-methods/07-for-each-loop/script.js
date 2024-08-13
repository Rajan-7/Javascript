const socials = ["LinkedIn", "Youtube", "Facebook", "Instagram", "Twitter"];

// socials.forEach((item) => console.log(item));

// Parameters

// socials.forEach((index, item, arr) => console.log(`${index} - ${item}`, arr));

// Using name function

function socialsLogs(social){
    console.log(social)
}

// socials.forEach(socialsLogs);


// Array of object

const socialLinks = [
    {name:'Youtube',url:'https://www.youtube.com'},
    {name:'LinkedIn',url:'https://www.linkedin.com'},
    {name:'Twitter',url:'https://www.twitter.com'},
    {name:'Instagram',url:'https://www.instagram.com'},
    {name:'Facebook',url:'https://www.facebook.com'},
]

socialLinks.forEach((item)=>console.log(item.url))


