import { useState } from 'react';
import dishes from '../../../data/dishes';
import MenuItem from "./MenuItem";
import ItemDetails from './ItemDetails';
import './Menu.css'
import MenuItemModel from '../../../Models/MenuItemModel';

function Menu(): JSX.Element {

    let dishDetail;
    const [selected, setSelected] = useState<MenuItemModel>(null);

    const handleSelected = (dish: any) => setSelected(dish);

    selected !== null
        ? dishDetail = <ItemDetails dish={selected} />
        : dishDetail = <div className='placeholderText'> <p>Here you will see the details of a dish you've selected. Simply click on one and see! 🍕🍰🍗</p> </div>;

    return (
        <div className="container">

            <div className="filters">
                Select Category:

                <div className="filter">
                    <label>Main Course</label>
                    <input type="checkbox" name="meal" />
                </div>

                <div className="filter">
                    <label>Appetizer</label>
                    <input type="checkbox" name="appetizer" />
                </div>

                <div className="filter">
                    <label>Dessert</label>
                    <input type="checkbox" name="dessert" />
                </div>

            </div>

            <div className="row">
                <div className="col-6 scrollable-container">
                    {dishes.map((item, index) => (
                        <MenuItem dish={item} key={index} dishSelect={handleSelected} />
                    ))}
                </div>
                <div className="col-6 details-container">{dishDetail}</div>
            </div>
        </div>
    );
}

export default Menu;
