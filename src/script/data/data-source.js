class DataSource {
    static get BASE_URL() {
        return "https://www.themealdb.com/api/json/v1/1/"
    }

    static async getRandomData() {
        try {
            const response = await fetch(`${this.BASE_URL}random.php`)
            if (response.status === 200) {
                const responseJson = await response.json()
                return Promise.resolve(responseJson.meals)
            } else {
                return Promise.reject({
                    message: "Request not found !",
                    errorCode: response.status
                })
            }
        } catch {
            return Promise.reject({
                message: "Check your connection !",
                errorCode: 0
            })
        }
    }

    static async getCategoriesData() {
        try {
            const response = await fetch(`${this.BASE_URL}list.php?c=`)
            if (response.status === 200) {
                const responseJson = await response.json()
                return Promise.resolve(responseJson.meals)
            } else {
                return Promise.reject({
                    message: "Request not found !",
                    errorCode: response.status
                })
            }
        } catch {
            return Promise.reject({
                message: "Check your connection !",
                errorCode: 0
            })
        }
    }

    static async getSearchRecipe(keyword) {
        try {
            const response = await fetch(`${this.BASE_URL}search.php?s=${keyword}`)
            if (response.status === 200) {
                const responseJson = await response.json()
                return Promise.resolve(responseJson.meals)
            } else {
                return Promise.reject({
                    message: "Request not found !",
                    errorCode: response.status
                })
            }
        } catch {
            return Promise.reject({
                message: "Check your connection !",
                errorCode: 0
            })
        }
    }


    static async getSearchByCategory(keyword) {
        try {
            const response = await fetch(`${this.BASE_URL}filter.php?c=${keyword}`)
            if (response.status === 200) {
                const responseJson = await response.json()
                console.log(Promise.resolve(responseJson.meals));

                return Promise.resolve(responseJson.meals)
            } else {
                return Promise.reject({
                    message: "Request not found !",
                    errorCode: response.status
                })
            }
        } catch {
            return Promise.reject({
                message: "Check your connection !",
                errorCode: 0
            })
        }
    }
}

export default DataSource