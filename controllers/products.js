const fetch = require("node-fetch");
const url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

const PRODUCTS_PER_PAGE = 10;

exports.getIndex = (req, res, next) => {
    const page = +req.query.page; // turn string into number

    // if the website just got loaded, no page in the url yet,
    // so page is NaN, if it is NaN, then we want to redirect to page=1 so users can see the products
    if (isNaN(page)) {
        return res.redirect("/?page=1");
    }

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const start = (page -1) * PRODUCTS_PER_PAGE;
            res.render('products', {
                title: 'Cool Products',
                products: data.slice(start, start + PRODUCTS_PER_PAGE),
                currentPage: page,
                nextPage: page + 1,
                previousPage: page - 1,
                lastPage: Math.ceil(data.length / PRODUCTS_PER_PAGE)
            })
        })
        .catch(err => next(err));
}