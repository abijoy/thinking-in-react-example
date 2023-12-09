import ProductCategoryRow from "./ProductCategoryRow.";
import ProductRow from "./ProductRow"

export default function({ productList }) {
    const fruits = productList.filter(product => product.category == 'Fruits');
    const vegetables = productList.filter(product => product.category == 'Vegetables');

    const fruitsList = fruits.map(fruit => <ProductRow key={`${fruit.name}-${fruit.price}`} product={fruit}/>);
    const vegetablesList = vegetables.map(veg => <ProductRow key={`${veg.name}-${veg.price}`}product={veg}/>);

    const noResultElement = <tr><td>No results</td></tr>;

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductCategoryRow category={'Fruits'}/>
                    {fruitsList.length ? fruitsList: noResultElement}

                    <ProductCategoryRow category={'Vegetables'} />
                    {vegetablesList.length ? vegetablesList: noResultElement}
                </tbody>


            </table>
        </>
    )
}