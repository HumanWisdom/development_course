import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestScreenPage } from './test-screen.page';

describe('TestScreenPage', () => {
  let component: TestScreenPage;
  let fixture: ComponentFixture<TestScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
