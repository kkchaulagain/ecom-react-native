import { useState, useEffect } from 'react';

import { getCategories } from '../services/CategoryService';

export default () => {

    const [categories, setCategories] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState(null);

    const fetchCategories = async () => {
        let response = getCategories();
        await response.then(res => {
            setCategories(res);
        })
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return [categories, setSelectedCategory, selectedCategory];
}