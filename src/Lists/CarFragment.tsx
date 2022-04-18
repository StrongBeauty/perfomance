import { ChangeEvent, memo, useEffect } from 'react';
export const CHILD_LIST: any = [{
    id: '1',
    hp: 300,
    img: 'img',
},
    {
        id: '2',
        hp: 356,
        img: 'img',
    },

];
export const SOME_BIG_DATA = {
    title: 'SOME_BIG_DATA',
    list: CHILD_LIST
};

const listNameRender = (listName: any) => {
    if (typeof listName === 'string') {
        return listName;
    }
    return listName.inner_list_name;
};

export const OUTSIDE_LIST = [{id: 10}];

export const CarFragmented = memo(({
                                title,
                                img,
                                model,
                                id,
                                onChildClick,
                                setCount,
                                Change,
                                listName
                            }: any) => {
    console.log(model, title, 'render');
    console.log(listName,'listNAME')
    useEffect(() => {
        console.log('CarFragmented mount');
        return console.log('CarFragmented unmount');
    }, []);
    const onClick = () => {
        onChildClick(model, id);
        // @ts-ignore
        setCount(prev => prev + 1);
    };
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 1) return
        Change(id, e.target.value);
    };
    return (
        <div className='box-shadow car'>
            {listNameRender(listName)}
            <img src={img} alt='' width='150px' height='110px'/>
            <input type='text' value={model} onChange={onChange} maxLength={10}/>
            <button title={model} onClick={onClick}>click</button>
        </div>

    );
});
