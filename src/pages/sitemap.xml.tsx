import { GetServerSideProps } from 'next';

const EXTERNAL_DATA_URL = 'https://arupbasak.co.in/api/blogs';

interface Post {
    id: number;
}

function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">  
      <url>
          <loc>https://arupbasak.co.in/</loc>
          <lastmod>2023-04-01T14:50:39+00:00</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>https://arupbasak.co.in/projects</loc>
          <lastmod>2023-04-01T14:50:39+00:00</lastmod>
          <priority>0.80</priority>
      </url>
      <url>
          <loc>https://arupbasak.co.in/blogs</loc>
          <lastmod>2023-04-01T14:50:39+00:00</lastmod>
          <priority>0.80</priority>
      </url>
      <url>
          <loc>https://arupbasak.co.in/contact</loc>
          <lastmod>2023-04-01T14:50:39+00:00</lastmod>
          <priority>0.80</priority>
      </url>
  </urlset>
 `;
}

function SiteMap() {
    return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    // const request = await fetch(EXTERNAL_DATA_URL);
    // const posts: Post[] = await request.json()

    const sitemap = generateSiteMap();

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default SiteMap;
