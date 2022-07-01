const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {   
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined);
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); // criei um arquivo todos.json no diretorio raiz e se quisermos testar o endereço relativo no lulgar do enredeço da api jsonplaceholder, basta colocar todos.json;
  request.send();
};

getTodos((err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

