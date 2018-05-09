import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { upload } from '../../actions/fileuploadActions'

class UploadForm extends React.Component {

    constructor(props) {
        super(props)
        this.setState({file: null})
        this.onChange = this.onChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onChange(e) {
        this.setState({file:e.target.files[0]})

    }

    onFormSubmit(e) {
        e.preventDefault()
        this.props.upload(this.state.file)
    }

    render() {
        return (
            <div className="container my-3 p-3 bg-white rounded box-shadow w-75 border border-light">
                <h6 class="border-bottom border-gray pb-2 mb-0">Envio de arquivos</h6>
                <form className="mt-4" onSubmit={this.onFormSubmit}>
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
                        <input type="file" class="form-control-file" onChange={this.onChange} />
                    </div> 
                    <input type="submit" class="btn btn-primary" value="Enviar"/>                             
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({upload},dispatch)
export default connect(null, mapDispatchToProps)(UploadForm)