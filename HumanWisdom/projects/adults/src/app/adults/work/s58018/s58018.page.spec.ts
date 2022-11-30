import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58018Page } from './s58018.page';

describe('S58018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58018Page;
  let fixture: ComponentFixture<S58018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
