import React from "react";
import { connectHits } from "react-instantsearch-core";
import { BusinessCard } from "./BusinessCard";

const BusinessContent = ({ hits }) => {
    return (
        <div className="grid grid-cols-3 gap-1">
            {hits.map((hit) => (
                <BusinessCard key={hit.ObjectID} hit={hit} />
            ))}
        </div>
    );
}

export default connectHits(BusinessContent);
