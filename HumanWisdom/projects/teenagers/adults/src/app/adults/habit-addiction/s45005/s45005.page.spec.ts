import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45005Page } from './s45005.page';

describe('S45005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45005Page;
  let fixture: ComponentFixture<S45005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
