import React from 'react';
import AdminFaq from './admin_faq_components/AdminFaq';
import '../css/style.css';

class Admin extends React.Component {

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="admin-h1">Административный модуль сайта grafnsk.ru</h1>
                            { this.props.match.params.adminId === 'faq' && <AdminFaq />}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Admin;