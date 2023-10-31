import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59110Page } from './s59110.page';

describe('S59110Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59110Page;
  let fixture: ComponentFixture<S59110Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59110Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59110Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
