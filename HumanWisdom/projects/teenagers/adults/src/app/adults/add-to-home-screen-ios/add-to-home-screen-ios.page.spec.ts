import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddToHomeScreenIosPage } from './add-to-home-screen-ios.page';

describe('AddToHomeScreenIosPage', () => {
  let component: AddToHomeScreenIosPage;
  let fixture: ComponentFixture<AddToHomeScreenIosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToHomeScreenIosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddToHomeScreenIosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
