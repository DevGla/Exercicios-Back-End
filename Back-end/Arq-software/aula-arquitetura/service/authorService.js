const isValidAuthor = async (first_name, middle_name, last_name) => {
    if(!first_name || typeof(first_name) !== 'string') return false;
    if(!middle_name || typeof(middle_name) !== 'string') return false;
    if(!last_name || typeof(last_name) !== 'string') return false;

    return true;
}

module.exports = {
    isValidAuthor,
}