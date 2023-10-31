import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61016Page } from './s61016.page';

describe('S61016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61016Page;
  let fixture: ComponentFixture<S61016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
