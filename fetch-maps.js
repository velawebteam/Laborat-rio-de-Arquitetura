import https from 'https';

async function run() {
  try {
    const res = await fetch('https://www.google.com/maps/place/Laborat%C3%B3rio+de+Arquitetura/');
    const text = await res.text();
    
    // Find everything around "Portugal"
    const index = text.indexOf('Portugal');
    if (index !== -1) {
        console.log(text.substring(index - 200, index + 200));
    } else {
        console.log('Portugal not found');
    }
  } catch (e) {
    console.error(e);
  }
}
run();
