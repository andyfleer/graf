import React from 'react';
import OrderPechatUL from './orders/OrderPechatUL';
import OrderPechatIP from './orders/OrderPechatIP';
import OrderPechatGerb from './orders/OrderPechatGerb';
import OrderPechatNotarius from './orders/OrderPechatNotarius';
import OrderPechatDoctor from './orders/OrderPechatDoctor';
import OrderPechatPersonal from './orders/OrderPechatPersonal';
import OrderPechatKids from './orders/OrderPechatKids';
import OrderPechatRecover from './orders/OrderPechatRecover';

class OrdersControllerPechat extends React.Component {
    state = {
        formNumber: 0
    }

    selectOrderForm = (event) => {
        event.preventDefault();
        const formNumber = event.target.value;
        this.setState({ formNumber });
    }


    renderForm = (formNumber) => {
        
        switch(Number(formNumber)) {
            case 0:
                return <OrderPechatUL />
    
            case 1:
                return <OrderPechatIP />
    
            case 2:
                return <OrderPechatGerb />
    
            case 3:
                return <OrderPechatNotarius />
            
            case 4:
                return <OrderPechatDoctor />

            case 5:
                return <OrderPechatPersonal />
            
            case 6: 
                return <OrderPechatKids />

            case 7:
                return <OrderPechatRecover />

                default:
    
        }
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
                {
                    this.renderForm(this.state.formNumber)
                }
            </React.Fragment>
        );
    }
}

export default OrdersControllerPechat;