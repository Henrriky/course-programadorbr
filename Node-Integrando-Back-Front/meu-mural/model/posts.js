module.exports = {
    posts: [
        {
            id: "Sla",
            title: "Teste do Mural",
            description: "Descrição teste"
        }, 
        {
            id: "Teste",
            title: "Teste aleatorio",
            description: "Descrição teste"
        }, 
    ],

    getAll(){
        return this.posts
    },
    
    newPost(title, description) {
        this.posts.push({id: generateID(), title, description});
    },

    deletePost(id) {
        const index = this.posts.findIndex(post => post.id === id)
        if (index !== -1) {
            this.posts.splice(index, 1);
            return true;
        }

        return false
    }
}

function generateID() {
    return Math.random().toString(36).substr(2,9);
}