import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { InventoryProductComponent } from './Inventory/inventory-product/inventory-product.component';
import { InventoryPriceComponent } from './inventory/inventory-price/inventory-price.component';
import { Header1Component } from './header1/header1.component'
@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostListComponent,
    HeaderComponent,
    InventoryProductComponent,
    InventoryPriceComponent,
    Header1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
