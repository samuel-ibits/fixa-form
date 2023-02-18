const formToJSON = (elements) =>
  [].reduce.call(
    elements,
    (data, element) => {
      data[element.name] = element.value;
      return data;
    },
    {}
  );

const handleFormSubmit = (event) => {
  // Stop the form from submitting since we’re handling that with AJAX.
  event.preventDefault();

  // Call our function to get the form data.
  const data = formToJSON(form.elements);
  
console.log(form.elements);
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({
		name: 'New Pirate Captain',
		image:'',
        icon:'',
        price: '',
        categories:''

	}),
	headers: {
		'Content-type': 'application/json; charset=UTF-8'
	}
}).then(function (response) {
	if (response.ok) {
		return response.json();
	}
	return Promise.reject(response);
}).then(function (data) {
	console.log(data);
}).catch(function (error) {
	console.warn('Something went wrong.', error);
});

//   // Demo only: print the form data onscreen as a formatted JSON object.
//   const dataContainer = document.getElementsByClassName('results__display')[0];

//   // Use `JSON.stringify()` to make the output valid, human-readable JSON.
//   dataContainer.textContent = JSON.stringify(data, null, '  ');

//   // ...this is where we’d actually do something with the form data...
};

const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);
