class Section {
    constructor({ renderer }, selector) {
        this._renderer = renderer;
        this._container = selector;
    }

    renderItems(items) {
        items.map( item  => {
            this._renderer(item);
        });
    }

    addItem(element) {
        this._container.prepend(element);
    }

    setItem(element) {
        this._container.prepend(element);
    }
}

export default Section;