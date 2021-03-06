export const Admin = {
    dashboard : '/Admin/AdminDashboard/',
    userProfile  : '/Admin/UserProfile/',
    orders : '/Admin/Orders/',
    courierService : '/Admin/CourierService/',
    transaction : '/Admin/Transaction/',
    category : '/Admin/Category/'
}
export default class EndPoints{
    static dashboard = '/Home'
    static admin = Admin
    static adminLogin = '/AdminLogin'
    static productsView = '/ProductView'
    static forgetPassword = "/forgetPassword/:code"
}