import { TestRxjs } from './storage/repository/test-rxjs';
import { Component, OnInit } from '@angular/core';
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
import {
  Observable,
  exhaustMap,
  from,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
} from 'rxjs';

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
export class AppComponent implements OnInit {
  title = 'haosNo';

  public testRxjs = new TestRxjs();

  ngOnInit(): void {
    // this.test1();
    // this.test2();
    // this.test3();
    // this.test4();
    // this.test5();
    this.test6();
  }

  private test1(): void {
    this.testRxjs.start().subscribe((number) => {
      console.log('number', number);
    });
  }

  private test2(): void {
    this.testRxjs
      .start()
      .pipe(
        tap((number) => {
          console.log('number', number);
        })
      )
      .subscribe();
  }

  private test3(): void {
    this.testRxjs
      .start()
      .pipe(
        map((number) => {
          return number * 2;
        }),
        tap((number) => {
          console.log('number', number);
        })
      )
      .subscribe();
  }

  private test4(): void {
    this.testRxjs
      .start()
      .pipe(
        tap((number) => {
          console.log('number', number);
        }),
        mergeMap(() => {
          return this.secondObservable();
        }),
        tap((string) => {
          console.log('string', string);
        })
      )
      .subscribe();
  }

  private test5(): void {
    this.testRxjs
      .start()
      .pipe(
        tap((number) => {
          console.log('number', number);
        }),
        switchMap(() => {
          return this.secondObservable();
        }),
        tap((string) => {
          console.log('string', string);
        })
      )
      .subscribe();
  }

  private test6(): void {
    this.testRxjs
      .start()
      .pipe(
        tap((number) => {
          console.log('number', number);
        }),
        exhaustMap(() => {
          return this.secondObservable();
        }),
        tap((string) => {
          console.log('string', string);
        })
      )
      .subscribe();
  }

  private toObservable(): Observable<number[]> {
    return of([]);
  }

  private secondObservable(): Observable<string> {
    return from(['apple', 'orange', 'banana', 'tomato']);
  }
}
