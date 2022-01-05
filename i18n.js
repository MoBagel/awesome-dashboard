const Airtable = require('airtable');
const fs = require('fs');

// import .env config
require('dotenv').config();

const AIRTABLE_KEY = process.env.AIRTABLE_KEY;

const AIRTABLE_I18N_BASE_COMMON = process.env.AIRTABLE_I18N_BASE_COMMON;
const AIRTABLE_I18N_TABLE_COMMON = process.env.AIRTABLE_I18N_TABLE_COMMON;
const AIRTABLE_I18N_VIEW_COMMON = process.env.AIRTABLE_I18N_VIEW_COMMON;

if (!AIRTABLE_I18N_BASE_COMMON || !AIRTABLE_I18N_TABLE_COMMON || !AIRTABLE_I18N_VIEW_COMMON) {
  console.error('[ERROR] should provide third argument in env: AIRTABLE_XXX');
  process.exit(-1);
}

const langObject = {
  'zh-TW': {},
  'en-US': {},
};

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: AIRTABLE_KEY,
});

const baseCommon = Airtable.base(AIRTABLE_I18N_BASE_COMMON);

(async () => {
  fetchAirtable(baseCommon, AIRTABLE_I18N_TABLE_COMMON, AIRTABLE_I18N_VIEW_COMMON)
    .then((common) => {
      console.log(common);
      Object.entries(common).forEach(([key, value]) => {
        fs.writeFile(
          `./locales/${key}.json`,
          JSON.stringify({ ...value }),
          'utf8',
          () => {
            console.log('write file', key);
          },
        );
      });
    })
    .catch((err) => {
      console.error(err);
      process.exit(-1);
    });
})();

function fetchAirtable(basesss, table, view) {
  return new Promise((res) =>
    basesss(table)
      .select({ view })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach((record) => {
            Object.entries(langObject).forEach(([key, value]) => {
              value[record.get('key')] = record.get(key);
            });
          });
          fetchNextPage();
        },
        (err) => {
          if (err) {
            console.error(err);
            process.exit(-1);
          }
          res(langObject);
        },
      ),
  );
}
