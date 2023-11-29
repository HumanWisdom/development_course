import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelationshipProblemsPage } from './relationship-problems.page';

describe('RelationshipProblemsPage', () => {
  let component: RelationshipProblemsPage;
  let fixture: ComponentFixture<RelationshipProblemsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationshipProblemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelationshipProblemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
