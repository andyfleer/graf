import React from 'react';

const RenderForm = (props) => {
    // switch(props.formNumber) {
    //     case 0:
    //         return <h1>Печать юридического лица</h1>

    //     case 1:
    //         return <h1>Печать индивидуального предпринимателя</h1>

    //     case 2:
    //         return <h1>Гербовая печать по ГОСТ Р51511-2001</h1>

    //         default:

    // }
    return (
        <h1>sd!!!!!!!!!</h1>
    )
}


class OrdersController extends React.Component {
    state = {
        formNumber: 0
    }

    selectOrderForm = (event) => {
        event.preventDefault();
        const formNumber = event.target.value;
        this.setState({ formNumber });
    }




    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <select className="form-control" value={ this.state.formNumber } onChange={ this.selectOrderForm }>
                        <option value="0">Печать юридического лица</option>
                        <option value="1">Печать индивидуального предпринимателя</option>
                        <option value="2">Гербовая печать по ГОСТ Р51511-2001</option>
                        <option value="3">Печать нотариуса</option>
                        <option value="4">Печать врача</option>
                        <option value="5">Печать личная</option>
                        <option value="6">Печать детская</option>
                        <option value="7">Восстановление печати по оттиску</option>
                    </select>
                </div>
                <RenderForm formNumber={ this.state.formNumber } />
            </React.Fragment>
        );
    }
}

export default OrdersController;