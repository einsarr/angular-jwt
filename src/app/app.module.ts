import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EditEnseignantComponent } from './edit-enseignant/edit-enseignant.component';
import { NewEnseignantComponent } from './new-enseignant/new-enseignant.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppHttpInterceptor } from './services/app-http.interceptor';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AppErrorsComponent } from './app-errors/app-errors.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NewProductComponent,
    EditProductComponent,
    EnseignantComponent,
    EditEnseignantComponent,
    NewEnseignantComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    AdminTemplateComponent,
    AppErrorsComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
