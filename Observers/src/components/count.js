import Observer from "../lib/observer";

class Count extends Observer {
    createMarkup(state) {
        return `<span>
        user count: ${state.users.length}
        </span>`;
    }

    render(state, selector = "app") {
        const markup = this.createMarkup(state);
        const parent = document.getElementById(selector);

        parent.innerHTML = markup;
    }

    update(state) {
        this.render(state, "user-count-container");
    }
}

export default Count;