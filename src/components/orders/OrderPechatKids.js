import React from 'react';
import sampleItems from './samples';


class OrderPechatKids extends React.Component {
    state = {
        formEnabled: false,
        sampleImages: '',
        chosenImage: '',
        sampleId: '',
        samplePrice: 0
    }

    constructor (props) {
        super(props);
        this.diameter0 = React.createRef();
        this.diameter1 = React.createRef();
        this.diameter2 = React.createRef();
        this.diameter3 = React.createRef();
        this.handler0 = React.createRef();
        this.handler1 = React.createRef();
        this.handler2 = React.createRef();
        this.tm0 = React.createRef();
        this.tm1 = React.createRef();
        this.tm2 = React.createRef();
        this.seeSample = React.createRef();
        this.itog = React.createRef();
        this.imagesOutput = React.createRef();
    }

    formEnableDisable = () => {
        this.setState({ formEnabled: !this.state.formEnabled });
    }

    componentDidUpdate = () => {
        this.culc();
    }


    loadImages = (event) => {
      const samples = sampleItems.pechat_kids[event.target.selectedIndex];

      const sampleImages = Object.keys(samples).map((element,i) => {
          return (
            <img src={`img/samples/${samples[element].img}`} 
                 className="img-sample" 
                 key={ i }
                 onClick={ () => this.showChosenImg(samples[element].img,samples[element].id,samples[element].price) }
                 alt="" />
          )
      })

      this.setState({ sampleImages });

}


showChosenImg = (chosenImage, sampleId, samplePrice) => {
    this.setState({ chosenImage, sampleId, samplePrice });
}



    culc = () => {
        let price = 0;
        if(this.handler0.current.checked) {
            if(this.diameter0.current.checked) {
                price += 330;
            }else if(this.diameter1.current.checked) {
                price += 330;
            }else if(this.diameter2.current.checked) {
                price += 425;
            }
        }

        if(this.tm0.current.checked) {
            price += 150;
        }else if(this.tm1.current.checked) {
            price += 50;
        }else{
            price += 0;
        }

        price += Number(this.state.samplePrice);
        price += (this.seeSample.current.checked ? 150 : 0);
        this.itog.current.value = price;

    }

