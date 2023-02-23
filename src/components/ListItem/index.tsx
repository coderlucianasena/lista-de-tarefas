import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/item';

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}

export const LisItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <C.Container done={isChecked}>
            <input 
            type="checkbox" 
            checked={isChecked}
            onChange={e => setIsChecked(e.currentTarget.checked)} 
            />
            <label>{item.name}</label>
        </C.Container>
    );
}