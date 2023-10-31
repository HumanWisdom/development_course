import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73094Page } from './s73094.page';

describe('S73094Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73094Page;
  let fixture: ComponentFixture<S73094Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73094Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73094Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
