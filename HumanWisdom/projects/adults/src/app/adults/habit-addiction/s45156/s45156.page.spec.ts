import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45156Page } from './s45156.page';

describe('S45156Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45156Page;
  let fixture: ComponentFixture<S45156Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45156Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45156Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
