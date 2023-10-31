import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45059Page } from './s45059.page';

describe('S45059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45059Page;
  let fixture: ComponentFixture<S45059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
