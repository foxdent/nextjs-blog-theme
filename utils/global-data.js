export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'MARWOZIEL STORE';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'LOL VALORANT CSGO  // HANBOT BYPASS';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Kırmızı kedi All rights reserved.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
