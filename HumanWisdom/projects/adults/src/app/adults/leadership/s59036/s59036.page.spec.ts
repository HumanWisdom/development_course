import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59036Page } from './s59036.page';

describe('S59036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59036Page;
  let fixture: ComponentFixture<S59036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