    render() {
        return (
            <React.Fragment>
            <form>
            <div className="row">
                <div className="col">
                    <h3 className="text-center">
                        Форма заказа детской печати
                    </h3>          
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                <label className="col-form-label">Диаметр печати</label> 
                </div>
                <div className="col-md-8">
                <div className="row">
                    <div className="col-md-4 col text-center">
                        <label className="col-form-label d-block">
                        <input type="Radio" name="diameter" ref={ this.diameter0 } onClick={ this.culc } defaultValue="35" defaultChecked />
                        <br/>
                        35 мм</label>
                    </div>
                    <div className="col-md-4 col text-center">
                        <label className="col-form-label d-block">
                        <input type="Radio" name="diameter" ref={ this.diameter1 }  onClick={ this.culc } defaultValue="16" />
                        <br/>
                        16 мм</label>
                    </div>
                    <div className="col-md-4 col text-center">
                        <label className="col-form-label d-block">
                        <input type="Radio" name="diameter" ref={ this.diameter2 }  onClick={ this.culc } defaultValue="28" />
                        <br/>
                        28 мм</label>
                    </div>
                </div>
                </div>
            </div>

            <div className="row my-2">
                <div className="col-md-4">
                    <label className="col-form-label">
                            Текст в печать
                    </label>
                </div>
                <div className="col-md-8">
                        <textarea className="form-control" name="first"></textarea>
                        <input type="hidden" name="orgForm" defaultValue="" />
                        <input type="hidden" name="otherOrgForm" defaultValue="" />
                        <input type="hidden" defaultValue="" className="txtInput" name="ogrn" />
                        <input type="hidden" defaultValue="" className="txtInput" name="inn" />
                        <input type="hidden" defaultValue="" className="txtInput" name="orgPlace" />
                </div>
            </div>
            <div className="row my-2">
                <div className="col-md-4">
                    <label>
                        Образец оттиска
                    </label>   
                </div>
                <div className="col-md-2 text-center">
                    <input type="text" defaultValue={ this.state.sampleId } className="form-control text-center" id="chosen-sample-id" />
                    <input type="hidden" id="pr" value={this.state.samplePrice} />
                    <img  src={ `img/samples/${this.state.chosenImage}` } className="chosen-img" alt="" id="chosen-sample-img"  />
                </div>
                <div className="col-md-6">
                    <select className="form-control" onChange={ this.loadImages }>
                        <option value="1">Печати детские (символы 16 мм)</option>
                        <option value="2">Печати детские (мульти 28 мм)</option>
                        <option value="3">Печати детские (личные 35 мм)</option>
                        <option value="4">Печати детские (SMS)</option>
                    </select>
                    <br/>
                    <div id="imagesOutput" ref={ this.imagesOutput }>
                        {
                            this.state.sampleImages
                        }
                    </div>
                </div>
            </div>




            <div className="row my-2" id="file-download">
                <div className="col-4">
                    <label htmlFor="gFile">Прикрепить файл
                        <small>(Эмблема, символ; не более 2 Мбайт, в формате: CDR, EPS, PDF, TIFF, JPEG)</small> 
                    </label>   
                </div>
                <div className="col-8">
                    <input type="File" name="gFile"  className="form-control" />
                </div>
            </div>

            <div className="row my-5">
                <div className="col-4">
                    <label className="col-form-label">Оснастка (ручка)
                        <small>
                        (выберите вид оснастки)
                    </small>
                    </label> 
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col  handler-box text-center mb-3">
                            <label>
                            <div className="row">
                            <div className="col  text-center pt-3">
                                <input type="Radio" name="handler" ref={ this.handler0 } onClick={ this.culc } defaultChecked defaultValue="автоматическая" />
                            </div>
                            <div className="col text-left">
                                <img src="img/stamp_handlers/handler_auto.png" alt="" width="51" height="61" border="0" /><br/>
                            </div>
                            </div>
                                автоматическая
                            </label>
                        </div>
                    </div>
                </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <label className="col-form-label">Срок изготовления</label> 
                    </div>
                    <div className="col-8">
                    <div className="row">
                        <div className="col text-center">
                            <label>
                            <input type="Radio" name="tm" ref={ this.tm0 } defaultValue="экспресс" onClick={ this.culc } />
                            <br/>
                                30 минут<br/>Экспресс
                            </label>
                        </div>
                        <div className="col text-center">
                            <label>
                            <input type="Radio" name="tm" ref={ this.tm1 } defaultValue="срочный" onClick={ this.culc } />
                            <br/>
                            1 сутки<br/>срочный
                            </label>
                        </div>
                        <div className="col text-center">
                            <label>
                            <input type="Radio" name="tm" ref={ this.tm2 } defaultValue="обычный" onClick={ this.culc } defaultChecked/>
                            <br/>
                                3 дня<br/>обычный
                            </label>
                        </div>
                    </div>
                    </div>
                </div>


                <div className="row my-2">
                    <div className="col-md-4">
                        <label className="col-form-label">Ваши особые пожелания по заказу</label>
                    </div>
                    <div className="col-md-8">
                        <textarea className="form-control" name="comments"></textarea>				
                    </div>
                </div>



            <hr/>
            <div className="row">
            <div className="col">
                <div className="h3">Информация о заказчике</div>
            </div>
            </div>
            <div className="row my-2">
                <div className="col-4">
                    <label className="col-form-label">Оформить бухгалтерские документы на:</label>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <label>
                                <div className="col-1">
                                    <input type="radio" name="docs" defaultValue="ur" defaultChecked />
                                </div>
                                <div className="col">
                                    Юридическое лицо
                                </div>
                                </label>
                            </div>      
                        </div>
                        <div className="col">
                            <div className="row">
                                <label>
                                    <div className="col-1">
                                    <input type="radio" name="docs" value="pers" />
                                    </div>
                                    <div className="col">
                                        Физическое лицо 
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-4">
                <label htmlFor="orgForm" className="col-form-label">
                    Контактное лицо 
                    <small>(Ф.И.О.)</small>
                </label>
                </div>
                <div className="col-8">
                    <input type="text" defaultValue="" name="fio" className="form-control" />
                </div>
            </div>

            <div className="row my-2">
            <div className="col-4">
                <label className="col-form-label">Организация</label>
            </div>
            <div className="col-8">
                <input type="text" defaultValue="" className="form-control" name="organization" />
            </div>
            </div>

            <div className="row my-2">
            <div className="col-4">
                <label className="col-form-label">Контактный телефон</label>
            </div>
            <div className="col-8">
                <input type="text" defaultValue="" className="form-control" name="phone" />
            </div>
            </div>

            <div className="row my-2">
            <div className="col-4">
                <label className="col-form-label">Факс для согласования
                <small>(для проверки и согласования данных, выставления счета)</small>
                </label> 
            </div>
            <div className="col-8">
                <input type="text" defaultValue="" className="form-control" name="fax" />
            </div>
            </div>
                

            <div className="row my-2">
                <div className="col-4">
                <label className="col-form-label">E-mail
                </label> 
                </div>
                <div className="col-8">
                    <input type="text" defaultValue="" className="form-control" name="email" />
                </div>
            </div>

            <div className="row my-2">
                <div className="col-4">
                    <label className="col-form-label">
                        Дополнительная информация
                    </label> 
                </div>
                <div className="col-8">
                    <textarea className="form-control" name="additional"></textarea>
                </div>
            </div>

            <hr/>
            <div className="row">
                <div className="col text-center">
                При желании заказчика можно посмотреть оттиск своего заказа (печати, штампа, факсимилье и т.д.).
                Мы можем 1 раз переслать его Вам. Стоимость услуги - 150руб., формат
                файла - jpeg. Внесение изменений - в течении 30 минут после отправки, позднее - требуется оформить новый заказ за дополнительную плату.
                <label className="d-block mt-3">
                    <input type="Checkbox"  id="seeSample" ref={ this.seeSample } onClick={ this.culc } /> 
                    Посмотреть оттиск клише
                </label>
                </div>
            </div>
            <hr/>

            <div className="row my-2">
                <div className="col-4">
                    <label className="col-form-label">
                        Итого:
                    </label> 
                </div>
                <div className="col-8">
                    <input type="text" id="itog" ref={ this.itog } className="itogStyle" />
                </div>
            </div>


            <div className="row my-2">
                <div className="col">
                    <label className="col-form-label">
                        <label className="leftFormLabel">Я ознакомлен и согласен с условиями предоставления услуги
                            <input type="Checkbox" onChange={ this.formEnableDisable } id="checker" 
                            checked = { this.state.formEnabled } />
                        </label> 
                    </label> 
                </div>
            </div>

                

  

            <div className="row my-2">
                <div className="col">
                    <label> Укажите один из 3х адресов, где Вы хотели бы получить заказ: </label>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                <label>
                <div className="col addr-box my-3">
                <div className="row">
                    <div className="col-1">
                    <input type="radio" defaultValue="Мичурина, 3" name="gettingPlace" defaultChecked />
                    </div>
                    <div className="col">
                    Мичурина, 3
                    (центральный офис)
                    время работы 900-1800
                    </div>
                </div>
                </div>
                </label>
                </div>        
                <div className="col-md-4">
                <label>
                <div className="col addr-box my-3">
                    <div className="row">
                    <div className="col-1">
                        <input type="radio" defaultValue="пр. Дзержинского, 1-1" name="gettingPlace" />
                    </div>
                    <div className="col">
                        пр. Дзержинского, 1/1
                        (3 этаж, ТЦ "Солнечный")
                        время работы 900-1800
                    </div>
                    </div>
                </div>
                </label>
                </div>
                <div className="col-md-4">
        
                <label>
                <div className="col addr-box my-3">
                    <div className="row">
                        <div className="col-1">
                            <input type="radio" defaultValue="Б. Хмельницкого, 2" name="gettingPlace" />
                        </div>
                        <div className="col">
                            Б. Хмельницкого, 2
                            (2 этаж, ВНИПИЭТ)
                            время работы 900-1800
                        </div>
                    </div>
                    </div>
                </label>
                </div>

            </div>
            <div className="row my-5">
                <div className="col text-center">
                    <button 
                        className="btn btn-lg btn-warning" 
                        id="submitBut" 
                        disabled={ !this.state.formEnabled }
                        >Оформить Заказ</button>
                </div>
            </div>
            </form>
            </React.Fragment>

        );
    }
}

export default OrderPechatKids;