import {useEffect} from 'react';
import {InnerComponent} from "./InnerComponent";

//лишняя обертка перед InnerComponent заставит размаунтить и замаунтить весь узел div и все что внутри
export const AppendToDom = ({isShowText}: { isShowText: boolean }) => {
    useEffect(() => {
        console.log('Первая картинка effect mount');
        return () => console.log('Первая картинка');
    }, []);

    if (isShowText) {
        return (
            <div>
                <div>
                    <InnerComponent title='InnerComponent Первая картинка' />
                    <span>Title</span>
                </div>
            </div>
        );
    }
    return (
        <div>
            <InnerComponent title='InnerComponent Первая картинка ' />
        </div>
    );
};
//так как  span и InnerComponent поменялись местами, происходит маунт-анмаунт
export const AppendToDomReversSpan = ({isShowText}: { isShowText: boolean }) => {
    useEffect(() => {
        console.log('Вторая картинка effect unmount');
        return () => console.log('Вторая картинка effect unmount');
    }, []);

    if (isShowText) {
        return (
            <div>
                <span>Title</span>
                <InnerComponent title='InnerComponent Вторая картинка ' />
            </div>
        );
    }
    return (
        <div>
            <InnerComponent title='InnerComponent Вторая картинка ' />
        </div>
    );
};
