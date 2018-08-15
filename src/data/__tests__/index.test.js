import data from '../';
import { getLogsFromItem } from '../../applyCommand';

it('has the correct shape', () => {
  expect(Object.keys(data)).toEqual(['001', 'shared']);
});

describe('has all data', () => {
  const languages = ['en', 'nl'];
  Object.entries(data).forEach(([key, value]) => {
    it(`has all languages for "${key}"`, () => {
      expect(Object.keys(value)).toEqual(expect.arrayContaining(languages));
    });
    if (key !== 'shared') {
      languages.forEach(lang => {
        describe(`language: ${lang}`, () => {
          const obj = value[lang];
          it('contains OPS', () => {
            expect(Object.keys(obj)).toEqual(expect.arrayContaining(['OPS']));
          });
          Object.entries(obj.OPS).forEach(([operation, OPS]) => {
            describe(`POS${key} OPS${operation}`, () => {
              it(`has a valid number as OPS number`, () => {
                expect(operation).toMatch(/\d{3}/g);
              });
              it(`has ITEM for OPS`, () => {
                expect(Object.keys(OPS)).toEqual(
                  expect.arrayContaining(['ITEM'])
                );
              });
              it('stops at some point', () => {
                const endsOPS = Object.values(OPS.ITEM).map(
                  item => item.endsOPS
                );
                expect(endsOPS).toEqual(expect.arrayContaining([true]));
              });
              Object.entries(OPS.ITEM).forEach(([item, ITEM]) => {
                describe(`ITEM${item}`, () => {
                  it(`has a valid number as ITEM number`, () => {
                    expect(item).toMatch(/\d{3}/g);
                  });
                  it('has logs', () => {
                    expect(getLogsFromItem(ITEM)).toEqual(expect.any(Array));
                  });
                });
              });
            });
          });
        });
      });
    }
  });
});
