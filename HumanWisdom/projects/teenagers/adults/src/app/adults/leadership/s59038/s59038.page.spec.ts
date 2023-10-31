import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59038Page } from './s59038.page';

describe('S59038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59038Page;
  let fixture: ComponentFixture<S59038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
