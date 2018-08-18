import { random, table } from '../../utils';

export default {
  logs: 'Welcome WXT',
  OPS: {
    '130': {
      logs: 'Weather report',
      help: ['ITEM 320: landing weather', 'ITEM 624: emergency weather'],
      ITEM: {
        '320': {
          getLogs: () =>
            table([
              {
                location: 'Kennedy',
                temperature: `${random(15, 30)}°C`,
                precipitation: `${random(5, 50)}%`,
                humidity: `${random(0, 50)}%`,
                wind: `${random(0, 50)} km/h`,
              },
              {
                location: 'Edwards',
                temperature: `${random(20, 35)}°C`,
                precipitation: `${random(10, 40)}%`,
                humidity: `${random(10, 40)}%`,
                wind: `${random(16, 50)} km/h`,
              },
              {
                location: 'White Sands',
                temperature: `${random(15, 45)}°C`,
                precipitation: `${random(10, 90)}%`,
                humidity: `${random(10, 100)}%`,
                wind: `${random(16, 150)} km/h`,
              },
            ]),
          endsOPS: true,
        },
        '624': {
          getLogs: () =>
            table([
              {
                location: 'Dakar',
                temperature: `${random(15, 30)}°C`,
                precipitation: `${random(5, 10)}%`,
                humidity: `${random(10, 25)}%`,
                wind: `${random(16, 150)} km/h`,
              },
              {
                location: 'White Sands',
                temperature: `${random(15, 45)}°C`,
                precipitation: `${random(10, 90)}%`,
                humidity: `${random(10, 100)}%`,
                wind: `${random(16, 150)} km/h`,
              },
            ]),
          endsOPS: true,
        },
      },
    },
  },
};
