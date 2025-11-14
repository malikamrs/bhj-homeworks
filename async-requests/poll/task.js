const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const url = 'https://students.netoservices.ru/nestjs-backend/poll';


const renderPoll = (poll) => {
  const { title, answers } = poll.data;


  pollTitle.textContent = title;

  pollAnswers.innerHTML = '';

  answers.forEach((answerText) => {
    const button = document.createElement('button');
    button.className = 'poll__answer';
    button.textContent = answerText;

    button.addEventListener('click', () => {
      alert('Спасибо, ваш голос засчитан!');
    });

    pollAnswers.appendChild(button);
  });
};

const loadPoll = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      try {
        const data = JSON.parse(xhr.responseText);
        renderPoll(data);
      } catch (error) {
        console.error('Ошибка обработки данных опроса:', error);
      }
    } else {
      console.error('Не удалось получить данные опроса. Статус:', xhr.status);
    }
  });

  xhr.addEventListener('error', () => {
    console.error('Ошибка сети при получении опроса');
  });

  xhr.send();
};

loadPoll();