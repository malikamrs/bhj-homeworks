document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signin__form');
    const signin = document.getElementById('signin');
    const welcome = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');
  
    const savedUserId = localStorage.getItem('userId');
    if (savedUserId) {
      userIdSpan.textContent = savedUserId;
      signin.classList.remove('signin_active'); 
      welcome.classList.add('welcome_active');  
    }
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData
        });
  
        if (!response.ok) {
          throw new Error('Сервер вернул ошибку');
        }
  
        const data = await response.json();
  
        if (data.success) {
          const userId = data.user_id;
  
          localStorage.setItem('userId', userId);

          userIdSpan.textContent = userId;

          signin.classList.remove('signin_active');
          welcome.classList.add('welcome_active');
        } else {
          alert('Неверный логин/пароль');
        }
      } catch (err) {
        console.error(err);
        alert('Произошла ошибка. Попробуйте ещё раз позже.');
      }
    });
  });