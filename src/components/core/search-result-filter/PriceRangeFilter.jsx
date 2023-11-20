import React, { useState } from 'react'
import ReactSlider from 'react-slider';

const PriceRangeFilter = ({ onPriceRangeChange }) => {
    const MIN = 0;
    const MAX = 10000;
    const [rangeValues, setRangeValues] = useState([MIN, MAX]);

    const handlePriceRangeChange = (values) => {
        setRangeValues(values);
        onPriceRangeChange(values);
    };

    return (
        <>
            <div className="price_range">
                <div className="filter_option">
                    <h5>Price Range</h5>
                </div>
                <div className="price_wrapper">
                    <fieldset className="filter-price">
                        <ReactSlider
                            className='slider'
                            onChange={handlePriceRangeChange}
                            value={rangeValues}
                            min={MIN}
                            max={MAX}
                            withTracks={true}
                        />
                        <div className="price-wrap">
                            <div className="price-wrap-1">
                                <span>Rs{rangeValues[0]}</span>
                            </div>
                            <div className="price-wrap_line">-</div>
                            <div className="price-wrap-2">
                                <span>Rs{rangeValues[1]}</span>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    )
}

export default PriceRangeFilter