const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

const storyTextRus = 'На улице было 94 градуса по Фаренгейту, так что :insertx: пошел прогуляться. Когда они добрались до :inserty:, они несколько мгновений смотрели в ужасе, затем :insertz:. Боб видел все это, но не удивился — :insertx: весит 300 фунтов, и день был жаркий.';
const insertXRu = ['Вилли-Гоблин', 'Большой папочка', 'Дед Мороз'];
const insertYRu = ['в бесплатной столовой', 'Диснейленд', 'Белый дом'];
const insertZRu = ['самопроизвольно воспламенился', 'растаял в луже на тротуаре', 'превратился в слизняка и уполз прочь'];

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
  } 

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', weight);

    let temperature =  Math.round((94 - 32) * 5 / 9) + ' stone';
    newStory = newStory.replace('300 pounds', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

  if(document.getElementById("ru").checked) {
    story.style.visibility = 'hidden';
    storyRu();
  }
}

function storyRu() {
  let newStoryRu = storyTextRus;

  let xItem = randomValueFromArray(insertXRu);
  let yItem = randomValueFromArray(insertYRu);
  let zItem = randomValueFromArray(insertZRu);

  newStoryRu = newStoryRu.replaceAll(':insertx:', xItem);
  newStoryRu = newStoryRu.replace(':inserty:', yItem);
  newStoryRu = newStoryRu.replace(':insertz:', zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStoryRu = newStoryRu.replace('Боб', name);
  } 

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14) + ' градус по Цельсию';
    newStoryRu = newStoryRu.replace('94 градуса по Фаренгейту', weight);

    let temperature =  Math.round((94 - 32) * 5 / 9) + ' стоуна';
    newStoryRu = newStoryRu.replace('300 фунтов', temperature);
  }

  story.textContent = newStoryRu;
  story.style.visibility = 'visible'
}