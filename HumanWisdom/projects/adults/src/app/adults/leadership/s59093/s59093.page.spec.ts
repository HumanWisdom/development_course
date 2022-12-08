import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59093Page } from './s59093.page';

describe('S59093Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59093Page;
  let fixture: ComponentFixture<S59093Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59093Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59093Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
