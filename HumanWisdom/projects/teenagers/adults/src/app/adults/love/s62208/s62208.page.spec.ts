import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62208Page } from './s62208.page';

describe('S62208Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62208Page;
  let fixture: ComponentFixture<S62208Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62208Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62208Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
