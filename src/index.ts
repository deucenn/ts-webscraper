import axios from 'axios'

async function connectScraper() {
    const response = await axios.get("https://www.scrapingcourse.com/ecommerce/");
    const html = response.data;
    console.log(html);
};

connectScraper();