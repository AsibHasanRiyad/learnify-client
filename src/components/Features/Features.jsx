import { useEffect, useState } from "react";
import Feature from "./Feature";


const Features = () => {
    const [features, serFeatures] = useState([])
    useEffect(() =>{
        fetch('feature.json')
        .then(res => res.json())
        .then(data => serFeatures(data))
    },[])
    return (
        <div className=" text-5xl font-semibold text-white md:px-8 lg:px-20">
            <h1 className=" px-4 py-10">Explore <br /> Our website <span className=" text-green-400">Features</span> </h1>
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-8 lg:px-20">
            {
                features.map(feature => <Feature key={feature.id} feature={feature}></Feature>)
            }
            </div>
        </div>
    );
};

export default Features;