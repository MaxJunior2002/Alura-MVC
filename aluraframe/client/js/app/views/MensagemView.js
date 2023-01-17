class MensagemView extends View{

    constructor(elemento){
        super(elemento);
    }

    _template(model){
        return model.texto ? `<P class="alert alert-info">${model.texto}</P>` : '<p></p>';
    }
}