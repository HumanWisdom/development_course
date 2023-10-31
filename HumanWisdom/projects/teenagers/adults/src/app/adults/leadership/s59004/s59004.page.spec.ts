import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59004Page } from './s59004.page';

describe('S59004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59004Page;
  let fixture: ComponentFixture<S59004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
