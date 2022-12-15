import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59137Page } from './s59137.page';

describe('S59137Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59137Page;
  let fixture: ComponentFixture<S59137Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59137Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59137Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
