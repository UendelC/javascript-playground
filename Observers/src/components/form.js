class Form {
    constructor(state = {}) {
        this.appState = state;
    }

    createMarkup(state) {
        return `<div>
            <form id="add-user">
                <label for="username">Add a User</label>
                <input id="username" type="text" name="name">
                <button type="submit">Add</button>
            </form>
        </div>`;
    }

    render(selector = "app") {
        const markup = this.createMarkup(this.state);
        const parent = document.getElementById(selector);

        parent.innerHTML = markup;

        this.bindEvents();
    }

    bindEvents() {
        const form = document.getElementById("add-user");
    }
}