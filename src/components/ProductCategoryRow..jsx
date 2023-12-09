export default function({ category }) {

    // component style
    const categoryStyle = {
        backgroundColor: 'green',
        textAlign: 'center'
    }
    return (
        <>
            <tr style={categoryStyle}>
                <td colSpan={2}>{category}</td>
            </tr>
        </>
    )
}