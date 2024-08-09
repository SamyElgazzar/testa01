import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortofolioComponent } from './components/portofolio/portofolio.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'home'},
    {path:'about',component:AboutComponent,title:'about'},
    {path:'portofolio',component:PortofolioComponent,title:'portofolio'},
    {path:'contact',component:ContactComponent,title:'contact'},
    {path:'**',component:NotfoundComponent},
];

