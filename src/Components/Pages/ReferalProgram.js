import Cards from "../Cards";
import { useState } from "react";
import { isArray, isDict } from "../../Utilities/Utils";
import DynamicHeroIcon from "../DynamicHeroIcons";

const ToggleSwitch = ({ toggle, setToggle, className }) => {
  return (
    <div
      className={`${className} ${
        toggle ? " bg-blue-500" : "bg-gray-300"
      }  scale-75 lg:scale-90 overflow-hidden relative rounded-full`}
      onClick={setToggle}
    >
      <div
        className={`absolute ${
          toggle ? "border-blue-500" : "-translate-x-full border-gray-300"
        } border-2 z-50 right-0 transition-all duration-300 ease-out aspect-square h-full rounded-full bg-white`}
      ></div>
      <div
        className={`absolute ${
          toggle
            ? "text-white pl-1.5"
            : "translate-x-full text-gray-400 ml-0.5 "
        } left-0  transition-all duration-300 ease-out  h-full text-xs font-medium center-items`}
      >
        {toggle ? "ON" : "OFF"}
      </div>
    </div>
  );
};

const ReferalProgram = ({ CardsJson }) => {
  const Card = isArray(CardsJson) ? CardsJson : [];

  const [CoinsAccumulation, setCoinsAccumulation] = useState(false);
  const [Rewards, setRewards] = useState(false);
  const [ProductDetailsJson, SetProductDetailsJson] = useState({});

  const ProductDetails = isDict(ProductDetailsJson)
    ? "Product Details" in ProductDetailsJson ||
      isDict(ProductDetailsJson["Product Details"])
      ? ProductDetailsJson["Product Details"]
      : {}
    : {};

  const FieldDetailsList = [];
  Object.entries(ProductDetails).forEach(([FieldName, FieldValue], index) => {
    FieldDetailsList.push(
      <div className="w-full h-full" key={index}>
        <div className="grid grid-flow-row grid-cols-12 justify-between items-center h-full ">
          <div className="h-full text-gray-500 text-base font-thin  col-span-12">
            <div className="relative">
              <input
                type="text"
                id={FieldName}
                className="block px-2.5 pb-2.5 pt-4 w-full text-xs text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                defaultValue={FieldValue.value ? FieldValue.value : ""}
              />
              <label
                htmlFor={FieldName}
                className="absolute text-sm text-gray-500 font-medium duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white   px-2 peer-focus:px-2  peer-focus:text-blue-600 peer-focus:font-thin peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                {FieldName}
              </label>
              {FieldValue.Dropdown && (
                <label
                  id="dropdownDefault"
                  data-dropdown-toggle={`dropdown-${FieldName}`}
                  className="absolute text-sm font-medium rounded-full hover:scale-105 text-gray-500 peer-focus:bg-blue-600 focus:bg-blue-600 peer-focus:text-white right-5 transform -translate-y-1/2 top-1/2 transition-all duration-200 ease-in-out"
                >
                  <DynamicHeroIcon
                    className={"!w-4 !h-4"}
                    icon={"MdKeyboardArrowDown"}
                  />
                </label>
              )}
              {FieldValue.Dropdown && (
                <div
                  className="hidden peer-focus:block relative h-0 w-full"
                  id={`dropdown-${FieldName}`}
                >
                  <div
                    htmlFor={FieldName}
                    className=" absolute z-50 h-20 w-full  bg-white rounded divide-y opacity-100 overflow-y-scroll no-scrollbar overflow-x-hidden divide-gray-100 shadow"
                  >
                    <ul
                      clclassNames="py-1 text-sm bg-white opacity-100 text-gray-700"
                      aria-labelledby="dropdownDefault"
                    >
                      {FieldValue.Dropdown.map((item, index) => {
                        return (
                          <li key={index}>
                            <a
                              href="/"
                              className="block py-2 px-4 hover:bg-blue-100"
                            >
                              {item}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}

              {FieldValue.Unit && (
                <label
                  htmlFor={FieldName}
                  className="absolute text-sm font-medium rounded-md text-gray-500 peer-focus:bg-blue-600 peer-focus:text-white invisible peer-focus:visible right-2 p-1 duration-100 transform -translate-y-4 top-1/2"
                >
                  {FieldValue.Unit}
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="md:bg-gray-200 bg-white flex-grow flex flex-col p-0  md:px-8 lg:px-10 xl:px-20">
      <div className=" basis-12 bg-transparent center-items md:!justify-start ">
        <div className="text-gray-800 font-extrabold text-xl">
          Manage Rewards
        </div>
      </div>
      <div className="flex flex-col flex-grow basis-auto  sm:rounded-lg mb-0 sm:mb-4  md:mb-6 lg:mb-8 xl:mb-10 bg-white  px-20 lg:px-8 xl:px-9 2xl:px-10 py-0 sm:py-0 md:py-6 lg:py-8 xl:py-10 2xl:py-12">
        {/* Top Part */}
        <div className="grid grid-flow-col grid-cols-12 flex-shrink  basis-auto">
          <div className="flex flex-col col-span-12 lg:col-span-10 xl:col-span-9 2xl:col-span-8 ">
            <div className="basis-14  ">
              <div className="grid grid-cols-2 h-full center-items">
                <div className="text-gray-800 col-span-10 font-bold text-md">
                  Enable Rewards Shop
                </div>
                <div className="h-full col-span-2 center-items">
                  <ToggleSwitch
                    className={"w-12 h-6"}
                    toggle={Rewards}
                    setToggle={() => setRewards(!Rewards)}
                  />
                </div>
              </div>
            </div>
            <div className=" flex-grow basis-auto">
              <div className="grid grid-cols-2 h-full center-items !items-start">
                <div className="col-span-10">
                  <div className="text-gray-800  font-bold text-md ">
                    Coins Accumulation
                  </div>
                  <div className="text-gray-400  font-medium text-xs py-1 pr-2 md:4 lg:pr-6 xl:pr-8">
                    Enabling rewards shop automatically enables Coins
                    Accumulation. This allows employees to get Coins for every
                    ScoutPoints they earn and they can redeem their coins for
                    products in the Rewards Shop. Their Coin's balance will be
                    visible in Employee's Rewards Shop.
                    <div className="text-gray-500 font-bold italic text-xs pt-1 sm:pt-2  md:pt-3">
                      1 ScoutPoint = 1 Coin
                    </div>
                  </div>
                </div>
                <div className="h-full  col-span-2">
                  <ToggleSwitch
                    className={"w-12 h-6"}
                    toggle={CoinsAccumulation}
                    setToggle={() => setCoinsAccumulation(!CoinsAccumulation)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Part */}
        <div className=" flex  flex-col lg:flex-row gap-4   flex-grow basis-11/12">
          {/* Shop Inventory */}
          <div className="basis-auto md:basis-3/5 xl:basis-7/12 2xl:basis-9/12 flex-shrink ">
            <div className="center-items  lg:!justify-start ">
              <div className="text-gray-700  font-bold text-medium mt-4">
                Shop Inventory
              </div>
            </div>
            {/* Cards */}
            <div className="grid grid-flow-row grid-cols-12 justify-evenly gap-5 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5 mt-5 mr-5 ">
              <div
                className="col-span-12 sm:col-span-6 2xl:col-span-4  "
                onClick={() => SetProductDetailsJson({})}
              >
                <Cards className="h-full w-full  border-2 border-gray-400 border-dotted" />
              </div>
              {Card.map((card, index) => {
                return (
                  <div
                    className="col-span-12 sm:col-span-6 2xl:col-span-4 overflow-hidden shadow-lg rounded-lg transform  transition-all duration-500 ease-in-out "
                    key={index}
                    onClick={() => SetProductDetailsJson(card)}
                  >
                    <Cards
                      className="h-full w-full"
                      ImageSource={card.src}
                      ImageAlt={card.title}
                      key={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* Product details Pane */}
          <div className=" basis-auto flex-grow"></div>
          {/* Card Details  */}
          <div className="basis-auto md:basis-2/5 xl:basis-5/12 2xl:basis-3/12 flex-shrink hidden sm:block  ">
            <div className="  center-items  ">
              <div className="text-gray-700  font-bold text-medium mt-4">
                Product Details
              </div>
            </div>
            <div className="center-items flex flex-row">
              {/* Detail card */}
              {isDict(ProductDetailsJson) && "src" in ProductDetailsJson && (
                <div className="flex-grow rounded-lg   object-cover shadow-xl mt-5 mx-5 transition-all duration-300 ease-in-out ">
                  <div className="overflow-hidden rounded-t-lg  flex-shrink basis-1/3 ">
                    <img
                      className=" transform hover:scale-110 object-cover transition-all duration-300 ease-in-out"
                      src={ProductDetailsJson["src"]}
                      alt="Product "
                    />
                  </div>
                  <div className="grid grid-flow-col grid-rows-5 gap-5 p-3 sm:p-5 md:p-5 lg:p-6">
                    {FieldDetailsList}
                  </div>
                </div>
              )}

              {!(isDict(ProductDetailsJson) && "src" in ProductDetailsJson) && (
                <div className="flex-grow rounded-lg   object-cover shadow-xl mt-5 mx-5 transition-all duration-300 ease-in-out ">
                  <div className="center-items h-52 px-5">
                    <div className="text-gray-400 font-medium text-normal">
                      Please select a card to view details.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferalProgram;
