const https = require('https');

const xml2js = require('xml2js');

const { postToIndexNow } = require('.');

require('dotenv').config();

// Configuration
const sitemapUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`; // TODO: Update
const host = 'www.pharmaconeg.com'; // TODO: Update
const key = '445d22342e804c9c81f67ac15d644b02'; // TODO: Update
const keyLocation =
  `${process.env.NEXT_PUBLIC_SITE_URL}/445d22342e804c9c81f67ac15d644b02.txt`; // TODO: Update

const modifiedSinceDate = new Date(process.argv[2] || '1970-01-01');

if (isNaN(modifiedSinceDate.getTime())) {
  console.error('Invalid date provided. Please use format YYYY-MM-DD');
  process.exit(1);
}

function fetchSitemap(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve(data);
        });
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}

function parseSitemap(xmlData) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xmlData, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function filterUrlsByDate(sitemap, date) {
  const urls = sitemap.urlset.url;
  return urls
    .filter((url) => new Date(url.lastmod[0]) > date)
    .map((url) => url.loc[0]);
}


async function main() {
  try {
    const xmlData = await fetchSitemap(sitemapUrl);
    const sitemap = await parseSitemap(xmlData);
    const filteredUrls = filterUrlsByDate(sitemap, modifiedSinceDate);
    // console.log(filteredUrls);

    if (filteredUrls.length > 0) {
      const response = await postToIndexNow(
        host,
        key,
        keyLocation,
        filteredUrls
      );
      console.log('IndexNow API Response:');
      // console.log(response);
      console.log('Status:', response.statusCode, response.statusMessage);
      console.log('Data:', response.data);
      // console.log(filteredUrls);
    } else {
      console.log('No URLs modified since the specified date.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
