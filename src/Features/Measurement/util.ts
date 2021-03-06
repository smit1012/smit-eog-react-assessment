import moment from 'moment';

export const formatter = (date: number) => {
  return formatDate(date, 'h:mm a');
};

export const labelFormatter = (date: any) => {
  return formatDate(date, 'MMM D YYYY, h:mm:ss a');
};

const map = new Map();
map.set('flareTemp', '#9d0303');
map.set('casingPressure', '#9d039d');
map.set('injValveOpen', '#03439d');
map.set('oilTemp', '#039d83');
map.set('tubingPressure', '#039d12');
map.set('waterTemp', '#9d5403');

export const getColor = (index: string) => {
  return map.get(index);
};

const formatDate = (date: any, format: string) => {
  return moment(new Date(date)).format(format);
};
