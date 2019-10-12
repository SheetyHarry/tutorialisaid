import React from 'react';
import styled from '@emotion/styled';
import {SermonSeriesList} from '@newfrontdoor/sermon';
import SermonBlock from './sermon-block';

const Sermons = styled('div')`
  display: grid;
`;
const series = {
  title: 'clob'
};
export default function SermonLayout({sermons}) {
  return (
    <Sermons>
      <SermonSeriesList
        loading={false}
        series={series}
        seriesSermonList={[sermons]}
      />
    </Sermons>
  );
}
