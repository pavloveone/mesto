import Popup from "./Popup.js";

class PopupWithImage extends Popup{
    constructor(selector) {
        super(selector);
        this._name = this._selector.querySelector('.popup-image__caption');
        this._link = this._selector.querySelector('.popup-image__figure');
    }
    open({ name, link }) {
        super.open();
        this._link.src = link;
        this._name.alt = name;
        this._name.textContent = name;
    }
 }

 export default PopupWithImage;