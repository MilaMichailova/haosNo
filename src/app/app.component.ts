import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MilaHeaderComponent } from './components/mila-header/mila-header.component';
import { MilaHomeComponent } from './components/mila-home/mila-home.component';
import { MilaCoursesComponent } from './components/mila-courses/mila-courses.component';
import { MilaAboutUsComponent } from './components/mila-about-us/mila-about-us.component';
import { MilaVebinarsComponent } from './components/mila-vebinars/mila-vebinars.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MilaCertificateComponent } from './components/mila-certificate/mila-certificate.component';
import { MilaInVkComponent } from './components/mila-in-vk/mila-in-vk.component';
import { MilaReviewsComponent } from './components/mila-reviews/mila-reviews.component';
import { MilaArticlesComponent } from './components/mila-articles/articles.component';
import { MilaKvizComponent } from './components/mila-kviz/mila-kviz.component';
import { MilaFaqComponent } from './components/mila-faq/mila-faq.component';
import { MilaFooterComponent } from './components/mila-footer/mila-footer.component';
import { MilaFindASpecialistComponent } from './components/mila-find-a-specialist/mila-find-a-specialist.component';
import { MilaCallbackFormComponent } from './components/mila-callback-form/mila-callback-form.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    MilaHeaderComponent,
    MilaHomeComponent,
    MilaCoursesComponent,
    MilaAboutUsComponent,
    MilaVebinarsComponent,
    MatExpansionModule,
    MilaCertificateComponent,
    MilaInVkComponent,
    MilaReviewsComponent,
    MilaArticlesComponent,
    MilaKvizComponent,
    MilaFaqComponent,
    MilaFooterComponent,
    MilaFindASpecialistComponent,
    MilaCallbackFormComponent,
    MatButtonModule,
  ],
})
export class AppComponent {
  title = 'haosNo';
}
