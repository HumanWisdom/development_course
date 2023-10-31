import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59047Page } from './s59047.page';

describe('S59047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59047Page;
  let fixture: ComponentFixture<S59047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
