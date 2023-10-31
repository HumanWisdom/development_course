import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59117Page } from './s59117.page';

describe('S59117Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59117Page;
  let fixture: ComponentFixture<S59117Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59117Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59117Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
