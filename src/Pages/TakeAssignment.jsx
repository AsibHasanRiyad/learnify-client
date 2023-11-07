import { useLoaderData } from "react-router-dom";


const TakeAssignment = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>I am taking {data.title} </h1>
        </div>
    );
};

export default TakeAssignment;