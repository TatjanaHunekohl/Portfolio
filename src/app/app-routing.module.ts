import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LegalNoteComponent } from './legal-note/legal-note.component';
import { ImprintComponent } from './imprint/imprint.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  
  { path: 'imprint' , component: ImprintComponent} ,
  { path: 'legal-note' , component: LegalNoteComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

