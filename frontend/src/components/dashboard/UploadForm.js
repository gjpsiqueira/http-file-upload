import React from 'react'

class UploadForm extends React.Component {

    render() {
        return (
            <div className="container my-3 p-3 bg-white rounded box-shadow w-75 border border-info">
                <h6 class="border-bottom border-gray pb-2 mb-0">Envio de arquivos</h6>
                <form className="mt-4">
                    <div class="form-group">
                        <label>Categoria</label>
                        <select class="custom-select mr-sm-2" id="categoria" required>
                            <option selected>Escolha...</option>
                            <option>Coordenador</option>
                            <option>Professor</option>
                            <option>Diretor</option>
                        </select>
                    </div>
                    <div class="form-group">    
                        <label>Filial</label>
                        <select class="custom-select mr-sm-2" id="filial">
                            <option selected>Escolha...</option>
                            <option>Conselheiro Lafaiete</option>
                            <option>Barbacena</option>
                        </select>  
                    </div>
                    <div class="form-group">
                        <label>Observação</label>
                        <textarea class="form-control" id="observacao" rows="3"></textarea>
                    </div>                    
                    <div class="form-group">
                        <label>Selecione o arquivo para upload</label>
                        <input type="file" class="form-control-file" />
                    </div> 
                    <button type="submit" class="btn btn-primary">Enviar</button>                             
                </form>
            </div>
        );
    }
}

export default UploadForm