/* eslint-disable no-console */

import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Button, ConfigProvider, DatePicker, Tag, TimePicker, Typography, Space } from '@self';
const { RangePicker } = DatePicker;

function onSelect(dateString, date) {
  console.log('onSelect', dateString, date);
}

function onChange(dateString, date) {
  console.log('onChange: ', dateString, date);
}

const Demo = () => {
  const [value, setValue] = useState('date');
  const mode = value === 'date time' ? 'date' : value;
  const style =
    value === 'date time'
      ? {
          width: 380,
        }
      : {
          width: 254,
          marginBottom: 20,
        };
  return (
    <Space direction="vertical">
      <RangePicker
        mode="week"
        onChange={onChange}
        onSelect={onSelect}
        style={style}
        showTime={value === 'date time'}
        value={[dayjs('2024-02-24'), dayjs('2024-03-15')]}
        dayStartOfWeek={6}
        utcOffset={480}
      />
      {/* <RangePicker
        onChange={onChange}
        onSelect={onSelect}
        style={style}
        showTime={value === 'date time'}
        value={[dayjs('2024-02-24'), dayjs('2024-03-15')]}
        dayStartOfWeek={6}
      />
      <RangePicker
        onChange={onChange}
        onSelect={onSelect}
        style={style}
        showTime={value === 'date time'}
        dayStartOfWeek={6}
      /> */}
    </Space>
  );
};
export const DatePickerFix = () => <Demo />;
export default {
  title: 'DatePickerFix',
};
