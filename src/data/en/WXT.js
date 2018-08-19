import React from 'react';
import { Green, Stagger } from '../../components';
import { random, table, formatNumber } from '../../utils';

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
    '200': {
      logs: (
        <>
          <Green>tracking initialised</Green>. What do you want to track?
        </>
      ),
      ITEM: {
        '006': {
          getLogs: () => (
            <>
              velocity: <Green>{formatNumber(random(9500, 10500))} km/h</Green>
            </>
          ),
          endsOPS: true,
        },
        '010': {
          getLogs: () => (
            <Stagger from={8000} to={0} step={80} delay={2000}>
              {({ value }) => (
                <>
                  distance: <Green>{formatNumber(value)} m</Green>
                </>
              )}
            </Stagger>
          ),
          endsOPS: true,
        },
      },
    },
  },
};
