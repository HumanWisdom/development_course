import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73021Page } from './s73021.page';

describe('S73021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73021Page;
  let fixture: ComponentFixture<S73021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
