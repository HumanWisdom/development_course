import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55012Page } from './s55012.page';

describe('S55012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55012Page;
  let fixture: ComponentFixture<S55012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
