import React from "react";
import BusinessHighLight from "./BusinessHighLight";
import { BsFillStarFill } from "react-icons/bs"

export const BusinessCard = ({ hit }) => {

  return (
		<div className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-5 lg:w-96 h-40">
			<div className="flex-grow">
				<div className="flex justify-between">
					<div className="flex flex-col">
						<span className="text-gray-900 text-2xl font-extrabold">
							<BusinessHighLight hit={hit} attribute="business" />
						</span>
						<span className="text-gray-400 text-xs"> 
							<BusinessHighLight hit={hit} attribute="country" />
						</span>
					</div>
					<div className="flex align-middle justify-center">
						<BsFillStarFill className="text-yellow-400 text-4xl"/>
						<span className="absolute translate-y-2.5 text-gray-700 font-extrabold text-sm">
							<BusinessHighLight hit={hit} attribute="market_stall" />
						</span>
					</div>
				</div>	
			</div>
			<div className="flex-grow">
				<div className="flex gap-2">
					<BusinessHighLight hit={hit} attribute="sector[0]" />
					<BusinessHighLight hit={hit} attribute="sector[1]" />
				</div>
				<div>
					<span className="text-xs text-gray-700"> Market capitaliation: </span>
					<BusinessHighLight hit={hit} attribute="market_capitalization" />
					<span className="text-xs text-gray-700"> billions</span>
				</div>
			</div>
		</div>
  	);
}
