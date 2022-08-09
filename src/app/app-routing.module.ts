import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:"list",component:ProductlistComponent},
  {path:"edit",component:ProductEditComponent},
  {path:"list/edit/:id",component:ProductEditComponent},
  {path:"add",component:ProductAddComponent},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
