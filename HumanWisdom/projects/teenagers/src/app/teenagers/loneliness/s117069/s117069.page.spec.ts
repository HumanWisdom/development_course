import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117069Page } from './s117069.page';

describe('S117069Page', () => {
  // let   
    let component:  S117069Page;
  let fixture: ComponentFixture<S117069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
