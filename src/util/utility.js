export const findBrandNames = (data) => {
    var flags = [], result = [], i;
    for (i = 0; i < data.length; i++) {
        if (flags[data[i].brand]) continue;
        flags[data[i].brand] = true;
        result.push(data[i].brand);
    }
    return result;
}

export const filterProductByBrands = (data, brands) => {
    if (brands.length == 0) {
        return { products: data };
    }
    var result = data.filter(item => brands.includes(item.brand));
    return { products: result };
}