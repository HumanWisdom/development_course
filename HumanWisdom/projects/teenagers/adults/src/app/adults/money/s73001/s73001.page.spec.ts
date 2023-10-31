import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73001Page } from './s73001.page';

describe('S73001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73001Page;
  let fixture: ComponentFixture<S73001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
