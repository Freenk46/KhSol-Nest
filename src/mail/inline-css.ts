import inlineCss from 'inline-css';

export async function renderWithInlineCss(html: string): Promise<string> {
   return inlineCss(html, {
      url: '/',
      removeStyleTags: true,
   });
}
