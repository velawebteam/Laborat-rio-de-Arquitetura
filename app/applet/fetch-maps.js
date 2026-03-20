async function run() {
  try {
    const res = await fetch('https://www.google.com/maps/place/Laborat%C3%B3rio+de+Arquitetura/');
    const text = await res.text();
    
    const phoneMatch = text.match(/\+351[\s\d]{9,12}/g);
    if (phoneMatch) {
      console.log('Phones:', [...new Set(phoneMatch)]);
    }
    
    const addressMatch = text.match(/[\w\s,]+,\s*\d{4}-\d{3}\s+[\w\s]+/g);
    if (addressMatch) {
      console.log('Addresses:', [...new Set(addressMatch)].slice(0, 5));
    }
    
    // Look for website
    const websiteMatch = text.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g);
    if (websiteMatch) {
        const unique = [...new Set(websiteMatch)].filter(u => !u.includes('google') && !u.includes('schema.org') && !u.includes('gstatic'));
        console.log('Websites:', unique.slice(0, 5));
    }
  } catch (e) {
    console.error(e);
  }
}
run();
