import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SignupComponent } from './components/signup/signup.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'/login', pathMatch:'full'},
    {path:'login',component:LoginComponent, canActivate:[authGuard]},
    {path:'signup',component:SignupComponent, canActivate:[authGuard]},
    {path:'dashboard',component:DashboardComponent},
    {path:'customers',component:CustomersComponent},
    {path:'products',component:ProductsComponent},
    {path:'orders',component:OrdersComponent},
];
