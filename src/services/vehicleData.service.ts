import http from "../http-common";
import IVehicleFormInputs from "../dataTypes/IVehicleDataType";

class VehicleDataService {
    
    getAll() {
        return http.get<Array<IVehicleFormInputs>>("");
    }

    create(data: IVehicleFormInputs) {
        return http.post<IVehicleFormInputs>("/vehicle",data);
    }
}

export default new VehicleDataService();