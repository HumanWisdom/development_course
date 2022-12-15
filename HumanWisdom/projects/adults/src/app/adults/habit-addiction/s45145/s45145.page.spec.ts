import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45145Page } from './s45145.page';

describe('S45145Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45145Page;
  let fixture: ComponentFixture<S45145Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45145Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45145Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
