import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132096Page } from './s132096.page';

describe('S132096Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132096Page;
  let fixture: ComponentFixture<S132096Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132096Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132096Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
