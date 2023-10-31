import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59142Page } from './s59142.page';

describe('S59142Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59142Page;
  let fixture: ComponentFixture<S59142Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59142Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59142Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
