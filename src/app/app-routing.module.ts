import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
// import { ProjectHotelComponent } from './projects/project-hotel/project-hotel.component';
// import { ProjectStatusComponent } from './projects/project-status/project-status.component';
// import { Project141w85Component } from './projects/project141w85/project141w85.component';
// import { Project301w118Component } from './projects/project301w118/project301w118.component';
// import { Proyect131w82Component } from './projects/proyect131w82/proyect131w82.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { ProductComponent } from './product/product.component';
import { GenericProjectComponent } from './projects/genericProject/genericProject.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'termsAndConditions', component: TermsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: 'projects', component: ProjectsComponent },
  // { path: 'projects/131w82', component: Proyect131w82Component },
  // { path: 'projects/301w118', component: Project301w118Component },
  // { path: 'projects/hotel', component: ProjectHotelComponent  },
  // { path: 'projects/statusquo', component: ProjectStatusComponent },
  // { path: 'projects/141w85', component: Project141w85Component },
  { path: 'projects/:id', component: GenericProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
