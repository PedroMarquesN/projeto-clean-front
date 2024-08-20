import { useRouter } from "next/router";

export default function Products() {

    const {query} = useRouter();
    return (
        <div>
        <h1>Products</h1>
        <p>{query.id}</p>
        </div>
    );
    }