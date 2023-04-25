import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S106008Page } from './s106008.page';

describe('S106008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S106008Page;
  let fixture: ComponentFixture<S106008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S106008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S106008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
