import React from "react";
import { connectHits } from "react-instantsearch-core";
import { BusinessCard } from "./BusinessCard";

const BusinessContent = ({ hits }) => {
    return (
        <div className="grid gap-1 xl:grid-cols-3 lg:grid-cols-2">
            {hits.map((hit) => (
                <BusinessCard key={hit.ObjectID} hit={hit} />
            ))}
        </div>
    );
}

export default connectHits(BusinessContent);
