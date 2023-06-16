import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117119Page } from './s117119.page';

describe('S117119Page', () => {
  // let   
    let component:  S117119Page;
  let fixture: ComponentFixture<S117119Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117119Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117119Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
