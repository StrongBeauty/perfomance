import {useState} from 'react';
import {AppendToDom, AppendToDomReversSpan} from './with-append';
import {NotAppendToDom, NotAppendToDomAmpersands, NotAppendWithKey} from './without-append';


//Как при условном рендеринге убрать лишние маунты и анмаунты компонент
//Мигающие ноды в девтулзах признак того, что происходит взаимодействие с дом
export const ExampleAppendToDom = () => {
    const [isShowText, setIsShowText] = useState(false);
    const changeView = () => setIsShowText(!isShowText);

    return (
        <>
            <div>
                <span>Первая картинка с ремаунтом </span>
                <AppendToDom {...{isShowText}} />
            </div>
            <div>
                <p>Вторая картинка с ремаунтом </p>
                <AppendToDomReversSpan {...{isShowText}} />
            </div>
            <div>
                <p>Третья картинка без ремаунта</p>
                <NotAppendToDomAmpersands {...{isShowText}} />
            </div>
            <div>
                <p>Четвертая картинка без ремаунта</p>
                <NotAppendToDom {...{isShowText}} />
            </div>
            <div>
                <p>Пятая картинка без ремаунта</p>
                <NotAppendWithKey {...{isShowText}} />
            </div>
            <button onClick={changeView}>click</button>
        </>
    );
};
