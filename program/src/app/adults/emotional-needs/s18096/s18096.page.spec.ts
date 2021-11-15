import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18096Page } from './s18096.page';

describe('S18096Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18096Page;
  let fixture: ComponentFixture<S18096Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18096Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18096Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
