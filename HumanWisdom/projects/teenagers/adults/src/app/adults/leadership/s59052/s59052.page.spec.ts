import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59052Page } from './s59052.page';

describe('S59052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59052Page;
  let fixture: ComponentFixture<S59052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
