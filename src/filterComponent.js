import React, { useState } from "react";
export const FilterComponent = (props) => {
    const genderList = ["Men", "Women", "Boys", "Girls"];
    const [gender, setGender] = useState("");
    const [brandCheckList, setBrandCheckList] = useState([]);

    const genderChange = (event) => {
        setGender(event.target.value)
        setBrandCheckList([]); // Should set to empty when gender changes
        props.filterChangeHandler(event.target.value);
    }
    const brandChange = (index, event) => {
        if (event.target.checked) {
            setBrandCheckList([...brandCheckList, props.brandList[index]]);
            props.brandCheckListChangeHandler(gender, [...brandCheckList, props.brandList[index]]);
        } else {
            var brands = brandCheckList.filter(item => item !== props.brandList[index]);
            setBrandCheckList(brands); // 2nd parameter means remove one item only
            props.brandCheckListChangeHandler(gender, brands);
        }
    }
    return (
        <div>
            <h2>Filters</h2>
            {genderList.map((data, index) => {
                return (
                    <p key={index}>
                        <input
                            type="radio"
                            name="gender"
                            value={data}
                            onChange={genderChange} />
                        {data}
                    </p>
                )
            })}

            {props.brandList?.length ?
                <h2>Brand</h2> : ""
            }
            {props.brandList?.map((data, index) => {
                return (
                    <p key={index}>
                        <input
                            name={"brand" + index}
                            type="checkbox"
                            onChange={(event) => brandChange(index, event)} />
                        {data}
                    </p>
                )
            })}
        </div>
    );
};