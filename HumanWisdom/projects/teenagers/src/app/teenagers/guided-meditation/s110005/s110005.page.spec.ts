import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S110005Page } from './s110005.page';

describe('S110005Page', () => {
  // let  
    let component:  S110005Page;
  let fixture: ComponentFixture<S110005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S110005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S110005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
