const BASEURL = 'https://jsonplaceholder.typicode.com/users/1/'


const api = {
    getTask: () => {
        return fetch('https://jsonplaceholder.typicode.com/todos')
        .then( response => response.json())
    }
}

export default api