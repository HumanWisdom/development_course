import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59026Page } from './s59026.page';

describe('S59026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59026Page;
  let fixture: ComponentFixture<S59026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
