import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59014Page } from './s59014.page';

describe('S59014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59014Page;
  let fixture: ComponentFixture<S59014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
