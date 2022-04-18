import {useCallback, useMemo, useState} from "react";
import {Child} from "./Child";
import {CarFragmented} from "./CarFragment";

/*Чтобы не создавать мемо, констакты надо хранить вне компонента, чтобы они каждый раз не пересоздавались,
* их лучше не передавать через пропсы, а сразу импортировать студа, куда нужно */

const INNER_LIST = {inner_list_name: 'Моя мечта'};
const SomeBigData = {
    title: 'SOME_BIG_DATA',
    list: [{
        id: '1',
        model: 'Porsche',
        hp: 300,
        img: 'img1',
    },
        {
            id: '2',
            model: 'Ford',
            hp: 356,
            img: 'img2',
        },
    ]
}
export const List = () => {
    //setState из коробки закеширована, поэтому нет смысла оборачивать в useCallback
    const [, forceUpdate] = useState({})
    const [, setCount] = useState(0);
    const [someBigData, setSomeBigData] = useState(SomeBigData)

    const onCarClick = useCallback((car: any, id: string) => {
        if (typeof car === 'string') {
            return console.log(car, 'console log parent');
        }
        console.log(car.model, 'console log parent');
    }, []);

    //Если убрать useCallback и новая ссылка будет причиной рендера ребенка
    const changeModel = useCallback((id: string, value: string) => {
        setSomeBigData((prevState => ({
            ...prevState, list: prevState.list.map(car => {
                if (car.id === id) {
                    return {...car, model: value};
                }
                return car;
            })
        })));
    }, []);

    console.log('List render')

    //Функции, которые не передаем ниже по дереву нет смысла оборачивать в useCallback в этом кейсе useCallback не работает
    const forceUpdateHandler = () => {
        forceUpdate({})

    };


    //Если в депенденси useMemo новую ссылку на объект, useMemo работать не будет
    // Депенденси работают аналогично memo - примитивы по значению, не примитивы по ссылкам
    const MEMO_INNER_LIST = useMemo(() => INNER_LIST, []);

    return (
        <>
            <div>
                <p>При нажатии я ререндерю всю страницу</p>
                <button title='FORCE UPDATE'
                        onClick={forceUpdateHandler}>click
                </button>
            </div>
            <div style={{margin: '30px'}}>
                {someBigData.list.map((car => {
                    console.log('render render');
                    return (<Child
                        key={car.id}
                        {...{
                            title: 'Good props',
                            car,
                            onCarClick,
                            setCount,
                            changeModel,
                            nonPrimitive: [{id: 10}],
                            listName: INNER_LIST.inner_list_name
                        }}
                    />);
                }))}
            </div>
            <div style={{margin: '30px'}}>
                {someBigData.list.map(car => {
                    console.log('render Good');
                    return (<CarFragmented
                        key={car.id}
                        title='Fragmented Good props'
                        nonPrimitive={MEMO_INNER_LIST}
                        model={car.model}
                        id={car.id}
                        hp={car.hp}
                        img={car.img}
                        listName={INNER_LIST.inner_list_name}
                        {...{onCarClick, setCount, changeModel}}
                    />);
                })}
            </div>
            <div style={{margin: '30px'}}>
                {someBigData.list.map((car => {
                    console.log('render Bad');
                    return (<Child
                        key={car.id}
                        {...{
                            car,
                            title: 'Bad props',
                            onCarClick,
                            setCount,
                            changeModel,
                            nonPrimitive: INNER_LIST,
                            listName: INNER_LIST
                        }}
                    />);
                }))}
            </div>
        </>
    )
}
