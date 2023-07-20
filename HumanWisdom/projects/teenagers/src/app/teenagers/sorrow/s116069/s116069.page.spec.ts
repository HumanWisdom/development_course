import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116069Page } from './s116069.page';

describe('S116069Page', () => {
      
    let component:  S116069Page;
  let fixture: ComponentFixture<S116069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
