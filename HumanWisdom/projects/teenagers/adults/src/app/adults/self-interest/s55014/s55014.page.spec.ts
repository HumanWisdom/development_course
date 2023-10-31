import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55014Page } from './s55014.page';

describe('S55014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55014Page;
  let fixture: ComponentFixture<S55014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
