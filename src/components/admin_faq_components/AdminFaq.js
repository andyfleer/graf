import React from 'react';
import base from '../../base';
import Themes from './Themes';
// import themes from '../../themes';
import DescEditForm from './DescEditForm';
import EditFaqForm from './EditFaqForm';

class AdminFaq extends React.Component {
    state = {
        themes: {},
        themeToEdit: {},
        themeToEditKey: {}
    }

    // loadThemes = () => {
    //     this.setState({ themes });
    // }

    componentDidMount = () => {
        this.ref = base.syncState("faq-base",{
            context: this,
            state: 'themes'
        });
        // this.loadThemes();
    }

    loadThemeToEdit = (key) => {
        this.setState({
            themeToEdit: this.state.themes[key],
            themeToEditKey: key
        });
    }
    
    updateThemeDesc = (descText) => {
        const themeToEdit = {
            ...this.state.themeToEdit,
            desc: descText
        }
        this.setState({
            themeToEdit
        });
    }

    updateFaq = (index, textQuest, textAns) => {
        const themeToEdit = {
            ...this.state.themeToEdit,
            faqs: {
                ...this.state.themeToEdit.faqs,
                [index]: {
                    quest: textQuest,
                    ans: textAns
                }
            }
         }
        this.setState({
            themeToEdit
        });
    }

    saveToBase = () => {
        const themes = {
            ...this.state.themes,
            [this.state.themeToEditKey]: this.state.themeToEdit
        }
        this.setState({
            themes
        });
    }

    render() {
        return (
            <div className="faqAdm">
                <h2>Частые Вопросы</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="sticky-top pt-3">
                                <Themes themes={ this.state.themes }
                                        loadThemeToEdit={ this.loadThemeToEdit }
                                        currentTheme={ this.state.themeToEdit } />
                            </div>
                        </div>
                        <div className="col-8 pt-3">
                            <DescEditForm 
                                updateThemeDesc={ this.updateThemeDesc } 
                                themeToEdit={ this.state.themeToEdit }
                                saveDescToBase={ this.saveToBase }
                                />
                            
                            { 
                                this.state.themeToEdit.faqs &&
                                Object.keys(this.state.themeToEdit.faqs).map(key => {
                                    console.log(key + "!");
                                    return (
                                        <EditFaqForm key={ key } index={ key }
                                            quest={ this.state.themeToEdit.faqs[key].quest }
                                            ans={ this.state.themeToEdit.faqs[key].ans }
                                            updateFaq={ this.updateFaq }
                                            saveToBase={ this.saveToBase }
                                            />
                                    )
                                }) 
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminFaq;