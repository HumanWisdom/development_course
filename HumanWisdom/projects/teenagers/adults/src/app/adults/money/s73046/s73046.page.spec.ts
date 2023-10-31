import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73046Page } from './s73046.page';

describe('S73046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73046Page;
  let fixture: ComponentFixture<S73046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
