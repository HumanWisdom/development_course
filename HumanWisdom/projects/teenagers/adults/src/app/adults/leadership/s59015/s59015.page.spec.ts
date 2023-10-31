import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59015Page } from './s59015.page';

describe('S59015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59015Page;
  let fixture: ComponentFixture<S59015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
