import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59010Page } from './s59010.page';

describe('S59010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59010Page;
  let fixture: ComponentFixture<S59010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
