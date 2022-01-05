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
      // Running it like this wont work, as beforeEach wont wait for compileComponents to finish
      // causing component to not be sat when running the first spec.
    });
  }));

  it("should create the component", () => {

    expect(component).toBeTruthy();

  });


  it("should display the course list", () => {

    pending();

  });


  it("should display the first course", () => {

      pending();

  });


});


