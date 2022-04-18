import { useEffect } from 'react';
import {InnerComponent} from "./InnerComponent";

export const NotAppendToDomAmpersands = ({isShowText}: { isShowText: boolean }) => {
    useEffect(() => {
        console.log('Третья картинка effect mount');
        return () => console.log('Третья бибика effect unmount');
    }, []);
//А тут все отрабатывает правильно, {} рассматривается как один и тот же блок
    return (
        <div>
            {isShowText && <span>Title</span>}
            <InnerComponent title='InnerComponent Третья картинка' />
        </div>
    );
};


//порядок компонент не поменялся - не перемонтируется
export const NotAppendToDom = ({isShowText}: { isShowText: boolean }) => {
    useEffect(() => {
        console.log('Четвертая картинка effect mount');
        return () => console.log('Четвертая картинка effect unmount');
    }, []);


    if (isShowText) {
        return (
            <div>
                <InnerComponent title='InnerComponent Четвертая картинка' />
                <span>Title</span>
            </div>
        );
    }
    return (
        <div>
            <InnerComponent title='InnerComponent Четвертая картинка' />
        </div>
    );
};

//У InnerComponent есть ключ, поэтому размаунта и маунта компонента не происходит
export const NotAppendWithKey = ({isShowText}: { isShowText: boolean }) => {
    useEffect(() => {
        console.log('Пятая картинка effect mount');
        return () => console.log('Пятая картинка effect unmount');
    }, []);

    if (isShowText) {
        return (
            <div>
                <span>Title</span>
                <InnerComponent key='InnerComponent' title='InnerComponent Пятая картинка' />
            </div>
        );
    }
    return (
        <div>
            <InnerComponent key='InnerComponent' title='Пятая картинка' />
        </div>
    );
};
