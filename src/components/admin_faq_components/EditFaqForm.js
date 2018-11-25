import React from 'react';
import '../../css/style.css';

class EditFaqForm extends React.Component {
    ansRef = React.createRef();
    questRef = React.createRef();

    handleChange = (event) => {
        this.props.updateFaq(this.props.index, this.questRef.value.value, this.ansRef.value.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveToBase();
    }
    
    
    render() {
        return (
          <React.Fragment>
            <form onSubmit={ this.handleSubmit }  className="edit-form">
                <div className="from-group">
                    <label>Вопрос:</label>
                    <textarea 
                        onChange={ this.handleChange }
                        className="form-control"
                        value={ this.props.quest }
                        ref={ this.questRef }></textarea>
                </div>
                <div className="from-group">
                    <label>Ответ:</label>
                    <textarea 
                        onChange={ this.handleChange }
                        className="form-control"
                        value={ this.props.ans }
                        ref={ this.ansRef }></textarea>
                </div>
                <button type="submit" className="btn btn-outline-secondary btn-block mt-3">Сохранить</button>
            </form>
          </React.Fragment>
        );
    }
} 

export default EditFaqForm;