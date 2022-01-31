class Section {
    constructor({ items, renderer }, selector) {
        this._items = items;
        this._renderer = renderer;
        this._container = selector;
    }

    renderer() {
        this._items.map( item  => {
            this._renderer(item);
        });
    }

    addItem(element) {
        this._container.append(element);
    }
}

export default Section;