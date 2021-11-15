import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59007Page } from './s59007.page';

describe('S59007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59007Page;
  let fixture: ComponentFixture<S59007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
