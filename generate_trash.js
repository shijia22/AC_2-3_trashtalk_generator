function sample(array) {
  return Math.floor(Math.random() * array.length)
}

function generateTrash(options) {
  // define things user might want
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // create a collection to store things user picked up
  let collection = ''

  if (options.person === 'engineer') {
    collection = '身為工程師'
    collection += task.engineer[sample(task.engineer)]
    collection += phrase[sample(phrase)]
    collection += '吧'
    return collection
  }

  if (options.person === 'designer') {
    collection = '身為設計師'
    collection += task.designer[sample(task.designer)]
    collection += phrase[sample(phrase)]
    collection += '吧'
    return collection
  }

    if (options.person === 'entrepreneur') {
      collection = '身為創業家'
      collection += task.entrepreneur[sample(task.entrepreneur)]
      collection += phrase[sample(phrase)]
      collection += '吧'
      return collection
    }
}
module.exports = generateTrash