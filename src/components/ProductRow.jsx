
export default function({ product }) {

    const {name, price, stocked} = product;
    const classNames = stocked ? 'product' : 'product stocked-out';
    return (
        <>
            <tr>
                <td className={classNames}> { name } </td> 
                <td className="product"> { price } </td>
            </tr>
        </>
    );
} 