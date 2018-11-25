import React from 'react';

class Themes extends React.Component {
    render() {
        return (
            <React.Fragment>
                {
                    Object.keys(this.props.themes).map(key => {
                        return (
                                <button key={key} type="button" onClick={ () => this.props.loadThemeToEdit(key) } 
                                className={`btn btn-outline-secondary btn-block d-block ml-2 
                                ${ this.props.themes[key].themeTitle === this.props.currentTheme.themeTitle && "active" }`}>
                                         { this.props.themes[key].themeTitle }
                                    </button>

                        );
                    })
                }
            </React.Fragment>
        );
    }
}

export default Themes;