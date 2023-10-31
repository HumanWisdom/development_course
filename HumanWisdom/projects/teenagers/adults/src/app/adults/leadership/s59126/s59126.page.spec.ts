import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59126Page } from './s59126.page';

describe('S59126Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59126Page;
  let fixture: ComponentFixture<S59126Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59126Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59126Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
