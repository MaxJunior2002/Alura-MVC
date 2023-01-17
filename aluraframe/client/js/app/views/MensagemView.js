class MensagemView{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){
        return model.texto ? `<P class="alert alert-info">${model.texto}</P>` : '<p></p>';
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}