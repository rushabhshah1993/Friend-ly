export const sortIds = data => {
    return data.sort((a, b) => a.split("_")[1] - b.split("_")[1]);
}

export const createNewId = data => {
    let sortedIds = sortIds(Object.keys(data));
    let largestId = +sortedIds.slice(-1)[0].split("_")[1];
    return `F_${largestId+1}`;
}
