import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59152tPage } from './s59152t.page';

describe('S59152tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59152tPage;
  let fixture: ComponentFixture<S59152tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59152tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59152tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
