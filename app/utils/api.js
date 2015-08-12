var api = {
    url: 'http://127.0.0.1:5800',
    saveTodo(title){
        return fetch(this.url + '/todos/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: 'list',
                title: title
            })
        }).then((res) => res.json());
    },
    getTodos(){
        return fetch(this.url + '/todos/_all_docs?include_docs=true')
          .then((res) => res.json());
    },
    startSync(){
        return fetch(this.url + '/_replicate', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                source: 'todos',
                target: 'http://localhost:4984/todos/',
                continuous: true
            })
        }).then((res) => res.json());
    }
};

module.exports = api;