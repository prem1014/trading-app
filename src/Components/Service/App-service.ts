import axios from 'axios';

class AppService {
    //private static apiUrl = 'http://localhost:9000/api/';
    private static apiUrl = 'https://testapp.tradias.de/'
    constructor() {

    }

    public static getOrdersByCurrency(currency: Array<any>): Promise<any> {
        return axios.all([
            axios.get(this.apiUrl + 'lpmm-rest/bsdex/api/v1/openOrders/' + currency[0].id),
            axios.get(this.apiUrl + 'lpmm-rest/bsdex/api/v1/openOrders/' + currency[1].id),
            axios.get(this.apiUrl + 'lpmm-rest/bsdex/api/v1/openOrders/' + currency[2].id),
            axios.get(this.apiUrl + 'lpmm-rest/bsdex/api/v1/openOrders/' + currency[3].id)
        ])
    }

    public static getBalances(): Promise<any> {
        return axios.get(this.apiUrl + 'lpmm-rest/bsdex/api/v1/balance')
    }

}

export default AppService;