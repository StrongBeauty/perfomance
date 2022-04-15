import {useCallback, useMemo, useState} from "react";
import {Car} from "./Car";

export const List = () => {
    //setState из коробки закеширована, поэтому нет смысла оборачивать в useCallback
    const [, forceUpdate] = useState({})
    const [, setCount] = useState(0);
    const [someBigData, setSomeBigData] = useState({
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
    ]}
    )

    const onCarClick = useCallback((car: any, id: string) => {
        //Удаляем
        // setCarList((prevState => prevState.filter(car => car.id !== id)));
        //Добавляем  import SuperCar
        // setCarList((prevState => [...prevState, {id: String(new Date()), hp: 100, model: 'Бибика', img: SuperCar}]));
        if (typeof car === 'string') {
            return console.log(car, 'console log parent');
        }
        console.log(car.model, 'console log parent');
    }, []);

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

    const INNER_LIST = {inner_list_name: 'Моя мечта'};
    //Если в депенденси useMemo новую ссылку объект, useMemo работать не будет
    // Депенденси работают аналогично memo - примитивы по значению, не примитивы по ссылкам
    const MEMO_INNER_LIST = useMemo(() => INNER_LIST, []);

    return (
        <>
            <p>При нажатии я ререндерю всю страницу</p>
            <button title='FORCE UPDATE'
                      onClick={forceUpdateHandler}>click</button>
            {someBigData.list.map((car => {
                console.log('render render');
                return (<Car
                    key={car.id}
                    {...{
                        title: 'Car Good props',
                        car,
                        onCarClick,
                        setCount,
                        changeModel,
                        nonPrimitive: [{id: 10}],
                        listName: INNER_LIST.inner_list_name
                    }}
                />);
            }))}
            {someBigData.list.map((car => {
                console.log('render Bad');
                return (<Car
                    key={car.id}
                    {...{
                        car,
                        title: 'Car Bad props',
                        onCarClick,
                        setCount,
                        changeModel,
                        nonPrimitive: INNER_LIST,
                        listName: INNER_LIST
                    }}
                />);
            }))}
        </>
    )
}
