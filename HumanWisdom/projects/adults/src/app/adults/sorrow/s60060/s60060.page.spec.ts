import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60060Page } from './s60060.page';

describe('S60060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60060Page;
  let fixture: ComponentFixture<S60060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
