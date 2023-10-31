import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55005Page } from './s55005.page';

describe('S55005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55005Page;
  let fixture: ComponentFixture<S55005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
