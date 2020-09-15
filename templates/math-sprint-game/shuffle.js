function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  // Пока остаются элементы для перемешивания...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    // Выберите оставшийся элемент...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    // И поменяйте его местами с текущим элементом.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
