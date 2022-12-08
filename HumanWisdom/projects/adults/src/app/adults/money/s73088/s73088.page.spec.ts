import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73088Page } from './s73088.page';

describe('S73088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73088Page;
  let fixture: ComponentFixture<S73088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
