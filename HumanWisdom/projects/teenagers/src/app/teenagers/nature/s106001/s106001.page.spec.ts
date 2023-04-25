import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S106001Page } from './s106001.page';

describe('S106001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S106001Page;
  let fixture: ComponentFixture<S106001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S106001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S106001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
