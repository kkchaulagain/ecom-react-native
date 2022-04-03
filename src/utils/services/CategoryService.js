
import apiservice from '../../api/apiservice';
const getCategories = () => {
    return new Promise((resolve, reject) => {
        apiservice.get('/v1/categories?withChildren=1&parentOnly=1')
            .then(response => {
                resolve(response.data.data);
            })
            .catch(error => {
                reject(error);
            });
    }
    );
}

module.exports = {
    getCategories
}

