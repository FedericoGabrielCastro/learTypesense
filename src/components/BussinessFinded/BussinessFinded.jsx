import { Stats  } from "react-instantsearch-dom";

const BussinessFinded = () => {
    return (
        <Stats translations={{
            stats(nbHits, processingTimeMS) {
                let hitCountPhrase
                if (nbHits === 0) {
                  hitCountPhrase = 'No products'
                } else if (nbHits === 1) {
                  hitCountPhrase = '1 product'
                } else {
                  hitCountPhrase = `${nbHits.toLocaleString()} products`
                }
                return `${hitCountPhrase} found in ${processingTimeMS.toLocaleString()}ms`;
            },
        }}/>
    )
}

export default BussinessFinded