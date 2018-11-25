import React from 'react';
import '../../css/style.css';

class DescEditForm extends React.Component {
    textRef = React.createRef();

    handleChange = (event) => {         
        this.props.updateThemeDesc(this.textRef.value.value);

    }

    processForm = (event) => {
        event.preventDefault();
        this.props.saveDescToBase();
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={ this.processForm } className="edit-form">
                    <div className="form-group">
                        <label>Коментарий к категории</label> 
                        <textarea 
                            className="form-control" 
                            ref={ this.textRef } 
                            onChange={ this.handleChange } 
                            value={ this.props.themeToEdit.desc }>
                        </textarea>
                    </div>
                    <button className="btn btn-outline-secondary btn-block" type="submit">Сохранить</button>
                </form>
            </React.Fragment>
        );
    }
}

export default DescEditForm;