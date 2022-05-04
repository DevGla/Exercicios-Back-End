const isValidBook = (title, author_id) => {
    if(!title || typeof(title) !== 'string') return false;
    if(!author_id || typeof(author_id) !== 'number') return false;

    return true;
}

module.exports = {
    isValidBook,
}