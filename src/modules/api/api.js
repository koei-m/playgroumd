const delay = ms => new Promise(res => setTimeout(res, ms));
async function get_time(flag) {
  console.log('async start');
  await delay(3000);
  console.log('async end');
  if (!flag) {
    throw 'Invalid';
  }
  const youbi = ['日', '月', '火', '水', '木', '金', '土'];
  const date1 = new Date();
  const date2 =
    date1.getFullYear() +
    '年' +
    (date1.getMonth() + 1) +
    '月' +
    date1.getDate() +
    '日' +
    date1.getHours() +
    '時' +
    date1.getMinutes() +
    '分' +
    date1.getSeconds() +
    '秒' +
    date1.getMilliseconds() +
    'ミリ秒' +
    youbi[date1.getDay()] +
    '曜日'; // 0は日曜日～6は土曜日
  return date2;
}

async function get_name(name) {
  console.log('async start');
  await delay(3000);
  console.log('async end');
  if (!name) {
    throw 'Invalid';
  }
  return name;
}

export default {get_name, get_time};
