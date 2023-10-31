import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59123Page } from './s59123.page';

describe('S59123Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59123Page;
  let fixture: ComponentFixture<S59123Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59123Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59123Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
