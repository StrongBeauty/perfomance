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
                <span>Первая бибика с ремаунтом картинки</span>
                <AppendToDom {...{isShowText}} />
            </div>
            <div>
                <p>Вторая бибика с ремаунтом картинки</p>
                <AppendToDomReversSpan {...{isShowText}} />
            </div>
            <div>
                <p>Третья бибика без ремаунта картинки</p>
                <NotAppendToDomAmpersands {...{isShowText}} />
            </div>
            <div>
                <p>Четвертая бибика без ремаунта картинки</p>
                <NotAppendToDom {...{isShowText}} />
            </div>
            <div>
                <p>Пятая бибика без ремаунта картинки</p>
                <NotAppendWithKey {...{isShowText}} />
            </div>
            <button title='Change view' className='w-300' onClick={changeView}>click</button>
        </>
    );
};
