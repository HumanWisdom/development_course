import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59170Page } from './s59170.page';

describe('S59170Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59170Page;
  let fixture: ComponentFixture<S59170Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59170Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59170Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
