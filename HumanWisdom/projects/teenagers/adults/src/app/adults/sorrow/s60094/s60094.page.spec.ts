import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60094Page } from './s60094.page';

describe('S60094Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60094Page;
  let fixture: ComponentFixture<S60094Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60094Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60094Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
