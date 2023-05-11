import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
    const [van, setVan] = useState();

    const params = useParams();
    console.log(params)


    useEffect(() => {
        fetch(`http://localhost:3010/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data))
    }, [params.id])

    return (
        <div className="van-detail-container">
            {van ? (<div>
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h1>{van.name}</h1>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>) : (<div>Loading ...</div>)}
        </div>
    )
}