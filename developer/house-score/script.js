const CONTAINER = document.querySelector('#container');

let MODEL = [];

const inputGroupContainer = document.createElement('div');
CONTAINER.appendChild(inputGroupContainer);

const addGroupButton = document.createElement('button');
addGroupButton.innerText = 'Add Input Group';
addGroupButton.onclick = addInputGroup;
CONTAINER.appendChild(addGroupButton);

const calculateButton = document.createElement('button');
calculateButton.innerText = 'Calculate';
calculateButton.onclick = calculate;
CONTAINER.appendChild(calculateButton);

function addInputGroup() {
  MODEL.push({ name: '', score: 50, weight: 5 });

  reload();
}

function reload() {
  inputGroupContainer.innerHTML = '';
  MODEL.forEach(function (inputGroup, index) {
    const group = document.createElement('div');
    const nameInput = document.createElement('input');
    nameInput.value = inputGroup.name;
    nameInput.placeholder = 'name';
    nameInput.onchange = function (event) {
      MODEL[index].name = event.target.value;
    };
    const scoreInput = document.createElement('input');
    scoreInput.type = 'number';
    scoreInput.max = 100;
    scoreInput.min = 0;
    scoreInput.value = inputGroup.score;
    scoreInput.placeholder = 'score';
    scoreInput.onchange = function (event) {
      MODEL[index].score = Number(event.target.value);
    };
    const weightInput = document.createElement('input');
    weightInput.type = 'number';
    weightInput.max = 10;
    weightInput.min = 1;
    weightInput.value = inputGroup.weight;
    weightInput.placeholder = 'weight';
    weightInput.onchange = function (event) {
      MODEL[index].weight = Number(event.target.value);
    };
    group.appendChild(nameInput);
    group.appendChild(scoreInput);
    group.appendChild(weightInput);
    inputGroupContainer.appendChild(group);
  });
}

function calculate() {
  console.log(MODEL);
  const scoresToAverage = [];
  MODEL.forEach(function (weightedScore) {
    for (let i = 0; i < weightedScore.weight; i++) {
      scoresToAverage.push(weightedScore.score);
    }
  });
  const average =
    scoresToAverage.reduce((a, b) => a + b) / scoresToAverage.length;
  const averageContainer = document.createElement('div');
  averageContainer.innerText = `${average}/100`;
  CONTAINER.appendChild(averageContainer);
}
