import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53093Page } from './s53093.page';

describe('S53093Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53093Page;
  let fixture: ComponentFixture<S53093Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53093Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53093Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
