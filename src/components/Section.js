export default class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer; 
        this._container = containerSelector;
    }

    renderItems(res) {
        res.forEach(item => {
            this._renderer(item)
        })
        
    }
    
    appendCard(element) {
        this._container.append(element);
    }

    prependCard(element) {
        this._container.prepend(element);
    }
}