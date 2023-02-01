class ApiFeture {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    searchForName() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {}

        this.query = this.query.find({ ...keyword })
        return this;
    }

    searchForEmail() {
        const keyword = this.queryStr.keyword ? {
            email: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {}

        this.query = this.query.find({ ...keyword })
        return this;
    }
}

module.exports = ApiFeture