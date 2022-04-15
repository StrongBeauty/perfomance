import {ChangeEvent, memo, useEffect} from "react";

export const Car = memo(({car, title, onCarClick, setCount, changeModel, nonPrimitive, listName}: any) => {

    useEffect(() => {
        console.log(title, car.model, 'mount');
        return console.log(title, car.model, 'unmount');
    }, []);

    const onClick = () => {
        onCarClick(car, car.id);
        setCount((prev: any) => prev + 1);
    };
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 1) return
        changeModel(car.id, e.target.value);
    };
    const listNameRender = (listName:  any) => {
        if (typeof listName === 'string') {
            return listName;
        }
        return listName.inner_list_name;
    };

    console.log(car.model, title, 'car');


    return (
        <div className='box-shadow car'>
            {listNameRender(listName)}
            <img src={car.img} alt={car.model} width='150px' height='110px'/>
            <input type='text'
                   value={car.model}
                   data-parent={car.id}
                   minLength={1}
                   onChange={onChange}
                   maxLength={10}/>
            <button title={car.model} onClick={onClick}>click</button>
        </div>

    );
});
