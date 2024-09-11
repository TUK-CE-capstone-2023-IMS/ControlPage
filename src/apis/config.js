const BASE_URL = "http://localhost:8080"

export const API = {
    LOGIN : `${BASE_URL}/manager/login`,
    MY_PAGE: `${BASE_URL}/manager/info?managerId`,
    SIGN_OUT: `${BASE_URL}/manager/signout`,
    SIGN_IN:`${BASE_URL}/manager/signin`,
    LOG_LOAD:`${BASE_URL}/log/log/all?patientId`,
    PATIENTS_READ:`${BASE_URL}/patient/read`,
    PATIENT_UPDATE:`${BASE_URL}/patient/info`,
    PATIENT_READ: `${BASE_URL}/patient/info?patientId`

}
