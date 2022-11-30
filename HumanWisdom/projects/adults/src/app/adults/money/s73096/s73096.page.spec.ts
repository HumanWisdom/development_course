import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73096Page } from './s73096.page';

describe('S73096Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73096Page;
  let fixture: ComponentFixture<S73096Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73096Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73096Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
