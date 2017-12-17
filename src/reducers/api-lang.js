import data from '../data.json';

var getContent = function(language = 'fr'){
  return data.filter((obj) => obj.lang === language )[0]
}

export default getContent;
