import Observer from "../lib/observer";

class List extends Observer {
    createMarkup(state) {
        return `<ul>
        ${state.users.map(user => `<li>${user.name}</li>`.join("\n"))}
        </ul>`;
    }

    render(state, selector = "app") {
        const markup = this.createMarkup(state);
        const parent = document.getElementById(selector);

        parent.innerHTML = markup;
    }

    update(state) {
        this.render(state, "user-list-container");
    }
}

export default List;