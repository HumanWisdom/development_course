import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59127Page } from './s59127.page';

describe('S59127Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59127Page;
  let fixture: ComponentFixture<S59127Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59127Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59127Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
