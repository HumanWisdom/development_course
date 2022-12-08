import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59022Page } from './s59022.page';

describe('S59022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59022Page;
  let fixture: ComponentFixture<S59022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
