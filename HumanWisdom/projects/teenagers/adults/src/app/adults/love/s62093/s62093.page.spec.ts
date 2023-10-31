import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62093Page } from './s62093.page';

describe('S62093Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62093Page;
  let fixture: ComponentFixture<S62093Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62093Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62093Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
