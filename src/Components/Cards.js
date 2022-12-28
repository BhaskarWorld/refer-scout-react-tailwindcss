import {isArray} from "../Utilities/Utils"

const Cards = ({ className, ImageSource, ImageAlt, CardTitle, CardSummary, CardTags }) => {
    const isTags = isArray(CardTags)
    const Tags = isTags ? CardTags : [];

    return (
        <div className={`h-full w-full  rounded-lg overflow-hidden shadow-xl hover:scale-110 transition-all ease-in-out  ${className}  `}>
            {!(isTags || CardSummary || CardTitle || ImageSource) &&
                <div className="center-items h-full w-full ">
                    <div className="text-gray-400 p-5 lg:p-2 xl:p-5 lg:text-sm xl:text-base font-medium text-center">Add a new product </div>
                </div>
            }
            {ImageSource &&
                <img className={`${(isTags && CardSummary && CardTitle) ? '' : 'h-full'} w-full  `}
                    src={ImageSource}
                    alt={ImageAlt} />
            }
            {CardSummary &&
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{CardTitle}</div>
                    <p className="text-gray-700 text-base">
                        {CardSummary}
                    </p>
                </div>
            }
            {isTags &&
                <div className="px-6 pt-4 pb-2">
                    {Tags
                        .map((tagName, index) => {
                            return (
                                <span key={index}
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    #{tagName}
                                </span>
                            )
                        })}
                </div>
            }
        </div>
    );
}

export default Cards;