import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59081Page } from './s59081.page';

describe('S59081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59081Page;
  let fixture: ComponentFixture<S59081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
