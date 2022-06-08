document.addEventListener('DOMContentLoaded', (event) => {

  // PSEUDO-код:
  // 1 - перехватить событие отправки формы
  // 2 - предотвратить действие по умолчанию для этого события
  // 3 - отправить AJAX-сообщение на сервер
  // 4 - когда сообщение AJAX готово, отображаем новый бросок кубика

});

document.querySelector('#dice-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.target
    console.log(form)
  });
123
