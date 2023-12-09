import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [inStokOnly, setInStockOnly] = useState(false);

    function handleSearch(value) {
        setSearchKeyword(value);
    }

    // console.log(searchKeyword)

    const productList = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ];

    function findProducts(product) {
        if (inStokOnly){
            return product.stocked && product.name.toLowerCase().includes(searchKeyword.toLocaleLowerCase());
        }
        return product.name.toLowerCase().includes(searchKeyword.toLocaleLowerCase());
    }

    const filteredProduct = productList.filter(product => findProducts(product));

    return (
        <>
            <SearchBar inStokOnly={inStokOnly} setInStockOnly={setInStockOnly} searchKeyword={searchKeyword} handleSearchKeyword={setSearchKeyword}/>

            <ProductTable productList={filteredProduct}/>
        </>

    );
}