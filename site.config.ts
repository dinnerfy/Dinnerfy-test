import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'b70c2ffca4284573b6b3a4290e9740bb',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Dinne Technology Inc',
  domain: 'Dinnetechnolgies.com',
  author: 'Dinner Tech',

  // open graph metadata (optional)
  description: 'Tech for Future of Dinner',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: '',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://dinnertechnologies.com/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F6d9b062d-1c5f-4794-aa75-ec79d34a31eb%252FScreenshot_2023-02-27_at_10.50.04_PM.png%3Ftable%3Dblock%26id%3Db70c2ffc-a428-4573-b6b3-a4290e9740bb%26cache%3Dv2&w=3840&q=75',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
   navigationLinks: [
    /*{
    title: '📥 Sign Up',
    pageId: '8a122350c6b74e40ba1193482bfa8051'
  },{
    title: 'ℹ️ About',
    pageId: '36b5e96b198e4ed0a301f32262280d73'
  }*/
   ]}
  )

