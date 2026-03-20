import https from 'https';

https.get('https://www.google.com/maps/place/Laborat%C3%B3rio+de+Arquitetura/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const titleMatch = data.match(/<title>(.*?)<\/title>/);
    console.log('Title:', titleMatch ? titleMatch[1] : 'Not found');
    
    const addressMatch = data.match(/[\w\s,]+,\s*\d{4}-\d{3}\s+[\w\s]+/g);
    if (addressMatch) {
      console.log('Possible addresses:', addressMatch.slice(0, 5));
    }
    
    const phoneMatch = data.match(/\+351\s*\d{2,3}\s*\d{3}\s*\d{3}/g);
    if (phoneMatch) {
      console.log('Possible phones:', phoneMatch.slice(0, 5));
    }
  });
});
