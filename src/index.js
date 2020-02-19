const towelSort = (matrix = []) => {
    const prepared_matrix = matrix.map((elem, i) =>
        i % 2 !== 0 ? elem.reverse() : elem
    );
    return [].concat.apply([], prepared_matrix);
};

module.exports = towelSort;
