import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../app/features/counter/counterSlice";

import { useGetProductByIdQuery, useAddNewProductMutation } from "../app/services/dummyData";

export function Counter() {

    // const { data, isError, isLoading } = useGetProductByIdQuery(1);
    const [addNewProduct, {data, isError, isLoading}] = useAddNewProductMutation();

    if(isLoading) return <div>Loading...</div>;
    if(isError) return <div>Error occurred</div>;

    const handleAddProduct = async () => {
        const newProduct = {
            id: 1,
            title: 'New Product',
            description: 'This is a newly added product',
        }

         addNewProduct(newProduct)
    }

    console.log(data)

    return (
        <div>
            <div>
                <button onClick={handleAddProduct}>Submit </button>
            </div>
        </div>
    );
}
