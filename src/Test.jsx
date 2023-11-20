import React, { useState } from 'react'

const Test = ({ requestData, onProductDetailsChange }) => {
    const { quantity } = requestData;
    // Convert quantity to a number
    const quantityNumber = parseInt(quantity, Infinity);
    // Create an array of length equal to quantityNumber
    const quantityArray = new Array(quantityNumber).fill(null);

    const [weightType, setWeightType] = useState(Array(quantityNumber).fill('Per Item'));
    const [batteryInclude, setBatteryInclude] = useState(Array(quantityNumber).fill('No'));
    const [packing, setPacking] = useState(Array(quantityNumber).fill({ isStockable: false, isTrunable: false }));


    // handleWeightTypeChange
    const handleWeightTypeChange = (index, value) => {
        const updatedWeightType = [...weightType];
        updatedWeightType[index] = value;
        setWeightType(updatedWeightType);
        // Pass the selected value and the index to the parent component
        onProductDetailsChange(index, 'weightType', value);
    };


    // handleBatteryIncludeChange
    const handleBatteryIncludeChange = (index, value) => {
        const updatedBatteryInclude = [...batteryInclude];
        updatedBatteryInclude[index] = value;
        setBatteryInclude(updatedBatteryInclude);
        // Pass the selected value and the index to the parent component
        onProductDetailsChange(index, 'batteryInclude', value);
    };


    // handlePackingChange
    const handlePackingChange = (index, field) => {
        const updatedPacking = [...packing];
        updatedPacking[index] = { ...updatedPacking[index], [field]: !updatedPacking[index][field] };
        setPacking(updatedPacking);
        // Pass the selected value and the index to the parent component
        onProductDetailsChange(index, 'packing', updatedPacking[index]);
    };


    // handleInputChange function
    const handleInputChange = (index, field, value) => {
        onProductDetailsChange(index, field, value);
    };


    return (
        <>
            {quantityArray.map((_, index) => (
                <div key={index}>
                    <div className="product_details_form mb-3">

                        {/* Product Category */}
                        <div className="product_form">
                            <div className="">
                                <label htmlFor={`category${index}`} className="form-label pro_form_label">Product Category</label>
                                <select
                                    className="form-select"
                                    id={`category${index}`}
                                    required
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

                        {/* Length */}
                        <div className="product_form">
                            <div className="">
                                <label htmlFor={`Length${index}`} className="form-label pro_form_label">Length(cm)</label>
                                <input
                                    type="text"
                                    className="form-control pro_form_input"
                                    id={`Length${index}`}
                                    name={`Length${index}`}
                                    placeholder="Length"
                                    required
                                    onChange={(e) => handleInputChange(index, 'Length', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Width */}
                        <div className="product_form">
                            <div className="">
                                <label htmlFor={`width${index}`} className="form-label pro_form_label">Width(cm)</label>
                                <input
                                    type="text"
                                    className="form-control pro_form_input"
                                    id={`width${index}`}
                                    name={`width${index}`}
                                    placeholder="Width"
                                    required
                                    onChange={(e) => handleInputChange(index, 'width', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Height */}
                        <div className="product_form">
                            <div className="">
                                <label htmlFor={`height${index}`} className="form-label pro_form_label">Height(cm)</label>
                                <input
                                    type="text"
                                    className="form-control pro_form_input"
                                    id={`height${index}`}
                                    name={`height${index}`}
                                    placeholder="Height"
                                    required
                                    onChange={(e) => handleInputChange(index, 'height', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Weight */}
                        <div className="product_form">
                            <div className="">
                                <label htmlFor={`weight${index}`} className="form-label pro_form_label">Weight(kg)</label>
                                <input
                                    type="text"
                                    className="form-control pro_form_input"
                                    id={`weight${index}`}
                                    name={`weight${index}`}
                                    placeholder="Weight"
                                    required
                                    onChange={(e) => handleInputChange(index, 'weight', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Weight Type */}
                        <div className="product_form">
                            <div className="">
                                <label htmlFor={`weightType${index}`} className="form-label pro_form_label">Weight Type</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={`flexRadioDefault${index}`}
                                        id={`flexRadioDefault1${index}`}
                                        value="Total"
                                        checked={weightType[index] === 'Total'}
                                        required
                                        onChange={() => handleWeightTypeChange(index, 'Total')}
                                    />
                                    <label className="form-check-label text-white" htmlFor={`flexRadioDefault1${index}`}>Total</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={`flexRadioDefault${index}`}
                                        id={`flexRadioDefault2${index}`}
                                        value="Per Item"
                                        checked={weightType[index] === 'Per Item'}
                                        required
                                        onChange={() => handleWeightTypeChange(index, 'Per Item')}
                                    />
                                    <label className="form-check-label text-white" htmlFor={`flexRadioDefault2${index}`}>Per Item</label>
                                </div>
                            </div>
                        </div>

                        {/* Packing */}
                        <div className="product_form">
                            <div className="">
                                <label htmlFor={`packing${index}`} className="form-label pro_form_label">Packing</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`stockable${index}`}
                                        checked={packing[index].isStockable}
                                        onChange={() => handlePackingChange(index, 'isStockable')}
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
                                        checked={packing[index].isTrunable}
                                        onChange={() => handlePackingChange(index, 'isTrunable')}
                                    />
                                    <label className="form-check-label text-white" htmlFor={`turnable${index}`}>
                                        Turnable
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Battery Include */}
                        <div className="product_form">
                            <div className="">
                                <label htmlFor={`batteryInclude${index}`} className="form-label pro_form_label">Battery Include</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={`flexRadioDefaultBattery${index}`}
                                        id={`flexRadioDefaultYes${index}`}
                                        value="Yes"
                                        checked={batteryInclude[index] === 'Yes'}
                                        required
                                        onChange={() => handleBatteryIncludeChange(index, 'Yes')}
                                    />
                                    <label className="form-check-label text-white" htmlFor={`flexRadioDefaultYes${index}`}>Yes</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={`flexRadioDefaultBattery${index}`}
                                        id={`flexRadioDefaultNo${index}`}
                                        value="No"
                                        checked={batteryInclude[index] === 'No'}
                                        required
                                        onChange={() => handleBatteryIncludeChange(index, 'No')}
                                    />
                                    <label className="form-check-label text-white" htmlFor={`flexRadioDefaultNo${index}`}>No</label>
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

export default Test