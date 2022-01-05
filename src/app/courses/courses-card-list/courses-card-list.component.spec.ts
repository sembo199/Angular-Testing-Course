import {async, ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {CoursesCardListComponent} from './courses-card-list.component';
import {CoursesModule} from '../courses.module';
import {COURSES} from '../../../../server/db-data';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {sortCoursesBySeqNo} from '../home/sort-course-by-seq';
import {Course} from '../model/course';
import {setupCourses} from '../common/setup-test-data';
import { MatDialog } from '@angular/material/dialog';




describe('CoursesCardListComponent', () => {

  let component: CoursesCardListComponent;
  let fixture: ComponentFixture<CoursesCardListComponent>;
  let el: DebugElement;

  // Adding waitForAsync fixes beforeEach not waiting for the response of compileComponents
  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [CoursesModule]
    }).compileComponents()
    .then(() => {
      // compileComponents runs async, so wait for it to be finished using .then()
      // Fixture can be used to generate a new component instance before each test
      fixture = TestBed.createComponent(CoursesCardListComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      // Running it like this wont work, as beforeEach wont wait for compileComponents to finish
      // causing component to not be sat when running the first spec.
    });
  }));

  it("should create the component", () => {

    expect(component).toBeTruthy();

  });


  it("should display the course list", () => {

    component.courses = setupCourses();

    // Fire changes to the DOM
    fixture.detectChanges();
    // console.log(el.nativeElement.outerHTML);

    const cards = el.queryAll(By.css('.course-card'));

    expect(cards).toBeTruthy('Could not find cards');
    expect(cards.length).toBe(12, 'Unexpected number of courses');

  });


  it("should display the first course", () => {

    component.courses = setupCourses();

    fixture.detectChanges();

    const course = component.courses[0];

    const card = el.query(By.css('.course-card:first-child')),
          title = card.query(By.css('mat-card-title')),
          img = card.query(By.css('img'));

    expect(card).toBeTruthy('Could not find course card');
    expect(title.nativeElement.textContent).toBe(course.titles.description);
    expect(img.nativeElement.src).toBe(course.iconUrl);
  });


});


