import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73073Page } from './s73073.page';

describe('S73073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73073Page;
  let fixture: ComponentFixture<S73073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
