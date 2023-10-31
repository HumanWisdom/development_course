import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60098Page } from './s60098.page';

describe('S60098Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60098Page;
  let fixture: ComponentFixture<S60098Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60098Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60098Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
