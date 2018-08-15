import React from 'react';

export const Status = ({ POS, OPS, ITEM }) => (
  <div>
    {[
      `POS: ${POS || 'NONE'}`,
      OPS && `OPS: ${OPS}`,
      ITEM && `ITEM: ${ITEM}`,
    ].join(' ')}
  </div>
);
