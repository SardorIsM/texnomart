const initialProduct = {
    productInfo: []
}

const productReducer = (state = initialProduct, action) => {
    // console.log(state.productInfo.length);
    // console.log(state.productInfo[state.productInfo?.length - 1]?.id);
    switch (action.type) {
        case "ADD_TO_PRODUCT":
            return {
                productInfo: [...state.productInfo, action.data]
            }
        case "DELETE":
        if (action.data) {
            state.productInfo.splice(state.productInfo.indexOf(action.data), 1)
        }
            return {
                productInfo: [...state.productInfo]
            }
        default:
            return state
    }
}

export { productReducer }