import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61106Page } from './s61106.page';

describe('S61106Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61106Page;
  let fixture: ComponentFixture<S61106Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61106Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61106Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
