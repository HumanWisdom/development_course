import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61024Page } from './s61024.page';

describe('S61024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61024Page;
  let fixture: ComponentFixture<S61024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
