import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";

new HandlebarsAdapter(/* helpers */ undefined, {
   inlineCssEnabled: true,
   /** See https://www.npmjs.com/package/inline-css#api */
   inlineCssOptions: {
      url: ' ',
      preserveMediaQueries: true,
   },
});

