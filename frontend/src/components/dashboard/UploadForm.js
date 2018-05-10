import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { upload } from '../../actions/fileuploadActions'

class UploadForm extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            categoria: 'Escolha',
            filial: 'Escolha',
            observacao: '',
            file: null
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChangeCategoria = this.onChangeCategoria.bind(this)
        this.onChangeFilial = this.onChangeFilial.bind(this)
        this.onChangeObservacao = this.onChangeObservacao.bind(this)
        this.onChangeFile = this.onChangeFile.bind(this)
    }

    onChangeCategoria(e) {
        this.setState({categoria: e.target.value})
    }

    onChangeFilial(e) {
        this.setState({filial: e.target.value})
    }

    onChangeObservacao(e) {
        this.setState({observacao: e.target.value})
    }
    onChangeFile(e) {
        this.setState({file:e.target.files[0]})
    }

    onFormSubmit(e) {
        e.preventDefault()
        this.props.upload(
            this.state.file,
            this.state.categoria,
            this.state.filial,
            this.state.observacao)
    }

    render() {
        return (
            <div className="container my-3 p-3 bg-white rounded box-shadow w-75 border border-light">
                <h4 class="border-bottom border-gray pb-2 mb-0">Envio de arquivos</h4>
                <form className="mt-4" onSubmit={this.onFormSubmit}>
                    <div class="form-group">
                        <label>Categoria</label>
                        <select value={this.state.categoria}
                                class="custom-select mr-sm-2" 
                                onChange={this.onChangeCategoria}>                        
                            <option selected>Escolha...</option>
                            <option value="COORDENADOR">Coordenador</option>
                            <option value="PROFESSOR">Professor</option>
                            <option value="DIRETOR">Diretor</option>
                        </select>
                    </div>
                    <div class="form-group">    
                        <label>Filial</label>
                        <select value={this.state.filial}
                                class="custom-select mr-sm-2" 
                                onChange={this.onChangeFilial}>   
                            <option selected>Escolha...</option>
                            <option value="323">Conselheiro Lafaiete</option>
                            <option value="11">Barbacena</option>
                        </select>  
                    </div>
                    <div class="form-group">
                        <label>Observação</label>
                        <textarea value={this.state.observacao} 
                                  class="form-control" 
                                  onChange={this.onChangeObservacao} rows="3"></textarea>
                    </div>                    
                    <div class="form-group">
                        <label>Selecione o arquivo para upload</label>
                        <input type="file" class="form-control-file" onChange={this.onChangeFile} />
                    </div> 
                    <input type="submit" class="btn btn-primary" value="Enviar"/>                             
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({upload},dispatch)
export default connect(null, mapDispatchToProps)(UploadForm)