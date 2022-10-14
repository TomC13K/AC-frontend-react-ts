import http from "../http-common";
import ICustomerFormInputs from "../dataTypes/ICustomerDataType";

class CustomerDataService {
    
    getAll() {
        return http.get<Array<ICustomerFormInputs>>("");
    }

    create(data: ICustomerFormInputs) {
        return http.post<ICustomerFormInputs>("/customer",data);
    }
}

export default new CustomerDataService();
