const obj = {
  Gas1: 0,
  Gas2: 0,
  Gas3: 36.07,
  Gas4: 0,
  Gas5: 0,
};
const cnum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
const useGis = []
for (let i in obj) {
  obj[i] && useGis.push({name:i.charAt(i.length - 1) + '阶' , num : obj[i]})
}
console.log(useGis);