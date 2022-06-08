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

    const form = event.target;

    const response = await fetch('/rolls', {
      method: 'POST',
      body: JSON.stringify({
        dice: form.sides.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const taskHtml = await response.text();
    
    // console.log(form)        <form id="dice-form" method="post" action="/rolls">
    // console.log(response)    Response {type: 'basic', url: 'http://localhost:3000/rolls', redirected: false, status: 200, ok: true, …}
    // console.log(taskHtml)    <div class="die">......

    document.querySelector('#die-container').insertAdjacentHTML("beforeend", taskHtml);
  });
