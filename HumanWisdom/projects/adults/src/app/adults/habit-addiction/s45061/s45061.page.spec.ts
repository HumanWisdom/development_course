import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45061Page } from './s45061.page';

describe('S45061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45061Page;
  let fixture: ComponentFixture<S45061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
