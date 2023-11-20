import React, { useState } from 'react'

const ProductDetails = ({ requestData, onProductDetailsChange }) => {
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

    const handleInputChange = (index, field, value) => {
        setInputFields((prevFields) => {
            const newFields = [...prevFields];
            newFields[index] = {
                ...newFields[index],
                [field]: value
            };

            // Calculate the total price when weight is changed
            if (field === 'weight' || field === 'category') {
                const totalPrice = 200;
                newFields[index].totalPrice = totalPrice;
            }
            return newFields;
        });
        onProductDetailsChange(index, field, value);
    };


    return (
        <>
            {inputFields?.map((inputField, index) => (
                <div key={index}>
                    <div className="product_details_form mb-3">
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
                                    <option value="Chemical lequid">Chemical lequid</option>
                                    <option value="Glass Items">Glass Items</option>
                                    <option value="Paper">Paper</option>
                                    <option value="Heavy Metals">Heavy Metals</option>
                                </select>
                            </div>
                        </div>
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
                                <label htmlFor={`weight${index}`} className="form-label pro_form_label">
                                    Weight(kg)
                                </label>
                                <input
                                    type="text"
                                    className="form-control pro_form_input"
                                    id={`weight${index}`}
                                    aria-describedby="emailHelp"
                                    placeholder="Weight"
                                    value={inputField.weight || ''}
                                    onChange={(e) => handleInputChange(index, 'weight', e.target.value)}
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
                                        checked={inputField.weightType === 'total'}
                                        onChange={() => handleInputChange(index, 'weightType', 'total')}
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
                                        checked={inputField.weightType === 'perItem'}
                                        onChange={() => handleInputChange(index, 'weightType', 'perItem')}
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