export default function({ inStokOnly, setInStockOnly, searchKeyword, handleSearchKeyword }) {

    return (
        <form>
            <input 
                type="text"
                value={searchKeyword}
                onChange={(e) => handleSearchKeyword(e.target.value)} 
                placeholder="Seach Products..."    
            />
            <br />
            <label>
                <input type="checkbox"
                    checked={inStokOnly}
                    onChange={(e) => {setInStockOnly(e.target.checked)}} 
                />
                Only show products available in stock
            </label>
        </form>
    )
}