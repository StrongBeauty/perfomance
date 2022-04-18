import {ChangeEvent, memo, useEffect} from "react";

export const Child = memo(({car: child, title, onCarClick, setCount, changeModel, listName}: any) => {

    useEffect(() => {
        console.log(title, child.model, 'mount');
        return console.log(title, child.model, 'unmount');
    }, []);

    const onClick = () => {
        onCarClick(child, child.id);
        setCount((prev: any) => prev + 1);
    };
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 1) return
        changeModel(child.id, e.target.value);
    };
    const listNameRender = (listName:  any) => {
        if (typeof listName === 'string') {
            return listName;
        }
        return listName.inner_list_name;
    };

    console.log(child.model, title, 'car');


    return (
        <div className='box-shadow car'>
            {listNameRender(listName)}
            <img src={child.img} alt={child.model} width='150px' height='110px'/>
            <input type='text'
                   value={child.model}
                   data-parent={child.id}
                   minLength={1}
                   onChange={onChange}
                   maxLength={10}/>
            <button title={child.model} onClick={onClick}>click</button>
        </div>

    );
});
