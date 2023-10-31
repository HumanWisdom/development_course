import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59009Page } from './s59009.page';

describe('S59009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59009Page;
  let fixture: ComponentFixture<S59009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
