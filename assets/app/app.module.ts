import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
//import { Location } from '@angular/common';

import { App }   from './app';
import { routes }   from './app.routes';
import { HeaderComponent }   from './header/header.component';
import { LoginComponent }   from './login/login.component';
import { HomeComponent }   from './home/home.component';
import { CatalogComponent }   from './catalog/catalog.component';
import { ProductSelectionComponent }   from './product-selection/product-selection.component';
import { ProductComponent }   from './product/product.component';
import { AdminProductComponent }   from './admin/admin-product/admin-product.component';
import { UserService } from './user.service';

@NgModule({
    declarations: [App, HeaderComponent, LoginComponent, HomeComponent, CatalogComponent, ProductSelectionComponent, ProductComponent, AdminProductComponent],
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [App],
    providers: [UserService]
})

export class AppModule {}