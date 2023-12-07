const $userList = document.querySelector('#user-list')
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', () => {
  console.log('xhr.status:', xhr.status);
  console.log('xhr.response:', xhr.response);
  xhr.response.forEach((response) => {
    const $li = document.createElement('li');
    $li.textContent = response.name;
    $userList.append($li);
  })
})
xhr.send();
