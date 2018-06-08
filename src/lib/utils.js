export const log = (...args) => __DEBUG__ ? console.log(...args) : undefined;
export const logError = (...args) => __DEBUG__ ? console.error(...args) : undefined;
export const renderIf = (test, component) => test ? component : undefined;
export const classToggler = options => Object.keys(options).filter(key => !!options[key]).join(' ');
export const map = (child, ...args) => Array.prototype.map.apply(child, args);
export const filter = (child, ...args) => Array.prototype.filter.apply(child, args);
export const reduce = (child, ...args) => Array.prototype.reduce.apply(child, args);

export const time = () => {
  let event = new Date();
  let day = event.toDateString();
  let time = event.toLocaleTimeString('en-US');
  return {date: day, time: time};
};
export const toFaher = (arr) => {
  let calc = ((arr-273.15)*1.8)+32;
  return Math.round(calc);
};

export const windDir = (arr) => {
  let directions = ['North', 'North-West', 'West', 'South-West', 'South', 'South-East', 'East', 'North-East'];
  return directions[Math.round(((arr %= 360) < 0 ? arr + 360 : arr) / 45) % 8];
};

export const Greenwich = (arr) => {
  let offset = '';
  if (arr < 0) {
    offset += '-';
  }
  offset += Math.abs(arr) / 3600;
  return offset;
};
