import React, { useState } from 'react'

const ProductDetails = ({ requestData, onProductDetailsChange, flight }) => {
    const { quantity } = requestData;
    // Convert quantity to a number
    const quantityNumber = parseInt(quantity, Infinity);
    const [inputFields, setInputFields] = useState(Array(quantityNumber).fill({
        Length: '',
        width: '',
        height: '',
        weight: '',
        count: '',
        category: '',
        totalPrice: '',
        isStockable: false,
        isTrunable: false,
        isBatteryIncluded: false
    }));
    const [newTotalWeight, setNewTotalWeight] = useState(0);
    const [newTotalPrice, setNewTotalPrice] = useState(0);
    const [dimension, setDimension] = useState("");

    const handleInputChange = (index, field, value) => {
        setInputFields((prevFields) => {
            const newFields = [...prevFields];
            newFields[index] = {
                ...newFields[index],
                [field]: value
            };

            // Calculate the total price when weight or category is changed
            if (field === 'weight' || field === 'category') {
                // Assuming volumetric factor is 5000, you can adjust this value based on your requirements
                const volumetricFactor = 5000;

                // Calculate volumetric weight
                const length = parseFloat(newFields[index].Length) || 0;
                const width = parseFloat(newFields[index].width) || 0;
                const height = parseFloat(newFields[index].height) || 0;
                const volumetricWeight = (length * width * height) / volumetricFactor;

                // Update the state with the calculated volumetric weight
                newFields[index].weight = volumetricWeight;

                // Assuming flight is the object containing the flight details
                const flightCategories = flight?.price || [];

                // Get the selected category
                const selectedCategory = newFields[index].category;

                // Find the category object from flightCategories
                const selectedCategoryObj = flightCategories.find(categoryObj => categoryObj.category === selectedCategory);

                // Calculate the total price based on the selected category and volumetric weight
                const totalPrice = selectedCategoryObj ? selectedCategoryObj?.price * volumetricWeight : 0;

                // Update the state with the calculated total price
                newFields[index].totalPrice = totalPrice;

                // Calculate the total dimensions
                const totalDimensions = newFields.reduce(
                    (total, product) => {
                        return {
                            Length: total.Length + (parseFloat(product.Length) || 0),
                            width: total.width + (parseFloat(product.width) || 0),
                            height: total.height + (parseFloat(product.height) || 0),
                        };
                    },
                    { Length: 0, width: 0, height: 0 }
                );
                console.log(totalDimensions);
                setDimension(totalDimensions?.Length * totalDimensions?.width * totalDimensions?.height)
            }
            // Calculate the total weight and total price
            setNewTotalWeight(newFields.reduce((sum, product) => sum + parseFloat(product.weight || 0), 0));
            setNewTotalPrice(newFields.reduce((sum, product) => sum + parseFloat(product.totalPrice || 0), 0));

            return newFields;
        });

        onProductDetailsChange(index, field, value, newTotalWeight, newTotalPrice, dimension);
    };




    // console.log("flight from product details=>", flight);

    return (
        <>
            {inputFields?.map((inputField, index) => (
                <div key={index}>
                    <div className="product_details_form mb-3">
                        <div className="product_form">
                            <div className="">
                                <label htmlFor={`length${index}`} className="form-label pro_form_label">
                                    Length(cm)
                                </label>
                                <input
                                    type="text"
                                    className="form-control pro_form_input"
                                    id={`length${index}`}
                                    aria-describedby="emailHelp"
                                    placeholder="Length"
                                    value={inputField.Length || ''}
                                    onChange={(e) => handleInputChange(index, 'Length', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="product_form">
                            <div className="">
                                <label htmlFor={`width${index}`} className="form-label pro_form_label">
                                    Width(cm)
                                </label>
                                <input
                                    type="text"
                                    className="form-control pro_form_input"
                                    id={`width${index}`}
                                    aria-describedby="emailHelp"
                                    placeholder="Width"
                                    value={inputField.width || ''}
                                    onChange={(e) => handleInputChange(index, 'width', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="product_form">
                            <div className="">
                                <label htmlFor={`height${index}`} className="form-label pro_form_label">
                                    Height(cm)
                                </label>
                                <input
                                    type="text"
                                    className="form-control pro_form_input"
                                    id={`height${index}`}
                                    aria-describedby="emailHelp"
                                    placeholder="Height"
                                    value={inputField.height || ''}
                                    onChange={(e) => handleInputChange(index, 'height', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="product_form">
                            <div className="">
                                <label htmlFor={`category${index}`} className="form-label pro_form_label">
                                    Product Category
                                </label>
                                <select
                                    className="form-select"
                                    id={`category${index}`}
                                    required
                                    value={inputField?.category || ''}
                                    onChange={(e) => handleInputChange(index, 'category', e.target.value)}
                                >
                                    <option value="">Select...</option>
                                    {flight?.price?.map((categoryObj, categoryIndex) => (
                                        <option key={categoryIndex} value={categoryObj?.category}>
                                            {categoryObj?.category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="product_form">
                            <div className="">
                                <label htmlFor={`weight${index}`} className="form-label pro_form_label">
                                    Vol. Weight(kg)
                                </label>
                                <input
                                    type="text"
                                    className="form-control pro_form_input"
                                    id={`volumetricWeight${index}`}
                                    aria-describedby="emailHelp"
                                    placeholder="Weight"
                                    value={inputField.weight || ''}
                                    onChange={(e) => handleInputChange(index, 'weight', e.target.value)}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="product_form">
                            <div className="">
                                <label htmlFor={`price${index}`} className="form-label pro_form_label">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    className="form-control pro_form_input"
                                    id={`price${index}`}
                                    aria-describedby="emailHelp"
                                    placeholder="Price"
                                    value={inputField.totalPrice || ''}
                                    onChange={(e) => handleInputChange(index, 'totalPrice', e.target.value)}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="product_form">
                            <div className="">
                                <label className="form-label pro_form_label">Weight Type</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={`weightType${index}`}
                                        id={`total${index}`}
                                        checked={inputField.count === 'total'}
                                        onChange={() => handleInputChange(index, 'count', 'total')}
                                    />
                                    <label className="form-check-label text-white" htmlFor={`total${index}`}>
                                        Total
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={`weightType${index}`}
                                        id={`perItem${index}`}
                                        checked={inputField.count === 'perItem'}
                                        onChange={() => handleInputChange(index, 'count', 'perItem')}
                                    />
                                    <label className="form-check-label text-white" htmlFor={`perItem${index}`}>
                                        Per Item
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="product_form">
                            <div className="">
                                <label className="form-label pro_form_label">Packing</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`stockable${index}`}
                                        checked={inputField.isStockable || false}
                                        onChange={() => handleInputChange(index, 'isStockable', !inputField.isStockable)}
                                    />
                                    <label className="form-check-label text-white" htmlFor={`stockable${index}`}>
                                        Stockable
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`turnable${index}`}
                                        checked={inputField.isTurnable || false}
                                        onChange={() => handleInputChange(index, 'isTurnable', !inputField.isTurnable)}
                                    />
                                    <label className="form-check-label text-white" htmlFor={`turnable${index}`}>
                                        Turnable
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="product_form">
                            <div className="">
                                <label className="form-label pro_form_label">Battery Include</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={`batteryInclude${index}`}
                                        id={`yes${index}`}
                                        checked={inputField.isBatteryIncluded === true}
                                        onChange={() => handleInputChange(index, 'isBatteryIncluded', true)}
                                    />
                                    <label className="form-check-label text-white" htmlFor={`yes${index}`}>
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={`batteryInclude${index}`}
                                        id={`no${index}`}
                                        checked={inputField.isBatteryIncluded === false}
                                        onChange={() => handleInputChange(index, 'isBatteryIncluded', false)}
                                    />
                                    <label className="form-check-label text-white" htmlFor={`no${index}`}>
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{ background: "white" }} />
                </div>
            ))}
        </>
    )
}

export default ProductDetails