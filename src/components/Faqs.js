import React from 'react';
import uuid from 'uuid';
import Qa from './Qa';

class Faqs extends React.Component {
    render() {
        const themeToShow = this.props.themeToShow;
        const faqs = themeToShow.faqs;
        return (
            <React.Fragment>
                <h2>{ themeToShow.themeTitle }</h2>
                <p>{ themeToShow.desc }</p>
                <dl>
                    {
                        faqs && Object.keys(faqs).map(key => {
                                return (
                                    <Qa key={ uuid() } question={ faqs[key].quest } answer={ faqs[key].ans } />              
                                )
                        })
                    }
                </dl>
            </React.Fragment>
        )
    }
}

export default Faqs;