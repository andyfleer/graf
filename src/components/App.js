import React from 'react';
import Themes  from './Themes';
import Faqs from './Faqs';
import OrdersControllerPechat from './OrdersControllerPechat';
// import themes from '../themes';
import base from '../base';

class App extends React.Component {
    state = {
        themes: {},
        themeToShow: {}
    }

    // loadThemes = () => {
    //     this.setState({ themes });
    // }

    loadThemeQAs = (themeid) => {
        if(!themeid) {
            themeid = localStorage.getItem("faq-theme");
        } else {
            localStorage.setItem("faq-theme", themeid);
        }

        let themeToShow = this.state.themes[themeid];

        //this works in case users wants to load order forms
        //later in whatToRenderController we check it and load propriate cpmponent (FAQ or OrdersController)
        if(themeid === 'orders') {
            themeToShow = 'orders';
        }

        if(themeToShow) {
            this.setState({ themeToShow });
        }
    }

    componentDidMount = () => {
        this.ref = base.syncState("faq-base",{
            context: this,
            state: 'themes'
        });

        // this.loadThemes();

        this.timerID = setInterval(
            () => this.tick(),
            500
          );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.loadThemeQAs();
    }

    whatToRenderController = () => {
        if(this.state.themeToShow === 'orders') {
            return <OrdersControllerPechat />
            // return <h1>asdasd</h1>
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="sticky-top pt-3">
                                <Themes themes={this.state.themes} 
                                        loadThemeQAs={ this.loadThemeQAs } 
                                        currentTheme={ this.state.themeToShow } />
                            </div>
                        </div>

                        <div className="col-8 pt-3">
                            { 
                                Object.keys(this.state.themeToShow).length > 0  && <Faqs themeToShow={ this.state.themeToShow } />
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <React.Fragment>
                { this.whatToRenderController() }      
            </React.Fragment>
        );
    }
}

export default App;
