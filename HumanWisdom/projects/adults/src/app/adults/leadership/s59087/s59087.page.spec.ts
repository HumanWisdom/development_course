import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59087Page } from './s59087.page';

describe('S59087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59087Page;
  let fixture: ComponentFixture<S59087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
