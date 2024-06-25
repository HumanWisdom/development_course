import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelationshipProblemsAtPage } from './relationship-problems-at.page';

describe('RelationshipProblemsAtPage', () => {
  let component: RelationshipProblemsAtPage;
  let fixture: ComponentFixture<RelationshipProblemsAtPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationshipProblemsAtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelationshipProblemsAtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
